#!/usr/bin/env python3
"""HUMI blog agent.

    python agent/blog_agent.py generate   research + write + edit, then send the draft to Telegram
    python agent/blog_agent.py poll       read Telegram replies: publish approved drafts, drop expired ones

Layer 1 (cheap model) searches the web and writes the draft.
Layer 2 (better model) fact-checks it against Layer 1's research, edits it, and decides.
Nothing is published until you approve it in Telegram.

Environment (set by the GitHub workflows):
    ANTHROPIC_API_KEY, TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID   secrets
    SITE_DIR    checkout of the site (main branch), default "."
    STATE_DIR   checkout of the blog-agent-state branch, default "state"
"""
from __future__ import annotations

import datetime as dt
import json
import os
import pathlib
import re
import subprocess
import sys
import urllib.error
import urllib.parse
import urllib.request

import yaml

JST = dt.timezone(dt.timedelta(hours=9))
HERE = pathlib.Path(__file__).resolve().parent
CFG = yaml.safe_load((HERE / "config.yaml").read_text(encoding="utf-8"))

OK_WORDS = {"ok", "okay", "yes", "y", "公開", "はい", "おk", "ｏｋ"}
NO_WORDS = {"no", "n", "skip", "破棄", "いいえ", "却下"}


def now() -> dt.datetime:
    return dt.datetime.now(JST)


def jpy(usd: float) -> int:
    return round(usd * CFG["jpy_per_usd"])


# --------------------------------------------------------------------------- git

def git(repo, *args, check=True):
    r = subprocess.run(["git", "-C", str(repo), *args], capture_output=True, text=True)
    if check and r.returncode != 0:
        raise RuntimeError(f"git {' '.join(args)} failed: {r.stderr.strip()}")
    return r


def commit_and_push(repo, message: str) -> bool:
    """Commit everything in `repo` and push it. Returns False if there was nothing to commit."""
    git(repo, "add", "-A")
    if git(repo, "diff", "--cached", "--quiet", check=False).returncode == 0:
        return False
    git(repo, "commit", "-m", message)
    branch = git(repo, "rev-parse", "--abbrev-ref", "HEAD").stdout.strip()
    for _ in range(3):
        if git(repo, "push", "origin", f"HEAD:{branch}", check=False).returncode == 0:
            return True
        git(repo, "pull", "--rebase", "origin", branch, check=False)
    raise RuntimeError(f"could not push to {branch}")


# ------------------------------------------------------------------------- state

class State:
    """Everything the agent remembers between runs, kept on the blog-agent-state branch."""

    def __init__(self, path):
        self.dir = pathlib.Path(path)
        (self.dir / "pending").mkdir(parents=True, exist_ok=True)
        self.history = self._load("history.json", [])
        self.spend = self._load("spend.json", {})
        self.telegram = self._load("telegram.json", {"offset": 0})

    def _load(self, name, default):
        p = self.dir / name
        return json.loads(p.read_text(encoding="utf-8")) if p.exists() else default

    def _dump(self, name, data):
        (self.dir / name).write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")

    def save(self):
        self.history = self.history[-300:]
        self._dump("history.json", self.history)
        self._dump("spend.json", self.spend)
        self._dump("telegram.json", self.telegram)

    def pending(self) -> list[dict]:
        items = [json.loads(p.read_text(encoding="utf-8")) for p in (self.dir / "pending").glob("*.json")]
        return sorted(items, key=lambda d: d["created_at"])

    def save_pending(self, draft: dict):
        (self.dir / "pending" / f"{draft['id']}.json").write_text(
            json.dumps(draft, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")

    def drop_pending(self, draft_id: str):
        (self.dir / "pending" / f"{draft_id}.json").unlink(missing_ok=True)

    def set_status(self, draft_id: str, status: str, **extra):
        for h in self.history:
            if h["id"] == draft_id:
                h["status"] = status
                h.update(extra)

    def commit(self, message: str):
        self.save()
        commit_and_push(self.dir, message)


# ---------------------------------------------------------------------- telegram

class Telegram:
    def __init__(self, token: str, chat_id: str):
        self.token, self.chat_id = token, str(chat_id)

    def call(self, method: str, **params):
        req = urllib.request.Request(
            f"https://api.telegram.org/bot{self.token}/{method}",
            data=json.dumps(params).encode(),
            headers={"Content-Type": "application/json"},
        )
        try:
            with urllib.request.urlopen(req, timeout=60) as r:
                body = json.load(r)
        except urllib.error.HTTPError as e:  # keep the token out of error messages
            raise RuntimeError(f"Telegram {method} failed: {e.code} {e.read().decode(errors='ignore')[:300]}") from None
        if not body.get("ok"):
            raise RuntimeError(f"Telegram {method} failed: {body}")
        return body["result"]

    def send(self, text: str, buttons=None) -> int:
        params = {"chat_id": self.chat_id, "text": text[:4096], "disable_web_page_preview": True}
        if buttons:
            params["reply_markup"] = {"inline_keyboard": buttons}
        return self.call("sendMessage", **params)["message_id"]

    def send_long(self, text: str, limit: int = 3900) -> list[int]:
        """Split long text at paragraph breaks so each piece fits in one message."""
        chunks, cur = [], ""
        for para in text.split("\n\n"):
            while len(para) > limit:  # a single giant paragraph
                if cur:
                    chunks.append(cur)
                    cur = ""
                chunks.append(para[:limit])
                para = para[limit:]
            if cur and len(cur) + len(para) + 2 > limit:
                chunks.append(cur)
                cur = para
            else:
                cur = f"{cur}\n\n{para}" if cur else para
        if cur:
            chunks.append(cur)
        return [self.send(c) for c in chunks if c.strip()]

    def quiet(self, method: str, **params):
        """For nice-to-have calls (button spinners, removing buttons): never fail the run."""
        try:
            self.call(method, **params)
        except Exception as e:  # noqa: BLE001
            print(f"note: {method} failed: {e}", file=sys.stderr)


# ------------------------------------------------------------------------- money

class BudgetExceeded(Exception):
    pass


class Meter:
    def __init__(self, run_cap_usd: float):
        self.cap = run_cap_usd
        self.usd = 0.0
        self.searches = 0

    def add(self, role: str, usage):
        p = CFG["prices_usd_per_mtok"][role]
        inp = sum((getattr(usage, k, 0) or 0) for k in
                  ("input_tokens", "cache_creation_input_tokens", "cache_read_input_tokens"))
        out = getattr(usage, "output_tokens", 0) or 0
        stu = getattr(usage, "server_tool_use", None)
        n = (getattr(stu, "web_search_requests", 0) or 0) if stu else 0
        self.searches += n
        self.usd += inp / 1e6 * p["input"] + out / 1e6 * p["output"] + n * CFG["web_search_usd_per_1000"] / 1000
        if self.usd > self.cap:
            raise BudgetExceeded(f"this run reached about ¥{jpy(self.usd)} (limit ¥{CFG['max_jpy_per_run']})")


# ------------------------------------------------------------------------ models

ARTICLE_FIELDS = {
    "title": {"type": "string", "description": "Japanese title. Specific and informative, not clickbait."},
    "slug": {"type": "string", "description": "English URL slug: lowercase ascii words joined by hyphens, max 50 chars."},
    "description": {"type": "string", "description": "One Japanese sentence (max ~120字) shown in the blog list."},
    "topic_en": {"type": "string", "description": "One English line naming the core topic, used to avoid repeats."},
    "body_markdown": {"type": "string", "description": "The post body in Markdown. No H1; start with '## はじめに'."},
}
ARTICLE_TOOL = {
    "name": "submit_article",
    "description": "Submit the finished blog post.",
    "input_schema": {"type": "object", "properties": ARTICLE_FIELDS, "required": list(ARTICLE_FIELDS)},
}
REVIEW_TOOL = {
    "name": "submit_review",
    "description": "Submit your edited version of the post and your decision.",
    "input_schema": {
        "type": "object",
        "properties": {
            "decision": {
                "type": "string",
                "enum": ["publish", "revise", "hold", "duplicate"],
                "description": "publish: ready after your edits. revise: the writer must rewrite (say why in notes). "
                               "hold: not worth publishing. duplicate: same topic as a recent post.",
            },
            "notes": {"type": "string", "description": "In Japanese, 1-4 short lines: what you changed and any remaining concerns."},
            **ARTICLE_FIELDS,
        },
        "required": ["decision", "notes", *ARTICLE_FIELDS],
    },
}


def ask_for_tool(client, meter: Meter, role: str, prompt: str, tool: dict) -> dict:
    """Get the model's answer as a call to `tool`.

    Newer models don't accept a forced tool_choice, so we ask for the tool in the prompt
    and, if the model answers in plain text instead, ask once more."""
    name = tool["name"]
    messages = [{"role": "user", "content": f"{prompt}\n\nWhen you are done, call the {name} tool with the result. "
                                            f"Do not answer in plain text."}]
    for _ in range(2):
        r = client.messages.create(model=CFG["models"][role], max_tokens=12000, tools=[tool], messages=messages)
        meter.add(role, r.usage)
        if r.stop_reason == "max_tokens":
            raise RuntimeError(f"{name}: the model ran out of output tokens")
        for b in r.content:
            if b.type == "tool_use" and b.name == name:
                return dict(b.input)
        messages += [{"role": "assistant", "content": r.content},
                     {"role": "user", "content": f"Now call the {name} tool with the finished result."}]
    raise RuntimeError(f"{name}: the model did not return the tool call")


def norm_url(u: str) -> str:
    p = urllib.parse.urlsplit(u.strip())
    host = p.netloc.lower().removeprefix("www.")
    return f"{host}{p.path.rstrip('/')}"


def recent_entries(state: State) -> list[dict]:
    cutoff = now() - dt.timedelta(days=CFG["dedupe_days"])
    return [h for h in state.history
            if dt.datetime.fromisoformat(h["created_at"]) >= cutoff and h.get("status") != "failed"]


def recent_list(state: State) -> str:
    lines = [f"- {h['created_at'][:10]} [{h['status']}] {h['title']} ({h.get('topic', '')})" for h in recent_entries(state)]
    return "\n".join(lines) or "(none yet)"


def overlapping_post(sources: dict, state: State):
    """A recent post built on mostly the same pages is the same story."""
    new = {norm_url(u) for u in sources}
    if len(new) < 2:
        return None
    for h in recent_entries(state):
        old = {norm_url(u) for u in h.get("sources", [])}
        shared = new & old
        if len(shared) >= 2 and len(shared) >= 0.5 * len(new):
            return h
    return None


def research(client, meter: Meter, state: State):
    prompt = f"""You are the researcher for a Japanese blog on this subject:
{CFG['topic']}
Readers: {CFG['audience']}
Today is {now():%Y-%m-%d}.

Find ONE strong, specific story or theme from roughly the last two weeks. It must be niche and technical
enough that Japanese tech media has probably not covered it in depth.
Look in: {CFG['preferred_sources']}
Prefer US sources. Build the story from 2 to 4 good sources, not a single article.
Avoid general news that every outlet already repeated.

Do NOT pick a story that overlaps any of these recent posts:
{recent_list(state)}

Then write research notes in English:
- the story in two sentences, and why it matters
- the key technical details, numbers, names and dates, each tied to the page it came from
- what it could mean for Japan: {CFG['japan_angle']}
- anything uncertain or disputed
Only include facts from pages you actually read. Be concise but specific."""
    tools = [{"type": CFG["web_search_tool"], "name": "web_search", "max_uses": CFG["max_searches_per_run"]}]
    messages = [{"role": "user", "content": prompt}]
    notes, cited, seen = [], {}, {}
    for _ in range(5):  # long searches can pause; the API expects us to continue them
        r = client.messages.create(model=CFG["models"]["writer"], max_tokens=6000, tools=tools, messages=messages)
        meter.add("writer", r.usage)
        for b in r.content:
            if b.type == "text":
                notes.append(b.text)
                for c in getattr(b, "citations", None) or []:
                    if getattr(c, "url", None):
                        cited[c.url] = getattr(c, "title", None) or c.url
            elif b.type == "web_search_tool_result" and isinstance(b.content, list):
                for item in b.content:
                    if getattr(item, "url", None):
                        seen[item.url] = getattr(item, "title", None) or item.url
        if r.stop_reason != "pause_turn":
            break
        messages.append({"role": "assistant", "content": r.content})
    text = "".join(notes).strip()
    if not text:
        raise RuntimeError("research produced no notes")
    return text, (cited or seen)


def source_list(sources: dict) -> str:
    return "\n".join(f"- {t}: {u}" for u, t in sources.items()) or "(none)"


def write(client, meter: Meter, notes: str, sources: dict, feedback: str | None = None, previous: dict | None = None) -> dict:
    prompt = f"""Write a Japanese blog post for the HUMI tech blog.
Readers: {CFG['audience']}
Length: about {CFG['length']}.

Rules:
- Write it yourself, as an original analysis. Do not translate or closely follow any single source.
  No sentences copied from sources; quote at most a few words, and only when the exact wording matters.
- Use ONLY facts from the research notes below. Never invent numbers, names, quotes or dates.
- Tone: です・ます調, clear and technical. Explain specialist terms briefly the first time.
- Structure: no H1. Start with "## はじめに", use ## headings, end with "## まとめ" (short bullet summary),
  then "## 参考資料" listing the sources you used as Markdown links.
- Include a section on what this means for Japan (companies, manufacturing, investors) only where the notes support it.

RESEARCH NOTES:
{notes}

SOURCES:
{source_list(sources)}"""
    if feedback and previous:
        prompt += f"\n\nYOUR PREVIOUS DRAFT:\n{previous['body_markdown']}\n\nThe editor sent it back. Fix every point:\n{feedback}"
    return ask_for_tool(client, meter, "writer", prompt, ARTICLE_TOOL)


def edit(client, meter: Meter, notes: str, sources: dict, draft: dict, state: State) -> dict:
    prompt = f"""You are the senior editor of the HUMI Japanese tech blog. A junior writer produced the draft below
from the research notes below. Your job, in order:

1. Fact-check: every claim must be supported by the research notes. Remove or correct anything that is not.
2. Originality: the post must read as an original analysis, not a translation of one source.
   Rewrite any passage that follows a source too closely.
3. Duplicates: if this is the same topic as one of the recent posts listed below, choose "duplicate".
4. Quality: natural, professional Japanese (です・ます調); technical depth; clear structure; a specific title;
   no filler, hype or vague claims. Keep the length around {CFG['length']}. Keep the "## 参考資料" section with links.

Fix problems yourself and choose "publish" whenever you can. Choose "revise" only if it needs a full rewrite,
and "hold" if the story is weak or the facts are too thin.

RECENT POSTS:
{recent_list(state)}

RESEARCH NOTES:
{notes}

SOURCES:
{source_list(sources)}

DRAFT:
title: {draft['title']}
description: {draft['description']}
topic: {draft['topic_en']}

{draft['body_markdown']}"""
    return ask_for_tool(client, meter, "editor", prompt, REVIEW_TOOL)


TRANSLATION_FIELDS = {k: ARTICLE_FIELDS[k] for k in ("title", "description", "body_markdown")}
TRANSLATION_TOOL = {
    "name": "submit_translation",
    "description": "Submit the English version of the post.",
    "input_schema": {"type": "object", "properties": {
        "title": {"type": "string", "description": "English title."},
        "description": {"type": "string", "description": "One English sentence shown in the blog list."},
        "body_markdown": {"type": "string", "description": "The English post body in Markdown. No H1."},
    }, "required": ["title", "description", "body_markdown"]},
}


def translate(client, meter: Meter, article: dict) -> dict:
    """English version of the approved Japanese article, for the EN blog."""
    prompt = f"""Translate this Japanese blog post into natural, professional English for engineers and investors.
Keep the meaning, structure, numbers, names and every Markdown link exactly. Do not add or remove facts.
Translate headings too (for example "## 参考資料" becomes "## Sources", "## まとめ" becomes "## Summary").
Write it the way a native English tech writer would, not word for word.

title: {article['title']}
description: {article['description']}

{article['body_markdown']}"""
    return ask_for_tool(client, meter, "writer", prompt, TRANSLATION_TOOL)


def clean_slug(s: str, fallback: str) -> str:
    s = re.sub(r"[^a-z0-9]+", "-", s.lower()).strip("-")[:50].strip("-")
    return s or fallback


# ---------------------------------------------------------------------- commands

def setup():
    site = pathlib.Path(os.environ.get("SITE_DIR", "."))
    state = State(os.environ.get("STATE_DIR", "state"))
    tg = Telegram(os.environ["TELEGRAM_BOT_TOKEN"], os.environ["TELEGRAM_CHAT_ID"])
    return site, state, tg


def generate():
    import anthropic

    site, state, tg = setup()
    month = now().strftime("%Y-%m")
    spent = state.spend.get(month, 0.0)
    cap_usd = CFG["monthly_cap_jpy"] / CFG["jpy_per_usd"]
    run_cap_usd = CFG["max_jpy_per_run"] / CFG["jpy_per_usd"]
    if spent + run_cap_usd > cap_usd:
        tg.send(f"⏸ 今月の予算（¥{CFG['monthly_cap_jpy']:,}）に近いため、記事作成をスキップしました。\n"
                f"今月の使用額: 約¥{jpy(spent):,}")
        return

    client = anthropic.Anthropic(max_retries=3)
    meter = Meter(run_cap_usd)
    draft_id = now().strftime("%Y%m%d-%H%M%S")
    record = {"id": draft_id, "created_at": now().isoformat(timespec="seconds"),
              "title": "", "topic": "", "sources": [], "status": "failed"}
    try:
        notes, sources = research(client, meter, state)
        record["sources"] = list(sources)

        clash = overlapping_post(sources, state)
        if clash:
            record.update(status="duplicate", title="(skipped)", topic=f"same sources as {clash['id']}")
            tg.send(f"↩️ 今日見つけた話題は最近の記事と重複していたため、スキップしました。\n重複: {clash['title']}")
            return

        draft = write(client, meter, notes, sources)
        review = edit(client, meter, notes, sources, draft, state)
        for _ in range(CFG["max_revisions"]):
            if review["decision"] != "revise":
                break
            draft = write(client, meter, notes, sources, feedback=review["notes"], previous=draft)
            review = edit(client, meter, notes, sources, draft, state)

        record.update(title=review["title"], topic=review["topic_en"])
        if review["decision"] != "publish":
            record["status"] = review["decision"] if review["decision"] != "revise" else "hold"
            label = {"duplicate": "最近の記事と同じ話題", "hold": "品質が基準に届かない", "revise": "修正しきれなかった"}
            tg.send(f"🛑 編集者が今日の下書きを見送りました（{label.get(review['decision'], review['decision'])}）。\n\n"
                    f"「{review['title']}」\n\n編集メモ:\n{review['notes']}")
            return

        slug = clean_slug(review["slug"], f"post-{draft_id}")
        english, en_note = None, ""
        if CFG.get("english_version", True):
            try:
                english = translate(client, meter, review)
                en_note = "英語版も同時に公開されます。\n"
            except BudgetExceeded:
                raise
            except Exception as e:  # the Japanese post still goes out
                en_note = f"英語版の作成に失敗しました（日本語版のみ公開）: {type(e).__name__}\n"
        tg.send(f"📝 新しい下書きが届きました\n\n{review['title']}\n\n{review['description']}")
        tg.send_long(review["body_markdown"])
        spent_after = spent + meter.usd
        control = tg.send(
            f"編集メモ:\n{review['notes']}\n\n"
            f"今回のコスト: 約¥{jpy(meter.usd)}（検索{meter.searches}回）\n"
            f"今月: 約¥{jpy(spent_after):,} / ¥{CFG['monthly_cap_jpy']:,}\n"
            f"{en_note}\n"
            f"公開しますか？ {CFG['approval_hours']}時間以内に返事がなければ破棄します。\n"
            f"「ok」と返信しても公開できます。",
            buttons=[[{"text": "✅ 公開する", "callback_data": f"p:{draft_id}"},
                      {"text": "❌ 破棄", "callback_data": f"s:{draft_id}"}]],
        )
        state.save_pending({
            "id": draft_id, "created_at": record["created_at"], "title": review["title"], "slug": slug,
            "description": review["description"], "body": review["body_markdown"],
            "english": english, "control_message_id": control,
        })
        record["status"] = "pending"
    except BudgetExceeded as e:
        record["status"] = "failed"
        tg.send(f"⏸ 1回あたりの予算上限に達したため中止しました: {e}")
    except Exception as e:
        tg.send(f"⚠️ 記事作成中にエラーが発生しました:\n{type(e).__name__}: {str(e)[:500]}")
        raise
    finally:
        state.spend[month] = round(spent + meter.usd, 4)
        state.history.append(record)
        state.commit(f"agent: draft {draft_id} ({record['status']}, ~¥{jpy(meter.usd)})")


def _front(title: str, date: str, description: str, translation: str | None) -> str:
    lines = ["---", f"title: {json.dumps(title, ensure_ascii=False)}", f"date: {date}",
             f"description: {json.dumps(description, ensure_ascii=False)}"]
    if translation:
        lines.append(f"translation: {translation}")
    lines.append("templateEngineOverride: md")  # so {{ }} in an article can't break the build
    return "\n".join(lines + ["---", "", ""])


def publish(site: pathlib.Path, draft: dict) -> list[str]:
    """Write the Japanese post (and its English version, if any) and push. Returns the URLs."""
    date = now().date().isoformat()
    ja_dir = site / CFG["posts_dir"]
    en_dir = site / CFG.get("posts_dir_en", "src/blog/posts")
    english = draft.get("english")
    dirs = [ja_dir] + ([en_dir] if english else [])
    for d in dirs:
        d.mkdir(parents=True, exist_ok=True)
    slug, n = draft["slug"], 2  # one slug shared by both languages
    while any((d / f"{date}-{slug}.md").exists() for d in dirs):
        slug, n = f"{draft['slug']}-{n}", n + 1
    ja_path = CFG["post_url_pattern"].format(slug=slug)
    en_path = CFG.get("post_url_pattern_en", "/blog/{slug}/").format(slug=slug)
    (ja_dir / f"{date}-{slug}.md").write_text(
        _front(draft["title"], date, draft["description"], en_path if english else None)
        + draft["body"].strip() + "\n", encoding="utf-8")
    paths = [ja_path]
    if english:
        (en_dir / f"{date}-{slug}.md").write_text(
            _front(english["title"], date, english["description"], ja_path)
            + english["body_markdown"].strip() + "\n", encoding="utf-8")
        paths.append(en_path)
    commit_and_push(site, f"blog: {draft['title']}")
    return [CFG["site_url"].rstrip("/") + x for x in paths]


def poll():
    site, state, tg = setup()
    pending = {d["id"]: d for d in state.pending()}
    updates = tg.call("getUpdates", offset=state.telegram.get("offset", 0), timeout=0,
                      allowed_updates=["message", "callback_query"])

    def finish(draft_id: str, action: str, callback_id: str | None = None):
        draft = pending.pop(draft_id, None)
        if not draft:
            if callback_id:
                tg.quiet("answerCallbackQuery", callback_query_id=callback_id, text="この下書きはもう処理済みです")
            return
        tg.quiet("editMessageReplyMarkup", chat_id=tg.chat_id, message_id=draft["control_message_id"],
                 reply_markup={"inline_keyboard": []})
        if action == "p":
            urls = publish(site, draft)
            state.set_status(draft_id, "published", url=urls[0])
            if callback_id:
                tg.quiet("answerCallbackQuery", callback_query_id=callback_id, text="公開しました")
            tg.send(f"✅ 公開しました（1〜2分でサイトに反映されます）\n{draft['title']}\n" + "\n".join(urls))
        else:
            state.set_status(draft_id, "rejected")
            if callback_id:
                tg.quiet("answerCallbackQuery", callback_query_id=callback_id, text="破棄しました")
            tg.send(f"🗑 破棄しました: {draft['title']}")
        state.drop_pending(draft_id)

    for u in updates:
        state.telegram["offset"] = u["update_id"] + 1
        if "callback_query" in u:
            cq = u["callback_query"]
            if str(cq.get("message", {}).get("chat", {}).get("id")) != tg.chat_id:
                continue  # only you can approve
            action, _, draft_id = (cq.get("data") or "").partition(":")
            if action in ("p", "s"):
                finish(draft_id, action, cq["id"])
        elif "message" in u:
            m = u["message"]
            if str(m.get("chat", {}).get("id")) != tg.chat_id:
                continue
            word = (m.get("text") or "").strip().lower().rstrip("!！。.")
            if word in OK_WORDS or word in NO_WORDS:
                if not pending:
                    tg.send("今、承認待ちの下書きはありません。")
                    continue
                reply_to = (m.get("reply_to_message") or {}).get("message_id")
                target = next((d for d in pending.values() if d["control_message_id"] == reply_to),
                              list(pending.values())[-1])  # otherwise the newest draft
                finish(target["id"], "p" if word in OK_WORDS else "s")
            elif word in ("status", "状態"):
                month = now().strftime("%Y-%m")
                waiting = "\n".join(f"- {d['title']}" for d in pending.values()) or "なし"
                tg.send(f"承認待ち:\n{waiting}\n\n今月の使用額: 約¥{jpy(state.spend.get(month, 0)):,} / ¥{CFG['monthly_cap_jpy']:,}")

    deadline = now() - dt.timedelta(hours=CFG["approval_hours"])
    for draft in list(pending.values()):
        if dt.datetime.fromisoformat(draft["created_at"]) < deadline:
            tg.quiet("editMessageReplyMarkup", chat_id=tg.chat_id, message_id=draft["control_message_id"],
                     reply_markup={"inline_keyboard": []})
            tg.send(f"⌛ {CFG['approval_hours']}時間返事がなかったため破棄しました: {draft['title']}")
            state.set_status(draft["id"], "expired")
            state.drop_pending(draft["id"])

    state.commit("agent: poll")


if __name__ == "__main__":
    cmd = sys.argv[1] if len(sys.argv) > 1 else ""
    if cmd == "generate":
        generate()
    elif cmd == "poll":
        poll()
    else:
        sys.exit(__doc__)

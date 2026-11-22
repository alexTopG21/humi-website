# HUMI blog agent

Writes a Japanese post about humanoids / physical AI every day, sends it to you on Telegram,
and publishes it only if you approve.

1. **11:00 JST**: *Blog agent - write a draft* runs. Claude Haiku searches the web and writes a draft,
   Claude Sonnet fact-checks and edits it, and the bot sends you the article with ✅ / ❌ buttons.
2. **Every 15 min**: *Blog agent - check Telegram replies* reads your answer.
   ✅ or a reply of `ok` → the post is committed to `src/ja/blog/posts/` and Cloudflare publishes it.
   ❌ or `no` → discarded. No answer for 12 hours → discarded.
   Send `status` to see waiting drafts and this month's spend.

## Secrets (Settings → Secrets and variables → Actions)
`ANTHROPIC_API_KEY`, `TELEGRAM_BOT_TOKEN`, `TELEGRAM_CHAT_ID`

## Test it now
Actions tab → *Blog agent - write a draft* → **Run workflow**. Each run costs roughly ¥30–100.

## Change things
Everything is in `agent/config.yaml`: topic, sources, length, models, budget (¥5,000/month cap,
¥250 per run), approval window. The schedule is the `cron` line in
`.github/workflows/blog-agent-draft.yml` (times are UTC: `0 2 * * *` = 11:00 JST).

Memory between runs (drafts waiting for approval, past topics to avoid repeats, spend, Telegram position)
lives on the `blog-agent-state` branch. Don't merge that branch into main.

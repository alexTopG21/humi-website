---
title: "メタのアレクサンダー・ワン氏「超知能が到来しつつある」：リーマン予想のAI支援証明が引き金に、何が確かで何が未確定か"
date: 2026-11-25
description: "メタの最高AI責任者アレクサンダー・ワン氏がXで超知能への警鐘を鳴らしました。きっかけとなったClaude支援のリーマン予想証明と、その検証状況、反応を整理し、ロボットなど物理AIへの示唆を考えます。"
translation: /blog/alexandr-wang-superintelligence-riemann-proof/
templateEngineOverride: md
---

## はじめに

2026年11月22日、メタ（Meta Platforms）の最高AI責任者（Chief AI Officer）であるアレクサンダー・ワン（Alexandr Wang）氏が、X（旧Twitter）に「Superintelligence is arriving（超知能が到来しつつある）」と投稿しました。投稿は週明けまでに1,300万回以上表示され、米国の政治家や著名人も反応する大きな話題になっています。

この発言の直接のきっかけは、その2日前に公開された、AIの支援を受けたリーマン予想の証明です。本記事では、①証明について確認されていること、②ワン氏が実際に述べたこと、③それに対する反応、を分けて整理します。そのうえで、本ブログのテーマであるロボットや物理AIにとって何を意味するのかを、編集部の見立てとして述べます。

なお、日本語では「メタのAIチーフエンジニア」と紹介されることもありますが、ワン氏の正式な肩書は最高AI責任者で、社内の「Meta Superintelligence Labs」を率いています。

## 発端：Claudeと共同で得たリーマン予想の証明

リーマン予想は、1859年にベルンハルト・リーマンが提示した、ゼータ関数の「非自明な零点」がすべて実部1/2の直線上にあるという予想です。素数の分布と深く結びついており、数学で最も有名な未解決問題とされてきました。

11月20日、Anthropic社に所属する数学者レヴェント・アルプゲ（Levent Alpöge）氏が、自身のサイトに短い声明を掲載しました。その内容は、同社の大規模言語モデル「Claude」と協働して証明を見つけたと考えている、というものです。

公開された主な内容は次のとおりです。

- 証明は、定理証明支援系「Lean 4」のコードとして公開された。規模は約1,700万行、17万5,000を超えるファイル、14のアーカイブに及ぶ
- 古典的なリーマン予想に加え、ディリクレL関数に対する一般化リーマン予想（GRH）も扱うとしている
- 数学者向けの説明は、証明の概略を含む4ページほどの文書のみ

翌21日には、Leanの開発組織（Lean FRO）とMathlib Initiativeが共同声明を出しました。コード上の定理がリーマン予想の正しい定式化であり、証明がLeanの検査を通ることを確認した、という内容です。MITのアンドリュー・サザーランド（Andrew Sutherland）氏も独自にコードをコンパイルし、改変された主張ではなく予想そのものを証明していると述べたと報じられています。

一方で、数学者がこの証明の「アイデア」を理解したかどうかは別の問題です。人間が読める形の完全な証明はまだ公開されておらず、専門家は1,700万行の中身が何を言っているのかを読み解いている最中です。クレイ数学研究所の懸賞金（ミレニアム懸賞問題）を受けるには、論文の公表と約2年間の検証期間が必要とされています。

さらに『Nature』によれば、アルプゲ氏の発表から数時間後、スタンフォード大学のラヴィ・ヴァキル（Ravi Vakil）氏が、AIを使わない人間だけの証明だとする別のプレプリントを急いで公開しました。こちらの評価も今後の焦点になります。

背景として、Anthropicは2026年8月にも、Claudeがリーマン予想に関連する部分的な結果（臨界線上にある零点の割合を、従来の約42%から66%超に引き上げる）を得たと報告していました。今回の発表は、その延長線上にあるものと受け止められています。

## ワン氏は何と言ったのか

報道をもとに、ワン氏の投稿の要点を整理します。

- 今回の発見の大きさは言い表しがたく、AIにとって大きな変化の始まりだとした
- 人類の知的達成の頂点ともいえる問題が解かれたことを、超知能が近づいている証拠として位置づけた
- 今後1年間の人類の行動が、未来の世界のあり方を大きく左右すると述べた
- 社会をAIに「引き渡す（handover）」ことを受け入れるべきではないと主張した
- あらゆる分野で人間をはるかに上回る超知能が存在する世界で、人類が主導権を保ち続ける姿は想像しにくいとも述べた
- AI業界のリーダーは安全性・アライメント・セキュリティを前進させる必要があり、業界はこれまでの既定路線とは「意味のある形で異なる行動」をとるべきだとした
- 超知能は避けられないもので、あとは安全にするだけだという考え方には異を唱えた

具体的な対策として、ワン氏は後続の投稿で、メタが「Muse」技術の公開を遅らせたことや、ホワイトハウスの自主的なAI協定に署名したことを挙げたと、Forbesは報じています。

ワン氏は29歳です。データラベリング企業Scale AIの共同創業者で、2025年にメタがScale AIの株式49%を取得したのに伴い、メタに移りました。

## 反応：「では何をすべきなのか」

投稿には多くの反応が寄せられました。目立ったのは、警告だけで具体策がないという批判です。

- Redditの共同創業者アレクシス・オハニアン氏は、話の続きを求める短い返信を送った
- オバマ元大統領のスピーチライターでポッドキャスターのジョン・ファヴロー氏は、選挙で選ばれた政治家に対し、先端AI企業による人類の主導権の「引き渡し」を止めるため、あらゆる手を尽くすよう呼びかけた
- 民主党のヤサミン・アンサリ下院議員は、規制が行われるまでにあと何人のAIリーダーが警告すればよいのかと問い、議会は先端AI開発を直ちに抑制すべきだと述べた
- 保守派の論客メーガン・ケリー氏は、システムを作った当人たちが今になって失業や統制の喪失を警告していることを批判した
- メタを離れたヤン・ルカン氏は英フィナンシャル・タイムズに対し、ワン氏は若く研究の進め方を知らないと評した。ルカン氏はかねて、人間がAIの主導権を保てるという立場をとっている

賛否はさておき、AI企業の幹部自身が「主導権を失うおそれ」を公に語り、それが政治の議論にまで広がった点は、今回の出来事の特徴といえます。

## 物理AIへの示唆：検証できる世界とできない世界

ここからは編集部の見立てです。

今回の成果で重要なのは、AIが「答えを出した」ことだけではなく、その答えを機械が厳密に検査できたことだと考えます。Leanは、すべての論理の一歩を小さな検査核（カーネル）に照らして確認します。人間がまだ中身を理解していなくても、「正しいかどうか」は先に確定できます。数学は、AIにとって理想的な「採点係」が存在する分野だといえます。

ロボットや物理AIの世界には、この採点係がありません。ロボットの動作が正しかったか、学習に使った映像やセンサデータが使えるものだったかは、多くの場合、人が見て判断しています。データの量だけでなく、その品質をどう確かめるかが、物理AIの進歩の速さを左右する要因の一つになると見ています。

その意味で、ワン氏が強調した「安全性・アライメント・セキュリティ」は、言語や数学のAIだけの話ではありません。現実の世界で動くロボットでは、何が「正しい振る舞い」かを測り、確かめる仕組みづくりが、より切実な課題になります。

## 不確実性と注意点

- アルプゲ氏の証明は機械による検査を通過していますが、数学界による理論面の評価はこれからです。人間が読める証明の公開と査読が待たれます
- ヴァキル氏の人間による証明が成り立つのかどうかも、まだ確認されていません
- ワン氏の発言は、X上の投稿とその報道に基づいています。発言の細部は報道ごとに表現が異なる場合があります
- ワン氏の発言が、メタの投資方針や製品計画の変更を示すものかどうかについて、メタは明らかにしていません

## まとめ

1859年から続いたリーマン予想に、AIの支援を受けた証明が現れ、少なくとも機械検査の上では正しいと確認されました。メタのワン氏はこれを超知能の到来を示すものと受け止め、社会をAIに引き渡してはならないと警告しました。一方で、具体策の不足を指摘する声や、本人の経験を疑問視する声もあがっています。

確かなのは、AIの能力向上が「検証できる分野」から急速に進んでいるということです。物理的な世界で同じことを起こすには、データと検証の仕組みがまだ足りません。HUMIはこの領域を引き続き追っていきます。

## 参考資料

- [Benzinga（Yahoo経由）: Meta AI Chief Alexandr Wang Says 'Superintelligence Is Arriving'](https://tech.yahoo.com/ai/meta-ai/articles/meta-ai-chief-alexandr-wang-043034815.html)
- [Forbes: Meta's AI Chief Alexandr Wang Warns Against 'Handover Of Society To AI' In Viral Post](https://www.forbes.com/sites/conormurray/2026/11/23/metas-ai-chief-warns-against-handover-of-society-to-ai-frustrating-social-media-users-who-want-solutions/)
- [Newsweek: Meta AI chief makes dire warning over impact of superintelligence on humans](https://www.newsweek.com/meta-ai-chief-makes-dire-warning-over-impact-of-superintelligence-on-humans-12758800)
- [Seoul Economic Daily: Meta AI Chief Warns Humans Could Lose Control of AI, Offers No Fix](https://en.sedaily.com/world/2026/11/24/meta-ai-chief-warns-humans-could-lose-control-of-ai-offers)
- [Startup Fortune: Meta's Alexandr Wang says superintelligence is arriving and humans must not hand society over](https://startupfortune.com/metas-alexandr-wang-says-superintelligence-is-arriving-and-humans-must-not-hand-society-over/)
- [Scientific American: Anthropic mathematician proves Riemann hypothesis](https://www.scientificamerican.com/article/anthropic-mathematician-claims-to-prove-riemann-hypothesis-most-famous-problem-in-all-of-math/)
- [Nature: Mathematicians astounded by AI and human-written proofs of iconic Riemann hypothesis](https://www.nature.com/articles/d41586-026-03812-7)
- [Kingy AI: Levent Alpöge's Claude-assisted Riemann hypothesis proof verified in Lean](https://kingy.ai/blog/levent-alpoge-claude-riemann-hypothesis-proof/)
- [Crypto Briefing: Anthropic researcher publishes AI-built Lean proof of the Riemann hypothesis](https://cryptobriefing.com/anthropic-researcher-ai-riemann-hypothesis-proof/)
- [arXiv 2609.35719: AI Agent Swarms as Researchers: Progress, Challenges, and Open Questions](https://arxiv.org/pdf/2609.35719)
- [TechCrunch: Scale AI confirms 'significant' investment from Meta, says CEO Alexandr Wang is leaving](https://techcrunch.com/?p=3018605)

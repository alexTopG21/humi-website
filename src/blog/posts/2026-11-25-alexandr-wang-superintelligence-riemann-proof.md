---
title: "Meta's Alexandr Wang Says 'Superintelligence Is Arriving': An AI-Assisted Riemann Proof Set It Off. What Is Settled and What Is Not"
date: 2026-11-25
description: "Meta's chief AI officer Alexandr Wang warned on X that superintelligence is arriving. We sort out the Claude-assisted Riemann hypothesis proof behind it, its verification status, the reactions, and what it suggests for robots and physical AI."
translation: /ja/blog/alexandr-wang-superintelligence-riemann-proof/
templateEngineOverride: md
---

## Introduction

On November 22, 2026, Alexandr Wang, Meta Platforms' Chief AI Officer, posted on X that "Superintelligence is arriving." By the following Monday the post had passed 13 million views and drawn responses from US politicians and well-known commentators.

The direct trigger was an AI-assisted proof of the Riemann hypothesis released two days earlier. This article separates three things: (1) what is confirmed about the proof, (2) what Wang actually said, and (3) how people reacted. We then give our own view of what it means for robots and physical AI, the focus of this blog.

Wang is sometimes described as Meta's "chief AI engineer"; his actual title is Chief AI Officer, and he leads Meta Superintelligence Labs.

## The trigger: a Riemann proof found with Claude

The Riemann hypothesis, posed by Bernhard Riemann in 1859, states that every nontrivial zero of the zeta function lies on the line with real part 1/2. It is tied closely to how prime numbers are distributed and has long been called the most famous open problem in mathematics.

On November 20, Levent Alpöge, a mathematician at Anthropic, posted a short statement on his website saying he believed he had found a proof while working with Claude, the company's large language model.

What was released:

- The proof is code for the Lean 4 proof assistant: roughly 17 million lines across more than 175,000 files in 14 archives
- It covers the classical hypothesis and, according to Alpöge, the generalized Riemann hypothesis (GRH) for Dirichlet L-functions
- The explanation for mathematicians is a document of about four pages that includes a sketch of the proof

On November 21, the Lean FRO and the Mathlib Initiative issued a joint statement confirming that the theorem in the code is a correct statement of the Riemann hypothesis and that the proof passes Lean's checks. MIT's Andrew Sutherland reportedly compiled the code independently and said it proves the hypothesis itself, not an altered version.

Whether mathematicians understand the proof's ideas is a separate question. No full human-readable proof has been published, and experts are still working out what the 17 million lines actually say. The Clay Mathematics Institute's Millennium Prize requires publication and about two years of scrutiny.

According to Nature, a few hours after Alpöge's announcement, Ravi Vakil of Stanford University posted a rival preprint that he described as an all-human proof with no AI. How that one holds up is another open question.

For context, Anthropic reported in August 2026 that Claude had reached a partial result related to the hypothesis, raising the share of zeros known to lie on the critical line from about 42% to more than 66%. The new announcement is widely seen as building on that work.

## What Wang said

Based on press coverage, the main points of Wang's post were:

- The size of the discovery is hard to overstate, and it marks the start of a major change in AI
- He presented the solving of a problem at the summit of human intellectual achievement as a sign that superintelligence is near
- What humanity does over the next year will shape the future world
- Society should not accept a "handover" to AI
- It is hard to imagine humans staying in control in a world with superintelligence far beyond people in every field
- AI leaders need to advance safety, alignment and security, and the industry should act in meaningfully different ways from its default course
- He disagreed with the view that superintelligence is inevitable and the only task left is to make it safe

Asked about concrete steps, Wang pointed in a follow-up post to Meta delaying its "Muse" technology and signing the White House's voluntary AI commitments, Forbes reported.

Wang is 29. He co-founded the data-labeling company Scale AI and moved to Meta in 2025, when Meta took a 49% stake in Scale AI.

## Reactions: "So what should we do?"

The most common criticism was that the warning came without concrete solutions.

- Reddit co-founder Alexis Ohanian replied asking him not to leave people hanging
- Podcaster Jon Favreau, a former Obama speechwriter, urged elected officials to do everything possible to stop frontier labs from handing control of humanity to superintelligent machines
- Democratic Representative Yassamin Ansari asked how many AI leaders must warn before regulation happens, and said Congress should restrain advanced AI development immediately
- Conservative commentator Megyn Kelly criticized the people who built these systems for only now warning about job losses and loss of control
- Yann LeCun, who has left Meta, told the Financial Times that Wang is young and does not know how research works. LeCun has long argued that humans will stay in control of AI

Whatever one thinks of the warning, it is notable that a senior AI executive publicly raised the risk of losing control, and that the debate quickly reached politics.

## What it suggests for physical AI: worlds you can check and worlds you cannot

From here on, this is our own view.

What matters most in this result is not only that an AI helped produce an answer, but that a machine could check the answer rigorously. Lean verifies every logical step against a small, well-understood kernel. Correctness can be settled before any human fully understands the argument. Mathematics is a field with an ideal automatic grader for AI.

Robotics and physical AI have no such grader. Whether a robot behaved correctly, or whether the video and sensor data used for training were usable, is mostly judged by people looking at it. We think that how data quality is verified, not just how much data exists, will be one of the factors that sets the pace of progress in physical AI.

In that sense, the safety, alignment and security Wang emphasized are not only issues for language and math models. For robots acting in the real world, building ways to measure and check what counts as correct behavior is an even more pressing problem.

## Uncertainties and caveats

- Alpöge's proof has passed machine checks, but the mathematics community's assessment of its ideas is still to come. A human-readable proof and peer review are pending
- Whether Vakil's human proof holds up has not been confirmed either
- Wang's remarks are based on his X posts and press reports, and wording differs between reports
- Meta has not said whether Wang's remarks signal any change in its spending or product plans

## Conclusion

An AI-assisted proof of the Riemann hypothesis, open since 1859, has appeared and has been confirmed correct at least by machine checking. Meta's Wang took it as a sign that superintelligence is arriving and warned against handing society over to AI. Others have pointed to the lack of concrete proposals, and some have questioned his experience.

What seems clear is that AI capability is advancing fastest in fields where answers can be verified. To make the same happen in the physical world, the data and the verification tools are not there yet. HUMI will keep following this area.

## References

- [Benzinga (via Yahoo): Meta AI Chief Alexandr Wang Says 'Superintelligence Is Arriving'](https://tech.yahoo.com/ai/meta-ai/articles/meta-ai-chief-alexandr-wang-043034815.html)
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

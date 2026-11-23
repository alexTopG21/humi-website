---
title: "Digit 5's BOM Falls from $150K to $30K: Reading the Reducer Market Through Agility's In-House Cycloidal Actuator"
date: 2026-11-23
description: "We break down the component costs Agility disclosed for Digit 5 (about $150K at launch, falling to about $30K at volume) and its in-house cycloidal actuator, and examine what they mean for Japanese reducer makers."
translation: /ja/blog/agility-digit5-bom-cycloidal-actuators/
templateEngineOverride: md
---

## Introduction

On November 5, 2026, Agility, a U.S. humanoid robot maker, began trading on Nasdaq under the ticker "AGLT." The company positions itself as the first publicly listed pure-play humanoid robot company in the United States. Since the listing itself has been widely covered, this article touches on it only briefly as background.

What I want to focus on is the **bill of materials (BOM) figures** that surfaced during the listing process, and the **in-house cycloidal actuator** that the company calls a "core technology." In investor briefings and in documents filed with regulators, Agility has laid out the cost structure and target values for Digit 5. This is a rare case where the factors that determine humanoid robot pricing show up as concrete numbers.

In humanoid robots, joint assemblies, and especially speed reducers (devices that convert the high-speed, low-torque rotation of a motor into low-speed, high-torque output), are considered the main lever for cost reduction. Agility's materials indicate that it designs its joints in-house and sources standard parts such as cameras and sensors from partners. That makes the approach a useful test case for thinking about the reducer market. Japan holds strong positions in both cycloidal and harmonic reducers, so domestic component makers have a stake in this as well.

The sections below cover (1) the background of the listing, (2) the basics of cycloidal reducers, (3) a summary of the disclosed figures, (4) the three pillars of cost reduction, (5) the actuator as a core technology, (6) caveats for reading the numbers, (7) issues in the reducer market, and (8) implications for Japan. All figures in this article come from the sources listed at the end. Each source uses different assumptions, so comparisons require care.

## Background of the Listing and the Initial Market Reaction

This listing uses a SPAC (special purpose acquisition company). A SPAC is a shell company with no operating business of its own that merges with a private company, taking that company public in effect. In Agility's case, the merger partner is Churchill Capital Corp XI (CCXI).

According to Bloomberg, cash on hand before expenses was about $465 million, of which about $201 million came from an investment led by Foxconn.

On the market reaction, The Robot Report reported that the stock opened at $11.26 against the SPAC reference price of $10, and was at $10.30 at the time of reporting. A single day of trading is not enough to judge the business's valuation. I am recording it here only as the one investment-side signal currently available.

## Basics of Cycloidal Reducers

Before turning to the cost discussion, it helps to review joint structure. A humanoid robot joint generally consists of a motor, a reducer, sensors that measure position and force, and the electronics that control them. This article focuses on the reducer.

A **cycloidal reducer** uses an eccentric cam (a part whose rotating axis is offset from its center) to drive a disc (the cycloidal disc), which meshes with pins on the outer ring to achieve reduction. The best-known example in Japan is Nabtesco's RV reducer. According to a Substack explainer, RV reducers fall into this category and are said to suit heavily loaded joints such as the base and shoulder. However, this description rests on a relatively low-reliability source, so it is best treated as a general characterization.

The other major type is the harmonic reducer. My previous article (on price competition among Chinese harmonic reducers) covered that family. Agility's news is different because it involves a separate reducer family and a design philosophy of building its own actuators.

## Digit 5's Cost Structure: Lining Up the Disclosed Figures

Here is a summary of the numbers Agility has disclosed.

| Timing | Figure | Context | Source |
|---|---|---|---|
| Filing (included in the September Form S-4, also in Form DRS) | Digit 4 BOM about $125K per unit | Regulatory filing | SEC filings, Humanoids Daily |
| September 15 | About $75K at 1,000 units per year | Target announced with Digit 5 | The AI Insider |
| September 15 | About $30K at 10,000 units per year | Same as above | The AI Insider |
| October 6 | Digit 5 component cost at launch about $150K | Investor briefing | Humanoids Daily |

One caution: the roughly $125K for Digit 4 and the roughly $150K for Digit 5 may not be directly comparable. Digit 5 improves payload and shortens charging time, so the configuration or the definition of "at launch" may differ. The sources, however, do not explain this gap.

The targets depend heavily on production volume. The roughly $75K at 1,000 units per year and roughly $30K at 10,000 units per year assume the benefits of scale. Going from about $150K at launch to about $30K is a reduction of roughly 80% on a simple calculation. At that magnitude, it is clear that lower prices on individual parts alone will not be enough; design changes and changes to procurement terms would have to happen at the same time.

On orders, a Humanoids Daily article says the roughly $300 million order covers 1,000 units and will be executed in stages as each use case is proven. In other words, it is a conditional order backlog rather than confirmed revenue. The same article says that for RaaS (Robots-as-a-Service, a business model in which robots are provided for a monthly fee), product margins are around 50% until annual output reaches 1,000 units. This figure, too, assumes production at scale.

## Three Pillars of Cost Reduction

According to a Humanoids Daily article, Agility's COO explained the planned cost reductions through three pillars:

1. **Redesign of the in-house cycloidal actuator**: The company's actuator is said to account for about 25% of Digit's BOM.
2. **Supply partnerships for standard parts**: Standard components such as cameras, sensors, and circuit boards are sourced through supplier partnerships.
3. **Volume discounts**: These are said to make up about 20% of the planned reductions.

Be careful how you read these. The 25% in the first pillar is a **share of the total BOM**, while the 20% in the third pillar is a **share of the planned reduction amount**. Because the bases differ, the figures cannot simply be added together. The sources also do not break down the remainder. In other words, of the three pillars, the only one whose contribution to the reduction can be identified from the sources is the volume discount.

As a rough exercise, 25% of the roughly $150K at launch is about $37.5K. If the actuator share were still 25% at the roughly $30K volume cost, it would be about $7,500. This is an assumption-based calculation, not a claim made in the sources. It is also unclear whether the 25% refers to the launch-cost figure or to some other point in time. Even so, the idea that the actuator might need to drop from about $37.5K to the several-thousand-dollar range helps explain why redesigning the in-house actuator sits at the center of the cost plan.

## The Cycloidal Actuator as a "Core Technology"

In the document filed with the SEC (Form DRS), Digit's proprietary cycloidal actuator is cited as "the most significant example" among Agility's core technical differentiators. The company is said to hold substantial intellectual property around it, and the design is said to aim for resistance to repeated shocks and precise force control. Humanoids Daily also reports that Digit 5's new legs use the company's proprietary cycloidal actuator technology, developed for repetitive lifting.

Walking and lifting loads both place repeated loads and shocks on joints, so it is natural for the design goal to be set there. However, the sources do not explain why Agility chose the cycloidal approach or how much performance it gains over harmonic designs or other alternatives. That will have to wait for future technical disclosures.

## Caveats for Reading the Numbers

Here is a breakdown of how reliable each figure is.

**(a) The specifications are preliminary estimates.** The listed Digit 5 specifications include a payload of 50 lb (22.7 kg), weight of 129 kg, runtime of 90 minutes, and charging time of 9 minutes. However, Agility's product page (as carried by APA Robot) describes these as preliminary estimates based on pre-production hardware. Early access is scheduled for the first half of 2027, with general availability by the end of 2027. The humanoid.guide page for Digit 5 is marked "Not Verified."

**(b) The U.S. sourcing ratio has not been confirmed.** An investor document is reported to say that about 75% of parts are sourced from the U.S. However, the author of a note points out that Agility has not published a complete BOM or a list of country of origin. The same article also raises the possibility that parts are imported from Japan, Taiwan, South Korea, and elsewhere.

**(c) The target values assume mass production.** The roughly $30K figure assumes 10,000 units per year. The sources do not say that the same level will be reached at 1,000 units per year. The target at 1,000 units per year is about $75K.

**(d) Distinguish between figures from filings and figures from briefings.** According to the Humanoids Daily article, the roughly $125K Digit 4 BOM and roughly $300 million order backlog were included in the September Form S-4. By contrast, the roughly $150K figure presented at the October briefing is a number from that briefing.

## Issues in the Reducer Market

From here, I outline the issues from a reducer maker's point of view.

**First, the cycloidal reducer market share varies across sources.** In an analysis by Jared Watkins, Nabtesco's share of RV reducers for joint-type robots is put at about 35%. Meanwhile, a note by Tomoshi Kagawa and an Ecconomi article put it at about 60%, and one commentator notes that the 60% figure is a company-side estimate. The sources cited in this article do not allow me to determine which figure is more accurate.

**Second, whether an RV reducer suits Agility's design is open to debate.** Articles by MarketWise and MenFem state, in effect, that RV reducers are components for heavy loads and are not normally chosen for the joints of lightweight humanoid robots. On the other hand, the sources do not reveal whether Agility's cycloidal actuator is the same kind of component as an RV reducer, or how large it is.

**Third, the sources do not reveal whether Agility sources its reducers externally or makes them in-house.** If it sources them externally, specific reducer makers could see a direct effect on sales. If it makes them in-house, the impact on outside reducer makers would be limited. This is what I most want to confirm in future disclosures.

Separately, although the source is relatively low-reliability, Nabtesco is reported to have said it plans to double its RV reducer production capacity by 2026 to meet humanoid robot demand. It is also reported that the company acquired Slovakia's cycloidal reducer maker Spinea in 2023. Both claims need to be verified against primary sources.

## Implications for Japan

I separate what can be said from the sources from what cannot.

**Reducer makers**: Agility's cycloidal approach concerns a reducer family separate from the harmonic reducer price competition I covered previously. However, since it is unclear whether Agility buys cycloidal components externally or makes them in-house, the direct sales impact on Japanese makers cannot be determined. Whether RV reducers, positioned for heavy loads, fit humanoid joints is also an open question.

**Standard parts such as motors, sensors, and circuit boards**: Agility plans cost reductions through supplier partnerships for cameras, sensors, and circuit boards. This could be an opportunity for component makers, but the sources do not name any specific Japanese suppliers.

**Japanese manufacturers considering humanoid robot adoption**: The sources cover Agility's explanation of its U.S. sourcing and its use cases in warehouses and factories. They say nothing about Japanese customers or deployments, so I cannot assess adoption potential in Japan.

**Japanese investors**: The sources contain no figures on Japanese shareholders. The first-day trading move is the only signal I can confirm, but it is not enough to support a medium- to long-term judgment.

## Points to Verify Next

- A complete BOM and a list of parts' countries of origin (to back up the U.S. sourcing ratio)
- Sourcing for reducers and actuators (external purchase or in-house production)
- Actual weight, payload, and runtime at the early-access stage in the first half of 2027
- Differences in how the BOM is defined between Digit 4 and Digit 5
- Reliable primary data on the market share of cycloidal reducers

## Summary

- Agility began trading on Nasdaq on November 5, 2026, and announced that it is the first pure-play humanoid robot company listed in the U.S.
- Digit 5's component cost at launch is about $150K, with targets of about $75K at 1,000 units per year and about $30K at 10,000 units per year.
- The pillars of cost reduction are the in-house cycloidal actuator (about 25% of BOM), supply partnerships for standard parts, and volume discounts (about 20% of planned reductions). Because the bases differ, they cannot be added together.
- The specifications are preliminary estimates, and support for the U.S. sourcing ratio is thin.
- In the reducer market, the sources disagree on Nabtesco's share, and it is unclear whether Agility sources its reducers externally.
- For Japan, the effects on reducers, standard parts, adoption, and investment remain largely unconfirmed at this point.

## Sources

- [Agility investor day coverage (Humanoids Daily)](https://www.humanoidsdaily.com/news/agility-investor-day-digit-5-launch-costs-and-a-300m-order-that-unlocks-skill-by-skill)
- [Agility Digit 5: The Humanoid Robot Heading to Wall Street (EIF blog)](https://blog.eif.am/agility-digit-5-humanoid-robot-wall-street/)
- [Churchill Capital Corp XI - Form DRS (SEC)](https://www.sec.gov/Archives/edgar/data/0002074973/000121390026110722/filename1.htm)
- [Agility Robotics Unveils Digit 5 With Higher Payload, Faster Charging and New Safety System (The AI Insider)](https://theaiinsider.tech/2026/09/15/agility-robotics-unveils-digit-5-with-higher-payload-faster-charging-and-new-safety-system/)
- [Agility unveils Digit 5, designed to work closer to people (Humanoids Daily)](https://www.humanoidsdaily.com/news/agility-unveils-digit-5-designed-to-work-closer-to-people)
- [Digit 5 - Robot Details, Use Case and Specifications (APA Robot)](https://www.aparobot.com/robots/digit-5)
- [Agility Becomes First U.S. Publicly Listed Pure-Play Humanoid Robotics Company (Agility Robotics)](https://www.agilityrobotics.com/content/agility-becomes-first-u-s-publicly-listed-pure-play-humanoid-robotics-company-begins-trading-today-on-nasdaq-as-aglt)
- [Agility Robotics begins trading on Nasdaq (The Robot Report)](https://www.therobotreport.com/agility-robotics-begins-trading-on-nasdaq/)
- [Nvidia-Backed Humanoid Maker Agility Goes Public in First for the US (Bloomberg)](https://www.bloomberg.com/news/articles/2026-11-05/nvidia-backed-humanoid-maker-agility-goes-public-in-first-for-the-us)
- [Japan's Quiet Monopoly Inside Every Robot Joint (Substack)](https://automotivecloudwatch.substack.com/p/japans-quiet-monopoly-inside-every)
- [6-4. Core Components of Robot Joints (Tomoshi Kagawa, note)](https://note.com/kagawatomo/n/n5ef8c54539ff?hl=en)
- [Nabtesco Corporation - The Infinite Unknown (Jared Watkins)](https://www.jaredwatkins.com/research/robotics/actuators/nabtesco/)
- [I Broke Down the Humanoid Robot Bill of Materials (Ecconomi)](https://www.ecconomi.com/en/posts/humanoid-robot-bill-of-materials-joint-suppliers)
- [4 Robotics Stocks to Buy for the Humanoid Robot Boom (MarketWise)](https://marketwise.com/money-megatrends/elon-musk-is-betting-big-on-this-industry-and-these-four-stocks-could-soar/)
- [Nabtesco (MenFem)](https://menfem.com/companies/nabtesco)
- [How Low Can the Cost of Agility Robotics' "Digit" Go? (Tomoshi Kagawa, note)](https://note.com/kagawatomo/n/nf53f5125609c?hl=en)
- [Agility Robotics Digit 5 Specs & Price (humanoid.guide)](https://humanoid.guide/product/digit-5/)

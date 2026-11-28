---
title: "Schaeffler Enters the Humanoid Joint Actuator Market: What Is Behind the €400 Million Order Backlog, and the Revenue Not Yet Visible"
date: 2026-11-28
description: "Schaeffler's planetary-gear actuator, its supply agreement with Humanoid, the Taicang plant, and a backlog of about €400 million, with company announcements separated from estimates."
translation: /ja/blog/schaeffler-humanoid-joint-actuator-order-book/
templateEngineOverride: md
---

## Introduction

Schaeffler, the German bearing and motion technology company known for its linear and rotary motion products, is moving to become a supplier of joint actuators (drive units) for humanoid robots. Looking at the developments since the start of 2026, we see product design, supply contracts with customers, the start of mass production at a Chinese plant, and a growing order backlog, all arriving in a short span.

This article organizes these developments from both technical and business perspectives. First, a caveat. The disclosures at the core of this article cover May to October 2026, and the most recent source is an analysis dated November 12. We have not confirmed any new primary disclosure from Schaeffler in the past two weeks. Please read this as a summary of recent developments, not as breaking news.

We also distinguish between figures the company has published, figures reported by the media, and analyst estimates. We consider this distinction the most important thing to keep in mind when reading this topic.

## Background: The Joint Actuator as the Bottleneck

In humanoid development, joint actuators are seen as a supply bottleneck. Here, an actuator refers to a joint unit that combines a motor, a reducer, an encoder (a sensor that detects rotation angle), and a controller into one package.

Schaeffler says a humanoid robot typically needs 25 to 30 actuators, and that integrated linear and rotary actuators account for roughly half of the components. This is the company's own explanation, not a figure that has been independently verified. Even so, the high number of joints per robot shows that procurement and mass-production capacity for actuators can determine how many final products get built.

What stands out is that joints are being offered as integrated functional units rather than as individual parts. This is a shift away from selling bearings and reducers separately toward selling units that include the motor and control. Schaeffler's moves can be read as a precision component maker stepping directly into this shift.

## Product Design: An Integrated Planetary Gear Actuator

At CES 2026, the U.S. technology trade show, Schaeffler presented a planetary gear actuator designed for humanoids. It integrates a two-stage reducer, an electric motor, an encoder, and a controller into one unit (Robotics 24/7). Other media outlets report a torque range of 60 to 250 Nm. Nm (newton-meter) is a unit of rotational force. Because the range is wide, the product is likely intended to cover several joint classes rather than a single joint. However, the sources we checked do not say which model is assigned to which joint.

### A Design Question: Backdrivability

The key design point is backdrivability. This describes whether an external force applied on the output side can turn the motor side back through the reducer. High backdrivability lets the joint give way on contact or collision, which suits force control. Low backdrivability means the joint resists external movement and transmits more impact.

Schaeffler's release states that conventional actuators often have limited or almost no backdrivability, and claims that its own design backdrives smoothly. This is the company's own claim. Separately, an explanation from Eurobearing suggests that planetary gears produce less friction than strain wave gearing (harmonic drives). This is the commentator's view, not the result of a measured comparison.

In short, the claim of high backdrivability currently rests on the manufacturer's claim and a commentator's view. We have not found any comparison backed by measured data on torque, efficiency, or backlash in the sources we reviewed.

### Strain Wave Gearing Also Heads to Production

Strain wave gearing deforms a thin component into an elliptical shape so that the teeth engage. It can achieve compact size and high reduction ratios, but precision control of the deforming part is a challenge. Planetary gears combine a sun gear with several planet gears. Packing high torque into a small package requires precise design and machining.

According to a source called Habesha, Schaeffler's molded strain wave gears are scheduled to enter mass production in 2027. We have seen this information in only one source, so its reliability is limited. If it is accurate, Schaeffler would offer a product family that covers both planetary and strain wave designs, allowing customers to choose by application.

## The Orders: Contracts, Backlog, and the Point That This Is Not Yet Revenue

### Supply Contract with Humanoid

On May 13, 2026, Schaeffler announced that it had become a preferred supplier to Humanoid (thehumanoid.ai). According to the announcement, Schaeffler will cover more than 50% of Humanoid's demand for joint actuators for wheeled platforms through 2031. Initial deployments are scheduled from December 2026 to June 2027 at two sites in Germany.

Note that "more than 50%" is a share of demand. It does not confirm a fixed quantity or value. The sources we checked do not state order volumes or amounts. Actual shipment volumes will need to be verified in disclosures after deployment begins in December 2026.

### Changes in the Order Backlog

At the end of the first half of 2026 (H1), Schaeffler's robotics order backlog was reported at about €350 million, covering seven products for three OEMs (original equipment manufacturers) (Robomorrow). Sources differ on attribution: one cites the figure via analysis from WSJ and Daiwa, while another presents it as coming from the official H1 results materials.

In the Q3 update in October, the company said that two new customers in the Chinese market had been added, raising the backlog to about €400 million and bringing the total to five customers (Investing.com). The same update said that sample orders since the start of the year reached up to 83, roughly 300% higher than in 2025. It also said that 119 patents related to physical AI and humanoids had been filed since January 2025. The €400 million figure is the company's own announcement.

However, the following points remain uncertain:

- Sources give the date of the Q3 update as either October 13 or October 20.
- The names of the new Chinese customers were not disclosed in the October announcement.
- Habesha lists Agility, Humanoid, NEURA, and Hexagon as partners. These are partnership or purchase agreements and do not indicate confirmed order volumes.

The growth in sample orders suggests a sharp rise in evaluation and prototype inquiries. However, the company has not disclosed the share of samples that convert into volume production orders.

### An Order Is Not Revenue

The main point we want to emphasize is this. The roughly €400 million is an order backlog, not revenue. No revenue target for the robotics business has been disclosed (FourWeekMBA), and delivery timing has not been disclosed either (Humanoids Daily). Even as orders accumulate, nothing is recognized as income until mass production starts and shipments continue.

### An Analyst's Scale Estimate

WSJ reports, citing a Daiwa estimate, that this backlog could correspond to about 20,000 robots (Evolve). That estimate assumes an average selling price of $75,000, a gross margin of 45%, and that Schaeffler supplies about half of the production cost. It is not an official company figure.

Of these assumptions, the share of cost that Schaeffler supplies is the one that directly affects Schaeffler's own take. If that share falls, the number of robots supported by the same backlog changes. The estimate is best treated as one assumption for gauging scale.

## Production Site: The "Lighthouse" Plant in Taicang, China

Schaeffler has a plant of about 7,500 square meters in Taicang, China. According to reports, six humanoid robots handle component assembly across five stations (Humanoids Daily). In other words, humanoid parts are being made with the help of humanoids.

Schaeffler describes this plant as the starting point for mass production of linear and rotary actuators (Manufacturing Today). A "lighthouse" plant generally refers to an advanced model facility that other sites use as a reference. The key point of this news is that the plant is described as designed for product mass production.

On the other hand, the sources we reviewed contain no productivity figures such as utilization rate, takt time (the interval between finished products), defect rate, or the share of the process handled by the six humanoids. For now, we know that a plant exists to start mass production, but we cannot assess its capacity or quality.

## Financial Side: Job Cuts Alongside Investment

Schaeffler plans to cut 3,460 jobs in Europe. The one-time cost is about €480 million, and annual savings by 2030 are estimated at about €300 million (Humanoids Daily). Meanwhile, robotics revenue was less than 1% of group revenue in 2025.

Putting these together, the picture is one of improving the profitability of existing operations while developing robotics as a future growth candidate. However, this is our reading. Schaeffler has not said it will offset job cuts with robotics growth. FourWeekMBA presents a "1.2x" ratio comparing the job-cut figures with the order backlog, but this is FourWeekMBA's own calculation, not a comparison made by Schaeffler. When you see such a ratio, check what is being compared with what.

## Implications for Japan

Here we limit ourselves to points supported by the sources.

### For Reducer and Precision Component Makers

Schaeffler's entry into both strain wave gearing and integrated planetary gear actuators will add competitive pressure in the harmonic reducer segment. Meanwhile, Harmonic Drive Systems states that it has confirmed volume-production supply to several AI and humanoid developers. One market assessment lists NSK, THK, Harmonic Drive, Nabtesco, and Nidec among the companies it evaluates.

However, this list does not show how much humanoid-related revenue each company earns. Being named as a competitor is different from generating revenue. We covered price competition from Chinese manufacturers in an earlier article, so we will not repeat it here.

### On Japanese Adopters

The sources for this news cover Schaeffler's own plant and its sites in Germany and China. They do not address humanoid adoption by Japanese manufacturers. Therefore, nothing in this article allows us to say anything about the adoption status of Japanese companies.

### For Investors

Schaeffler's humanoid-related order backlog is growing, but robotics accounts for less than 1% of group revenue, and its contribution to sales and profit is not yet visible. At this stage, it is reasonable to treat the business as an option on a future ramp-up. The points to monitor are:

- The start of deliveries to Humanoid from December 2026 onward, and the volumes involved.
- Productivity figures for the Taicang plant.
- A breakdown of the backlog by customer and by product, and whether a revenue target exists.
- The start of strain wave gear mass production, said to be 2027 (information from a single source).

## Summary

- Schaeffler is expanding from component supply into supplying integrated joint actuator units for humanoids.
- The integrated planetary gear actuator combines a two-stage reducer, a motor, an encoder, and a controller. A torque range of 60 to 250 Nm has been reported. The high backdrivability is the company's claim, and we have not found any measured comparison.
- Under a preferred supplier agreement with Humanoid, Schaeffler will cover more than 50% of demand through 2031. Deployment runs from December 2026 to June 2027. Volumes and amounts are unknown.
- The order backlog rose from about €350 million at H1 to about €400 million. It is an order backlog, not revenue. The figure of 20,000 robots is a Daiwa estimate based on stated assumptions.
- The Taicang plant is a mass-production site where humanoids handle assembly, but no productivity figures have been published.
- Robotics accounted for less than 1% of group revenue in 2025. For now, it is an option on a ramp-up.

## Sources

- [CES 2026: Schaeffler presents planetary gear actuator for humanoid robots (Robotics 24/7)](https://www.robotics247.com/article/ces-2026-schaeffler-presents-planetary-gear-actuator-for-humanoid-robots/technologies)
- Astute Group (article on actuator torque ranges)
- All About Industries (article on torque ranges and number of actuators per robot)
- Eurobearing (explanation of friction in planetary gears and strain wave gearing)
- Habesha (article on strain wave gear mass-production timing, the Q3 update, and partner companies)
- thehumanoid.ai (article on the supply agreement with Humanoid)
- Robomorrow (overview article on the order backlog)
- Evolve (article citing the WSJ and Daiwa estimate)
- Investing.com (article on the Q3 update)
- Humanoids Daily (articles on the Taicang plant, job cuts, and the robotics revenue share)
- Manufacturing Today (article on the Taicang plant's role in mass production)
- FourWeekMBA (analysis article on distinguishing orders from revenue, and on ratio calculations)
- Harmonic Drive Systems (announcement on volume-production supply)
- Market assessment report (material on the reducer makers evaluated)

Note: Of the above, only the Robotics 24/7 article has a confirmed URL. The others are identified by media name or document title, so please check the original sources as needed.

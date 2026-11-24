---
title: "Reading the MLX90901 and the TMA Paper Side by Side: A Three-Axis Fingertip Force Module and a Tactile-History Policy Point to Humanoid Touch Data Challenges"
date: 2026-11-25
description: "We read Melexis's MLX90901 fingertip tactile module alongside TMA, a sim-to-real humanoid study that uses tactile history, separating vendor-reported figures from points still unverified."
translation: /ja/blog/melexis-mlx90901-tma-tactile-sim-to-real/
templateEngineOverride: md
---

## Introduction

In humanoid robotics coverage, attention tends to go to the "force that moves the robot," such as joint actuators and reducers. Domestic press coverage has been especially focused on this, and this blog has also covered reducer and actuator trends.

However, once robots start handling objects with their hands, the next problem is contact information: how hard they can grip, and how they know that an object has started to slip. Human fingers constantly receive this kind of information from skin deformation and pressure distribution. In robots, tactile sensors take on this role.

In November 2026, two developments arrived in this area. The first is the tactile fingertip module "MLX90901," announced by Melexis on November 12. The second is preprint 2611.18976 (commonly called TMA), posted to arXiv on November 13. It is a study in which a policy that uses tactile history to carry out forceful manipulation was trained in simulation and then transferred to a real robot zero-shot.

This article reads the two from a technical standpoint. To be clear up front, we have not confirmed any direct relationship between them. What they appear to share is that both tactile hardware and contact data as learning material are becoming layers that matter for the practical deployment of humanoid hands. This is the editorial team's own reading; the source materials do not state it directly. From there, we sort out what is solid and what has not yet been verified.

The figures and facts in this article are based on public materials (press releases, paper abstracts and summaries, and industry media articles). We handle vendor claims and pre-peer-review research results separately.

## Background: Why Fingertip Touch Matters

When a robot hand grasps an object, the control system has two broad kinds of information available. One is internal information such as joint angles and motor current (proprioception). The other is external information about how the fingertip is contacting the outside world, which is touch.

There are limits to what can be handled with internal information alone. Even with the same finger bend angle, the force on the fingertip differs greatly depending on whether the object is hard or soft. Joint data alone also cannot directly tell you whether an object has started to slip.

On the research side, 2611.07881 (TactileLab) summarizes the current state as follows. Sim-to-real transfer for touch has so far been demonstrated mostly with arms and grippers, and for dexterous multi-fingered hands, it has been common to rely on proprioception or low-dimensional contact representations. The paper proposes a method that maps real tactile images into a dense "tactile flow" space used in simulation. In other words, efforts to learn with rich tactile information on multi-fingered hands are still at an early stage.

## Product Side: Overview of the MLX90901

### What Was Announced

In a press release dated November 12, 2026 (Tessenderlo-Ham, Belgium), Melexis announced the "MLX90901 Tactile Fingertip Module." The company describes the product as giving humanoid hands three-dimensional force sensing (normal and shear directions).

Electronics For You (dated November 23) reports that the product allows robots to detect slip and grip objects without crushing them. However, this is the publication's own summary, not the result of an independent performance verification.

### Approach: The Magnetic Tactaxis Technology

The product is based on the company's magnetic sensing technology, "Tactaxis." According to Melexis, the sensor, magnet, elastomer, mechanical structure, and surrounding electronics are integrated into one unit, and the company positions this as the result of four years of Tactaxis development.

Here is some background on the general principle of magnetic tactile sensors. (The following is a general explanation and does not describe the MLX90901's specific structure.) When the elastomer on the fingertip deforms under an external force, the position and orientation of the magnet change accordingly. A nearby magnetic sensor reads the change in the magnetic field, and signal processing estimates the magnitude and direction of the force. With this approach, the combination of sensor, magnet, and elastomer, along with signal processing, determines module performance. What stands out about this product is that these elements are offered as an integrated module rather than as a standalone chip.

### Specifications

The specifications Melexis has published are as follows.

| Item | Value (as published by Melexis) |
|---|---|
| Normal force range | 15 N |
| Shear force range | 4 N |
| Accuracy | 10% of full scale |
| Typical resolution | 200 mN |
| Interface | I²C (connects to the hand controller) |
| Calibration | Company states no end-of-line calibration is required |
| Evaluation kit | DVK90901 (available) |

Several points stand out.

First, the shear range (4 N) is set smaller than the normal range (15 N). The force range and resolution a fingertip needs depend on the object and grasp conditions, so whether this range is sufficient cannot be judged from the spec table alone.

Next, we converted the accuracy of "10% of full scale" into absolute values. This is the editorial team's own estimate. Assuming full scale refers to each axis's range, it corresponds to about 1.5 N in the normal direction and about 0.4 N in the shear direction. Since the typical resolution is 200 mN, the figures suggest that fine changes can be detected, but absolute error may be larger than that. Applications that monitor relative changes, such as early signs of slip, and applications that manage grip force in absolute terms may require different characteristics. The definition of accuracy and the measurement conditions should be checked against primary documentation.

### What "Zero Calibration" Means

Melexis states that this module does not require calibration at the end of the production line. In general, tactile sensors often need to correct for output variation between individual units, and calibration effort during mass production affects cost. If this claim holds in a production setting, it would reduce assembly work for hand manufacturers.

However, this point is also a vendor claim at this stage. We have found no independent information on the conditions under which it holds, how much variation is tolerated, or the effects of temperature and aging. Anyone considering adoption will need to ask the vendor for evaluation data covering these points.

## Research Side: What TMA Showed

### Task Setting: Opening a Round Door Knob

The paper for arXiv 2611.18976 is titled "TMA: Sim-to-Real Forceful Humanoid Manipulation via Tactile-Driven Motor Adaptation." The authors are Chen, Yu, Kaingade, Trinh, Hang, Martin-Martin, Fazeli, and Wu, and it was posted on November 13, 2026.

The study's benchmark is opening a round door knob. It looks simple, but it requires meeting the following conditions at the same time:

- Holding stably with multiple fingers over time
- Producing enough torque without slipping
- Pushing while adjusting force
- Maintaining whole-body stability

This is a "forceful manipulation" task that combines hand grasping with whole-body control, and it is a suitable task for testing the value of touch.

### Method: Adapting Motion from Tactile History

The central idea of TMA is to adapt motor behavior online based on the history of tactile interactions. According to the paper, this differs from "Rapid Motor Adaptation (RMA)." RMA is positioned as a method that adapts based on motion observations accumulated during execution. TMA, by contrast, places the cues for adaptation in the history of tactile interactions.

The training flow is as follows. The policy and an adaptation encoder are trained in simulation, using reinforcement learning (RL) for the policy and supervised latent regression for the adaptation encoder. The trained policy is then transferred to the real robot zero-shot, meaning with no additional training or fine-tuning on the hardware.

Running large numbers of trial-and-error attempts on real hardware incurs high costs in failures and time, which motivates training in simulation. Tactile sensing, however, is especially prone to the gap between simulation and reality (the sim-to-real gap), and the challenge is how faithfully contact physics and sensor responses can be modeled. TactileLab's effort to map tactile images into a shared space can be seen as one way of addressing this gap.

According to the alphaXiv summary page, the method uses cone geometry as an inductive bias to represent multi-finger contact. An inductive bias is a design choice that gives the model prior structural assumptions to make learning more efficient and stable. What this cone specifically refers to cannot be confirmed from the materials we consulted. From a contact mechanics perspective, one might assume a friction cone, but that is speculation and needs to be checked against the full text. Nor can we judge how much this design choice contributes without seeing the comparative experiments.

### Experimental Conditions

The robot is Unitree's G1 humanoid, and the hand is BrainCo's Revo2 dexterous hand. Tests were run on four commercially available door knob models, with RMA and reactive tactile baselines used for comparison.

### Points We Cannot Read: The Success Rates

There is a point that calls for caution. This study is a preprint that has not undergone peer review, and its abstract does not report quantitative results such as success rates. In the material we consulted when writing this article, we could not find specific numbers. For that reason, we cannot quote how much performance improved.

Evaluating the work will require checking the tables and experimental details in the full text. Key questions include whether the gap from the baselines holds consistently across door knob types, or whether it is concentrated in certain conditions.

## Reading the Two Side by Side: What Sits Between Sensors and Data

### No Direct Link Can Be Confirmed

The materials we checked contain no information that the BrainCo Revo2 hand used in TMA was equipped with the MLX90901. Nor do the materials we read say what tactile sensors the Revo2 has. Therefore, it cannot be said that TMA used Melexis's product.

What the two developments do support is a broader picture. On the hardware side, a module that measures three-dimensional force at the fingertip has appeared as a product. On the learning side, a study has appeared that uses tactile history and a policy trained in simulation to carry out forceful manipulation. Both are attempts to make tactile information usable in practice.

### Viewing Things Through "Contact Data"

Melexis names hand manufacturers and robot OEMs as the target customers for this module and refers to collecting "contact data." Here, contact data means time-series records of when contact occurred, how much force was applied, and in which direction.

In learning-based robot control, the quality and quantity of data determine performance. Even when training in simulation, validation and tuning with real-world contact data are unavoidable. When tactile history is used as input to a policy, as in TMA, the premise is that a sensor exists on the real robot that can capture that history. In that sense, sensor specifications and ease of integration are likely to be among the conditions for bringing research results to real hardware. However, the materials we reviewed do not show how far TMA examines sensor reliability.

## Organizing Tactile Sensor Approaches

An EE News article (dated November 9, 2026) lists three main options for humanoid touch:

- **6-axis force/torque (F/T) sensors**
- **Capacitive or piezoresistive taxel skins** (a taxel is the "pixel" of a tactile array)
- **Optical taxel pads**

The materials we reviewed do not establish the relative merits or challenges of each approach. In general, a 6-axis F/T sensor measures the total force and moment at a contact, while a taxel skin captures the distribution of contact across a surface. They measure different things.

By contrast, the MLX90901 is an integrated magnetic module placed at the fingertip. Because it measures normal and shear forces, it is positioned to capture fingertip contact locally.

Infineon, in a document dated October 21, 2026, also proposes using Hall sensors for joint position detection in humanoids and for tactile sensing in hands. A Hall sensor is an element that converts a magnetic field into a voltage and has been widely used for things like joint angle detection. The fact that magnetic sensing is being proposed for both position detection and touch is a notable point when considering hand design. However, the materials we reviewed do not let us determine how technically close the MLX90901 and Infineon's proposal are.

## Implications for Japan

Below, we outline what the confirmed material implies for Japanese companies, manufacturing sites, and investors. We do not fill in facts that are not in the sources, and we also note gaps in the information needed for decisions.

### Component Makers (Sensors, Magnetic Materials, Evaluation Tools)

Melexis's approach is to offer an integrated module combining the sensor, magnet, elastomer, mechanical structure, and electronics, along with an evaluation kit. This suggests that value may shift from the performance of standalone components to the integrated module and the evaluation environment around it.

Whether domestic makers of magnetic sensors or Hall elements can take a similar position cannot be determined from these materials. Domestic makers' products and strategies would need separate research.

### Manufacturing Sites Adopting Humanoids

Melexis clearly emphasizes collecting contact data. For manufacturing sites, the implication is that logging touch data could become part of a robot's specification. For example, if grip force and slip history can be recorded, that could help with root cause analysis of defects and with reviewing grasp conditions.

However, this remains a general observation. Our research did not find adoption cases or requirement specifications in Japanese factories. A realistic first step would be to clarify "how much force needs to be measured, and with what accuracy" for your own operations. As the spec reading above showed, whether a 10% FS accuracy meets that requirement depends on the application.

### Investors

The materials we reviewed contain no information on the MLX90901's business scale, sales, valuation, or the funding of the TMA research team. At this point, there is not enough basis to draw investment conclusions from these two developments. Any evaluation would require additional information, such as production plans and track record, customer adoption status, and independent performance evaluations.

## Uncertainties and Caveats

- **Melexis's figures are vendor claims.** The accuracy, resolution, zero calibration, and the "true 3D" description are based on the press release. We have not confirmed any independent test results. The absolute-value conversion of 10% FS is the editorial team's own estimate.
- **We cannot confirm any link between TMA and the MLX90901.** TMA used BrainCo's Revo2, and its tactile configuration cannot be read from the materials.
- **TMA is a preprint that has not been peer reviewed.** The abstract contains no success rate figures, so this article does not quote any performance numbers. We have also not confirmed the details of the cone geometry.
- **Date handling.** Melexis states its press release is dated November 12. Some sources list the date on the company's site as November 11, but this article uses November 12, the date of the press release.
- **Gaps in our research.** We could not find Japanese-language press coverage or any handling of this product by Japanese manufacturers. For the DVK90901, we found no information beyond "available," including pricing or procurement conditions.

## Summary

- On November 12, 2026, Melexis announced MLX90901, a magnetic fingertip tactile module. Published figures include a 15 N normal range, a 4 N shear range, 10% of full-scale accuracy, 200 mN resolution, and I²C connectivity. All of these are vendor claims.
- The module integrates a sensor, magnet, elastomer, mechanical structure, and electronics, and is based on four years of Tactaxis development.
- TMA (2611.18976) on arXiv uses tactile interaction history to transfer a door-opening policy zero-shot from simulation to real hardware (Unitree G1 and BrainCo Revo2). It is a preprint that has not been peer reviewed, and its abstract contains no success rate figures.
- Tactile sim-to-real transfer has so far centered on arms and grippers and remains at an early stage for multi-fingered hands.
- We have not confirmed any direct link between the two developments, but one can argue that tactile hardware and contact data are becoming layers that matter for the practical deployment of humanoid hands.
- For Japan, possible implications include a shift in component value toward integrated modules and the possibility of logging contact data on manufacturing sites. However, the materials we reviewed contain no domestic cases or investment information.

## Sources

- [Melexis: MLX90901 module: 3D force sensing for humanoid robots](https://www.melexis.com/en/news/2026/12nov2026-tactile-fingertip-module-sense-of-touch-humanoid-robots)
- [AZoSensors: Melexis Gives Humanoid Robots Sense of Touch with Its First Tactile Fingertip Module](https://www.azosensors.com/news.aspx?newsID=17005)
- [Electronica azi International: Melexis Gives Humanoid Robots Sense of Touch with Its First Tactile Fingertip Module](https://international.electronica-azi.ro/melexis-gives-humanoid-robots-sense-of-touch-with-its-first-tactile-fingertip-module/)
- [Robotics Tomorrow: Melexis Gives Humanoid Robots Sense of Touch with Its First Tactile Fingertip Module](https://www.roboticstomorrow.com/news/2026/11/12/melexis-gives-humanoid-robots-sense-of-touch-with-its-first-tactile-fingertip-module/27374)
- [Electronics For You: Fingertip module gives humanoids a sense of touch](https://www.electronicsforu.com/news/fingertip-module-gives-humanoids-a-sense-of-touch)
- [arXiv 2611.18976: TMA: Sim-to-Real Forceful Humanoid Manipulation via Tactile-Driven Motor Adaptation（abstract）](https://arxiv.org/abs/2611.18976)
- [arXiv 2611.18976: TMA（HTML版）](https://arxiv.org/html/2611.18976)
- [alphaxiv: TMA（スペイン語ページ）](https://www.alphaxiv.org/es/abs/2611.18976)
- [arXiv 2611.07881: TactileLab: Sim-to-Real Dexterous Robot Manipulation with Efficient Shear-Sensitive Tactile Simulation](https://arxiv.org/pdf/2611.07881)
- [All About Circuits: Summit 2026 - Advanced Position Sensing Solution For Humanoid Robots](https://www.allaboutcircuits.com/news/summit-2026-advanced-position-sensing-solution-for-humanoid-robots/)
- [EE World Online: How is the sense of touch being integrated into humanoid robots?](https://www.eeworldonline.com/how-is-the-sense-of-touch-being-integrated-into-humanoid-robots/)

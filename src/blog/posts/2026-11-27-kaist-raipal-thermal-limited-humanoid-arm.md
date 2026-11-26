---
title: "Reading KAIST's RAIPAL: A Humanoid Arm Designed Around Thermal Limits, Judged by 5 kg Continuous Load Rather Than a 20 kg Peak"
date: 2026-11-27
description: "This article examines KAIST's 7-DoF humanoid arm RAIPAL through its planetary gear layout, per-joint thermal model, and comparison with human sustained-work limits, and considers what it means for Japanese component makers."
translation: /ja/blog/kaist-raipal-thermal-limited-humanoid-arm/
templateEngineOverride: md
---

## Introduction

Humanoid performance is often described in terms of peak torque or maximum payload. For a robot that takes over human work, however, what matters is sustainability: how much load it can carry, and for how long, without thermal failure.

RAIPAL, presented by a team at KAIST, is a 7-degree-of-freedom (DoF) humanoid arm that puts this sustained performance at the center of its design. According to the paper, the actuators, mechanisms, and thermal design are derived from publicly available measurement data on human upper-limb work. Each joint is verified against a thermal Safe Operating Area (SOA), and the robot's sustained operating limits are compared with those of humans doing sustained work.

This article reviews RAIPAL's mechanisms, its thermal evaluation method, and how to read its numbers, and considers what it means for Japanese component suppliers and manufacturers. Facts stated in the paper are kept separate from my own inferences.

A note on dates: the arXiv preprint (2611.04334) was posted on November 3, 2026. The journal version appears in IEEE Robotics and Automation Letters (RA-L), Vol. 11, No. 12 (dated December 1, 2026), pp. 13813-13820. The authors are Donggeon Kim, Hyungho Chris Choi, Donghyuk Choi, Jeongsoo Park, Choongin Lee, Chan Park, and Jemin Hwangbo. The numbers cited in this article come from the arXiv version. I have not checked the RA-L PDF.

## RAIPAL's Design Philosophy: Three Elements With Different Roles

According to the paper's abstract, RAIPAL is a platform that combines the following elements:

- Upper arm: a component weighted toward force
- Forearm: a component weighted toward speed
- Elbow: a mechanism whose torque-speed relationship changes with posture
- Drive: planetary actuators with small electronic circuits built into each actuator

The basic design approach is to assign force to the upper arm and speed to the forearm, giving each a different reduction ratio and architecture.

The paper reports the following experimental results:

- Peak payload: 20 kg (2.25 times the arm's own mass)
- Tip speed: 20.6 m/s
- Continued operation under repeated hammering impacts

It is important to note that 20 kg is a peak value. The paper's table states that it was verified in a test in which one arm handled 20 kg for 60 seconds. The continuous payload is listed separately as 5.0 kg. The peak of 20 kg is four times the continuous 5 kg, so the two figures need to be read separately when evaluating this arm.

As for the 20.6 m/s tip speed, I could not determine from my review what conditions it was measured under. If you compare it with other arms, check the measurement conditions in the original paper.

## Upper Arm: 3K-Type (Wolfrom) Planetary Gear

The upper arm joint uses a compound planetary gear mechanism of the 3K (Wolfrom) type. A planetary gear is a reduction mechanism in which planet gears orbit a central sun gear. The 3K type combines two ring gears arranged axially, a compound planet gear rigidly connected, and a sun gear.

According to the paper, this configuration aims to provide the torque multiplication needed for large payloads while maintaining practical backdrivability, meaning the joint can be pushed back by external forces. The upper arm's reduction ratio is 22:1, achieved through the difference in size between the planetary stages. The paper says it also considered a simpler stepped configuration but chose the 3K type because the stepped design would need a larger envelope to reach the same ratio.

In other words, the design decision here is a trade-off between reduction ratio and size. Other architectures can also deliver a high ratio, but the 3K type was chosen to keep the arm within an acceptable thickness.

## Forearm: Speed and Torque Transparency

The forearm uses a single-stage planetary reducer with a ratio of 7.33:1. The paper states that this configuration provides high joint speed and torque transparency when accelerating the distal end, meaning that the motor torque reaches the output without being disturbed by drivetrain friction. The forearm's ratio is lower than the upper arm's 22:1, which reads as a deliberate priority on moving the tip quickly.

The paper also states two typical trade-offs in the transmission:

- Gear preload trades off backlash (play between gears) against static friction.
- Coulomb friction from gear meshing reduces transmission efficiency and torque transparency.

Preload reduces backlash but increases friction, and reducing friction leaves play. That the paper states this trade-off explicitly as a design premise is one of its distinguishing features.

## Elbow: A Crossed Four-Bar Linkage Whose Effective Ratio Changes With Angle

The elbow uses a crossed four-bar linkage. A four-bar linkage connects four links with revolute joints. In this mechanism, the effective reduction ratio changes with the elbow angle, so the relationship between torque and speed varies with elbow posture.

I could not determine from my review how far the paper maps this characteristic onto the properties of the human elbow. Here I limit myself to the mechanical fact that the elbow has an angle-dependent reduction ratio rather than a fixed one.

## Mass Breakdown and How to Read the Numbers

The following mass figures are taken from the paper's table.

| Item | Value |
|---|---|
| Mass of one arm | 8.9 kg |
| Upper arm actuator | 1.50 kg |
| Forearm actuator | 0.36 kg |
| Peak payload | 20.0 kg |
| Continuous payload | 5.0 kg |
| Ratio of peak payload to arm mass | 2.25:1 |

The 2.25:1 figure comes from 20.0 kg ÷ 8.9 kg. Applying the same calculation to the continuous payload gives 5.0 kg ÷ 8.9 kg, or about 0.56:1. This calculation is my own and not a metric the paper reports. It does show, however, that the headline "2.25 times its own weight" and the ratio of sustained payload to arm weight differ by roughly a factor of four.

The upper arm actuator (1.50 kg) is also about four times heavier than the forearm actuator (0.36 kg). Concentrating mass in the force-producing joint and keeping the distal end light is consistent with the forearm's goal of light, fast acceleration. However, I could not calculate what share of the 8.9 kg per arm the actuators account for, based on the table excerpt I reviewed.

An external LinkedIn post by an engineer affiliated with Siemens describes the robot as weighing about 10 kg and lifting about 5 kg across the whole workspace. Its figures do not match the 8.9 kg per arm in the arXiv table. The post is unofficial, and its timing information is not reliable, so this article uses the arXiv figures. Still, it is notable that the 5 kg figure matches the paper's continuous payload.

## Thermal Design: Treating Heat as a Specification Boundary, Not Just Cooling

On cooling, the paper describes a combination of small electronic circuits built into the actuators and conduction cooling into the chassis. In the material I reviewed, I found no mention of active cooling such as fans or liquid cooling.

The paper's distinguishing feature is that it treats heat not only as a problem to solve with cooling hardware, but as a boundary condition that defines the specification. The next section explains the method.

## How the Continuous Torque Is Determined

The paper models each joint with an identified thermal resistance R and thermal capacitance C. Thermal resistance indicates how much the temperature rises per unit of power. Thermal capacitance indicates how resistant the temperature is to rising. The continuously allowable power is calculated with the following formula:

P_allow = (T_max − T_amb) / R

T_max is the maximum allowable temperature and T_amb is the ambient temperature. Once the allowable power is set, the continuous torque corresponding to that power is obtained from the actuator's loss model.

For verification, each joint was run at its predicted continuous torque rating while the temperature change over time was recorded. The procedure checks whether the actual temperature stays below the limit at the predicted continuous torque.

A note in the table states that the P_allow calculation assumes T_max = 80 °C. This is an assumption within the paper and not a universal limit. The appropriate upper limit can vary with winding insulation, materials, and cooling conditions. If the same method is applied to another machine, this value must be verified again.

The thermal evaluation table (Table IV) lists values that appear to be continuous torques for the four upper-arm joints and three forearm joints. However, the extracted text I reviewed lost the column headings, so I could not confirm what each value means or its unit. For that reason, this article does not cite individual values. The only trend I could discern is that the magnitudes differ significantly between upper-arm and forearm joints, which is consistent with the actuator mass difference noted above. For the specific values, please consult the original paper PDF.

### How to Read the Gap Between Peak and Continuous (Inference)

From here on, this is my own inference. If the thermal capacitance is large, the temperature will not reach the limit during a short period even under loads well above the continuous rating. That a 20 kg test for 60 seconds was possible while the continuous payload remains 5 kg can be explained as the difference between a short-duration rating driven by thermal capacitance and a continuous rating determined by thermal resistance. I have not confirmed that the paper explains this relationship in exactly these terms.

## Comparison With Human Sustained-Work Limits

The paper compares the robot's thermal sustainable limits with human work benchmarks. Specifically, it uses Rohmert's maximum endurance time relationship as the boundary for human sustained work. In ergonomics, this model is known for describing the relationship between load as a fraction of muscular strength and the time a person can sustain it.

Based on the thermal analysis, the paper states that the robot's sustained operating capacity exceeds the published human load-duration boundary across almost the entire load range. The phrase "almost the entire" leaves open the possibility that it does not exceed the boundary in some load regions. It is worth checking the original paper's figures to see where the margin is closest.

The significance of this comparison is that it shifts the evaluation axis for robots from "how strong at peak" to "how long can it sustain work that fatigues a human." It directly ties ergonomic knowledge to robot specifications.

## Related Work: Moves to Align Measurement Conditions

A related study is "Human-Level Actuation for Humanoids" (arXiv 2511.06796). This is not a paper about RAIPAL but research from a different group. It reports measuring torque, power, and efficiency values under continuously safe conditions, after thermally soaking the actuator at the work duty until the temperature slope falls below 0.5 °C/s.

Placed beside RAIPAL, both works seek to base comparisons not on peak values but on values with explicitly stated thermal conditions. A catalog peak torque alone makes practical comparison between actuators difficult. How measurement conditions are standardized may become a precondition for future comparisons. I have not confirmed whether the two papers cite each other.

## What It Means for Japan

Below, I separate what the paper supports from my own inferences.

### Reducer, Motor, and Thermal Component Makers

RAIPAL uses planetary gears, which differ in architecture from the harmonic reducers this blog has covered before. For reducer and motor makers, however, the more important point is not the type of mechanism but the specification axis being optimized. This paper deals with continuous torque under thermal constraints. Backlash, friction, and torque transparency are also treated as explicit trade-offs.

In addition, the paper's method depends on thermal resistance and thermal capacitance identified for each axis. Suppliers of motors and reducers may therefore increasingly be asked for thermal resistance and capacitance parameters and continuous-torque maps, not just peak torque. This is not a conclusion the paper states directly. It is a guess based on the nature of the method.

### Manufacturers Considering Humanoid Deployment

The paper derives the robot's target values from measurements of human work. The process of measuring work load, duration, and posture and translating them into equipment specifications is close to the work analysis routinely done by production engineers and ergonomics staff. The paper itself takes the position that humanoid arm capability depends not only on actuator technology but also on how hardware requirements are chosen.

In practice, one way to use this is to compare arms using two values, such as 5 kg continuous and 20 kg peak, rather than a single payload figure in a catalog. This is my own inference from the paper's numbers. The paper does not make any claims about specific applications in Japan.

### Investors

RAIPAL is a university research platform. The material I reviewed contained no information on companies, products, pricing, fundraising, or commercial partners. No investment-relevant financial data can be derived from it.

## Caveats

- Mass and payload figures differ between sources. This article uses the arXiv table as its baseline.
- The column headings of Table IV are unconfirmed. The meaning of the values needs to be checked in the original.
- The 80 °C upper limit is an assumption in the paper.
- The evaluation covers the arm alone. The paper lists future work as integrating the arm into a full humanoid and testing more demanding whole-body locomotion and manipulation tasks.
- I read the arXiv version. Figures or wording may have changed in the RA-L version.
- I found no independent replication or industry response in the material I reviewed.

## Summary

- RAIPAL is a 7-DoF humanoid arm that sets its design benchmark on thermally sustainable performance rather than peak output.
- The upper arm uses a 22:1 3K-type planetary gear, the forearm a 7.33:1 single-stage planetary reducer, and the elbow a four-bar linkage whose ratio changes with angle.
- Peak payload is 20 kg (in a 60-second test), continuous payload is 5 kg, and arm mass is 8.9 kg.
- Continuous torque is derived from per-joint identified thermal resistance and capacitance, under the assumption T_max = 80 °C.
- The paper reports that sustained operating capacity exceeds the human boundary given by Rohmert's formula across almost the entire load range.
- For Japanese component makers and manufacturers, treating continuous torque and thermal parameters as specifications, alongside peak values, may become increasingly important.

## Sources

- [RAIPAL: A Powerful and Agile Humanoid Arm for Human Tasks (arXiv abstract page, 2611.04334)](https://arxiv.org/abs/2611.04334)
- [RAIPAL: A Powerful and Agile Humanoid Arm for Human Tasks (arXiv PDF)](https://arxiv.org/pdf/2611.04334)
- [RAIPAL: A Powerful and Agile Humanoid Arm for Human Tasks (arXiv HTML version)](https://arxiv.org/html/2611.04334v1)
- [Je Min Hwangbo - KAIST researcher page](https://pure.kaist.ac.kr/en/persons/je-min-hwangbo/)
- [Human-Level Actuation for Humanoids (arXiv 2511.06796)](https://arxiv.org/html/2511.06796)
- [Takeru Nemoto - LinkedIn (referenced as unofficial information)](https://www.linkedin.com/in/takeru-nemoto-911b87171/)

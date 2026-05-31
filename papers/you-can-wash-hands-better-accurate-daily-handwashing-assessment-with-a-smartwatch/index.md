---
title: You Can Wash Hands Better: Accurate Daily Handwashing Assessment with a Smartwatch
authors: Fei Wang, Tingting Zhang, Xilei Wu, Pengcheng Wang, Xin Wang, Han Ding, Jingang Shi, Jinsong Han, Dong Huang
institution: XJTU, XDU, Kuaishou, ZJU, CMU
summary: UWash is a smartwatch-only handwashing assessment system that treats daily handwashing as fine-grained temporal segmentation, estimating gesture boundaries, per-gesture duration, and WHO-guideline-based quality scores from IMU streams.
theme: Wearable Health Sensing
cover: ./assets/uwash-overview.png
coverAlt: UWash smartwatch handwashing assessment overview
eyebrow: Publication
code: https://github.com/aiotgroup/UWash
paper: https://arxiv.org/abs/2112.06657
---

# Overview

Hand hygiene is one of the most effective daily practices for preventing infectious diseases, yet people often do not follow standard procedures consistently. A questionnaire in the paper, covering **505 subjects across 26 provinces in China**, found that most respondents had heard of WHO or seven-step handwashing guidelines, but only **34.65%** reported following standard guidelines.

**UWash** is designed for daily use rather than fixed clinical infrastructure. It uses only smartwatch IMU data, specifically accelerometer and gyroscope streams, to detect the start and end of handwashing, segment fine-grained gestures, estimate gesture durations, and score both each gesture and the whole procedure according to WHO-style guidance.

The institution field is abbreviated at the university/company level: **XJTU**, **XDU**, **Kuaishou**, **ZJU**, and **CMU**.

<figure class="markdown-figure">
  <img src="./assets/uwash-overview.png" alt="UWash overview with smartwatch IMU streams, segmented handwashing gestures, and scores">
  <figcaption>Figure 1. UWash converts smartwatch IMU signals into gesture segments and handwashing quality scores.</figcaption>
</figure>

## What UWash Adds

UWash targets six practical requirements for daily handwashing assessment: it works across locations, uses no additional sensors, automatically detects procedure start and end, supports random gesture order, reports the duration of each gesture, and provides instructive quality scores.

This is different from many prior systems that rely on cameras, fixed sensors, RFID, dispensers, smart faucets, or manual activation. UWash is also more fine-grained than simply detecting whether someone washed hands; it estimates how the procedure unfolded.

## Main Contributions

- Proposes a smartwatch-only daily handwashing assessment system that can detect, segment, and score a complete handwashing procedure.
- Reformulates handwashing assessment as a **temporal semantic segmentation** problem rather than top-down slicing or window-wise classification.
- Designs a lightweight two-stream UNet-like model for accelerometer and gyroscope data, enhanced with squeeze-and-excitation, pyramid pooling, multiple test voting, and mode filtering.
- Builds a dataset with **51 subjects** across **5 locations** and evaluates user-dependent, cross-participant, cross-location, cross-time, and wild-study settings.
- Releases both code and dataset for research use.

## Method

UWash uses a bottom-up time-series segmentation strategy. Instead of first cutting the signal into uncertain slices, it performs sample-wise recognition over IMU sequences and then smooths the sequence-level output. This lets the system recover gesture boundaries and durations directly from the predicted labels.

The model uses two branches, one for accelerometers and one for gyroscopes. Each branch adapts UNet-style temporal encoding and decoding to 1D IMU data. The two streams are fused before prediction so the model can combine complementary motion cues from both sensors.

<figure class="markdown-figure">
  <img src="./assets/uwash-architecture.png" alt="UWash two-stream UNet-like architecture for accelerometer and gyroscope time-series segmentation">
  <figcaption>Figure 2. The UWash architecture processes accelerometer and gyroscope streams with dual temporal UNet branches and produces sample-wise gesture predictions.</figcaption>
</figure>

## Dataset And Evaluation Setup

The main dataset was collected with Samsung Gear Sport smartwatches. To increase environmental diversity, data were collected in **five campus locations**: teaching hall, laboratory hall, cafeteria, dormitory, and library. Participants were asked to walk to the sink, wash hands, and leave, while natural actions such as wetting hands, applying soap, and drying hands were allowed to vary.

The paper evaluates UWash in several settings:

| Setting | Description |
| --- | --- |
| User-dependent | First four handwashing procedures per participant for training, last procedure for testing |
| Cross-participant | Leave-one-participant-out across 51 participants |
| Cross-participant-cross-location | Train on 50 participants and 4 locations, test on the held-out participant/location |
| Cross-participant-cross-location-cross-time | New hospital dataset with 10 passersby collected 9 months later |
| Wild study | 10 passersby tested under not-trained, trained, and shuffled/omitted-step conditions |

## Core Results

| Metric | Result |
| --- | --- |
| User-dependent gesture recognition accuracy | 92.27% |
| Mean precision / recall / F1 | 91.26% / 90.85% / 0.91 |
| Model parameters | 0.099M, about 496 KB |
| Start detection mean error | 0.49 s |
| End detection mean error | 0.23 s |
| Handwashing scoring mean error | 4.0 points |
| Participants above 95% accuracy | 33 of 51 |

The final UWash model achieves the best result in the paper's main comparison table while using only about **2.5%** of the parameters of ResNet-18-1D.

<figure class="markdown-figure">
  <img src="./assets/main-results-table.png" alt="UWash main results table comparing model variants and baselines">
  <figcaption>Figure 3. UWash combines two-stream modeling, SE, PPM, multiple test voting, and mode filtering to reach 92.27% accuracy with 0.099M parameters.</figcaption>
</figure>

<figure class="markdown-figure">
  <img src="./assets/user-dependent-results.png" alt="UWash user-dependent participant results and start/end scoring visualization">
  <figcaption>Figure 4. User-dependent evaluation shows strong participant-level performance and low start/end and scoring errors.</figcaption>
</figure>

## Cross-Domain And Cross-Time Results

| Setting | Accuracy | Start error | End error | Score error |
| --- | ---: | ---: | ---: | ---: |
| Cross-participant | 83.34% | 0.43 s | 0.23 s | 12.74 pts |
| Cross-participant-cross-location | 81.45% | 0.48 s | 0.36 s | 15.21 pts |
| Cross-participant-cross-location-cross-time | 82.08% | 0.39 s | 0.14 s | 14.30 pts |

The cross-time test is especially useful: the authors collected a new hospital dataset with **10 random passersby 9 months later**, at a new location and on a new date. UWash stayed in the same performance range as the cross-participant-cross-location setting, suggesting promising robustness over time.

<figure class="markdown-figure">
  <img src="./assets/cross-domain-results.png" alt="UWash cross-participant and cross-location evaluation results">
  <figcaption>Figure 5. UWash remains effective in cross-participant and cross-location evaluation, with sub-second start/end detection errors.</figcaption>
</figure>

<figure class="markdown-figure">
  <img src="./assets/cross-time-wild-study.png" alt="UWash cross-time hospital test and wild study results">
  <figcaption>Figure 6. Cross-time and wild-study results show that UWash can detect improvement after training and score drops when steps are shuffled or omitted.</figcaption>
</figure>

## Deployment Notes

The paper reports that UWash is lightweight enough for edge-oriented deployment. The model has only **0.099M parameters**, and the authors measured latency on an Intel Core i7-620M class CPU. With a stride of 10, a 60-second handwashing sequence takes about **2.18 s** to process; clip-level inference for a 1.28-second IMU clip takes about **0.0067 s**.

The paper also includes an Apple Watch S5 cross-device check. With simple axis swapping and a model trained on Samsung Gear Sport data, UWash achieved **76.24% accuracy**, **0.39 s start error**, **0.57 s end error**, and **18.81-point score error**, suggesting cross-device potential while leaving room for better coordinate alignment.

## Resources

- Code and dataset: [https://github.com/aiotgroup/UWash](https://github.com/aiotgroup/UWash)
- Paper: [https://arxiv.org/abs/2112.06657](https://arxiv.org/abs/2112.06657)
- Venue: IEEE Transactions on Mobile Computing, 2025

## Citation

```bibtex
@article{wang2025uwash,
  title = {You Can Wash Hands Better: Accurate Daily Handwashing Assessment with a Smartwatch},
  author = {Wang, Fei and Zhang, Tingting and Wu, Xilei and Wang, Pengcheng and Wang, Xin and Ding, Han and Shi, Jingang and Han, Jinsong and Huang, Dong},
  journal = {IEEE Transactions on Mobile Computing},
  year = {2025}
}
```

---
title: WS-IMUBench: Can Weakly Supervised Methods from Audio, Image, and Video Be Adapted for IMU-based Temporal Action Localization?
authors: Pei Li, Jiaxi Yin, Lei Ouyang, Shihan Pan, Ge Wang, Han Ding, Fei Wang
institution: Xi'an Jiaotong University
theme: Wearable Action Localization
summary: WS-IMUBench formalizes weakly supervised IMU temporal action localization and benchmarks seven representative methods transferred from audio, image, and video on seven public IMU datasets under sequence-level labels.
cover: ./assets/fig1-cross-modal-ws-imu-tal.png
coverAlt: Cross-modal weak supervision analogy from audio, image, and video to IMU temporal action localization.
eyebrow: Publication
paper: https://arxiv.org/pdf/2602.01850
---

# Overview

IMU-based Human Activity Recognition (HAR) has enabled many wearable and ubiquitous computing applications, but the common **clip classification** paradigm only predicts one label for a pre-segmented sensor snippet. Real-world behavior is continuous: actions start, stop, overlap, transition, and repeat. This paper therefore studies **IMU Temporal Action Localization (IMU-TAL)**, where a model must predict both the action category and the temporal boundaries of each action in a continuous inertial stream.

The main obstacle is annotation cost. Fully supervised TAL requires dense start/end boundary labels, which are expensive and inconsistent to annotate for abstract IMU waveforms. **WS-IMUBench** addresses this bottleneck by studying **Weakly Supervised IMU-TAL (WS-IMU-TAL)**, where training uses only sequence-level multi-hot labels that indicate which actions appear, without revealing when they occur.

Rather than proposing one more localization model, the paper asks a broader question: can weakly supervised localization methods that work in **audio**, **image**, and **video** be adapted to IMU streams? WS-IMUBench answers this through a systematic benchmark, standardized task setup, unified metrics, and diagnostic analysis of transfer failures.

<figure class="markdown-figure">
  <img src="./assets/fig1-cross-modal-ws-imu-tal.png" alt="Cross-modal weak supervision analogy from audio, image, and video to IMU temporal action localization.">
  <figcaption>Weak supervision has already been successful in audio, image, and video localization tasks. WS-IMUBench asks whether the same coarse-label-to-fine-boundary idea can transfer to continuous IMU streams.</figcaption>
</figure>

## At A Glance

| Item | WS-IMUBench Setup |
| --- | --- |
| Task | Weakly supervised IMU Temporal Action Localization |
| Supervision | Sequence-level multi-hot labels only |
| Methods | 7 weakly supervised methods from audio, image, and video |
| Datasets | 7 public IMU datasets |
| Training scale | 3,540 training runs |
| Inference scale | 7,080 inference evaluations |
| Main metrics | Frame-level Precision/Recall/F1, misalignment ratios, segment-level mAP |

## Research Questions

The benchmark is organized around three research questions:

- **RQ1: Transferability.** How can weakly supervised localization paradigms from other modalities be adapted to continuous IMU streams? What IMU-specific choices are needed for instances, bags, aggregation, and proposals?
- **RQ2: Effectiveness.** How well do transferred weakly supervised methods recognize and localize actions across diverse IMU datasets?
- **RQ3: Insights and future directions.** What are the main failure modes, and what do they imply for better WS-IMU-TAL systems?

## Problem Formulation

WS-IMUBench casts WS-IMU-TAL as a **Multiple Instance Learning (MIL)** problem:

- A long untrimmed IMU recording is treated as a **bag**.
- Candidate temporal clips, snippets, or proposals are treated as **instances**.
- Each bag has only a **sequence-level label**, indicating which action classes appear somewhere in the sequence.
- The model must learn instance-level action evidence from bag-level supervision, then output predicted action tuples `(class, start, end)` during inference.

This formulation makes cross-modal transfer possible. The paper does not transfer raw representations from audio, image, or video. Instead, it transfers the **bag-instance abstraction**, **weak aggregation mechanisms**, and **localization/refinement strategies**, then adapts them to IMU-specific temporal signals.

<figure class="markdown-figure">
  <img src="./assets/fig2-mil-pipeline.png" alt="Multiple Instance Learning pipeline for weakly supervised IMU temporal localization.">
  <figcaption>The benchmark frames an untrimmed IMU sequence as a bag, temporal candidates as instances, and sequence-level labels as bag-level supervision.</figcaption>
</figure>

## Cross-Modal Method Adaptation

WS-IMUBench adapts seven representative weakly supervised methods from three established domains.

| Source Modality | Paradigm | Adapted Methods | IMU Interpretation |
| --- | --- | --- | --- |
| Audio | Weakly supervised sound event detection | DCASE, CDur | IMU streams are 1D temporal signals; slice-level predictions are aggregated with MIL pooling. |
| Image | Weakly supervised object detection | WSDDN, OICR, PCL | Temporal intervals replace image region proposals; proposal scoring and pseudo-label refinement are transferred to 1D time. |
| Video | Weakly supervised temporal action localization | CoLA, RSKP | IMU snippets play the role of video snippets; contrastive refinement and temporal propagation improve localization. |

The image-derived methods require the largest adaptation because IMU data does not have an equivalent of visual region proposal algorithms such as Selective Search. The paper therefore uses a **multi-scale temporal proposal generator**, producing **3,000 temporal proposals per sequence** through a mix of structured sliding windows and random sampling.

<figure class="markdown-figure">
  <img src="./assets/fig5-temporal-proposal-generation.png" alt="Comparison between image region proposal generation and IMU temporal proposal generation.">
  <figcaption>For image-derived weakly supervised detection methods, 2D region proposals are replaced with multi-scale temporal proposals over the IMU timeline.</figcaption>
</figure>

## Benchmark Datasets

The evaluation covers seven public IMU datasets spanning daily activities, sports, locomotion, and laboratory procedures.

| Dataset | Subjects | Classes | Sensor Axes | Median Segment Duration | Scenario |
| --- | ---: | ---: | ---: | ---: | --- |
| SBHAR | 30 | 12 | 3 | 12.76 s | Locomotion |
| Opportunity | 4 | 17 | 113 | 2.60 s | Daily-life actions |
| WetLab | 22 | 8 | 3 | 11.23 s | Laboratory |
| Hang-Time | 24 | 5 | 3 | 1.80 s | Sports |
| RWHAR | 15 | 8 | 21 | 621.16 s | Locomotion |
| WEAR | 18 | 18 | 12 | 43.12 s | Sports |
| XRFV2 | 16 | 30 | 36 | 7.00 s | Daily-life actions |

These datasets expose very different temporal regimes. Opportunity and Hang-Time contain short, frequent transitions; RWHAR has extremely long continuous action segments; XRFV2 has relatively uniform durations; SBHAR, WetLab, and WEAR sit between these extremes. This diversity is central to understanding when weak supervision works and when it breaks.

<figure class="markdown-figure">
  <img src="./assets/fig7-dataset-visualization.png" alt="Visualization of temporal action distributions across seven IMU benchmark datasets.">
  <figcaption>The seven datasets differ sharply in action duration, transition frequency, and temporal regularity, which explains why weak supervision succeeds on some benchmarks and struggles on others.</figcaption>
</figure>

## Evaluation Protocol

The benchmark evaluates **7 weakly supervised models** and **3 fully supervised upper-bound models**: ActionFormer, TemporalMaxer, and TriDet. All methods are run with three random seeds: `2022`, `2024`, and `2026`.

For Opportunity, Hang-Time, SBHAR, RWHAR, WetLab, and WEAR, the paper uses **leave-one-subject-out (LOSO)** cross-validation. For XRFV2, it reports both cross-subject LOSO and the official in-domain split.

Two inference modes are compared:

- **full_input:** process the entire continuous stream at once, approximating offline analysis.
- **window_input:** process shorter windows and merge predictions with temporal non-maximum suppression, approximating online or streaming use.

Window lengths are dataset-dependent: 100 seconds for Opportunity and Hang-Time, 1000 seconds for RWHAR, SBHAR, WEAR, and WetLab, and 30 seconds for XRFV2.

## Metrics

WS-IMUBench deliberately goes beyond a single mAP number. It evaluates both continuous labeling quality and segment detection quality:

- **Frame-level Precision, Recall, and F1** after rasterizing predicted and ground-truth segments into per-time-step labels.
- **Misalignment ratios**, including deletion, underfill, fragmentation, insertion, overfill, and merge errors.
- **Segment-level mAP** averaged across temporal IoU thresholds `{0.3, 0.4, 0.5, 0.6, 0.7}`.

This combination helps diagnose why a method fails: it may classify the right action but miss boundaries, over-fragment actions, hallucinate background, or merge adjacent segments.

## Key Findings

### Transfer Is Modality-Dependent

Temporal-domain methods adapted from audio and video are generally more stable than image-derived proposal methods. DCASE and RSKP are strong examples because their original designs already assume continuous sequential data. In contrast, WSDDN, OICR, and PCL depend heavily on proposal quality; temporal proposals generated from IMU signals are much weaker than visual object proposals generated from images.

### Weak Supervision Can Be Competitive On Favorable Datasets

Weakly supervised methods can achieve meaningful localization without frame-level boundaries. The strongest results appear on datasets with longer actions and richer sensing:

- On **RWHAR**, DCASE reaches **65.07 mAP**.
- On **WEAR**, RSKP reaches **63.29 mAP**.

These results narrow the gap to fully supervised methods on favorable datasets, suggesting that weak supervision is practical when action duration and sensing dimensionality provide enough temporal evidence.

### Short Actions And Low-Dimensional Signals Are Hard

Performance drops sharply on datasets dominated by short actions or sparse sensor channels. Opportunity has a median action duration of only **2.60 seconds**, and SBHAR uses only **3 sensor axes**. In these cases, sequence-level labels provide too little temporal signal for reliable boundary discovery.

### Larger Models Are Not Necessarily Better

Model scale does not directly predict WS-IMU-TAL performance. RSKP is one of the lightest evaluated methods, with **274,944 trainable parameters**, yet it is a top performer across several datasets. OICR and PCL are much heavier, both with **31,907,948 parameters**, but their performance is limited by proposal quality and weak pseudo-label refinement under IMU-specific noise.

<figure class="markdown-figure">
  <img src="./assets/fig8-model-parameters.png" alt="Trainable parameter comparison for the weakly supervised models in WS-IMUBench.">
  <figcaption>Model size alone does not explain performance: lightweight temporal methods can outperform much larger proposal-based models when their inductive bias better matches IMU streams.</figcaption>
</figure>

### Window-Level And Full-Sequence Inputs Behave Differently

Different model families prefer different input regimes. Detection-style methods such as DCASE and CDur often benefit from full-sequence context. Proposal-based MIL methods such as WSDDN, OICR, and PCL can degrade on full sequences because sparse action evidence becomes diluted. CoLA often benefits from cleaner window-level contrastive learning, while RSKP is comparatively robust due to temporal propagation.

<figure class="markdown-figure">
  <img src="./assets/fig9-prediction-visualization.png" alt="Prediction visualization comparing ground truth, full-input inference, and window-input inference across datasets.">
  <figcaption>Prediction visualizations compare ground truth with full-sequence and window-level inference, making over-segmentation, missed boundaries, and dataset-specific behavior easier to inspect.</figcaption>
</figure>

## Failure Modes

The paper identifies three recurring bottlenecks:

- **Dataset heterogeneity.** IMU datasets differ in placement, axis count, sampling rate, action duration, subject behavior, and preprocessing. A model that works on one dataset may not transfer cleanly to another.
- **Temporal proposal generation.** IMU lacks a content-aware proposal mechanism comparable to image object proposals. Random or structured sampling can miss true action boundaries, creating a hard ceiling for proposal-based weak supervision.
- **Lack of unified IMU pretraining.** Unlike vision, the IMU community does not yet have an ImageNet-like pretraining foundation. Cross-dataset representation alignment is difficult because coordinate frames, sensor placements, missing modalities, and device filters vary widely.

## Future Directions

WS-IMUBench points to several research directions for scalable weakly supervised IMU localization:

- IMU-specific temporal proposal generation using change-point detection, actionness scoring, or learned proposal networks.
- Boundary-aware objectives that preserve onset and offset information instead of only optimizing sequence-level classification.
- Multi-scale temporal modeling to separate dominant actions from subtle concurrent actions.
- IMU foundation models trained with objectives that preserve temporal structure, not just clip-level semantics.
- Standardized pretraining and evaluation suites to reduce fragmentation across datasets and devices.

## Why It Matters

The paper helps move IMU sensing beyond isolated clip recognition toward scalable continuous behavior understanding. If weakly supervised localization can work reliably, future wearable systems could learn from cheap sequence-level labels instead of expensive dense annotations, making it easier to build health monitoring, sports analytics, activity summarization, and real-world context-aware sensing systems.

## Resources

- [arXiv abstract](https://arxiv.org/abs/2602.01850)
- [PDF](https://arxiv.org/pdf/2602.01850)

## Citation

```bibtex
@article{li2026wsimubench,
  title = {WS-IMUBench: Can Weakly Supervised Methods from Audio, Image, and Video Be Adapted for IMU-based Temporal Action Localization?},
  author = {Li, Pei and Yin, Jiaxi and Ouyang, Lei and Pan, Shihan and Wang, Ge and Ding, Han and Wang, Fei},
  journal = {arXiv preprint arXiv:2602.01850},
  year = {2026}
}
```

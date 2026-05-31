---
title: CAREC: Continual Wireless Action Recognition with Expansion–Compression Coordination
authors: Tingting Zhang, Qunhang Fu, Han Ding, Ge Wang, Fei Wang
institution: XJTU, XDU
summary: CAREC is a class-incremental Wi-Fi action recognition framework that alternates dynamic model expansion with balanced knowledge distillation, reducing catastrophic forgetting while keeping the model compact for long-term deployment.
theme: Continual Wireless Sensing
cover: ./assets/carec-expansion-compression.png
coverAlt: CAREC expansion and compression pipeline
eyebrow: Publication
code: https://github.com/aiotgroup/carec/
paper: https://doi.org/10.3390/s25154706
---

# Overview

Wi-Fi sensing systems often start with a fixed set of actions, but real deployments keep changing: a user may first need smoking detection, then later add fall detection, medication reminders, or other household activities. Retraining from scratch is inefficient, while simply updating a model on new classes can cause catastrophic forgetting.

**CAREC** addresses this class-incremental learning problem for Wi-Fi-based indoor action recognition. It alternates between a model expansion stage, which learns new action classes while preserving old features, and a compression stage, which distills the expanded model back into a compact single-backbone student.

The institution field is abbreviated at the university level: **XJTU** and **XDU**.

<figure class="markdown-figure">
  <img src="./assets/carec-class-incremental-learning.png" alt="Class-incremental Wi-Fi action recognition model updating">
  <figcaption>Figure 1. CAREC targets class-incremental Wi-Fi action recognition, where new classes arrive over time without forgetting old ones.</figcaption>
</figure>

## Main Contributions

- Introduces a continual wireless action recognition framework tailored to class-incremental Wi-Fi sensing.
- Uses dynamic expansion with frozen historical feature extractors and a new trainable extractor for each incoming session.
- Adds a super-feature extractor and auxiliary classifier to better separate old and new classes.
- Compresses the expanded teacher into a compact student through balanced knowledge distillation.
- Evaluates on XRF55 and achieves the best final-stage performance among classical and recent CIL baselines.

## Method

CAREC separates learning into two coordinated phases.

In the **expansion phase**, the previous feature extractor is frozen and a new extractor is initialized from it. The model then concatenates features from old and new extractors into a super-feature representation. This lets the network keep stable knowledge for old actions while still adapting to newly introduced actions.

In the **compression phase**, the expanded model acts as a teacher. A lightweight single-backbone student learns from it using balanced knowledge distillation, where class-wise weights compensate for the imbalance between many new-class samples and fewer replayed old-class exemplars.

<figure class="markdown-figure">
  <img src="./assets/carec-expansion-compression.png" alt="CAREC expansion and compression workflow">
  <figcaption>Figure 2. CAREC alternates expansion for adaptability and compression for deployment efficiency.</figcaption>
</figure>

<figure class="markdown-figure">
  <img src="./assets/carec-super-feature-extractor.png" alt="CAREC dynamic expansion with super-feature extractor and auxiliary classifier">
  <figcaption>Figure 3. Dynamic expansion preserves previous feature extractors while adding new capacity for incoming action classes.</figcaption>
</figure>

<figure class="markdown-figure">
  <img src="./assets/carec-balanced-distillation.png" alt="CAREC balanced knowledge distillation from expanded teacher to compact student">
  <figcaption>Figure 4. Balanced knowledge distillation compresses the expanded teacher into a single-backbone student while reweighting underrepresented classes.</figcaption>
</figure>

## Dataset And Protocol

The evaluation uses **Scene 1 of XRF55**, which contains **55 action classes**, **30 volunteers**, and **33,000 samples**. Following the CCS protocol, the dataset is split into five non-overlapping sessions, each adding 11 action classes. During each incremental update, CAREC uses the current session data plus representative exemplars selected from the previous session through Herding replay.

| Dataset | Action classes | Volunteers | Samples | Categories |
| --- | ---: | ---: | ---: | ---: |
| Widar3.0 | 16 | 16 | 17,000 | 2 |
| WiAR | 16 | 10 | 4,800 | 1 |
| ARIL | 6 | 1 | 1,394 | 1 |
| MM-Fi | 27 | 40 | 9 h | 2 |
| UI-HAR | 6 | 6 | 720 | 1 |
| XRF55 | 55 | 39 | 42,900 / 59.58 h | 5 |

## Evaluation Highlights

| Method | Session 0 | Session 1 | Session 2 | Session 3 | Session 4 |
| --- | ---: | ---: | ---: | ---: | ---: |
| Baseline | 89.67 | 38.84 | 26.97 | 21.83 | 16.25 |
| iCaRL | 90.41 | 74.09 | 66.90 | 63.68 | 63.49 |
| BiC | 86.11 | 64.91 | 52.56 | 50.10 | 44.35 |
| UCIR | 88.07 | 77.16 | 69.24 | 61.73 | 63.58 |
| BEEF | 89.81 | 73.11 | 63.46 | 57.72 | 53.73 |
| CCS | 87.48 | 75.02 | 66.59 | 59.16 | 60.45 |
| CAREC | 89.44 | 81.36 | 75.00 | 63.46 | 67.84 |

CAREC reaches **67.84% final-session accuracy** across all 55 action classes, outperforming the strongest baselines at the last stage. The paper also reports that CAREC reduces performance degradation by **51.82%** over four incremental stages.

<figure class="markdown-figure">
  <img src="./assets/carec-accn-comparison.png" alt="ACCN comparison of CAREC and class-incremental learning baselines">
  <figcaption>Figure 5. CAREC maintains stronger ACCN over incremental sessions than classic and recent continual-learning baselines.</figcaption>
</figure>

## Compression Results

Without compression, the expanded model reaches **105.24 M** parameters. CAREC compresses it to **21.08 M** parameters, about **20%** of the expanded model, while keeping the final-stage accuracy close to the uncompressed teacher.

| Compression | Parameters | Session 0 | Session 1 | Session 2 | Session 3 | Session 4 |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| No | 105.24 M | 89.44 | 88.07 | 78.40 | 72.00 | 70.09 |
| Yes | 21.08 M | 89.44 | 81.36 | 75.00 | 63.46 | 67.84 |

<figure class="markdown-figure">
  <img src="./assets/carec-compression-curve.png" alt="CAREC ACCN with and without compression">
  <figcaption>Figure 6. Compression largely preserves accuracy while preventing continual model growth.</figcaption>
</figure>

## Resources

- Code: [https://github.com/aiotgroup/carec/](https://github.com/aiotgroup/carec/)
- Experiment configs: [https://github.com/aiotgroup/carec/tree/main/exps](https://github.com/aiotgroup/carec/tree/main/exps)
- Paper DOI: [10.3390/s25154706](https://doi.org/10.3390/s25154706)

## Citation

```bibtex
@article{zhang2025carec,
  title = {CAREC: Continual Wireless Action Recognition with Expansion--Compression Coordination},
  author = {Zhang, Tingting and Fu, Qunhang and Ding, Han and Wang, Ge and Wang, Fei},
  journal = {Sensors},
  volume = {25},
  number = {15},
  pages = {4706},
  year = {2025},
  doi = {10.3390/s25154706}
}
```

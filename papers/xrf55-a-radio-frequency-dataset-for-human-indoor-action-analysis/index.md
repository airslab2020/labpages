---
title: XRF55: A Radio Frequency Dataset for Human Indoor Action Analysis
authors: Fei Wang#, Yizhe Lv, Mengdie Zhu, Han Ding, Jinsong Han
institution: XJTU / ZJU
theme: RF Action Dataset
summary: XRF55 is a large-scale multi-RF benchmark for indoor human action analysis, pairing Wi-Fi, RFID, mmWave radar, and synchronized Azure Kinect streams across 55 action classes, 39 subjects, four scenes, and more than 42.9K samples collected over 100 days.
cover: ./assets/teaser.png
coverAlt: XRF55 hardware setup and dataset overview
eyebrow: Publication
project: https://aiotgroup.github.io/XRF55
code: https://github.com/aiotgroup/XRF55-repo
paper: https://doi.org/10.1145/3643543
slides: https://github.com/aiotgroup/XRF55-repo/blob/main/Fei-Ubicomp24-XRF55-with-notes-10.7.pptx
---

# Overview

**XRF55** is a dataset paper with a very practical agenda: move RF sensing for indoor action analysis beyond narrow, single-task, lab-only benchmarks. The paper argues that many earlier RF datasets are either too small, too specialized, or not public, which makes it hard to train robust models or evaluate methods that could eventually leave the lab.

The resulting benchmark is unusually broad for RF sensing. It combines **Wi-Fi, RFID, mmWave radar, and synchronized RGB+D+IR video** into one collection designed around realistic indoor actions rather than a tiny list of gestures. The authors also include a **deep mutual learning** baseline to show that the three RF modalities can be trained collaboratively while still being deployed independently at inference time.

> Core idea: build a large, diverse, synchronized RF benchmark first, then use it to study how multiple RF modalities can help one another without requiring late-fusion deployment.

<figure class="markdown-figure">
  <img src="./assets/teaser.png" alt="XRF55 hardware setup and data modalities">
  <figcaption>Figure 1 from the paper. XRF55 combines 23 RFID tags, 9 Wi-Fi links, one mmWave radar, and one Azure Kinect, making it a unified benchmark for multi-RF indoor action analysis.</figcaption>
</figure>

## What XRF55 Contains

The paper reports the following scale:

| Property | Value |
| --- | --- |
| Action classes | 55 |
| Subjects | 39 |
| Valid RF samples | 42,900 |
| Effective duration | 59h 35min |
| Collection span | 100 days |
| Scenes | 4 indoor scenes |
| RF modalities | RFID, Wi-Fi, mmWave |
| Paired vision modality | Azure Kinect RGB + Depth + IR |

The **55 action classes** are organized to cover a wide range of indoor activities, not just one application niche. The paper groups them into five families:

- human-object interaction,
- human-human interaction,
- fitness,
- body motion,
- and human-computer interaction.

This matters because the benchmark is intended to support downstream scenarios such as fall detection, fatigue monitoring, domestic violence detection, smart-home assistance, and embodied interaction, instead of only one carefully scripted task.

<figure class="markdown-figure">
  <img src="./assets/action-classes.png" alt="Collage of 55 XRF55 action classes">
  <figcaption>Figure 4 from the paper. XRF55 covers 55 indoor actions across five categories, making it one of the broadest RF action benchmarks built with commodity devices.</figcaption>
</figure>

## Collection Setup and Modalities

XRF55 is collected with **commodity hardware**:

- **23 RFID tags** at `922.38 MHz`
- **9 Wi-Fi links** at `5.64 GHz`
- **1 mmWave radar** at `60-64 GHz`
- **1 Azure Kinect** with synchronized `RGB + Depth + IR`

The sensors span **decimeter-wave, centimeter-wave, and millimeter-wave** regimes, which makes the benchmark especially useful for studying how different RF modalities capture human motion.

The dataset is recorded in **four indoor scenes**. Scene 1 is the main large-scale split with **30 subjects**, while the remaining three scenes each contain **3 additional subjects**. Hardware placement is kept relatively consistent across scenes so that cross-scene evaluation reflects environmental transfer rather than a completely different sensing setup.

<figure class="markdown-figure">
  <img src="./assets/scenes.png" alt="Four indoor scenes used in XRF55">
  <figcaption>Figure 2 from the paper. XRF55 is collected in four indoor scenes, enabling both in-scene evaluation and cross-scene transfer studies.</figcaption>
</figure>

For the main action-recognition split in Scene 1, each subject performs each action **20 times**. The paper uses the **first 14 repetitions for training** and the **last 6 for testing**, resulting in:

- **23,100 training samples**
- **9,900 test samples**

This is one of the main reasons the benchmark is useful for pretraining and few-shot transfer experiments rather than only closed-set testing.

## Why the Dataset Is Valuable

The paper positions XRF55 against prior RF datasets and highlights three bottlenecks in the literature:

- many datasets are **not publicly accessible**,
- many have **fewer than 5K samples**,
- and many focus on **very limited or application-specific action sets**.

In Table 1, the authors compare XRF55 with WiAR, ARIL, Widar3.0, RF-finger, mmFit, MM-Fi, and other popular datasets. XRF55 stands out by combining:

- the **largest action vocabulary** among the listed RF benchmarks,
- **multi-modal RF sensing** instead of a single radio source,
- and synchronized Kinect streams that open the door to RF-only and RF-vision tasks beyond classification.

The paper explicitly frames XRF55 as a benchmark for not only **action recognition**, but also:

- action detection,
- action segmentation,
- pose estimation,
- human parsing,
- mesh reconstruction,
- RF-video collaboration,
- few-shot transfer,
- and RF model pretraining.

<figure class="markdown-figure">
  <img src="./assets/downstream.png" alt="Fine-grained perception tasks supported by XRF55">
  <figcaption>Figure 8 from the paper. Because XRF55 includes synchronized Kinect streams, it can support pose, parsing, mesh, and other fine-grained perception tasks in addition to action recognition.</figcaption>
</figure>

## Deep Mutual Learning Baseline

The paper does not stop at releasing the benchmark. It also introduces a **deep mutual learning (DML)** baseline for the three RF modalities.

The idea is simple but useful:

1. train one network for **RFID**,
2. one for **Wi-Fi**,
3. and one for **mmWave**,
4. let them learn collaboratively during training,
5. but allow each network to run **alone after training**.

Each student network is supervised by:

- a standard **cross-entropy loss** for action classification,
- **two KL-divergence losses** that align it with the other RF students,
- and a **BERT-based semantic loss** built from the action labels.

The semantic branch uses text embeddings of the action names as anchors. This is motivated by the observation that some action pairs are semantically and behaviorally related, such as `walking` vs. `running` or `pulling` vs. `pushing`.

<figure class="markdown-figure">
  <img src="./assets/mutual-learning.png" alt="Deep mutual learning framework on XRF55">
  <figcaption>Figure 5 from the paper. RFID, Wi-Fi, and mmWave are trained as peer networks with cross-entropy, mutual KL alignment, and a BERT-based semantic loss, then each network can be deployed independently.</figcaption>
</figure>

The implementation in the paper uses relatively standard backbones on purpose:

- `ResNet18` for Wi-Fi and RFID temporal modeling,
- `ResNet18` for mmWave spatial tensors,
- and simple comparisons against `LSTM`, `ViT`, and `DTW + 1NN`.

The authors choose ResNet-based baselines because the goal is to understand the dataset and modality behavior clearly, rather than chase the most specialized task-specific architecture.

## Quantitative Results

The backbone comparison already shows an important pattern:

| Backbone | RFID | Wi-Fi | mmWave |
| --- | ---: | ---: | ---: |
| DTW + 1NN | 14.20 | 21.80 | 9.50 |
| LSTM | 58.29 | 79.41 | 87.53 |
| ViT | 58.34 | 76.17 | 54.57 |
| ResNet18 | 59.22 | 87.26 | 87.97 |

So even before mutual learning, **Wi-Fi and mmWave are already strong baselines**, while RFID is more challenging but still informative.

After adding DML and the BERT semantic loss, the best reported action-recognition results become:

| Setting | RFID | Wi-Fi | mmWave |
| --- | ---: | ---: | ---: |
| Baseline (no mutual, no BERT) | 59.22 | 87.26 | 87.97 |
| Mutual only | 59.98 | 88.73 | 90.08 |
| BERT only | 63.26 | 88.97 | 87.08 |
| Mutual + BERT | **64.78** | **89.73** | **89.93** |

Two takeaways stand out:

- **Wi-Fi reaches performance comparable to mmWave**, despite being much cheaper and more widely deployed.
- **RFID benefits the most from added supervision**, especially from semantic and collaborative signals.

<figure class="markdown-figure">
  <img src="./assets/results.png" alt="Per-class action recognition accuracy on XRF55">
  <figcaption>Figure 7 from the paper. Wi-Fi and mmWave achieve consistently strong recognition across the 55 classes, while RFID performs worse on some lower-limb actions but remains competitive on several hand-centric activities.</figcaption>
</figure>

## Generalization: Cross-subject and Cross-scene

The paper also studies transfer beyond the standard in-scene split.

### Cross-subject

When models are trained on **21 subjects** and tested on **9 unseen subjects**, the benchmark becomes much harder, especially without adaptation:

| Method | Shot | RFID | Wi-Fi | mmWave |
| --- | --- | ---: | ---: | ---: |
| Baseline | zero | 10.00 | 3.62 | 55.08 |
| Baseline | one | 15.77 | 40.78 | 59.61 |
| Baseline | two | 19.97 | 49.80 | 62.35 |
| DML | zero | 9.46 | 3.29 | 57.85 |
| DML | one | 18.95 | 45.65 | 61.89 |
| DML | two | 21.59 | 53.21 | 65.31 |

The interpretation is useful:

- **mmWave generalizes best without seeing the new subject**, reaching around `55-58%` even at zero-shot.
- **Wi-Fi and RFID are much harder to transfer directly**, but benefit substantially from just `1` or `2` shots per action.
- DML gives the most consistent gains once the setting becomes cross-person or few-shot.

### Cross-scene

The paper also tests transfer into the other three scenes:

| Evaluation | Scene | RFID | Wi-Fi | mmWave |
| --- | --- | ---: | ---: | ---: |
| DML in-scene | Scene 2 | 58.38 | 93.94 | 78.08 |
| DML in-scene | Scene 3 | 88.59 | 95.66 | 72.93 |
| DML in-scene | Scene 4 | 70.71 | 96.67 | 74.04 |

And when pretraining on Scene 1 then adapting to a new scene, the results show that:

- **zero-shot scene transfer is limited**,
- but **one-shot and two-shot finetuning help a lot**,
- which makes XRF55 a strong benchmark for **few-shot scene adaptation** and **foundation-style RF pretraining**.

## Why This Paper Still Matters

XRF55 is valuable not only because it is larger than earlier RF datasets, but because it was built with a broader research agenda in mind. The paper explicitly discusses possible directions enabled by the benchmark:

- practical application development for healthcare, smart homes, and elder care,
- edge deployment after compression or distillation,
- synthesizing RF data from human motion,
- collaboration between RF and vision models,
- pretraining RF backbones for new environments,
- and incremental learning for newly added action classes.

That makes XRF55 more than a single benchmark release. It is positioned as a **shared foundation dataset** for indoor RF sensing research.

## Resources

- [Project page](https://aiotgroup.github.io/XRF55)
- [Code repository](https://github.com/aiotgroup/XRF55-repo)
- [Slides](https://github.com/aiotgroup/XRF55-repo/blob/main/Fei-Ubicomp24-XRF55-with-notes-10.7.pptx)
- [DOI / paper](https://doi.org/10.1145/3643543)
- [Local teaser image](./assets/teaser.png)
- [Local scene overview](./assets/scenes.png)
- [Local action collage](./assets/action-classes.png)
- [Local DML framework figure](./assets/mutual-learning.png)
- [Local result figure](./assets/results.png)
- [Local downstream-task figure](./assets/downstream.png)

## Citation

```bibtex
@inproceedings{xrf55-a-radio-frequency-dataset-for-human-indoor-action-analysis,
  title = {XRF55: A Radio Frequency Dataset for Human Indoor Action Analysis},
  author = {Wang, Fei and Lv, Yizhe and Zhu, Mengdie and Ding, Han and Han, Jinsong},
  booktitle = {ACM IMWUT/UBICOMP 2024},
  year = {2024}
}
```

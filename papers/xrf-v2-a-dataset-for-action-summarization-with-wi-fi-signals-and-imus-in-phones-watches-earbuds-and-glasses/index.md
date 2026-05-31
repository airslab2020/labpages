---
title: XRF V2: A Dataset for Action Summarization with Wi-Fi Signals, and IMUs in Phones, Watches, Earbuds, and Glasses
authors: Bo Lan, Pei Li, Jiaxi Yin, Yunpeng Song, Ge Wang, Han Ding, Jinsong Han, Fei Wang
institution: XJTU, XDU, ZJU
theme: Multimodal Action Sensing
summary: XRF V2 is a multimodal indoor action dataset for temporal action localization and action summarization, combining Wi-Fi CSI, IMUs from phones, watches, earbuds, and glasses, and synchronized RGB-D-IR video across realistic smart-home scenes.
cover: ./assets/xrfv2-overview.png
coverAlt: XRF V2 multimodal sensing and action summarization overview
eyebrow: Publication
code: https://github.com/aiotgroup/XRFV2
paper: https://doi.org/10.1145/3749521
---

# Overview

Human action recognition usually assigns a label to a short, isolated action. XRF V2 moves toward a richer smart-home setting: a person performs continuous daily routines, the system localizes each action with start and end times, and those action tuples can be passed to an LLM agent to summarize behavior, answer task-oriented questions, or support home and health assistants.

The dataset integrates **Wi-Fi CSI**, **IMU streams from consumer devices**, and **synchronized RGB-D-IR video**. It was collected from **16 volunteers** across **three indoor environments**: dining room, study room, and bedroom. After filtering incomplete recordings, XRF V2 contains **853 valid multimodal sequences** and **16 h 16 min 8 s** of data.

The institution field is abbreviated at the university level: **XJTU**, **XDU**, and **ZJU**.

<figure class="markdown-figure">
  <img src="./assets/xrfv2-overview.png" alt="XRF V2 overview with wearable, Wi-Fi, video, temporal action localization, and LLM agent pipeline">
  <figcaption>Figure 1. XRF V2 connects multimodal sensing, temporal action localization, and LLM-based action summarization.</figcaption>
</figure>

## Why This Dataset Matters

Existing temporal action localization datasets are often video-centric, task-specific, or focused on outdoor and sports scenarios. Indoor daily routines raise different requirements: privacy, continuous activity, diverse consumer devices, and robustness when some sensors are unavailable or poorly worn.

XRF V2 is designed for that setting. It includes common home devices and ambient Wi-Fi, so researchers can test not only a full multimodal system, but also practical combinations such as a single watch, phone + watch, or Wi-Fi + wearables. This makes the dataset useful for smart homes, elderly care, personal assistants, health monitoring, multimodal learning, pose estimation, and synthetic sensor data generation.

<figure class="markdown-figure">
  <img src="./assets/xrfv2-scenes.png" alt="Dining room, study room, and bedroom layouts for XRF V2 data collection">
  <figcaption>Figure 2. XRF V2 covers three indoor scenes with synchronized wearable, Wi-Fi, and video sensing.</figcaption>
</figure>

## Dataset Details

| Item | XRF V2 |
| --- | --- |
| Scenes | Dining room, study room, bedroom |
| Actions | 30 indoor daily actions |
| Volunteers | 16 |
| Valid sequences | 853 |
| Total duration | 16 h 16 min 8 s |
| Train / test split | 682 / 171 sequences |
| Modalities | Wi-Fi CSI, 5 IMU device groups, RGB-D-IR video |
| Device sources | 2 smartphones, 2 smartwatches, earbuds, smart glasses, Wi-Fi transceivers, Kinect |

The paper reports an 80:20 stratified split across environments and participants. Dining room contributes 305 valid sequences, study room 320, and bedroom 228, giving a balanced benchmark for temporal action localization and downstream action summarization.

<figure class="markdown-figure">
  <img src="./assets/xrfv2-multimodal-sequence.png" alt="Example XRF V2 multimodal sequence with video frames, skeletons, IMU streams, and Wi-Fi CSI">
  <figcaption>Figure 3. Example synchronized sequence from XRF V2, combining video, pose, IMU, and Wi-Fi traces.</figcaption>
</figure>

## XRFMamba

To benchmark the dataset, the paper proposes **XRFMamba**, a temporal action localization model built around state space modeling. The network first projects Wi-Fi and IMU streams into aligned feature channels, fuses the modalities, embeds temporal signals with a TSSE-style module, and uses a **Decomposed Bidirectional Mamba** backbone to model long-range dependencies. A pyramidal prediction head then outputs both action classes and temporal boundaries.

This design targets the central difficulty of action summarization: the model must understand long, untrimmed sensory sequences containing multiple actions, not just classify short clipped examples.

<figure class="markdown-figure">
  <img src="./assets/xrfmamba-architecture.png" alt="XRFMamba architecture with projection, fusion, TSSE embedding, Mamba backbone, and pyramidal prediction head">
  <figcaption>Figure 4. XRFMamba fuses Wi-Fi and IMU data, models long temporal context with Mamba blocks, and predicts action categories plus temporal boundaries.</figcaption>
</figure>

## Evaluation Highlights

| Result | Value |
| --- | --- |
| Average mAP for temporal action localization | 78.74 |
| Improvement over WiFiTAD on mAP@avg | +5.49 points |
| Parameter reduction vs. WiFiTAD | 35% fewer parameters |
| mRMC for action summarization | 0.802 |
| Leave-one-person-out mAP | 72.84 |
| Single right-hand smartwatch mAP | 65.81 |
| Real-apartment zero-shot mAP | Around 70 |

<figure class="markdown-figure">
  <img src="./assets/xrfmamba-method-comparison-table.png" alt="XRFMamba method comparison table across temporal action localization baselines">
  <figcaption>Figure 5. XRFMamba achieves the best mAP@avg among adapted temporal action localization baselines, outperforming WiFiTAD by 5.49 points while using fewer parameters.</figcaption>
</figure>

XRFMamba outperforms adapted temporal action localization baselines including TemporalMaxer, ActionFormer, TriDet, UWiFiAction, WiFiTAD, and ActionMamba. The paper also introduces **Response Meaning Consistency (RMC)**, a human-audited metric that checks whether LLM responses based on predicted action tuples preserve the meaning of responses based on ground truth tuples.

<figure class="markdown-figure">
  <img src="./assets/xrfv2-agent-examples.png" alt="Examples of XRF V2 action summarization with personal assistant, health assistant, and home assistant outputs">
  <figcaption>Figure 6. Action tuples can be converted into assistant-style summaries for daily routine, health, and smart-home questions.</figcaption>
</figure>

## Device Flexibility

A useful part of XRF V2 is that it supports many sensor combinations. The paper studies individual devices and combinations of phones, watches, earbuds, glasses, and ambient Wi-Fi. Performance improves as more devices are available, but even sparse configurations remain meaningful. This matters in real homes, where a phone may be left on a table, a watch may be worn on only one wrist, or a Wi-Fi router may be temporarily unreliable.

<figure class="markdown-figure">
  <img src="./assets/xrfv2-device-combinations.jpg" alt="Device combination cases for XRF V2 with phones, watches, earbuds, glasses, and Wi-Fi">
  <figcaption>Figure 7. XRF V2 supports single-device and multi-device configurations for studying practical sensing trade-offs.</figcaption>
</figure>

<figure class="markdown-figure">
  <img src="./assets/xrfv2-real-apartment.png" alt="Real apartment zero-shot evaluation layout and photos for XRF V2">
  <figcaption>Figure 8. The paper also evaluates deployment in a real apartment without fine-tuning.</figcaption>
</figure>

## Resources

- Code and dataset: [https://github.com/aiotgroup/XRFV2](https://github.com/aiotgroup/XRFV2)
- Paper DOI: [10.1145/3749521](https://doi.org/10.1145/3749521)
- Repository notes from the paper: model implementations are under `/model`, XRFMamba is in `model/TAD_multi_fusion.py`, data loaders are under `/dataset`, paths are configured in `basic_config.json`, training uses `script/train_run.py`, and evaluation uses `script/test_run.py`.

## Citation

```bibtex
@article{lan2025xrfv2,
  title = {XRF V2: A Dataset for Action Summarization with Wi-Fi Signals, and IMUs in Phones, Watches, Earbuds, and Glasses},
  author = {Lan, Bo and Li, Pei and Yin, Jiaxi and Song, Yunpeng and Wang, Ge and Ding, Han and Han, Jinsong and Wang, Fei},
  journal = {Proceedings of the ACM on Interactive, Mobile, Wearable and Ubiquitous Technologies},
  volume = {9},
  number = {3},
  article = {98},
  year = {2025},
  doi = {10.1145/3749521}
}
```

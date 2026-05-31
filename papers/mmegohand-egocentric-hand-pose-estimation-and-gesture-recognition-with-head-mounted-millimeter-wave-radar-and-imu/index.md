---
title: mmEgoHand: Egocentric Hand Pose Estimation and Gesture Recognition with Head-mounted Millimeter-wave Radar and IMU
authors: Yizhe Lv, Tingting Zhang, Zhijian Wang, Yunpeng Song, Han Ding, Jinsong Han, Fei Wang
institution: XJTU, ZJU
summary: mmEgoHand is an egocentric hand perception system that fuses head-mounted mmWave radar and IMU data to estimate 3D hand keypoints and support downstream VR-style gesture recognition without relying on cameras at inference time.
theme: Egocentric mmWave Sensing
cover: ./assets/mmegohand-overview.png
coverAlt: mmEgoHand head-mounted mmWave radar and IMU overview
eyebrow: Publication
code: https://github.com/WhisperYi/mmVR
paper: https://arxiv.org/abs/2501.13805
---

# Overview

Most mmWave-based pose estimation systems use fixed front-facing radar deployments. They work when the user stays in a predefined sensing volume, but that assumption is awkward for VR interaction, skill digitization, robotic teleoperation, and mobile hand-centric interfaces. **mmEgoHand** moves the radar onto the user's head and targets a more difficult problem: estimating fine-grained one-hand and two-hand 3D hand poses from an egocentric viewpoint.

The system fuses a head-mounted **TI IWR6843 mmWave radar** with an **IMU**. The radar captures hand-reflected signals, while the IMU records head motion so the model can compensate for egocentric viewpoint instability. A camera is used only during dataset collection to generate training labels with MediaPipe; it is not used at inference time.

The institution field is abbreviated at the university level: **XJTU** and **ZJU**.

<figure class="markdown-figure">
  <img src="./assets/mmegohand-overview.png" alt="mmEgoHand overview with head-mounted radar and IMU, hand pose estimation, and application examples">
  <figcaption>Figure 1. mmEgoHand estimates hand poses from head-mounted mmWave radar and IMU signals for private, mobile, hand-centric interaction.</figcaption>
</figure>

## Main Contributions

- Introduces an egocentric mmWave-IMU system for 3D hand pose estimation and downstream gesture recognition.
- Supports both **single-hand** and **two-hand** interaction, unlike prior mmWave hand pose systems that focus on a fixed one-hand setting.
- Uses IMU measurements to reduce head-motion interference in head-mounted radar sensing.
- Designs a Transformer-based dual-decoder architecture with a Pose Decoder for spatial hand localization and a Context Decoder for temporal coherence.
- Releases a 26 GB dataset of VR-style gestures collected with synchronized head-mounted mmWave radar, IMU, and camera-based labels.

## Signal Processing And System Pipeline

The radar preprocessing converts FMCW radar measurements into richer representations than sparse point clouds. The pipeline applies range FFT, Doppler FFT, and angle FFT, then combines range-Doppler and range-angle heatmaps as model input. This is important because hand reflections are sparse and small posture changes can otherwise produce unstable radar representations.

<figure class="markdown-figure">
  <img src="./assets/mmegohand-signal-processing.png" alt="mmEgoHand mmWave radar signal processing with range FFT, Doppler FFT, and angle FFT">
  <figcaption>Figure 2. mmWave preprocessing produces range-Doppler and range-angle heatmaps for hand perception.</figcaption>
</figure>

mmEgoHand takes a 2-second input window and outputs a sequence of 3D hand keypoints. The mmWave input is represented as 30 temporal frames of 256 by 128 heatmaps, while the IMU stream provides synchronized acceleration and angular velocity measurements. The output is a variable-hand-count sequence, allowing 0, 1, or 2 hands to be detected.

<figure class="markdown-figure">
  <img src="./assets/mmegohand-system-pipeline.png" alt="mmEgoHand system pipeline from head-mounted sensors to 3D hand keypoints">
  <figcaption>Figure 3. The camera is used only for label generation during training; inference relies on mmWave radar and IMU data.</figcaption>
</figure>

## Network Design

The deep network has four main components:

- **mmWave Radar Encoder** for radar heatmap embeddings.
- **IMU Encoder** for synchronized acceleration and angular-velocity embeddings.
- **Pose Decoder** adapted from end-to-end multi-person pose estimation to predict hand candidates with Hungarian matching.
- **Context Decoder** to model temporal relationships across frames and refine hand keypoints.

This dual-decoder design separates two challenges: spatial joint localization within each frame and temporal stability across a gesture sequence. The final model has **55.42M parameters**, uses **657 MB** of inference GPU memory, and runs in **42.03 ms** for 30 frames on an RTX 3090, indicating real-time potential.

<figure class="markdown-figure">
  <img src="./assets/mmegohand-network.png" alt="mmEgoHand network with mmWave encoder, IMU encoder, pose decoder, and context decoder">
  <figcaption>Figure 4. mmEgoHand fuses radar and IMU features, then combines spatial pose decoding with temporal context decoding.</figcaption>
</figure>

## Dataset

The dataset covers VR-style hand interaction gestures collected from **10 volunteers**. Participants performed gestures across **three scenes** and **three postures**: sitting, lying, and standing. The gesture vocabulary contains **8 gestures**: click, swipe left, swipe right, swipe up, swipe down, swipe to bottom-right, zoom in, and zoom out. The first six are single-hand gestures, while zoom in and zoom out use two hands.

| Item | Value |
| --- | --- |
| Volunteers | 10 |
| Scenes / postures | 3 scenes, sitting / lying / standing |
| Gesture types | 8 |
| Hand-executing settings | 12 |
| Raw gesture samples | 5,760 |
| Valid gesture instances after filtering | 5,206 |
| Dataset size | 26 GB |
| Sensors | TI IWR6843 mmWave radar, IMU, RGB camera for labels |
| Released code/data | [https://github.com/WhisperYi/mmVR](https://github.com/WhisperYi/mmVR) |

<figure class="markdown-figure">
  <img src="./assets/mmegohand-hardware-setup.jpg" alt="mmEgoHand head-mounted radar and IMU hardware setup">
  <figcaption>Figure 5. The collection rig mounts mmWave radar and IMU near the head, while a camera records labels during data collection.</figcaption>
</figure>

## Pose Estimation Results

| Method | MPJPE |
| --- | ---: |
| mmEgoHand (mmWave + IMU) | 72.73 mm |
| mmEgoHand (mmWave only) | 96.42 mm |
| mmEgoHand without Context Decoder | 109.02 mm |
| mm4Arm reimplementation, single-hand setting | 165.19 mm |

The IMU fusion improves MPJPE by about **24.6%** compared with mmWave-only input, confirming that head-motion compensation matters in egocentric radar sensing. The Context Decoder also substantially improves pose estimation by modeling temporal relationships across frames.

<figure class="markdown-figure">
  <img src="./assets/mmegohand-pose-examples.png" alt="mmEgoHand pose estimation examples for click, swipe downward, zoom in, and swipe leftward">
  <figcaption>Figure 6. Example predictions show mmEgoHand estimating one-hand and two-hand keypoints across different gestures.</figcaption>
</figure>

## Gesture Recognition Results

The paper uses mmEgoHand pose outputs as intermediate representations for downstream gesture recognition. This two-stage approach clearly outperforms one-stage models trained directly on raw mmWave and IMU data.

| Recognition model | Accuracy | Precision | Recall | F1 |
| --- | ---: | ---: | ---: | ---: |
| mmEgoHand + ResNet50 | 90.80 | 93.34 | 93.20 | 93.19 |
| mmEgoHand + LSTM | 89.26 | 91.56 | 91.48 | 91.46 |
| mmEgoHand + GCN | 85.36 | 87.16 | 87.12 | 87.09 |
| mSeeNet | 84.60 | 86.73 | 86.59 | 86.60 |
| mGesNet | 81.34 | 81.98 | 81.56 | 81.64 |
| mmGesture | 68.66 | 70.01 | 68.83 | 68.81 |

Single-hand gestures generally exceed 90% accuracy, while the two-hand zoom in / zoom out gestures are harder and are sometimes confused with each other. The paper attributes this partly to intra-class variability during data collection.

<figure class="markdown-figure">
  <img src="./assets/mmegohand-confusion-matrix.png" alt="mmEgoHand gesture recognition confusion matrix">
  <figcaption>Figure 7. Gesture recognition confusion matrix for eight VR-style interaction gestures.</figcaption>
</figure>

## Generalization Findings

The paper also evaluates few-shot generalization under cross-person, cross-posture, cross-scene, and cross-hand settings. Zero-shot performance drops in these harder splits, but one-shot or two-shot fine-tuning gives large gains. For example, in the No.1-8 to No.9-12 cross-person split, accuracy improves from **63.11%** zero-shot to **83.97%** with two-shot fine-tuning. In cross-hand evaluation, two-shot fine-tuning raises accuracy to **73.53%** for right-to-left and **77.18%** for left-to-right transfer.

This suggests a practical deployment path: a short pre-use calibration session can help adapt mmEgoHand to new users, postures, scenes, and hand preferences.

## Resources

- Code and dataset: [https://github.com/WhisperYi/mmVR](https://github.com/WhisperYi/mmVR)
- Paper: [https://arxiv.org/abs/2501.13805](https://arxiv.org/abs/2501.13805)
- Dataset note from the paper: released dataset size is about 26 GB.

## Citation

```bibtex
@article{lv2025mmegohand,
  title = {mmEgoHand: Egocentric Hand Pose Estimation and Gesture Recognition with Head-mounted Millimeter-wave Radar and IMU},
  author = {Lv, Yizhe and Zhang, Tingting and Wang, Zhijian and Song, Yunpeng and Ding, Han and Han, Jinsong and Wang, Fei},
  journal = {arXiv preprint arXiv:2501.13805},
  year = {2025}
}
```

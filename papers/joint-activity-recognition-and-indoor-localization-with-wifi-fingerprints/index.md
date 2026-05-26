---
title: Joint activity recognition and indoor localization with WiFi fingerprints
authors: F Wang, J Feng, Y Zhao, X Zhang, S Zhang, J Han
institution: XJTU AIRS Lab
summary: This paper builds a dual-task Wi-Fi CSI framework that recognizes human activities and estimates indoor location from the same Wi-Fi fingerprint stream.
cover: ./assets/cover.svg
coverAlt: Cover image for Joint activity recognition and indoor localization with WiFi fingerprints
eyebrow: Publication
paper: ./assets/paper.pdf
---

# Overview

Wi-Fi sensing is often split into activity recognition and indoor localization, although both tasks depend on how human behavior and position shape CSI fingerprints. This paper studies them jointly.

The system collects CSI fingerprints under standard 802.11n Wi-Fi and trains a dual-task 1D convolutional network to infer both the current activity and the indoor location.

## Main Contributions

- Formulates joint Wi-Fi activity recognition and indoor localization from CSI fingerprints.
- Collects more than 1,400 CSI samples covering 6 activities and 16 indoor locations.
- Uses a dual-task 1D convolutional network and releases data/code for reproducibility.

## Technical Details

The input is a time-series Wi-Fi fingerprint rather than an image or specialized radar measurement. A 1D CNN is a natural fit because it can model channel-level temporal patterns while staying relatively lightweight.

The dual-task design encourages shared features to support both what the person is doing and where the person is located.

## Results

Experiments and ablation studies show that joint learning is effective for this Wi-Fi sensing setup. The paper is especially useful as an early reproducible baseline because it provides both data and code.

## Resources

- [Local PDF](./assets/paper.pdf)
- [Online paper page](https://arxiv.org/abs/1904.04964)
- [Cover image](./assets/cover.svg)

## Citation

```bibtex
@inproceedings{joint-activity-recognition-and-indoor-localization-with-wifi-fingerprints,
  title = {Joint activity recognition and indoor localization with WiFi fingerprints},
  author = {F Wang and J Feng and Y Zhao and X Zhang and S Zhang and J Han},
  booktitle = {Ieee Access 7, 80058-80068, 2019},
  year = {2019}
}
```

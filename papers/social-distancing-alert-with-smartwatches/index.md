---
title: Social distancing alert with smartwatches
authors: X Wang, X Wu, H Meng, Y Fan, J Shi, H Ding, F Wang
institution: XJTU AIRS Lab
summary: SoDA is a smartwatch-based system for detecting social-distancing violation behaviors such as handshakes or hugs from wrist IMU signals.
cover: ./assets/cover.svg
coverAlt: Cover image for Social distancing alert with smartwatches
eyebrow: Publication
paper: ./assets/paper.pdf
---

# Overview

This paper explores whether smartwatches can identify social activities that may violate distancing practice. The motivation is that people often break distancing rules during routine interactions without noticing.

SoDA recognizes relevant interaction gestures from accelerometer and gyroscope data, using a vision-Transformer-style model adapted to wearable time series.

## Main Contributions

- Introduces a smartwatch alert system for social-distancing violation behaviors.
- Uses wrist IMU data rather than cameras or proximity-only sensors.
- Evaluates gesture recognition on data from 10 volunteers and more than 1,800 samples.

## Technical Details

The system focuses on activity patterns such as handshaking and hugging, where wrist motion provides a direct signal. By analyzing inertial sequences, SoDA can issue reminders in a privacy-preserving and lightweight way.

The method is representative of pandemic-era wearable sensing: it translates public-health rules into detectable motion events.

## Results

The experiments report strong recognition performance for the target violation activities. The main deployment lesson is that common smartwatches can support context-aware alerts without requiring additional infrastructure.

## Resources

- [Local PDF](./assets/paper.pdf)
- [Online paper page](https://arxiv.org/abs/2205.06110)
- [Cover image](./assets/cover.svg)

## Citation

```bibtex
@inproceedings{social-distancing-alert-with-smartwatches,
  title = {Social distancing alert with smartwatches},
  author = {X Wang and X Wu and H Meng and Y Fan and J Shi and H Ding and F Wang},
  booktitle = {arXiv preprint arXiv:2205.06110, 2022},
  year = {2022}
}
```

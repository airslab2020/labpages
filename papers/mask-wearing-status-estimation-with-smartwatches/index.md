---
title: Mask wearing status estimation with smartwatches
authors: H Meng, X Wu, X Wang, Y Fan, J Shi, H Ding, F Wang
institution: Xi'an Jiaotong University; Harbin Institute of Technology
theme: Wearable Health Sensing
summary: MaskReminder uses smartwatch IMU readings and an MLP-Mixer model to infer mask-wearing related actions and remind users when mask usage may be missing or incorrect.
cover: ./assets/paper-preview.png
coverAlt: First page preview of the MaskReminder smartwatch paper.
eyebrow: Publication
paper: https://arxiv.org/abs/2205.06113
---

# Overview

This paper studies a public-health sensing task with commodity smartwatches. Instead of requiring cameras or manual reporting, MaskReminder recognizes hand and arm motions associated with wearing, adjusting, or removing a mask.

The system uses inertial readings from the watch and a lightweight deep model to capture both short-term gestures and longer temporal patterns.

## Main Contributions

- Builds a smartwatch-based mask-wearing status estimation system.
- Uses IMU signals to recognize mask-related gestures without camera sensing.
- Evaluates the system on data from 20 volunteers and more than 8,000 samples.

## Technical Details

The paper models mask status through related hand movements, such as wearing a mask or adjusting mask straps. This turns the problem into temporal gesture recognition over accelerometer and gyroscope readings.

The MLP-Mixer design is used to learn temporal and channel-wise patterns from wearable sensor streams, keeping the system practical for smartwatch deployment.

## Results

The paper reports an average recognition accuracy of about 89% on its collected dataset. The result suggests that low-cost wrist sensing can support useful reminders in scenarios where camera-based monitoring would be intrusive.

## Resources

- [arXiv paper](https://arxiv.org/abs/2205.06113)
- [Paper preview](./assets/paper-preview.png)
- [Cover image](./assets/cover.svg)

## Citation

```bibtex
@inproceedings{mask-wearing-status-estimation-with-smartwatches,
  title = {Mask wearing status estimation with smartwatches},
  author = {H Meng and X Wu and X Wang and Y Fan and J Shi and H Ding and F Wang},
  booktitle = {arXiv preprint arXiv:2205.06113, 2022},
  year = {2022}
}
```

---
title: What's on Your Plate? Inferring Chinese Cuisine Intake from Wearable IMUs
authors: J Yin, P Wang, H Ding, F Wang
institution: XJTU AIRS Lab
summary: CuisineSense uses smartwatch and smart-glasses IMU signals to infer Chinese cuisine intake while avoiding the privacy issues of camera-based dietary monitoring.
cover: ./assets/cover.svg
coverAlt: Cover image for What's on Your Plate? Inferring Chinese Cuisine Intake from Wearable IMUs
eyebrow: Publication
paper: ./assets/paper.pdf
---

# Overview

This paper targets dietary monitoring, especially the gap between common wearable food-intake studies and the diversity of Chinese cuisine. The system avoids image capture and instead uses motion cues from wrist and head-worn IMUs.

CuisineSense treats food intake as a two-stage sensing problem: first distinguish eating from irrelevant daily activities, then infer food categories from the motion patterns involved in consuming different dishes.

## Main Contributions

- Introduces a wearable sensing pipeline for Chinese cuisine intake recognition without using cameras.
- Combines hand motion from a smartwatch with head dynamics from smart glasses to capture richer eating behavior.
- Uses a two-stage design so unrelated daily activities are filtered before fine-grained food classification.

## Technical Details

The system is built around commodity wearable IMUs. Wrist motion captures utensil and hand movement, while head motion helps distinguish eating gestures and meal patterns that are ambiguous from the wrist alone.

The two-stage pipeline is important for deployment: an always-on recognizer must avoid confusing ordinary activities with eating, then perform category recognition only when food-intake behavior is likely.

## Results

The paper reports experiments on Chinese cuisine categories and daily-activity interference. The results support the central claim that multimodal wearable IMU sensing can provide a privacy-preserving alternative to self-reports and cameras for diet tracking.

## Resources

- [Local PDF](./assets/paper.pdf)
- [Online paper page](https://arxiv.org/abs/2511.05292)
- [Cover image](./assets/cover.svg)

## Citation

```bibtex
@inproceedings{what-s-on-your-plate-inferring-chinese-cuisine-intake-from-wearable-imus,
  title = {What's on Your Plate? Inferring Chinese Cuisine Intake from Wearable IMUs},
  author = {J Yin and P Wang and H Ding and F Wang},
  booktitle = {arXiv preprint arXiv:2511.05292, 2025},
  year = {2025}
}
```

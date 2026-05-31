---
title: SE2Net: Siamese edge-enhancement network for salient object detection
authors: S Zhou, J Zhang, J Wang, F Wang, D Huang
institution: Xi'an Jiaotong University; Carnegie Mellon University
theme: Salient Object Detection
summary: SE2Net improves salient object detection by adding edge-enhancement supervision through a Siamese-style multi-stage network.
cover: ./assets/paper-preview.png
coverAlt: First page preview of the SE2Net salient object detection paper.
eyebrow: Publication
paper: https://arxiv.org/abs/1904.00048
---

# Overview

Deep salient object detectors often produce strong pixel responses but can lose object boundaries because pooling and striding remove spatial details. SE2Net addresses this by explicitly preserving edge structure.

The method aggregates low-level and high-level features through a Siamese edge-enhancement network, making boundary information part of the saliency prediction process.

## Main Contributions

- Introduces a Siamese Edge-Enhancement Network for salient object detection.
- Combines low-level edge detail with high-level semantic features across multiple stages.
- Targets sharper object boundaries and more spatially coherent saliency maps.

## Technical Details

SE2Net treats edge structure as a first-class signal. Low-level features provide boundary cues, while high-level features identify salient regions; the Siamese design helps these cues reinforce one another.

This page archives the paper as a vision example of structural detail preservation, a theme that also appears in sensing and reconstruction tasks.

## Results

The paper evaluates the method on salient object detection benchmarks and reports improvements in both quantitative metrics and boundary quality. The qualitative results emphasize cleaner object contours.

## Resources

- [arXiv paper](https://arxiv.org/abs/1904.00048)
- [Paper preview](./assets/paper-preview.png)
- [Cover image](./assets/cover.svg)

## Citation

```bibtex
@inproceedings{se2net-siamese-edge-enhancement-network-for-salient-object-detection,
  title = {SE2Net: Siamese edge-enhancement network for salient object detection},
  author = {S Zhou and J Zhang and J Wang and F Wang and D Huang},
  booktitle = {arXiv preprint arXiv:1904.00048, 2019},
  year = {2019}
}
```

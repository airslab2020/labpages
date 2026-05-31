---
title: WiDistill: Distilling Large-scale Wi-Fi Datasets with Trajectory Matching
authors: T Wang, F Wang
institution: Xi'an Jiaotong University; Zhejiang University
theme: Wi-Fi Dataset Distillation
summary: WiDistill compresses large Wi-Fi sensing datasets into smaller synthetic or selected subsets by matching the training trajectory induced by the full data.
cover: ./assets/paper-preview.png
coverAlt: First page preview of the WiDistill paper.
eyebrow: Publication
paper: https://arxiv.org/abs/2410.04073
---

# Overview

Wi-Fi activity recognition systems increasingly depend on large datasets, which makes storage, training, and repeated experimentation expensive. WiDistill treats dataset size itself as an efficiency bottleneck.

The central idea is to distill a compact Wi-Fi dataset whose training dynamics resemble those produced by the original large dataset. Instead of only matching static statistics, the distilled set is optimized to preserve useful learning behavior.

## Main Contributions

- Introduces dataset distillation for large-scale Wi-Fi sensing data.
- Uses trajectory matching so the distilled data induces training updates similar to the full dataset.
- Targets lower storage and training cost while keeping activity-recognition performance useful.

## Technical Details

The method aligns parameter trajectories between models trained on the original and distilled Wi-Fi data. This is a stronger criterion than simply preserving class balance or sample-level similarity because it directly optimizes for downstream training behavior.

For the lab site, this paper is a useful bridge between wireless sensing and efficient learning infrastructure.

## Results

The experiments evaluate whether compact distilled Wi-Fi datasets can preserve recognition accuracy and reduce the cost of using large sensing corpora. The reported results show that dataset distillation can make Wi-Fi HAR experimentation lighter without abandoning the structure learned from full data.

## Resources

- [arXiv paper](https://arxiv.org/abs/2410.04073)
- [Paper preview](./assets/paper-preview.png)
- [Cover image](./assets/cover.svg)

## Citation

```bibtex
@inproceedings{widistill-distilling-large-scale-wi-fi-datasets-with-trajectory-matching,
  title = {WiDistill: Distilling Large-scale Wi-Fi Datasets with Trajectory Matching},
  author = {T Wang and F Wang},
  booktitle = {arXiv preprint arXiv:2410.04073, 2024},
  year = {2024}
}
```

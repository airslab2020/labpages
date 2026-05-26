---
title: Temporal unet: Sample level human action recognition using wifi
authors: F Wang, Y Song, J Zhang, J Han, D Huang
institution: XJTU AIRS Lab
summary: Temporal U-Net extends Wi-Fi human action recognition from whole-sequence labels to sample-level temporal labeling, enabling finer action localization in CSI streams.
cover: ./assets/cover.svg
coverAlt: Cover image for Temporal unet: Sample level human action recognition using wifi
eyebrow: Publication
paper: ./assets/paper.pdf
---

# Overview

Most early Wi-Fi action recognition systems classify an entire CSI distortion sequence as one action. This paper studies a finer problem: assigning an action label to each sample in the sequence.

Temporal U-Net adapts the U-Net idea to Wi-Fi time series so the model can combine local temporal evidence with broader sequence context for dense action labeling.

## Main Contributions

- Introduces sample-level Wi-Fi action recognition as a fine-grained sensing task.
- Adapts an encoder-decoder U-Net structure to temporal CSI sequences.
- Supports action localization and continuous activity understanding rather than only whole-window classification.

## Technical Details

The model uses downsampling and upsampling over time to capture both short-term signal changes and longer action context. This is important because adjacent CSI samples are correlated, while action boundaries may still require global context.

The problem formulation is useful for continuous sensing scenarios where actions do not arrive as neatly segmented clips.

## Results

The experiments show that temporal dense labeling is feasible with Wi-Fi CSI. The paper contributes both a task shift and an architecture baseline for later continuous Wi-Fi sensing work.

## Resources

- [Local PDF](./assets/paper.pdf)
- [Online paper page](https://arxiv.org/abs/1904.11953)
- [Cover image](./assets/cover.svg)

## Citation

```bibtex
@inproceedings{temporal-unet-sample-level-human-action-recognition-using-wifi,
  title = {Temporal unet: Sample level human action recognition using wifi},
  author = {F Wang and Y Song and J Zhang and J Han and D Huang},
  booktitle = {arXiv preprint arXiv:1904.11953, 2019},
  year = {2019}
}
```

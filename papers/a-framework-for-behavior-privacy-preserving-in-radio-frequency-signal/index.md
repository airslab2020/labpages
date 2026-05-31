---
title: A Framework for Behavior Privacy Preserving in Radio Frequency Signal
authors: J Liu, J Han, L Yang, F Wang, F Lin, K Ren
institution: Zhejiang University; The Hong Kong Polytechnic University
theme: RF Privacy Preservation
summary: This paper studies how to protect behavior privacy in RF sensing by hiding identity and motion information that can otherwise be inferred from wireless signal distortions.
cover: ./assets/paper-preview.png
coverAlt: First page preview of the RF behavior privacy paper.
eyebrow: Publication
paper: https://arxiv.org/abs/2004.04909
---

# Overview

Human-centered wireless sensing can infer identity, motion, and other sensitive information from RF signals. The same openness that makes wireless sensing convenient also creates privacy risk, especially in homes, offices, and laboratories.

The paper proposes a behavior-privacy-preserving framework for RF signals, aiming to reduce sensitive user information exposed through wireless sensing traces.

## Main Contributions

- Frames RF sensing as a privacy problem, not only a recognition problem.
- Targets sensitive information such as identity and motion patterns embedded in Wi-Fi/RF signal distortions.
- Studies transformations that conceal behavior information while considering the utility of wireless communication or sensing.

## Technical Details

The framework is motivated by the fact that commodity Wi-Fi signals can reveal human identity and activity. It therefore treats the RF signal as a privacy-bearing medium that needs protection before adversaries can exploit it.

The method is relevant to privacy-preserving sensing deployments because it asks how to reduce leakage at the signal level rather than relying only on access control after data collection.

## Results

The experiments examine whether sensitive behavior information becomes harder to recover after applying the proposed protection framework. The paper reports that privacy can be improved while retaining practical RF signal use.

## Resources

- [arXiv paper](https://arxiv.org/abs/2004.04909)
- [Paper preview](./assets/paper-preview.png)
- [Cover image](./assets/cover.svg)

## Citation

```bibtex
@inproceedings{a-framework-for-behavior-privacy-preserving-in-radio-frequency-signal,
  title = {A Framework for Behavior Privacy Preserving in Radio Frequency Signal},
  author = {J Liu and J Han and L Yang and F Wang and F Lin and K Ren},
  booktitle = {arXiv preprint arXiv:2004.04909, 2020},
  year = {2020}
}
```

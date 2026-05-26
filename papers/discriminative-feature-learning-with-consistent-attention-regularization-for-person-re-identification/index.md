---
title: Discriminative Feature Learning With Consistent Attention Regularization for Person Re-Identification
authors: Sanping Zhou, Fei Wang, Zeyi Huang, Jinjun Wang#
institution: XJTU AIRS Lab
summary: This ICCV 2019 paper improves person re-identification by regularizing attention across feature levels so the network learns foreground-focused pedestrian representations.
cover: ./assets/cover.svg
coverAlt: Cover image for Discriminative Feature Learning With Consistent Attention Regularization for Person Re-Identification
eyebrow: Publication
paper: ./assets/paper.pdf
---

# Overview

Person re-identification is sensitive to target misalignment and background clutter. This paper addresses those issues with a feed-forward attention network that encourages consistent foreground attention across low-, mid-, and high-level feature maps.

The key idea is that lower layers should already be guided toward pedestrian foreground regions, so higher layers receive cleaner and more discriminative evidence.

## Main Contributions

- Introduces a consistent attention regularizer for foreground-focused Re-ID feature learning.
- Combines attention regularization with an improved triplet loss for stronger class separation.
- Evaluates on standard Re-ID datasets including Market1501, DukeMTMC-reID, and CUHK03.

## Technical Details

The regularizer aligns foreground masks inferred from multiple network depths. This makes attention less accidental: the network is encouraged to suppress background clutter throughout the feature hierarchy.

The improved triplet loss complements attention by tightening intra-class distances and enlarging inter-class distances within triplet units.

## Results

The paper reports competitive or improved performance over then-state-of-the-art Re-ID methods on major benchmarks. The qualitative motivation is also clear: foreground-consistent attention helps the final embedding emphasize pedestrians instead of camera-specific background artifacts.

## Resources

- [Local PDF](./assets/paper.pdf)
- [Online paper page](https://openaccess.thecvf.com/content_ICCV_2019/html/Zhou_Discriminative_Feature_Learning_With_Consistent_Attention_Regularization_for_Person_Re-Identification_ICCV_2019_paper.html)
- [Cover image](./assets/cover.svg)

## Citation

```bibtex
@inproceedings{discriminative-feature-learning-with-consistent-attention-regularization-for-person-re-identification,
  title = {Discriminative Feature Learning With Consistent Attention Regularization for Person Re-Identification},
  author = {Sanping Zhou and Fei Wang and Zeyi Huang and Jinjun Wang#},
  booktitle = {ICCV 2019},
  year = {2019}
}
```

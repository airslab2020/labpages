---
title: IDPT: Interconnected Dual Pyramid Transformer for Face Super-Resolution
authors: Jingang Shi, Yusi Wang, Songlin Dong, Xiaopeng Hong, Zitong Yu#, Fei Wang, Changxin Wang, Yihong Gong
institution: XJTU AIRS Lab
summary: IDPT is a Transformer-based face super-resolution framework that uses interconnected dual pyramids to recover both global facial structure and local texture details.
cover: ./assets/cover.svg
coverAlt: Cover image for IDPT: Interconnected Dual Pyramid Transformer for Face Super-Resolution
eyebrow: Publication
paper: ./assets/paper.pdf
---

# Overview

Face super-resolution is difficult because degraded faces contain both missing global structure and fine local texture. IDPT approaches this with a dual-pyramid Transformer design instead of a simple cascade of reconstruction blocks.

The model uses encoder-decoder pyramid structure and interconnections so information can flow across scales. This helps the network reason about large facial layout while still restoring local detail.

## Main Contributions

- Proposes an Interconnected Dual Pyramid Transformer for face super-resolution.
- Uses multi-scale Transformer modeling to combine global face structure with local detail recovery.
- Shows how architectural connectivity can improve reconstruction beyond stacking independent blocks.

## Technical Details

The dual-pyramid design gives the model separate but connected pathways for different spatial scales. Interconnections make the reconstruction process less brittle because features at one scale can inform the others.

This page records IDPT as an efficient vision architecture paper, with the main lesson that carefully designed feature exchange can matter as much as increasing model size.

## Results

Experiments on face super-resolution benchmarks show that IDPT improves quantitative and qualitative reconstruction quality. The visual comparisons emphasize cleaner facial contours and more plausible high-frequency details.

## Resources

- [Local PDF](./assets/paper.pdf)
- [Online paper page](https://www.ijcai.org/proceedings/2022/0182)
- [Cover image](./assets/cover.svg)

## Citation

```bibtex
@inproceedings{idpt-interconnected-dual-pyramid-transformer-for-face-super-resolution,
  title = {IDPT: Interconnected Dual Pyramid Transformer for Face Super-Resolution},
  author = {Jingang Shi and Yusi Wang and Songlin Dong and Xiaopeng Hong and Zitong Yu# and Fei Wang and Changxin Wang and Yihong Gong},
  booktitle = {IJCAI 2022},
  year = {2022}
}
```

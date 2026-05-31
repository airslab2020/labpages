---
title: When Gradient Optimization Is Not Enough: Dispersive and Anchoring Geometric Regularizer for Multimodal Learning
authors: Zixuan Xia, Hao Wang, Pengcheng Weng, Yanyu Qian, Yangxin Xu, William Dan, Fei Wang
institution: University of Bern; Xi'an Jiaotong University; Nanyang Technological University
theme: Multimodal Learning
summary: This work studies representation geometry in multimodal learning and introduces a lightweight DAGR regularizer that jointly encourages intra-modal diversity and stable cross-modal anchoring.
cover: ./assets/paper-preview.png
coverAlt: First page preview of the DAGR multimodal learning paper.
eyebrow: Publication
paper: https://arxiv.org/abs/2601.21670
---

# Overview

Even carefully optimized multimodal models can develop unhealthy representation geometry. Typical failure modes include **intra-modal collapse**, where features inside a modality become insufficiently diverse, and **sample-level cross-modal inconsistency**, where paired observations from different modalities drift too far apart.

This paper addresses that issue with a geometry-aware regularizer referred to as **DAGR**. The latest arXiv revision presents the work under the title *Improving Multimodal Learning with Dispersive and Anchoring Regularization*, but the central idea remains the same: gradient optimization alone is often not enough to shape robust multimodal representations.

## Main Contributions

- Identifies representation geometry as a missing control axis in multimodal learning.
- Proposes a **plug-and-play** regularization framework that requires no architectural changes.
- Combines **intra-modal dispersive regularization** with **inter-modal anchoring regularization** to improve both unimodal robustness and multimodal fusion.

## Method

The regularizer enforces two complementary constraints:

- **Dispersive regularization**  
  Encourages richer and less collapsed embeddings within the same modality.

- **Anchoring regularization**  
  Limits sample-level drift across modalities without forcing rigid one-to-one alignment.

Because DAGR acts directly on intermediate embeddings, it can be added to existing multimodal training pipelines with minimal overhead.

## Evaluation Highlights

- Improves both **multimodal** and **unimodal** performance across multiple benchmarks.
- Mitigates modality trade-offs by explicitly controlling representation geometry.
- Demonstrates that better geometric structure can be achieved without redesigning the backbone or fusion architecture.

## Resources

- [arXiv paper](https://arxiv.org/abs/2601.21670)
- [Paper preview](./assets/paper-preview.png)

## Citation

```bibtex
@article{xia2026dagr,
  title = {Improving Multimodal Learning with Dispersive and Anchoring Regularization},
  author = {Xia, Zixuan and Wang, Hao and Weng, Pengcheng and Qian, Yanyu and Xu, Yangxin and Dan, William and Wang, Fei},
  journal = {arXiv preprint arXiv:2601.21670},
  year = {2026}
}
```

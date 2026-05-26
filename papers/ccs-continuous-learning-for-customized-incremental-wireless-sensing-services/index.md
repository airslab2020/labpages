---
title: CCS: Continuous Learning for Customized Incremental Wireless Sensing Services
authors: Q Fu, F Wang, M Zhu, H Ding, J Han, TX Han
institution: XJTU AIRS Lab
summary: CCS studies how wireless sensing services can continuously add customized capabilities after deployment, instead of retraining every user-specific model from scratch.
cover: ./assets/cover.svg
coverAlt: Cover image for CCS: Continuous Learning for Customized Incremental Wireless Sensing Services
eyebrow: Publication
paper: ./assets/paper.pdf
---

# Overview

Wireless sensing is moving from laboratory demonstrations toward service deployment. This paper considers a realistic service setting where users may request new sensing capabilities over time, such as adding fall detection or other customized activities after the initial model is delivered.

CCS frames this as continuous learning for incremental wireless sensing: the system must absorb new classes or services while controlling forgetting, annotation cost, and model growth.

## Main Contributions

- Defines a service-oriented continuous learning problem for customized wireless sensing.
- Focuses on incremental capability expansion under real deployment constraints.
- Connects wireless sensing model maintenance with continual learning, compression, and user-specific customization.

## Technical Details

The page archive treats CCS as a deployment paper rather than only a recognition paper. Its key contribution is the problem formulation: sensing models should behave like maintainable services that can be updated as user needs change.

The method combines incremental learning mechanisms with wireless sensing features so that new sensing targets can be integrated without discarding previous capabilities.

## Results

The evaluation studies whether the model can learn new sensing functions while preserving previous ones. The main result is that continuous service customization is feasible, but it requires explicit mechanisms for both learning new behaviors and retaining old knowledge.

## Resources

- [Local PDF](./assets/paper.pdf)
- [Online paper page](https://arxiv.org/abs/2412.04821)
- [Cover image](./assets/cover.svg)

## Citation

```bibtex
@inproceedings{ccs-continuous-learning-for-customized-incremental-wireless-sensing-services,
  title = {CCS: Continuous Learning for Customized Incremental Wireless Sensing Services},
  author = {Q Fu and F Wang and M Zhu and H Ding and J Han and TX Han},
  booktitle = {arXiv preprint arXiv:2412.04821, 2024},
  year = {2024}
}
```

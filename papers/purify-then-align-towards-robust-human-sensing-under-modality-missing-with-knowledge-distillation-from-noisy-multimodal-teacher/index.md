---
title: Purify-then-Align: Towards Robust Human Sensing under Modality Missing with Knowledge Distillation from Noisy Multimodal Teacher
authors: Pengcheng Weng, Yanyu Qian, Yangxin Xu, Fei Wang
institution: XJTU / University of Bern / NTU
summary: PTA makes missing-modality human sensing more robust by first purifying a noisy multimodal teacher with meta-learned modality weights, then aligning each student modality through diffusion-based knowledge distillation.
cover: ./assets/pta-framework.png
coverAlt: PTA framework showing the Purify stage for meta-learned modality weighting and the Align stage for diffusion-based distillation
eyebrow: CVPR 2026 Workshop
theme: Multimodal Wireless Sensing
paper: https://arxiv.org/abs/2604.05584
code: https://github.com/Vongolia11/PTA
---

# Overview

Multimodal human sensing is powerful when every sensor is available, but real deployments often lose modalities because of hardware failures, environmental interference, deployment cost, or communication dropouts. PTA focuses on the harder missing-modality setting where each single-modality model must remain reliable even after other sensing channels disappear.

The paper identifies two linked obstacles. The **Representation Gap** comes from heterogeneous sensors such as depth cameras, LiDAR, Wi-Fi CSI, mmWave radar, and RFID producing very different feature spaces. The **Contamination Effect** appears when low-quality or noisy modalities pollute the multimodal teacher, making later distillation unreliable. PTA argues that the teacher must be cleaned before cross-modal alignment can work.

![PTA framework](./assets/pta-framework.png)

## Core Idea

PTA uses a **Purify-then-Align** strategy. It first builds a cleaner multimodal teacher by learning how much each modality should contribute, then uses that purified teacher to strengthen every single-modality student encoder.

- **Purify the teacher.** A meta-learning-driven weighting mechanism dynamically down-weights noisy or low-contributing modalities. The method uses uniform modality dropout during training, avoiding the brittle hand-tuning of per-modality dropout probabilities.
- **Align the students.** A diffusion-based knowledge distillation module treats each single-modality feature as an incomplete version of the purified teacher feature. The student feature is refined toward the teacher in a compressed latent space.
- **Keep inference practical.** Projection layers reduce feature dimensionality, a lightweight diffusion model performs the feature alignment, and DDIM sampling uses five deterministic denoising steps for efficient inference.

## Method Details

In the **Purify** stage, PTA optimizes model parameters and modality weights in a nested loop. The inner loop trains the encoders, task head, and alignment module on the training set. The outer loop updates the modality weights on a validation set, so modalities that hurt task performance receive lower influence in the fused teacher representation.

In the **Align** stage, the purified teacher feature is formed as a weighted sum of available modality features. Each student modality is projected into the same latent space and refined with diffusion-based distillation. A small noise adapter predicts how noisy the student feature is, blends it with Gaussian noise, and provides an adaptive starting point for the reverse denoising process.

The result is a set of single-modality encoders that carry richer cross-modal knowledge. This matters because the model can still perform well when only one sensor stream remains available at test time.

## Evaluation

The paper evaluates PTA on two large-scale multimodal human sensing benchmarks. **MM-Fi** is used for human pose estimation with depth, LiDAR, and Wi-Fi CSI modalities. **XRF55** is used for human action recognition with mmWave radar, Wi-Fi, and RFID modalities.

On MM-Fi, PTA improves single-modality MPJPE over X-Fi by **12.0%** for Depth, **47.5%** for LiDAR, and **13.3%** for Wi-Fi CSI. It also improves several missing-modality combinations, including **D+L** by **27.7%**, **L+W** by **32.8%**, and **D+L+W** by **21.4%**.

![MM-Fi pose estimation results](./assets/pta-mmfi-results.png)

On XRF55, PTA achieves the best result across every evaluated modality combination. Compared with X-Fi, the single-modality accuracy increases by **6.13** points for Radar, **26.64** points for Wi-Fi, and **12.54** points for RFID. With all three RF modalities available, PTA reaches **95.87%** accuracy.

![XRF55 action recognition results](./assets/pta-xrf55-results.png)

## Ablation Findings

The ablation study shows that the two stages are complementary. Removing diffusion-based alignment weakens several single-modality results, while removing meta-learning causes much larger degradation because the model loses its ability to suppress contaminated modalities.

On MM-Fi, removing the meta-learning module raises D+L MPJPE from **64.68** to **148.65**, showing how strongly contamination can damage multimodal fusion. On XRF55, the full model still wins most settings, while a few pairwise cases show that diffusion alignment can be slightly sensitive when one modality is extremely noisy.

![MM-Fi ablation results](./assets/pta-mmfi-ablation.png)

![XRF55 ablation results](./assets/pta-xrf55-ablation.png)

## Takeaways

PTA's main lesson is that robust missing-modality sensing is not just a matter of better alignment. The multimodal teacher must first be made trustworthy. By explicitly purifying the teacher before distillation, PTA improves both multimodal fusion and the standalone strength of each sensor-specific encoder.

## Resources

- [arXiv abstract](https://arxiv.org/abs/2604.05584)
- [arXiv PDF](https://arxiv.org/pdf/2604.05584)
- [Code](https://github.com/Vongolia11/PTA)

## Citation

```bibtex
@inproceedings{weng2026purify,
  title = {Purify-then-Align: Towards Robust Human Sensing under Modality Missing with Knowledge Distillation from Noisy Multimodal Teacher},
  author = {Weng, Pengcheng and Qian, Yanyu and Xu, Yangxin and Wang, Fei},
  booktitle = {CVPR 2026 Workshop on Any-to-Any Multimodal Learning},
  year = {2026}
}
```

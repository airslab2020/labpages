---
title: Cross-domain EEG-based Emotion Recognition with Contrastive Learning
authors: Rui Yan, Yibo Li, Han Ding, Fei Wang
institution: XJTU-SSE / XJTU-CS
theme: EEG Affective Computing
summary: EmotionCLIP reformulates cross-domain EEG emotion recognition as an EEG-text matching problem, pairing a frozen CLIP text encoder with the proposed SST-LegoViT EEG backbone to improve cross-subject and cross-time generalization.
cover: ./assets/teaser.png
coverAlt: EmotionCLIP EEG encoder teaser
eyebrow: Publication
paper: https://arxiv.org/abs/2511.05293
code: https://github.com/Departure2021/EmotionCLIP
---

# Overview

EEG-based emotion recognition is attractive for affective computing because EEG is non-invasive, has high temporal resolution, and reflects emotion-related brain activity more directly than facial expression or speech. The hard part is **generalization**: EEG distributions vary heavily across subjects and across recording sessions, so models that work well in-domain often degrade under cross-subject and cross-time evaluation.

This paper proposes **EmotionCLIP**, which reframes the task from plain classification into an **EEG-text matching** problem. Instead of only learning a classifier over EEG features, the method aligns EEG embeddings with semantic text embeddings of emotion labels in a shared space, making the supervision signal more stable across domains.

> Core idea: use text as a stable semantic anchor for emotion categories, and align EEG features to that anchor with contrastive learning.

<figure class="markdown-figure">
  <img src="./assets/figure-1.png" alt="EmotionCLIP task reformulation">
  <figcaption>Figure 1 from the paper. EmotionCLIP converts cross-domain EEG emotion recognition from a direct classification task into an EEG-text matching problem.</figcaption>
</figure>

## Why CLIP-style alignment helps

Traditional domain adaptation methods try to learn subject-invariant EEG features directly from multi-source data, but this is difficult because EEG signals are highly non-stationary and differ substantially across subjects. EmotionCLIP instead introduces **text** as an intermediate modality:

- textual emotion descriptions are more stable across subjects and across time,
- CLIP-style alignment supplies a shared embedding space for EEG and text,
- and the model can predict by matching EEG features to the most similar emotion text prompt.

The text encoder is the **official pre-trained CLIP text encoder**, kept frozen during training to avoid overfitting on small EEG datasets.

## Model Architecture

EmotionCLIP uses a dual-encoder design:

1. **Text encoder**
   Emotion labels such as `happy`, `sad`, `fear`, and `neutral` are inserted into **16 prompt templates** to create richer text descriptions. These are encoded with frozen CLIP text features.

2. **EEG encoder**
   The proposed **SST-LegoViT** backbone extracts spatial, spectral, and temporal information from a 4D EEG representation.

3. **Contrastive matching**
   EEG and text features are projected into a shared space, and the model is trained to maximize similarity between correctly paired EEG-text embeddings.

<figure class="markdown-figure">
  <img src="./assets/teaser.png" alt="SST-LegoViT overview">
  <figcaption>Figure 2 from the paper. SST-LegoViT processes EEG data sequentially across spatial, frequency-band, and temporal dimensions.</figcaption>
</figure>

## EEG Representation and SST-LegoViT

The raw EEG signals are transformed into a **4D tensor** of shape `Time x Frequency x Height x Width`, so the network can jointly reason about temporal dynamics, spectral content, and spatial electrode topology.

The preprocessing pipeline includes:

- filtering into six frequency bands: `delta`, `theta`, `alpha`, `beta`, `gamma1`, and `gamma2`,
- extracting both **Differential Entropy (DE)** and **Power Spectral Density (PSD)** features,
- mapping the 62 EEG channels to a 2D grid according to electrode positions,
- and segmenting the sequence over time to form multiple frames.

The SST-LegoViT backbone contains four main parts:

- **Embedding layer**  
  A stack of four small 2D convolutions replaces the standard ViT-style large-kernel patch embedding.

- **Spatial multi-scale encoder**  
  The feed-forward block is replaced with parallel `1x1`, `3x3`, and `5x5` convolution branches to capture spatial features at different scales.

- **Frequency-band encoder (Legoformer)**  
  DE and PSD are processed by separate Transformer encoders, then fused with cross-attention, using DE as the primary context and PSD as auxiliary support.

- **Temporal encoder**  
  A Transformer encoder models long-range temporal dependencies after cross-band fusion.

<figure class="markdown-figure">
  <img src="./assets/modules.png" alt="Spatial multi-scale encoder and Legoformer modules">
  <figcaption>Figures 3 and 4 from the paper. The model combines a multi-scale spatial block with Legoformer-based DE/PSD fusion before temporal modeling.</figcaption>
</figure>

## Results at a Glance

The paper evaluates EmotionCLIP on **SEED** and **SEED-IV** using both **cross-subject** and **cross-time** protocols.

| Setting | SEED | SEED-IV |
| --- | ---: | ---: |
| Cross-subject accuracy | 88.69 | 73.50 |
| Cross-time average accuracy | 88.46 | 77.54 |

For cross-subject recognition, EmotionCLIP achieves:

- **88.69%** on SEED, beating **MSFR-GCN (86.78%)** by **1.91 points** and **MADA (86.16%)** by **2.53 points**.
- **73.50%** on SEED-IV, slightly below **RGNN (73.84%)** but above **MSFR-GCN (73.43%)**.

For cross-time evaluation, the three reported train/test session splits produce:

| Training -> Test | SEED | SEED-IV |
| --- | ---: | ---: |
| Session 1 -> Session 2 | 88.65 | 74.38 |
| Session 1 -> Session 3 | 88.31 | 79.99 |
| Session 2 -> Session 3 | 88.42 | 78.24 |

These numbers show that the model remains strong not only across people but also across sessions collected at different times.

<figure class="markdown-figure">
  <img src="./assets/results.png" alt="EmotionCLIP results tables and plots">
  <figcaption>Figure 5 and the main result tables. The paper reports strong cross-subject and cross-time performance, plus a positive ablation gain from EEG-text matching.</figcaption>
</figure>

## Few-shot and Ablation Findings

The paper also studies **zero-shot and N-shot** settings on SEED. Performance improves consistently as the number of shots increases from `0` to `32`, and the authors therefore use the **32-shot** configuration for the main experiments.

The ablation is also informative:

- **SST-LegoViT alone** reaches **61.42%**.
- **EmotionCLIP** reaches **65.61%**.
- The gain is **+4.19 points**, which the paper attributes to aligning EEG features with the semantic text space.

This result supports the paper's central claim that text-guided contrastive learning improves cross-domain robustness beyond what the EEG encoder alone can provide.

## Takeaways

- EmotionCLIP turns EEG emotion recognition into a **multimodal alignment** problem rather than a pure classifier design problem.
- The frozen CLIP text encoder provides a stable semantic target for cross-domain generalization.
- SST-LegoViT is lightweight but still captures the three key EEG dimensions: **spatial**, **spectral**, and **temporal**.
- The method performs especially well on SEED and remains competitive on the harder SEED-IV benchmark.

## Resources

- [arXiv abstract](https://arxiv.org/abs/2511.05293)
- [Code](https://github.com/Departure2021/EmotionCLIP)
- [Local Figure 1 crop](./assets/figure-1.png)
- [Local teaser image](./assets/teaser.png)
- [Local module figure crop](./assets/modules.png)
- [Local results figure crop](./assets/results.png)

## Citation

```bibtex
@inproceedings{yan2026emotionclip,
  title = {Cross-domain EEG-based Emotion Recognition with Contrastive Learning},
  author = {Yan, Rui and Li, Yibo and Ding, Han and Wang, Fei},
  booktitle = {IEEE International Conference on Acoustics, Speech, and Signal Processing (ICASSP)},
  year = {2026}
}
```

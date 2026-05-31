---
title: COMPASS: Complete Multimodal Fusion via Proxy Tokens and Shared Spaces for Ubiquitous Sensing
authors: Hao Wang, Yanyu Qian, Pengcheng Weng, Zixuan Xia, William Dan, Yangxin Xu, Fei Wang
institution: UniBE / XJTU / NTU
theme: Multimodal Wireless Sensing
summary: COMPASS tackles missing-modality ubiquitous sensing with a slot-complete fusion design: every modality slot is kept alive at inference, and missing slots are filled with proxy tokens generated from the observed modalities in a shared latent space.
cover: ./assets/teaser.png
coverAlt: COMPASS framework teaser
eyebrow: Publication
paper: https://arxiv.org/abs/2604.02056
---

# Overview

Missing modalities are a persistent problem in real-world multimodal sensing. In practice, one or more sensing channels may disappear because of occlusion, sensor failure, deployment constraints, or incomplete collection. Most existing methods react to this by either **dropping missing branches** or **reconstructing missing features**, but both approaches change what the fusion head sees at inference time.

**COMPASS** takes a different view: robustness should come from preserving a **slot-complete fusion interface**. Instead of adapting the fusion pipeline to the observed subset, it keeps a fixed **N-slot token layout** and fills each missing slot with a learned proxy token generated from the observed modalities in a shared latent space.

> Core idea: do not let missing modalities change the fusion interface. Reconstruct the missing slots, keep the token layout fixed, and let the same fusion rule run under every missingness pattern.

<figure class="markdown-figure">
  <img src="./assets/teaser.png" alt="COMPASS framework overview">
  <figcaption>Framework overview from the paper. Each observed modality is encoded into a shared space, pairwise proxy generators synthesize the missing slot, and fusion always operates on the same fixed token interface.</figcaption>
</figure>

## Why this matters

The paper shows that many missing-modality methods are still **fusion-interface inconsistent**:

- **Skip-based methods** remove absent tokens entirely, which changes the structure of the fusion input.
- **Imputation-based methods** often generate a single missing feature but do not preserve a clean, fixed slot interface for every modality.
- As a result, the fusion head receives a different input structure from the one it saw during training.

COMPASS is designed around the opposite principle: every modality slot should exist whether the raw modality is observed or not.

<figure class="markdown-figure">
  <img src="./assets/figure-1.png" alt="Comparison of fusion strategies under missing modalities">
  <figcaption>Figure 1 from the paper. COMPASS differs from skip and generic imputation baselines by preserving a fixed token layout for the fusion head.</figcaption>
</figure>

## Main Contributions

- Proposes **fusion completeness** as a design principle for robust multimodal sensing under missing modalities.
- Introduces **pairwise source-to-target proxy generators** that synthesize a missing modality token from each observed modality.
- Aggregates these source-specific proxy estimates into **one proxy token per missing slot**, so the fusion head always receives exactly one token for each modality.
- Combines **proxy alignment**, **shared-space regularization**, and **per-proxy task supervision** so the generated proxy is both representation-compatible and discriminative for the downstream task.

## Method at a Glance

The pipeline has four stages:

1. **Modality-specific encoding**  
   Each observed modality is processed by its own encoder and projection head to obtain a token sequence in a shared latent space.

2. **Shared-space projection and global tokens**  
   Token sequences are pooled into one global token per observed modality.

3. **Cross-modal proxy generation**  
   For a missing target modality `v_j`, every observed modality `v_i` feeds its shared-space token into a directed generator `G_i_to_j`. The outputs are then mean-aggregated into one proxy token for the missing slot.

4. **Fixed fusion**  
   The fusion head always receives a modality-complete token set: either a real token if the modality is observed, or a proxy token if it is missing. Those tokens are summed, layer-normalized, and passed to the task head.

This means the fusion computation itself never needs to change across different missingness patterns.

## Training Objectives

The paper uses three complementary learning signals:

- **Task supervision**: every proxy-complete token set must still solve the downstream HAR task.
- **Proxy alignment loss**: when a modality is synthetically masked during training, the generated proxy is pulled toward the real target token.
- **Shared-space regularization**: a VICReg-style objective encourages observed modalities to form a more compatible shared latent geometry.

This combination is important. Proxy generation alone provides structural completeness, but strong performance also requires the shared space to be aligned enough that a token from one modality can meaningfully substitute for another.

## Results at a Glance

The paper evaluates COMPASS on **MM-Fi**, **XRF55**, and **OctoNet**, consistently showing that the method is strongest in the regimes where missing modalities matter most: **single-modality** and **low-modality** settings.

| Dataset / Scenario | X-Fi | COMPASS | Gain |
| --- | ---: | ---: | ---: |
| XRF55, WiFi only | 55.7 | 85.4 | +29.7 |
| XRF55, WiFi + RFID | 58.1 | 86.3 | +28.2 |
| XRF55, full (R + W + RF) | 89.8 | 95.1 | +5.3 |
| MM-Fi, Image + LiDAR | 35.2 | 60.4 | +25.2 |
| MM-Fi, Depth + LiDAR | 51.6 | 66.3 | +14.7 |
| MM-Fi, full (I + D + L + R) | 72.2 | 82.1 | +9.9 |
| OctoNet, ToF only | 7.6 | 89.3 | +81.7 |

The paper's conclusion also highlights the broader pattern on OctoNet: across **five modalities and 31 combinations**, COMPASS improves the **single-modality average by up to 28 points** and the **dual-modality average by up to 11 points** over X-Fi.

## Representation Geometry and Ablations

One of the most useful parts of the paper is the geometry analysis on XRF55. The authors show that X-Fi still separates different modalities in representation space, while COMPASS significantly reduces those modality boundaries without collapsing class structure. That makes proxy transfer much more reliable.

<figure class="markdown-figure">
  <img src="./assets/figure-3.png" alt="Representation geometry and efficiency figures from the COMPASS paper">
  <figcaption>Figure 3 and the accompanying ablation / efficiency tables. COMPASS improves cross-modal compactness, class separation, proxy effectiveness, and inference efficiency.</figcaption>
</figure>

The ablations tell a clear story:

- **No proxy** on XRF55 gets a 7-scenario average of **76.9**.
- **Proxy only (without alignment)** improves that to **79.6**.
- **Full COMPASS** raises it further to **84.6**.

The paper also reports that the best masking probability is `p_drop = 0.7`, and that the hardest `WiFi + RFID` case benefits the most from proxy practice.

## Efficiency

COMPASS uses **element-wise summation** as its final fusion rule. This turns out to be both simple and effective:

- Summation gives the best XRF55 numbers among the tested fusion variants.
- It introduces **0 fusion parameters**, compared with `788K` for concatenation + linear and `1.05M` for 1-layer cross-attention fusion.
- On XRF55, reported latency drops from **9.49 / 4.48 ms** for X-Fi to **4.91 / 1.71 ms** for COMPASS under all-modality / single-modality settings.

So the method is not only more accurate under missing modalities, but also **faster at inference** once the token interface is made compatible.

## Takeaways

- The key innovation is not just proxy generation, but **keeping the fusion interface fixed**.
- COMPASS works especially well when weaker modalities need to borrow information from stronger ones.
- Better shared-space geometry is essential: proxy tokens become useful only when modalities are aligned enough to substitute for one another.
- The method achieves stronger robustness **without paying a latency penalty**.

## Resources

- [arXiv abstract](https://arxiv.org/abs/2604.02056)
- [Local teaser image](./assets/teaser.png)
- [Local Figure 1 crop](./assets/figure-1.png)
- [Local Figure 3 / ablation crop](./assets/figure-3.png)

## Citation

```bibtex
@article{wang2026compass,
  title = {COMPASS: Complete Multimodal Fusion via Proxy Tokens and Shared Spaces for Ubiquitous Sensing},
  author = {Wang, Hao and Qian, Yanyu and Weng, Pengcheng and Xia, Zixuan and Dan, William and Xu, Yangxin and Wang, Fei},
  journal = {arXiv preprint arXiv:2604.02056},
  year = {2026}
}
```

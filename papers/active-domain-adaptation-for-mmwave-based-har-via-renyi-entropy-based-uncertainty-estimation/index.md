---
title: Active Domain Adaptation for mmWave-based HAR via Rényi Entropy-based Uncertainty Estimation
authors: Mingzhi Lin, Teng Huang, Han Ding, Cui Zhao, Fei Wang, Ge Wang, Wei Xi
institution: XJTU-CSE / XJTU-SSE
theme: mmWave Domain Adaptation
summary: mmADA adapts mmWave-based human activity recognition models to new users, positions, and environments with minimal target-domain labels, using Rényi entropy to select informative samples and unlabeled-data refinement to close the domain gap.
cover: ./assets/mmada-overview.png
coverAlt: Overview of the mmADA active domain adaptation framework
eyebrow: Publication
paper: https://arxiv.org/abs/2511.04219
---

# Overview

mmWave radar is attractive for Human Activity Recognition (HAR) because it is contactless, privacy-preserving, and capable of capturing fine-grained motion through range, angle, and Doppler signatures. The practical challenge is **domain shift**: a model trained on one set of users, positions, or rooms can degrade sharply when deployed in a new domain.

This paper proposes **mmADA**, an **Active Domain Adaptation** framework for mmWave-based HAR. Instead of labeling target data uniformly or randomly, mmADA asks a more careful question: under a small labeling budget, which target samples are most worth annotating?

> Core idea: use Rényi entropy to estimate both domain uncertainty and prediction uncertainty, actively label the most informative target samples, then refine adaptation with pseudo-labeling and contrastive learning over the remaining unlabeled data.

<figure class="markdown-figure">
  <img src="./assets/mmada-overview.png" alt="Overview of the mmADA active domain adaptation framework">
  <figcaption>Figure 4 from the paper. mmADA converts raw mmWave radar data into sensing signatures, estimates Rényi entropy-based uncertainty, selects informative target samples, and refines adaptation with pseudo-labeling and contrastive learning.</figcaption>
</figure>

## Why this matters

Cross-domain mmWave HAR is hard because the signal distribution changes for several reasons:

- **New positions** change radar-to-human distance, angle, multipath, and reflection strength.
- **New users** introduce different body shapes, limb lengths, and motion styles.
- **New environments** alter reflections, clutter, furniture layout, and ambient interference.

The paper shows this through Time-Doppler (TD) and Time-Angle (TA) heatmaps, t-SNE embeddings, and uncertainty distributions. Direct transfer keeps source-domain activities relatively separable, but target-domain and unseen-domain features become scattered. After mmADA, the feature geometry becomes much more aligned across source, target, and unseen domains.

## Main Contributions

- Introduces **mmADA**, the first active domain adaptation framework designed specifically for mmWave-based HAR.
- Proposes **Rényi entropy-based uncertainty estimation** that jointly captures domain uncertainty and prediction uncertainty.
- Uses a **diversity-aware active selection** step so labeled target samples are not only uncertain but also representative.
- Refines target adaptation with **KNN-based pseudo-label sets** and **contrastive learning**, making unlabeled target data useful instead of ignoring it.
- Validates the method on a self-collected mmWave dataset and two large public datasets, **XRF55** and **MM-Fi**.

## Method at a Glance

The mmADA pipeline has four main stages:

1. **Signal processing**  
   Raw FMCW mmWave radar signals are converted into sensing signatures. The system uses **Time-Doppler heatmaps** to capture velocity dynamics and **Time-Angle heatmaps** to capture spatial movement patterns.

2. **EDL-based Activity Recognizer (EAR)**  
   Two ResNet50 branches extract TD and TA features, fuse them in latent space, and feed a HyperNetwork-based classifier. The classifier uses **Evidential Deep Learning** with a Dirichlet prior, so the model can estimate uncertainty instead of only producing a hard class prediction.

3. **Rényi entropy-based uncertainty selection**  
   mmADA computes a total uncertainty score from two parts: **domain uncertainty**, which measures whether a sample looks unfamiliar because of domain shift, and **prediction uncertainty**, which measures ambiguity near class boundaries.

4. **Model refinement**  
   The selected target samples are labeled and used for adaptation. The remaining unlabeled target samples are further exploited through pseudo-labeling and contrastive learning.

This design lets mmADA spend annotation effort on samples that actively improve cross-domain adaptation rather than labeling target data uniformly.

## Rényi Entropy Selector

Most active learning methods use Shannon entropy. mmADA instead uses **Rényi entropy**, where the entropy order `s` can emphasize difficult high-uncertainty samples when `0 < s < 1`. In the paper, `s` is learnable but regularized so it remains in the useful range.

The selector combines:

- **Rényi mutual information** for domain uncertainty.
- **Rényi conditional entropy** for prediction uncertainty.
- A weighted total uncertainty score, with the domain-uncertainty term given higher weight because domain shift is the main adaptation problem.

After ranking samples by total uncertainty, mmADA applies a diversity-aware filtering step. This avoids selecting many near-duplicate uncertain samples and encourages the labeled set to cover a broader range of target-domain patterns.

<figure class="markdown-figure">
  <img src="./assets/uncertainty-selection.png" alt="Uncertainty-based selection and diversity-based filtering process">
  <figcaption>Figure 6 from the paper. The selector first estimates domain and prediction uncertainty, then combines uncertainty-based selection with diversity-aware filtering to choose final samples for annotation.</figcaption>
</figure>

## Pseudo-Labeling and Contrastive Learning

The paper does not stop after active annotation. It also uses the unlabeled target data that remain outside the labeling budget.

The pseudo-labeling module uses a KNN-style similarity rule in latent space. Instead of forcing one pseudo label per sample, it predicts a **Pseudo Label Set (PLS)**:

- the set can be empty when the sample is too uncertain,
- contain one label when the neighborhood is clear,
- or contain multiple labels when several activities remain plausible.

This is important because ordinary single-label pseudo-labeling can accumulate errors under domain shift. The PLS design is more conservative and turns out to be crucial in the ablation study.

Contrastive learning then tightens class-level structure by pulling same-activity samples together and pushing different-activity samples apart. Together, pseudo-label sets and contrastive learning help unlabeled target data improve feature alignment instead of introducing noise.

## Experimental Setup

The self-collected dataset uses a commodity **TI IWR1443BOOST** mmWave radar:

| Item | Setting |
| --- | --- |
| Radar | TI IWR1443BOOST |
| Frequency | 77-81 GHz |
| Frame rate | 20 FPS |
| Chirps per frame | 120 |
| Volunteers | 8 users |
| Positions | 5 positions |
| Environments | 2 indoor scenes |
| Activities | 11 activities plus random / no action |
| Total samples | 9,600 |

The default adaptation protocol uses data from two users at one position as the source domain. Other positions, users, and environments are used as target or unseen domains, making the setup close to real deployment where new sensing conditions appear after training.

## Results at a Glance

On the main self-collected dataset, mmADA substantially improves over direct transfer and five representative baselines:

| Method | Accuracy | Precision | Recall | F1-score |
| --- | ---: | ---: | ---: | ---: |
| Direct Transfer | 43.52 | 47.76 | 43.52 | 42.86 |
| mTransSee | 45.45 | 61.47 | 45.45 | 47.73 |
| EI | 79.17 | 85.14 | 79.17 | 78.22 |
| RoMF | 31.57 | 51.13 | 31.57 | 31.28 |
| EADA | 85.19 | 86.89 | 85.19 | 84.51 |
| MADA | 75.69 | 83.94 | 75.69 | 76.16 |
| **mmADA** | **96.30** | **96.33** | **96.30** | **96.28** |

The method also maintains strong generalization to unseen domains:

| Setting | Accuracy |
| --- | ---: |
| Source domain G1 | 97.92 |
| Unseen domain G3 | 91.25 |
| Unseen domain G4 | 92.50 |

The paper reports over **90% accuracy** across cross-user, cross-position, and cross-environment settings. In per-user analysis, mmADA reaches more than **95% accuracy** on target-domain users; across positions, it keeps accuracy above **90%**, while selecting more labels for harder far-angle positions.

<figure class="markdown-figure">
  <img src="./assets/main-results.png" alt="Confusion matrix, uncertainty distribution, user and position results, and Table I from the mmADA paper">
  <figcaption>Figures 9-12 and Table I from the paper. The results connect action-level accuracy, uncertainty behavior, per-user/per-position robustness, and the overall comparison against direct transfer and domain adaptation baselines.</figcaption>
</figure>

## Ablation Findings

The ablation results make the contribution of each module clear:

| Variant | Accuracy | What changes |
| --- | ---: | --- |
| **mmADA** | **96.30** | Full method |
| w/o Rényi entropy | 93.75 | Replaces Rényi entropy with Shannon entropy |
| w/o pseudo-labeling | 81.48 | Removes unlabeled target-data refinement |
| w/o pseudo-label set | 65.97 | Uses a single pseudo label instead of PLS |
| w/o contrastive learning | 91.90 | Removes class-level latent alignment |

Two patterns stand out. First, Rényi entropy improves sample selection beyond Shannon entropy. Second, pseudo-label sets are not just a small detail: replacing them with standard single-label pseudo-labeling causes a severe drop, showing how damaging noisy pseudo labels can be under domain shift.

The micro-benchmark also shows that mmADA remains useful under very tight labeling budgets. With only **1%** active target samples, it already reaches **86.81% accuracy**; performance improves as the budget grows, with diminishing gains beyond the default **5%** budget.

## Generalization on Public Datasets

The paper further evaluates mmADA on **XRF55** and **MM-Fi**.

On **XRF55**, mmADA improves cross-person and cross-scene/person adaptation:

<figure class="markdown-figure">
  <img src="./assets/xrf55-results.png" alt="Domain adaptation results on the XRF55 dataset">
  <figcaption>Table II from the paper. On XRF55, mmADA improves both cross-person and cross-scene/person adaptation over direct transfer and representative baselines.</figcaption>
</figure>

| XRF55 setting | Direct Transfer | Best listed baseline | mmADA |
| --- | ---: | ---: | ---: |
| Cross-person | 64.42 | 67.94 | **70.97** |
| Scene 1 -> 2 | 11.36 | 44.34 | **53.84** |
| Scene 1 -> 3 | 26.42 | 47.88 | **55.45** |
| Scene 1 -> 4 | 26.58 | 45.56 | **54.65** |

On **MM-Fi**, the gains are even larger across one-to-one environment adaptation tasks:

<figure class="markdown-figure">
  <img src="./assets/mmfi-results.png" alt="One-to-one domain adaptation results on the MM-Fi dataset">
  <figcaption>Table III from the paper. On MM-Fi, mmADA achieves the highest mean accuracy across one-to-one environment adaptation tasks.</figcaption>
</figure>

| MM-Fi setting | Direct Transfer | EADA | mmADA |
| --- | ---: | ---: | ---: |
| Mean accuracy | 56.24 | 89.90 | **96.88** |
| 1 -> 2 | 64.11 | 92.01 | **97.65** |
| 1 -> 3 | 60.68 | 92.64 | **97.50** |
| 1 -> 4 | 31.82 | 84.64 | **93.57** |
| 2 -> 3 | 73.64 | 93.08 | **99.17** |
| 2 -> 4 | 53.13 | 87.77 | **96.04** |
| 3 -> 4 | 54.08 | 91.38 | **97.34** |

These results support the paper's main claim: active sample selection plus uncertainty-aware refinement can generalize beyond one collected dataset and remain effective on larger public sensing benchmarks.

## Takeaways

- The key shift is from **few-shot labeling by class** to **active labeling by informativeness**.
- Rényi entropy gives mmADA a stronger uncertainty signal than Shannon entropy for cross-domain mmWave HAR.
- Pseudo-label sets are a practical safeguard against noisy unlabeled-target supervision.
- The hardest cases remain cross-person and cross-angle adaptation, where mmWave signatures vary substantially.
- The method is especially valuable when collecting target-domain labels is expensive but unlabeled target data are available.

## Resources

- [arXiv abstract](https://arxiv.org/abs/2511.04219)
- [Local generated cover image](./assets/cover.svg)
- [Local mmADA overview figure](./assets/mmada-overview.png)
- [Local uncertainty selection figure](./assets/uncertainty-selection.png)
- [Local main results figure](./assets/main-results.png)
- [Local XRF55 results table](./assets/xrf55-results.png)
- [Local MM-Fi results table](./assets/mmfi-results.png)

## Citation

```bibtex
@article{lin2026mmada,
  title = {Active Domain Adaptation for mmWave-based HAR via Rényi Entropy-based Uncertainty Estimation},
  author = {Lin, Mingzhi and Huang, Teng and Ding, Han and Zhao, Cui and Wang, Fei and Wang, Ge and Xi, Wei},
  journal = {IEEE Transactions on Mobile Computing},
  year = {2026}
}
```

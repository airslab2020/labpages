---
title: MobiDiary: Autoregressive Action Captioning with Wearable Devices and Wireless Signals
authors: Fei Deng, Yinghui He, Chuntong Chu, Ge Wang, Han Ding, Jinsong Han, Fei Wang
institution: XJTU, NTU, ZJU
summary: MobiDiary turns raw IMU and Wi-Fi CSI streams into free-form daily activity captions with a unified sensor encoder, placement-aware physical priors, and autoregressive language generation.
theme: Multimodal Wearable Sensing
cover: ./assets/mobidiary-sensing-caption.png
coverAlt: MobiDiary sensing streams and generated daily activity caption
eyebrow: Publication
paper: https://arxiv.org/abs/2601.08204
---

# Overview

Most wearable and wireless sensing systems still summarize human activity with a fixed label such as *walking*, *cooking*, or *washing hands*. **MobiDiary** tackles a richer task: generating natural-language descriptions of continuous daily activities directly from privacy-preserving physical signals.

The framework works with two common smart-home sensing sources: **IMU streams** from wearable and mobile devices, and **Wi-Fi CSI** from ambient wireless infrastructure. Instead of treating these modalities as separate problems, MobiDiary uses a unified sensor encoder and an autoregressive generation pipeline to produce human-readable activity logs.

The institution field is abbreviated at the university level: **XJTU**, **NTU**, and **ZJU**.

<figure class="markdown-figure">
  <img src="./assets/mobidiary-sensing-caption.png" alt="MobiDiary captures IMU and Wi-Fi sequences and generates an action caption">
  <figcaption>Figure 1. MobiDiary converts wearable IMU and ambient Wi-Fi signal sequences into interpretable daily activity captions.</figcaption>
</figure>

## Why This Paper Matters

Human action captioning is usually studied with cameras, but camera deployment in homes raises privacy, occlusion, cost, and coverage concerns. IMU and Wi-Fi sensing are more practical in everyday spaces, yet their raw signals are low-level, noisy, and heavily shaped by device placement or wireless layout.

MobiDiary reframes the problem as **signal-based action captioning**. The generated text can serve as an activity diary, support retrieval and monitoring, and connect naturally to LLM-based assistants for health, rehabilitation, elder care, and smart-home automation.

## Main Contributions

- Proposes a general framework that generates natural-language action descriptions from either raw IMU or Wi-Fi signals.
- Designs a unified sensor encoder for heterogeneous physical signals by combining local temporal semantics with deployment-aware physical priors.
- Uses autoregressive generation so each word is conditioned on the sensor sequence and the caption prefix generated so far.
- Evaluates on four modality-task settings: XRF V2 IMU, UWash IMU, XRF V2 Wi-Fi, and WiFiTAD Wi-Fi.
- Achieves state-of-the-art performance across captioning metrics including BLEU@4, METEOR, ROUGE-L, CIDEr, and Response Meaning Consistency.

## System Design

MobiDiary has three main components:

- **Sensor Encoder** extracts motion-aware temporal features from IMU or Wi-Fi streams.
- **Text Encoder** encodes the ground-truth caption during training or the generated prefix during inference.
- **Language Generation Network** uses cross-attention to fuse text context with sensor tokens and predicts the next word.

<figure class="markdown-figure">
  <img src="./assets/mobidiary-architecture.png" alt="MobiDiary architecture with sensor encoder, text encoder, and language generation network">
  <figcaption>Figure 2. The model encodes sensor sequences, attends from text context to sensor features, and generates action captions autoregressively.</figcaption>
</figure>

The unified encoder is motivated by three shared properties of IMU and Wi-Fi sensing:

- **Common kinematic causality:** both modalities reflect the same underlying human motion.
- **Local signal stationarity:** adjacent sensor samples are redundant and strongly correlated.
- **Spatial sensitivity:** IMU placement and Wi-Fi transmitter-receiver layout both change the observed signal pattern.

## Unified Sensor Encoder

The encoder targets two difficulties: sensor signals are semantically sparse, and their patterns vary strongly with deployment context. MobiDiary addresses these with four design choices.

| Component | Purpose |
| --- | --- |
| Patching | Groups adjacent frames into temporal tokens so the model can capture local motion primitives and action boundaries. |
| Sinusoidal position encoding | Encourages local temporal focus by making distant patches less similar; the implementation uses a smoother decay than the original Transformer setting. |
| Placement embedding | Adds trainable source IDs for IMU body placement or Wi-Fi Tx-Rx links, helping the model separate human motion from device-specific variation. |
| Conv-FFN block | Uses depthwise and pointwise convolutions to model temporal, channel, device, subcarrier, and link relationships efficiently. |

For IMU, the Conv-FFN separates inter-channel relationships such as acceleration versus rotation from inter-device relationships such as wrist versus head movement. For Wi-Fi, a Tx-Rx link is treated like a device and CSI subcarriers are treated like channels, giving the same encoder structure a meaningful wireless interpretation.

## Training And Inference

During training, MobiDiary uses **teacher forcing**: the ground-truth caption prefix is fed into the text encoder, and the model learns next-token prediction with cross-entropy loss. During inference, it starts from `<SOS>`, predicts one token at a time, and stops at `<EOS>` or a maximum length of 50 tokens.

<figure class="markdown-figure">
  <img src="./assets/mobidiary-teacher-autoregressive.png" alt="Teacher forcing during training and autoregressive generation during inference">
  <figcaption>Figure 3. Training uses teacher forcing, while inference generates the caption word by word.</figcaption>
</figure>

The paper constrains the output vocabulary to the top 1000 high-frequency words from the training corpus. This keeps captions concise, reduces overfitting to rare words, and lowers softmax computation.

For deployment feasibility, the paper reports 30-second input latency on two hardware settings:

| Input | RTX 3090 latency | CPU latency | Memory |
| --- | ---: | ---: | ---: |
| 6-DoF IMU at 100 Hz | About 0.6 s | About 5.0 s | 1.0 GB VRAM / 1.2 GB RAM |
| Wi-Fi CSI | About 0.8 s | About 6.5 s | 1.3 GB VRAM / 1.5 GB RAM |

## Datasets And Metrics

The evaluation covers both wearable and wireless captioning.

| Dataset setting | Modality | Key details |
| --- | --- | --- |
| XRF V2 | IMU and Wi-Fi | 16 participants, 853 valid sequences, about 16 hours, 7-10 actions per sequence, 682 / 171 train-test split. |
| UWash | IMU | 51 participants performing WHO-style handwashing routines with fine-grained timestamped labels. |
| WiFiTAD | Wi-Fi CSI | 553 untrimmed Wi-Fi CSI samples, 2,114 action instances, seven daily activities. |

The paper also discusses Ego-ADL and WEAR, but does not use them for the main task because Ego-ADL labels are unreliable for captioning and WEAR focuses on outdoor sports classification rather than detailed sequential captions.

Metrics combine standard language-generation quality with action understanding:

| Metric | What it checks |
| --- | --- |
| BLEU@4 | n-gram precision and surface fluency. |
| METEOR | unigram precision-recall balance with semantic matching support. |
| ROUGE-L | longest common subsequence coverage. |
| CIDEr | TF-IDF weighted caption consensus. |
| RMC | response meaning consistency, measuring whether captions preserve action semantics for downstream question answering. |

## Main Results

MobiDiary leads across all reported metrics on the four main benchmark settings.

| Setting | BLEU@4 | METEOR | ROUGE-L | CIDEr | RMC |
| --- | ---: | ---: | ---: | ---: | ---: |
| XRF V2 (IMU) | 0.742 | 0.841 | 0.838 | 0.834 | 0.855 |
| UWash | 0.866 | 0.904 | 0.893 | 0.908 | 0.843 |
| XRF V2 (Wi-Fi) | 0.454 | 0.483 | 0.492 | 0.481 | 0.410 |
| WiFiTAD | 0.513 | 0.583 | 0.588 | 0.576 | 0.522 |

On IMU datasets, the strongest baselines include PatchTST, ModernTCN, TimeLLM, SensorLLM, LLaSA, and XRFMamba. MobiDiary achieves the best RMC on XRF V2 (IMU) and UWash, showing that it does more than generate fluent text: it better preserves the underlying action meaning.

On Wi-Fi datasets, MobiDiary also outperforms RF-Diary, XRFMamba, WiFiTAD, and time-series baselines. This is the harder setting because Wi-Fi CSI is more abstract and noisier than wearable motion, so the gains suggest that the encoder design transfers beyond IMU.

## Ablation Findings

The ablations support the three encoder choices: local patching, placement awareness, and Conv-FFN feature modeling.

| Variant | XRF V2 IMU RMC | UWash RMC | XRF V2 Wi-Fi RMC | WiFiTAD RMC |
| --- | ---: | ---: | ---: | ---: |
| Full MobiDiary | 0.855 | 0.843 | 0.410 | 0.522 |
| Without patching | 0.776 | 0.791 | 0.373 | 0.499 |
| Without placement embedding | 0.826 | 0.855 | 0.390 | 0.509 |
| Without Conv-FFN | 0.814 | 0.810 | 0.399 | 0.515 |

Patching produces the largest drops, especially on XRF V2 (IMU), confirming the importance of local temporal semantics. Placement embeddings matter most when multiple devices or wireless links are involved. Conv-FFN consistently helps feature extraction across both modalities.

## Qualitative Results

<figure class="markdown-figure">
  <img src="./assets/mobidiary-qualitative-results.png" alt="Qualitative MobiDiary captions for IMU and Wi-Fi examples">
  <figcaption>Figure 4. Qualitative examples show accurate captions on XRF V2 IMU, UWash, and WiFiTAD, with one XRF V2 Wi-Fi example confusing a small hand-motion action.</figcaption>
</figure>

The examples highlight both promise and limits. MobiDiary correctly captures continuous activities such as taking medicine, standing up, walking to a cabinet, and handwashing steps such as rubbing palms and interlacing fingers. The harder XRF V2 Wi-Fi example confuses "cuts fruit" with "writes", which the paper attributes to similar small-scale hand motion patterns in noisy Wi-Fi signals.

## Device Combination Study

XRF V2 includes six IMU-equipped device sources: smart glasses, left wrist watch, right wrist watch, left-pocket phone, right-pocket phone, and earbuds. The paper evaluates representative device combinations to understand how realistic wearing habits affect captioning.

<figure class="markdown-figure">
  <img src="./assets/mobidiary-device-combinations.png" alt="MobiDiary device combination results on XRF V2 IMU">
  <figcaption>Figure 5. More IMU devices generally improve captioning, but placement diversity matters as much as device count.</figcaption>
</figure>

Key findings:

- A wrist-worn watch is more informative than a pocket phone when used alone.
- Bilateral coverage can outperform a same-side setup because it captures a more complete body-motion pattern.
- Strong configurations cover multiple body segments such as head, wrists, torso, and ears.
- Gains diminish as device count grows, and extra devices can introduce redundant or conflicting signals.

Even a sparse setup with one smartwatch and one smartphone in a bilateral configuration remains useful, reaching 0.618 ROUGE-L and 0.591 METEOR in the reported study.

## Long-Sequence Robustness

<figure class="markdown-figure">
  <img src="./assets/mobidiary-sequence-length-results.png" alt="MobiDiary performance across 30, 45, 60, 90, and 120 second input lengths">
  <figcaption>Figure 6. MobiDiary keeps the highest performance across longer input windows, though all models degrade as redundant signal context accumulates.</figcaption>
</figure>

The sequence-length study evaluates 30, 45, 60, 90, and 120 second inputs. IMU performance can slightly improve at 45 seconds because the extra context helps disambiguate action boundaries. Wi-Fi performance declines earlier, reflecting more accumulated noise. Across all lengths, MobiDiary maintains the best performance ceiling among the compared methods.

## Limitations And Future Work

The paper has so far evaluated MobiDiary on daily activity datasets. It has not yet tested broader settings such as industrial worker behavior analysis, clinical rehabilitation motion description, or athletic training. Future work could build captioning datasets in factories, hospital wards, and sports venues to measure cross-domain robustness.

## Resources

- Paper: [https://arxiv.org/abs/2601.08204](https://arxiv.org/abs/2601.08204)

## Citation

```bibtex
@article{deng2026mobidiary,
  title = {MobiDiary: Autoregressive Action Captioning with Wearable Devices and Wireless Signals},
  author = {Deng, Fei and He, Yinghui and Chu, Chuntong and Wang, Ge and Ding, Han and Han, Jinsong and Wang, Fei},
  journal = {arXiv preprint arXiv:2601.08204},
  year = {2026}
}
```

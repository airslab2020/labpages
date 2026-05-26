---
title: One Quantizer is Enough: Toward a Lightweight Audio Codec
authors: L Zhai, H Ding, C Zhao, F Wang, G Wang, W Zhi, W Xi
institution: XJTU AIRS Lab
summary: L3AC is a lightweight neural audio codec that simplifies the usual multi-quantizer codec design into a single-quantizer architecture while keeping reconstruction quality practical for audio tokenization and compression.
cover: ./assets/cover.svg
coverAlt: Cover image for One Quantizer is Enough: Toward a Lightweight Audio Codec
eyebrow: Publication
paper: ./assets/paper.pdf
---

# Overview

This paper studies neural audio codecs from a deployment-oriented perspective. Instead of relying on a heavy encoder-decoder stack and several residual quantizers, the work asks how far a compact model can go with one quantizer and carefully chosen local modeling blocks.

The proposed system, L3AC, combines streamlined convolutional components, local Transformer-style modules, and a TConv structure for acoustic pattern modeling. The result is a codec intended to be easier to run and easier to use as a tokenizer for downstream generative audio models.

## Main Contributions

- Reduces codec complexity by replacing multi-quantizer designs with a single-quantizer pipeline.
- Uses a lightweight architecture that mixes convolutional processing with local sequence modeling for audio reconstruction.
- Frames audio codec design as both a compression problem and an infrastructure problem for generative audio tokenization.

## Technical Details

L3AC keeps the codec pipeline compact: the model learns discrete audio representations through one quantizer, then reconstructs waveform content through efficient neural decoding blocks. The design emphasizes local acoustic structure, which is important because audio quality depends on fine temporal details as well as broader context.

The paper is useful for the lab archive because it connects compression, representation learning, and deployable generative media systems.

## Results

The experiments compare reconstruction quality and model efficiency against stronger but heavier neural codec baselines. The main takeaway is that careful architecture design can recover much of the quality normally associated with more complex quantization stacks while reducing implementation and runtime cost.

## Resources

- [Local PDF](./assets/paper.pdf)
- [Online paper page](https://arxiv.org/abs/2504.04949)
- [Cover image](./assets/cover.svg)

## Citation

```bibtex
@inproceedings{one-quantizer-is-enough-toward-a-lightweight-audio-codec,
  title = {One Quantizer is Enough: Toward a Lightweight Audio Codec},
  author = {L Zhai and H Ding and C Zhao and F Wang and G Wang and W Zhi and W Xi},
  booktitle = {arXiv preprint arXiv:2504.04949, 2025},
  year = {2025}
}
```

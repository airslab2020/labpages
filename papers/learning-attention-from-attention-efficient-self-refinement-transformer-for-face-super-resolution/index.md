---
title: Learning Attention from Attention: Efficient Self-Refinement Transformer for Face Super-Resolution
authors: Guanxin Li, Jingang Shi#, Yuan Zong, Fei Wang, Tian Wang, Yihong Gong
institution: XJTU AIRS Lab
summary: This IJCAI 2023 paper improves face super-resolution by using attention itself as a refinement signal, helping the model focus on useful facial texture rather than irrelevant regions.
cover: ./assets/cover.svg
coverAlt: Cover image for Learning Attention from Attention: Efficient Self-Refinement Transformer for Face Super-Resolution
eyebrow: Publication
paper: ./assets/paper.pdf
---

# Overview

Transformer-based face super-resolution benefits from long-range dependencies, but unconstrained global attention may also bring in irrelevant texture and blur. Local-window attention avoids some noise but can miss broader facial structure.

The paper proposes an efficient self-refinement Transformer that learns attention from attention, allowing the network to adaptively emphasize texture-related information for high-quality face reconstruction.

## Main Contributions

- Addresses the tension between global context and local texture recovery in face super-resolution.
- Introduces a self-refinement mechanism that uses attention maps to guide more focused attention.
- Evaluates the design against face super-resolution baselines with emphasis on sharper facial details.

## Technical Details

The method refines attention rather than treating attention weights as a one-shot output. This makes the Transformer more selective: flat or uninformative regions do not dominate the search space, while facial texture and high-frequency details receive more modeling capacity.

The design is efficient because it improves the use of attention instead of simply expanding the attention region or stacking heavier blocks.

## Results

The paper reports improvements in face reconstruction quality and visual detail over representative face super-resolution approaches. The ablations emphasize that attention refinement contributes directly to sharper and more faithful facial texture.

## Resources

- [Local PDF](./assets/paper.pdf)
- [Online paper page](https://www.ijcai.org/proceedings/2023/0115)
- [Cover image](./assets/cover.svg)

## Citation

```bibtex
@inproceedings{learning-attention-from-attention-efficient-self-refinement-transformer-for-face-super-resolution,
  title = {Learning Attention from Attention: Efficient Self-Refinement Transformer for Face Super-Resolution},
  author = {Guanxin Li and Jingang Shi# and Yuan Zong and Fei Wang and Tian Wang and Yihong Gong},
  booktitle = {IJCAI 2023},
  year = {2023}
}
```

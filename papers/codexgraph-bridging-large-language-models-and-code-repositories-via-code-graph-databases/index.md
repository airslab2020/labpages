---
title: CodexGraph: Bridging Large Language Models and Code Repositories via Code Graph Databases
authors: Xiangyan Liu, Bo Lan, Zhiyuan Hu, Yang Liu, Zhicheng Zhang, Fei Wang, Michael Qizhe Shieh, Wenmeng Zhou
institution: National University of Singapore; Xi'an Jiaotong University; Alibaba Group
theme: Code Intelligence
summary: CodexGraph improves repository-scale code intelligence by connecting LLM agents to graph-database representations of code structure for precise retrieval and navigation.
cover: ./assets/paper-preview.png
coverAlt: First page preview of the CodexGraph NAACL paper.
eyebrow: Publication
paper: https://aclanthology.org/2025.naacl-long.7/
---

# Overview

Large language models perform well on stand-alone coding benchmarks, but repository-scale software engineering remains difficult because the model needs precise access to project structure, symbol relations, and multi-hop context. **CodexGraph** addresses this by connecting LLM agents to a **graph database interface** extracted from a code repository.

The paper argues that graph retrieval is a better fit than pure similarity search for many codebase tasks. By representing modules, classes, functions, and their relationships in a unified graph schema, the LLM can issue structured queries and navigate a repository with much stronger structural awareness.

## Main Contributions

- Introduces a graph-based repository interface for LLM agents instead of relying only on similarity retrieval or hand-written task APIs.
- Enables **code structure-aware context retrieval** and **multi-hop code navigation** through graph queries.
- Evaluates the approach on academic benchmarks and real-world coding applications.

## Method

CodexGraph builds a graph database from the repository and exposes query operations to the LLM agent. This lets the model retrieve context based on structural relationships such as caller-callee edges, module hierarchy, and symbol dependencies.

The advantage is twofold:

- retrieval becomes more precise for complex codebase questions,
- and the same graph schema can support many different software-engineering tasks instead of only a single benchmark.

## Evaluation Highlights

- Evaluated on **CrossCodeEval**, **SWE-bench**, and **EvoCodeBench**.
- Augmented with **five real-world coding applications** to test broader utility.
- The paper reports competitive performance across both benchmark and applied settings.

## Resources

- [ACL Anthology page](https://aclanthology.org/2025.naacl-long.7/)
- [arXiv preprint](https://arxiv.org/abs/2408.03910)
- [Project page](https://laptype.github.io/CodexGraph-page/)
- [Code and demo entry](https://github.com/modelscope/modelscope-agent/tree/master/apps/codexgraph_agent)
- [Paper preview](./assets/paper-preview.png)

## Citation

```bibtex
@inproceedings{liu2025codexgraph,
  title = {CodexGraph: Bridging Large Language Models and Code Repositories via Code Graph Databases},
  author = {Liu, Xiangyan and Lan, Bo and Hu, Zhiyuan and Liu, Yang and Zhang, Zhicheng and Wang, Fei and Shieh, Michael Qizhe and Zhou, Wenmeng},
  booktitle = {Proceedings of the 2025 Conference of the Nations of the Americas Chapter of the Association for Computational Linguistics: Human Language Technologies (Volume 1: Long Papers)},
  year = {2025},
  pages = {142--160},
  doi = {10.18653/v1/2025.naacl-long.7}
}
```

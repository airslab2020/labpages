---
title: QUICK: Pursuing Qualified CSI for MU-MIMO Networks
authors: W Xi, J Han, F Wang, X Li, C Qian
institution: XJTU AIRS Lab
summary: QUICK is a CSI validation and recovery protocol for MU-MIMO WLANs that improves throughput by reducing the impact of inaccurate CSI feedback.
cover: ./assets/cover.svg
coverAlt: Cover image for QUICK: Pursuing Qualified CSI for MU-MIMO Networks
eyebrow: Publication
paper: ./assets/paper.pdf
---

# Overview

MU-MIMO allows multiple users to transmit concurrently, but its throughput depends heavily on the quality of channel state information. Incorrect CSI estimates can cause decoding failures, retransmissions, and large delays.

QUICK introduces a practical CSI validation and recovery protocol compatible with 802.11ac-style WLAN operation. It focuses on detecting and correcting CSI problems before they damage MU-MIMO transmission quality.

## Main Contributions

- Identifies inaccurate CSI as a major source of MU-MIMO packet errors and retransmissions.
- Proposes CSI recovery and feedback mechanisms that fit commodity Wi-Fi operation.
- Demonstrates throughput gains on off-the-shelf Wi-Fi devices, including large gains for 2x2 uplink MU-MIMO.

## Technical Details

The design addresses errors such as carrier-frequency offset effects and low-SNR channel measurements. Instead of treating all CSI as equally reliable, QUICK validates whether CSI is qualified for MU-MIMO decisions.

This is an early systems-oriented wireless paper in the archive, connecting physical-layer measurement quality with end-to-end WLAN throughput.

## Results

The poster reports substantial throughput improvements in MU-MIMO WLAN experiments. The key lesson is that recovering and validating CSI before transmission-mode decisions can be more effective than only reacting to packet loss afterward.

## Resources

- [Local PDF](./assets/paper.pdf)
- [Online paper page](https://hotmobile.org/2017/papers/posters/WeiXi.pdf)
- [Cover image](./assets/cover.svg)

## Citation

```bibtex
@inproceedings{quick-pursuing-qualified-csi-for-mu-mimo-networks,
  title = {QUICK: Pursuing Qualified CSI for MU-MIMO Networks},
  author = {W Xi and J Han and F Wang and X Li and C Qian},
  booktitle = {International Workshop on Mobile Computing Systems and Applications, 2017},
  year = {2017}
}
```

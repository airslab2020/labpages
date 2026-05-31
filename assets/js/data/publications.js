(function () {
  const SiteContent = (window.SiteContent = window.SiteContent || {});
  const rows = `
person-in-wifi-3d-unified-model-for-3d-wifi-perception	Person-in-WiFi 3D: Unified Model for 3D WiFi Perception	Bo Qian, Xing Wei, Kangwei Yan, Han Ding, Jinsong Han, Fei Wang	IEEE Transactions on Pattern Analysis and Machine Intelligence, 2026	2026
a-survey-on-wi-fi-sensing-generalizability-taxonomy-techniques-datasets-and-future-research-prospects	A Survey on Wi-Fi Sensing Generalizability: Taxonomy, Techniques, Datasets, and Future Research Prospects	Fei Wang, Tingting Zhang, Wei Xi, Han Ding, Ge Wang, Di Zhang, Yuanhao Cui, Fan Liu, Jinsong Han, Jie Xu, Tony Xiao Han	IEEE Communications Surveys & Tutorials, 2026	2026
crowd-counting-with-sparse-annotation	Crowd Counting with Sparse Annotation	Shiwei Zhang, Zhengzheng Wang, Qing Liu, Fei Wang, Wei Ke#, Tong Zhang	Pattern Recognition 180, 114000, 2026	2026
compass-complete-multimodal-fusion-via-proxy-tokens-and-shared-spaces-for-ubiquitous-sensing	COMPASS: Complete Multimodal Fusion via Proxy Tokens and Shared Spaces for Ubiquitous Sensing	H Wang, Y Qian, P Weng, Z Xia, W Dan, Y Xu, F Wang	arXiv preprint arXiv:2604.02056, 2026	2026
cross-domain-eeg-based-emotion-recognition-with-contrastive-learning	Cross-domain EEG-based Emotion Recognition with Contrastive Learning	Rui Yan, Yibo Li, Han Ding, Fei Wang#	IEEE ICASSP 2026	2026
mmwave-aided-unified-speech-enhancement-and-separation-without-speaker-count-prior	mmWave-Aided Unified Speech Enhancement and Separation without Speaker Count Prior	Dachao Han, Teng Huang, Han Ding#, Cui Zhao, Fei Wang, Ge Wang, Wei Xi	IEEE INFOCOM 2026	2026
mobidiary-autoregressive-action-captioning-with-wearable-devices-and-wireless-signals	MobiDiary: Autoregressive Action Captioning with Wearable Devices and Wireless Signals	F Deng, Y He, C Chu, G Wang, H Ding, J Han, F Wang	arXiv preprint arXiv:2601.08204, 2026	2026
purify-then-align-towards-robust-human-sensing-under-modality-missing-with-knowledge-distillation-from-noisy-multimodal-teacher	Purify-then-Align: Towards Robust Human Sensing under Modality Missing with Knowledge Distillation from Noisy Multimodal Teacher	Pengcheng Weng, Yanyu Qian, Yangxin Xu, Fei Wang	CVPR 2026 Workshop on Any-to-Any Multimodal Learning, 2026	2026
we-can-hear-you-with-mmwave-radar-an-end-to-end-eavesdropping-system	We Can Hear You with mmWave Radar! An End-to-End Eavesdropping System	Dachao Han, Teng Huang, Han Ding#, Cui Zhao, Fei Wang, Ge Wang, Wei Xi	ACM IMWUT/UBICOMP 2026	2026
when-gradient-optimization-is-not-enough-dispersive-and-anchoring-geometric-regularizer-for-multimodal-learning	When Gradient Optimization Is Not Enough: Dispersive and Anchoring Geometric Regularizer for Multimodal Learning	Z Xia, H Wang, P Weng, Y Qian, Y Xu, W Dan, F Wang	arXiv preprint arXiv:2601.21670, 2026	2026
ws-imubench-can-weakly-supervised-methods-from-audio-image-and-video-be-adapted-for-imu-based-temporal-action-localization	WS-IMUBench: Can Weakly Supervised Methods from Audio, Image, and Video Be Adapted for IMU-based Temporal Action Localization?	P Li, J Yin, L Ouyang, S Pan, G Wang, H Ding, F Wang	arXiv preprint arXiv:2602.01850, 2026	2026
poster-zero-effort-cross-domain-wireless-respiration-monitoring-under-free-body-movement	Zero-Effort Cross-Domain Wireless Respiration Monitoring Under Free Movements With Commercial UWB Devices	Ge Wang, Jiazheng Chen, Zhe Chen, Fei Wang, Cong Zhao, Jianan Wang, Han Ding, Cui Zhao, Wei Xi, Jinsong Han	ACM SenSys 2026	2026
active-domain-adaptation-for-mmwave-based-har-via-renyi-entropy-based-uncertainty-estimation	Active Domain Adaptation for mmWave-based HAR via Rényi Entropy-based Uncertainty Estimation	Mingzhi Lin, Teng Huang, Han Ding#, Cui Zhao, Fei Wang, Ge Wang, Wei Xi	IEEE Transactions on Mobile Computing, 2026	2026
carec-continual-wireless-action-recognition-with-expansion-compression-coordination	CAREC: Continual Wireless Action Recognition with Expansion-Compression Coordination	T Zhang, Q Fu, H Ding, G Wang, F Wang	Sensors 25 (15), 4706, 2025	2025
codexgraph-bridging-large-language-models-and-code-repositories-via-code-graph-databases	CodexGraph: Bridging Large Language Models and Code Repositories via Code Graph Databases	Xiangyan Liu, Bo Lan, Zhiyuan Hu, Yang Liu, Zhicheng Zhang, Fei Wang, Michael Shieh, Wenmeng Zhou	NAACL 2025	2025
federated-multi-source-domain-adaptation-for-mmwave-based-human-activity-recognition	Federated Multi-Source Domain Adaptation for mmWave-based Human Activity Recognition	Cui Zhao, Guotong Fang, Han Ding#, Xinhui Liu, Fei Wang, Ge Wang, Kun Zhao, Zhi Wang, Wei Xi	IEEE Transactions on Mobile Computing, 2025	2025
hilots-high-low-temporal-sensitive-representation-learning-for-semi-supervised-lidar-segmentation-in-autonomous-driving	HiLoTs: High-Low Temporal Sensitive Representation Learning for Semi-Supervised LiDAR Segmentation in Autonomous Driving	R.D. Lin, Pengcheng Weng, Yinqiao Wang, Han Ding, Jinsong Han, Fei Wang	IEEE/CVF CVPR 2025	2025
mmegohand-egocentric-hand-pose-estimation-and-gesture-recognition-with-head-mounted-millimeter-wave-radar-and-imu	mmEgoHand: Egocentric Hand Pose Estimation and Gesture Recognition with Head-mounted Millimeter-wave Radar and IMU	Y Lv, T Zhang, Z Wang, Y Song, H Ding, J Han, F Wang	arXiv preprint arXiv:2501.13805, 2025	2025
mmyodar-robust-human-detection-using-mmwave-signals	mmYodar+: Robust Human Detection using mmWave Signals	Yuance Chang, Han Ding#, Feng Cao, Cui Zhao, Fei Wang, Ge Wang, Zhi Wang, Wei Xi	IEEE Internet of Things Journal, 2025	2025
one-quantizer-is-enough-toward-a-lightweight-audio-codec	One Quantizer is Enough: Toward a Lightweight Audio Codec	L Zhai, H Ding, C Zhao, F Wang, G Wang, W Zhi, W Xi	arXiv preprint arXiv:2504.04949, 2025	2025
one-snapshot-is-all-you-need-a-generalized-method-for-mmwave-signal-generation	One Snapshot is All You Need: A Generalized Method for mmWave Signal Generation	Teng Huang, Han Ding#, Wenxin Sun, Cui Zhao, Ge Wang, Fei Wang, Kun Zhao, Zhi Wang, Wei Xi	IEEE INFOCOM 2025	2025
simid-wi-fi-based-few-shot-cross-domain-user-recognition-with-identity-similarity-learning	SimID: Wi-Fi-Based Few-Shot Cross-Domain User Recognition with Identity Similarity Learning	Zhijian Wang, Lei Ouyang, Shi Chen, Han Ding, Ge Wang, Fei Wang#	MDPI Sensors 2025	2025
talk-is-not-always-cheap-promoting-wireless-sensing-models-with-text-prompts	Talk is not always cheap: Promoting wireless sensing models with text prompts	Z Yang, Z Huang, G Wang, H Ding, TX Han, F Wang	arXiv preprint arXiv:2504.14621, 2025	2025
what-matters-in-llm-based-feature-extractor-for-recommender-a-systematic-analysis-of-prompts-models-and-adaptation	What Matters in LLM-Based Feature Extractor for Recommender? A Systematic Analysis of Prompts, Models, and Adaptation	Kainan Shi, Peilin Zhou, Ge Wang, Han Ding, Fei Wang	arXiv preprint arXiv:2509.14979v3, 2026	2026
what-s-on-your-plate-inferring-chinese-cuisine-intake-from-wearable-imus	What's on Your Plate? Inferring Chinese Cuisine Intake from Wearable IMUs	J Yin, P Wang, H Ding, F Wang	arXiv preprint arXiv:2511.05292, 2025	2025
xrf-v2-a-dataset-for-action-summarization-with-wi-fi-signals-and-imus-in-phones-watches-earbuds-and-glasses	XRF V2: A Dataset for Action Summarization with Wi-Fi Signals, and IMUs in Phones, Watches, Earbuds, and Glasses	Bo Lan, Pei Li, Jiaxi Yin, Yunpeng Song, Ge Wang, Han Ding, Jinsong Han, Fei Wang#	ACM IMWUT/UBICOMP 2025	2025
you-can-wash-hands-better-accurate-daily-handwashing-assessment-with-a-smartwatch	You Can Wash Hands Better: Accurate Daily Handwashing Assessment with a Smartwatch	Fei Wang#, Tingting Zhang, Xilei Wu, Pengcheng Wang, Xin Wang, Han Ding, Jingang Shi, Jinsong Han, Dong Huang	IEEE Transactions on Mobile Computing, 2025	2025
bullydetect-detecting-school-physical-bullying-with-wi-fi-and-deep-wavelet-transformer	BullyDetect: Detecting School Physical Bullying with Wi-Fi and Deep Wavelet Transformer	Bo Lan, Fei Wang#, Lekun Xia, Fan Nai, Shiqiang Nie, Han Ding, Jinsong Han	IEEE Internet of Things Journal, 2024	2024
ccs-continuous-learning-for-customized-incremental-wireless-sensing-services	CCS: Continuous Learning for Customized Incremental Wireless Sensing Services	Q Fu, F Wang, M Zhu, H Ding, J Han, TX Han	arXiv preprint arXiv:2412.04821, 2024	2024
genre-classification-empowered-by-knowledge-embedded-music-representation	Genre Classification Empowered by Knowledge-Embedded Music Representation	Han Ding, Linwei Zhai, Cui Zhao#, Fei Wang, Ge Wang, Wei Xi, Zhi Wang, Jizhong Zhao	IEEE/ACM Transactions on Audio, Speech, and Language Processing, 2024	2024
person-in-wifi-3d-end-to-end-multi-person-3d-pose-estimation-with-wi-fi	Person-in-WiFi 3D: End-to-End Multi-Person 3D Pose Estimation with Wi-Fi	Kangwei Yan, Fei Wang#, Bo Qian, Han Ding, Jinsong Han, Xing Wei	CVPR 2024	2024
widistill-distilling-large-scale-wi-fi-datasets-with-trajectory-matching	WiDistill: Distilling Large-scale Wi-Fi Datasets with Trajectory Matching	T Wang, F Wang	arXiv preprint arXiv:2410.04073, 2024	2024
xrf55-a-radio-frequency-dataset-for-human-indoor-action-analysis	XRF55: A Radio Frequency Dataset for Human Indoor Action Analysis	Fei Wang#, Yizhe Lv, Mengdie Zhu, Han Ding, Jinsong Han	ACM IMWUT/UBICOMP 2024	2024
exploiting-multi-scale-parallel-self-attention-and-local-variation-via-dual-branch-transformer-cnn-structure-for-face-super-resolution	Exploiting Multi-scale Parallel Self-attention and Local Variation via Dual-branch Transformer-CNN Structure for Face Super-resolution	Jingang Shi, Yusi Wang, Zitong Yu, Guanxin Li, Xiaopeng Hong, Fei Wang#, Yihong Gong	IEEE Transactions on Multimedia, 2023	2023
knowledge-graph-augmented-music-representation-for-genre-classification	Knowledge-graph augmented music representation for genre classification	H Ding, W Song, C Zhao, F Wang, G Wang, W Xi, J Zhao	ICASSP 2023-2023 IEEE International Conference on Acoustics, Speech and ..., 2023	2023
learning-attention-from-attention-efficient-self-refinement-transformer-for-face-super-resolution	Learning Attention from Attention: Efficient Self-Refinement Transformer for Face Super-Resolution	Guanxin Li, Jingang Shi#, Yuan Zong, Fei Wang, Tian Wang, Yihong Gong	IJCAI 2023	2023
mi-mesh-3d-human-mesh-construction-by-fusing-image-and-millimeter-wave	MI-Mesh: 3D Human Mesh Construction by Fusing Image and Millimeter Wave	Han Ding, Zhenbin Chen, Cui Zhao#, Fei Wang, Ge Wang, Wei Xi, Jizhong Zhao	ACM IMWUT/UBICOMP 2023	2023
mmyodar-lightweight-and-robust-object-detection-using-mmwave-signals	mmYodar: Lightweight and Robust Object Detection using mmWave Signals	C Yuance, H Ding, D Han, T Zhang, G Wang, C Zhao, F Wang, W Xi, ...	20th Annual IEEE International Conference on Sensing, Communication, and ..., 2023	2023
u-shape-networks-are-unified-backbones-for-human-action-understanding-from-wi-fi-signals	U-shape Deep Networks are Unified Backbones for Human Action Understanding from Wi-Fi Signals	Fei Wang, Yiao Gao, Bo Lan, Han Ding, Jingang Shi#, Jinsong Han#	IEEE Internet of Things Journal, 2023	2023
development-of-a-plug-and-play-anti-noise-module-for-fault-diagnosis-of-rotating-machines-in-nuclear-power-plants	Development of a plug-and-play anti-noise module for fault diagnosis of rotating machines in nuclear power plants	X Zhong, F Wang, H Ban	Progress in Nuclear Energy 151, 104344, 2022	2022
idpt-interconnected-dual-pyramid-transformer-for-face-super-resolution	IDPT: Interconnected Dual Pyramid Transformer for Face Super-Resolution	Jingang Shi, Yusi Wang, Songlin Dong, Xiaopeng Hong, Zitong Yu#, Fei Wang, Changxin Wang, Yihong Gong	IJCAI 2022	2022
mask-wearing-status-estimation-with-smartwatches	Mask wearing status estimation with smartwatches	H Meng, X Wu, X Wang, Y Fan, J Shi, H Ding, F Wang	arXiv preprint arXiv:2205.06113, 2022	2022
social-distancing-alert-with-smartwatches	Social distancing alert with smartwatches	X Wang, X Wu, H Meng, Y Fan, J Shi, H Ding, F Wang	arXiv preprint arXiv:2205.06110, 2022	2022
cascade-convolutional-neural-network-with-progressive-optimization-for-motor-fault-diagnosis-under-nonstationary-conditions	Cascade Convolutional Neural Network With Progressive Optimization for Motor Fault Diagnosis Under Nonstationary Conditions	Fei Wang, Ruonan Liu#, Qinghua Hu, Xuefeng Chen	IEEE Transactions on Industrial Informatics, 2021	2021
hierarchical-and-interactive-refinement-network-for-edge-preserving-salient-object-detection	Hierarchical and Interactive Refinement Network for Edge-Preserving Salient Object Detection	Sanping Zhou, Jinjun Wang#, Le Wang, Jimuyang Zhang, Fei Wang, Dong Huang, Nanning Zheng	IEEE Transactions on Image Processing, 2021	2021
a-framework-for-behavior-privacy-preserving-in-radio-frequency-signal	A Framework for Behavior Privacy Preserving in Radio Frequency Signal	J Liu, J Han, L Yang, F Wang, F Lin, K Ren	arXiv preprint arXiv:2004.04909, 2020	2020
multiscale-kernel-based-residual-convolutional-neural-network-for-motor-fault-diagnosis-under-nonstationary-conditions	Multiscale Kernel Based Residual Convolutional Neural Network for Motor Fault Diagnosis Under Nonstationary Conditions	Ruonan Liu, Fei Wang, Boyuan Yang#, S. Joe Qin	IEEE Transactions on Industrial Informatics, 2020	2020
rfnet-automatic-gesture-recognition-and-human-identification-using-time-series-rfid-signals	RFnet: Automatic gesture recognition and human identification using time series RFID signals	H Ding, L Guo, C Zhao, F Wang, G Wang, Z Jiang, W Xi, J Zhao	Mobile Networks and Applications 25 (6), 2240-2253, 2020	2020
can-wifi-estimate-person-pose	Can WiFi estimate person pose?	F Wang, S Panev, Z Dai, J Han, D Huang	arXiv preprint arXiv:1904.00277, 2019	2019
continuous-user-authentication-by-contactless-wireless-sensing	Continuous User Authentication by Contactless Wireless Sensing	Fei Wang, Zhejiang Li#, Jinsong Han#	IEEE Internet of Things Journal, 2019	2019
discriminative-feature-learning-with-consistent-attention-regularization-for-person-re-identification	Discriminative Feature Learning With Consistent Attention Regularization for Person Re-Identification	Sanping Zhou, Fei Wang, Zeyi Huang, Jinjun Wang#	ICCV 2019	2019
joint-activity-recognition-and-indoor-localization-with-wifi-fingerprints	Joint Activity Recognition and Indoor Localization with WiFi Fingerprints	Fei Wang, Jianwei Feng, Yinliang Zhao, Xiaobin Zhang, Shiyuan Zhang, Jinsong Han	IEEE Access 7, 80058-80068, 2019	2019
person-in-wifi-fine-grained-person-perception-using-wifi	Person-in-WiFi: Fine-grained Person Perception using WiFi	Fei Wang, Sanping Zhou, Stanislav Panev, Jinsong Han#, Dong Huang#	ICCV 2019	2019
se2net-siamese-edge-enhancement-network-for-salient-object-detection	SE2Net: Siamese edge-enhancement network for salient object detection	S Zhou, J Zhang, J Wang, F Wang, D Huang	arXiv preprint arXiv:1904.00048, 2019	2019
temporal-unet-sample-level-human-action-recognition-using-wifi	Temporal Unet: Sample Level Human Action Recognition using WiFi	Fei Wang, Yunpeng Song, Jimuyang Zhang, Jinsong Han, Dong Huang	arXiv preprint arXiv:1904.11953, 2019	2019
wipin-operation-free-passive-person-identification-using-wi-fi-signals	WiPIN: Operation-free Passive Person Identification Using Wi-Fi Signals	Fei Wang, Jinsong Han, Feng Lin#, Kui Ren	IEEE Globecom 2019 (Best Paper Award)	2019
csi-net-unified-human-body-characterization-and-pose-recognition	Csi-net: Unified human body characterization and pose recognition	F Wang, J Han, S Zhang, X He, D Huang	arXiv preprint arXiv:1810.03064, 2018	2018
`;

  const publicationThemes = {
    "person-in-wifi-3d-unified-model-for-3d-wifi-perception": "Wi-Fi 3D Human Perception",
    "a-survey-on-wi-fi-sensing-generalizability-taxonomy-techniques-datasets-and-future-research-prospects": "Wi-Fi Sensing Generalizability",
    "crowd-counting-with-sparse-annotation": "Computer Vision",
    "compass-complete-multimodal-fusion-via-proxy-tokens-and-shared-spaces-for-ubiquitous-sensing": "Multimodal Wireless Sensing",
    "cross-domain-eeg-based-emotion-recognition-with-contrastive-learning": "EEG Affective Computing",
    "mmwave-aided-unified-speech-enhancement-and-separation-without-speaker-count-prior": "mmWave-Audio Speech Processing",
    "mobidiary-autoregressive-action-captioning-with-wearable-devices-and-wireless-signals": "Multimodal Wearable Sensing",
    "purify-then-align-towards-robust-human-sensing-under-modality-missing-with-knowledge-distillation-from-noisy-multimodal-teacher": "Multimodal Wireless Sensing",
    "we-can-hear-you-with-mmwave-radar-an-end-to-end-eavesdropping-system": "mmWave Speech Privacy",
    "when-gradient-optimization-is-not-enough-dispersive-and-anchoring-geometric-regularizer-for-multimodal-learning": "Multimodal Learning",
    "ws-imubench-can-weakly-supervised-methods-from-audio-image-and-video-be-adapted-for-imu-based-temporal-action-localization": "Wearable Action Localization",
    "poster-zero-effort-cross-domain-wireless-respiration-monitoring-under-free-body-movement": "Wireless Health Sensing",
    "active-domain-adaptation-for-mmwave-based-har-via-renyi-entropy-based-uncertainty-estimation": "mmWave Domain Adaptation",
    "carec-continual-wireless-action-recognition-with-expansion-compression-coordination": "Continual Wireless Sensing",
    "codexgraph-bridging-large-language-models-and-code-repositories-via-code-graph-databases": "Code Intelligence",
    "federated-multi-source-domain-adaptation-for-mmwave-based-human-activity-recognition": "mmWave Domain Adaptation",
    "hilots-high-low-temporal-sensitive-representation-learning-for-semi-supervised-lidar-segmentation-in-autonomous-driving": "Autonomous Driving",
    "mmegohand-egocentric-hand-pose-estimation-and-gesture-recognition-with-head-mounted-millimeter-wave-radar-and-imu": "Egocentric mmWave Sensing",
    "mmyodar-robust-human-detection-using-mmwave-signals": "mmWave Human Detection",
    "one-quantizer-is-enough-toward-a-lightweight-audio-codec": "Neural Audio Codec",
    "one-snapshot-is-all-you-need-a-generalized-method-for-mmwave-signal-generation": "mmWave Signal Generation",
    "simid-wi-fi-based-few-shot-cross-domain-user-recognition-with-identity-similarity-learning": "Wi-Fi User Identification",
    "talk-is-not-always-cheap-promoting-wireless-sensing-models-with-text-prompts": "Wireless Sensing Foundation Models",
    "what-matters-in-llm-based-feature-extractor-for-recommender-a-systematic-analysis-of-prompts-models-and-adaptation": "Recommender Systems",
    "what-s-on-your-plate-inferring-chinese-cuisine-intake-from-wearable-imus": "Wearable Dietary Sensing",
    "xrf-v2-a-dataset-for-action-summarization-with-wi-fi-signals-and-imus-in-phones-watches-earbuds-and-glasses": "Multimodal Action Sensing",
    "you-can-wash-hands-better-accurate-daily-handwashing-assessment-with-a-smartwatch": "Wearable Health Sensing",
    "bullydetect-detecting-school-physical-bullying-with-wi-fi-and-deep-wavelet-transformer": "Wi-Fi Behavior Sensing",
    "ccs-continuous-learning-for-customized-incremental-wireless-sensing-services": "Continual Wireless Sensing",
    "genre-classification-empowered-by-knowledge-embedded-music-representation": "Music Representation Learning",
    "person-in-wifi-3d-end-to-end-multi-person-3d-pose-estimation-with-wi-fi": "Wi-Fi 3D Pose Estimation",
    "widistill-distilling-large-scale-wi-fi-datasets-with-trajectory-matching": "Wi-Fi Dataset Distillation",
    "xrf55-a-radio-frequency-dataset-for-human-indoor-action-analysis": "RF Action Dataset",
    "exploiting-multi-scale-parallel-self-attention-and-local-variation-via-dual-branch-transformer-cnn-structure-for-face-super-resolution": "Face Super-Resolution",
    "knowledge-graph-augmented-music-representation-for-genre-classification": "Music Representation Learning",
    "learning-attention-from-attention-efficient-self-refinement-transformer-for-face-super-resolution": "Face Super-Resolution",
    "mi-mesh-3d-human-mesh-construction-by-fusing-image-and-millimeter-wave": "Multimodal 3D Human Mesh",
    "mmyodar-lightweight-and-robust-object-detection-using-mmwave-signals": "mmWave Object Detection",
    "u-shape-networks-are-unified-backbones-for-human-action-understanding-from-wi-fi-signals": "Wi-Fi Action Recognition",
    "development-of-a-plug-and-play-anti-noise-module-for-fault-diagnosis-of-rotating-machines-in-nuclear-power-plants": "Industrial Fault Diagnosis",
    "idpt-interconnected-dual-pyramid-transformer-for-face-super-resolution": "Face Super-Resolution",
    "mask-wearing-status-estimation-with-smartwatches": "Wearable Health Sensing",
    "social-distancing-alert-with-smartwatches": "Wearable Proximity Sensing",
    "cascade-convolutional-neural-network-with-progressive-optimization-for-motor-fault-diagnosis-under-nonstationary-conditions": "Industrial Fault Diagnosis",
    "hierarchical-and-interactive-refinement-network-for-edge-preserving-salient-object-detection": "Salient Object Detection",
    "a-framework-for-behavior-privacy-preserving-in-radio-frequency-signal": "RF Privacy Preservation",
    "multiscale-kernel-based-residual-convolutional-neural-network-for-motor-fault-diagnosis-under-nonstationary-conditions": "Industrial Fault Diagnosis",
    "rfnet-automatic-gesture-recognition-and-human-identification-using-time-series-rfid-signals": "RFID Gesture Recognition",
    "can-wifi-estimate-person-pose": "Wi-Fi Pose Estimation",
    "continuous-user-authentication-by-contactless-wireless-sensing": "Wireless User Authentication",
    "discriminative-feature-learning-with-consistent-attention-regularization-for-person-re-identification": "Person Re-Identification",
    "joint-activity-recognition-and-indoor-localization-with-wifi-fingerprints": "Wi-Fi Activity Localization",
    "person-in-wifi-fine-grained-person-perception-using-wifi": "Wi-Fi Human Perception",
    "se2net-siamese-edge-enhancement-network-for-salient-object-detection": "Salient Object Detection",
    "temporal-unet-sample-level-human-action-recognition-using-wifi": "Wi-Fi Action Recognition",
    "wipin-operation-free-passive-person-identification-using-wi-fi-signals": "Wi-Fi Person Identification",
    "csi-net-unified-human-body-characterization-and-pose-recognition": "Wi-Fi Human Sensing",
  };

  SiteContent.publications = rows
    .trim()
    .split(/\n/)
    .map((row) => {
      const [slug, title, authors, venue, year] = row.split("\t");
      const yearMatch = venue.match(/(20\d{2}|19\d{2})/);
      return {
        slug,
        title,
        authors,
        venue,
        year: year ? Number(year) : yearMatch ? Number(yearMatch[1]) : null,
        theme: publicationThemes[slug] || ""
      };
    });
})();

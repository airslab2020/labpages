(function () {
  window.NetworkReadingContent2025 = {
    "recommendedVenues2025": {
      "label": "Recommended Venues",
      "title": "2025 Spring networking venue reading recommendations",
      "description": "课程表上方整理了 NSDI、MobiCom、MobiSys 与 SenSys 的近年官方入口，方便先浏览 venue 再选具体论文。",
      "countLabel": "4 venues · 12 links",
      "venues": [
        {
          "venue": "MobiCom",
          "years": [
            {
              "year": "2024",
              "label": "MobiCom 2024: The 30th Annual International Conference on Mobile Computing and Networking",
              "href": "https://www.sigmobile.org/mobicom/2024/"
            },
            {
              "year": "2023",
              "label": "MobiCom 2023: The 29th Annual International Conference on Mobile Computing and Networking",
              "href": "https://www.sigmobile.org/mobicom/2023/"
            },
            {
              "year": "2022",
              "label": "MobiCom 2022: The 28th Annual International Conference on Mobile Computing and Networking",
              "href": "https://www.sigmobile.org/mobicom/2022/"
            }
          ]
        },
        {
          "venue": "NSDI",
          "years": [
            {
              "year": "2024",
              "label": "Papers",
              "href": "https://www.usenix.org/conferences/best-papers?taxonomy_vocabulary_1_tid=2024&title_1=nsdi"
            },
            {
              "year": "2023",
              "label": "Papers",
              "href": "https://www.usenix.org/conferences/best-papers?taxonomy_vocabulary_1_tid=2023&title_1=nsdi"
            },
            {
              "year": "2022",
              "label": "Papers",
              "href": "https://www.usenix.org/conferences/best-papers?taxonomy_vocabulary_1_tid=2022&title_1=nsdi"
            }
          ]
        },
        {
          "venue": "SenSys",
          "years": [
            {
              "year": "2024",
              "label": "Papers",
              "href": "https://sensys.acm.org/2024/program/"
            },
            {
              "year": "2023",
              "label": "Papers",
              "href": "https://sensys.acm.org/2023/program/"
            },
            {
              "year": "2022",
              "label": "Papers",
              "href": "https://sensys.acm.org/2022/program/"
            }
          ]
        },
        {
          "venue": "MobiSys",
          "years": [
            {
              "year": "2024",
              "label": "Papers",
              "href": "https://www.sigmobile.org/mobisys/2024/accepted-papers.html"
            },
            {
              "year": "2023",
              "label": "Papers",
              "href": "https://www.sigmobile.org/mobisys/2023/accepted-papers.html"
            },
            {
              "year": "2022",
              "label": "Papers",
              "href": "https://www.sigmobile.org/mobisys/2022/accepted-papers.html"
            }
          ]
        }
      ]
    },
    "studentSelections2025": {
      "label": "Student Selections",
      "title": "2025 Spring Advanced Computer Networks and Communications student paper selections",
      "description": "以下记录 2025 春《高等计算机网络与通信》课程中学生最终选读并分享的论文，保留讲者、发表 venue、作者、摘要与官方链接。",
      "countLabel": "35 selected papers",
      "itemLabelPrefix": "Paper",
      "items": [
        {
          "index": "1",
          "title": "When machine learning meets congestion control: A survey and comparison",
          "venue": "computer networks",
          "authors": "Huiling Jiang, Qing Li",
          "presenters": ["周俊林"],
          "summary": "本文探讨了机器学习在网络拥塞控制中的应用，强调了基于学习的方法相较于传统基于规则的方法的优势。尽管聚类、分类和回归等机器学习技术已广泛应用于网络管理，但强化学习在拥塞控制领域已成为关键趋势。研究详细总结并比较了基于学习的拥塞控制方法，评估了强化学习方法的性能，并分析了其当前存在的问题，同时指出了未来研究的挑战和发展方向。",
          "link": ""
        },
        {
          "index": "2",
          "title": "Efficient DRL-Based Congestion Control With Ultra-Low Overhead",
          "venue": "IEEE/ACM TRANSACTIONS ON NETWORKING 2024",
          "authors": "Han Tian, Xudong Liao, Chaoliang Zeng, Decang Sun, Junxue Zhang, Kai Chen:",
          "presenters": ["蔺凌霄"],
          "summary": "论文提出了一种名为 SPINE 的新型深度强化学习（DRL）基础的拥塞控制算法，旨在解决传统DRL算法在拥塞控制中计算开销高、响应频率低的问题。SPINE通过分层控制架构，将拥塞控制任务分解为两个子任务：轻量级的细粒度控制执行器（CC Executor）负责对每个ACK和丢包事件进行快速响应，而DRL代理（RL Agent）则以较低频率生成控制子策略（sub-policies）供执行器使用。此外，SPINE引入了一个观察者模块（Watcher），用于监控网络状态并决定是否触发DRL代理更新子策略，从而进一步降低开销。实验结果表明，SPINE在多种网络条件下均表现出色，不仅实现了与传统拥塞控制算法相当的低开销（CPU利用率仅为2.6%），还保持了高性能（高吞吐量、低延迟）。此外，SPINE还具有良好的公平性和对其他传统算法（如Cubic）的友好性。",
          "link": ""
        },
        {
          "index": "3",
          "title": "Mass Discovery of Android Traffic Imprints through Instantiated Partial Execution",
          "venue": "ccs",
          "authors": "Yi Chen, Wei You, Yeonjoon Lee, Kai Chen, XiaoFeng Wang, Wei Zou",
          "presenters": ["高艺菲"],
          "summary": "",
          "link": "https://acmccs.github.io/papers/p815-chenA.pdf"
        },
        {
          "index": "4",
          "title": "AccessWear: Making Smartphone Applications Accessible to Blind Users",
          "venue": "MobiCom 2023",
          "authors": "Prerna Khanna，Shirin Feiz，Jian Xu，IV Ramakrishnan，Shubham Jain，Xiaojun Bi，Aruna Balasubramanian",
          "presenters": ["袁子航"],
          "summary": "这篇论文主要探讨了一个创新系统，名为AccessWear，该系统旨在通过智能手表的手势交互来增强盲人用户对智能手机触摸屏操作的可访问性。设计上，AccessWear遵循以用户为中心的原则，其开发灵感和设计目标直接来源于对9位盲人参与者的初步用户研究。该系统利用智能手表的传感器捕捉特定手势，将这些手势转换为智能手机上的相应命令，从而绕过了视觉界面的障碍，使盲人用户能够更加自主和高效地使用智能手机应用。论文可能详细介绍了系统的架构、手势识别技术、用户界面的适应性设计、以及通过后续用户评估验证系统有效性的实验结果，强调了在无障碍技术领域的这一重要进步。",
          "link": ""
        },
        {
          "index": "5",
          "title": "DynaSpa: Exploiting Spatial Sparsity for Efficient Dynamic DNN Inference on Devices",
          "venue": "Sensys 2024",
          "authors": "Renyuan Liu,Yuyang Leng,Shilei Tian, Shaohan Hu,Chun-Fu (Richard) Chen,Shuochao Yao",
          "presenters": ["刘贺添"],
          "summary": "本文提出了DynaSpa，一个用于设备上高效动态深度神经网络（DNN）推理的自动内核优化框架，特别关注利用空间稀疏性来提高性能而不影响准确性。它解决了在动态深度神经网络中实现实际加速的挑战。",
          "link": ""
        },
        {
          "index": "6",
          "title": "Brain-on-Switch: Towards Advanced Intelligent Network Data Plane via NN-Driven Traffic Analysis at Line-Speed",
          "venue": "NSDI'24",
          "authors": "Jinzhu Yan, Haotian Xu, Zhuotao Liu, Qi Li, Ke Xu, Mingwei Xu, Jianping Wu",
          "presenters": ["夏玮钧"],
          "summary": "论文提出的Brain-on-Switch（BoS）是首个基于神经网络（NN）的智能网络数据平面系统，通过二进制RNN架构与滑动窗口机制，在可编程交换机实现线速流量分析，结合控制平面Transformer模型处理复杂流量。实验表明，BoS在多类任务中准确率较传统树模型提升19%，支持45万流/秒吞吐，仅占用交换机23%的SRAM资源，兼顾高性能与高效能。",
          "link": ""
        },
        {
          "index": "7",
          "title": "Application of neural network in computer network security evaluation",
          "venue": "ICNETIC'23",
          "authors": "Xiaojing Luo",
          "presenters": ["陈敬琦"],
          "summary": "论文探讨了神经网络在计算机网络安全评估中的应用，旨在解决传统评估方法的不足，提高评估准确性和网络安全性。",
          "link": ""
        },
        {
          "index": "8",
          "title": "AutoMatch: Leveraging Traffic Camera to Improve Perception and Localization of Autonomous Vehicles",
          "venue": "ACM Sensys 2022",
          "authors": "Yuze He (The Chinese University of Hong Kong), Li Ma (The Hong Kong University of Science and Technology), Jiahe Cui (School of Computer Science and Engineering, Beihang University), Zhenyu Yan, Guoliang Xing (The Chinese University of Hong Kong), Sen Wang, Qintao Hu, Chen Pan (Huawei Technologies)",
          "presenters": ["彭盛"],
          "summary": "本文提出了一种名为 AutoMatch 的新系统，用于实时图像配准（image registration），旨在解决自动驾驶车辆在交叉路口等复杂、易发生事故路段的感知和定位问题。具体来说，AutoMatch 通过利用交通摄像头和车载摄像头捕获的图像进行匹配，扩展了车辆的感知范围。此外，交通摄像头还可以将其图像与现有的高精度地图（HD map）进行匹配，从而推导出摄像头视野内车辆的厘米级精确定位。",
          "link": ""
        },
        {
          "index": "9",
          "title": "Virtual Machine Placement Optimization in Mobile Cloud Gaming Through QoE-Oriented Resource Competition",
          "venue": "IEEE Transactions on Cloud Computing 2022",
          "authors": "Yiwen Han; Dongyu Guo; Wei Cai; Xiaofei Wang; Victor C. M. Leung",
          "presenters": ["席云霄"],
          "summary": "论文将博弈论应用于云游戏场景，提出了一种通过资源竞争来优化移动云游戏中虚拟机 (VM) 放置的分布式算法，通过理论证明和实验验证，利用该论文的算法，玩家可以在有限次数的迭代内达到相互满意的状态。",
          "link": ""
        },
        {
          "index": "10",
          "title": "VI-Map: Infrastructure-Assisted Real-Time HD Mapping for Autonomous Driving",
          "venue": "MobiCom 2023",
          "authors": "Yuze He, Chen Bian, Jingfei Xia, Shuyao Shi, Zhenyu Yan, Qun Song, Guoliang Xing",
          "presenters": ["李菁"],
          "summary": "这篇文章提出了一种利用路边基础设施（如智能路侧单元RSU）来增强自动驾驶车辆高精度地图（HD Map）实时构建与更新的系统——VI-Map",
          "link": ""
        },
        {
          "index": "11",
          "title": "Learning to Communicate Effectively Between Battery-free Devices",
          "venue": "NSDI '22",
          "authors": "Kai Geissdoerfer and Marco Zimmerling, TU Dresden",
          "presenters": ["李瑜"],
          "summary": "论文提出Bonito，首个面向无电池设备的连接协议，通过动态调整通信间隔（Connection Interval），实现高效可靠的双向通信",
          "link": ""
        },
        {
          "index": "12",
          "title": "NetGPT: A Generative Pre-trained Transformer for Network Traffic Analysis",
          "venue": "SIGCOMM 2023",
          "authors": "Xuying Meng, Chungang Lin, Yequan Wang, Yujun Zhang",
          "presenters": ["吴娉"],
          "summary": "这篇论文提出了NetGPT，首次尝试为网络流量理解和生成任务提供生成式预训练模型。通过多模式网络流量建模和优化预训练模型的适应效果，NetGPT在多种流量理解和生成任务中表现出色，超越了现有的基线模型。未来的工作包括扩大模型规模、增加数据集大小，并探索更多下游任务。",
          "link": ""
        },
        {
          "index": "13",
          "title": "An Efficient Design of Intelligent Network Data Plane",
          "venue": "USENIX Security '23",
          "authors": "Guangmeng Zhou, Tsinghua University; Zhuotao Liu, Tsinghua University and Zhongguancun Laboratory; Chuanpu Fu, Tsinghua University; Qi Li, Tsinghua University and Zhongguancun Laboratory; Ke Xu, Tsinghua University and Zhongguancun Laboratory",
          "presenters": ["李宇星"],
          "summary": "该论文探讨了如何在网络数据平面上直接部署机器学习模型，以实现智能化的流量分析。",
          "link": ""
        },
        {
          "index": "14",
          "title": "A Novel Self-Supervised Framework Based on Masked Autoencoder for Traffic Classification",
          "venue": "IEEE/ACM TRANSACTIONS ON NETWORKING 2024",
          "authors": "Ruijie Zhao , Graduate Student Member, IEEE, Mingwei Zhan, Xianwen Deng , Student Member, IEEE, Fangqi Li , Graduate Student Member, IEEE, Yanhao Wang , Yijun Wang , Guan Gui , Senior Member, IEEE, and Zhi Xue",
          "presenters": ["王硕"],
          "summary": "提出了MFR矩阵，利用分层设计表示流量中的多级信息，并提出了一种基于掩码自动编码器的新型自监督框架，用于流量分类",
          "link": ""
        },
        {
          "index": "15",
          "title": "Server-Driven Video Streaming for Deep Learning Inference",
          "venue": "SIGCOMM",
          "authors": "Kuntai Du∗, Ahsan Pervaiz∗, Xin Yuan, Aakanksha Chowdhery, Qizheng Zhang, Henry Hoffmann, Junchen Jiang",
          "presenters": ["李蓓蓓"],
          "summary": "这篇论文提出了DNN驱动流媒体（DDS）方法，通过服务器端的深度神经网络实时反馈优化视频流的压缩与传输，在保证推理精度的同时大幅节省带宽并降低延迟。",
          "link": ""
        },
        {
          "index": "16",
          "title": "NeRF2: Neural Radio-Frequency Radiance Fields",
          "venue": "MobiCom 2023",
          "authors": "Xiaopeng Zhao, Zhenlin An, Qingrui Pan, Lei Yang",
          "presenters": ["徐文骞"],
          "summary": "提出了神经射频辐射场 NeRF2，它表示一个连续的体场景函数，能够理解射频信号的传播。特别是，在经过少量信号测量的训练后，当 NeRF2 知道发射器的位置时，它可以确定在任何位置接收到的信号是怎样的以及是什么信号。",
          "link": ""
        },
        {
          "index": "17",
          "title": "Building Flexible, Low-Cost Wireless Access Networks With Magma",
          "venue": "NSDI'23",
          "authors": "Shaddi Hasan et al.",
          "presenters": ["史冉"],
          "summary": "这篇论文介绍了 Magma，一个面向 低成本、灵活无线接入网络 的开源平台。Magma 通过 分布式 SDN 设计 和 软硬件解耦，降低了 LTE/5G 网络的部署和运维成本，使得小型运营商能够更轻松地搭建无线基础设施。实验和真实部署表明，Magma 在 成本、性能和可扩展性 方面均具备优势，为未来低成本无线接入网络提供了新的思路。",
          "link": ""
        },
        {
          "index": "18",
          "title": "A Novel Self-Supervised Framework Based on Masked Autoencoder for Traffic Classification",
          "venue": "IEEE/ACM TRANSACTIONS ON NETWORKING,",
          "authors": "Ruijie Zhao , Graduate Student Member, IEEE, Mingwei Zhan, Xianwen Deng , Student Member, IEEE, Fangqi Li , Graduate Student Member, IEEE, Yanhao Wang , Yijun Wang ,Guan Gui , Senior Member, IEEE, and Zhi Xue",
          "presenters": ["王润东"],
          "summary": "本研究不仅提出了一种新型的流量分类模型，还为自我监督学习在网络流量分析中的应用提供了理论基础，对后续相关研究有积极的推动作用，未来的研究将关注于优化自我监督学习方法，以进一步提高流量分类的精确性和适应性，特别是在面对大规模和复杂数据集的情况下",
          "link": ""
        },
        {
          "index": "19",
          "title": "Pudica: Toward Near-Zero Queuing Delay in Congestion Control for Cloud Gaming",
          "venue": "NSDI'24",
          "authors": "Shibo Wang, Shusen Yang, etc.",
          "presenters": ["朱志鑫"],
          "summary": "这篇文章介绍了一种名为 Pudica 的新型拥塞控制（Congestion Control, CC）算法，专为云游戏设计。",
          "link": ""
        },
        {
          "index": "20",
          "title": "Experience: A Three-Year Retrospective of Large-scale Multipath Transport Deployment for Mobile Applications",
          "venue": "MobiCom 2023",
          "authors": "Chengke Wang, Hao Wang, Feng Qian, Kai Zheng, Chenglu Wang, Fangzhu Mao, Xingmin Guo, Chenren Xu",
          "presenters": ["郑文博"],
          "summary": "论文提出了 Fleety，这是一种仅需客户端修改即可提供多路径传输能力的移动系统服务",
          "link": ""
        },
        {
          "index": "21",
          "title": "Magnetic Backscatter for In-body Communication and Localization",
          "venue": "MobiCom 2023",
          "authors": "Bill Tao, Emerson Sie, Jayanth Shenoy, Deepak Vasisht",
          "presenters": ["刘尚坤"],
          "summary": "",
          "link": "https://doi.org/10.1145/3570361.3613301"
        },
        {
          "index": "22",
          "title": "Neural Fictitious Self-Play for Radar Anti-Jamming Dynamic Game with Imperfect Information",
          "venue": "IEEE",
          "authors": "Kang Li, Bo Jiu* , Senior Member, IEEE, Wenqiang Pu* , Member, IEEE and Hongwei Liu* , Member, IEEE and Xiaojun Peng",
          "presenters": ["曹直树"],
          "summary": "这篇文章主要探讨了雷达抗干扰动态博弈中不完美信息下智能对抗问题，本文提出基于神经虚拟自我博弈NFSP的智能对抗方法，对比传统方法达到近似纳什均衡",
          "link": ""
        },
        {
          "index": "23",
          "title": "SIEVE is Simpler than LRU: an Efficient Turn-Key Eviction Algorithm for Web Caches",
          "venue": "NSDI'24",
          "authors": "Yazhuo Zhang, Juncheng Yang",
          "presenters": ["祝子宸"],
          "summary": "这篇文章主要介绍了一种更高效的网络cache替换方法SIEVE",
          "link": ""
        },
        {
          "index": "24",
          "title": "SignQuery:A Natural User Interface and Search Engine for Sign Languages with Wearable Sensors",
          "venue": "ACM MobiCom '23",
          "authors": "Hao Zhou, Taiting Lu, Kristina McKinnie, Joseph Palagano Kenneth DeHaan, Mahanth Gowda",
          "presenters": ["覃茂辉"],
          "summary": "这篇文章主要讲了一种新型的基于手势输入的手语查询方法。",
          "link": ""
        },
        {
          "index": "26",
          "title": "B-CAT: A Model for Detecting Botnet Attacks Using Deep Attack Behavior Analysis on Network Traffic Flows",
          "venue": "Journal_x000D_ of Big Data",
          "authors": "Muhammad Aidiel Rachman Putra, Tohari Ahmad, Dandy Pramana Hostiadi",
          "presenters": ["纪晨宇"],
          "summary": "这篇文章介绍了一种基于网络流量深度攻击行为分析的僵尸网络攻击检测模型",
          "link": ""
        },
        {
          "index": "29",
          "title": "Multimodal Sense-Informed Forecasting of 3D Human Motions",
          "venue": "CVPR 2024",
          "authors": "Zhenyu Lou1 Qiongjie Cui2* Haofan Wang3 Xu Tang3 Hong Zhou1",
          "presenters": ["王天天"],
          "summary": "这篇文章提出了一种融合3D场景信息和人类凝视意图的多模态感知方法用于在真实环境中生成人体运动预测序列。",
          "link": ""
        },
        {
          "index": "34",
          "title": "SLNet: A Spectrogram Learning Neural Network for Deep Wireless Sensing",
          "venue": "NSDI'23",
          "authors": "Zheng Yang, Yi Zhang, Kun Qian, Chenshu Wu",
          "presenters": ["邓飞"],
          "summary": "",
          "link": "https://www.usenix.org/conference/nsdi23/presentation/yang-zheng"
        },
        {
          "index": "35",
          "title": "RF-Diffusion: Radio Signal Generation via Time-Frequency Diffusion",
          "venue": "MobiCom 2024",
          "authors": "Guoxuan Chi, Zheng Yang",
          "presenters": ["张婷婷"],
          "summary": "这篇文章提出了RF-Diffusion模型，通过时间-频率扩散方法生成高保真射频信号。",
          "link": ""
        },
        {
          "index": "36",
          "title": "MegaScale: Scaling Large Language Model Training to More Than 10,000 GPUs",
          "venue": "NSDI'24",
          "authors": "Ziheng Jiang, Haibin Lin, Yinmin Zhong, Qi Huang, Yangrui Chen, Zhi Zhang, Yanghua Peng, Xiang Li, Cong Xie, Shibiao Nong, Yulu Jia, Sun He, Hongmin Chen, Zhihao Bai, Qi Hou, Shipeng Yan, Ding Zhou, Yiyao Sheng, Zhuo Jiang, Haohan Xu, Haoran Wei, Zhang Zhang, Pengfei Nie, Leqi Zou, Sida Zhao, Liang Xiang, Zherui Liu, Zhe Li, Xiaoying Jia, Jianxi Ye, Xin Jin, Xin Liu",
          "presenters": ["范培霖"],
          "summary": "这篇文章提出了MegaScale系统，它通过算法与系统协同设计以及深度可观测性，在超过1万块GPU上高效稳定地训练大规模语言模型，并实现了比现有方法更高的训练效率与容错能力。",
          "link": ""
        },
        {
          "index": "38",
          "title": "DOTE: Rethinking (Predictive) WAN Traffic Engineering",
          "venue": "NSDI23",
          "authors": "Yarin Perry，Felipe Vieira Frujeri，Chaim Hoch",
          "presenters": ["岳耀华"],
          "summary": "这篇文章提出了一种直接优化流量分配的新范式，仅基于历史流量数据，无需显式预测未来需求。",
          "link": ""
        },
        {
          "index": "39",
          "title": "Experience Practical Indoor Localization for Malls",
          "venue": "MobiCom 2022",
          "authors": "Yuming Hu1, Feng Qian1, Zhimeng Yin2, Zhenhua Li3, Zhe Ji4, Yeqiang Han4, Qiang Xu4, Wei Jiang",
          "presenters": ["赵安凯"],
          "summary": "这篇文章提出了MLoc这一基于智能手机的商场室内定位系统",
          "link": ""
        },
        {
          "index": "40",
          "title": "BatMobility: Towards Flying Without Seeing for Autonomous Drones",
          "venue": "MobiCom 2023",
          "authors": "Emerson Sie, Zikun Liu, Deepak Vasisht",
          "presenters": ["朱英男"],
          "summary": "这篇文章介绍了 BatMobility，一种仅依赖毫米波雷达的无人机感知系统，旨在解决无人机在无光学传感器情况下的自主飞行问题，通过实验验证其性能，为无人机感知技术发展提供新方向。",
          "link": ""
        },
        {
          "index": "41",
          "title": "The Underwater Backscatter Channel: Theory, Link Budget, and Experimental Validation",
          "venue": "MobiCom 2023",
          "authors": "Waleed Akbar, Ahmed Allam, Fadel Adib",
          "presenters": ["王振东"],
          "summary": "这篇文章提出了一个端到端的水下反向散射通信信道的理论和实证分析，并通过实验验证了理论模型的准确性。",
          "link": ""
        },
        {
          "index": "42",
          "title": "Autothrottle: A Practical Bi-Level Approach to Resource Management for SLO-Targeted Microservices",
          "venue": "NSDI '24",
          "authors": "Zibo Wang, Pinghe Li, Feng Wu, Francis Y. Yan",
          "presenters": ["郑霄汉"],
          "summary": "这篇文章提出了一种以新型网络表示学习模型BEAM为核心的路由异常检测系统。",
          "link": ""
        },
        {
          "index": "44",
          "title": "The Bedrock of Byzantine Fault Tolerance: A Unified Platform for BFT Protocols Analysis, Implementation, and Experimentation",
          "venue": "NSDI24",
          "authors": "Mohammad Javad Amiri, Stony Brook University; Chenyuan Wu, University of Pennsylvania; Divyakant Agrawal and Amr El Abbadi, UC Santa Barbara; Boon Thau Loo, University of Pennsylvania; Mohammad Sadoghi, UC Davis",
          "presenters": ["杨鹏"],
          "summary": "论文的主题是构建一个名为Bedrock的统一平台，用于分析、实现和实验评估拜占庭容错（BFT）协议。通过系统化的设计空间和设计选择，Bedrock帮助用户理解不同BFT协议的权衡关系，并在统一环境中进行性能比较。",
          "link": ""
        }
      ]
    }
  };
})();

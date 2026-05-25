(function () {
  const SiteContent = (window.SiteContent = window.SiteContent || {});

  SiteContent.site = {
    title: "XJTU AIRS Lab",
    brandMark: "X",
    footerMark: "X",
    logoMark: "./assets/media/branding/airs-lab-mark.svg",
    logoMarkAlt: "AIRS Lab logo mark",
    logoLockup: "./assets/media/branding/airs-lab-logo.svg",
    logoLockupAlt: "XJTU AIRS Lab logo",
    tagline: "Artificial Intelligence, Interaction, and Real-World Systems",
    description:
      "XJTU AIRS Lab explores AI, interaction, and real-world systems across wireless and wearable sensing, multimodal learning, and efficient edge intelligence.",
    copyright: "Copyright \u00A9 XJTU AIRS Lab. Designed and Developed by Shengyao Ding and Fei Wang.",
    nav: [
      { key: "about", label: "About", href: "./index.html" },
      { key: "fei-wang", label: "Fei Wang", href: "./fei-wang.html" },
      { key: "publications", label: "Publications", href: "./publications.html" },
      { key: "dataset", label: "Datasets", href: "./dataset.html" },
      { key: "course", label: "Teaching", href: "./teaching.html" },
      { key: "awards", label: "Awards", href: "./awards.html" },
      { key: "team", label: "Team", href: "./team.html" },
      { key: "gallery", label: "Gallery", href: "./gallery.html" },
      { key: "notes", label: "Notes", href: "./notes.html" }
    ],
    footerLinks: [
      { label: "About", href: "./index.html" },
      { label: "Fei Wang", href: "./fei-wang.html" },
      { label: "Publications", href: "./publications.html" },
      { label: "Datasets", href: "./dataset.html" },
      { label: "Teaching", href: "./teaching.html" },
      { label: "Awards", href: "./awards.html" },
      { label: "Team", href: "./team.html" },
      { label: "Gallery", href: "./gallery.html" },
      { label: "Notes", href: "./notes.html" },
      { label: "GitHub", href: "https://github.com/aiotgroup" }
    ]
  };

  SiteContent.about = {
    hero: {
      eyebrow: "About",
      title: "AI, Interaction,\nand Real-World Systems.",
      description:
        "XJTU AIRS Lab studies how artificial intelligence, human interaction, and deployable systems come together in the physical world, spanning sensing, wearables, multimodal intelligence, and resource-aware deployment.",
      actions: [
        { label: "Browse Publications", href: "./publications.html", kind: "primary" },
        { label: "Meet The Team", href: "./team.html", kind: "secondary" },
        { label: "GitHub", href: "https://github.com/aiotgroup", kind: "secondary" }
      ]
    },
    intro: [
      "Our research sits at the intersection of artificial intelligence, human interaction, and real-world systems. We care about AI that does not stop at offline benchmarks, but can perceive, reason, and assist in everyday environments with robustness, efficiency, and practical value.",
      "To do that, we work across wireless sensing, wearable computing, multimodal learning, and edge intelligence. We turn signals such as WiFi, mmWave, IMU, PPG, audio, video, and text into systems that are not only accurate, but also deployable, privacy-aware, and useful in real human settings."
    ],
    metrics: [
      { label: "Core Identity", value: "Artificial intelligence + interaction + real-world systems" },
      { label: "Research Stack", value: "Wireless, wearable, multimodal, and embedded intelligence" },
      { label: "System Goal", value: "Deployable, privacy-aware, and trustworthy AI in the physical world" }
    ],
    highlights: [
      {
        title: "Sensing and Perception",
        text:
          "We use AI to turn wireless, visual, physiological, and motion signals into perception systems that understand people, environments, and activities in the physical world.",
        details: [
          "Wireless sensing with WiFi and mmWave for activity recognition, health monitoring, respiration sensing, and security-oriented detection.",
          "Representative threads include Person-in-WiFi (ICCV 2019), Person-in-WiFi 3D (CVPR 2024), WiPIN (Globecom 2019 Best Paper Award), and our recent UWB respiration monitoring effort."
        ]
      },
      {
        title: "Wearable and Human-Centered Interaction",
        text:
          "We design human-centered interactive systems around smartwatches, bands, glasses, and other wearable devices so that AI can better understand user intent, daily behavior, and affective state.",
        details: [
          "Typical signals include IMU and PPG streams collected from watches, wristbands, earbuds, and glasses.",
          "Recent examples include XRF V2 (ACM IMWUT/UBICOMP 2025) and You Can Wash Hands Better (IEEE TMC 2025)."
        ]
      },
      {
        title: "Multimodal Machine Learning",
        text:
          "Our systems often need to combine multiple sensing channels, so we study multimodal fusion, cross-modal alignment, and robustness when one or more modalities are noisy or missing.",
        details: [
          "We work on how to fuse WiFi, mmWave, IMU, audio, vision, and language signals into shared representations that remain useful in real-world conditions.",
          "A current emphasis is maintaining robustness under partial modality failure, domain shift, and low-quality sensor observations."
        ]
      },
      {
        title: "Efficient Real-World Systems",
        text:
          "We build deployable AI systems that can sense, infer, interact, and respond under tight constraints in compute, memory, power, and connectivity.",
        details: [
          "This includes privacy-aware sensing, defending intelligent systems from attacks, and designing resource-efficient pipelines for embedded deployment.",
          "We are especially interested in model compression and acceleration so that capable AI can run on MCU-class and edge devices with offline sensing and real-time response."
        ]
      }
    ],
    news: [
      {
        date: "May 2026",
        title: "2026 Spring Virtual Reality course project showcase is online",
        summary:
          "The showcase presents 29 student-built VR final projects across cultural heritage, environmental protection, safety education, psychology, healing experiences, and immersive games.",
        href: "./vr-2026-projects.html",
        linkLabel: "Open showcase"
      },
      {
        date: "May 2026",
        title: "Fei Wang elevated to IEEE Senior Member",
        summary:
          "Fei Wang has been elevated to IEEE Senior Member, recognizing his professional maturity and sustained contributions to AI, interaction, wireless sensing, and real-world systems research.",
        href: "./fei-wang.html",
        linkLabel: "Open profile"
      },
      {
        date: "May 2026",
        title: "RadioSEP accepted to IEEE INFOCOM 2026",
        summary:
          "RadioSEP introduces a unified mmWave-audio framework for speech enhancement and multi-speaker separation without requiring a speaker count prior.",
        slug: "mmwave-aided-unified-speech-enhancement-and-separation-without-speaker-count-prior"
      },
      {
        date: "May 2026",
        title: "RF-Carer accepted to ACM SenSys 2026",
        summary:
          "Our new SenSys 2026 paper introduces RF-Carer, a one-fits-all UWB respiration monitoring system that adapts across users, movements, and environments without extra retraining.",
        slug: "poster-zero-effort-cross-domain-wireless-respiration-monitoring-under-free-body-movement"
      },
      {
        date: "May 2026",
        title: "We Can Hear You with mmWave Radar accepted to ACM IMWUT / UbiComp 2026",
        summary:
          "The mmSpeech paper studies an end-to-end mmWave radar eavesdropping system that reconstructs intelligible speech from loudspeaker-induced vibrations, including unseen-speaker and through-wall scenarios.",
        slug: "we-can-hear-you-with-mmwave-radar-an-end-to-end-eavesdropping-system"
      },
      {
        date: "Apr 2026",
        title: "Wi-Fi Sensing Generalizability survey accepted to IEEE COMST 2026 (IF 46.7)",
        summary:
          "Our IEEE Communications Surveys & Tutorials paper organizes the taxonomy, techniques, datasets, and open challenges behind generalizable WiFi sensing systems.",
        slug: "a-survey-on-wi-fi-sensing-generalizability-taxonomy-techniques-datasets-and-future-research-prospects"
      },
      {
        date: "Mar 2026",
        title: "Cross-domain EEG emotion recognition accepted to IEEE ICASSP 2026",
        summary:
          "The new ICASSP paper applies contrastive learning to improve cross-domain EEG-based emotion recognition.",
        slug: "cross-domain-eeg-based-emotion-recognition-with-contrastive-learning"
      },
      {
        date: "Oct 2025",
        title: "XRF V2 accepted to ACM IMWUT / UbiComp 2025",
        summary:
          "The dataset combines WiFi with IMUs from phones, watches, earbuds, and glasses to support richer action summarization research.",
        slug: "xrf-v2-a-dataset-for-action-summarization-with-wi-fi-signals-and-imus-in-phones-watches-earbuds-and-glasses"
      },
      {
        date: "Jun 2025",
        title: "HiLoTs accepted to IEEE/CVF CVPR 2025",
        summary:
          "HiLoTs introduces high-low temporal sensitive representation learning for semi-supervised LiDAR semantic segmentation in autonomous driving.",
        slug: "hilots-high-low-temporal-sensitive-representation-learning-for-semi-supervised-lidar-segmentation-in-autonomous-driving"
      },
      {
        date: "May 2025",
        title: "UWash accepted to IEEE TMC 2025",
        summary:
          "UWash uses smartwatch IMU streams to segment daily handwashing gestures, estimate gesture duration, and score handwashing quality in everyday settings.",
        slug: "you-can-wash-hands-better-accurate-daily-handwashing-assessment-with-a-smartwatch"
      },
      {
        date: "Mar 2025",
        title: "One Snapshot is All You Need accepted to IEEE INFOCOM 2025",
        summary:
          "The paper introduces a generalized signal-generation method aimed at improving scalability and data efficiency for mmWave-based sensing.",
        slug: "one-snapshot-is-all-you-need-a-generalized-method-for-mmwave-signal-generation"
      },
      {
        date: "Oct 2024",
        title: "XRF55 accepted to ACM IMWUT / UbiComp 2024",
        summary:
          "XRF55 is a large-scale multi-RF benchmark for indoor human action analysis, pairing WiFi, RFID, mmWave radar, and synchronized Kinect streams.",
        slug: "xrf55-a-radio-frequency-dataset-for-human-indoor-action-analysis"
      },
      {
        date: "Jun 2024",
        title: "Person-in-WiFi 3D accepted to IEEE/CVF CVPR 2024",
        summary:
          "Person-in-WiFi 3D presents an end-to-end WiFi system for multi-person 3D pose estimation using commercial WiFi devices and Transformer-style pose prediction.",
        slug: "person-in-wifi-3d-end-to-end-multi-person-3d-pose-estimation-with-wi-fi"
      }
    ],
    sponsors: [
      { name: "AMD", logo: "./assets/media/partners/amd.svg" },
      { name: "Xilinx", logo: "./assets/media/partners/xilinx.svg" },
      { name: "NVIDIA", logo: "./assets/media/partners/nvidia.svg" },
      { name: "NSF", color: "#1b5e8c" },
      { name: "IBM", logo: "./assets/media/partners/ibm.svg" },
      { name: "Amazon", logo: "./assets/media/partners/amazon.svg" },
      { name: "Qualcomm", logo: "./assets/media/partners/qualcomm.svg" },
      { name: "Microsoft", logo: "./assets/media/partners/microsoft.svg" },
      { name: "Hyundai", logo: "./assets/media/partners/hyundai.svg" },
      { name: "Samsung", logo: "./assets/media/partners/samsung.svg" },
      { name: "Apple", logo: "./assets/media/partners/apple.svg" },
      { name: "Intel", logo: "./assets/media/partners/intel.svg" },
      { name: "Meta", logo: "./assets/media/partners/meta.svg" },
      { name: "Sony", logo: "./assets/media/partners/sony.svg" },
      { name: "Google", logo: "./assets/media/partners/google.svg" },
      { name: "Texas Instruments", color: "#cc0000" },
      { name: "Ford", logo: "./assets/media/partners/ford.svg" },
      { name: "SRC", color: "#0067b1" },
      { name: "Huawei", logo: "./assets/media/partners/huawei.svg" },
      { name: "Xiaomi", logo: "./assets/media/partners/xiaomi.svg" },
      { name: "Haier", logo: "./assets/media/partners/haier.svg" },
      { name: "OPPO", logo: "./assets/media/partners/oppo.svg" },
      { name: "vivo", logo: "./assets/media/partners/vivo.svg" },
      { name: "Tencent", color: "#0052d9" },
      { name: "Alibaba", logo: "./assets/media/partners/alibaba.svg" },
      { name: "Baidu", logo: "./assets/media/partners/baidu.svg" },
      { name: "DeepSeek", logo: "./assets/media/partners/deepseek.svg" },
      { name: "miHoYo", logo: "./assets/media/partners/mihoyo.svg" },
      { name: "Game Science", logo: "./assets/media/partners/gamescience.svg" },
      { name: "Xiaohongshu", logo: "./assets/media/partners/xiaohongshu.svg" },
      { name: "X", logo: "./assets/media/partners/x.svg" },
      { name: "TikTok", logo: "./assets/media/partners/tiktok.svg" },
      { name: "Netflix", logo: "./assets/media/partners/netflix.svg" },
      { name: "YouTube", logo: "./assets/media/partners/youtube.svg" },
      { name: "Unitree Robotics", logo: "./assets/media/partners/unitree.svg" },
      { name: "BYD", logo: "./assets/media/partners/byd.svg" },
      { name: "Boston Dynamics", logo: "./assets/media/partners/boston-dynamics.svg" },
      { name: "SpaceX", logo: "./assets/media/partners/spacex.svg" },
      { name: "Blue Origin", logo: "./assets/media/partners/blue-origin.svg" },
      { name: "NSFC", color: "#0b5aa6" },
      { name: "CNSA", color: "#d21f26" }
    ]
  };

  SiteContent.feiWang = {
    name: "Fei Wang",
    title: "Associate Professor and Ph.D. Supervisor",
    subtitle: "Associate Professor · Ph.D. Supervisor",
    photo: "./assets/media/people/fei-wang.jpg",
    photoAlt: "Profile photo for Fei Wang",
    note:
      "Associate Professor in the School of Software Engineering at Xi'an Jiaotong University, working at the intersection of artificial intelligence, human interaction, wireless and wearable sensing, multimodal learning, and real-world AI systems.",
    phdOpening: {
      label: "Ph.D. Opening / 博士招生",
      text: "招收2027年秋季入学的计算机科学与技术专业普通全日制博士生。",
      link: {
        label: "Q&A / 招生问答",
        href: "./notes/interns-masters-applicants-qa/index.html"
      }
    },
    admissionsNote:
      "We welcome applications from interns and prospective master's and Ph.D. students. For more information about the group and admissions, please refer to the Q&A page.",
    admissionsNoteZh:
      "我们欢迎本科科研实习生、有意申请硕士研究生和博士研究生的同学加入。",
    admissionsLink: {
      label: "Q&A / 招生问答",
      href: "./notes/interns-masters-applicants-qa/index.html"
    },
    bio: [
      "I am an Associate Professor and Ph.D. supervisor in the School of Software Engineering, Faculty of Electronic and Information Engineering, Xi'an Jiaotong University. My goal is to make AI more present, helpful, and humane in the physical world. I am especially motivated by socially meaningful problems where intelligent sensing can improve health, safety, accessibility, and the quality of everyday life without demanding constant user attention.",
      "My recent research directions are closely aligned with our group roadmap: intelligent sensing with WiFi, mmWave, UWB, and other ambient signals; wearable computing and human-computer interaction with watches, bands, glasses, and physiological sensors; multimodal machine learning that fuses wireless, vision, audio, language, and motion data under missingness and noise; and smart IoT, security, and efficient edge AI that bring robust perception to resource-constrained devices with privacy-aware, real-time deployment in mind.",
      [
        "Alongside publications in venues such as ACM IMWUT, IEEE Internet of Things Journal, IEEE Transactions on Industrial Informatics, IEEE Transactions on Image Processing, IEEE GLOBECOM, ICCV, CVPR, and UbiComp, I care deeply about building open infrastructure that helps the community move faster. Our group has released projects and benchmarks including ",
        { label: "Person-in-WiFi 3D", href: "https://aiotgroup.github.io/Person-in-WiFi-3D/" },
        ", ",
        { label: "XRF55", href: "https://aiotgroup.github.io/XRF55/" },
        ", ",
        { label: "XRF V2", href: "https://github.com/aiotgroup/XRFV2" },
        ", and ",
        { label: "Awesome Wireless Sensing Generalization", href: "https://github.com/aiotgroup/awesome-wireless-sensing-generalization" },
        ". I also received the IEEE GLOBECOM 2019 Best Paper Award and serve as a founding leadership member of the Sensing Dataset Platform for Intelligent Sensing and Communications, ",
        { label: "SDP4ISAC", href: "https://sdp8.org/" },
        "."
      ]
    ],
    significantPerformance: {
      items: [
        {
          title: "Technical Breakthroughs in Fine-grained Sensing",
          period: "2017 - Present",
          text:
            "I helped drive the shift from coarse-grained WiFi sensing toward fine-grained, human-centric perception, including activity recognition, pose estimation, and person re-identification. I led the Person-in-WiFi research series, with work published at ICCV 2019 and CVPR 2024, and my original contributions were recognized with the IEEE GLOBECOM 2019 Best Paper Award."
        },
        {
          title: "Leadership in Community Infrastructure",
          period: "2019 - Present",
          text:
            "I led the construction and release of large-scale datasets and open resources including ARIL, XRF55, XRF V2, Person-in-WiFi 3D, and Awesome Wireless Sensing Generalization. These projects support reproducible wireless sensing research and provide practical benchmarks and reading resources for the global community."
        },
        {
          title: "Academic Leadership and Talent Development",
          period: "2020 - Present",
          text:
            "Since joining Xi'an Jiaotong University, I have directed the AIRS Lab, shaped research roadmaps, managed competitive funding including NSFC programs, mentored more than 20 graduate students, and maintained high-impact publications in journals such as IEEE TMC, IEEE TII, IEEE IoTJ, IEEE TIP, and ACM IMWUT."
        }
      ]
    },
    interests: [
      "Wireless sensing with WiFi, mmWave, and UWB",
      "Wearable computing and human-computer interaction",
      "Multimodal learning for real-world intelligence and interaction",
      "Efficient and edge AI for AIoT systems",
      "Security and privacy in intelligent sensing"
    ],
    profileLinks: [
      { label: "Email", href: "mailto:feynmanw@xjtu.edu.cn" },
      { label: "Google Scholar", href: "https://scholar.google.com/citations?user=LKPpmXQAAAAJ&hl=en" }
    ],
    quickFacts: [
      "School of Software Engineering, Xi'an Jiaotong University",
      "Contact: feynmanw[at]xjtu.edu.cn",
      [{ strong: "IEEE Senior Member (Apr 2026)" }],
      "Executive Committee Member, CCF Technical Committee on Internet of Things (Sep 2025)",
      "Executive Committee Member, CCF Technical Committee on Ubiquitous Computing (Aug 2025)",
      [
        "Founding Leadership Member, ",
        { label: "SDP4ISAC", href: "https://sdp8.org/" },
        " (Sep 2024)"
      ]
    ],
    roles: [
      "Associate Professor and Ph.D. Supervisor, School of Software Engineering, Xi'an Jiaotong University",
      "Postdoctoral Researcher in Control Science and Engineering, Xi'an Jiaotong University",
      "IEEE Senior Member",
      "Executive Committee Member, CCF Technical Committee on Internet of Things",
      "Executive Committee Member, CCF Technical Committee on Ubiquitous Computing"
    ],
    appointments: [
      {
        year: "Apr 19, 2026",
        title: "IEEE Senior Member",
        text: "Promoted to IEEE Senior Member."
      },
      {
        year: "Sep 2025",
        title: "Executive Committee Member",
        text: "CCF Technical Committee on Internet of Things."
      },
      {
        year: "Aug 2025",
        title: "Executive Committee Member",
        text: "CCF Technical Committee on Ubiquitous Computing."
      },
      {
        year: "Sep 2024 - Present",
        title: "Founding Leadership Member",
        textParts: [
          "Sensing Dataset Platform for Intelligent Sensing and Communications, ",
          { label: "SDP4ISAC", href: "https://sdp8.org/" },
          "."
        ]
      },
      {
        year: "Mar 2024 - Present",
        title: "Associate Professor and Ph.D. Supervisor",
        text: "School of Software Engineering, Faculty of Electronic and Information Engineering, Xi'an Jiaotong University."
      },
      {
        year: "Sep 2020 - Mar 2024",
        title: "Assistant Professor and Master's Supervisor",
        text: "School of Software Engineering, Faculty of Electronic and Information Engineering, Xi'an Jiaotong University."
      },
      {
        year: "Sep 2020 - Present",
        title: "Postdoctoral Researcher in Control Science and Engineering",
        textParts: [
          "Xi'an Jiaotong University. Mentor: Prof. ",
          {
            label: "Yihong Gong (龚怡宏)",
            href: "https://gr.xjtu.edu.cn/web/ygong"
          },
          " (IEEE Fellow)."
        ]
      },
      {
        year: "Mar 2016 - Mar 2020",
        title: "Ph.D. in Computer Science and Technology",
        textParts: [
          "Xi'an Jiaotong University. Advisor: Prof. ",
          {
            label: "Jinsong Han (韩劲松)",
            href: "https://person.zju.edu.cn/hanjinsong"
          },
          "."
        ]
      },
      {
        year: "Nov 2019 - Jan 2020",
        title: "Visiting Scholar",
        textParts: [
          "College of Cyber Security, Zhejiang University. Hosted by Prof. ",
          {
            label: "Jinsong Han (韩劲松)",
            href: "https://person.zju.edu.cn/hanjinsong"
          },
          ", Research Prof. ",
          {
            label: "Feng Lin (林峰)",
            href: "https://person.zju.edu.cn/flin"
          },
          ", and Prof. ",
          {
            label: "Kui Ren (任奎)",
            href: "https://person.zju.edu.cn/kuiren"
          },
          " (ACM/IEEE Fellow)."
        ]
      },
      {
        year: "Oct 2017 - Oct 2019",
        title: "Joint Ph.D. Student",
        textParts: [
          "Robotics Institute, Carnegie Mellon University. Advisors: Dr. ",
          {
            label: "Dong Huang (黄东)",
            href: "https://www.donghuang-research.com/"
          },
          " and Prof. ",
          {
            label: "Fernando De la Torre",
            href: "https://www.cs.cmu.edu/~ftorre/"
          },
          "."
        ]
      },
      {
        year: "Sep 2014 - Feb 2016",
        title: "M.S. in Computer Science and Technology",
        textParts: [
          "Xi'an Jiaotong University. Advisor: Prof. ",
          {
            label: "Yinliang Zhao (赵银亮)",
            href: "http://gr.xjtu.edu.cn/web/zhaoy"
          },
          "."
        ]
      },
      {
        year: "Sep 2009 - Jul 2013",
        title: "B.S. in Computer Science and Technology",
        text: "Xi'an Jiaotong University."
      }
    ],
    service: [
      {
        title: "Leadership and Memberships",
        items: [
          "IEEE Senior Member",
          "Executive Committee Member, CCF Technical Committee on Internet of Things",
          "Executive Committee Member, CCF Technical Committee on Ubiquitous Computing"
        ]
      },
      {
        title: "Guest Editorships and Chairs",
        items: [
          "Guest Editor: MDPI Electronics",
          "Guest Editor: MDPI Sensors special issue (active call for papers)",
          "Area / Workshop Chair: ICSEE 2024, IEEE ICCVIT 2025, IEEE ECIS 2026"
        ]
      },
      {
        title: "Conference Reviewing and PC Service",
        items: [
          "BMVC 2026, ECCV 2026, SIGIR 2026, ICML 2026, CVPR 2026, ICASSP 2026, AAAI 2026, UBICOMP 2026, WACV 2026, INFOCOM 2026",
          "ACM MM 2025, ACM UBICOMP 2025, ICCV 2025, IJCNN 2025, CVPR 2025, ICASSP 2025, AAAI 2025",
          "HPCC 2024, UIST 2024, ECCV 2024, CVPR 2024, AAAI 2024, ICCV 2023, CVPR 2023, AAAI 2023, SocialCom 2023, ICCV 2021, AAAI 2020"
        ]
      },
      {
        title: "Journal Reviewing",
        items: [
          "IEEE TPAMI, ACM IMWUT, IEEE TMC, IEEE TVCG, IEEE TIP, IEEE TNNLS, IEEE TII, IEEE IoT Journal, IEEE Access, IEEE TSMC",
          "Elsevier Computer Networks and Computer Vision and Image Understanding",
          "MDPI Sensors and related venues"
        ]
      }
    ],
    grants: [
      {
        period: "Jan 2026 - Dec 2029",
        title: "Foundation Models for Open-Domain Generalizable Multimodal Wireless Sensing",
        sponsor: "National Natural Science Foundation of China, General Program",
        note: "Grant No. 62572383. Research on constructing and continuously updating foundation models for open-domain generalizable multimodal wireless sensing. RMB 500,000."
      },
      {
        period: "May 2025 - May 2027",
        title: "Fundamental Research Funds for the Central Universities",
        sponsor: "New Associate Professor Program",
        note: "Principal investigator of a university-level startup project. RMB 100,000."
      },
      {
        period: "May 2025 - May 2026",
        title: "Foundation-Model-Based Research for an Open Topic",
        sponsor: "Open Project, State Key Laboratory of Integrated Services Networks",
        note: "Project title is abbreviated in the source materials as a foundation-model-based xxxx topic. RMB 60,000."
      },
      {
        period: "Jan 2024 - Dec 2026",
        title: "Wireless Imaging via Foundation-Model Fine-Tuning",
        sponsor: "Fundamental Research Funds for the Central Universities",
        note: "Research on wireless imaging methods based on large-model fine-tuning. RMB 50,000."
      },
      {
        period: "Jan 2022 - Dec 2024",
        title: "Cross-Modal Wireless Sensing with Fine-Grained Spatial-Temporal Modeling",
        sponsor: "National Natural Science Foundation of China, Young Scientists Fund",
        note: "Grant No. 62102307. Completed. RMB 300,000."
      },
      {
        period: "May 2021 - Apr 2023",
        title: "Fine-Grained Behavior Sensing System Based on WiFi",
        sponsor: "Shaanxi Key R&D Program",
        note: "Grant No. 2021GXLH-Z-021. Completed. RMB 500,000."
      },
      {
        period: "Sep 2021 - Feb 2023",
        title: "Intelligently Enhanced Contactless Behavior Understanding",
        sponsor: "China Postdoctoral Science Foundation, General Program",
        note: "Grant No. 2021M692562. Completed. RMB 80,000."
      },
      {
        period: "2021 - 2022",
        title: "MindSpore Development on Ascend",
        sponsor: "Huawei",
        note: "Industry-supported project on MindSpore development under the Ascend ecosystem. Completed."
      }
    ]
  };

  SiteContent.courses = [
    {
      id: "virtual-reality-technology",
      en: {
        code: "Undergraduate",
        name: "Virtual Reality Technology",
        school: "XJTU-POLIMI Joint School of Design and Innovation",
        level: "Undergraduate Course",
        overview:
          "An undergraduate course on virtual reality systems, interaction design, 3D content creation, and hands-on course projects.",
        topics: ["virtual reality", "3D interaction", "Unity / Unreal Engine", "course project"],
        offerings: [
          {
            label: "Spring 2026",
            href: "./vr-2026-projects.html",
            action: "Project Showcase"
          },
          { label: "Spring 2025" }
        ],
        resources: [
          {
            label: "2026 Spring VR Academic Reading",
            href: "./vr-2026-reading.html",
            action: "CHI / UIST"
          }
        ],
        resourcesHeading: "Networking Academic Reading",
        outcomes: [
          "Understand VR display, tracking, interaction, and content organization.",
          "Complete a team-based VR project from concept and implementation to public demonstration.",
          "Practice human-computer interaction design and engineering communication for immersive applications."
        ]
      },
      zh: {
        code: "本科生",
        name: "虚拟现实技术",
        school: "西安交通大学米兰理工联合创新学院",
        level: "本科生课程",
        overview:
          "面向本科生的虚拟现实技术课程，覆盖 VR 系统基础、交互设计、三维内容构建和课程大作业实践。",
        topics: ["虚拟现实", "三维交互", "Unity / Unreal Engine", "课程大作业"],
        offerings: [
          {
            label: "2026春季",
            href: "./vr-2026-projects.html",
            action: "大作业展示"
          },
          { label: "2025春季" }
        ],
        resources: [
          {
            label: "2026春 学术论文阅读",
            href: "./vr-2026-reading.html",
            action: "CHI / UIST"
          }
        ],
        resourcesHeading: "网络课程学术论文阅读",
        outcomes: [
          "理解虚拟现实系统的显示、追踪、交互和内容组织方式。",
          "完成一个团队 VR 大作业，从创意、实现到演示形成闭环。",
          "训练面向沉浸式应用的人机交互设计和工程表达能力。"
        ]
      }
    },
    {
      id: "advanced-computer-networks-and-communications",
      en: {
        code: "Graduate",
        name: "Advanced Computer Networks and Communications",
        school: "School of Software Engineering",
        level: "Graduate Course",
        overview:
          "A graduate course on advanced computer networks and communications, covering modern networked systems, wireless communication, mobile computing, and intelligent connected systems.",
        topics: ["computer networks", "wireless communication", "mobile systems", "AIoT networking"],
        offerings: [
          { label: "Spring 2026" },
          { label: "Spring 2025" },
          { label: "Spring 2024" }
        ],
        resources: [
          {
            label: "2026 Spring Networking Academic Reading",
            href: "./networking-2026-reading.html",
            action: "NSDI / MobiCom / MobiSys / SenSys"
          },
          {
            label: "2025 Spring Networking Academic Reading",
            href: "./networking-2025-reading.html",
            action: "NSDI / MobiCom / MobiSys / SenSys"
          }
        ],
        resourcesHeading: "2026 Spring Academic Reading",
        outcomes: [
          "Understand advanced network architectures, protocol mechanisms, and system design methods.",
          "Analyze networking problems in wireless sensing, mobile computing, and AIoT scenarios.",
          "Build research-oriented reading, discussion, and technical analysis skills."
        ]
      },
      zh: {
        code: "研究生",
        name: "高等计算机网络与通信",
        school: "软件工程学院",
        level: "研究生课程",
        overview:
          "面向研究生的高等计算机网络与通信课程，围绕现代网络系统、无线通信、移动计算和智能互联系统中的关键技术展开。",
        topics: ["计算机网络", "无线通信", "移动系统", "AIoT 网络"],
        offerings: [
          { label: "2026春季" },
          { label: "2025春季" },
          { label: "2024春季" }
        ],
        resources: [
          {
            label: "2026春 学术论文阅读",
            href: "./networking-2026-reading.html",
            action: "NSDI / MobiCom / MobiSys / SenSys"
          },
          {
            label: "2025春 学术论文阅读",
            href: "./networking-2025-reading.html",
            action: "NSDI / MobiCom / MobiSys / SenSys"
          }
        ],
        resourcesHeading: "2026春 学术论文阅读",
        outcomes: [
          "理解高等计算机网络体系结构、协议机制和系统设计方法。",
          "结合无线感知、移动计算和 AIoT 场景分析网络系统问题。",
          "通过论文阅读和课程讨论提升研究型网络系统分析能力。"
        ]
      }
    },
    {
      id: "professional-english-practice",
      en: {
        code: "Graduate",
        name: "Professional English Practice",
        school: "Faculty of Electronic and Information Engineering",
        level: "Graduate Course",
        overview:
          "A graduate practice course focused on academic communication, paper reading, technical writing, and English presentation skills.",
        topics: ["academic English", "paper reading", "technical writing", "presentation"],
        offerings: [
          { label: "Spring 2025" },
          { label: "Spring 2023" }
        ],
        outcomes: [
          "Improve technical reading and professional vocabulary in English.",
          "Practice English technical reports, abstracts, presentations, and academic communication.",
          "Translate domain knowledge into clear and accurate English expression."
        ]
      },
      zh: {
        code: "研究生",
        name: "专业英语实践",
        school: "电子与信息学部",
        level: "研究生课程",
        overview:
          "面向研究生的专业英语实践课程，强调学术表达、论文阅读、技术报告写作和英文展示能力。",
        topics: ["学术英语", "论文阅读", "技术写作", "英文展示"],
        offerings: [
          { label: "2025年春季" },
          { label: "2023年春季" }
        ],
        outcomes: [
          "提升英文科技文献阅读和专业词汇表达能力。",
          "练习英文技术报告、摘要、演示和学术交流。",
          "将专业方向内容转化为清晰、准确的英文表达。"
        ]
      }
    },
    {
      id: "computer-organization-practice",
      en: {
        code: "Undergraduate",
        name: "Computer Organization Principles Practice",
        school: "School of Software Engineering",
        level: "Undergraduate Course",
        overview:
          "An undergraduate practice course on computer organization, covering system structure, instruction execution, processor components, and hardware-software co-design.",
        topics: ["computer organization", "processor design", "instruction execution", "system practice"],
        offerings: [
          { label: "Spring 2025" },
          { label: "Fall 2024" },
          { label: "Fall 2023" }
        ],
        outcomes: [
          "Understand key components in computer organization and the instruction execution process.",
          "Use practical assignments to connect processors, memory hierarchy, and system interfaces.",
          "Build system-level reasoning from hardware structure to software execution."
        ]
      },
      zh: {
        code: "本科生",
        name: "计算机组成原理课程实践",
        school: "软件工程学院",
        level: "本科生课程",
        overview:
          "面向本科生的计算机组成原理课程实践，围绕计算机系统结构、指令执行、处理器组成和软硬件协同实践展开。",
        topics: ["计算机组成", "处理器设计", "指令执行", "系统实践"],
        offerings: [
          { label: "2025春" },
          { label: "2024秋" },
          { label: "2023秋" }
        ],
        outcomes: [
          "理解计算机组成原理中的关键部件和指令执行流程。",
          "通过实践任务加深对处理器、存储层次和系统接口的认识。",
          "训练从硬件结构到软件运行机制的系统级分析能力。"
        ]
      }
    }
  ];

  SiteContent.textbooks = [
    {
      year: "2026",
      en: {
        title: "Software Engineering (4th Edition)",
        authorsParts: ["Ge Wang, Wei Xi, ", { strong: "Fei Wang" }, ", Wenbin An, Feng Tian"],
        publisher: "Xidian University Press",
        note: "Textbook"
      },
      zh: {
        title: "软件工程（第四版）",
        authorsParts: ["王鸽，惠维，", { strong: "王飞" }, "，安文斌，田锋"],
        publisher: "西安电子科技大学出版社",
        note: "教材"
      }
    }
  ];

  SiteContent.vrShowcase2026 = {
    title: "2026年春季虚拟现实课程大作业汇总展示",
    subtitle: "西安交通大学-米兰理工联合创新学院",
    description:
      "This page collects final projects from the 2026 Spring Virtual Reality Technology course, highlighting student-built VR demos, interaction ideas, and course outcomes.",
    staff: [
      {
        role: "授课教师 / Instructor",
        name: "王飞",
        englishName: "Fei Wang",
        photo: "./assets/media/people/fei-wang.jpg",
        href: "https://gr.xjtu.edu.cn/zh/web/feynmanw"
      },
      {
        role: "助教 / TA",
        name: "张婷婷",
        englishName: "Tingting Zhang",
        photo: "./assets/media/people/vr-tingting-zhang.jpg",
        href: "https://scholar.google.com/citations?user=R7kxvQkAAAAJ"
      },
      {
        role: "助教 / TA",
        name: "李怡诺",
        englishName: "Yinuo Li",
        photo: "./assets/media/people/yinuo-li.jpg"
      },
      {
        role: "助教 / TA",
        name: "李亚宁",
        englishName: "Yaning Li",
        photo: "./assets/media/people/yaning-li.jpg",
        href: "https://scholar.google.com/citations?user=ydbRdm4AAAAJ"
      }
    ],
    projects: [
          {
                "id": 1,
                "title": "西泠印梦——在虚拟现实中重构中国篆刻",
                "video": "https://player.bilibili.com/player.html?isOutside=true&aid=116632974333877&bvid=BV1CXGW6MEFd&cid=38593497302&p=1",
                "authors": [
                      "刘轩溥 / Xuanpu Liu",
                      "张莘瑜 / Xinyu Zhang",
                      "苏耘霏 / Yunfei Su",
                      "蔡雨莹 / Yuying Cai"
                ],
                "category": "文化",
                "tags": [
                      "文化",
                      "沉浸式体验"
                ],
                "description": "传统篆刻受材料与工艺制约，学习门槛较高，初学者不易上手。为普及非遗文化，本项目融合 VR 技术降低体验门槛，基于团结引擎与 PICO4 设备打造沉浸式篆刻交互系统。用户可借助 VR 手柄，依次完成印稿设计、印材雕刻、盖印成型三大核心功能。系统采用动态网格形变、纹理转印技术，实时还原雕刻痕迹与盖印效果，搭配触觉震动增强磨印真实感，大幅提升沉浸体验。系统配套知识学习与数字典藏模块，帮助使用者夯实篆刻文化知识，创作作品亦可留存观赏。既让大众便捷感受篆刻魅力，也为传统非遗打造出轻量化、易传播的数字化传承新模式。",
                "titleEn": "Xiling Seal Dreams: Reconstructing Chinese Seal Carving in Virtual Reality",
                "descriptionEn": "Restricted by materials and craftsmanship, traditional seal carving has a high learning threshold and is difficult for beginners. To promote intangible cultural heritage, this project adopts VR technology to reduce the experience barrier, developing an immersive interactive system based on Tuanjie Engine and PICO4.Users can finish core functions like draft designing, seal carving and stamping via VR controllers. Dynamic mesh deformation and texture transfer technology realistically present carving traces and stamping effects. Haptic vibration boosts tactile authenticity and immersive experience.The system integrates knowledge learning and digital collection modules to help users grasp seal carving culture and store finished works. It facilitates public appreciation of this art and builds a lightweight, spreadable digital inheritance mode for traditional culture.",
                "poster": "./assets/media/vr-2026-projects/posters/project-01.jpg"
          },
          {
                "id": 2,
                "title": "中华传统 “六艺”——射艺的VR实现",
                "video": "https://player.bilibili.com/player.html?isOutside=true&aid=116629501379588&bvid=BV1i5GJ6mEK6&cid=38581700766&p=1",
                "authors": [
                      "刘珈宁 / Jianing Liu",
                      "张轩赫 / Xuanhe Zhang",
                      "谷奕泉 / Yiquan Gu",
                      "张子越 / Ziyue Zhang"
                ],
                "category": "文化",
                "tags": [
                      "文化",
                      "沉浸式体验"
                ],
                "description": "本作品是一款以传统礼射为核心的VR沉浸式射箭游戏，聚焦中华传统六艺中的射礼文化，面向当代年轻群体打造趣味化的传统文化体验场景。礼射自古讲究射艺与德行相融，不止是射箭技艺，更蕴含谦和自省、守礼修身的精神内涵。游戏依托VR技术还原古礼射场景、动作范式与礼仪流程，玩家可沉浸式体验拉弓、瞄准、发射等完整动作，直观学习传统射箭技法与配套礼仪规范。我们打破传统文化传播的壁垒，以新潮的虚拟现实玩法拉近青年与古典文化的距离，让大家在趣味游玩中重温射礼精髓，感受中华礼乐文化的独特魅力，实现传统技艺与现代数字科技的融合共生。",
                "titleEn": "VR Implementation of She-Art, One of China's Traditional Six Arts",
                "descriptionEn": "This work is an immersive VR archery game centered on traditional Chinese ritual archery. Targeting young people, it presents the time-honored culture of ritual archery, one of the Six Arts in ancient China. Traditional ritual archery combines archery skills with moral cultivation, embodying the virtues of modesty, self-reflection and etiquette.",
                "poster": "./assets/media/vr-2026-projects/posters/project-02.jpg"
          },
          {
                "id": 3,
                "title": "影溯千年",
                "video": "https://player.bilibili.com/player.html?isOutside=true&aid=116630508077695&bvid=BV1KfGn6qE3h&cid=38587142003&p=1",
                "authors": [
                      "徐言喆 / Yanzhe Xu",
                      "崔子韩 / Zihan Cui",
                      "周楷之 / Kaizhi Zhou",
                      "李星燃 / Xingran Li"
                ],
                "category": "文化",
                "tags": [
                      "文化"
                ],
                "description": "影溯千年皮影艺术VR展馆，以数字科技复刻非遗皮影魅力，打破时空界限，带领观者沉浸式邂逅中华传统光影美学。展馆梳理皮影千年发展脉络，囊括各地经典流派造型、雕刻工艺、戏曲剧本与表演形式，鲜活展现老艺人匠心技艺。借助VR全景漫游、动态皮影演绎、游客可近距离观赏驴皮精雕纹路，演绎经典剧目，聆听古朴唱腔韵律。展馆融合历史溯源、工艺鉴赏、体验与文化传承四大板块，让沉寂的民间艺术焕发全新活力。以虚拟光影承载民俗文脉，让古老皮影走出戏台，在数字世界永续流传，让大众真切感受东方独有的光影非遗之美。",
                "titleEn": "Shadow Art Through Millennia",
                "descriptionEn": "Shadow Art Through Millennia is an immersive VR exhibition that reproduces the charm of intangible cultural heritage shadow puppetry with digital technology. Breaking the limits of time and space, it brings visitors an immersive journey into traditional Chinese light and shadow aesthetics. The exhibition sorts out the thousand-year development history of shadow puppetry, covering classic regional styles, carving craftsmanship, opera scripts and performance forms, fully presenting the exquisite craftsmanship of veteran artisans. Supported by panoramic VR roaming, dynamic shadow play shows and interactive control, visitors can admire delicate donkey skin carving details, manipulate puppets to perform classic stories and listen to ancient opera tunes. Divided into historical tracing, craft appreciation, interactive experience and cultural inheritance, the exhibition revives the age-old folk art. It carries folk culture via virtual light and shadow, helps traditional shadow puppetry step out of old stages and pass down eternally in the digital world, enabling people to truly appreciate the unique oriental charm of this intangible cultural heritage.",
                "poster": "./assets/media/vr-2026-projects/posters/project-03.jpg"
          },
          {
                "id": 4,
                "title": "纪念 缅怀——重走长征路",
                "video": "https://player.bilibili.com/player.html?isOutside=true&aid=116629367229257&bvid=BV1wwGJ6oE5K&cid=38580979148&p=1",
                "authors": [
                      "王煜皓 / Yuhao Wang",
                      "黄安哲 / Anzhe Huang",
                      "原淑洁 / Shujie Yuan",
                      "杨璐郗 / Luxi Yang"
                ],
                "category": "红色教育",
                "tags": [
                      "红色教育",
                      "沉浸式体验"
                ],
                "description": "聚焦红色文化传承与长征精神普及的时代需求，针对传统红色教育形式枯燥、体验单薄、代入感不足等问题，我们打造了长征主题数字化交互体验作品。本项目依托Unity引擎进行开发，设置枪械模拟、野菜连连看、红色知识问答三大互动场景。玩家沉浸式化身长征亲历者，在实操体验、趣味闯关、知识作答的过程中回望艰苦行军岁月，真切感受先辈不畏艰险、艰苦奋斗的精神内核。全程连贯的游戏化交互模式，打破单向说教的学习模式，在趣味参与中完成历史认知与精神感悟，以年轻化、数字化的方式传播长征红色文化，为红色教育创新传播提供崭新思路。",
                "titleEn": "Remember & Honor — Retrace the Long March",
                "descriptionEn": "In response to the contemporary demand for inheriting red culture and promoting the Long March spirit, and tackling drawbacks of tedious forms and weak immersion in traditional red education, we develop a digital interactive experience themed on the Long March. Built on Unity engine, the project includes three interactive scenes: firearm simulation, wild vegetable matching game and historical knowledge quiz. Players act as witnesses of the Long March in immersive experience, recalling the arduous marching years through practical operation, fun challenges and knowledge tests, and truly perceive the perseverance and hard-working spirit of revolutionary predecessors. With coherent gamified interaction, the work abandons indoctrination-style learning, helps users gain historical cognition and spiritual comprehension during participatory experience. It spreads the Long March red culture in a youthful and digital way, offering an innovative approach for red education communication.",
                "poster": "./assets/media/vr-2026-projects/posters/project-04.jpg"
          },
          {
                "id": 5,
                "title": "沉浸式心理探索-逃离后室",
                "video": "https://player.bilibili.com/player.html?isOutside=true&aid=116630994551337&bvid=BV1yKGW6zETY&cid=38588711330&p=1",
                "authors": [
                      "邓静远 / Jingyuan Deng",
                      "刘宇 / Yu Liu",
                      "张子坤 / Zikun Zhang",
                      "余晟晨 / Shengchen Yu"
                ],
                "category": "心理恐怖游戏",
                "tags": [
                      "心理恐怖游戏",
                      "沉浸式体验"
                ],
                "description": "当前VR游戏市场以动作射击类为主导，真正聚焦心理沉浸与空间恐惧的体验仍属稀缺。本项目以互联网现象级IP“后室（Backrooms）”为原型，利用虚幻引擎5打造了一款名为《沉浸式心理探索-逃离后室》的VR心理探索游戏。我们旨在突破传统惊吓模式，为玩家提供一种源于空间迷失与未知压迫的深层恐惧体验。项目构建了无限重复、非欧几里得式的异常空间，借助高保真渲染、空间音频（HRTF）以及基于视线与听觉的AI怪物追踪系统，实现了高度沉浸的感官包围。玩家在有限光源下进行探索，其行为与视线将动态影响环境变化与怪物反应。本作品不仅是游戏设计实践，更试图为人类空间认知、恐惧心理研究提供实验载体，推动VR在沉浸叙事与交互设计方向的新探索。",
                "titleEn": "Immersive Psychological Exploration — Escape the Backrooms",
                "descriptionEn": "The current VR gaming market is dominated by action and shooter genres, while experiences truly focused on psychological immersion and spatial horror remain scarce. This project takes the internet phenomenon \"The Backrooms\" as its prototype, using Unreal Engine 5 to create a VR psychological exploration game titled Immersive Psychological Exploration — Escape the Backrooms. We aim to move beyond traditional jump scares, offering players a deep fear experience rooted in spatial disorientation and the oppression of the unknown. The project constructs an infinitely repetitive, non-Euclidean anomalous space, achieving highly immersive sensory envelopment through high-fidelity rendering, spatial audio (HRTF), and an AI monster tracking system based on vision and hearing. Players explore under limited light sources, with their behavior and gaze dynamically influencing environmental changes and monster reactions. This work is not only a game design practice, but also seeks to serve as an experimental vehicle for research on human spatial cognition and fear psychology, advancing new explorations in VR immersive narrative and interaction design.",
                "poster": "./assets/media/vr-2026-projects/posters/project-05.jpg"
          },
          {
                "id": 6,
                "title": "调酒体验",
                "video": "https://player.bilibili.com/player.html?isOutside=true&aid=116633091768993&bvid=BV1WYG46UEiZ&cid=38593955088&p=1",
                "authors": [
                      "王昊涵 / Haohan Wang",
                      "黄钶然 / Keran Huang",
                      "郑盛涵 / Shenghan Zheng",
                      "雷雨欣 / Yuxin Lei"
                ],
                "category": "文化体验",
                "tags": [
                      "文化体验",
                      "沉浸式体验"
                ],
                "description": "传统调酒学习存在实操门槛高、耗材成本大、安全限制多、练习场景受限等问题，新手难以低成本安全掌握调酒技能。本项目打造沉浸式 VR 虚拟调酒系统，构建数字化虚拟酒吧，为用户提供零耗材、无风险、可反复练习的调酒实训平台。系统基于UE5.3引擎开发，搭配 Pico VR 设备实现逼真交互，通过物理引擎与流体模拟算法，还原量酒、摇荡、滤冰、定型等完整调酒流程。用户可沉浸式学习配方、练习手法，兼具娱乐体验与职业培训价值，有效弥补传统调酒学习的实践短板。",
                "titleEn": "Mixology experience",
                "descriptionEn": "The traditional learning of cocktail mixing has problems such as high operational requirements, high cost of consumables, numerous safety restrictions, and limited practice scenarios. Newbies find it difficult to acquire cocktail mixing skills at a low cost and safely. This project creates an immersive VR virtual cocktail mixing system, builds a digital virtual bar, and provides users with a zero-consumable, risk-free, and repeatable practice platform for cocktail mixing training. The system is developed based on the UE5.3 engine and is combined with Pico VR devices to achieve realistic interaction. Through the physical engine and fluid simulation algorithms, it reproduces the complete cocktail mixing process including measuring the liquor, shaking, filtering ice, and shaping. Users can immerse themselves in learning recipes and practicing techniques, combining entertainment experience with vocational training value, effectively compensating for the practical shortcomings of traditional cocktail mixing learning.",
                "poster": "./assets/media/vr-2026-projects/posters/project-06.jpg"
          },
          {
                "id": 7,
                "title": "曲觞·千古游",
                "video": "https://player.bilibili.com/player.html?isOutside=true&aid=116629988050879&bvid=BV1A2GH6vEum&cid=38584583556&p=1",
                "authors": [
                      "廖烽尧 / Fengyao Liao",
                      "邱睿 / Rui Qiu",
                      "周乐凡 / Lefan Zhou",
                      "钟星倩 / Xingqian Zhong"
                ],
                "category": "文化",
                "tags": [
                      "文化",
                      "沉浸式体验"
                ],
                "description": "在当前语言文化教育中，传统诗词教学多依赖单向文本讲授与机械记忆，缺乏场景化交互与沉浸式文化体验，难以激发学习者的文化共情与主动学习意愿。为解决这一痛点，本项目开发了以古代 “曲水流觞” 雅集为内核的 VR 沉浸式诗词学习系统。系统依托 Unity 引擎构建高还原度虚拟场景，实现以觞为载体的第一人称交互模式：学习者以觞的视角沿曲水顺流漂流，与沿途虚拟诗人开展诗词主题选择题互动。通过具身认知机制将诗词知识与文化场景深度绑定，打破传统教学的体验壁垒，在低压力虚拟环境中有效提升学习者的诗词理解深度与文化感知能力。",
                "titleEn": "Rivers of Verse, Goblets of Time",
                "descriptionEn": "In current language and cultural education, traditional poetry teaching, over-reliant on one-way text-based instruction and rote memorization, lacks scenario-based interaction and immersive cultural experiences, failing to foster learners’ cultural empathy and intrinsic learning motivation.To address this pain point, this project develops a VR immersive poetry learning system rooted in the ancient Chinese literati tradition of Qushui Liushang (the floating-cup poetry gathering ritual).Powered by the Unity engine, the system builds highly realistic virtual environments and adopts a cup-centered first-person interaction mode: learners navigate the winding stream from the wine cup’s perspective, engaging in poetry-themed multiple-choice interactions with virtual poets along the route.Through embodied cognition, it deeply integrates poetry knowledge with cultural contexts, breaking the experiential barriers of traditional teaching and effectively enhancing learners’ in-depth poetry comprehension and cultural perception in a low-pressure virtual setting.",
                "poster": "./assets/media/vr-2026-projects/posters/project-07.jpg"
          },
          {
                "id": 8,
                "title": "看见·非凡——冬残奥运动项目VR体验项目",
                "video": "https://player.bilibili.com/player.html?isOutside=true&aid=116630474528712&bvid=BV15CGn6mEEo&cid=38586944345&p=1",
                "authors": [
                      "常天悦 / Tianyue Chang",
                      "郭明轩 / Mingxuan Guo",
                      "李如一 / Ruyi Li",
                      "王思媛 / Siyuan Wang"
                ],
                "category": "运动游戏",
                "tags": [
                      "运动游戏",
                      "沉浸式体验"
                ],
                "description": "本项目基于Unity与Pico VR设备，沉浸式模拟残奥越野滑雪、轮椅冰壶、冬季两项、三项冬残奥核心运动。通过手柄动作映射、头部位姿检测与触觉反馈技术，真实还原运动员在坐姿滑雪、轮椅投壶、卧姿射击等场景中的发力方式与平衡挑战。玩家需依靠上肢摆臂驱动前进、头部转向控制方向、体态调整应对弯道离心力，在“肢体受限”的虚拟角色中，切身感受残奥选手对核心肌群与稳定性的极致依赖。项目填补了残奥题材VR体验的市场空白，以创新的科普形式打破认知壁垒，传递自强不息、平等包容的残奥精神。",
                "titleEn": "Seeing the Extraordinary — A VR Journey into Winter Paralympic Sports",
                "descriptionEn": "This project, built on Unity and Pico VR devices, immersively simulates three core Winter Paralympic sports: Paralympic cross-country skiing, wheelchair curling, and biathlon. Through motion mapping via hand controllers, head pose detection, and haptic feedback technology, it authentically reproduces the ways athletes exert force and maintain balance in scenarios such as seated skiing, wheelchair curling delivery, and prone shooting. Players must rely on upper body arm swings to propel forward, head turns to steer, and posture adjustments to counteract centrifugal forces on curves. By inhabiting a virtual character with \"limited mobility,\" players deeply experience the extreme reliance of Paralympic athletes on core muscles and stability. This project fills a market gap in VR experiences themed around the Paralympics, breaks down cognitive barriers through an innovative form of science popularization, and conveys the resilient, inclusive, and equal-spirited Paralympic values.",
                "poster": "./assets/media/vr-2026-projects/posters/project-08.jpg"
          },
          {
                "id": 9,
                "title": "VR-GarbageSort：沉浸式垃圾分类虚拟现实训练游戏",
                "video": "https://player.bilibili.com/player.html?isOutside=true&aid=116631212659051&bvid=BV1QXGp6EEkh&cid=38589105051&p=1",
                "authors": [
                      "董子晨 / Zichen Dong",
                      "赵庆典 / Qingdian Zhao",
                      "沈郑轩 / Zhengxuan Shen",
                      "张奕朗 / Yilang Zhang"
                ],
                "category": "游戏化环保教育",
                "tags": [
                      "游戏化环保教育",
                      "环境保护",
                      "教育培训"
                ],
                "description": "本项目开发了一款基于 Unity 的沉浸式垃圾分类 VR 训练游戏 VR-GarbageSort。针对传统图文宣传交互性弱、反馈滞后、难以形成行为记忆的问题，项目将垃圾分类学习转化为“观察—抓取—判断—投放—反馈”的具身交互流程。用户在虚拟场景中通过 VR 手柄完成垃圾抓取与投放，并根据系统反馈不断修正分类行为。系统集成 XR Interaction Toolkit、PICO Unity SDK 与 OpenXR，实现了传送带生成、手柄抓取投掷、分类判定、得分系统、Combo 连击、Buff/Debuff 随机事件以及多模态反馈机制。项目旨在探索 VR 手部交互、即时反馈与游戏化激励机制在垃圾分类教育中的应用潜力，为未来公共教育和行为训练类 VR 系统提供参考。",
                "titleEn": "VR-GarbageSort: An Immersive VR Training Game for Waste Sorting Education",
                "descriptionEn": "This project presents VR-GarbageSort, an immersive VR training game for waste sorting education developed with Unity. Users grab, judge, and throw waste items into the correct bins in a virtual environment, receiving real-time visual, audio, and haptic feedback. The system includes waste generation, conveyor belt movement, sorting judgment, scoring, combo incentives, Buff/Debuff events, and multimodal feedback. This project explores how VR interaction and gamified feedback can make waste sorting learning more engaging and intuitive.",
                "poster": "./assets/media/vr-2026-projects/posters/project-09.jpg"
          },
          {
                "id": 10,
                "title": "Trace：一只流浪狗的独白",
                "video": "https://player.bilibili.com/player.html?isOutside=true&aid=116624652765324&bvid=BV1qSG665EqL&cid=38561515708&p=1",
                "authors": [
                      "彭嘉和 / Jiahe Peng",
                      "罗静蕾 / Jinglei Luo",
                      "齐拓达 / Tuoda Qi",
                      "何昊睿 / Haorui He"
                ],
                "category": "情感叙事",
                "tags": [
                      "情感叙事",
                      "沉浸式体验"
                ],
                "description": "针对当下流浪狗保护与收养的社会议题，对应弃养与流浪现象、城市环境中的生存困境以及人与动物关系的失衡等痛点，我们开发了一款体验流浪狗城市生存为主题的VR游戏。《Trace》是一款以流浪狗第一视角展开的沉浸式游戏，玩家将作为流浪狗穿梭于城市的各个角落，在无拘无束的探索中，见证人间的冷暖与百态：既有小贩老板的善意留食、施工工人的友善陪伴、和同类朋友的愉快玩耍等温暖瞬间，也有被店长驱赶、路人欺凌、住户排斥等残酷经历。当流浪狗历经所有悲欢，疲惫地趴在街角花坛边时，抬头望见的模糊人类影子，构成了充满想象的开放式结局，游戏以细腻的视角传递对流浪动物的关注与共情，讲述一段关于生存、陪伴与未知的温柔故事。",
                "titleEn": "Trace: A Stray Dog's Soliloquy",
                "descriptionEn": "In response to the current social issues surrounding the protection and adoption of stray dogs—including abandonment, homelessness, the challenges of survival in urban environments, and the imbalance in human-animal relationships—we have developed a VR game that lets players experience the urban survival of a stray dog. *Trace* is an immersive game played from the first-person perspective of a stray dog. Players take on the role of a stray, roaming every corner of the city and witnessing the full spectrum of human kindness and cruelty through unrestricted exploration: There are heartwarming moments—such as a street vendor kindly leaving food, a construction worker offering friendly companionship, and joyful play with fellow dogs—as well as cruel experiences like being chased away by a shop owner, bullied by passersby, and rejected by residents. When the stray dog, having experienced all these joys and sorrows, lies exhausted by a street corner flower bed, the blurry human silhouette glimpsed upon looking up forms an open-ended conclusion rich with imagination. Through its delicate perspective, the game conveys concern and empathy for stray animals, telling a tender story of survival, companionship, and the unknown.",
                "poster": "./assets/media/vr-2026-projects/posters/project-10.jpg"
          },
          {
                "id": 11,
                "title": "逆流：守望星河",
                "video": "https://youtube.com/watch?v=7tGPrURekm0&si=pDNxgHhlRqIII3lx",
                "authors": [
                      "欧阳柯奕 / Ouyang K e yi",
                      "郑超越 / Zheng Chaoyue",
                      "孙阳 / Sun Yang",
                      "杨寰举 / Yang Huanju"
                ],
                "category": "环境保护",
                "tags": [
                      "环境保护"
                ],
                "description": "《逆流：守望星河》是一款聚焦海洋生态保护的叙事向生存冒险游戏。本项目以“光污染对海龟幼崽的影响”为核心议题，创新性地构建了“定向力”生存机制，将科普知识深度融入玩法设计。 在游戏中，玩家将扮演一只刚破壳的小海龟，在危机四伏的沙滩上踏上一场向死而生的归海之旅。人造光源会不断消耗海龟的定向力，玩家需巧妙利用岩石、浪花等自然掩体躲避探照灯的干扰，并克服塑料垃圾等物理障碍。 项目采用极具艺术张力的剪影美学风格，旨在通过紧张刺激的生存挑战与真实的数据科普，唤起大众对海洋光污染问题的关注。我们期望以游戏为载体，让每一次操作都成为对自然生命的深情守望，传递“敬畏自然，守护蔚蓝”的核心理念。",
                "titleEn": "Against the current:Gardians of the galaxy",
                "descriptionEn": "\"Against the Current: Guardians of the Galaxy\" is a narrative-driven survival adventure game centered on marine ecological conservation. Focusing on the core issue of \"the impact of light pollution on baby sea turtles,\" the project innovatively builds a \"Directional Force\" survival mechanic, deeply integrating scientific knowledge into the gameplay design. In the game, players take on the role of a newly hatched baby sea turtle, embarking on a life-and-death journey back to the sea across a perilous beach. Artificial light sources constantly drain the turtle's directional force. Players must cleverly use natural covers like rocks and waves to evade the interference of searchlights while overcoming physical obstacles such as plastic waste. Featuring a highly artistic silhouette aesthetic, the project aims to raise public awareness of marine light pollution through thrilling survival challenges and real-world data. We hope to use the game as a medium, making every interaction a heartfelt vigil for natural life, and conveying the core philosophy of \"Revering Nature, Protecting the Blue.\"",
                "poster": "./assets/media/vr-2026-projects/posters/project-11.jpg"
          },
          {
                "id": 12,
                "title": "消防安全教育科普基地沉浸式体验系统设计与实现",
                "video": "https://player.bilibili.com/player.html?isOutside=true&aid=116627941101874&bvid=BV1F4GE6DEZD&cid=38573049064&p=1",
                "authors": [
                      "童恺喻 / Tong Kaiyu",
                      "王士轩 / Wang Shixuan",
                      "刁炳轩 / Diao Bingxuan",
                      "徐硕基 / Xu Shuoji"
                ],
                "category": "安全教育",
                "tags": [
                      "安全教育",
                      "沉浸式体验"
                ],
                "description": "本项目面向消防安全教育科普基地，设计并实现了一套“学、练、评”一体化的沉浸式VR体验系统。系统采用“视频教学 + 模拟逃生体验 + 结果反馈”的闭环结构：用户首先通过前置视频学习消防基础知识，随后进入由Unity引擎构建的虚拟火灾场景中进行逃生实操，系统全程记录用户行为，并最终给出评分与问题反馈，帮助用户强化知识记忆、纠正错误行为。 在技术实现上，项目构建了教学内容层、虚拟场景层与交互逻辑层三层架构，支持危险事件触发、用户移动与视角控制、任务判定与评估反馈等核心功能。系统突破了传统消防教育中被动观看、缺乏互动与反馈的局限，具备沉浸感强、可重复训练、行为可评估等优势，适用于科普基地、学校、社区及企业等多种安全培训场景，为消防安全教育提供了一种低成本、高效率、高安全性的创新解决方案。",
                "titleEn": "Design and Implementation of the Immersive Experience System for Fire Safety Education and Publicity Base",
                "descriptionEn": "This project designs and implements an immersive VR experience system for fire safety education and science popularization bases, integrating “learning, practice, and evaluation” into a unified framework. The system adopts a closed-loop structure consisting of video-based instruction, simulated escape training, and performance feedback. Users first learn foundational fire safety knowledge through pre-recorded videos, then enter a virtual fire scene built with the Unity engine to practice evacuation procedures. The system records user actions throughout the process and provides a final score with detailed feedback, helping users reinforce knowledge and correct mistakes. Technically, the project features a three-layer architecture: content delivery, virtual environment, and interaction logic. Core functions include hazard event triggering, user movement and view control, task evaluation, and feedback generation. By addressing the limitations of traditional fire safety education—such as passive viewing and lack of interaction and feedback—this system offers strong immersion, repeatable training, and measurable behavioral outcomes. It is suitable for various scenarios, including science bases, schools, communities, and corporate safety training. Overall, the project provides an innovative, low-cost, high-efficiency, and safe solution for fire safety education.",
                "poster": "./assets/media/vr-2026-projects/posters/project-12.jpg"
          },
          {
                "id": 13,
                "title": "Echo Forest—VR自然疗愈音游",
                "video": "https://player.bilibili.com/player.html?isOutside=true&aid=116633192371876&bvid=BV1FkG46kEyu&cid=38594808008&p=1",
                "authors": [
                      "魏聪颖 / Congying Wei",
                      "王嘉楠 / Jianan Wang",
                      "陈悦希 / Yuexi Chen",
                      "缪环宇 / Huanyu Miao"
                ],
                "category": "音乐疗愈",
                "tags": [
                      "音乐疗愈",
                      "自然疗愈"
                ],
                "description": "在高强度学习与工作的压力下，许多年轻人面临情绪紧绷、压力累积等问题，而传统音乐游戏多强调快速反应和高刺激反馈，容易带来额外负担。为此，本项目开发了一款面向情绪放松体验的 VR 自然疗愈音乐游戏: Echo Forest。项目基于 Unity 与 PICO VR 平台开发，旨在营造轻量、沉浸、低压力的节奏体验。用户可通过左右手柄触碰对应颜色的音符光球，并在长音符中持续跟随轨迹完成连续动作。技术上，项目自研可视化 Track 谱面编辑插件，实现谱面数据驱动的音符生成、VR 空间映射与实时命中判定，探索 VR 技术在音乐交互与疗愈体验融合中的应用可能。",
                "titleEn": "Echo Forest — A VR Nature-Healing Music Game",
                "descriptionEn": "Under the pressure of intense study and work, many young people experience emotional tension and accumulated stress. However, traditional music games often emphasize fast reactions and highly stimulating feedback, which can create an additional burden. To address this issue, this project develops Echo Forest, a VR nature-healing music game designed for emotional relaxation. Developed with Unity for the PICO VR platform, the project aims to create a lightweight, immersive, and low-pressure rhythm experience. Users interact with the game by using the left and right controllers to touch note orbs of corresponding colors, and by continuously following the trajectory of long notes to complete sustained actions. Technically, the project features a self-developed visual Track chart-editing plugin, enabling data-driven note generation, VR spatial mapping, and real-time hit detection. Through this approach, the project explores the potential of integrating VR technology with music interaction and therapeutic relaxation experiences.",
                "poster": "./assets/media/vr-2026-projects/posters/project-13.jpg"
          },
          {
                "id": 14,
                "title": "地下室手记",
                "video": "https://player.bilibili.com/player.html?isOutside=true&aid=116626917693973&bvid=BV1wJGj6mEwQ&cid=38568200300&p=1",
                "authors": [
                      "梁恩嘉 / Jason",
                      "马靖尧 / Ma",
                      "孔子恒 / Leo",
                      "陈梓烨 / CZY"
                ],
                "category": "心理恐怖",
                "tags": [
                      "心理恐怖",
                      "家庭压抑"
                ],
                "description": "许多关于家庭暴力与儿童心理创伤的议题，往往停留在新闻或文字层面，玩家难以真正代入受害者的情绪与压迫感。本项目希望利用 VR 强沉浸式体验，让玩家以“孩子”的视角进入扭曲梦境般的地下室，在探索与逃离过程中感受恐惧、压抑与无助。 项目的核心目标并非单纯制造惊吓，而是通过环境叙事、互动探索与心理恐怖氛围，让玩家更直观地理解家庭暴力对儿童长期心理健康造成的影响，并呼吁社会关注相关问题",
                "titleEn": "D.T.",
                "descriptionEn": "This VR horror demo explores the psychological trauma caused by domestic violence through the perspective of a child trapped inside a nightmare-like basement. Instead of focusing only on traditional horror elements, the project aims to create an emotionally immersive experience that conveys fear, helplessness, and emotional isolation through environmental storytelling, interactive exploration, and oppressive atmosphere design. Many discussions about child abuse and domestic violence remain distant to audiences when presented only through text or media reports. By using VR’s strong sense of presence and immersion, this project allows players to directly experience the distorted memories and emotional pressure carried by a traumatized child. The goal of the project is not simply to scare players, but to raise awareness of children’s mental health issues and encourage greater attention toward the long-term psychological impact of domestic violence.",
                "poster": "./assets/media/vr-2026-projects/posters/project-14.jpg"
          },
          {
                "id": 15,
                "title": "画中人：梵高的卧室",
                "video": "https://player.bilibili.com/player.html?isOutside=true&aid=116627924391298&bvid=BV1JbGE6JEpf&cid=38572983405&p=1",
                "authors": [
                      "于游游 / Youyou Yu",
                      "肖昱鑫 / Yuxin Xiao",
                      "翟晨欣 / Cenxin Zhai",
                      "杨书檬 / Shumeng Yang"
                ],
                "category": "沉浸式体验",
                "tags": [
                      "沉浸式体验",
                      "文化"
                ],
                "description": "《画中人：梵高的卧室》是一款VR沉浸式艺术体验项目，其创作目的是让观众更深入地了解梵高本人以及画作背后的故事。观众将走进梵高《卧室》第二版的三维重建空间，与椅子、画架、枕头等五件物品交互，触发梵高对话并收集记忆碎片。五枚碎片拼合为自画像后，结尾独白揭示梵高与高更的往事。体验从平静到不安，让艺术欣赏从“观看”变为“居住”。",
                "titleEn": "The person in the painting: Van Gogh's bedroom",
                "descriptionEn": "\"The Man in the Painting: Van Gogh's Bedroom\" is an immersive VR art experience designed to help audiences gain a deeper understanding of Vincent van Gogh himself and the stories behind his paintings. Viewers step into a three-dimensional reconstruction of the second version of Van Gogh’s Bedroom, where they can interact with five objects—including a chair, an easel, and a pillow—triggering conversations with Van Gogh and collecting fragments of memory. Once the five fragments are assembled into a self-portrait, a final monologue reveals Van Gogh’s past with Gauguin. The experience shifts from tranquility to unease, transforming art appreciation from “viewing” into “inhabiting.”",
                "poster": "./assets/media/vr-2026-projects/posters/project-15.jpg"
          },
          {
                "id": 16,
                "title": "快艇追击： 破浪狂飙",
                "video": "https://player.bilibili.com/player.html?isOutside=true&aid=116628310203045&bvid=BV1hpG76eEeq&cid=38575210519&p=1",
                "authors": [
                      "张宸铭 / Chenming Zhang",
                      "丁炫公 / Xuangong Ding",
                      "石艾宜 / Aiyi Shi",
                      "屈鑫源 / Xinyuan Qu"
                ],
                "category": "运动游戏",
                "tags": [
                      "运动游戏",
                      "动态游戏"
                ],
                "description": "《快艇追击：破浪狂飙》是一款基于 Unity 与 PICO XR 开发的 VR 海上追击游戏原型。玩家扮演海上执法人员，坐在快艇驾驶舱中，通过右手柄控制油门、左手柄控制刹车，并握住双手柄模拟方向盘转向，在高速海面环境中追击 AI 走私船。项目核心目标是将传统载具竞速玩法转化为更具身体参与感的 VR 沉浸式交互体验。系统实现了快艇驾驶、实时距离显示、AI 目标逃逸、近距离抓捕进度判定与成功反馈等完整流程。当玩家持续保持在目标船一定距离内时，抓捕进度会上升，达到 100% 后触发任务成功。项目重点展示了 VR 双手驾驶交互、海上追逃节奏控制与游戏闭环设计。",
                "titleEn": "VR Maritime Chase Experience",
                "descriptionEn": "WavePursuit VR is a Unity and PICO XR-based virtual reality maritime chase prototype. In this project, the player acts as a maritime law enforcement officer driving a speedboat to pursue an AI-controlled smuggling boat. Instead of using traditional joystick controls, the game maps VR controller inputs to an embodied driving experience: the right trigger controls throttle, the left trigger controls braking, and both grip buttons allow the player to hold and rotate a virtual steering wheel. The project aims to transform conventional vehicle-chase gameplay into a more immersive and body-engaged VR interaction. The prototype includes boat control, real-time distance feedback, AI fleeing behavior, close-range capture progress, and mission success feedback. When the player stays close enough to the target boat, the capture progress increases; once it reaches 100%, the mission is completed. The project highlights VR steering interaction, maritime pursuit gameplay, and a complete chase-to-capture game loop.",
                "poster": "./assets/media/vr-2026-projects/posters/project-16.jpg"
          },
          {
                "id": 17,
                "title": "夜巡",
                "video": "https://player.bilibili.com/player.html?isOutside=true&aid=116629736331403&bvid=BV1PfGE6fEBz&cid=38583140582&p=1",
                "authors": [
                      "王丹怡 / Danyi Wang",
                      "白蕴竹 / Yunzhu Bai",
                      "于润泽 / Runze Yu",
                      "卓羽茜 / Yuxi Zhuo"
                ],
                "category": "微恐RPG游戏",
                "tags": [
                      "微恐RPG游戏",
                      "2D平面游戏"
                ],
                "description": "本项目是一款以大学校园为背景的剧情向 RPG 游戏。针对小组作业中常见的沟通失效、责任分配不均与表达困难等问题，游戏将现实压力转化为“里世界”冒险体验。玩家扮演一名设计专业学生，在截止前夜进入异常校园，通过探索地图、躲避怪物、收集物品和阅读纸页，逐步理解主角的心理困境。 游戏基于 RPG Maker MV 制作，利用地图事件、开关变量、图文物品插件和状态切换机制，实现剧情推进、道具收集、怪物躲避与双结局判断。最终，玩家需要决定是否发送那条追责消息。项目希望通过互动叙事，引导玩家关注表达、求助与责任边界的重要性。",
                "titleEn": "Night Seek",
                "descriptionEn": "This project is a narrative RPG set on a university campus. Addressing common issues in group assignments, such as communication breakdowns, unequal task distribution, and difficulty expressing concerns, the game transforms real-life academic pressure into an adventure in an “inner world.” The player takes on the role of a design student who enters an abnormal campus on the night before the deadline. Through map exploration, monster avoidance, item collection, and reading scattered notes, players gradually understand the protagonist’s psychological struggle. The game is developed with RPG Maker MV. By using map events, switches and variables, a visual item-description plugin, and a state-switching mechanism, the project realizes story progression, item collection, monster avoidance, and dual-ending judgment. In the end, the player must decide whether to send the accountability message. Through interactive storytelling, the project aims to encourage players to reflect on the importance of self-expression, seeking help, and setting boundaries in collaborative work.",
                "poster": "./assets/media/vr-2026-projects/posters/project-17.jpg"
          },
          {
                "id": 18,
                "title": "治愈农场",
                "video": "https://player.bilibili.com/player.html?isOutside=true&aid=116630692563913&bvid=BV1wWGn6hEz5&cid=38587731704&p=1",
                "authors": [
                      "刘璨 / Can Liu",
                      "曹楚檬 / Chumeng Cao",
                      "操谨忆 / Jinyi Cao",
                      "王美涵 / Meihan Wang"
                ],
                "category": "治愈疗愈",
                "tags": [
                      "治愈疗愈",
                      "教育"
                ],
                "description": "《治愈农场》是一款以“治愈”为核心的VR体验游戏。在快节奏的都市生活中，人们渴望一片宁静的田园。本项目通过VR技术构建低多边形风格的温暖农场，让用户以第一人称视角沉浸其中，与羊、猪、马、牛、鸡六种动物展开互动。游戏设计了六大农场劳作：剪羊毛、清洗小猪、给马刷毛、割小麦、挤牛奶、捡鸡蛋。其中包含触碰型与抓取型两种交互方式，每个玩法都精准还原真实动作，并通过手柄震动、动物叫声、工具音效及视觉特效（如羊毛飘落、水珠飞溅、麦秆倒伏）提供多感官反馈。玩家按任务板指引逐步完成所有任务后，动物们会围聚过来，响起轻松愉悦的庆祝音乐。游戏无时间限制、无压力判定，用户可按自己节奏体验“从劳作到收获”的满足感。它既为成年人提供解压出口，也为孩子打开认识农业的窗口，成为数字时代里一片可随身携带的宁静农场。",
                "titleEn": "Healing Farm",
                "descriptionEn": "Virtual Farm is a VR experience game centered on healing. Amid fast-paced urban life, people yearn for peaceful countryside scenery. This project adopts VR technology to build a warm low-poly style farm. Players immerse themselves in the first-person perspective and interact with six kinds of animals: sheep, pigs, horses, cattle and chickens. The game features six farm chores: shearing sheep, washing piglets, brushing horses, harvesting wheat, milking cows and collecting eggs. It supports two interaction modes: touching and grabbing. All gameplay faithfully simulates real-life movements. Multi-sensory feedback is delivered via controller vibration, animal sounds, tool sound effects and visual effects such as falling wool, splashing water and bending wheat stalks. After players finish all tasks following the task list, animals will gather around with cheerful celebratory music playing. There is no time limit or stress evaluation. Players can enjoy a fulfilling journey from farming to harvest at their own pace. The game relieves stress for adults and helps children learn about agriculture. It serves as a portable peaceful farm in the digital era.",
                "poster": "./assets/media/vr-2026-projects/posters/project-18.jpg"
          },
          {
                "id": 19,
                "title": "好久不见",
                "video": "https://www.youtube.com/embed/xCh02KxLiUg?si=Lkh1nNUps3EV2yk9",
                "authors": [
                      "游坤 / You Kun",
                      "张子扬 / Zhang Ziyang",
                      "赵宜欣 / Zhao Yixin",
                      "王晨曦 / Wang Chenxi"
                ],
                "category": "人文关怀",
                "tags": [
                      "人文关怀",
                      "科技向善"
                ],
                "description": "《好久不见》是一款基于 PICO VR 开发的视障出行沉浸式体验项目 。面对全球逾22亿视力受损人群的出行困境 ，本项目旨在从单纯的“物理导盲”迈向深层的“认知重塑” 。项目构建了家、街道与公园三大连续场景 。体验核心围绕“有限视觉下的空间探索”展开 ：体验者无法纵览全貌，必须依赖基于距离的实时动态遮罩、射线命中物体时的发光反馈，以及盲道局部显现与盲杖敲击音效来建立对空间的感知 。每一次移动与探索都会触发多感官反馈，引导体验者在未知中逐步理解周围环境 。这不仅仅是一次感官模拟，更是无障碍环境的设计与验证工具 。通过第一视角还原低视力状态下的空间不确定性 ，本项目帮助设计师深切共情，发现空间与导视系统中的痛点 ，进而推动打造更加包容、追求“零摩擦”体验的公共空间设计 。",
                "titleEn": "Beyond the Seen",
                "descriptionEn": "\"Beyond the Seen\" is an immersive VR mobility experience for the visually impaired, developed on the PICO platform. Addressing the mobility challenges faced by over 2.2 billion visually impaired individuals worldwide, this project aims to transition from basic \"physical navigation\" to a deeper \"cognitive reshaping.\" The project constructs three continuous environments: a home, a street, and a park. The core experience centers on \"spatial exploration under limited vision.\" Users cannot view the entire environment at once; instead, they must build their spatial awareness relying on distance-based real-time dynamic masks, glowing feedback when raycasts hit objects, and localized reveals of tactile paving paired with the sound of a tapping cane. Every movement and exploratory action triggers multi-sensory feedback, guiding the user to gradually comprehend their surroundings amidst the unknown. This is more than just a sensory simulation; it serves as a design and validation tool for accessible environments. By recreating the spatial uncertainty of low-vision conditions from a first-person perspective, the project enables designers to cultivate deep empathy and identify pain points in physical spaces and wayfinding systems. Ultimately, it drives the creation of more inclusive public space designs that strive for a \"zero-friction\" experience.",
                "poster": "./assets/media/vr-2026-projects/posters/project-19.jpg"
          },
          {
                "id": 20,
                "title": "未命名项目 20",
                "video": "",
                "authors": [
                      "邱若瑜 / Ruoyu Qiu",
                      "龚杰 / Jie Gong",
                      "宋澄宇 / Chengyu Song",
                      "徐智明 / Zhiming Xu"
                ],
                "category": "沉浸式体验",
                "tags": [
                      "沉浸式体验",
                      "物理模拟"
                ],
                "description": "一款注重太空场景叙事的游戏，玩家可以分别在两个场景内进行自由的探索，从太空站内部感受独特的建筑氛围美感，或是享受在太空中自由探索翱翔的感觉。本项目在场景搭建，美术氛围营造和物理系统模拟上花费了较大的精力，部分素材均为我们独立建模，同时使用了一系列蓝图模拟以及精确的天文计算来简单的还原了万有引力",
                "descriptionEn": "A game that focuses on space scene storytelling. Players can freely explore in two different scenarios. They can experience the unique architectural atmosphere of the space station from within, or enjoy the feeling of freely exploring and soaring in space. This project has invested a lot of effort in scene construction, creating the artistic atmosphere, and simulating the physical system. Some of the materials were independently modeled by us, and a series of blueprints and precise astronomical calculations were used to simply restore the law of universal gravitation."
          },
          {
                "id": 21,
                "title": "中国古代插花艺术体验",
                "video": "https://player.bilibili.com/player.html?isOutside=true&aid=116627890836525&bvid=BV1nxGE6HEmv&cid=38572917931&p=1",
                "authors": [
                      "李涵瑞 / Li Hanrui",
                      "常君楷 / Chang Junkai",
                      "冯帆 / Feng Fan",
                      "翟天泽 / Zhai Tianze"
                ],
                "category": "文化",
                "tags": [
                      "文化"
                ],
                "description": "本项目以传统中国插花（TCFA）为核心案例，探索利用虚幻引擎（UE）支持非物质文化遗产日常学习与实践的设计策略。中国插花深植于传统哲学、文学与审美体系，其造型原则与技艺体现了儒家仁爱、自然和谐与简约含蓄的文化精神。然而，插花学习依赖木本植物、中国式花器等特定材料与工具，成本较高且获取受限，影响了学习者的持续练习。通过在UE中构建虚拟插花场景，项目能够模拟材料选择、空间构图、器物搭配与审美判断过程，为学习者提供低成本、可重复、沉浸式的实践环境，从而促进传统插花技艺与文化内涵的传承。",
                "titleEn": "The experience of traditional Chinese flower arrangement art",
                "descriptionEn": "This project takes traditional Chinese flower arrangement (TCFA) as the core case, exploring the design strategies of using Unreal Engine (UE) to support the daily learning and practice of intangible cultural heritage. Chinese flower arrangement is deeply rooted in traditional philosophy, literature and aesthetic systems. Its shaping principles and techniques embody the cultural spirit of Confucian benevolence, natural harmony and simplicity and subtlety. However, flower arrangement learning relies on specific materials and tools such as woody plants and Chinese-style flower containers, which are costly and difficult to obtain, affecting the continuous practice of learners. By constructing virtual flower arrangement scenes in UE, the project can simulate the process of material selection, spatial composition, object pairing and aesthetic judgment, providing learners with a low-cost, repeatable and immersive practice environment, thereby promoting the inheritance of traditional flower arrangement skills and cultural connotations.",
                "poster": "./assets/media/vr-2026-projects/posters/project-21.jpg"
          },
          {
                "id": 22,
                "title": "怡园游",
                "video": "https://player.bilibili.com/player.html?isOutside=true&aid=116633074927243&bvid=BV1NbG46HEZq&cid=38594153123&p=1",
                "authors": [
                      "韦夏雨 / Wei Xiayu",
                      "方廷豪 / Fang Tinghao",
                      "陈李盟 / Chen Limeng",
                      "迟浩岳 / Chi Haoyue"
                ],
                "category": "文化",
                "tags": [
                      "文化",
                      "沉浸式体验"
                ],
                "description": "针对传统线下园林游览受时空限制、且传统导览缺乏深度互动的痛点，我们团队基于 Unreal Engine 引擎开发了这款数字文旅小游戏。在分工上，团队成员紧密配合，共同完成了场景美术复刻、UI界面设计以及核心游览逻辑的开发。项目的核心目标是打破枯燥的单向说教，利用数字化交互技术将苏州怡园的历史底蕴与造园美学融为一体，为用户带来足不出户、深度沉浸且兼具趣味性的园林游览新体验",
                "titleEn": "Enjoy a stroll in Yiyuan Park",
                "descriptionEn": "In response to the pain points of traditional offline garden tours being limited by time and space, and the lack of deep interaction in traditional guides, our team has developed this digital cultural tourism mini game based on the Unreal Engine engine. In terms of division of labor, team members worked closely together to complete the development of scene art replication, UI interface design, and core tour logic. The core goal of the project is to break the monotony of one-way preaching and use digital interactive technology to integrate the historical heritage of Suzhou Yiyuan with garden aesthetics, bringing users a new experience of garden tourism that is both immersive and fun without leaving home",
                "poster": "./assets/media/vr-2026-projects/posters/project-22.jpg"
          },
          {
                "id": 23,
                "title": "反诈先锋",
                "video": "https://www.youtube.com/embed/B7naWtXZv40?si=jA7HX6ZzmJiLUXi-",
                "authors": [
                      "周子涵 / Zihan Zhou",
                      "陈景洋 / Jingyang Chen",
                      "吴俊豪 / Junhao Wu",
                      "吴婧宁 / Jingning Wu"
                ],
                "category": "反诈骗",
                "tags": [
                      "反诈骗",
                      "教育"
                ],
                "description": "这是一款面向数字时代风险教育的反诈骗剧情游戏。作品以沉浸式交互、线索推理和多结局叙事为核心，将深度伪造语音、数字身份冒用、职务权限滥用、信息篡改等新型诈骗手段转化为可体验的游戏情境。玩家不再被动接受反诈知识，而是在对话、搜证、信息比对和技术分析中主动识别风险、建立判断。游戏希望通过低门槛的交互方式，提升公众对企业安全、数字信任和AI诈骗的警觉性，帮助玩家理解：在技术快速发展的背景下，反诈骗不仅是个人防范问题，也关系到组织流程、数据安全和社会信任体系的建设。",
                "titleEn": "Anti-Fraud Pioneer",
                "descriptionEn": "This is an anti-fraud narrative game aimed at risk education in the digital age. The work centers on immersive interaction, clue-based reasoning, and multiple endings storytelling, transforming new types of scam methods such as deepfake voices, digital identity theft, abuse of job authority, and information tampering into experiential game scenarios. Players are no longer passive recipients of anti-fraud knowledge; instead, they actively identify risks and develop judgments through dialogue, evidence collection, information comparison, and technical analysis. The game aims to enhance public awareness of corporate security, digital trust, and AI fraud through low-threshold interactions, helping players understand that in the context of rapidly advancing technology, anti-fraud is not only a matter of personal prevention but also relates to organizational processes, data security, and the construction of social trust systems.",
                "poster": "./assets/media/vr-2026-projects/posters/project-23.jpg"
          },
          {
                "id": 24,
                "title": "苏绣数字展馆",
                "video": "https://player.bilibili.com/player.html?isOutside=true&aid=116629685934011&bvid=BV1RzGE6rEws&cid=38582813914&p=1",
                "authors": [
                      "梁启元 / Liang Qiyuan",
                      "乔嘉豪 / Qiao Jiahao",
                      "宣康杰 / Xuan Kangjie",
                      "饶云丹 / Rao Yundan"
                ],
                "category": "文化",
                "tags": [
                      "文化",
                      "苏绣",
                      "数字"
                ],
                "description": "在当前非遗文化传播中，苏绣技艺面临线下体验门槛高、传播形式单一、年轻受众参与度低等瓶颈。为解决这一痛点，本项目开发了一套沉浸式苏绣非遗数字展馆系统。通过构建数字化“虚拟绣坊”与展馆场景，我们旨在为大众提供一个可低成本、随时随地访问的文化体验平台，填补传统非遗传播与年轻受众间的互动鸿沟。系统利用Unity引擎结合3D建模与交互技术，实现了展馆漫游、展品音视频讲解、针法互动演示、知识问答等功能。用户可在无限制的虚拟空间内沉浸式了解苏绣文化，显著提升了文化传播效率与大众参与感，助力苏绣技艺的活态传承。",
                "titleEn": "Digital Exhibition Hall of Suzhou Embroidery",
                "descriptionEn": "In the current dissemination of intangible cultural heritage, Suzhou embroidery craftsmanship faces bottlenecks such as high thresholds for offline experiences, limited forms of communication, and low participation among young audiences. To address this pain point, this project has developed an immersive digital exhibition hall system for Suzhou embroidery intangible cultural heritage. By constructing digital \"virtual embroidery workshops\" and exhibition hall scenes, we aim to provide the public with a low-cost, anytime, anywhere accessible cultural experience platform, bridging the interactive gap between traditional intangible cultural heritage dissemination and young audiences. The system utilizes the Unity engine combined with 3D modeling and interactive technologies to implement functions such as exhibition hall roaming, audio-visual explanations of exhibits, interactive demonstrations of embroidery stitches, and knowledge quizzes. Users can immerse themselves in learning about Suzhou embroidery culture in an unrestricted virtual space, significantly improving the efficiency of cultural dissemination and public participation, and contributing to the living inheritance of Suzhou embroidery craftsmanship.",
                "poster": "./assets/media/vr-2026-projects/posters/project-24.jpg"
          },
          {
                "id": 25,
                "title": "Rhythm Blade 剑舞 —— VR沉浸式剑术音游体验",
                "video": "https://player.bilibili.com/player.html?isOutside=true&aid=116630122201651&bvid=BV1cgGH6FE3K&cid=38586483258&p=1",
                "authors": [
                      "甄筱语 / Zhen Xiaoyu",
                      "徐上 / Xv Shang",
                      "魏筱雪 / Wei Xiaoxue",
                      "闫佳怡 / Yan Jiayi"
                ],
                "category": "文化",
                "tags": [
                      "文化",
                      "传统剑术",
                      "VR音游"
                ],
                "description": "本项目是一款基于Unity引擎与PICO4设备开发的创新型VR音游。作品巧妙融合了传统中华剑术美学与现代音乐节奏玩法，旨在通过高科技手段重现冷兵器格斗的魅力。 在游戏设计上，玩家需佩戴VR手柄化身剑客，跟随律动的音乐节拍，通过做出不同剑术动作，对空间中不同方向飞来的音符进行精准击打。系统内置了专业的动作判定算法，能够实时捕捉玩家的挥剑轨迹、力度与角度，带来极具沉浸感的交互体验。 项目不仅展示了剑术动作、UI交互逻辑及音频可视化等技术实现细节，更探索了“传统文化+体感音游”的可能性，让用户在娱乐中感受剑术文化的独特韵味，是一次技术与文化结合的生动实践。",
                "titleEn": "Rhythm Blade —— Immersive VR Swordsmanship Rhythm Game Experience",
                "descriptionEn": "This project is an innovative VR rhythm game developed based on the Unity engine and PICO 4 devices. It ingeniously blends the aesthetics of traditional Chinese swordsmanship with modern music rhythm gameplay, aiming to reproduce the charm of cold weapon combat through high-tech means. In terms of game design, players wear VR controllers to transform into swordsmen. Following the rhythmic beats of the music, they must perform various sword techniques to accurately strike notes flying from different directions in space. The system features a professional motion judgment algorithm that captures the player's sword-swinging trajectory, force, and angle in real-time, delivering a highly immersive interactive experience. The project not only demonstrates technical implementation details such as sword animations, UI interaction logic, and audio visualization but also explores the potential of \"traditional culture + motion-sensing rhythm games.\" It allows users to appreciate the unique charm of sword culture while being entertained, serving as a vivid practice of combining technology with culture.",
                "poster": "./assets/media/vr-2026-projects/posters/project-25.jpg"
          },
          {
                "id": 26,
                "title": "Trash Quest：基于VR沉浸式交互的垃圾分类与后处理科普游戏设计",
                "video": "https://player.bilibili.com/player.html?isOutside=true&aid=116632638724174&bvid=BV1JfGW6PEMu&cid=38591923453&p=1",
                "authors": [
                      "徐一朵 / Yiduo Xu",
                      "郑好 / Hao Zheng",
                      "陈妍 / Yan Chen",
                      "王俪颐 / Liyi Wang"
                ],
                "category": "游戏化环保教育",
                "tags": [
                      "游戏化环保教育"
                ],
                "description": "随着生活垃圾总量持续增长，垃圾分类已成为城市环境治理与可持续发展的重要议题。近年来，国家持续推进生活垃圾分类制度建设，但传统宣传方式多以海报、文字和被动观看为主，用户虽然“知道分类”，却缺少真实操作与后处理认知，环保教育的参与感与沉浸感仍然不足。基于这一背景，《Trash Quest》尝试以VR沉浸式游戏的形式，将垃圾分类知识转化为可体验、可操作的互动过程。项目通过“双关卡”结构构建完整环保教育闭环：第一关中，玩家在VR街道场景中亲手完成垃圾抓取、判断与投放，在即时反馈中建立分类认知；第二关则进一步延伸至垃圾焚烧厂场景，玩家通过“三轨道传送带”机制选择不同垃圾的处理方式，理解垃圾分类后的处理逻辑与环境影响。项目希望通过游戏化与沉浸式体验，让用户从“被动接受知识”转变为“主动参与环保行为”，增强垃圾分类教育的趣味性与传播力。",
                "titleEn": "Trash Quest: A VR Immersive Educational Game for Waste Classification and Post-treatment Awareness",
                "descriptionEn": "With the continuous growth of urban waste production, waste classification has become an important issue in environmental governance and sustainable development. Although waste-sorting policies and public education campaigns have been widely promoted in recent years, most traditional approaches still rely on posters, text, and passive information delivery. As a result, people may understand the concepts of waste classification but often lack hands-on experience and awareness of post-treatment processes. Trash Quest is a VR immersive educational game that transforms waste classification knowledge into an interactive and experience-driven learning process. Through a two-level gameplay structure, the project creates a complete environmental education loop. In the first level, players enter a virtual urban environment where they physically grab, identify, and sort waste objects with real-time feedback. In the second level, players are introduced to a virtual waste incineration plant and interact with a “three-lane conveyor system” to understand different waste treatment methods and their environmental consequences. By combining VR immersion and gamified interaction, the project aims to encourage users to shift from passive knowledge reception to active environmental participation, making waste classification education more engaging, intuitive, and memorable.",
                "poster": "./assets/media/vr-2026-projects/posters/project-26.jpg"
          },
          {
                "id": 27,
                "title": "超级森林探险",
                "video": "https://player.bilibili.com/player.html?bvid=BV13GGs6sEb5",
                "authors": [
                      "唐梓涵 / Tang Zihan",
                      "杨帆 / Yang Fan",
                      "张烨 / Zhang Ye",
                      "刘思睿 / Liu Sirui"
                ],
                "category": "jrpg",
                "tags": [
                      "jrpg",
                      "友情"
                ],
                "description": "《超级森林探险》是一款经典回合制JRPG。游戏以奇幻森林为舞台，玩家将化身勇敢骑士，踏上寻觅失踪公主、探索秘境宝藏的冒险之旅。在层层深入的森林探险中，你将邂逅各路伙伴、组建冒险队伍，同时迎战史莱姆、野猪等各式森林妖怪，凭借策略回合战斗突破重重难关，揭开森林深处的隐秘真相。",
                "titleEn": "Super Forest Adventure",
                "descriptionEn": "Super Forest Adventure is a classic turn-based JRPG. Set in a magical forest, the game follows a knight protagonist on a grand adventure to rescue the missing princess and discover hidden treasures. During the exploration, players will recruit diverse companions, battle various forest monsters such as slimes and wild boars, and uncover the deep secrets of the forest through strategic turn-based combat.",
                "poster": "./assets/media/vr-2026-projects/posters/project-27.jpg"
          },
          {
                "id": 28,
                "title": "Memory Room",
                "video": "https://player.bilibili.com/player.html?isOutside=true&aid=116628511591016&bvid=BV1fPG762Etk&cid=38576131740&p=1",
                "authors": [
                      "张博宁 / Zhang Boning",
                      "宋乐杨 / Song Leyang",
                      "王子研 / Wang Ziyan",
                      "杨欣然 / Yang Xinran"
                ],
                "category": "解谜密室",
                "tags": [
                      "解谜密室",
                      "情绪疗愈"
                ],
                "description": "《回忆之室》是一段以 VR（虚拟现实）叙事解谜为核心的项目展示视频。作品基于 Unreal Engine 5（虚幻引擎5）开发，围绕“童年、约定、离别”三段记忆展开。玩家进入房间后，通过观察环境、拾取物品、打开背包、选择碎片并放置到对应展台，逐步点亮记忆并推动故事前进。视频重点呈现实机流程，从进入房间、寻找线索、完成交互到出口解锁，形成完整的体验闭环。相比单纯的 VR（虚拟现实）场景浏览，本项目更强调目标引导、情绪表达和完成感。技术上，核心玩法由 C++（C++编程语言）实现，场景运行与视觉渲染由 Unreal Engine 5（虚幻引擎5）完成，并保留后续接入真实 VR（虚拟现实）设备的扩展空间。",
                "titleEn": "回忆之室",
                "descriptionEn": "\"Room of Memories\" is a project showcase video centered on a VR (Virtual Reality) narrative puzzle-solving experience. Developed based on Unreal Engine 5, the work revolves around three memories: \"Childhood, Promise, and Parting.\" After entering the room, players gradually illuminate the memories and drive the story forward by observing the environment, picking up items, opening the inventory, selecting fragments, and placing them onto the corresponding display stands. The video focuses on presenting the actual gameplay flow, forming a complete experience loop from entering the room, searching for clues, and completing interactions, to unlocking the exit. Compared to simple VR (Virtual Reality) scene browsing, this project places greater emphasis on goal guidance, emotional expression, and a sense of completion. Technically, the core gameplay is implemented in C++ (C++ programming language), while scene execution and visual rendering are completed by Unreal Engine 5, reserving expansion space for future integration with actual VR (Virtual Reality) devices.",
                "poster": "./assets/media/vr-2026-projects/posters/project-28.jpg"
          },
          {
                "id": 29,
                "title": "重返 B612",
                "video": "https://player.bilibili.com/player.html?isOutside=true&aid=116633091708090&bvid=BV1PYG46UEXy&cid=38594675037&p=1",
                "authors": [
                      "朱科憬 / Zhu Kejing",
                      "党琳斐 / Dang Linfei",
                      "杨晨筱 / Yang Chenxiao",
                      "张旸 / Zhang Yang"
                ],
                "category": "沉浸式体验",
                "tags": [
                      "沉浸式体验",
                      "情感疗愈"
                ],
                "description": "本项目以《小王子》原著世界观为核心，打造一款低压力、高沉浸、强治愈的3D自由探索游戏，摒弃传统游戏的任务枷锁、战斗机制和数值压力，主打自由漫游与情感治愈。一方面，高度还原原著B612星球、玫瑰、星空、日落等经典场景，复刻原著温柔孤独的氛围感；另一方面，通过轻量化的场景交互、碎片化剧情触发、沉浸式光影画面，为玩家提供放松解压的游玩体验，让玩家在自由探索中感受陪伴、成长与温柔的治愈内核，填补休闲治愈类3D探索游戏的市场空白。本项目基于Unity 3D引擎与PICO VR开发套件联合开发，兼容PC端与PICO一体机VR端运行。通过自定义URP着色器打造极致星空光影、依托PICO XR SDK优化VR专属交互与抗眩晕体验，完美适配VR设备的沉浸式游玩特性，实现了唯美画面、舒适操作、超强沉浸的核心效果，完整达成了初期的开发目标。",
                "titleEn": "Return to the Lost Planet: B612",
                "descriptionEn": "Centered around the original universe of *The Little Prince*, this project aims to create a low-pressure, highly immersive, and deeply healing 3D open-world exploration game. Free from traditional gaming constraints such as quest structures, combat mechanics, and numerical stress, it emphasizes free roaming and emotional healing. On one hand, it faithfully recreates iconic settings from the book—such as the B612 planet, the rose, starry skies, and sunsets—capturing the novel’s gentle and solitary atmosphere. On the other hand, through lightweight scene interactions, fragmented narrative triggers, and immersive lighting and visual effects, it offers players a relaxing and stress-relieving experience. By exploring freely, players can feel companionship, personal growth, and the soothing essence of emotional healing, filling a gap in the market for casual, therapeutic 3D exploration games. Built using Unity 3D engine and PICO VR development tools, the game is compatible with both PC and PICO standalone VR devices. Custom URP shaders deliver stunning starlight and atmospheric visuals, while integration with the PICO XR SDK optimizes VR-specific interactions and anti-motion sickness performance. This ensures seamless adaptation to the immersive nature of VR hardware, achieving core goals of breathtaking visuals, comfortable controls, and deep immersion—fully realizing the project's initial development objectives.",
                "poster": "./assets/media/vr-2026-projects/posters/project-29.jpg"
          }
    ]

  };

  SiteContent.datasets = {
    intro:
      "This page highlights public benchmarks and self-collected study datasets produced by the group. Some entries provide a separate download portal, while others point to the project page, repository, or local paper page where the collection protocol and release details are documented.",
    items: [
      {
        slug: "poster-zero-effort-cross-domain-wireless-respiration-monitoring-under-free-body-movement",
        title: "RF-Carer Dataset",
        venue: "ACM SenSys 2026",
        year: "2026",
        cardCover:
          "./assets/media/title-covers/datasets/poster-zero-effort-cross-domain-wireless-respiration-monitoring-under-free-body-movement.svg",
        cover:
          "./papers/poster-zero-effort-cross-domain-wireless-respiration-monitoring-under-free-body-movement/assets/fig1-practical-situations.png",
        coverAlt: "Practical respiration-monitoring situations considered by RF-Carer",
        summary:
          "RF-Carer is a commercial UWB respiration-monitoring dataset and benchmark for zero-effort cross-domain sensing. It supports respiration waveform recovery and respiration-rate estimation under free movement, speech, turning over, obstacles, and unseen environments.",
        sensors: ["Commercial IR-UWB", "Respiration Belt", "Cross-Domain Sensing", "Health Monitoring"],
        highlights: [
          "Collected with a Novelda X4M05 IR-UWB radar and synchronized respiration-belt ground truth.",
          "Includes 39 volunteers, 56 hours of data, and 30-second windows for respiration monitoring.",
          "Covers 12 domains and 57 cases across user states, free movements, obstacles, lab, infusion-room, and hospital settings."
        ],
        links: [
          { label: "Code & Dataset", href: "https://github.com/GeWangXJTU/RF-Carer" },
          { label: "ACM DOI", href: "https://dl.acm.org/doi/10.1145/3774906.3800465" }
        ]
      },
      {
        slug: "xrf-v2-a-dataset-for-action-summarization-with-wi-fi-signals-and-imus-in-phones-watches-earbuds-and-glasses",
        title: "XRF V2",
        venue: "ACM IMWUT/UBICOMP 2025",
        year: "2025",
        cover:
          "./papers/xrf-v2-a-dataset-for-action-summarization-with-wi-fi-signals-and-imus-in-phones-watches-earbuds-and-glasses/assets/cover.svg",
        coverAlt: "Cover image for the XRF V2 dataset",
        summary:
          "XRF V2 is a multimodal dataset for indoor temporal action localization and action summarization. It combines Wi-Fi signals, IMUs from phones, watches, earbuds, and glasses, and synchronized video to support smart-home sensing and agent-oriented action understanding.",
        sensors: ["Wi-Fi", "Phone IMU", "Watch IMU", "Earbud IMU", "Glasses IMU", "Video"],
        highlights: [
          "16 volunteers across 3 indoor environments.",
          "853 annotated action sequences and about 16 hours 16 minutes of recordings.",
          "Designed for action summarization, temporal action localization, multimodal pre-training, and smart-home agents."
        ],
        links: [
          { label: "DOI", href: "https://doi.org/10.1145/3749521" },
          { label: "GitHub", href: "https://github.com/aiotgroup/XRFV2" },
          { label: "Kaggle", href: "https://www.kaggle.com/datasets/anonymous20251/xrfv2dataset" },
          { label: "SDP", href: "http://www.sdp8.org/Dataset?id=1186880c-b321-45d0-ac3a-74ef9d2fdeda" }
        ]
      },
      {
        slug: "xrf55-a-radio-frequency-dataset-for-human-indoor-action-analysis",
        title: "XRF55",
        venue: "ACM IMWUT/UBICOMP 2024",
        year: "2024",
        cover:
          "./papers/xrf55-a-radio-frequency-dataset-for-human-indoor-action-analysis/assets/cover.svg",
        coverAlt: "Cover image for the XRF55 dataset",
        summary:
          "XRF55 is a large-scale radio-frequency dataset for indoor human action analysis. It supports action recognition and broader RF-vision sensing research with synchronized sensing across multiple radio modalities and Kinect video.",
        sensors: ["Wi-Fi CSI", "mmWave Radar", "RFID", "RGB+D+IR Kinect"],
        highlights: [
          "42.9K samples, 55 action classes, and 39 subjects collected over 100 days.",
          "Covers human-object interaction, human-human interaction, fitness, body motion, and human-computer instructions.",
          "Project page and repository include hardware tutorials, code, video access guidance, and public download instructions."
        ],
        links: [
          { label: "Project Page", href: "https://aiotgroup.github.io/XRF55/" },
          { label: "GitHub", href: "https://github.com/aiotgroup/XRF55-repo" },
          { label: "DOI", href: "https://doi.org/10.1145/3643543" }
        ]
      },
      {
        slug: "person-in-wifi-3d-end-to-end-multi-person-3d-pose-estimation-with-wi-fi",
        title: "Person-in-WiFi 3D Dataset",
        venue: "CVPR 2024",
        year: "2024",
        cover:
          "./papers/person-in-wifi-3d-end-to-end-multi-person-3d-pose-estimation-with-wi-fi/assets/cover.svg",
        coverAlt: "Cover image for the Person-in-WiFi 3D dataset",
        summary:
          "Person-in-WiFi 3D introduces a Wi-Fi dataset for multi-person 3D pose estimation and mesh-oriented wireless perception. It packages synchronized CSI measurements and pose annotations for crowded indoor scenes.",
        sensors: ["Wi-Fi CSI", "3D Pose", "Wireless Perception"],
        highlights: [
          "Project page reports more than 97K frames collected with seven volunteers.",
          "Supports multi-person 3D pose estimation and follow-up mesh reconstruction studies.",
          "Project page includes dataset download entries, visualizations, and paper resources."
        ],
        links: [
          { label: "Project Page", href: "https://aiotgroup.github.io/Person-in-WiFi-3D/" },
          {
            label: "CVPR OpenAccess",
            href: "https://openaccess.thecvf.com/content/CVPR2024/html/Yan_Person-in-WiFi_3D_End-to-End_Multi-Person_3D_Pose_Estimation_with_Wi-Fi_CVPR_2024_paper.html"
          }
        ]
      },
      {
        slug: "you-can-wash-hands-better-accurate-daily-handwashing-assessment-with-a-smartwatch",
        title: "UWash Dataset",
        venue: "IEEE Transactions on Mobile Computing, 2025",
        year: "2025",
        cover:
          "./papers/you-can-wash-hands-better-accurate-daily-handwashing-assessment-with-a-smartwatch/assets/cover.svg",
        coverAlt: "Cover image for the UWash dataset",
        summary:
          "UWash is a smartwatch dataset for fine-grained daily handwashing assessment. It supports action segmentation, quality scoring, and wearable behavior analysis for hygiene-aware applications.",
        sensors: ["Smartwatch IMU", "Wearable Sensing", "Hand Hygiene"],
        highlights: [
          "Paper reports experiments on 51 subjects for handwashing procedure assessment.",
          "Supports gesture recognition, onset and offset detection, and quality scoring.",
          "A representative wearable benchmark for behavior quality assessment in daily life."
        ],
        links: [
          { label: "GitHub", href: "https://github.com/aiotgroup/UWash" },
          { label: "arXiv", href: "https://arxiv.org/abs/2112.06657" }
        ]
      },
      {
        slug: "bullydetect-detecting-school-physical-bullying-with-wi-fi-and-deep-wavelet-transformer",
        title: "BullyDetect Dataset",
        venue: "IEEE Internet of Things Journal 2024",
        year: "2024",
        cover:
          "./papers/bullydetect-detecting-school-physical-bullying-with-wi-fi-and-deep-wavelet-transformer/assets/cover.svg",
        coverAlt: "Cover image for the BullyDetect dataset",
        summary:
          "BullyDetect packages a Wi-Fi sensing dataset for detecting school physical bullying and violence. It is intended as a practical benchmark for safety-oriented wireless sensing in educational environments.",
        sensors: ["Wi-Fi CSI", "Wireless Sensing", "School Safety"],
        highlights: [
          "Released together with the BullyDetect project repository.",
          "Repository provides original and preprocessed data entry points for training and evaluation.",
          "A useful benchmark for safety, anomaly detection, and privacy-friendly ambient sensing."
        ],
        links: [
          { label: "GitHub", href: "https://github.com/aiotgroup/WiFi-BullyDetect" },
          { label: "Paper", href: "https://ieeexplore.ieee.org/document/10734315" }
        ]
      },
      {
        slug: "mask-wearing-status-estimation-with-smartwatches",
        title: "MaskReminder Dataset",
        venue: "arXiv, 2022",
        year: "2022",
        cover: "./papers/mask-wearing-status-estimation-with-smartwatches/assets/cover.svg",
        coverAlt: "Cover image for the MaskReminder dataset",
        summary:
          "MaskReminder is a smartwatch dataset for recognizing mask-wearing and closely related hand movements. It is designed for wearable public-health sensing and context-aware reminders.",
        sensors: ["Smartwatch IMU", "Accelerometer", "Gyroscope", "Wearable Health"],
        highlights: [
          "UCI release documents 7,600 time-series instances across 18 actions.",
          "Covers true mask-wearing actions, mask adjustments, and visually similar distractor motions.",
          "Repository and dataset release make it practical for benchmarking wearable activity recognition."
        ],
        links: [
          { label: "UCI Dataset", href: "https://archive.ics.uci.edu/dataset/743/maskreminder" },
          { label: "GitHub", href: "https://github.com/aiotgroup/MaskReminder" },
          { label: "arXiv", href: "https://arxiv.org/abs/2205.06113" }
        ]
      },
      {
        slug: "social-distancing-alert-with-smartwatches",
        title: "SoDA Dataset",
        venue: "arXiv, 2022",
        year: "2022",
        cover: "./papers/social-distancing-alert-with-smartwatches/assets/cover.svg",
        coverAlt: "Cover image for the SoDA dataset",
        summary:
          "SoDA is a smartwatch dataset for recognizing social interactions that may violate distancing rules. It targets multi-person public-health monitoring with on-wrist inertial sensing.",
        sensors: ["Smartwatch IMU", "Accelerometer", "Gyroscope", "Social Activity Recognition"],
        highlights: [
          "Paper reports more than 1,800 samples collected from 10 volunteers.",
          "Includes interaction classes such as handshaking, hugging, and other close-contact activities.",
          "Released through the UCI repository for reproducible wearable sensing experiments."
        ],
        links: [
          { label: "UCI Dataset", href: "https://archive.ics.uci.edu/dataset/742" },
          { label: "arXiv", href: "https://arxiv.org/abs/2205.06110" }
        ]
      },
      {
        slug: "joint-activity-recognition-and-indoor-localization-with-wifi-fingerprints",
        title: "ARIL Dataset",
        venue: "IEEE Access, 2019",
        year: "2019",
        cover: "./papers/joint-activity-recognition-and-indoor-localization-with-wifi-fingerprints/assets/cover.svg",
        coverAlt: "Cover image for the ARIL dataset",
        summary:
          "ARIL is a Wi-Fi fingerprint dataset for jointly modeling human activity recognition and indoor localization. It couples the two tasks in a single CSI collection pipeline and serves as an early benchmark for multi-task wireless sensing.",
        sensors: ["Wi-Fi CSI", "Fingerprinting", "Indoor Localization", "Activity Recognition"],
        highlights: [
          "The paper reports more than 1,400 CSI fingerprints covering 6 activities and 16 indoor locations.",
          "Designed for dual-task learning across activity recognition and indoor localization.",
          "The public repository releases both code and data."
        ],
        links: [
          { label: "GitHub", href: "https://github.com/geekfeiw/ARIL" },
          { label: "arXiv", href: "https://arxiv.org/abs/1904.04964" },
          { label: "DOI", href: "https://doi.org/10.1109/ACCESS.2019.2923743" }
        ]
      },
      {
        slug: "csi-net-unified-human-body-characterization-and-pose-recognition",
        title: "CSI-Net Benchmark",
        venue: "arXiv, 2018",
        year: "2018",
        cover: "./papers/csi-net-unified-human-body-characterization-and-pose-recognition/assets/cover.svg",
        coverAlt: "Cover image for the CSI-Net benchmark",
        summary:
          "CSI-Net is an early Wi-Fi benchmark for unified human body characterization and pose recognition. It packages CSI data for biometrics estimation, person recognition, hand sign recognition, and fall detection.",
        sensors: ["Wi-Fi CSI", "Biometrics", "Gesture Recognition", "Fall Detection"],
        highlights: [
          "Surveyed release covers 1 environment, 5 positions, and 30 participants.",
          "Connects fine-grained hand signs and coarse body motions in one benchmark family.",
          "Code and dataset references are publicly mirrored through the project repository."
        ],
        links: [
          { label: "GitHub", href: "https://github.com/geekfeiw/CSI-Net" },
          { label: "arXiv", href: "https://arxiv.org/abs/1810.03064" }
        ]
      },
      {
        slug: "mmegohand-egocentric-hand-pose-estimation-and-gesture-recognition-with-head-mounted-millimeter-wave-radar-and-imu",
        title: "mmEgoHand Dataset",
        venue: "arXiv, 2025",
        year: "2025",
        cover:
          "./papers/mmegohand-egocentric-hand-pose-estimation-and-gesture-recognition-with-head-mounted-millimeter-wave-radar-and-imu/assets/cover.svg",
        coverAlt: "Cover image for the mmEgoHand dataset",
        summary:
          "mmEgoHand is an egocentric radar-IMU dataset for hand pose estimation and gesture recognition from a head-mounted sensing rig. It explores wearable millimeter-wave perception for natural hand-centric interaction.",
        sensors: ["Head-mounted mmWave Radar", "IMU", "Egocentric Interaction", "Hand Pose"],
        highlights: [
          "Combines head-mounted millimeter-wave radar with inertial sensing in a unified capture setup.",
          "Targets both fine-grained gesture recognition and continuous hand pose estimation.",
          "A useful benchmark for wearable AR, assistive interaction, and privacy-preserving hand tracking."
        ],
        links: [
          { label: "GitHub", href: "https://github.com/WhisperYi/mmVR" },
          { label: "arXiv", href: "https://arxiv.org/abs/2501.13805" }
        ]
      }
    ]
  };

  SiteContent.awards = {
    competition: [
      {
        year: "Nov 29, 2025",
        title: "Second Prize",
        org: "China Graduate Intelligent Construction Innovation Competition @ Nantong",
        people: "Shengyao Ding, Tingting Zhang",
        note: "Recognized in the national competition for intelligent construction innovation."
      },
      {
        year: "Nov 10, 2025",
        title: "Second Prize",
        org: "China Graduate Contest on Smart-City Technology and Creative Design @ Wuhan",
        people: "Pei Li, Jiaxi Yin",
        note: "Recognized in the national smart-city technology and creative design competition."
      }
    ],
    paperAwards: [
      {
        year: "2019",
        title: "Best Paper Award",
        org: "IEEE GLOBECOM 2019",
        people: "Fei Wang, Jinsong Han, Feng Lin, Kui Ren",
        note: "WiPIN: Operation-free Passive Person Identification Using Wi-Fi Signals received the Best Paper Award."
      }
    ],
    honors: [
      {
        year: "Apr 19, 2026",
        title: "IEEE Senior Member",
        org: "IEEE",
        people: "Fei Wang",
        note: "Promoted to IEEE Senior Member on April 19, 2026."
      },
      {
        year: "Oct 2025",
        title: "Special Scholarship",
        org: "Xi'an Jiaotong University",
        people: "Tingting Zhang",
        note: "Received the Special Scholarship in October 2025."
      },
      {
        year: "Sep 2025",
        title: "Executive Committee Member",
        org: "CCF Technical Committee on Internet of Things",
        people: "Fei Wang",
        note: "Served as an Executive Committee Member of the CCF Technical Committee on Internet of Things."
      },
      {
        year: "Aug 2025",
        title: "Executive Committee Member",
        org: "CCF Technical Committee on Ubiquitous Computing",
        people: "Fei Wang",
        note: "Served as an Executive Committee Member of the CCF Technical Committee on Ubiquitous Computing."
      },
      {
        year: "Jun 2025",
        title: "Excellent Graduate Thesis",
        org: "Xi'an Jiaotong University",
        people: "Bo Lan",
        note: "His thesis was recognized as an excellent graduate thesis in June 2025."
      }
    ]
  };

  SiteContent.team = {
    intro:
      "Pioneering the frontiers of ubiquitous AI sensing and multimodal machine learning, our dynamic team is engineering smarter, more resilient AIoT systems for the future.",
    groups: [
      {
        title: "Principal Investigator",
        members: [
          {
            name: "Fei Wang",
            role: "Associate Professor, Xi'an Jiaotong University",
            bio:
              "Leads XJTU AIRS Lab with interests spanning efficient AI systems, multimodal intelligence, embodied AI, and AIoT applications.",
            link: "./fei-wang.html",
            photo: "./assets/media/people/fei-wang.jpg",
            photoAlt: "Profile portrait for Fei Wang",
            palette: ["#1c355e", "#c7e0ff"]
          }
        ]
      },
      {
        title: "Students and Collaborators",
        members: [
          {
            name: "Tingting Zhang (张婷婷)",
            role: "M.Eng. Student",
            photo: "./assets/media/people/2024tingting-zhang.png",
            photoAlt: "Sample portrait for Tingting Zhang",
            bio:
              "Human sensing with smart devices with IMUs.",
            link: "https://scholar.google.com/citations?user=R7kxvQkAAAAJ",
            palette: ["#5d4628", "#ffe6c8"]
          },
          {
            name: "Wenqian Xu (徐文谦)",
            role: "M.Eng. Student",
            photo: "./assets/media/people/2024wenqian-xu.jpg",
            photoAlt: "Sample portrait for Wenqian Xu",
            bio:
              "Using LLMs for equipment diagnostics with nuclear power sensor data.",
            palette: ["#5d4628", "#ffe6c8"]
          },
          {
            name: "Kainan Shi (施凯南)",
            role: "M.Eng. Student",
            photo: "./assets/media/people/2024kainan-shi.jpg",
            photoAlt: "Sample portrait for Kainan Shi",
            bio:
              "Taking LLMs as featues extractors for recommender systems.",
            palette: ["#5d4628", "#ffe6c8"]
          },
          {
            name: "Shengyao Ding (丁声耀)",
            role: "M.Eng. Student",
            photo: "./assets/media/people/2025shengyao-ding.jpg",
            photoAlt: "Sample portrait for Shengyao Ding",
            bio:
              "Point cloud segmentation.",
            palette: ["#5d4628", "#ffe6c8"]
          },
          {
            name: "Yangxin Xu (徐漾忻)",
            role: "M.Eng. Student",
            photo: "./assets/media/people/2025yangxin-xu.jpg",
            photoAlt: "Sample portrait for Yangxin Xu",
            bio:
              "Multimodal learning",
            palette: ["#5d4628", "#ffe6c8"]
          },
          {
            name: "Zhixian Xu (许智献)",
            role: "M.Eng. Student",
            photo: "./assets/media/people/2025zhixian-xu.jpg",
            photoAlt: "Sample portrait for Zhixian Xu",
            bio:
              "",
            palette: ["#5d4628", "#ffe6c8"]
          },
          {
            name: "Rui Yan (颜锐)",
            role: "M.Sc Student",
            photo: "./assets/media/people/2025rui-yan.jpg",
            photoAlt: "Sample portrait for Rui Yan",
            bio:
              "Multimodal learning",
            palette: ["#5d4628", "#ffe6c8"]
          },
          {
            name: "Jiaxi Yin (尹佳茜)",
            role: "M.Sc Student",
            photo: "./assets/media/people/2025jiaxi-yin.jpg",
            photoAlt: "Sample portrait for Jiaxi Yin",
            bio:
              "Temporal action localization using smart devices equipped with IMUs.",
            palette: ["#5d4628", "#ffe6c8"]
          },
          {
            name: "Chuntong Chu (初春童)",
            role: "M.Eng. Student",
            photo: "./assets/media/people/2025chuntong-chu.jpg",
            photoAlt: "Sample portrait for Chuntong Chu",
            bio:
              "Intereseted in LLM Agent.",
            palette: ["#5d4628", "#ffe6c8"]
          },
          {
            name: "Pengcheng Weng (翁鹏程)",
            role: "Master Student, Research Intern, Universität Bern",
            photo: "./assets/media/people/2025pengcheng-weng.jpg",
            photoAlt: "Sample portrait for Pengcheng Weng",
            bio:
              "Multimodal learning, Diffusion large language model.",
            palette: ["#5d4628", "#ffe6c8"]
          },
          {
            name: "Zixuan Xia (夏梓轩)",
            role: "Master Student, Research Intern, Universität Bern",
            photo: "./assets/media/people/2024zixuan-xia.jpg",
            photoAlt: "Sample portrait for Zixuan Xia",
            bio:
              "Multimodal learning, neural optimization.",
            link: "https://sumxiaa.github.io/",
            palette: ["#5d4628", "#ffe6c8"]
          },
          {
            name: "Hao Wang (王皓)",
            role: "Master Student, Research Intern, Universität Bern",
            photo: "./assets/media/people/2024hao-wang.png",
            photoAlt: "Sample portrait for Hao Wang",
            bio:
              "Multimodal machine learning.",
            link: "https://scholar.google.com/citations?user=RSjDZx0AAAAJ",
            palette: ["#5d4628", "#ffe6c8"]
          },
          {
            name: "Lei Ouyang (欧阳蕾)",
            role: "Incoming M.Eng. Student",
            photo: "./assets/media/people/2026lei-ouyang.png",
            photoAlt: "Sample portrait for Lei Ouyang",
            bio:
              "Human sensing with Wi-Fi and IMUs.",
            palette: ["#5d4628", "#ffe6c8"]
          },
          {
            name: "Jijun Liu (刘纪君)",
            role: "Incoming M.Sc. Student",
            photo: "./assets/media/people/2026jijun-liu.jpg",
            photoAlt: "Sample portrait for Jijun Liu",
            bio:
              "",
            palette: ["#5d4628", "#ffe6c8"]
          },
          {
            name: "Baorui Zhang (张宝瑞)",
            role: "Incoming M.Eng. Student",
            photo: "./assets/media/people/2026baorui-zhang.jpg",
            photoAlt: "Sample portrait for Baorui Zhang",
            bio:
              "",
            palette: ["#5d4628", "#ffe6c8"]
          },
          {
            name: "Yitao Li (李艺韬)",
            role: "Incoming M.Eng. Student",
            photo: "./assets/media/people/2026yitao-li.jpg",
            photoAlt: "Sample portrait for Yitao Li",
            bio:
              "",
            palette: ["#5d4628", "#ffe6c8"]
          },
          {
            name: "Zhijian Wang (王之鉴)",
            role: "Undergraduate Student, Research Intern",
            photo: "./assets/media/people/2026zhijian-wang.jpg",
            photoAlt: "Portrait for Zhijian Wang",
            bio:
              "Working on wireless sensing and multimodal learning.",
            palette: ["#5d4628", "#ffe6c8"]
          },
          {
            name: "Shi Chen (陈昰)",
            role: "Undergraduate Student, Research Intern",
            photo: "./assets/media/people/2026shi-chen.jpg",
            photoAlt: "Portrait for Shi Chen",
            bio:
              "Working on IMU sensing.",
            palette: ["#5d4628", "#ffe6c8"]
          },
          {
            name: "Xilei Han (韩茜蕾)",
            role: "Undergraduate Student, Research Intern",
            photo: "./assets/media/people/2027xilei-han.jpg",
            photoAlt: "Sample portrait for Xilei Han",
            bio:
              "",
            palette: ["#5d4628", "#ffe6c8"]
          },
          {
            name: "Hang Xu (许航)",
            role: "Undergraduate Student, Research Intern",
            photo: "./assets/media/people/2027hang-xu.jpg",
            photoAlt: "Portrait for Hang Xu",
            bio:
              "Interested in multimodal foundation models.",
            palette: ["#5d4628", "#ffe6c8"]
          },
          {
            name: "Shihan Pan (潘适晗)",
            role: "Undergraduate Student, Research Intern",
            photo: "./assets/media/people/2028shihan-pan.jpg",
            photoAlt: "Portrait for Shihan Pan",
            bio:
              "Working on weakly supervised IMU-based action localization.",
            palette: ["#5d4628", "#ffe6c8"]
          },
          {
            name: "Kexin Ren (任珂心)",
            role: "Undergraduate Student",
            photo: "./assets/media/people/2026kexin-ren.jpg",
            photoAlt: "Sample portrait for Kexin Ren",
            bio:
              "Working on wearable device sensing for her bachelor thesis in the group.",
            palette: ["#5d4628", "#ffe6c8"]
          },
        ]
      },
      {
        title: "Alumni",
        members: [
          {
            name: "Jiasheng Xu (徐佳胜)",
            role: "M.Eng.",
            photo: "./assets/media/people/2023jiasheng-xu.jpg",
            photoAlt: "Portrait for Jiasheng Xu",
            bio:
              "Graduated with a master's degree in 2026 and then joined Alibaba Group Holding Limited in Hangzhou.",
            palette: ["#3d376a", "#e0dcff"]
          },
          {
            name: "R.D. Lin (林儒徳)",
            role: "M.Eng.",
            photo: "./assets/media/people/2023r-d-lin.jpg",
            photoAlt: "Portrait for R.D. Lin",
            bio:
              "Graduated with a master's degree in 2026 and then joined China Zheshang Bank in Hangzhou.",
            palette: ["#3d376a", "#e0dcff"]
          },
          {
            name: "Pei Li (李沛)",
            role: "M.Eng.",
            photo: "./assets/media/people/2023pei-li.jpg",
            photoAlt: "Portrait for Pei Li",
            bio:
              "Graduated with a master's degree in 2026 and then joined Xuji Electric Co., Ltd. in Zhengzhou.",
            palette: ["#3d376a", "#e0dcff"]
          },
          {
            name: "Honglin Luo (罗弘林)",
            role: "M.Eng.",
            photo: "./assets/media/people/2023honglin-luo.jpg",
            photoAlt: "Portrait for Honglin Luo",
            bio:
              "Graduated with a master's degree in 2026 and is now in Fujian.",
            palette: ["#3d376a", "#e0dcff"]
          },
          {
            name: "Bintong Zhao (赵彬桐)",
            role: "M.Eng.",
            photo: "./assets/media/people/2023bintong-zhao.jpg",
            photoAlt: "Portrait for Bintong Zhao",
            bio:
              "Graduated with a master's degree in 2026 and then joined NR Electric Co., Ltd.",
            palette: ["#3d376a", "#e0dcff"]
          },
          {
            name: "Tiantian Wang (王天天)",
            role: "M.Eng. student",
            photo: "./assets/media/people/2024tiantian-wang.jpg",
            photoAlt: "Sample portrait for Qunhang Fu",
            bio:
              "In the second year as a graduate student, Tiantian chose to pursue a master's degree at The University of Tokyo in 2026.",
            link: "https://scholar.google.com/citations?user=Pj4jG9YAAAAJ",
            palette: ["#3d376a", "#e0dcff"]
          },
          {
            name: "Qunhang Fu (付群航)",
            role: "M.Eng.",
            photo: "./assets/media/people/2022qunhang-fu.jpg",
            photoAlt: "Sample portrait for Qunhang Fu",
            bio:
              "Graduated in 2025 and then joined Hangzhou Xiaoshan District People's Government.",
            palette: ["#3d376a", "#e0dcff"]
          },
          {
            name: "Zhenkui Yang (杨振奎)",
            role: "M.Eng.",
            photo: "./assets/media/people/2022zhenkui-yang.png",
            photoAlt: "Sample portrait for Zhenkui Yang",
            bio:
              "Graduated in 2025 and then joined Alibaba Group.",
            palette: ["#3d376a", "#e0dcff"]
          },
          {
            name: "Haomin Xiong (熊浩民)",
            role: "M.Eng.",
            photo: "./assets/media/people/2022haomin-xiong.jpg",
            photoAlt: "Sample portrait for Haomin Xiong",
            bio:
              "Graduated in 2025 and then joined Xianyu.",
            palette: ["#3d376a", "#e0dcff"]
          },
          {
            name: "Peixi Shi (史培玺)",
            role: "M.Eng.",
            photo: "./assets/media/people/2022peixi-shi.jpg",
            photoAlt: "Sample portrait for Peixi Shi",
            bio:
              "Graduated in 2025 and then joined NR Electric Co., Ltd.",
            palette: ["#3d376a", "#e0dcff"]
          },
           {
            name: "Bo Lan (兰博)",
            role: "M.Eng.",
            photo: "./assets/media/people/2022bo-lan.jpg",
            photoAlt: "Sample portrait for Bo Lan",
            bio:
              "Graduated in 2025 and then joined Pinduoduo.",
            link: "https://scholar.google.com/citations?user=kP6Dr_4AAAAJ",
            palette: ["#3d376a", "#e0dcff"]
          },
          {
            name: "Pengcheng Wang (王鹏程)",
            role: "M.Eng.",
            photo: "./assets/media/people/2022pengcheng-wang.jpg",
            photoAlt: "Sample portrait for Pengcheng Wang",
            bio:
              "Graduated in 2025 and then joined ADBC.",
            palette: ["#3d376a", "#e0dcff"]
          },
          {
            name: "Yizhe Lyu (吕一喆)",
            role: "M.Eng.",
            photo: "./assets/media/people/2021yizhe-lv.jpg",
            photoAlt: "Sample portrait for Yizhe Lyu",
            bio:
              "Graduated in 2024 and then joined NR Electric Co., Ltd.",
            palette: ["#3d376a", "#e0dcff"]
          },
          {
            name: "Mengdie Zhu (朱梦蝶)",
            role: "M.Eng.",
            photo: "./assets/media/people/2021mengdie-zhu.jpg",
            photoAlt: "Sample portrait for Mengdie Zhu",
            bio:
              "Graduated in 2024 and now in Nanjing.",
            palette: ["#3d376a", "#e0dcff"]
          },
          {
            name: "Kangwei Yan (颜康威)",
            role: "M.Eng.",
            photo: "./assets/media/people/2021kangwei-yan.jpg",
            photoAlt: "Sample portrait for Kangwei Yan",
            bio:
              "Graduated in 2024 and then joined Guangzhou Yingzi Technology Co., Ltd.",
            palette: ["#3d376a", "#e0dcff"]
          },
          {
            name: "Huina Meng (孟慧娜)",
            role: "M.Eng.",
            photo: "./assets/media/people/2020huina-meng.jpg",
            photoAlt: "Sample portrait for Huina Meng",
            bio:
              "Graduated in 2023 and then joined SPIC Nuelectronic（Wuxi）Company Limited.",
            palette: ["#3d376a", "#e0dcff"]
          },
          {
            name: "Xin Wang (王欣)",
            role: "M.Eng.",
            photo: "./assets/media/people/2020xin-wang.jpg",
            photoAlt: "Sample portrait for Xin Wang",
            bio:
              "Graduated in 2023 and then joined STATE GRID.",
            palette: ["#3d376a", "#e0dcff"]
          },
          {
            name: "Xilei Wu (吴熙磊)",
            role: "M.Eng.",
            photo: "./assets/media/people/2020xilei-wu.jpg",
            photoAlt: "Sample portrait for Xilei Wu",
            bio:
              "Graduated in 2023 and then joined Kuaishou Technology Co., Ltd.",
            palette: ["#3d376a", "#e0dcff"]
          },
          {
            name: "Yiao Gao (高一奥)",
            role: "M.Eng.",
            photo: "./assets/media/people/2020yiao-gao.png",
            photoAlt: "Sample portrait for Yiao Gao",
            bio:
              "Graduated in 2023 and then joined Honor Device Co., Ltd.",
            palette: ["#3d376a", "#e0dcff"]
          },
          {
            name: "Ruohua Wu (伍若华)",
            role: "Summer Intern",
            photo: "./assets/media/people/2025ruohua-wu.jpg",
            photoAlt: "Sample portrait for Ruohua Wu",
            bio:
              "Summer research intern in 2025, and will pursue a master’s degree in the School of Mechanical Engineering at Xi’an Jiaotong University in Fall 2026.",
            palette: ["#3d376a", "#e0dcff"]
          },
          {
            name: "Yixi Xiang (向贻茜)",
            role: "Bachelor of Law and Fintech",
            photo: "./assets/media/people/2025yixi-xiang.jpg",
            photoAlt: "Sample portrait for Yixi Xiang",
            bio:
              "Graduated in 2025 with top honors (1st), then pursuing a master’s degree at Nanjing University, specializing in Comparative and International Law.",
            palette: ["#3d376a", "#e0dcff"]
          },
          {
            name: "Kai Li (李楷)",
            role: "Bachelor of Engineering",
            photo: "./assets/media/people/2025kai-li.jpg",
            photoAlt: "Sample portrait for Kai Li",
            bio:
              "After graduating in 2025, he went on in 2026 to pursue a master's degree in the School of Chemistry at Xi'an Jiaotong University.",
            palette: ["#3d376a", "#e0dcff"]
          },
          {
            name: "Yuhang Zhang (张宇航)",
            role: "Bachelor of Engineering",
            photo: "./assets/media/people/2024yuhang-zhang.jpg",
            photoAlt: "Sample portrait for Yuhang Zhang",
            bio:
              "After graduating in 2024, he went on to pursue a master’s degree at Peking University.",
            palette: ["#3d376a", "#e0dcff"]
          },
          {
            name: "Shichao Ma (马世超)",
            role: "Bachelor of Engineering",
            photo: "./assets/media/people/2024shichao-ma.jpg",
            photoAlt: "Sample portrait for Yuhang Zhang",
            bio:
              "After graduating with a bachelor’s degree in 2024, he went on to pursue a master’s degree at University of Science and Technology of China.",
            link: "https://scholar.google.com/citations?user=-ojMOq0AAAAJ",
            palette: ["#3d376a", "#e0dcff"]
          },
        ]
      }
    ]
  };

  SiteContent.gallery = {
    intro:
      "The gallery documents both research milestones and everyday group life.",
    snapshots: [
      {
        title: "Guernica at Museo Reina Sofia",
        date: "May 6, 2026",
        caption: "Standing before Picasso's Guernica at Museo Reina Sofia in Madrid, a painting that still speaks across time with a simple wish: world peace.",
        tag: "Travel",
        image: "./assets/media/gallery/20260506-guernica-madrid.jpg",
        photoAlt: "Picasso's Guernica displayed at Museo Reina Sofia in Madrid",
        palette: ["#1f2328", "#ece8e1"]
      },
      {
        title: "ICASSP 2026 in Barcelona",
        date: "May 3, 2026",
        caption: "Attending ICASSP 2026, standing on Carmel Hill with La Sagrada Familia and the Barcelona skyline in the background.",
        tag: "Conference",
        image: "./assets/media/gallery/20260503-icassp-barcelona-carmel.jpg",
        photoAlt: "A portrait on Carmel Hill overlooking La Sagrada Familia and the Barcelona skyline",
        palette: ["#214c71", "#dce8f2"]
      },
      {
        title: "More Portraits of Kexin Ren",
        date: "April 20, 2026",
        caption: "More photos of Kexin Ren are collected here, capturing her memorable moments.",
        tag: "Personal Photos",
        image: "./assets/media/gallery/20260420-kexin-ren-portraits.jpg",
        photoAlt: "A horizontal collage of Kexin Ren portraits",
        palette: ["#214c71", "#e4f2ff"]
      },
      {
        title: "More Portraits of Yixi Xiang",
        date: "April 19, 2026",
        caption: "More photos of Yixi Xiang are collected here, capturing her memorable moments.",
        tag: "Personal Photos",
        image: "./assets/media/gallery/2025xyx-graduation-celebration-card.jpg",
        photoAlt: "A horizontal collage of Yixi Xiang portraits",
        palette: ["#214c71", "#e4f2ff"]
      },
      {
        title: "Mentorship and Friendship",
        date: "April 17, 2026",
        caption: "Our academic lineage gathered in Xi’an, reflecting on 10-20 years of friendship and mentorship.",
        tag: "Celebration",
        image: "./assets/media/gallery/2026xiaobinjiebiye-xian.jpg",
        photoAlt: "Poster session preparation snapshot",
        palette: ["#214c71", "#e4f2ff"]
      },
      {
        title: "Birdwatching @ Hangzhou",
        date: "Janurary 4, 2026",
        caption: "We took very clear photos of Xiaocui—a kind of kingfisher—at the Hangzhou Zoo.",
        tag: "Nature",
        image: "./assets/media/gallery/2026xixishidi-hangzhou.jpg",
        photoAlt: "Poster session preparation snapshot",
        palette: ["#214c71", "#e4f2ff"]
      },
      {
        title: "China Graduate Intelligent Construction Innovation Competition @ Nantong",
        date: "November 29, 2025",
        caption: "We won the second prize in the national competition in Nantong, Jiangsu.",
        tag: "Competition",
        image: "./assets/media/gallery/2025zhinengjianzao_competition.jpg",
        photoAlt: "Poster session preparation snapshot",
        palette: ["#214c71", "#e4f2ff"]
      },
      {
        title: "China Graduate Contest on Smart-City Technology and Creative Design @ Wuhan",
        date: "November 10, 2025",
        caption: "We won the second prize in the national competition in Wuhan, Hubei.",
        tag: "Competition",
        image: "./assets/media/gallery/2025zhihuichengshi_competition.jpg",
        photoAlt: "Poster session preparation snapshot",
        palette: ["#214c71", "#e4f2ff"]
      },
      {
        title: "Mobicom 2025 @ HongKong",
        date: "November 5, 2025",
        caption: "I had sweet drinks with friends in Hong Kong during MobiCom 2025.",
        tag: "Conference",
        image: "./assets/media/gallery/2025hetianshui-hongkong.jpg",
        photoAlt: "Poster session preparation snapshot",
        palette: ["#214c71", "#e4f2ff"]
      },
      {
        title: "West Lake Sunrise @ Hangzhou",
        date: "September, 2025",
        caption: "We got up at 4 a.m. and saw the tranquil West Lake and a pink sunrise.",
        tag: "Nature",
        image: "./assets/media/gallery/20250907-xihurichu.jpg",
        photoAlt: "Poster session preparation snapshot",
        palette: ["#214c71", "#e4f2ff"]
      },
      {
        title: "Museum of Art Pudong @ Shanghai",
        date: "September 4, 2025",
        caption: "We visited the Museum of Art Pudong in Shanghai during CWSN 2025.",
        tag: "Conference",
        image: "./assets/media/gallery/2025pumei-cwsn.jpg",
        photoAlt: "Poster session preparation snapshot",
        palette: ["#214c71", "#e4f2ff"]
      },
      {
        title: "HHME/HHMC @ Dalian",
        date: "August 24, 2025",
        caption: "We walked along the seaside in Dalian.",
        tag: "Conference",
        image: "./assets/media/gallery/2025hhme-dalian.jpg",
        photoAlt: "Poster session preparation snapshot",
        palette: ["#214c71", "#e4f2ff"]
      },
      {
        title: "Wireless Sensing Forum @ Nanjing",
        date: "July, 2025",
        caption: "I met with my Ph.D. advisor and fellow lab mates in Nanjing during the Wireless Sensing Forum.",
        tag: "Conference",
        image: "./assets/media/gallery/2025wuxianluntan-nanjing.jpg",
        photoAlt: "Poster session preparation snapshot",
        palette: ["#214c71", "#e4f2ff"]
      },
      {
        title: "Graduate of the Class of 2025",
        date: "June, 2025",
        caption: "Six students have successfully graduated—congratulations, and wishing you all a bright and promising future.",
        tag: "Celebration",
        image: "./assets/media/gallery/2025biyekuaile-xian.jpg",
        photoAlt: "Poster session preparation snapshot",
        palette: ["#214c71", "#e4f2ff"]
      },
      {
        title: "INFOCOM 2025 @ London",
        date: "May 20, 2025",
        caption: "I ran into Mr. Bean in a park in London.",
        tag: "Conference",
        image: "./assets/media/gallery/2025infocom-london.jpg",
        photoAlt: "Poster session preparation snapshot",
        palette: ["#214c71", "#e4f2ff"]
      },
      {
        title: "Zhuque National Forest Park",
        date: "May 12, 2025",
        caption: "We reached the alpine meadow in Zhuque National Forest Park around 2,680 meters above sea level.",
        tag: "Conference",
        image: "./assets/media/gallery/20250510-zhuquesenlingongyuan.jpg",
        photoAlt: "Poster session preparation snapshot",
        palette: ["#214c71", "#e4f2ff"]
      },
      {
        title: "Black Myth Art Exhibition @ Hangzhou",
        date: "April 12, 2025",
        caption: "I visited the Black Myth: Wukong art exhibition and really liked the many exquisite Golden Cudgels on display.",
        tag: "Museum",
        image: "./assets/media/gallery/20250412-heishenhuazhan.jpg",
        photoAlt: "Poster session preparation snapshot",
        palette: ["#214c71", "#e4f2ff"]
      },
      {
        title: "A Dinner after School on Friday.",
        date: "March 28, 2025",
        caption: "We had cheesy eggs, and someone came up with the idea of serving mashed potatoes in a wine glass. Elegant",
        tag: "Meal",
        image: "./assets/media/gallery/20250328-jiubeitudou.jpg",
        photoAlt: "Poster session preparation snapshot",
        palette: ["#214c71", "#e4f2ff"]
      },
      {
        title: "Mount Taibai",
        date: "December 21, 2024",
        caption: "We hiked up to Tianyuan Difang (3,511 m) on Mount Taibai, the highest peak of the Qinling Mountains.",
        tag: "Nature",
        image: "./assets/media/gallery/2024taibaishan-xian.jpg",
        photoAlt: "Poster session preparation snapshot",
        palette: ["#214c71", "#e4f2ff"]
      },
      {
        title: "Golden Ginkgo Leaves",
        date: "November 19, 2024",
        caption: "When the ginkgo leaves turned golden, we visited Guanyin Zen Temple to see the thousand-year-old ginkgo tree.",
        tag: "Tourist",
        image: "./assets/media/gallery/2024guanyinchansi-xian.jpg",
        photoAlt: "Poster session preparation snapshot",
        palette: ["#214c71", "#e4f2ff"]
      },
      {
        title: "Hairy Crabs 🦀🦀🦀",
        date: "October 22, 2024",
        caption: "We enjoyed seasonal Yangcheng Lake hairy crabs together 🦀.",
        tag: "Meal",
        image: "./assets/media/gallery/2024dazhaxie-xian.jpg",
        photoAlt: "Poster session preparation snapshot",
        palette: ["#214c71", "#e4f2ff"]
      },
      {
        title: "CWSN @ Taiyuan",
        date: "September 21, 2024",
        caption: "My first photo with my grand-advisor, Professor. Yunhao Liu, an academician of the Chinese Academy of Sciences.",
        tag: "Conference",
        image: "./assets/media/gallery/2024cwsn-taiyuan.jpg",
        photoAlt: "Poster session preparation snapshot",
        palette: ["#214c71", "#e4f2ff"]
      },
      {
        title: "HHME @ Taiyuan",
        date: "August 22, 2024",
        caption: "I presented our group’s XRF55 dataset and the Person-in-WiFi 3D CVPR paper at HHME 2024.",
        tag: "Conference",
        image: "./assets/media/gallery/2024hhme-taiyuan.jpg",
        photoAlt: "Poster session preparation snapshot",
        palette: ["#214c71", "#e4f2ff"]
      },
      {
        title: "Graduate of the Class of 2024",
        date: "June, 2024",
        caption: "Four students have successfully graduated—congratulations, and wishing you all a bright and promising future.",
        tag: "Celebration",
        image: "./assets/media/gallery/2024biyeji.jpg",
        photoAlt: "Poster session preparation snapshot",
        palette: ["#214c71", "#e4f2ff"]
      },
      {
        title: "IEEE GLOBECOM @ Hawaii",
        date: "9 Decemberber, 2019",
        caption: "Our WIPIN received the Best Paper Award at IEEE GLOBECOM 2019.",
        tag: "Conference",
        image: "./assets/media/gallery/2019globecom-bestpaper.png",
        photoAlt: "Poster session preparation snapshot",
        palette: ["#214c71", "#e4f2ff"]
      },
      {
        title: "ICCV 2019 @ Seoul",
        date: "October, 2019",
        caption: "I saw Ross Girshick presenting a poster at ICCV, introducing his joint work with Kaiming He.",
        tag: "Conference",
        image: "./assets/media/gallery/2019iccv-seoul.jpg",
        photoAlt: "Poster session preparation snapshot",
        palette: ["#214c71", "#e4f2ff"]
      },
      {
        title: "We say goodbye @ Pittsburgh",
        date: "October, 2019",
        caption: "On the Friday before returning to China, we took a group photo at Paul’s place.",
        tag: "Celebration",
        image: "./assets/media/gallery/2019friday.jpg",
        photoAlt: "Poster session preparation snapshot",
        palette: ["#214c71", "#e4f2ff"]
      },
      {
        title: "MIT @ Boston",
        date: "Spring Break, 2019",
        caption: "During spring break, I made a quick trip to Boston and visited Harvard University, MIT, and Museum of Boston.",
        tag: "Vacation",
        image: "./assets/media/gallery/2019mit-boston.jpg",
        photoAlt: "Poster session preparation snapshot",
        palette: ["#214c71", "#e4f2ff"]
      },
      {
        title: "The While House @ Washington, D.C.",
        date: "Winter, 2018",
        caption: "In winter, I passed by the White House.",
        tag: "Winter",
        image: "./assets/media/gallery/2018washingtondc.jpg",
        photoAlt: "Poster session preparation snapshot",
        palette: ["#214c71", "#e4f2ff"]
      },
      {
        title: "Niagara Falls",
        date: "June, 2018",
        caption: "At the U.S.–Canada border, I saw the world’s third-largest waterfall, Niagara Falls.",
        tag: "Vacation",
        image: "./assets/media/gallery/2018niagara.jpg",
        photoAlt: "Poster session preparation snapshot",
        palette: ["#214c71", "#e4f2ff"]
      },
      {
        title: "Chinese New Year @ Pittsburgh",
        date: "Chinese New Year, 2017",
        caption: "We celebrated the Chinese New Year together.",
        tag: "Festival",
        image: "./assets/media/gallery/2017newyear.jpg",
        photoAlt: "Poster session preparation snapshot",
        palette: ["#214c71", "#e4f2ff"]
      },
      {
        title: "Museum of Natural History @ New York",
        date: "December，2017",
        caption: "I saw many fossils at the American Museum of Natural History.",
        tag: "Mesume",
        image: "./assets/media/gallery/2017nhm-newyork.jpg",
        photoAlt: "Poster session preparation snapshot",
        palette: ["#214c71", "#e4f2ff"]
      },
      {
        title: "Graduation Season @ Xi'an",
        date: "June, 2017",
        caption: "My friends are about to graduate, and I will continue pursuing the Ph.D. degree.",
        tag: "Graduation",
        image: "./assets/media/gallery/2017biyeji.jpg",
        photoAlt: "Poster session preparation snapshot",
        palette: ["#214c71", "#e4f2ff"]
      },
    ]
  };

  SiteContent.notes = {
    intro:
      "This page keeps the group's long-form internal knowledge pages in one place, separate from the photo gallery. It is the right home for onboarding resources, shared references, and living documentation.",
    items: [
      {
        slug: "semester-reflection-meet",
        title: "课题组的师生反思机制",
        tags: "Lab Reflection",
        cover: "./notes/semester-reflection-meet/assets/cover.svg",
        coverAlt: "Title card for the semester reflection meet note",
        text:
          "对《课题组 Q&A》Q10 的展开说明，介绍期末反思会议、改进计划、退出机制与三份配套问卷。"
      },
      {
        slug: "imwut-2024-2025-quick-read",
        title: "IMWUT 2024-2025 速读",
        tags: "Reading Guide",
        cover: "./notes/imwut-2024-2025-quick-read/assets/cover.svg",
        coverAlt: "Title card for the IMWUT 2024-2025 quick-read note",
        text:
          "介绍组内飞书速读文档的入口和使用方式，适合招生考核与新成员入组导读。"
      },
      {
        slug: "multimodal-sensing-datasets",
        title: "多模态感知数据集",
        tags: "Dataset Note",
        cover: "./notes/multimodal-sensing-datasets/assets/cover.svg",
        coverAlt: "Title card for multimodal sensing datasets",
        text:
          "根据《我们关注的多模态感知数据集【更新至2025.12】》整理 8 个数据集，并补充按任务选型的简要建议。"
      },
      {
        slug: "recommended-courses",
        title: "推荐课程",
        tags: "Course Note",
        cover: "./notes/recommended-courses/assets/cover.svg",
        coverAlt: "Title card for recommended courses",
        text:
          "整理几门适合视觉、语言模型、多模态与高效 AI 方向学生系统学习的课程，并补充主讲老师信息。"
      },
      {
        slug: "useful-talks",
        title: "分享的 Talks",
        tags: "Talks",
        cover: "./notes/useful-talks/assets/cover.svg",
        coverAlt: "Title card for shared talks",
        text:
          "记录值得分享的讲座、课程和科研训练视频，方便学生按需回看。"
      },
      {
        slug: "research-training-videos",
        title: "科研入门视频训练清单",
        tags: "Training Videos",
        cover: "./notes/research-training-videos/assets/cover.svg",
        coverAlt: "Title card for research training videos",
        text:
          "整理跟李沐学AI与 bryanyzhu 两位 UP 主的视频，用于训练本科实习生和入门阶段研究生。"
      },
      {
        slug: "interns-masters-applicants-qa",
        title: "课题组 Q&A",
        tags: "Admissions Q&A",
        cover: "./notes/interns-masters-applicants-qa/assets/cover.svg",
        coverAlt: "Title card for the interns and master's applicants Q&A",
        text:
          "面向本科科研实习生、硕士生和博士生申请者的课题组招生、培养、研究方向与发展问答。"
      },
      {
        slug: "group-wiki",
        title: "Group Wiki",
        tags: "Group Knowledge Base",
        cover: "./notes/group-wiki/assets/cover.svg",
        coverAlt: "Title card for the AIRS Lab Wiki",
        text:
          "A living guide for research onboarding, recommended courses, media, books, must-read papers, campus life, and group resources."
      }
    ]
  };

  SiteContent.publicationManualNotes = {
    "locality-aware-parallel-decoding-for-efficient-autoregressive-image-generation": {
      summary:
        "This paper studies how to parallelize autoregressive image generation without discarding the locality priors that make autoregressive decoders strong. The main idea is to preserve spatially local dependencies while decoding multiple regions more efficiently.",
      bullets: [
        "Targets autoregressive image generation bottlenecks directly.",
        "Balances visual quality and parallel decoding speed.",
        "Fits the lab's broader theme of efficiency without giving up strong model behavior."
      ]
    },
    "longlive-real-time-interactive-long-video-generation": {
      summary:
        "LongLive focuses on real-time interactive long-video generation, framing the problem around prompt responsiveness, temporal coherence, and the systems costs of maintaining long outputs.",
      bullets: [
        "Optimized for responsiveness during human interaction.",
        "Emphasizes long-form temporal consistency.",
        "Connects generative modeling with real deployment constraints."
      ]
    },
    "qserve-w4a8kv4-quantization-and-system-co-design-for-efficient-llm-serving": {
      summary:
        "QServe pairs quantization with serving-system co-design, showing that low-bit arithmetic only becomes truly useful when runtime memory access, cache layout, and execution planning are optimized together.",
      bullets: [
        "Combines algorithm choices with systems implementation.",
        "Built for practical large-model serving workloads.",
        "A representative example of algorithm-system co-design."
      ]
    }
  };
})();

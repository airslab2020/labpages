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
      { key: "course", label: "Courses", href: "./course.html" },
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
      { label: "Courses", href: "./course.html" },
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
        title: "RadioSEP accepted to IEEE INFOCOM 2026",
        summary:
          "RadioSEP introduces a unified mmWave-audio framework for speech enhancement and multi-speaker separation without requiring a speaker count prior.",
        slug: "mmwave-aided-unified-speech-enhancement-and-separation-without-speaker-count-prior"
      },
      {
        date: "May 2026",
        title: "RF-Carer advances zero-effort cross-domain wireless respiration monitoring",
        summary:
          "Our new SenSys 2026 paper introduces RF-Carer, a one-fits-all UWB respiration monitoring system that adapts across users, movements, and environments without extra retraining.",
        slug: "poster-zero-effort-cross-domain-wireless-respiration-monitoring-under-free-body-movement"
      },
      {
        date: "Apr 2026",
        title: "Survey on Wi-Fi Sensing Generalizability highlighted in the lab archive",
        summary:
          "Our recent survey organizes the taxonomy, techniques, datasets, and open challenges behind generalizable WiFi sensing systems.",
        slug: "a-survey-on-wi-fi-sensing-generalizability-taxonomy-techniques-datasets-and-future-research-prospects"
      },
      {
        date: "Apr 2026",
        title: "COMPASS explores complete multimodal fusion for ubiquitous sensing",
        summary:
          "The project studies proxy-token fusion and shared latent spaces for sensing systems that must reason across several data sources at once.",
        slug: "compass-complete-multimodal-fusion-via-proxy-tokens-and-shared-spaces-for-ubiquitous-sensing"
      },
      {
        date: "Mar 2026",
        title: "Cross-domain EEG emotion recognition extends the group's sensing portfolio",
        summary:
          "The new ICASSP paper applies contrastive learning to improve cross-domain EEG-based emotion recognition.",
        slug: "cross-domain-eeg-based-emotion-recognition-with-contrastive-learning"
      },
      {
        date: "Oct 2025",
        title: "XRF V2 expands wearable and wireless action understanding",
        summary:
          "The dataset combines WiFi with IMUs from phones, watches, earbuds, and glasses to support richer action summarization research.",
        slug: "xrf-v2-a-dataset-for-action-summarization-with-wi-fi-signals-and-imus-in-phones-watches-earbuds-and-glasses"
      },
      {
        date: "Mar 2025",
        title: "One Snapshot is All You Need demonstrates generalized mmWave signal generation",
        summary:
          "The paper introduces a generalized signal-generation method aimed at improving scalability and data efficiency for mmWave-based sensing.",
        slug: "one-snapshot-is-all-you-need-a-generalized-method-for-mmwave-signal-generation"
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
        title: "作品名称示例",
        video: "https://www.youtube.com/embed/aYi7hHWG7zw?si=duGxb9THfapzr57x",
        authors: ["学生A", "学生B", "学生C", "学生D"],
        description:
          "这是第一个作品的简短介绍。描述该 VR 项目的核心创意、使用的技术栈以及在 XJTU-POLIMI 课程中的收获。"
      },
      {
        title: "第二个作品名称",
        video: "https://www.youtube.com/embed/LL3yonBuQK0?si=8ZeUalA1c5rdOtlB",
        authors: ["作者 1", "作者 2", "作者 3", "作者 4"],
        description:
          "这里填入第二个作品的介绍。可以继续补充作品的目标场景、交互方式、使用工具和最终演示效果。"
      }
    ]
  };

  SiteContent.datasets = {
    intro:
      "This page highlights public benchmarks and self-collected study datasets produced by the group. Some entries provide a separate download portal, while others point to the project page, repository, or local paper page where the collection protocol and release details are documented.",
    items: [
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
            name: "Pei Li (李沛)",
            role: "M.Eng. Student",
            photo: "./assets/media/people/2023pei-li.jpg",
            photoAlt: "Sample portrait for Pei Li",
            bio:
              "Temporal action localization using smart devices equipped with IMUs.",
            palette: ["#5d4628", "#ffe6c8"]
          },
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
            name: "Tiantian Wang (王天天)",
            role: "M.Eng. student",
            photo: "./assets/media/people/2024tiantian-wang.jpg",
            photoAlt: "Sample portrait for Qunhang Fu",
            bio:
              "In his second year as a graduate student, he chose to pursue a master's degree at The University of Tokyo in 2026.",
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

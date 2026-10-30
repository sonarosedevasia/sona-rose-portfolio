/**
 * PORTFOLIO DATA CONFIGURATION
 * All portfolio content is centralized here for easy editing and personalization.
 * Based on Sona Rose Devasia's Resume.
 */

const PORTFOLIO_DATA = {
  personal: {
    name: "Sona Rose Devasia",
    title: "B.Tech Computer Science Student",
    roles: [
      "B.Tech Computer Science Student"
    ],
    tagline: "Hands-on experience in data structures, algorithms, machine learning, and full-stack web development.",
    status: {
      text: "Open to Internships & Roles • B.Tech CSE (2023 - 2027)",
      available: true
    },
    location: "Kanjirappally, Kerala, India",
    email: "sonarosedevasia@gmail.com",
    phone: "+91 9207091814",
    github: "https://github.com/sonarosedevasia",
    linkedin: "https://linkedin.com/in/sona-rose-devasia-7812332a8",
    stats: [
      { label: "B.Tech CGPA", value: "9.28", subtext: "Amal Jyothi College of Engg" },
      { label: "Internships Completed", value: "2", subtext: "NeST Digital & Infosys" },
      { label: "Projects", value: "7", subtext: "Full-Stack, DevOps & AI" },
      { label: "Certifications", value: "4", subtext: "IBM, NPTEL Elite, Oracle, Infosys" }
    ],
    bio: [
      "I am a B.Tech Computer Science student with a strong foundation in core engineering principles, data structures, algorithms, and full-stack software development, reinforced through two internships and hands-on projects.",
      "Adaptable, quick to master new technical workflows, and enthusiastic about contributing across diverse software engineering roles—from software engineering and web systems to data pipelines and emerging technologies.",
      "Driven by curiosity and a commitment to practical problem solving, I actively explore design thinking, hackathons, and collaborative engineering environments to build high-quality solutions."
    ]
  },

  pillars: [
    {
      icon: "sparkles",
      title: "Data Science & Machine Learning",
      desc: "Preprocessing real-world datasets, applying ML algorithms for predictive modeling, and training NLU pipelines using spaCy, BERT, and Scikit-learn."
    },
    {
      icon: "layers",
      title: "Full-Stack Web Development",
      desc: "Building dynamic, end-to-end web applications with FastAPI, Flask, and Streamlit, paired with responsive HTML5, CSS3, JavaScript, and SQLite."
    },
    {
      icon: "cpu",
      title: "Data Structures & Algorithms",
      desc: "Strong foundation in data structures, algorithmic design, and problem solving across Python, C, and foundational Java."
    },
    {
      icon: "server",
      title: "Database Management & SQL",
      desc: "Relational database schema modeling, ACID-compliant SQLite querying, indexing, and multi-field search optimization."
    }
  ],

  education: [
    {
      degree: "B.Tech - Computer Science and Engineering",
      institution: "Amal Jyothi College of Engineering (Autonomous), Kanjirappally",
      duration: "2023 - 2027",
      cgpa: "9.28 / 10.00",
      badge: "Autonomous Institution",
      highlights: [
        "Consistent academic excellence maintaining a 9.28 / 10.00 cumulative CGPA."
      ],
      coursework: [
        "Data Structures & Algorithms",
        "Machine Learning",
        "Database Management Systems (DBMS)",
        "Object-Oriented Programming (Java/C)",
        "Full-Stack Web Development",
        "Operating Systems",
        "Computer Networks",
        "Discrete Mathematics"
      ]
    },
    {
      degree: "Higher Secondary (Class XII - CBSE)",
      institution: "Little Flower Public School and Junior College, Kollamula",
      duration: "2023",
      cgpa: "88.8%",
      badge: "CBSE Board",
      highlights: [
        "Secured 88.8% aggregate in CBSE Senior Secondary examinations with focus on Science and Mathematics."
      ],
      coursework: [
        "Physics",
        "Chemistry",
        "Mathematics",
        "Computer Science",
        "English"
      ]
    },
    {
      degree: "Secondary (Class X - CBSE)",
      institution: "Little Flower Public School and Junior College, Kollamula",
      duration: "2021",
      cgpa: "94.8%",
      badge: "CBSE Board Distinction",
      highlights: [
        "Achieved 94.8% distinction in CBSE Class X secondary board examinations."
      ],
      coursework: [
        "Mathematics",
        "Science",
        "Social Science",
        "English",
        "Hindi / Languages"
      ]
    }
  ],

  experience: [
    {
      role: "Data Science & Machine Learning Intern",
      company: "NeST Digital",
      period: "Feb 2026 - Mar 2026",
      type: "Internship",
      location: "Kochi, Kerala",
      coverImage: "assets/images/internships/nest-digital-completion-cover.jpg",
      certificates: [
        {
          title: "NeST Digital Academy — Certificate of Completion",
          image: "assets/images/internships/nest-digital-completion-cover.jpg",
          badge: "Certificate of Completion"
        },
        {
          title: "NeST Digital — Certificate of Internship",
          image: "assets/images/internships/nest-digital-internship-certificate.jpg",
          badge: "Certificate of Internship"
        }
      ],
      summary: "Applied ML algorithms and data preprocessing techniques on real-world datasets to develop predictive models in Python.",
      achievements: [
        "Preprocessed and analysed complex datasets using Pandas and NumPy to ensure feature quality.",
        "Applied data preprocessing, hyperparameter tuning, and model evaluation techniques for classification tasks.",
        "Visualized data insights and model evaluation results using Python libraries to support decision-making."
      ],
      skills: ["Python", "Machine Learning", "Data Preprocessing", "Model Evaluation", "Data Visualization", "Predictive Modeling", "Pandas"]
    },
    {
      role: "Machine Learning Intern",
      company: "Infosys Springboard",
      period: "Oct 2025 - Dec 2025",
      type: "Virtual Internship",
      location: "Virtual",
      coverImage: "assets/images/internships/infosys-springboard-certificate.jpg",
      certificates: [
        {
          title: "Infosys Springboard — Certificate of Completion",
          image: "assets/images/internships/infosys-springboard-certificate.jpg",
          badge: "Certificate of Completion"
        }
      ],
      summary: "Engineered an NLU-powered chatbot training and evaluation engine integrated with a full-stack interactive interface.",
      achievements: [
        "Developed an NLU-based chatbot training platform using spaCy, BERT, and Logistic Regression for intent classification.",
        "Built an end-to-end web application using Streamlit, FastAPI, and SQLite for data handling and user interaction.",
        "Tested and validated model performance using precision, recall, and F1-score evaluation metrics."
      ],
      skills: ["spaCy", "BERT", "Logistic Regression", "Streamlit", "FastAPI", "SQLite", "NLP / NLU", "Model Metrics"]
    }
  ],

  skills: {
    categories: [
      { id: "all", name: "All Domains" },
      { id: "programming", name: "Languages" },
      { id: "ai_ml", name: "AI & Machine Learning" },
      { id: "web_frameworks", name: "Web & Backend" },
      { id: "database_tools", name: "Databases & Tools" },
      { id: "concepts_soft", name: "CS Foundations" }
    ],
    clusters: [
      {
        id: "programming",
        title: "Programming & Core Languages",
        icon: "code",
        tag: "Core Stack",
        summary: "Multi-paradigm programming and algorithmic problem solving.",
        skills: [
          { name: "Python" },
          { name: "C" },
          { name: "Java" },
          { name: "SQL" },
          { name: "JavaScript" }
        ]
      },
      {
        id: "ai_ml",
        title: "Machine Learning & AI",
        icon: "ai",
        tag: "ML & NLP",
        summary: "Natural Language Processing, classification, transformers, and data pipelines.",
        skills: [
          { name: "Machine Learning" },
          { name: "BERT" },
          { name: "spaCy" },
          { name: "Logistic Regression" },
          { name: "Data Preprocessing" },
          { name: "Model Evaluation" },
          { name: "Data Visualization" }
        ]
      },
      {
        id: "web_frameworks",
        title: "Web & Backend Frameworks",
        icon: "web",
        tag: "Web APIs",
        summary: "Modern backend APIs, ML interfaces, and web application development.",
        skills: [
          { name: "FastAPI" },
          { name: "React" },
          { name: "Streamlit" },
          { name: "Flask" },
          { name: "HTML5 & CSS3" }
        ]
      },
      {
        id: "database_tools",
        title: "Databases & Storage",
        icon: "database",
        tag: "Data Layer",
        summary: "Relational database schema modeling and query optimization.",
        skills: [
          { name: "SQLite" },
          { name: "Relational DBMS" },
          { name: "Parameterized SQL" }
        ]
      },
      {
        id: "concepts_soft",
        title: "Tools & CS Foundations",
        icon: "tools",
        tag: "Ecosystem",
        summary: "Development tools, version control, and computer science foundations.",
        skills: [
          { name: "Git & GitHub" },
          { name: "Docker" },
          { name: "VS Code" },
          { name: "Google Colab" },
          { name: "Data Structures" },
          { name: "Algorithms" }
        ]
      }
    ],
    items: [
      { name: "Python", category: "programming", badge: "Primary • Backend & ML" },
      { name: "C", category: "programming", badge: "Core Systems & Algorithms" },
      { name: "Java (Basics)", category: "programming", badge: "Oracle Certified" },
      { name: "SQL", category: "programming", badge: "NPTEL Elite • Relational Queries" },
      { name: "JavaScript", category: "programming", badge: "ES6+ Interactive Front-End" },
      { name: "React", category: "web_frameworks", badge: "Live Dynamic Dashboard UI" },
      { name: "FastAPI", category: "web_frameworks", badge: "Async REST & WebSockets" },
      { name: "WebSockets", category: "web_frameworks", badge: "Real-Time Telemetry Stream" },
      { name: "Streamlit", category: "web_frameworks", badge: "Interactive ML Dashboards" },
      { name: "Flask", category: "web_frameworks", badge: "Application Routing" },
      { name: "HTML5 & CSS3", category: "web_frameworks", badge: "Infosys Certified" },
      { name: "Machine Learning", category: "ai_ml", badge: "Supervised & Unsupervised" },
      { name: "BERT (Transformers)", category: "ai_ml", badge: "NLU Intent Classification" },
      { name: "spaCy", category: "ai_ml", badge: "Tokenization & NLU" },
      { name: "Logistic Regression", category: "ai_ml", badge: "Classification Engine" },
      { name: "Active Learning", category: "ai_ml", badge: "Human-in-the-Loop Feedback" },
      { name: "Data Preprocessing", category: "ai_ml", badge: "Feature Engineering" },
      { name: "Model Evaluation", category: "ai_ml", badge: "F1 Score & Precision/Recall" },
      { name: "SQLite", category: "database_tools", badge: "Embedded ACID Database" },
      { name: "Relational DBMS", category: "database_tools", badge: "Schema Design & Normalization" },
      { name: "Git & GitHub", category: "concepts_soft", badge: "Version Control" },
      { name: "Docker", category: "concepts_soft", badge: "Compose & Containerization" },
      { name: "Data Structures", category: "concepts_soft", badge: "Core CS Rigor" },
      { name: "Algorithms", category: "concepts_soft", badge: "Complexity Optimization" }
    ]
  },

  projects: [
    {
      id: "dfu_classification",
      featured: true,
      category: "ai_ml",
      title: "Diabetic Foot Ulcer Classification & Severity Assessment",
      tagline: "Two-stage deep learning framework for automated DFU screening and 4-grade severity classification combining DenseNet201, VGG19, and NASNetMobile feature fusion with Explainable AI.",
      image: "assets/images/project-dfu-cover.jpg",
      video: "assets/videos/dfu-demo.mp4",
      badges: ["Final-Year B.Tech CSE Project", "Deep Learning & Medical AI", "Explainable AI (XAI)"],
      tech: ["Python", "TensorFlow", "Keras", "DenseNet201", "VGG19", "NASNetMobile", "Grad-CAM", "SHAP", "LIME", "OpenCV", "FastAPI", "Google Colab GPU"],
      github: "https://github.com/sonarosedevasia",
      metrics: [
        { label: "Pipeline", value: "Two-Stage AI" },
        { label: "Feature Fusion", value: "3,488-D Vector" },
        { label: "Explainability", value: "Grad-CAM • SHAP • LIME" }
      ],
      description: "DFU-AI is an end-to-end two-stage deep learning framework developed for automated Diabetic Foot Ulcer (DFU) screening and dataset-specific severity classification using clinical foot images. Stage 1 first analyses an uploaded foot image and classifies it into Healthy or Diabetic Foot Ulcer (DFU). If an ulcer is detected, the image is forwarded to Stage 2 to predict one of four clinical severity grades: Grade 1, Grade 2, Grade 3, or Grade 4. The framework combines three pretrained CNNs (DenseNet201, VGG19, and NASNetMobile) using Global Average Pooling and multi-CNN feature fusion (3,488 dimensions) into a custom FusionNet classifier. To ensure clinical transparency, the system integrates three Explainable AI techniques: Grad-CAM, SHAP, and LIME.",
      architecture: [
        "Two-Stage Classification Workflow: Stage 1 binary screening (Healthy vs. DFU); Stage 2 four-class severity classification (Grade 1, Grade 2, Grade 3, Grade 4).",
        "Multi-CNN Feature Extraction: Combines DenseNet201 (1,920 features for dense feature reuse), VGG19 (512 features for deep spatial textures), and NASNetMobile (1,056 features for cell-based representations) pretrained on ImageNet.",
        "Global Average Pooling & Feature Fusion: Converts spatial feature maps into compact numerical vectors and concatenates them into a unified 3,488-dimensional latent vector.",
        "Custom FusionNet Classifier: Dense classification head with Dropout, Batch Normalization, Dense(128, ReLU), and Softmax output heads tailored for binary and 4-grade tasks.",
        "Explainable AI (XAI) Suite: Spatial activation heatmaps via Grad-CAM, feature attribution masking via SHAP, and superpixel perturbation via LIME for transparent model decision interpretation.",
        "Image Preprocessing & Augmentation: RGB conversion, 224 × 224 resizing, model-specific normalization, horizontal flipping, rotation, zoom, and contrast adjustment.",
        "Dataset Engineering & Group-Aware Splitting: Evaluated on Dataset 1 (1,055 images for Healthy vs. DFU) and Dataset 2 (10,016 images across Grades 1–4) with near-duplicate analysis and patient group-aware splitting."
      ],
      xai: [
        { name: "Grad-CAM", desc: "Generates spatial heatmaps over clinical foot images to highlight regions where CNNs activate during prediction." },
        { name: "SHAP", desc: "Estimates feature contributions through image-region masking to provide visual attribution maps." },
        { name: "LIME", desc: "Perturbs superpixel regions to identify areas that support or oppose severity grade predictions." }
      ],
      datasets: [
        { name: "Dataset 1 — Healthy vs DFU", count: "1,055 clinical foot images (512 DFU, 543 Healthy) evaluated with near-duplicate screening." },
        { name: "Dataset 2 — DFU Severity Classification", count: "10,016 images across Grade 1, Grade 2, Grade 3, and Grade 4 with group-aware splitting." }
      ],
      challenges: "Balancing high-dimensional visual representations across disparate CNN backbones, handling clinical variability in skin tones and lesion geometry, and generating trustworthy multi-method Explainable AI maps (Grad-CAM, SHAP, and LIME) to assist preliminary medical evaluation.",
      disclaimer: "Academic research prototype intended to support preliminary image-based assessment and clinical research; not intended to replace professional medical diagnosis."
    },
    {
      id: "infra_monitoring",
      featured: true,
      category: "fullstack",
      title: "Real-Time Infrastructure Monitoring Platform",
      tagline: "Full-stack DevOps monitoring dashboard streaming live CPU, RAM, disk, and uptime metrics via WebSockets with Docker Compose.",
      image: "assets/images/project-inframonitor-cover.jpg",
      video: "assets/videos/infra-monitor.mp4",
      badges: ["DevOps & Full-Stack", "WebSockets & FastAPI", "Docker Containerized"],
      tech: ["React", "FastAPI", "WebSockets", "Docker", "Tailwind CSS", "Recharts", "psutil", "Python"],
      github: "https://github.com/sonarosedevasia",
      description: "A full-stack DevOps-style monitoring platform that streams live CPU, RAM, disk usage, and uptime metrics every second using WebSockets. Built with a FastAPI Python backend that captures host system metrics via psutil and streams JSON telemetry over WebSocket to an interactive React dashboard with live-updating Recharts visualizations. The entire platform is containerized with Docker Compose for seamless single-command deployment.",
      problemStatement: "Traditional server monitoring solutions either rely on high-latency polling intervals that miss transient resource spikes, or require heavy enterprise suites that are complicated to configure. This project solves that problem with a lightweight, sub-second telemetry pipeline streaming continuous real-time server vitals with immediate threshold alerts.",
      objectives: [
        "Develop an end-to-end real-time server telemetry and system resource monitoring dashboard.",
        "Capture live host CPU, memory, storage, and system uptime metrics at 1-second continuous intervals.",
        "Stream structured JSON metric payloads to connected clients over asynchronous WebSockets.",
        "Render live time-series area and line charts using React and Recharts without client thread blocking.",
        "Implement automatic threshold alert notifications (e.g. CPU load exceeding 80%).",
        "Enable client-side auto-reconnection resilience during network or server disconnects.",
        "Orchestrate backend and frontend microservices using Docker Compose with single-command startup."
      ],
      modules: [
        { name: "Telemetry Sampling Engine", desc: "FastAPI backend reading continuous host CPU%, RAM%, disk utilization, and uptime via Python psutil at 1-second cadence." },
        { name: "WebSocket Streaming Pipeline", desc: "Asynchronous WebSocket connection manager broadcasting JSON telemetry packets to active browser clients." },
        { name: "Live Recharts Dashboard", desc: "React frontend visualizing continuous dual-series CPU and memory curves with smooth rolling windows and responsive layouts." },
        { name: "Alert & Health Sentinel", desc: "Real-time stat indicators with visual warning alerts whenever host resource usage crosses safe operating thresholds." },
        { name: "Docker Containerization", desc: "Multi-container Docker Compose setup managing container networks, service dependencies, and unified one-line boot." }
      ],
      architecture: [
        "FastAPI Python backend reading host CPU, RAM, disk usage, and uptime metrics via psutil at 1-second continuous intervals.",
        "Asynchronous WebSocket endpoint streaming structured JSON metric payloads to connected clients with automatic heartbeat management.",
        "Interactive React frontend styled with a modern dark theme dashboard and Tailwind CSS, consuming real-time WebSocket frames.",
        "Live-updating dual-series Recharts area and line graphs rendering continuous CPU and RAM time-series metrics.",
        "Real-time stat cards displaying instantaneous CPU%, RAM%, Disk%, and Uptime alongside an automatic red alert banner when CPU exceeds 80%.",
        "Resilient client-side WebSocket layer featuring automatic reconnection handling upon connection drops.",
        "Full Docker Compose containerization (`docker compose up`) orchestrating the backend and frontend services with single-command startup."
      ],
      challenges: "Maintaining sub-second WebSocket telemetry streaming without UI thread freezing or client memory accumulation over time, implementing instant auto-reconnect resilience during connection drops, and containerizing both FastAPI and React into a lightweight single-command Docker Compose workflow.",
      interviewSummary: "Our Real-Time Infrastructure Monitoring Platform is a full-stack DevOps telemetry application that streams live server metrics—CPU, RAM, disk usage, and system uptime—every second over WebSockets. Built with a FastAPI backend utilizing psutil and an interactive React frontend with live Recharts visualizations, the system alerts administrators whenever resource thresholds are breached and features single-command deployment via Docker Compose."
    },
    {
      id: "geosentinel",
      featured: true,
      category: "iot",
      title: "GeoSentinel: LoRa-Based Landslide Early Warning System",
      tagline: "IoT environmental monitoring and early-warning platform combining ESP32 edge sensing, SX1278 LoRa telemetry, and real-time risk assessment.",
      image: "assets/images/project-geosentinel.svg",
      badges: ["IoT & Embedded Systems", "LoRa 433MHz & ESP32", "Edge Risk Telemetry"],
      tech: ["C / C++", "ESP32", "LoRa SX1278", "SPI", "GPIO Interrupts", "Arduino IDE", "Telemetry Dashboard"],
      github: "https://github.com/sonarosedevasia",
      metrics: [
        { label: "Wireless Range", value: "Long-Range LoRa (433MHz)" },
        { label: "Hardware Stack", value: "ESP32 + SX1278" },
        { label: "Sensors & Telemetry", value: "Rainfall + Soil Moisture" }
      ],
      description: "GeoSentinel is an IoT-based environmental monitoring and early-warning system engineered to detect conditions associated with potential landslide activity. The system consists of a battery-powered field transmitter node and a base-station receiver. The transmitter collects real-time rainfall and soil moisture readings via an ESP32, converts raw signals into categorized risk levels (slight/heavy rainfall, moisture saturation), and wirelessly transmits packets over an SX1278 LoRa module operating at 433 MHz using SPI and DIO0 interrupt-driven communication. The receiver base station continuously evaluates environmental risk states, renders a monitoring dashboard, and triggers a local audible buzzer alarm when hazardous landslide thresholds are crossed.",
      architecture: [
        "Field transmitter unit combining ESP32 edge processing with rain and soil moisture sensors for real-time condition classification.",
        "Long-range wireless telemetry link utilizing SX1278 LoRa 433 MHz transceivers communicating over SPI with hardware DIO0 interrupt handling.",
        "Receiver base-station node parsing environmental packet payloads and evaluating continuous landslide-risk thresholds.",
        "Multi-tier alert system combining local audible buzzer alarms with a remote monitoring dashboard for proactive disaster risk reduction."
      ],
      challenges: "Ensuring low-power operation for remote battery deployment while maintaining robust long-range packet delivery in hilly terrain and preventing false alarm triggers through sensor debouncing and edge risk hysteresis."
    },
    {
      id: "bot_trainer",
      featured: true,
      category: "ai_ml",
      title: "Bot Trainer — NLU Model Trainer & Evaluation Platform",
      tagline: "End-to-end NLU platform with dataset annotation, multi-model evaluation, and active learning loop.",
      image: "assets/images/project-bottrainer-cover.jpg",
      videos: [
        {
          id: "user",
          title: "User Portal — Intent Inference & Conversational Sandbox",
          desc: "End-user interactive query interface, real-time intent prediction, named entity recognition (NER), confidence score feedback, and conversational dialogue testing.",
          src: "assets/videos/bot-trainer-user.mp4"
        },
        {
          id: "admin",
          title: "Admin Portal — Dataset Annotation, Training & Active Learning",
          desc: "Administrative dataset ingestion, custom intent/entity labeling studio, multi-model training (spaCy, BERT, Logistic Regression), confusion matrix diagnostics, F1 comparisons, and low-confidence review triage.",
          src: "assets/videos/bot-trainer-admin.mp4"
        }
      ],
      badges: ["NLP / NLU Platform", "Active Learning Loop", "Dual Portals (User & Admin)"],
      tech: ["Python", "FastAPI", "Streamlit", "BERT", "spaCy", "Scikit-Learn", "SQLite"],
      github: "https://github.com/sonarosedevasia",
      description: "Bot Trainer is an end-to-end Natural Language Understanding (NLU) platform engineered for developing, training, and diagnostically evaluating conversational AI models. It streamlines the lifecycle of conversational AI by combining dataset annotation, multi-algorithm training (spaCy, BERT, and Logistic Regression), and an active learning feedback loop that surfaces low-confidence predictions for human review and iterative model retraining.",
      problemStatement: "Building robust conversational bots is often hampered by slow manual data annotation, lack of comparative multi-model evaluation, and the inability to automatically capture and learn from uncertain real-world predictions once a bot is deployed.",
      objectives: [
        "Develop a full-stack NLU platform supporting dataset ingestion, intent classification, and entity annotation.",
        "Provide an end-user testing interface for conversational query inference and real-time intent prediction.",
        "Train and evaluate multiple NLP backbones side-by-side (spaCy tokenizers, pre-trained BERT embeddings, and Logistic Regression).",
        "Generate rich diagnostic analytics including multi-class confusion matrices and versioned F1 score comparisons.",
        "Implement an active learning human-in-the-loop pipeline that flags low-confidence user queries for administrative review.",
        "Maintain distinct user and admin workflows backed by persistent SQLite dataset and model checkpoint storage."
      ],
      modules: [
        { name: "Conversational Testing Interface (User Portal)", desc: "Interactive chat sandbox where users submit conversational queries, view predicted intents and entity highlights, and inspect classification confidence levels." },
        { name: "Dataset Ingestion & Labeling Studio (Admin)", desc: "Comprehensive annotation suite for importing conversational transcripts, defining custom intent categories, and tagging named entity spans." },
        { name: "Multi-Model Training Engine (Admin)", desc: "Training pipeline benchmarking spaCy, BERT embeddings, and Logistic Regression classifiers with automated validation splits." },
        { name: "Diagnostic Evaluation Dashboard (Admin)", desc: "Visual diagnostic tools rendering confusion matrices, precision, recall, and historical F1 progression across model checkpoints." },
        { name: "Active Learning & Review Queue (Admin)", desc: "Human-in-the-loop triage system isolating low-confidence runtime queries for administrator correction and dataset enrichment." }
      ],
      architecture: [
        "Full-Stack ML Architecture: Streamlit UI and FastAPI backend providing responsive model inference and dataset management.",
        "Dual-Portal Workflows: End-user conversational testing sandbox separated from administrative training and active learning triage.",
        "Multi-Algorithm NLP Pipeline: spaCy rule-based tokenization, pre-trained BERT contextual embeddings, and Scikit-Learn Logistic Regression heads.",
        "Continuous Active Learning Loop: Low-confidence runtime predictions automatically queued for human annotation and incremental model fine-tuning.",
        "Relational Metadata Storage: SQLite database archiving intent datasets, model checkpoint metrics, and reviewed query histories."
      ],
      challenges: "Engineering an active learning queue that surfaces uncertain predictions without overwhelming reviewers, balancing computational latency between deep BERT embeddings and lightweight linear classifiers for real-time inference, and designing clear diagnostic visualizations for multi-class intent confusion.",
      interviewSummary: "Bot Trainer is an end-to-end NLU platform developed with Python, FastAPI, Streamlit, spaCy, and BERT that empowers engineers to annotate conversational datasets, train multiple NLP models side-by-side, and continuously improve bot performance through an active learning feedback loop. The project features dedicated user and admin portals and provides deep diagnostic benchmarking with confusion matrices and F1 score tracking."
    },
    {
      id: "nutrition_assistant",
      featured: true,
      category: "fullstack",
      title: "Online Grocery Store with Nutrition Recommendation System",
      tagline: "Full-stack e-grocery platform with real-time shopping cart nutrient analysis and intelligent dietary recommendations.",
      image: "assets/images/project-nutrition-cover.jpg",
      videos: [
        {
          id: "user",
          title: "User Portal — Shopping & Nutrition Recommendation Engine",
          desc: "User registration, product browsing, dynamic shopping cart management, automatic cart nutrient calculation, deficiency detection (proteins, vitamins, fiber), complementary food suggestions, and checkout.",
          src: "assets/videos/grocery-user.mp4"
        },
        {
          id: "admin",
          title: "Admin Portal — Product Catalog & Order Management",
          desc: "Secure administrator authentication, product catalog CRUD (add, update, delete products), inventory stock control, and customer order management.",
          src: "assets/videos/grocery-admin.mp4"
        }
      ],
      badges: ["Full-Stack Web App", "Flask & Python", "SQLite", "Nutrition Recommender"],
      tech: ["HTML", "CSS", "JavaScript", "Python", "Flask", "SQLite"],
      github: "https://github.com/sonarosedevasia",
      description: "The Online Grocery Store with Nutrition Recommendation System is a full-stack web application developed to make online grocery shopping more convenient while actively promoting healthier food choices. Unlike traditional grocery platforms that only handle transactions, this system analyzes the nutritional content of items in the shopping cart in real time, identifies missing essential nutrients, and recommends suitable food items to fulfill those dietary gaps before checkout.",
      problemStatement: "Most online grocery platforms focus exclusively on purchasing products and provide zero guidance on the nutritional quality or balance of selected items. As a result, users may unknowingly build an unbalanced shopping cart deficient in essential nutrients. Our project bridges this gap by embedding an intelligent nutritional recommendation module directly into the grocery shopping flow.",
      objectives: [
        "Develop a complete full-stack online grocery shopping platform with user registration and secure authentication.",
        "Enable seamless browsing, searching, category filtering, and purchasing of grocery items.",
        "Implement efficient shopping cart and order management with live total calculation.",
        "Analyze the cumulative nutritional content (proteins, carbs, vitamins, minerals, fiber, healthy fats) of items in the cart.",
        "Identify missing or insufficient nutrients compared to a balanced diet profile.",
        "Generate real-time, context-aware grocery recommendations to improve nutritional balance.",
        "Provide an administrative back-office portal for product catalog, inventory, and order management."
      ],
      modules: [
        { name: "User Authentication", desc: "User registration, secure login, password validation, and persistent user sessions." },
        { name: "Product Management", desc: "Browse grocery catalog, view detailed nutrition facts, keyword search, and category-based filtering." },
        { name: "Shopping Cart", desc: "Add products, dynamically increment/decrement quantities, remove items, and calculate bill totals." },
        { name: "Nutrition Recommendation System", desc: "Core differentiator: calculates cart nutrients, compares against a balanced profile, identifies missing nutrients, and recommends targeted items (e.g. eggs/milk/pulses if protein is low, oranges/lemons if Vitamin C is missing, whole grains/vegetables if fiber is deficient)." },
        { name: "Order Management", desc: "Order confirmation, invoice generation, checkout, and transaction persistence in SQLite." },
        { name: "Admin Module", desc: "Add new products, update pricing and nutritional metadata, delete discontinued items, monitor stock levels, and review customer orders." }
      ],
      database: [
        "Users Table: Credentials, authentication records, and user session management.",
        "Products Table: Catalog IDs, product names, prices, categories, and inventory stock counts.",
        "Cart Table: Active session-linked items, quantities, and nutritional totals.",
        "Orders Table: Confirmed orders, customer details, line items, timestamps, and order statuses.",
        "Nutrition Information Table: Detailed nutritional metrics per item (proteins, carbs, vitamins, minerals, fiber, healthy fats)."
      ],
      challenges: "Designing an efficient relational database schema connecting products to comprehensive nutritional profiles, implementing the real-time nutrient aggregation algorithm across multi-item shopping carts, managing concurrent user shopping sessions and cart state in Flask, and maintaining distinct role permissions for user shopping vs. admin inventory management.",
      interviewSummary: "Our project is an Online Grocery Store integrated with a Nutrition Recommendation System. Users can register, browse products, add items to their cart, and place orders. The unique feature of the project is that it analyzes the nutritional content of the shopping cart, identifies missing nutrients, and recommends suitable grocery items to create a more balanced diet. The application was developed using HTML, CSS, JavaScript, Flask, and SQLite, and helped us gain practical experience in full-stack web development, database management, and recommendation systems."
    },
    {
      id: "blood_bank",
      featured: true,
      category: "fullstack",
      title: "Blood Bank Management System",
      tagline: "Full-stack healthcare donor registry and inventory management system with fast multi-criteria SQL query optimization.",
      image: "assets/images/project-bloodbank-cover.jpg",
      video: "assets/videos/blood-bank.mp4",
      badges: ["Healthcare Web App", "Flask & Python", "SQLite", "Emergency Donor Registry"],
      tech: ["HTML", "CSS", "JavaScript", "Python", "Flask", "SQLite"],
      github: "https://github.com/sonarosedevasia",
      description: "The Blood Bank Management System is a full-stack healthcare web application developed to replace error-prone manual paper record-keeping with a secure, centralized digital blood registry. It enables rapid donor onboarding, real-time blood group inventory tracking, multi-criteria donor matching (by blood group, donor ID, city, or name), and critical transfusion coordination during medical emergencies.",
      problemStatement: "Hospital emergency wards and blood donation centers frequently rely on manual paperwork or unindexed spreadsheets to locate matching donors during critical crises. This introduces severe communication latency, human indexing errors, and potential incompatibility risks when patients urgently require specific blood groups.",
      objectives: [
        "Develop a full-stack, responsive digital donor registry and blood bank management platform.",
        "Implement full CRUD operations: register new blood donors, update medical status, and purge records.",
        "Provide fast, parameterized multi-field SQL search by blood group (A+, A-, B+, B-, AB+, AB-, O+, O-), donor name, and contact details.",
        "Track real-time inventory units per blood type with visual availability status indicators.",
        "Secure sensitive donor medical data within a normalized SQLite relational schema.",
        "Provide a clean, user-friendly interface optimized for clinical staff during emergency response."
      ],
      modules: [
        { name: "Donor Onboarding & Registration", desc: "Digital intake form capturing donor demographics, contact details, medical eligibility, and verified blood group classification." },
        { name: "Emergency Donor Search & Compatibility Engine", desc: "Parameterized SQL lookup enabling immediate multi-criteria filtering by blood type, location, and availability to locate compatible donors in seconds." },
        { name: "Blood Inventory & Stock Management", desc: "Real-time stock dashboard monitoring available blood bag units across all 8 major blood types with low-stock threshold alerts." },
        { name: "Record Maintenance & Audit Trail", desc: "Administrative CRUD workbench to update donor availability, modify contact information, and remove inactive or ineligible entries." },
        { name: "Transfusion Request Logging", desc: "Hospital recipient requisition portal logging patient requests, required blood units, urgency levels, and fulfillment history." }
      ],
      database: [
        "Donors Table: Donor ID, full name, age, gender, blood group, contact number, address, and eligibility status.",
        "Blood_Inventory Table: Stock units, blood type, collection timestamp, expiry date, and storage location.",
        "Requests Table: Requisition ID, hospital/patient name, required blood group, requested units, urgency status, and fulfillment date."
      ],
      architecture: [
        "Full-Stack Web Architecture: Clean HTML, CSS, and JavaScript frontend communicating with a Python Flask RESTful backend.",
        "Relational Schema Design: Normalized SQLite database structure enforcing data integrity across donors, inventory units, and hospital requests.",
        "Optimized SQL Queries: Parameterized multi-attribute queries delivering sub-5ms lookup speeds while preventing SQL injection vulnerabilities.",
        "Emergency Donor Triage: Filter algorithms that match compatible recipient-donor blood groups instantly during urgent clinical requests."
      ],
      challenges: "Designing parameterized SQL queries that prevent SQL injection while executing sub-5ms multi-attribute searches during emergency lookups, enforcing strict blood group validation rules to prevent clinical input errors, and ensuring mobile responsiveness for on-call medical coordinators.",
      interviewSummary: "Our Blood Bank Management System is a full-stack healthcare web application developed using Python, Flask, SQLite, and vanilla frontend technologies. It replaces manual paperwork with a centralized digital donor registry that executes sub-5ms parameterized SQL searches across blood groups, manages real-time blood inventory, and accelerates donor coordination during critical medical emergencies."
    },
    {
      id: "book_tracker",
      featured: true,
      category: "fullstack",
      title: "Book Tracker — Personal Library & Reading Manager",
      tagline: "Responsive web application for managing personal book collections with dynamic search, reading metrics, and persistent local storage.",
      image: "assets/images/project-booktracker-cover.jpg",
      video: "assets/videos/book-tracker.mp4",

      badges: ["Frontend Web App", "JavaScript & LocalStorage", "Live on GitHub Pages"],
      tech: ["HTML5", "CSS3", "JavaScript", "LocalStorage", "GitHub Pages"],
      github: "https://github.com/sonarosedevasia",
      demo: "https://sonarosedevasia.github.io/book-tracker/",
      description: "Book Tracker is a simple and responsive web application designed for organizing and tracking a personal book collection. Users can add books with a title, author, and reading status, displayed with the newest additions first. The application features live search by title or author, seamless status transitions between 'To Read', 'Reading', and 'Finished', book deletion, and real-time reading statistics. All collection data is persistently stored using browser localStorage, keeping books intact across page refreshes.",
      problemStatement: "Book lovers and casual readers often struggle to maintain an organized record of their reading lists, losing track of active reads, purchased titles, and finished books across cumbersome apps or forgotten paper bookmarks.",
      objectives: [
        "Develop a lightweight, zero-overhead personal book collection and reading progress manager.",
        "Enable complete client-side CRUD operations: add new books, update status, and remove entries.",
        "Provide instantaneous search filtering across book titles and author names as the user types.",
        "Calculate and display real-time reading statistics (Total Books, To Read, Currently Reading, Finished).",
        "Guarantee persistent library storage across browser refreshes via window.localStorage API.",
        "Deliver a mobile-first responsive user interface deployed live on GitHub Pages."
      ],
      modules: [
        { name: "Book Catalog & Entry Form", desc: "Interactive form to capture book title, author, and initial reading state with automatic validation." },
        { name: "Live Filter & Search Engine", desc: "Debounced real-time text filter querying across titles and authors with instant UI updates." },
        { name: "Reading Status State Machine", desc: "Dropdown status toggles transitioning items between 'To Read', 'Reading', and 'Finished' states." },
        { name: "Reading Analytics Bar", desc: "Live-updating KPI chips reflecting total collection volume and progress distribution." },
        { name: "LocalStorage Persistence Engine", desc: "Seamless serializing and deserializing of user library objects into browser storage without backend latency." }
      ],
      architecture: [
        "Modular vanilla JavaScript architecture implementing complete CRUD book management, dynamic search filtering, and reading statistics calculations.",
        "Browser localStorage persistence layer ensuring user library collections remain intact across browser sessions without an external database backend.",
        "Dynamic DOM manipulation rendering books in reverse chronological order (newest first) with interactive reading status dropdowns and instant deletion.",
        "Mobile-first responsive interface crafted with semantic HTML5 and custom CSS, deployed and hosted live on GitHub Pages."
      ],
      challenges: "Maintaining synchronization between in-memory book state, live DOM views, and browser localStorage while keeping instant search filtering and dynamic reading statistics reactive across both desktop and mobile viewports.",
      interviewSummary: "Book Tracker is a responsive client-side web application developed with HTML5, CSS3, and Vanilla JavaScript for organizing personal libraries. It features instant search, real-time reading progress analytics, and persistent client-side data storage using browser localStorage. The project was built with a mobile-first approach and is deployed live on GitHub Pages."
    }
  ],

  certifications: [
    {
      id: "ibm_python",
      title: "Python for Data Science, AI & Development",
      issuer: "IBM | Coursera",
      year: "Jul 2025",
      badge: "IBM Certified",
      desc: "Comprehensive certification authorized by IBM and offered through Coursera covering Python programming, data science fundamentals, APIs, and AI workflows.",
      coverImage: "assets/images/certifications/ibm-python-course-certificate.jpg",
      certificates: [
        {
          title: "Python for Data Science, AI & Development — Course Certificate",
          image: "assets/images/certifications/ibm-python-course-certificate.jpg",
          badge: "Course Certificate"
        },
        {
          title: "Python for Data Science and AI — IBM Digital Badge",
          image: "assets/images/certifications/ibm-python-digital-badge.jpg",
          badge: "IBM Digital Badge"
        }
      ]
    },
    {
      id: "nptel_dbms",
      title: "Database Management Systems - Elite",
      issuer: "NPTEL (IIT Kharagpur)",
      year: "Jul - Sep 2025",
      badge: "Elite Distinction (71%)",
      desc: "Advanced 8-week IIT Kharagpur certification covering relational algebra, SQL, normal forms, indexing, and transaction management with 71% consolidated score.",
      coverImage: "assets/images/certifications/nptel-dbms-elite.jpg",
      certificates: [
        {
          title: "Database Management System — Elite Distinction (71%)",
          image: "assets/images/certifications/nptel-dbms-elite.jpg",
          badge: "Elite 71% Certificate"
        }
      ]
    },
    {
      id: "oracle_java",
      title: "Oracle Java Foundation Learner's",
      issuer: "Oracle Academy",
      year: "Oct 2024",
      badge: "Oracle Academy Certified",
      desc: "8-week specialized credential covering Java syntax, object-oriented programming (OOP), control structures, recursion, and final exam completion.",
      coverImage: "assets/images/certifications/oracle-java-foundation-achievement.jpg",
      certificates: [
        {
          title: "Oracle Java Foundation Learner's — Award of Achievement",
          image: "assets/images/certifications/oracle-java-foundation-achievement.jpg",
          badge: "Course Achievement"
        },
        {
          title: "Java Foundations — Award of Final Exam Completion",
          image: "assets/images/certifications/oracle-java-exam-completion.jpg",
          badge: "Final Exam Award"
        }
      ]
    },
    {
      id: "infosys_web",
      title: "HTML5, CSS3 & JavaScript",
      issuer: "Infosys Springboard",
      year: "June 2025",
      badge: "Infosys Certified (3 Courses)",
      desc: "Full-stack web fundamentals covering semantic HTML5 markup, responsive CSS3 styling, and modern JavaScript DOM manipulation.",
      coverImage: "assets/images/certifications/infosys-html5.png",
      certificates: [
        {
          title: "HTML5 - The Language",
          image: "assets/images/certifications/infosys-html5.png",
          badge: "HTML5",
          date: "June 29, 2025"
        },
        {
          title: "CSS3",
          image: "assets/images/certifications/infosys-css3.jpg",
          badge: "CSS3",
          date: "June 29, 2025"
        },
        {
          title: "JavaScript",
          image: "assets/images/certifications/infosys-javascript.jpg",
          badge: "JavaScript",
          date: "June 30, 2025"
        }
      ]
    }
  ],

  hackathons: [
    {
      id: "sih_2025",
      title: "Smart India Hackathon 2025",
      award: "Certificate of Appreciation",
      level: "Institute Level Competition",
      organizer: "MakerHub IEDC AJCE & Institution's Innovation Council",
      date: "September 2025",
      badge: "National Hackathon",
      certificate: "assets/images/hackathons/smart-india-hackathon-2025.png"
    },
    {
      id: "nasa_space_apps_2024",
      title: "NASA International Space Apps Challenge",
      award: "Galactic Problem Solver",
      level: "Global Space & Science Hackathon",
      organizer: "NASA & Partner Space Agencies (ISRO, ESA, JAXA, CSA)",
      date: "October 2024",
      badge: "Global Hackathon",
      certificate: "assets/images/hackathons/nasa-space-apps-2024.jpg"
    },
    {
      id: "hackspiration_2024",
      title: "Hackspiration Hackathon",
      award: "Certificate of Participation",
      level: "Open-Source Coding Hackathon",
      organizer: "FOSS Club & Department of Computer Science, AJCE",
      date: "October 2024",
      badge: "Open Source",
      certificate: "assets/images/hackathons/hackspiration-2024.png"
    }
  ],

  achievements: [
    {
      id: "cyfusion_2026",
      title: "3rd Prize — Cyfusion (Design Thinking & Pitching)",
      desc: "Secured 3rd Prize in Cyfusion design thinking and pitching contest conducted by the PG Dept. of Computer Applications as part of Intercollegiate Fest SAHYA'26.",
      year: "January 2026",
      badge: "3rd Prize Winner",
      organizer: "Marian College Kuttikkanam Autonomous",
      coverImage: "assets/images/achievements/cyfusion-award-ceremony.jpg",
      certificates: [
        {
          title: "SAHYA 2026 Cyfusion — Stage Award Ceremony",
          image: "assets/images/achievements/cyfusion-award-ceremony.jpg",
          badge: "Award Ceremony"
        },
        {
          title: "Cyfusion — Certificate of Achievement (3rd Prize)",
          image: "assets/images/achievements/cyfusion-3rd-prize-certificate.jpg",
          badge: "Merit Certificate"
        }
      ]
    },
    {
      id: "i2u_2025",
      title: "Qualified for Phase-II — Innovation Ideas Unleashed (I²U)",
      desc: "Selected for Phase-II project contest evaluation for 'Image based Animal Type Classification for cattle and buffaloes' at Amal Jyothi College of Engineering.",
      year: "2025",
      badge: "Phase-II Finalist",
      organizer: "Amal Jyothi College of Engineering",
      coverImage: "assets/images/achievements/i2u-phase2-certificate.jpg",
      certificates: [
        {
          title: "Innovation Ideas Unleashed (I²U) 2025 — Phase-II Evaluation Certificate",
          image: "assets/images/achievements/i2u-phase2-certificate.jpg",
          badge: "Phase-II Certificate"
        }
      ]
    }
  ],

  terminalCommands: {
    help: "List of available commands: bio, skills, projects, education, experience, certs, stats, contact, clear, theme, matrix, neofetch, sudo hire",
    bio: "Sona Rose Devasia | B.Tech Computer Science Student (2023 - 2027)\nAmal Jyothi College of Engineering (Autonomous), Kanjirappally\nFocus: Machine Learning, Data Science, Full-Stack Web Development, and Data Structures.",
    education: "Amal Jyothi College of Engineering (Autonomous), Kanjirappally\nB.Tech in Computer Science & Engineering (2023 - 2027)\nCGPA: 9.28 / 10.00\nEarlier: Little Flower Public School & Jr College (Class XII: 88.8%, Class X: 94.8%)",
    experience: "1. Data Science & Machine Learning Intern @ NeST Digital, Kochi (Feb 2026 - Mar 2026)\n2. Machine Learning Intern @ Infosys Springboard (Oct 2025 - Dec 2025)",
    certs: "1. Python for Data Science, AI & Dev (IBM | Coursera | 2025)\n2. Database Management Systems - Elite (NPTEL IIT Kharagpur | 2025)\n3. Oracle Java Foundation Learner's (Oracle | 2024)\n4. HTML5, CSS3 & JavaScript (Infosys Springboard | 2025)",
    stats: "CGPA: 9.28 / 10.00 | Internships: 2 (NeST Digital & Infosys) | Shipped Projects: 3+ | Certifications: 4",
    hire: "Sona Rose Devasia is actively seeking Internships and Software / ML Engineering roles!\nEmail: sonarosedevasia@gmail.com\nPhone: +91 9207091814\nLinkedIn: https://linkedin.com/in/sona-rose-devasia-7812332a8\nGitHub: https://github.com/sonarosedevasia",
    socials: "Email: sonarosedevasia@gmail.com\nPhone: +91 9207091814\nLinkedIn: https://linkedin.com/in/sona-rose-devasia-7812332a8\nGitHub: https://github.com/sonarosedevasia\nLocation: Kanjirappally, Kerala"
  }
};

// Export to window for browser and module for testing
if (typeof window !== "undefined") {
  window.PORTFOLIO_DATA = PORTFOLIO_DATA;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = PORTFOLIO_DATA;
}

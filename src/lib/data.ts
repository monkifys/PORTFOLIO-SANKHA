export const experiences = [
  {
    title: "Project Intern",
    company: "Variable Energy Cyclotron Centre (VECC), Department of Atomic Energy, Govt. of India",
    duration: "2024 - 2025",
    type: "Internship",
    description: `Performed time-series analysis on accelerator data using pre-trained machine learning models. Worked on anomaly detection, model evaluation, and research documentation. Gained experience with experimental datasets used in nuclear physics research.`,
    image: "/projects/vecc.png",
  },
  {
    title: "Campus Ambassador",
    company: "Physics Wallah",
    duration: "2023 - 2024",
    type: "Campus Role",
    description: `Promoted academic initiatives and technical events across campus. Increased student participation through outreach and engagement programs, bridging the gap between educational platforms and students.`,
    image: "/projects/pw.png",
  },
];

export const achievements = [
  {
    id: 1,
    title: "National Space Hackathon 2025",
    award: "Winner (AIR 1)",
    year: "2025",
    description: "Secured All India Rank 1 in the National Space Hackathon for designing and building an innovative space tech solution.",
    organization: "National Space Society / ISRO Outreach",
    tag: "AIR 1 Winner",
    image: "/images/achievements/space-hackathon.png",
    certificatePdf: "/certificates/national-space-hackathon-2025.pdf",
    featured: true,
  },
  {
    id: 2,
    title: "AFCAT 02/2026",
    award: "Qualified (Shortlisted for AFSB)",
    year: "2026",
    description: "Qualified AFCAT 02/2026 via GATE Entry (Score: 442) and shortlisted for Air Force Selection Board (AFSB) testing for Technical Branch [AE(L)].",
    organization: "Indian Air Force (IAF)",
    tag: "AFCAT Qualified",
    image: "/images/achievements/afcat-2026.png",
    certificatePdf: null,
    featured: true,
  },
  {
    id: 3,
    title: "GATE 2026 (ECE)",
    award: "Qualified",
    year: "2026",
    description: "Successfully qualified the prestigious Graduate Aptitude Test in Engineering (GATE 2026) in Electronics & Communication Engineering.",
    organization: "IIT / Ministry of Education, Govt. of India",
    tag: "GATE Qualified",
    image: "/images/achievements/gate-2026.png",
    certificatePdf: "/certificates/gate-2026-scorecard.pdf",
    featured: true,
  },
  {
    id: 4,
    title: "Smart India Hackathon 2024",
    award: "Grand Finalist",
    year: "2024",
    description: "Selected as a Grand Finalist in the world's largest open innovation model organized by MoE & AICTE, Govt. of India.",
    organization: "Ministry of Education & AICTE",
    tag: "Grand Finalist",
    image: "/images/achievements/sih-2024.png",
    certificatePdf: "/certificates/smart-india-hackathon-2024.pdf",
    featured: true,
  },
  {
    id: 5,
    title: "NPTEL — The Joy of Computing Using Python",
    award: "Elite Certification",
    year: "2023",
    description: "Awarded Elite certification by IIT Madras for exceptional performance and problem-solving mastery in computational programming.",
    organization: "IIT Madras & NPTEL",
    tag: "Elite IIT Madras",
    image: null,
    certificatePdf: null,
    featured: false,
  },
];

export const projects = [
  {
    id: 1,
    title: "Smart Solar Tracking System",
    description: "An IoT-based solar tracking system with real-time sensor feedback and dynamic panel alignment.",
    fullDescription: "Developed an IoT-based solar tracking system using ESP32, LDR sensors, and servo motors. The system provides real-time sensor feedback and implements microcontroller algorithms to dynamically align solar panels for maximum energy capture. MATLAB was used for data analysis and performance visualization.",
    tech: ["ESP32", "LDR Sensors", "Servo Motors", "MATLAB", "IoT", "C++"],
    category: ["IoT", "Hardware"],
    github: "https://github.com/monkifys/Solar-Tracker-Website",
    demo: "https://solar-web-page.vercel.app",
    image: "/projects/solar-tracker.png",
    featured: true,
  },
  {
    id: 2,
    title: "Space Cargo Stowage System",
    description: "A database-driven system to optimize spacecraft cargo arrangement for mission reliability.",
    fullDescription: "Built a database-driven system to optimize spacecraft cargo arrangement. Designed frontend UI and backend validation for mission reliability. The system uses PHP and MySQL for data management and cargo optimization algorithms, with an intuitive HTML/CSS interface for operators.",
    tech: ["PHP", "MySQL", "HTML", "CSS", "XAMPP"],
    category: ["Web App", "Systems"],
    github: null,
    demo: null,
    image: "/projects/space-cargo.png",
    featured: true,
  },
  {
    id: 3,
    title: "AI-Based Brain Tumor Detection",
    description: "A deep learning model to detect brain tumors from MRI images using convolutional neural networks.",
    fullDescription: "Developed a deep learning model to detect brain tumors from MRI images. Applied convolutional neural networks for medical image classification, achieving high accuracy in differentiating between tumor and non-tumor cases. Built with Python and popular deep learning frameworks.",
    tech: ["Python", "CNN", "Deep Learning", "TensorFlow", "OpenCV", "NumPy"],
    category: ["AI/ML", "Healthcare"],
    github: null,
    demo: null,
    image: "/projects/brain-tumor.png",
    featured: true,
  },
  {
    id: 4,
    title: "AI-Based Camouflaged Object Detection",
    description: "An AI system capable of detecting camouflaged objects in complex backgrounds using deep learning.",
    fullDescription: "Designed an AI system capable of detecting camouflaged objects in complex backgrounds. Applied deep learning-based segmentation for object identification, using advanced computer vision techniques to distinguish objects that blend into their surroundings.",
    tech: ["Python", "Computer Vision", "Deep Learning", "Segmentation", "OpenCV"],
    category: ["AI/ML", "Computer Vision"],
    github: null,
    demo: null,
    image: "/projects/camouflage-detection.png",
    featured: true,
  },
];

export const skills = {
  frontend: {
    title: "PROGRAMMING",
    tech: "Java, Python, JavaScript, C++",
    description: "Core programming languages for applications and algorithms",
  },
  backend: {
    title: "WEB DEVELOPMENT",
    tech: "HTML, CSS, PHP, MySQL, XAMPP",
    description: "Building web applications with frontend and backend",
  },
  mobile: {
    title: "AI / ML & TOOLS",
    tech: "Machine Learning, Deep Learning, MATLAB, Xilinx, PSPICE",
    description: "AI/ML research and electronics simulation tools",
  },
  database: {
    title: "CORE SUBJECTS",
    tech: "Data Structures, DBMS, Computer Networks, Signal Processing",
    description: "Strong foundation in CS and ECE fundamentals",
  },
};

export const technologies = [
   // Languages
   { name: "C++", category: "Languages", icon: "SiCplusplus", color: "#00599C" },
   { name: "Python", category: "Languages", icon: "SiPython", color: "#3776AB" },
   { name: "JavaScript", category: "Languages", icon: "SiJavascript", color: "#F7DF1E" },
   { name: "TypeScript", category: "Languages", icon: "SiTypescript", color: "#3178C6" },
   { name: "Bash", category: "Languages", icon: "SiGnubash", color: "#4EAA25" },

   // Web & Frameworks
   { name: "React", category: "Web & Frameworks", icon: "SiReact", color: "#61DAFB" },
   { name: "Next.js", category: "Web & Frameworks", icon: "SiNextdotjs", color: "#000000" },
   { name: "TailwindCSS", category: "Web & Frameworks", icon: "SiTailwindcss", color: "#06B6D4" },
   { name: "Node.js", category: "Web & Frameworks", icon: "SiNodedotjs", color: "#339933" },
   { name: "Express", category: "Web & Frameworks", icon: "SiExpress", color: "#000000" },
   { name: "FastAPI", category: "Web & Frameworks", icon: "SiFastapi", color: "#009688" },
   { name: "Flask", category: "Web & Frameworks", icon: "SiFlask", color: "#000000" },

   // AI/ML & Core Tools
   { name: "Deep Learning", category: "AI / ML & Systems", icon: "SiGooglegemini", color: "#8E75FF" },
   { name: "Linux", category: "AI / ML & Systems", icon: "SiLinux", color: "#FCC624" },
   { name: "Docker", category: "AI / ML & Systems", icon: "SiDocker", color: "#2496ED" },
   { name: "PostgreSQL", category: "AI / ML & Systems", icon: "SiPostgresql", color: "#4169E1" },
   { name: "Firebase", category: "AI / ML & Systems", icon: "SiFirebase", color: "#FFCA28" },
];

export const services = [
   {
      id: 1,
      title: "AI / ML & Computer Vision",
      description:
         "Deep learning models for object detection, segmentation, and medical imaging. Experienced with CNN architectures, model training, and OpenCV pipelines.",
      icon: "Brain",
      features: [
         "Computer Vision & Segmentation",
         "Medical Image Classification",
         "Time-Series Anomaly Detection",
         "Model Evaluation & Prototyping",
      ],
   },
   {
      id: 2,
      title: "IoT & Hardware Prototyping",
      description:
         "Smart IoT devices, embedded microcontroller firmware, sensor integration, and real-time telemetry systems.",
      icon: "Server",
      features: [
         "ESP32 & Microcontroller Firmware",
         "Real-Time Sensor Integration",
         "Dynamic Servo & Actuator Control",
         "MATLAB Data Analysis & Visualization",
      ],
   },
   {
      id: 3,
      title: "Full-Stack Web Applications",
      description:
         "Modern, high-performance web applications built with Next.js, React, TailwindCSS, and backend services.",
      icon: "Globe",
      features: [
         "Next.js & React Frontend",
         "Interactive & Motion UI",
         "REST APIs & Database Design",
         "Fast Performance & Modern Aesthetics",
      ],
   },
   {
      id: 4,
      title: "Patent & Technical Innovation",
      description:
         "Patent-grade hardware design, rapid technical innovation, hackathon engineering, and research documentation.",
      icon: "Smartphone",
      features: [
         "Granted Patent Design (UK IPO)",
         "National Space Hackathon AIR 1",
         "GATE 2026 ECE Technical Mastery",
         "Experimental Research & Systems Design",
      ],
   },
];

export const openSourceRepos = [
   {
      name: "PORTFOLIO-SANKHA",
      description: "Modern, high-performance personal portfolio built with Next.js, Framer Motion, and TailwindCSS.",
      url: "https://github.com/monkifys/PORTFOLIO-SANKHA",
      isrelease: true,
      language: ["TypeScript", "Next.js"],
      topics: ["portfolio", "nextjs", "typescript", "framer-motion"],
      stars: true,
      forks: true,
   },
   {
      name: "Eco-Route",
      description: "Smart route optimization and eco-friendly navigation system built with TypeScript.",
      url: "https://github.com/monkifys/Eco-Route",
      isrelease: true,
      language: ["TypeScript"],
      topics: ["navigation", "optimization", "typescript"],
      stars: true,
      forks: true,
   },
   {
      name: "Solar-Tracker-Website",
      description: "Web interface and monitoring system for the IoT-based Smart Solar Tracking Device.",
      url: "https://github.com/monkifys/Solar-Tracker-Website",
      isrelease: true,
      language: ["JavaScript", "HTML/CSS"],
      topics: ["solar-tracker", "iot", "esp32"],
      stars: true,
      forks: true,
   },
];

export const experiences = [
  {
    title: "Project Intern",
    company: "Variable Energy Cyclotron Centre (VECC), Department of Atomic Energy, Govt. of India",
    duration: "2024 - 2025",
    description: `Performed time-series analysis on accelerator data using pre-trained machine learning models. Worked on anomaly detection, model evaluation, and research documentation. Gained experience with experimental datasets used in nuclear physics research.`,
    image: "/projects/vecc.png",
  },
  {
    title: "Campus Ambassador",
    company: "Physics Wallah",
    duration: "2023 - 2024",
    description: `Promoted academic initiatives and technical events across campus. Increased student participation through outreach and engagement programs, bridging the gap between educational platforms and students.`,
    image: "/projects/pw.png",
  },
];

export const projects = [
  {
    id: 1,
    title: "Smart Solar Tracking System",
    description: "An IoT-based solar tracking system with real-time sensor feedback and dynamic panel alignment.",
    fullDescription: "Developed an IoT-based solar tracking system using ESP32, LDR sensors, and servo motors. The system provides real-time sensor feedback and implements microcontroller algorithms to dynamically align solar panels for maximum energy capture. MATLAB was used for data analysis and performance visualization.",
    tech: ["ESP32", "LDR Sensors", "Servo Motors", "MATLAB", "IoT", "C++"],
    category: "IoT / Hardware",
    github: null,
    demo: null,
    image: "/projects/solar-tracker.png",
    featured: true,
  },
  {
    id: 2,
    title: "Space Cargo Stowage System",
    description: "A database-driven system to optimize spacecraft cargo arrangement for mission reliability.",
    fullDescription: "Built a database-driven system to optimize spacecraft cargo arrangement. Designed frontend UI and backend validation for mission reliability. The system uses PHP and MySQL for data management and cargo optimization algorithms, with an intuitive HTML/CSS interface for operators.",
    tech: ["PHP", "MySQL", "HTML", "CSS", "XAMPP"],
    category: "Web App",
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
    category: "AI/ML",
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
    category: "AI/ML",
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

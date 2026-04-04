export type Project = {
  name: string;
  date: string;
  desc: string;
  tech: string[];
  link: string;
  keyFeatures?: string[];
  caseStudyPrompt?: string;
  thumbnailPrompt?: string;
};

export const allProjects: Project[] = [
  {
    name: "Virtual Paging Algorithms Simulator",
    date: "Mar 2026",
    desc: "A high-fidelity Streamlit simulation environment for operating system memory management, built to visualize page replacement mechanics, frame allocation behavior, and fault patterns with Gemini-powered contextual analysis layered on top.",
    tech: ["Python", "Streamlit", "Google Gemini API"],
    link: "https://github.com/ciellamher/Virtual-Paging-Algorithms-Simulation",
  },
  {
    name: "IntelliAI Drive",
    date: "Mar 2026",
    desc: "An autonomous driving research platform that combines real-time computer vision, reinforcement learning, and simulation-driven evaluation to train and interrogate an intelligent vehicle agent under dynamic road conditions.",
    tech: ["Python", "Jupyter Notebook", "Reinforcement Learning", "OpenCV"],
    link: "https://github.com/ciellamher/IntelliAIDrive",
  },
  {
    name: "Pokemon HAU",
    date: "Mar 2026",
    desc: "A polished Flutter mobile experience engineered around responsive layouts, animation-rich interaction patterns, and real-time PokéAPI data delivery for a highly fluid and production-grade consumer interface.",
    tech: ["Dart", "Flutter", "REST APIs (PokeAPI)"],
    link: "https://github.com/ciellamher/Pokemon-Hau",
  },
  {
    name: "Multimodal Chatbot",
    date: "Feb 2026",
    desc: "A multimodal Python assistant architecture designed to ingest heterogeneous inputs, fuse context across modalities, and generate disciplined responses through LLM orchestration and prompt-aware control flows.",
    tech: ["Python", "NLP", "LLM Integration (OpenAI/Gemini)"],
    link: "https://github.com/ciellamher/MultimodalChatbot",
  },
  {
    name: "Math Chatbot",
    date: "Feb 2026",
    desc: "A mathematically focused reasoning assistant engineered to decompose symbolic and numeric problems into structured solution steps while maintaining strict response control and computation fidelity.",
    tech: ["Python", "NLP", "LLM Integration (OpenAI/Gemini)"],
    link: "https://github.com/ciellamher/MathChatbot",
  },
  {
    name: "Face Recognition System",
    date: "Jan 2026",
    desc: "A computer vision pipeline for facial detection and identity recognition, built around feature extraction, model training, and image processing primitives for practical biometric analysis.",
    tech: ["Python", "OpenCV", "Machine Learning"],
    link: "https://github.com/ciellamher/MLA1-Face-Recognition",
  },
  {
    name: "CPU Scheduling Simulator",
    date: "Feb 2026",
    desc: "A scheduling analysis engine for simulating FCFS, SJF, and Round Robin algorithms with visual Gantt timelines, turnaround metrics, and comparative performance analysis.",
    tech: ["Python"],
    link: "https://github.com/ciellamher/CPUScheduler",
  },
  {
    name: "Personal Portfolio Website",
    date: "Mar 2026",
    desc: "A custom Next.js portfolio system designed with responsive motion, modular content sections, and a highly optimized presentation layer for showcasing projects and technical identity.",
    tech: ["TypeScript", "Next.js", "React"],
    link: "https://github.com/ciellamher/my-portfolio",
  },
  {
    name: "Smart Attendance System",
    date: "Mar 2026",
    desc: "An automated attendance platform powered by facial recognition and real-time computer vision, built to streamline identity capture, record verification, and presence tracking.",
    tech: ["Python", "OpenCV", "Face Recognition"],
    link: "https://github.com/ciellamher/Smart-Attendance-System",
  },
  {
    name: "Driver Drowsiness Detector",
    date: "Feb 2026",
    desc: "A real-time driver safety system that applies deep learning and computer vision to detect fatigue cues from live video streams before they escalate into risk.",
    tech: ["Python", "OpenCV", "Deep Learning"],
    link: "https://github.com/ciellamher/driver_drowsiness_detector",
  },
  {
    name: "Lumo",
    date: "Oct 2025",
    desc: "An AI-powered voice navigation platform for visually impaired users, combining accessible interaction design, guided routing, and a hackathon-winning product vision.",
    tech: ["Android Studio", "TensorFlow Lite", "Google AI"],
    link: "https://github.com/darknecrocities/Lumo",
  },
  {
    name: "peeView",
    date: "Aug 2025",
    desc: "An AI-assisted mobile health interface for instant urine test interpretation, translating structured clinical signals into clear, readable, user-facing insights.",
    tech: ["Flutter", "Firebase", "Gemini AI"],
    link: "https://github.com/darknecrocities/peeview",
  },
  {
    name: "Student Database",
    date: "Aug 2025",
    desc: "A structured student records system for organizing academic data, enforcing clean data flow, and supporting efficient record retrieval and management.",
    tech: ["R"],
    link: "https://github.com/ciellamher/studentdatabase",
  },
  {
    name: "Chinese Horoscope App",
    date: "Aug 2025",
    desc: "A Dart-based interpretation app that packages horoscope logic into a lightweight, responsive interface with a focus on clarity and user engagement.",
    tech: ["Dart", "Flutter"],
    link: "https://github.com/ciellamher/chinesehoroscope",
  },
  {
    name: "Age Classification App",
    date: "Aug 2025",
    desc: "A Flutter application for age classification workflows, designed to convert simple inputs into deterministic, immediate, and easy-to-verify outputs.",
    tech: ["Dart", "Flutter"],
    link: "https://github.com/ciellamher/ageclassification",
  },
  {
    name: "Bahay Kubo Recipe App",
    date: "Oct 2024",
    desc: "A recipe platform built to showcase more than 50 Filipino dishes with a clean content architecture centered on preservation, discoverability, and authentic culinary presentation.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/ciellamher/BahayKubo",
  },
  {
    name: "Parapo Transit UI/UX Design",
    date: "Dec 2023",
    desc: "A transport-focused UI/UX concept exploring route visibility, commuter clarity, and high-signal interface decisions for a public transit tracking system.",
    tech: ["Flutter", "Google Maps API"],
    link: "#",
  },
  {
    name: "QuickRename",
    date: "Oct 2023",
    desc: "A batch file renaming utility engineered for high-volume file organization, rapid naming consistency, and workflow efficiency.",
    tech: ["HTML", "JavaScript"],
    link: "https://github.com/ciellamher/quickRename",
  },
  {
    name: "Password Generator",
    date: "Sep 2023",
    desc: "A deterministic password generation tool built to produce secure, randomized credentials with customizable output constraints and minimal friction.",
    tech: ["JavaScript", "HTML", "CSS"],
    link: "https://github.com/ciellamher/passwordgenerator",
  },
];

export const recentProjects = allProjects.slice(0, 4);
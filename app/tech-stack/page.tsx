"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link'; // <--- ADD THIS LINE TO FIX THE ERROR
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

// Organized data structure for your skills
const allSkills = {
  Frontend: [
    "JavaScript", "TypeScript", "React", "Next.js", "Vue.js", 
    "HTML5", "Tailwind CSS", "SCSS", "Styled Components", "Vite", 
    "Webpack", "ESLint", "Prettier"
  ],
  Backend: [
    "Node.js", "Python", "Java", "C++", "Ruby", "PHP", 
    "Express.js", "NestJS", "FastAPI", "Spring Boot", "Laravel", 
    "PostgreSQL", "MySQL", "MongoDB"
  ],
  "Mobile Development": [
    "Flutter", "Mobile App Development"
  ],
  "DevOps & Cloud": [
    "Linux", "Operating Systems (Memory Management)", "AWS", "GCP", 
    "Azure", "GitHub Actions", "Jenkins", "GitLab CI", "Terraform", 
    "Docker", "Kubernetes"
  ],
  "AI & Machine Learning": [
    "OpenCV", "Convolutional Neural Networks (CNNs)", "Edge/Offline AI", 
    "TensorFlow", "PyTorch", "LangChain", "Transformers", "OpenAI", 
    "Anthropic", "Hugging Face"
  ],
  "VA & Productivity": [
    "Notion (Campus Leader)", "Microsoft Excel", "Microsoft Word", 
    "Google Workspace", "Project Management", "Data Entry", 
    "Social Media Management"
  ],
  "Creative Design": [
    "Canva", "Figma", "Adobe Photoshop", "Adobe Illustrator", 
    "Adobe After Effects", "Adobe Premiere Pro", "UI/UX Design", "Wix"
  ],
  "Development Tools": [
    "VS Code"
  ]
};

export default function TechStackPage() {
  return (
    <main className="min-h-screen bg-[#FDFDFD] text-neutral-900 font-sans py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Navigation back to main page */}
        <Link href="/" className="flex items-center gap-2 text-neutral-500 hover:text-neutral-900 transition-colors mb-4 text-sm font-medium">
          <ArrowLeft size={16} /> Back to Home
        </Link>
        
        <h1 className="text-4xl font-bold mb-12 tracking-tight">Tech Stack</h1>

        <div className="space-y-12">
          {Object.entries(allSkills).map(([category, items]) => (
            <div key={category} className="space-y-6">
              <h2 className="text-sm font-bold text-neutral-900 uppercase tracking-widest opacity-50 border-b border-neutral-100 pb-2">{category}</h2>
              <div className="flex flex-wrap gap-3">
                {items.map((skill) => (
                  <span 
                    key={skill} 
                    className="px-4 py-2 bg-white border border-neutral-200 text-sm font-medium text-neutral-800 rounded-xl hover:border-neutral-900 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
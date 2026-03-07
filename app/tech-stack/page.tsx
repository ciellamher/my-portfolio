"use client";

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

// Organized data structure for your skills
const allSkills = {
  Frontend: ["JavaScript", "TypeScript", "React", "Next.js", "Vue.js", "HTML5", "Tailwind CSS", "SCSS", "Styled Components", "Vite", "Webpack", "ESLint", "Prettier"],
  Backend: ["Node.js", "Python", "Java", "PHP", "Express.js", "NestJS", "FastAPI", "Spring Boot", "Laravel", "PostgreSQL", "MySQL", "MongoDB"],
  "DevOps & Cloud": ["AWS", "GCP", "Azure", "GitHub Actions", "GitLab CI"],
  "AI & Machine Learning": ["TensorFlow", "PyTorch", "OpenAI"],
  "VA & Productivity": ["Notion (Campus Leader)", "Microsoft Excel", "Microsoft Word", "Google Workspace", "Project Management", "Data Entry", "Social Media Management"],
  "Creative Design": ["Canva", "Figma", "Adobe Photoshop", "Adobe Illustrator", "Adobe After Effects", "Adobe Premiere Pro", "UI/UX Design"]
};

export default function TechStackPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-[#FDFDFD] text-neutral-900 font-sans py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Navigation back to main page */}
        <button onClick={() => router.back()} className="flex items-center gap-2 text-neutral-500 hover:text-neutral-900 transition-colors mb-4 text-sm font-medium cursor-pointer bg-transparent border-0 p-0">
          <ArrowLeft size={16} /> Back to Home
        </button>
        
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
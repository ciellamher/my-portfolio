"use client";
import Link from 'next/link';
import { ArrowLeft, Github, Trophy } from 'lucide-react';

const allProjects = [
  { 
    name: "Lumo", 
    date: "Oct 2025", 
    desc: "AI-powered voice-guided navigation app for the visually impaired. Winner of the SkyDev Hackathon.", 
    tech: ["Android Studio", "TensorFlow Lite", "Google AI"], 
    link: "https://github.com/darknecrocities/Lumo",
  },
  { 
    name: "peeView", 
    date: "Aug 2025", 
    desc: "AI-assisted mobile application for instant urine test interpretation. Converts complex data into plain-language insights.", 
    tech: ["Flutter", "Firebase", "Gemini AI"], 
    link: "https://github.com/darknecrocities/peeview" 
  },
  { 
    name: "BahayKubo", 
    date: "Oct 2024", 
    desc: "Explore over 50 tested Filipino recipes. Designed to keep the true flavors of Filipino cuisine.", 
    tech: ["HTML", "CSS", "JavaScript"], 
    link: "https://github.com/ciellamher/BahayKubo" 
  },
  { 
    name: "Parapo", 
    date: "Dec 2023", 
    desc: "Real-time public transportation tracking system empowering Filipino commuters in Pampanga.", 
    tech: ["Flutter", "Google Maps API"], 
    link: "#" 
  },
  { 
    name: "quickRename", 
    date: "Oct 2023", 
    desc: "Batch file renaming utility for efficient file organization.", 
    tech: ["HTML", "JavaScript"], 
    link: "https://github.com/ciellamher/quickRename" 
  },
  { 
    name: "passwordgenerator", 
    date: "Sep 2023", 
    desc: "Customizable tool for generating secure, random passwords.", 
    tech: ["JavaScript", "HTML", "CSS"], 
    link: "https://github.com/ciellamher/passwordgenerator" 
  }
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#FDFDFD] text-neutral-900 py-20 px-6 font-sans">
      <div className="max-w-5xl mx-auto">
        <Link href="/" className="flex items-center gap-2 text-neutral-500 hover:text-neutral-900 transition-colors mb-8 text-sm font-medium no-underline">
          <ArrowLeft size={16} /> Back to Home
        </Link>
        
        <h1 className="text-4xl font-bold mb-12 tracking-tight">All Projects</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {allProjects.map((project, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl border border-neutral-200 flex flex-col justify-between group hover:border-neutral-900 transition-all">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-2">
                    <h2 className="text-2xl font-bold">{project.name}</h2>
                  </div>
                  {project.link !== "#" && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-2 bg-neutral-50 rounded-full text-neutral-400 hover:text-neutral-900 transition-colors">
                      <Github size={22} />
                    </a>
                  )}
                </div>
                <p className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-4">{project.date}</p>
                <p className="text-neutral-600 leading-relaxed mb-8 text-sm">{project.desc}</p>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map(t => (
                  <span key={t} className="px-3 py-1 bg-neutral-50 border border-neutral-100 text-[10px] font-bold text-neutral-500 rounded-lg">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
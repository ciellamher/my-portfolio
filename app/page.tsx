"use client";

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Lanyard from "../components/Lanyard"; 
import Chatbot from "@/components/Chatbot";
import { 
  MapPin, Calendar, Mail, ChevronRight, FlaskConical, Code, 
  BadgeCheck, Download, Github, Linkedin, Briefcase,
  Globe, Heart, Award, Users, MessageSquare, ArrowUpRight,
  Instagram, ArrowLeft, ArrowRight, Mic
} from "lucide-react";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const galleryRef = useRef<HTMLDivElement>(null);

  const recommendations = [
    {
      quote: "Graciella has a unique eye for design and a strong technical foundation. Her ability to organize complex events like the Notion Campus gathering while maintaining high academic standards is impressive.",
      name: "Jane Doe",
      title: "Professor, Holy Angel University"
    },
    {
      quote: "Working with Graciella on the Furnivo project was fantastic. Her UI/UX critiques were insightful and directly improved the user experience. She balances aesthetics and functionality perfectly.",
      name: "John Smith",
      title: "Lead Designer, Furnivo"
    },
    {
      quote: "One of the most dedicated students I've mentored. Her passion for combining AI with practical web solutions is evident in every project she tackles. A future leader in tech.",
      name: "Dr. Alan Turing",
      title: "Mentor & AI Researcher"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % recommendations.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [recommendations.length]);

  const scrollGallery = (direction: 'left' | 'right') => {
    if (galleryRef.current) {
      const scrollAmount = 300;
      galleryRef.current.scrollBy({
        left: direction === 'right' ? scrollAmount : -scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <main className="min-h-screen bg-[#FDFDFD] text-neutral-900 font-sans selection:bg-neutral-100 pb-12 overflow-x-hidden">
      
      {/* --- HERO SECTION --- */}
      <div className="max-w-7xl mx-auto px-6 min-h-[90vh] grid grid-cols-1 md:grid-cols-12 gap-4 items-center overflow-hidden">
      
      {/* Left Spacer - This pushes the content to the right */}
      <div className="hidden md:block md:col-span-1" />

      {/* Name & Bio - Takes up 5 columns */}
      <div className="space-y-6 order-2 md:order-1 md:col-span-5 relative z-20">
         <div className="w-fit">
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-neutral-900 flex items-center gap-3 whitespace-nowrap">
            Graciella Jimenez 
            </h1>
            <div className="flex items-center gap-2 text-neutral-500 font-medium text-lg mt-2 pl-1">
               <MapPin size={20} className="text-neutral-400" />
               Pampanga, Philippines
            </div>
         </div>
         
         <p className="text-lg text-neutral-600 leading-relaxed max-w-md">
            BS Computer Science Student | Notion Campus Leader at Holy Angel University | Events Lead at GDGoC-HAU | Events Director at CSIA 
         </p>

         <div className="flex flex-wrap gap-3 pt-4">
            {/* 1. Schedule a Call Link */}
            <a 
            href="https://calendar.app.google/EVMe3RzST39L25MH9"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-neutral-900 text-white rounded-xl hover:bg-black transition-transform duration-300 font-semibold text-sm shadow-lg hover:scale-105 no-underline cursor-pointer"
            >
            <Calendar size={18} /> Schedule a Call
            </a>

            {/* 2. CV Download */}
            <a 
            href="/Graciella_Jimenez_CV.pdf"
            download
            className="flex items-center gap-2 px-5 py-3 bg-white border border-neutral-200 text-neutral-900 rounded-xl hover:bg-neutral-100 transition-all duration-300 font-semibold text-sm shadow-sm hover:scale-105 no-underline cursor-pointer"
            >
            <Download size={18} /> CV
            </a>

            <div className="flex gap-2">
            {/* 3. GitHub */}
            <a 
               href="https://github.com/topics/digital-clock?l=css&o=desc&s=stars"
               target="_blank"
               className="p-3 bg-white border border-neutral-200 rounded-xl hover:bg-neutral-100 text-neutral-900 transition-all shadow-sm hover:scale-105"
            >
               <Github size={20} />
            </a>
            <a 
               href="https://www.linkedin.com/in/ciellamher/"
               target="_blank"
               className="p-3 bg-white border border-neutral-200 rounded-xl hover:bg-neutral-100 text-neutral-900 transition-all shadow-sm hover:scale-105"
            >
               <Linkedin size={20} />
            </a>
            <a 
               href="mailto:work.gmdjimenez@gmail.com"
               className="p-3 bg-white border border-neutral-200 rounded-xl hover:bg-neutral-100 text-neutral-900 transition-all shadow-sm hover:scale-105"
            >
               <Mail size={20} />
            </a>
            </div>
         </div>
      </div>

      {/* Right: THE 3D LANYARD - Takes up 6 columns */}
      <div className="flex justify-center order-1 md:order-2 md:col-span-6 h-[600px] md:h-[800px] relative z-0 mt-[-100px] md:mt-[-200px] pointer-events-none">
         <Lanyard />
      </div>
      </div>

      {/* --- GRID LAYOUT --- */}
      <div className="max-w-6xl mx-auto px-6 space-y-8">

        {/* ROW 1: About, Tech, Experience */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div className="lg:col-span-2 space-y-8">
            <section className="bg-white p-8 rounded-3xl border border-neutral-200 shadow-sm">
              <h3 className="text-xl font-bold flex items-center gap-2 mb-6 text-neutral-900">
                <Briefcase size={22} className="text-neutral-900" /> About
              </h3>
              <div className="text-neutral-600 text-base leading-relaxed space-y-4">
                <p>
                  I'm a Computer Science student specializing in developing intelligent solutions with Python, Next.js, and Natural Language Processing (NLP). 
                </p>
                <p>
                  I've helped organize campus events and streamline student productivity through digital solutions. 
                  I've also built a community around minimalist Notion templates to share knowledge.
                </p>
              </div>
            </section>

            <section className="bg-white p-8 rounded-3xl border border-neutral-200 shadow-sm">
               <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-bold flex items-center gap-2 text-neutral-900">
                    <FlaskConical size={22} className="text-neutral-900"/> Tech Stack
                  </h3>
                  <span className="text-sm font-medium text-neutral-500 cursor-pointer hover:text-neutral-900 flex items-center gap-1">View All <ChevronRight size={14}/></span>
               </div>
               <div className="space-y-6">
                  <div>
                     <span className="text-sm font-bold text-neutral-900 block mb-3">Frontend</span>
                     <div className="flex flex-wrap gap-2">
                        {["JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"].map(t => (
                          <span key={t} className="px-3 py-1.5 bg-white border border-neutral-200 text-sm font-medium text-neutral-900 rounded-lg">{t}</span>
                        ))}
                     </div>
                  </div>
                  <div>
                     <span className="text-sm font-bold text-neutral-900 block mb-3">Backend & AI</span>
                     <div className="flex flex-wrap gap-2">
                        {["Python", "Node.js", "PostgreSQL", "NLP", "OpenAI API"].map(t => (
                          <span key={t} className="px-3 py-1.5 bg-white border border-neutral-200 text-sm font-medium text-neutral-900 rounded-lg">{t}</span>
                        ))}
                     </div>
                  </div>
               </div>
            </section>
          </div>

          <div className="lg:col-span-1">
             <section className="bg-white p-8 rounded-3xl border border-neutral-200 shadow-sm h-full">
               <h3 className="text-xl font-bold flex items-center gap-2 mb-8 text-neutral-900">
                 <Briefcase size={22} className="text-neutral-900"/> Experience
               </h3>
               
               <div className="relative ml-3 space-y-10 border-l-2 border-neutral-100">
                  {[
                    { title: "Event Organizer", company: "Notion Campus", year: "2025" },
                    { title: "UI/UX Critic", company: "Furnivo Project", year: "2025" },
                    { title: "CS Student", company: "Holy Angel Univ.", year: "2023" },
                  ].map((item, i) => (
                    <div key={i} className="relative pl-8 group cursor-default">
                       <div className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full bg-neutral-900 border-4 border-white shadow-sm transition-transform group-hover:scale-110" />
                       <div className="flex justify-between items-start">
                          <div>
                             <h4 className="font-bold text-neutral-900 text-sm leading-tight group-hover:text-neutral-600 transition-colors">{item.title}</h4>
                             <p className="text-xs text-neutral-500 font-medium mt-1">{item.company}</p>
                          </div>
                          <span className="text-xs font-bold text-neutral-500 bg-white border border-neutral-200 px-2 py-1 rounded-full ml-2">
                             {item.year}
                          </span>
                       </div>
                    </div>
                  ))}
               </div>
             </section>
          </div>
        </div>

        {/* --- ROW 2: BEYOND CODING & PROJECTS --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
               <section className="bg-white p-8 rounded-3xl border border-neutral-200 shadow-sm h-full flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold flex items-center gap-2 mb-4 text-neutral-900">
                       <Heart size={22} className="text-neutral-900"/> Beyond Coding
                    </h3>
                    <p className="text-neutral-600 text-sm leading-relaxed mb-6">
                       When not writing code, I focus on interior design, minimalism, and startup culture. 
                       I love creating clean, organized spaces both digitally and physically.
                    </p>
                  </div>
                  <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-200">
                     <p className="text-xs font-bold text-neutral-500 uppercase tracking-wide mb-1">Current Focus</p>
                     <p className="text-sm font-bold text-neutral-900">Building "The Notion Campus"</p>
                  </div>
               </section>
            </div>

            <div className="lg:col-span-2">
               <section className="bg-white p-8 rounded-3xl border border-neutral-200 shadow-sm h-full">
                  <div className="flex justify-between items-center mb-6">
                     <h3 className="text-xl font-bold flex items-center gap-2 text-neutral-900">
                       <Code size={22} className="text-neutral-900"/> Recent Projects
                     </h3>
                     <span className="text-sm font-medium text-neutral-500 cursor-pointer hover:text-neutral-900 flex items-center gap-1">View All <ChevronRight size={14}/></span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                     {[
                       { name: "Notion Campus", type: "Event & Community", link: "notion.so" },
                       { name: "Furnivo", type: "UI/UX Case Study", link: "figma.com" },
                       { name: "Template Drop #2", type: "Productivity System", link: "gumroad.com" },
                       { name: "Portfolio V1", type: "Next.js & Three.js", link: "github.com" },
                     ].map((project, i) => (
                       <div key={i} className="group p-5 rounded-2xl bg-neutral-50 border border-neutral-200 hover:bg-white hover:border-neutral-300 transition-all cursor-pointer hover:scale-[1.02]">
                          <div className="flex justify-between items-start mb-3">
                             <div>
                                <h4 className="font-bold text-neutral-900 group-hover:text-neutral-600 transition-colors">{project.name}</h4>
                                <p className="text-xs text-neutral-500 mt-1">{project.type}</p>
                             </div>
                             <div className="p-2 bg-white rounded-full border border-neutral-200 group-hover:border-neutral-300 transition-colors">
                                <ArrowUpRight size={16} className="text-neutral-400 group-hover:text-neutral-900"/>
                             </div>
                          </div>
                          <span className="text-[10px] font-bold text-neutral-400 bg-white px-2 py-1 rounded border border-neutral-200">{project.link}</span>
                       </div>
                     ))}
                  </div>
               </section>
            </div>
        </div>

        {/* --- ROW 3: CERTIFICATIONS & RECOMMENDATIONS --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
               <section className="bg-white p-8 rounded-3xl border border-neutral-200 shadow-sm h-full">
                  <div className="flex justify-between items-center mb-6">
                     <h3 className="text-xl font-bold flex items-center gap-2 text-neutral-900">
                       <Award size={22} className="text-neutral-900"/> Certifications
                     </h3>
                     <span className="text-xs font-bold text-neutral-500 cursor-pointer hover:text-neutral-900">View All</span>
                  </div>
                  
                  <div className="space-y-3">
                     {[
                       { name: "Generative AI Leader", org: "Google" },
                       { name: "Python for Data Science", org: "Coursera" },
                       { name: "IT Specialist", org: "Certiport" },
                     ].map((cert, i) => (
                       <div key={i} className="bg-neutral-50 p-4 rounded-xl hover:bg-neutral-100 transition-colors cursor-pointer">
                          <h4 className="font-bold text-sm text-neutral-900">{cert.name}</h4>
                          <p className="text-xs text-neutral-500 mt-1">{cert.org}</p>
                       </div>
                     ))}
                  </div>
               </section>
            </div>

            <div className="lg:col-span-2">
               <section className="bg-white p-8 rounded-3xl border border-neutral-200 shadow-sm h-full flex flex-col relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
                     <MessageSquare size={120} />
                  </div>
                  <h3 className="text-xl font-bold flex items-center gap-2 mb-6 text-neutral-900">
                     <Users size={22} className="text-neutral-900"/> Recommendations
                  </h3>
                  
                  <div className="flex-1 flex flex-col justify-center relative min-h-[180px]">
                    <AnimatePresence mode='wait'>
                        <motion.div
                          key={currentSlide}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.4, ease: "easeInOut" }}
                          className="max-w-xl"
                        >
                          <p className="text-lg font-medium text-neutral-700 italic leading-relaxed mb-6">
                              "{recommendations[currentSlide].quote}"
                          </p>
                          <div>
                              <h4 className="font-bold text-neutral-900">{recommendations[currentSlide].name}</h4>
                              <p className="text-xs text-neutral-500">{recommendations[currentSlide].title}</p>
                          </div>
                        </motion.div>
                    </AnimatePresence>
                  </div>

                  <div className="flex gap-2 mt-6 justify-start">
                    {recommendations.map((_, index) => (
                      <button 
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                          index === currentSlide ? "w-6 bg-neutral-900" : "w-2 bg-neutral-200 hover:bg-neutral-400"
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>
               </section>
            </div>
        </div>

        {/* --- ROW 4: MEMBERSHIPS, SOCIALS, CONTACT --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-3xl border border-neutral-200 shadow-sm flex flex-col">
               <h3 className="text-sm font-bold flex items-center gap-2 mb-4 text-neutral-900">
                  <Users size={18}/> A member of
               </h3>
               <div className="space-y-3">
                  <div className="p-3 bg-neutral-50 rounded-xl border border-neutral-200 flex justify-between items-center group cursor-pointer hover:bg-neutral-100 transition-transform duration-300 hover:scale-[1.02]">
                      <span className="text-xs font-bold text-neutral-700">GDG on Campus</span>
                      <ArrowUpRight size={14} className="text-neutral-400 group-hover:text-neutral-900"/>
                  </div>
                  <div className="p-3 bg-neutral-50 rounded-xl border border-neutral-200 flex justify-between items-center group cursor-pointer hover:bg-neutral-100 transition-transform duration-300 hover:scale-[1.02]">
                      <span className="text-xs font-bold text-neutral-700">CS Society HAU</span>
                      <ArrowUpRight size={14} className="text-neutral-400 group-hover:text-neutral-900"/>
                  </div>
               </div>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-neutral-200 shadow-sm flex flex-col">
               <h3 className="text-sm font-bold flex items-center gap-2 mb-4 text-neutral-900">
                  <Globe size={18}/> Social Links
               </h3>
               <div className="space-y-3">
                  <div className="flex gap-2 items-center p-2 rounded-lg hover:bg-neutral-50 transition-transform duration-300 cursor-pointer group hover:scale-[1.02]">
                      <div className="p-2 bg-neutral-100 text-neutral-900 rounded-lg"><Linkedin size={18}/></div>
                      <span className="text-sm font-medium text-neutral-600 group-hover:text-neutral-900">LinkedIn</span>
                  </div>
                  <div className="flex gap-2 items-center p-2 rounded-lg hover:bg-neutral-50 transition-transform duration-300 cursor-pointer group hover:scale-[1.02]">
                      <div className="p-2 bg-neutral-100 text-neutral-900 rounded-lg"><Github size={18}/></div>
                      <span className="text-sm font-medium text-neutral-600 group-hover:text-neutral-900">GitHub</span>
                  </div>
               </div>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-neutral-200 shadow-sm flex flex-col justify-between">
               <div>
                  <h3 className="text-sm font-bold flex items-center gap-2 mb-4 text-neutral-900">
                     <Mic size={18}/> Speaking
                  </h3>
                  <p className="text-xs text-neutral-500 leading-relaxed">
                     Available for speaking at events about software development, leadership, and Notion productivity.
                  </p>
               </div>
               <div className="mt-6 flex items-center gap-2 text-xs font-bold text-neutral-900 cursor-pointer hover:underline">
                  Get in touch <ChevronRight size={14}/>
               </div>
            </div>

            <div className="space-y-3">
               <div className="bg-white p-4 rounded-2xl border border-neutral-200 shadow-sm flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-neutral-500 text-xs font-bold uppercase tracking-wider">
                     <Mail size={14}/> Email
                  </div>
                  <p className="text-sm font-bold text-neutral-900 truncate">hello@graciella.dev</p>
               </div>
               <div className="bg-white p-4 rounded-2xl border border-neutral-200 shadow-sm flex justify-between items-center cursor-pointer hover:bg-neutral-50 transition-transform duration-300 hover:scale-[1.02]">
                  <div className="flex items-center gap-2">
                     <Calendar size={18} className="text-neutral-900"/>
                     <span className="text-sm font-bold text-neutral-900">Let's Talk</span>
                  </div>
                  <ChevronRight size={16} className="text-neutral-400"/>
               </div>
            </div>
        </div>

        {/* ROW 5: GALLERY */}
        <section className="bg-white p-8 rounded-3xl border border-neutral-200 shadow-sm">
           <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold flex items-center gap-2 text-neutral-900">
                 <Instagram size={22} className="text-neutral-900"/> Gallery
              </h3>
              <div className="flex gap-2">
                 <button onClick={() => scrollGallery('left')} className="p-2 rounded-full border border-neutral-200 hover:bg-neutral-50 transition-colors">
                    <ArrowLeft size={18}/>
                 </button>
                 <button onClick={() => scrollGallery('right')} className="p-2 rounded-full border border-neutral-200 hover:bg-neutral-50 transition-colors">
                    <ArrowRight size={18}/>
                 </button>
              </div>
           </div>
           
           <div ref={galleryRef} className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x">
              {[1, 2, 3, 4, 5].map((item) => (
                 <div key={item} className="snap-center shrink-0 w-[300px] h-[200px] bg-neutral-100 rounded-2xl overflow-hidden relative group border border-neutral-200">
                    <img 
                       src={`https://picsum.photos/600/400?random=${item}`} 
                       alt="Gallery" 
                       className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"/>
                 </div>
              ))}
           </div>
        </section>

        {/* ROW 6: GET IN TOUCH */}
        <section className="text-center max-w-2xl mx-auto py-12 md:py-24">
           <div className="inline-block bg-black text-white px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
              Contact
           </div>
           <h2 className="text-4xl md:text-5xl font-black text-neutral-900 mb-6 tracking-tight">
              Get in Touch
           </h2>
           <p className="text-lg text-neutral-600 leading-relaxed font-medium">
              Want to chat? Just shoot me a DM on <a href="#" className="text-blue-600 hover:underline">Instagram</a> or <a href="mailto:hello@graciella.dev" className="text-blue-600 hover:underline">drop me an email</a>.
           </p>
        </section>

        {/* FOOTER */}
        <footer className="pt-12 text-center text-sm text-neutral-400">
           <p>© 2026 Graciella Jimenez. All rights reserved.</p>
        </footer>

      </div>

      <Chatbot />
    </main>
  );
}
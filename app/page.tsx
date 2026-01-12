"use client";

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Lanyard from "../components/Lanyard"; 
import Chatbot from "@/components/Chatbot";
import { 
  MapPin, Calendar, Mail, ChevronRight, FlaskConical, Code, 
  BadgeCheck, Download, Github, Linkedin, Briefcase,
  Globe, Heart, Award, Users, MessageSquare, ArrowUpRight,
  Instagram, ArrowLeft, ArrowRight, Mic, 
  Trophy // <--- ADD THIS LINE TO FIX THE CRASH
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
   <main id="top" className="pt-8 sm:pt-10 md:pt-0 min-h-screen bg-[#FDFDFD] text-neutral-900 font-sans selection:bg-neutral-100 pb-12 overflow-x-hidden">
      
      {/* --- HERO SECTION --- */}
      <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="max-w-7xl mx-auto px-4 sm:px-6 min-h-[60vh] md:min-h-[90vh] grid grid-cols-1 md:grid-cols-12 gap-4 items-center overflow-hidden">
      
      {/* Left Spacer - This pushes the content to the right */}
      <div className="hidden md:block md:col-span-1" />

      {/* Name & Bio - Takes up 5 columns */}
      <div className="space-y-6 order-2 md:order-1 md:col-span-5 relative z-20">
         <div className="w-fit">
            <h1 id="hero" className="text-5xl md:text-6xl font-extrabold tracking-tight text-neutral-900 flex items-center gap-3 whitespace-normal md:whitespace-nowrap">
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
            className="flex items-center gap-2 px-5 py-3 bg-white border border-neutral-200 text-neutral-900 rounded-xl hover:bg-neutral-100 transition-all duration-300 font-semibold text-sm hover:scale-105 no-underline cursor-pointer"
            >
            <Download size={18} /> CV
            </a>

            <div className="flex gap-2">
            {/* 3. GitHub */}
            <a 
               href="https://github.com/topics/digital-clock?l=css&o=desc&s=stars"
               target="_blank"
               className="p-3 bg-white border border-neutral-200 rounded-xl hover:bg-neutral-100 text-neutral-900 transition-all hover:scale-105"
            >
               <Github size={20} />
            </a>
            <a 
               href="https://www.linkedin.com/in/ciellamher/"
               target="_blank"
               className="p-3 bg-white border border-neutral-200 rounded-xl hover:bg-neutral-100 text-neutral-900 transition-all hover:scale-105"
            >
               <Linkedin size={20} />
            </a>
            <a 
               href="mailto:work.gmdjimenez@gmail.com"
               className="p-3 bg-white border border-neutral-200 rounded-xl hover:bg-neutral-100 text-neutral-900 transition-all hover:scale-105"
            >
               <Mail size={20} />
            </a>
            </div>
         </div>
      </div>

      {/* Right: THE 3D LANYARD - Shows on mobile with reduced height */}
      <div className="flex justify-center order-1 md:order-2 md:col-span-6 h-[220px] sm:h-[320px] md:h-[800px] relative z-0 mt-6 md:mt-[-200px] pointer-events-none">
         <Lanyard />
      </div>
      </motion.div>

      {/* --- GRID LAYOUT --- */}
      <div className="max-w-6xl mx-auto px-6 space-y-6">

            {/* ROW 1: About, Tech, Experience */}
         <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.5 }} className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          <div className="lg:col-span-2 space-y-6">
            <section className="bg-white p-6 md:p-8 rounded-3xl border border-neutral-200">
              <h3 className="text-xl font-bold flex items-center gap-2 mb-6 text-neutral-900">
                <Briefcase size={22} className="text-neutral-900" /> About
              </h3>
              <div className="text-neutral-600 text-base leading-relaxed space-y-4">
                <p>
                  Hi! I'm Graciella, a Computer Science student at Holy Angel University. I love exploring and embracing new and innovative ideas in different fields. I love the fashion, art, and culture as much as I love the beauty of the field of technology, science, and business.
                </p>
                <p>
                  I find joy in being creative with designing software, user interfaces, and new technologies, which drives my passion for computer science. I enjoy tackling challenges and coming up with innovative solutions through careful and strategic designs.
                </p>
                <p>
                  Wherever I am and whatever I do, I keep an open mind and always strive to do my very best. I'm always on the lookout for new ways to learn and grow, and I approach each opportunity with a positive and appreciative mindset.                
               </p>
              </div>
            </section>

            <section className="bg-white p-6 md:p-8 rounded-3xl border border-neutral-200">
               <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-bold flex items-center gap-2 text-neutral-900">
                  <FlaskConical size={22} className="text-neutral-900"/> Tech Stack & Skills
                  </h3>
                  <Link href="/tech-stack" className="text-sm font-medium text-neutral-500 cursor-pointer hover:text-neutral-900 flex items-center gap-1 transition-colors">
                  View All <ChevronRight size={14}/>
                  </Link>
               </div>
               
               <div className="space-y-6">
                  <div>
                     <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-[0.2em] block mb-4">Development</span>
                     <div className="flex flex-wrap gap-2">
                        {["JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Python", "Node.js", "PostgreSQL", "NLP", "C++"].map(t => (
                        <span key={t} className="px-3 py-1.5 bg-white border border-neutral-200 text-sm font-medium text-neutral-900 rounded-lg hover:border-neutral-900 transition-colors cursor-default">
                           {t}
                        </span>
                        ))}
                     </div>
                  </div>

                  <div>
               <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-[0.2em] block mb-4">Productivity & VA</span>
               <div className="flex flex-wrap gap-2">
                  {["Notion", "Microsoft Excel", "Microsoft Word", "Google Workspace", "Project Management", "Data Entry"].map(t => (
                  <span key={t} className="px-3 py-1.5 bg-white border border-neutral-200 text-sm font-medium text-neutral-900 rounded-lg hover:border-neutral-900 transition-colors cursor-default">
                     {t}
                  </span>
                  ))}
               </div>
            </div>

                  <div>
                     <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-[0.2em] block mb-4">Creative Design</span>
                     <div className="flex flex-wrap gap-2">
                        {["Canva", "Figma", "Adobe Photoshop", "Adobe Premiere Pro", "UI/UX Design"].map(t => (
                        <span key={t} className="px-3 py-1.5 bg-white border border-neutral-200 text-sm font-medium text-neutral-900 rounded-lg">
                           {t}
                        </span>
                        ))}
                     </div>
                  </div>
               </div>
            </section>
          </div>

          <div className="lg:col-span-1">
             <section className="bg-white p-6 md:p-8 rounded-3xl border border-neutral-200">
               <div className="flex items-center gap-2 mb-10">
                  <Briefcase size={22} className="text-neutral-900" />
                  <h3 className="text-xl font-bold text-neutral-900">Experience</h3>
               </div>

               <div className="relative ml-3 border-l-2 border-neutral-100 space-y-10 pb-4">
                  {[
                     // CURRENT ACTIVE ROLES (Black Dots)
                     { title: "Notion Campus Leader", org: "Notion - Holy Angel University", year: "2026", active: true },
                     { title: "Events Director", org: "Cybersecurity Intelligence Alliance", year: "2025", active: true },
                     { title: "Events Lead", org: "Google Developer Groups on Campus - Holy Angel University", year: "2024", active: true },
                     { title: "Volunteer", org: "Each One Teach One, Inc.", year: "2023", active: true },
                     
                     // PREVIOUS ROLES & EDUCATION (Grey Dots)
                     { title: "BS Computer Science", org: "Holy Angel University", year: "2023", active: true, isEdu: true },
                     { title: "Senior Executive Assistant to the Governor", org: "School of Computing - Student Council", year: "2024", active: false },
                     { title: "Facilities and Logistics", org: "Holy Angel University - Student Council", year: "2023", active: false },
                     { title: "Business Manager", org: "University of the Assumption – UASHS Supreme Student Council", year: "2022", active: false }
                  ].sort((a, b) => parseInt(b.year) - parseInt(a.year)) // Sort by Year Descending
                  .map((item, i) => (
                     <div key={i} className="relative pl-10 group">
                     {/* Timeline Dot: Black for active, Grey for past */}
                     <div className={`absolute -left-[9px] top-1 h-4 w-4 rounded-full border-4 border-white transition-transform group-hover:scale-125 
                        ${item.active ? 'bg-neutral-900' : 'bg-neutral-200'}`} 
                     />
                     
                     <div className="flex justify-between items-start">
                        <div className="space-y-1">
                           <h4 className={`font-bold text-sm leading-tight transition-colors 
                           ${item.active ? 'text-neutral-900' : 'text-neutral-400'}`}>
                           {item.title}
                           </h4>
                           <p className={`text-xs font-medium ${item.active ? 'text-neutral-500' : 'text-neutral-300'}`}>
                           {item.org}
                           </p>
                        </div>
                        
                        {/* Year Badge */}
                        <span className={`text-[10px] font-bold border px-3 py-1 rounded-full whitespace-nowrap
                           ${item.active ? 'text-neutral-500 bg-neutral-50 border-neutral-200' : 'text-neutral-300 bg-transparent border-neutral-100'}`}>
                           {item.year}
                        </span>
                     </div>
                     </div>
                  ))}
               </div>
               </section>
          </div>
      </motion.div>

            {/* --- ROW 2: BEYOND CODING & PROJECTS --- */}
         <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.5, delay: 0.05 }} className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-1">
               <section className="bg-white p-6 md:p-8 rounded-3xl border border-neutral-200 h-full flex flex-col justify-between">
                  <div>
                     <h3 className="text-xl font-bold flex items-center gap-2 mb-4 text-neutral-900">
                        <Heart size={22} className="text-neutral-900"/> Beyond Coding
                     </h3>
                     <p className="text-neutral-600 text-sm leading-relaxed mb-6">
                        When not writing code, I organize large-scale campus events and serve as a Notion Campus Leader. 
                        I am passionate about building community, digital productivity, and creating clean, organized systems.
                     </p>
                  </div>

                  {/* Clickable Current Focus Box */}
                  <a 
                     href="https://instagram.com/notion.hau" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="p-4 bg-neutral-50 rounded-xl border border-neutral-200 block hover:bg-neutral-100 transition-all group no-underline"
                  >
                     <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest mb-1 group-hover:text-neutral-600">
                        Current Focus
                     </p>
                     <div className="flex justify-between items-center">
                        <p className="text-sm font-bold text-neutral-900">Building "The Notion Campus"</p>
                        <Instagram size={16} className="text-neutral-400 group-hover:text-neutral-900 transition-colors" />
                     </div>
                  </a>
                  </section>
            </div>

            <div className="lg:col-span-2">
               <section className="bg-white p-6 md:p-8 rounded-3xl border border-neutral-200 h-full">
                  <div className="flex justify-between items-center mb-6">
                     <h3 className="text-xl font-bold flex items-center gap-2 text-neutral-900">
                        <Code size={22} className="text-neutral-900"/> Recent Projects
                     </h3>
                     <Link href="/projects" className="text-sm font-medium text-neutral-500 hover:text-neutral-900 flex items-center gap-1 transition-colors">
                        View All <ChevronRight size={14}/>
                     </Link>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                     {[
                        { 
                           name: "Lumo", 
                           type: "AI Navigation App", 
                           link: "https://github.com/darknecrocities/Lumo", 
                           date: "Oct 2025",
                           hasAward: true 
                        },
                        { 
                           name: "peeView", 
                           type: "AI Medical Interpretation", 
                           link: "https://github.com/darknecrocities/peeview", 
                           date: "Aug 2025" 
                        },
                        { 
                           name: "BahayKubo", 
                           type: "Filipino Recipe Explorer", 
                           link: "https://github.com/ciellamher/BahayKubo", 
                           date: "Oct 2024" 
                        },
                        { 
                           name: "Parapo", 
                           type: "Public Transit Tracker", 
                           link: "#", 
                           date: "Dec 2023" 
                        }
                     ].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
                        .map((project, i) => (
                        <a 
                           key={i} 
                           href={project.link}
                           target={project.link === "#" ? "_self" : "_blank"}
                           rel="noopener noreferrer"
                           className="group p-5 rounded-2xl bg-neutral-50 border border-neutral-200 hover:bg-white hover:border-neutral-300 transition-all no-underline block"
                        >
                           <div className="flex justify-between items-start mb-3">
                              <div>
                                 <div className="flex items-center gap-2">
                                    <h4 className="font-bold text-neutral-900 group-hover:text-neutral-600">{project.name}</h4>
                                 </div>
                                 <p className="text-xs text-neutral-500">{project.type}</p>
                              </div>
                              <div className="p-2 bg-white rounded-full border border-neutral-200 group-hover:border-neutral-900 transition-colors">
                                 <ArrowUpRight size={16} className="text-neutral-400 group-hover:text-neutral-900"/>
                              </div>
                           </div>
                           <span className="text-[10px] font-bold text-neutral-400 bg-white px-2 py-1 rounded border border-neutral-200">
                              {project.link === "#" ? "Coming Soon" : project.link.replace('https://github.com/', '')}
                           </span>
                        </a>
                     ))}
                  </div>
                  </section>
            </div>
      </motion.div>

      {/* --- ROW 3: CERTIFICATIONS & RECOMMENDATIONS --- */}
      <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.18 }} transition={{ duration: 0.5, delay: 0.08 }} className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
         <div className="lg:col-span-1">
               <section className="bg-white p-6 md:p-8 rounded-3xl border border-neutral-200 h-full">
               <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-bold flex items-center gap-2 text-neutral-900">
                     <Award size={22} className="text-neutral-900"/> Certifications
                  </h3>
                  <Link href="/certifications" className="text-sm font-medium text-neutral-500 hover:text-neutral-900 flex items-center gap-1 transition-colors">
                     View All <ChevronRight size={14}/>
                  </Link>
               </div>
               
               <div className="space-y-4">
                  {[
                     { 
                     name: "Data Analytics Essentials", 
                     org: "Cisco", 
                     date: "Nov 2025", 
                     img: "https://www.netacad.com/p/ff9e491c-49be-4734-803e-a79e6e83dab1/badges/badge-images/52517717-589b-4c76-977d-27a53952379f.png" 
                     },
                     { 
                     name: "Notion Advanced Badge", 
                     org: "Notion", 
                     date: "Oct 2025", 
                     img: "/badges/notion-advanced.png" 
                     },
                     { 
                     name: "Notion Essentials Badge", 
                     org: "Notion", 
                     date: "Oct 2025", 
                     img: "/badges/notion-essentials.png" 
                     },
                  ].map((cert, i) => (
                     <div key={i} className="flex items-center gap-4 bg-neutral-50 p-4 rounded-xl border border-neutral-100 group transition-all hover:bg-neutral-100">
                     <img 
                        src={cert.img} 
                        alt={cert.name} 
                        className="w-12 h-12 object-contain rounded-lg" 
                     />
                     <div>
                        <h4 className="font-bold text-sm text-neutral-900">{cert.name}</h4>
                        <p className="text-xs text-neutral-500 mt-0.5">{cert.org} • {cert.date}</p>
                     </div>
                     </div>
                  ))}
               </div>
               </section>
            </div>

            <div className="lg:col-span-1">
               <section className="bg-white p-6 md:p-8 rounded-3xl border border-neutral-200 h-full flex flex-col relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-6 md:p-8 opacity-5 pointer-events-none">
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
      </motion.div>

            {/* --- ROW 4: MEMBERSHIPS, SOCIALS, CONTACT --- */}
         <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.5, delay: 0.12 }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 md:p-8 rounded-[2rem] border border-neutral-200 flex flex-col">
               <h3 className="text-sm font-bold flex items-center gap-2 mb-6 text-neutral-900">
                  <Users size={18} className="text-neutral-400"/> A member of
               </h3>
               <div className="space-y-3">
                  {[
                     { name: "Notion at HAU", link: "https://instagram.com/notion.hau" },
                     { name: "GDG on Campus at HAU", link: "https://gdsc.community.dev/holy-angel-university/" },
                     { name: "Cybersecurity Intelligence Alliance", link: "https://www.facebook.com/csia.hausoc/" }
                  ].map((org, i) => (
                     <a 
                     key={i}
                     href={org.link}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="p-4 bg-neutral-50 rounded-2xl border border-neutral-100 flex justify-between items-center group cursor-pointer hover:bg-white hover:border-neutral-900 transition-all no-underline"
                     >
                        <span className="text-[11px] font-bold text-neutral-700 group-hover:text-neutral-900 transition-colors">
                           {org.name}
                        </span>
                        <ArrowUpRight size={14} className="text-neutral-300 group-hover:text-neutral-900 transition-colors"/>
                     </a>
                  ))}
               </div>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-[2rem] border border-neutral-200 flex flex-col">
               <h3 className="text-sm font-bold flex items-center gap-2 mb-6 text-neutral-900">
                  <Globe size={18} className="text-neutral-400"/> Social Links
               </h3>
               <div className="grid grid-cols-2 gap-3">
                  {[
                     { name: "LinkedIn", icon: <Linkedin size={18} />, link: "https://www.linkedin.com/in/ciellamher/" },
                     { name: "GitHub", icon: <Github size={18} />, link: "https://github.com/ciellamher" },
                     { name: "Instagram", icon: <Instagram size={18} />, link: "https://instagram.com/ciellamhar" },
                     { name: "Facebook", icon: <MessageSquare size={18} />, link: "https://www.facebook.com/gramenez/" }
                  ].map((social, i) => (
                     <a 
                     key={i}
                     href={social.link}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="flex flex-col items-center justify-center p-4 bg-neutral-50 rounded-2xl border border-neutral-100 group hover:border-neutral-900 transition-all no-underline"
                     >
                        <div className="text-neutral-400 group-hover:text-neutral-900 transition-colors mb-2">
                           {social.icon}
                        </div>
                        <span className="text-[10px] font-bold text-neutral-500 group-hover:text-neutral-900 transition-colors uppercase tracking-wider">
                           {social.name}
                        </span>
                     </a>
                  ))}
               </div>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-neutral-200 flex flex-col justify-between">
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
               <div className="bg-white p-4 rounded-2xl border border-neutral-200 flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-neutral-500 text-xs font-bold uppercase tracking-wider">
                     <Mail size={14}/> <span>EMAIL</span>
                  </div>
                  <div className="flex flex-col gap-0">
                    <a href="mailto:work.gmdjimenez@gmail.com" className="text-base font-semibold text-neutral-900">work.gmdjimenez@gmail.com</a>
                  </div>
               </div>

               <div className="bg-white p-4 rounded-2xl border border-neutral-200 flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-neutral-500 text-xs font-bold uppercase tracking-wider">
                     <Mail size={14}/> <span>NOTION</span>
                  </div>
                  <div className="flex flex-col gap-0">
                    <a href="mailto:notion.hau@gmail.com" className="text-base font-semibold text-neutral-900">notion.hau@gmail.com</a>
                  </div>
               </div>

               <a href="https://calendar.app.google/EVMe3RzST39L25MH9" target="_blank" rel="noopener noreferrer" className="bg-white p-4 rounded-2xl border border-neutral-200 flex justify-between items-center cursor-pointer hover:bg-neutral-50 transition-transform duration-300 hover:scale-[1.02] no-underline">
                  <div className="flex items-center gap-2">
                     <Calendar size={18} className="text-neutral-900"/>
                     <span className="text-sm font-bold text-neutral-900">Let's Talk</span>
                  </div>
                  <ChevronRight size={16} className="text-neutral-400"/>
               </a>

               <a href="/Graciella_Jimenez_CV.pdf" download className="bg-white p-4 rounded-2xl border border-neutral-200 flex justify-between items-center cursor-pointer hover:bg-neutral-50 transition-transform duration-300 hover:scale-[1.02] no-underline">
                  <div className="flex items-center gap-2">
                     <Download size={18} className="text-neutral-900"/>
                     <span className="text-sm font-bold text-neutral-900">Download CV</span>
                  </div>
                  <ChevronRight size={16} className="text-neutral-400"/>
               </a>
            </div>
      </motion.div>

            {/* ROW 5: GALLERY */}
         <motion.section initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.18 }} transition={{ duration: 0.5, delay: 0.16 }} className="bg-white p-6 md:p-8 rounded-3xl border border-neutral-200">
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
              {[
                "IMG_0780.JPG",
                "IMG_4954.JPG",
                "profile.jpeg",
                "IMG_4955.JPG",
                "IMG_5366.JPG"
              ].map((file, i) => (
                 <div key={i} className="snap-center shrink-0 w-[300px] h-[200px] bg-neutral-100 rounded-2xl overflow-hidden relative group border border-neutral-200">
                    <img
                       src={`/gallery/${file}`}
                       alt={`Gallery ${i + 1}`}
                       className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"/>
                 </div>
              ))}
           </div>
      </motion.section>

        {/* ROW 6: GET IN TOUCH */}
        <section className="text-center max-w-2xl mx-auto py-12 md:py-24">
           <div className="inline-block bg-black text-white px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
              Contact
           </div>
           <h2 className="text-4xl md:text-5xl font-black text-neutral-900 mb-6 tracking-tight">
              Get in Touch
           </h2>
           <p className="text-lg text-neutral-600 leading-relaxed font-medium">
              Want to chat? Just shoot me a DM on <a href="instagram.com/ciellamher" className="text-blue-600 hover:underline">Instagram</a> or <a href="mailto:work.gmdjimenez@gmail.com" className="text-blue-600 hover:underline">drop me an email</a>.
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
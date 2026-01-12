"use client";
import Link from 'next/link';
import { ArrowLeft, ExternalLink } from 'lucide-react';

const allCerts = [
  // --- 2025 CERTIFICATIONS ---
  { 
    name: "Data Analytics Essentials", 
    org: "Cisco", 
    date: "Nov 2025", 
    img: "https://www.netacad.com/p/ff9e491c-49be-4734-803e-a79e6e83dab1/badges/badge-images/52517717-589b-4c76-977d-27a53952379f.png",
    link: "https://www.credly.com/org/cisco/badge/data-analytics-essentials" 
  },
  { 
    name: "Notion Advanced Badge", 
    org: "Notion", 
    date: "Oct 2025", 
    img: "/badges/notion-advanced.png", 
    link: "https://verify.skilljar.com/c/sui8pnm3wf5a" 
  },
  { 
    name: "Notion Essentials Badge", 
    org: "Notion", 
    date: "Oct 2025", 
    img: "/badges/notion-essentials.png", 
    link: "https://verify.skilljar.com/c/22uigpmzsa2g" 
  },
  { 
    name: "Notion Workflows Badge", 
    org: "Notion", 
    date: "Oct 2025", 
    img: "/badges/notion-workflows.png", 
    link: "https://verify.skilljar.com/c/vic4smi674nt" 
  },
  { 
    name: "Introduction to Networks", 
    org: "Cisco", 
    date: "Apr 2025", 
    img: "https://www.netacad.com/p/ff9e491c-49be-4734-803e-a79e6e83dab1/badges/badge-images/d37cd1b7-ce71-45ab-b33d-da7f8ce2a5e2.png",
    link: "https://www.credly.com/org/cisco/badge/ccna-introduction-to-networks"
  },
  { 
    name: "Cyber Threat Management", 
    org: "Cisco", 
    date: "Aug 2025", 
    img: "https://www.netacad.com/p/ff9e491c-49be-4734-803e-a79e6e83dab1/badges/badge-images/cyber_threat_management_37.png",
    link: "https://www.credly.com/org/cisco/badge/cyber-threat-management"
  },
  { 
    name: "Endpoint Security", 
    org: "Cisco", 
    date: "Aug 2025", 
    img: "https://images.credly.com/images/0ca5f542-fb5e-4a22-9b7a-c1a1ce4c3db7/twitter_thumb_201604_EndpointSecurity.png", 
    link: "https://www.credly.com/badges/8b83f722-9633-49a7-b863-a602ca62265b/linked_in_profile" 
  },
  { 
    name: "English for IT 1", 
    org: "Cisco", 
    date: "Jun 2025", 
    img: "https://www.netacad.com/p/ff9e491c-49be-4734-803e-a79e6e83dab1/badges/badge-images/fe754160-54a9-42a9-a068-d4184d21c0af.png",
    link: "https://www.credly.com/org/cisco/badge/english-for-it-1"
  },
  { 
    name: "Relational Database", 
    org: "freeCodeCamp", 
    date: "Feb 2025", 
    img: "https://assets.streamlinehq.com/image/private/w_240,h_240,ar_1/f_auto/v1/icons/development/freecodecamp-rq6dhi8qg53ohxm9fx023.png/freecodecamp-a84ber5k85at2xl1xlkbd.png", 
    link: "https://freecodecamp.org/certification/ciellamher/relational-database-v8" 
  },

  // --- 2024 CERTIFICATIONS ---
  { 
    name: "JavaScript Essentials 1", 
    org: "Cisco", 
    date: "Oct 2024", 
    img: "https://www.netacad.com/p/ff9e491c-49be-4734-803e-a79e6e83dab1/badges/badge-images/3a49578b-b05c-40df-afd8-7de9e25d01e4.png", 
    link: "https://www.credly.com/badges/694242e8-912e-45b5-9309-a7acdd9b90cb/linked_in_profile" 
  },
  { 
    name: "Responsive Web Design", 
    org: "freeCodeCamp", 
    date: "Sep 2024", 
    img: "https://assets.streamlinehq.com/image/private/w_240,h_240,ar_1/f_auto/v1/icons/development/freecodecamp-rq6dhi8qg53ohxm9fx023.png/freecodecamp-a84ber5k85at2xl1xlkbd.png", 
    link: "https://freecodecamp.org/certification/ciellamher/responsive-web-design" 
  },
  { 
    name: "AI Fundamentals", 
    org: "DataCamp", 
    date: "Jul 2024", 
    img: "https://d2sgvqkxhd5f7t.cloudfront.net/wp-media-folder-teamed/wp-content/uploads/2025/01/DataCamp.webp", 
    link: "https://www.datacamp.com/skill-verification/AIF0022277064783" 
  },
  { 
    name: "Data Literacy", 
    org: "DataCamp", 
    date: "Jul 2024", 
    img: "https://d2sgvqkxhd5f7t.cloudfront.net/wp-media-folder-teamed/wp-content/uploads/2025/01/DataCamp.webp", 
    link: "https://www.datacamp.com/skill-verification/DL0033876223486" 
  },
  { 
    name: "Introduction to Cybersecurity", 
    org: "Cisco", 
    date: "Mar 2024", 
    img: "https://www.netacad.com/p/ff9e491c-49be-4734-803e-a79e6e83dab1/badges/badge-images/introduction_to_cybersecurity_16.png", 
    link: "https://www.credly.com/badges/30173c23-3ab0-4b5e-ac06-6e01c490768b/linked_in_profile" 
  },
];

export default function CertificationsPage() {
  return (
    <main className="min-h-screen bg-[#FDFDFD] text-neutral-900 py-20 px-6 font-sans">
      <div className="max-w-6xl mx-auto">
        <Link href="/" className="flex items-center gap-2 text-neutral-500 hover:text-neutral-900 transition-colors mb-8 text-sm font-medium no-underline">
          <ArrowLeft size={16} /> Back to Home
        </Link>
        <h1 className="text-4xl font-bold mb-12 tracking-tight">Licenses & Certifications</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allCerts.map((cert, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl border border-neutral-200 flex flex-col items-center text-center hover:border-neutral-900 transition-all group">
              <img src={cert.img} alt={cert.name} className="w-20 h-20 object-contain mb-4" />
              <h3 className="font-bold text-neutral-900 text-sm leading-tight mb-1">{cert.name}</h3>
              <p className="text-xs text-neutral-500 mb-4">{cert.org}</p>
              <div className="mt-auto w-full pt-4 border-t border-neutral-50 flex justify-between items-center">
                <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">{cert.date}</span>
                <a href={cert.link} target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-neutral-50 rounded-full transition-colors">
                   <ExternalLink size={16} className="text-neutral-300 group-hover:text-neutral-900 transition-colors" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
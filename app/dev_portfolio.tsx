'use client';

import React, { useState, useEffect } from 'react';
import {
  Mail,
  ExternalLink,
  Code,
  Briefcase,
  User,
  Send,
  Terminal,
  Moon,
  Sun,
  ChevronRight,
  Search,
  X,
  Check,
  Award,
  Layers,
  Globe,
  Cpu,
  Sparkles,
  Phone,
  MapPin,
  Calendar,
  Filter,
} from 'lucide-react';

// Sample Portfolio Data
const PORTFOLIO_DATA = {
  name: "Senghong MON",
  title: "Full-Stack Software Engineer & UI/UX Specialist",
  bio: "Passionate software craftsman building scalable web applications, sleek microservices, and elegant user interfaces. Specializing in React, Next.js, Node.js, and cloud-native solutions.",
  about: "I have over 5 years of experience designing and engineering robust digital products. My goal is to bridge the gap between elegant design and high-performance frontend/backend architectures. When I'm not coding, I contribute to open-source software, mentor aspiring developers, and write technical articles on modern web development.",
  stats: [
    { label: "Years Experience", value: "5+" },
    { label: "Projects Completed", value: "32+" },
    { label: "Open Source Contribs", value: "150+" },
    { label: "Happy Clients / Teams", value: "18" }
  ],
  skills: [
    { category: "Frontend", items: [
      { name: "React / Next.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS / UI", level: 95 },
      { name: "Vue.js / Nuxt", level: 80 },
      { name: "HTML5 / CSS3 / Web APIs", level: 98 }
    ]},
    { category: "Backend & Databases", items: [
      { name: "Node.js / Express", level: 90 },
      { name: "Python / FastApi / Django", level: 82 },
      { name: "PostgreSQL / Prisma", level: 88 },
      { name: "MongoDB", level: 85 },
      { name: "GraphQL & RESTful APIs", level: 92 }
    ]},
    { category: "DevOps & Cloud", items: [
      { name: "Docker & Containerization", level: 85 },
      { name: "AWS (S3, Lambda, EC2)", level: 80 },
      { name: "Vercel / Netlify / CI/CD", level: 92 },
      { name: "Git & Version Control", level: 96 }
    ]}
  ],
  projects: [
    {
      id: "proj-1",
      title: "DevNexus - Developer Collaboration Hub",
      description: "A real-time developer community platform featuring code snippet sharing, interactive playground sessions, and async team workspace tools.",
      longDescription: "DevNexus is a full-featured workspace built for engineering teams to share snippets, run live code environments, and organize code reviews seamlessly. Features dynamic permissions, WebSockets for instant messaging, and GitHub API integrations.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "WebSockets"],
      category: "Full Stack",
      featured: true,
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      accentColor: "from-blue-500 to-indigo-600"
    },
    {
      id: "proj-2",
      title: "FinFlow - AI-Powered Financial Dashboard",
      description: "An interactive analytics dashboard visualizing real-time financial markets, portfolio tracking, and AI anomaly detection.",
      longDescription: "FinFlow helps users track crypto and stock portfolios with granular visualization tools. Built with high-performance charts, predictive AI trend calculations, and sub-millisecond API caching.",
      tags: ["React", "Next.js", "Recharts", "Node.js", "PostgreSQL"],
      category: "Frontend",
      featured: true,
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      accentColor: "from-emerald-500 to-teal-600"
    },
    {
      id: "proj-3",
      title: "CloudVault - Encrypted Asset Storage",
      description: "Zero-knowledge encrypted cloud storage provider with seamless drag-and-drop client interface and instant sharing permissions.",
      longDescription: "CloudVault emphasizes client-side cryptography. Files are encrypted before upload, ensuring absolute privacy. Includes temporary link expiration and access control lists.",
      tags: ["TypeScript", "Next.js", "AWS S3", "WebCrypto", "Tailwind"],
      category: "Cloud/DevOps",
      featured: true,
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      accentColor: "from-purple-500 to-pink-600"
    },
    {
      id: "proj-4",
      title: "OmniStore - Modern E-Commerce Engine",
      description: "Headless e-commerce template featuring automated stock updates, dynamic localized pricing, and instant Stripe integration.",
      longDescription: "Built with speed in mind, achieving dynamic sub-100ms page load times using Next.js Server Components, GraphQL cache invalidation, and Tailwind UI.",
      tags: ["Next.js", "GraphQL", "Stripe API", "Tailwind CSS"],
      category: "Full Stack",
      featured: false,
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      accentColor: "from-amber-500 to-orange-600"
    },
    {
      id: "proj-5",
      title: "SaaS Metrics API Gateway",
      description: "High-throughput API microservice for capturing user events and delivering real-time telemetry pipelines.",
      longDescription: "Designed to absorb up to 10k requests per second with redis caching queues and serverless functions deployed globally.",
      tags: ["Node.js", "Express", "Redis", "Docker", "MongoDB"],
      category: "Backend",
      featured: false,
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      accentColor: "from-cyan-500 to-blue-600"
    },
    {
      id: "proj-6",
      title: "PulseUI Component Design System",
      description: "An open-source, accessible React & Tailwind component library downloaded over 50,000 times on NPM.",
      longDescription: "PulseUI provides 40+ accessible UI primitives built on Radix primitives and Tailwind. Fully customizable with CSS variables and theme providers.",
      tags: ["React", "Tailwind CSS", "TypeScript", "Storybook", "NPM"],
      category: "Frontend",
      featured: false,
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      accentColor: "from-fuchsia-500 to-rose-600"
    }
  ],
  experience: [
    {
      role: "Senior Full Stack Engineer",
      company: "TechScale Solutions",
      period: "2023 - Present",
      location: "San Francisco, CA (Remote)",
      description: "Leading frontend architecture for enterprise SaaS products using Next.js, Redux Toolkit, and Tailwind CSS. Reduced bundle sizes by 42% and implemented modular design systems.",
      achievements: [
        "Architected core dashboard handling 1M+ daily active sessions",
        "Mentored junior engineers and instituted rigorous TypeScript code guidelines",
        "Pioneered server-side rendering strategies resulting in 35% higher SEO traffic"
      ]
    },
    {
      role: "Software Developer",
      company: "Vanguard Digital Studio",
      period: "2021 - 2023",
      location: "Austin, TX",
      description: "Developed modern web apps, web apps micro-frontends, and GraphQL backend pipelines for high-profile clients in fintech and media.",
      achievements: [
        "Delivered 12+ greenfield React/Next.js projects on schedule",
        "Integrated multi-currency payment gateways with complex fraud prevention rules",
        "Optimized database queries, cutting average API response times from 340ms to 90ms"
      ]
    },
    {
      role: "Frontend Web Developer",
      company: "PixelCraft Agency",
      period: "2019 - 2021",
      location: "New York, NY",
      description: "Crafted interactive digital marketing platforms, responsive landing pages, and WebGL animations for global brands.",
      achievements: [
        "Engineered custom interactive canvas widgets increasing landing page conversion by 28%",
        "Collaborated directly with UX designers to build pixel-perfect accessible interfaces"
      ]
    }
  ],
  education: [
    {
      degree: "B.S. in Computer Science",
      institution: "State University of Technology",
      period: "2015 - 2019",
      description: "Graduated with Honors. Specialized in Software Architecture, Algorithms, and Human-Computer Interaction (HCI)."
    }
  ]
};

type Project = {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  category: string;
  featured: boolean;
  githubUrl: string;
  liveUrl: string;
  accentColor: string;
};

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeSkillCat, setActiveSkillCat] = useState("Frontend");
  
  // Dynamic typing state for Hero
  const [typingText, setTypingText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const roles = ["Full-Stack Engineer", "Next.js Specialist", "UI/UX Craftsman", "Open Source Builder"];
  const [isDeleting, setIsDeleting] = useState(false);

  // Form State
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formLoading, setFormLoading] = useState(false);
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  // Typing Effect Logic
  useEffect(() => {
    const currentRole = roles[roleIndex];
    const speed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting && typingText.length < currentRole.length) {
        setTypingText(currentRole.substring(0, typingText.length + 1));
      } else if (isDeleting && typingText.length > 0) {
        setTypingText(currentRole.substring(0, typingText.length - 1));
      } else if (!isDeleting && typingText.length === currentRole.length) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && typingText.length === 0) {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [typingText, isDeleting, roleIndex]);

  // Filter Projects
  const filteredProjects = PORTFOLIO_DATA.projects.filter(project => {
    const matchesCategory = activeTab === 'all' || project.category.toLowerCase().includes(activeTab.toLowerCase());
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())) ||
                          project.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormLoading(true);
    setTimeout(() => {
      setFormLoading(false);
      setFormSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setFormSubmitted(false), 5000);
    }, 1200);
  };

  return (
    <div className={`min-h-screen font-sans transition-colors duration-300 ${darkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-800'}`}>
      
      {/* BACKGROUND DECORATIVE GLOWS */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className={`absolute -top-40 -left-40 w-96 h-96 rounded-full blur-3xl opacity-20 ${darkMode ? 'bg-indigo-600' : 'bg-indigo-300'}`}></div>
        <div className={`absolute top-1/3 -right-40 w-96 h-96 rounded-full blur-3xl opacity-20 ${darkMode ? 'bg-purple-600' : 'bg-purple-300'}`}></div>
        <div className={`absolute bottom-10 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-15 ${darkMode ? 'bg-teal-500' : 'bg-teal-200'}`}></div>
      </div>

      {/* NAVIGATION BAR */}
      <header className={`sticky top-0 z-40 backdrop-blur-md border-b transition-colors ${darkMode ? 'bg-slate-950/80 border-slate-800/80' : 'bg-white/80 border-slate-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2 font-bold text-xl tracking-tight group">
            <span className="p-2 rounded-lg bg-gradient-to-tr from-indigo-600 to-purple-600 text-white shadow-md group-hover:scale-105 transition-transform">
              <Code size={20} />
            </span>
            <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent font-extrabold">
                HONG.dev
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#about" className="hover:text-indigo-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-indigo-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-indigo-400 transition-colors">Projects</a>
            <a href="#experience" className="hover:text-indigo-400 transition-colors">Experience</a>
            <a href="#contact" className="hover:text-indigo-400 transition-colors">Contact</a>
          </nav>

          {/* Action Tools & Theme Switcher */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-xl transition-all ${
                darkMode ? 'bg-slate-800 text-amber-400 hover:bg-slate-700' : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
              }`}
              title="Toggle Theme"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-xl text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-md shadow-indigo-500/20 transition-all hover:scale-[1.02]"
            >
              <span>Get in Touch</span>
              <ChevronRight size={16} />
            </a>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section id="hero" className="relative z-10 pt-20 pb-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col justify-center min-h-[85vh]">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold border ${
              darkMode ? 'bg-indigo-950/60 border-indigo-800/60 text-indigo-300' : 'bg-indigo-50 border-indigo-200 text-indigo-700'
            }`}>
              <Sparkles size={14} className="animate-spin text-indigo-400" />
              <span>Available for high-impact contracts & full-time roles</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-none">
              Hi, I'm <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Senghong MON</span>
              <br />
              <span className="text-3xl sm:text-5xl font-bold opacity-90">
                I build <span className="underline decoration-indigo-500 decoration-4 underline-offset-8">{typingText}</span>
                <span className="animate-pulse">|</span>
              </span>
            </h1>

            <p className={`text-lg max-w-2xl leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              {PORTFOLIO_DATA.bio}
            </p>

            {/* Quick CTAs */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#projects"
                className="px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:opacity-90 shadow-lg shadow-indigo-500/25 transition-all flex items-center gap-2"
              >
                <span>View My Work</span>
                <ChevronRight size={18} />
              </a>
              <a
                href="#contact"
                className={`px-6 py-3 rounded-xl font-semibold border transition-all flex items-center gap-2 ${
                  darkMode 
                    ? 'border-slate-800 bg-slate-900/60 hover:bg-slate-800 text-slate-200' 
                    : 'border-slate-300 bg-white hover:bg-slate-100 text-slate-700'
                }`}
              >
                <Mail size={18} />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4 pt-6">
              <span className={`text-xs font-semibold tracking-wider uppercase ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>
                Connect with me:
              </span>
              <div className="flex gap-3">
                {[
                  { icon: <Code size={18} />, href: "https://github.com", name: "GitHub" },
                  { icon: <Briefcase size={18} />, href: "https://linkedin.com", name: "LinkedIn" },
                  { icon: <Globe size={18} />, href: "https://twitter.com", name: "Twitter" }
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.name}
                    className={`p-2.5 rounded-xl border transition-all hover:scale-110 ${
                      darkMode
                        ? 'border-slate-800 bg-slate-900 text-slate-400 hover:text-white hover:border-indigo-500'
                        : 'border-slate-200 bg-white text-slate-600 hover:text-slate-900 hover:border-indigo-400'
                    }`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Interactive Hero Tech Card / Code Preview */}
          <div className="lg:col-span-5">
            <div className={`p-6 rounded-2xl border shadow-2xl relative overflow-hidden ${
              darkMode ? 'bg-slate-900/90 border-slate-800' : 'bg-white border-slate-200'
            }`}>
              {/* Top Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-700/40 mb-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                </div>
                <div className="text-xs font-mono text-slate-400 flex items-center gap-1">
                  <Terminal size={14} /> developer.config.ts
                </div>
              </div>

              {/* Code Snippet Display */}
              <pre className="font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto text-indigo-300">
                <code>
                  <span className="text-purple-400">const</span> <span className="text-amber-300">developer</span> = &#123;<br />
                  &nbsp;&nbsp;name: <span className="text-emerald-400">"{PORTFOLIO_DATA.name}"</span>,<br />
                  &nbsp;&nbsp;stack: [<span className="text-emerald-400">"Next.js"</span>, <span className="text-emerald-400">"TypeScript"</span>, <span className="text-emerald-400">"Node"</span>],<br />
                  &nbsp;&nbsp;location: <span className="text-emerald-400">"San Francisco, CA"</span>,<br />
                  &nbsp;&nbsp;passions: [<span className="text-emerald-400">"UI Design"</span>, <span className="text-emerald-400">"Open Source"</span>],<br />
                  &nbsp;&nbsp;status: <span className="text-emerald-400">"Building awesome software"</span>,<br />
                  &nbsp;&nbsp;codeQuality: <span className="text-amber-400">100</span><br />
                  &#125;;<br /><br />
                  <span className="text-purple-400">export default</span> developer;
                </code>
              </pre>

              {/* Stats Ribbon inside card */}
              <div className="grid grid-cols-2 gap-3 mt-6 pt-4 border-t border-slate-700/40">
                {PORTFOLIO_DATA.stats.slice(0, 2).map((s, i) => (
                  <div key={i} className="p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/20">
                    <div className="text-2xl font-extrabold text-indigo-400">{s.value}</div>
                    <div className="text-xs text-slate-400 font-medium">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ABOUT & STATS SECTION */}
      <section id="about" className={`py-20 border-t ${darkMode ? 'border-slate-800/80 bg-slate-900/40' : 'border-slate-200 bg-slate-100/60'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-6">
              <div className="relative mx-auto max-w-sm lg:max-w-none">
                <div className="aspect-square rounded-2xl bg-gradient-to-tr from-indigo-500 to-purple-600 p-1 shadow-xl">
                  <div className={`w-full h-full rounded-2xl flex flex-col items-center justify-center p-8 text-center ${darkMode ? 'bg-slate-950' : 'bg-white'}`}>
                    <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-600 flex items-center justify-center text-white text-3xl font-bold mb-4 shadow-lg">
                      SM
                    </div>
                    <h3 className="text-xl font-bold">{PORTFOLIO_DATA.name}</h3>
                    <p className={`text-xs mt-1 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>{PORTFOLIO_DATA.title}</p>
                    <div className="flex items-center gap-1 text-xs text-emerald-400 mt-3 font-medium bg-emerald-500/10 px-3 py-1 rounded-full">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                      Open for opportunities
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">Get to know me</span>
                <h2 className="text-3xl font-bold tracking-tight mt-1">Architecting robust web solutions with precision</h2>
              </div>

              <p className={`leading-relaxed text-base ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                {PORTFOLIO_DATA.about}
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
                {PORTFOLIO_DATA.stats.map((stat, idx) => (
                  <div key={idx} className={`p-4 rounded-xl border text-center ${
                    darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
                  }`}>
                    <div className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className={`text-xs font-medium mt-1 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">Technical Expertise</span>
          <h2 className="text-3xl font-bold tracking-tight mt-1">Skills & Capabilities</h2>
          <p className={`mt-2 text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            A comprehensive overview of my technological toolkit and proficiency levels across frontend, backend, and cloud architectures.
          </p>
        </div>

        {/* Skill Category Selector */}
        <div className="flex justify-center gap-2 mb-10 overflow-x-auto pb-2">
          {PORTFOLIO_DATA.skills.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveSkillCat(cat.category)}
              className={`px-5 py-2.5 rounded-xl font-medium text-sm transition-all whitespace-nowrap ${
                activeSkillCat === cat.category
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/25'
                  : darkMode
                    ? 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800'
                    : 'bg-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-300'
              }`}
            >
              {cat.category}
            </button>
          ))}
        </div>

        {/* Active Category Skills */}
        <div className="max-w-3xl mx-auto grid gap-6">
          {PORTFOLIO_DATA.skills
            .find(cat => cat.category === activeSkillCat)
            ?.items.map((skill, idx) => (
              <div key={idx} className={`p-4 rounded-xl border transition-all ${
                darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
              }`}>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold text-sm">{skill.name}</span>
                  <span className="text-xs font-mono text-indigo-400">{skill.level}%</span>
                </div>
                {/* Progress Bar */}
                <div className={`w-full h-2 rounded-full overflow-hidden ${darkMode ? 'bg-slate-800' : 'bg-slate-200'}`}>
                  <div
                    className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className={`py-20 border-t ${darkMode ? 'border-slate-800/80 bg-slate-900/30' : 'border-slate-200 bg-slate-100/50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">Featured Work</span>
              <h2 className="text-3xl font-bold tracking-tight mt-1">Portfolio & Projects</h2>
            </div>

            {/* Search and Category Filter Bar */}
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <div className="relative">
                <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search by tech or keyword..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={`pl-10 pr-4 py-2 text-sm rounded-xl border w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                    darkMode 
                      ? 'bg-slate-900 border-slate-800 text-white placeholder-slate-500' 
                      : 'bg-white border-slate-300 text-slate-800 placeholder-slate-400'
                  }`}
                />
              </div>

              {/* Filter Pills */}
              <div className="flex gap-1 overflow-x-auto pb-1 sm:pb-0">
                {['all', 'full stack', 'frontend', 'backend', 'cloud'].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveTab(cat)}
                    className={`px-3 py-2 rounded-xl text-xs font-semibold capitalize transition-all whitespace-nowrap ${
                      activeTab === cat
                        ? 'bg-indigo-600 text-white'
                        : darkMode
                          ? 'bg-slate-800 text-slate-400 hover:text-white'
                          : 'bg-slate-200 text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Project Grid */}
          {filteredProjects.length === 0 ? (
            <div className="text-center py-16">
              <p className={`text-base ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>No projects found matching your search term.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className={`rounded-2xl border flex flex-col overflow-hidden group transition-all duration-300 hover:-translate-y-1 ${
                    darkMode 
                      ? 'bg-slate-900 border-slate-800 hover:border-slate-700' 
                      : 'bg-white border-slate-200 hover:shadow-xl'
                  }`}
                >
                  {/* Mock Image Header with Gradient Accent */}
                  <div className={`h-40 bg-gradient-to-r ${project.accentColor} p-6 flex flex-col justify-between relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                    <div className="relative z-10 flex justify-between items-start">
                      <span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-black/40 text-white backdrop-blur-md">
                        {project.category}
                      </span>
                      {project.featured && (
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-400 text-slate-900 uppercase tracking-wider">
                          Featured
                        </span>
                      )}
                    </div>
                    <div className="relative z-10 text-white font-bold text-lg tracking-wide line-clamp-1">
                      {project.title}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <p className={`text-sm leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                      {project.description}
                    </p>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className={`px-2.5 py-1 rounded-md text-xs font-medium ${
                            darkMode ? 'bg-slate-800 text-indigo-300' : 'bg-slate-100 text-indigo-600'
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="pt-4 border-t border-slate-700/20 flex items-center justify-between">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="text-xs font-semibold text-indigo-400 hover:underline flex items-center gap-1"
                      >
                        Learn More <ChevronRight size={14} />
                      </button>
                      
                      <div className="flex gap-2">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className={`p-2 rounded-lg text-slate-400 hover:text-white transition-colors ${
                            darkMode ? 'hover:bg-slate-800' : 'hover:bg-slate-100'
                          }`}
                          title="View Source Code"
                        >
                          <Code size={16} />
                        </a>
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className={`p-2 rounded-lg text-slate-400 hover:text-white transition-colors ${
                            darkMode ? 'hover:bg-slate-800' : 'hover:bg-slate-100'
                          }`}
                          title="Live Preview"
                        >
                          <ExternalLink size={16} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* EXPERIENCE & EDUCATION SECTION */}
      <section id="experience" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">Career History</span>
          <h2 className="text-3xl font-bold tracking-tight mt-1">Experience & Education</h2>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-1 gap-12">
          
          {/* Work Timeline */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                <Briefcase size={20} />
              </div>
              <h3 className="text-xl font-bold">Professional Experience</h3>
            </div>

            <div className="relative border-l-2 border-indigo-500/30 pl-6 ml-3 space-y-10">
              {PORTFOLIO_DATA.experience.map((item, idx) => (
                <div key={idx} className="relative group">
                  {/* Timeline Node */}
                  <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-indigo-500 border-4 border-slate-950 group-hover:scale-125 transition-transform"></div>

                  <div className={`p-6 rounded-2xl border transition-all ${
                    darkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
                  }`}>
                    <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                      <div>
                        <h4 className="text-lg font-bold">{item.role}</h4>
                        <div className="text-sm font-semibold text-indigo-400">{item.company}</div>
                      </div>
                      <span className={`text-xs px-3 py-1 rounded-full font-medium ${
                        darkMode ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-700'
                      }`}>
                        {item.period}
                      </span>
                    </div>

                    <p className={`text-sm mb-4 leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                      {item.description}
                    </p>

                    <ul className="space-y-2">
                      {item.achievements.map((ach, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs">
                          <Check size={14} className="text-emerald-400 shrink-0 mt-0.5" />
                          <span className={darkMode ? 'text-slate-300' : 'text-slate-700'}>{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Timeline */}
          <div className="space-y-8 pt-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
                <Award size={20} />
              </div>
              <h3 className="text-xl font-bold">Education</h3>
            </div>

            <div className="relative border-l-2 border-purple-500/30 pl-6 ml-3">
              {PORTFOLIO_DATA.education.map((edu, idx) => (
                <div key={idx} className="relative group">
                  <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-purple-500 border-4 border-slate-950"></div>

                  <div className={`p-6 rounded-2xl border ${
                    darkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
                  }`}>
                    <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                      <div>
                        <h4 className="text-lg font-bold">{edu.degree}</h4>
                        <div className="text-sm font-semibold text-purple-400">{edu.institution}</div>
                      </div>
                      <span className={`text-xs px-3 py-1 rounded-full font-medium ${
                        darkMode ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-700'
                      }`}>
                        {edu.period}
                      </span>
                    </div>
                    <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                      {edu.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className={`py-20 border-t ${darkMode ? 'border-slate-800/80 bg-slate-900/40' : 'border-slate-200 bg-slate-100/60'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12">
            
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">Let's Connect</span>
                <h2 className="text-3xl font-bold tracking-tight mt-1">Get in touch with me</h2>
                <p className={`mt-3 text-sm leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  Whether you have a product idea, dynamic contract position, or just want to chat about Next.js and frontend engineering—feel free to drop a message!
                </p>
              </div>

              <div className="space-y-4 pt-2">
              {[
                { icon: <Mail size={18} />, label: "Email", value: "senghong.mon@example.com" },
                { icon: <MapPin size={18} />, label: "Location", value: "San Francisco, CA (PST)" },
                { icon: <Globe size={18} />, label: "Availability", value: "Remote / On-site Contract" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <div className={`text-xs font-semibold ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>{item.label}</div>
                      <div className="text-sm font-medium">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Interactive Form */}
            <div className="lg:col-span-7">
              <form onSubmit={handleFormSubmit} className={`p-8 rounded-2xl border shadow-xl space-y-4 ${
                darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
              }`}>
                
                {formSubmitted && (
                  <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm flex items-center gap-2">
                    <Check size={18} />
                    <span>Thank you! Your message has been sent successfully. I will get back to you shortly.</span>
                  </div>
                )}

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className={`block text-xs font-semibold mb-1.5 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full px-4 py-2.5 text-sm rounded-xl border focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                        darkMode ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-300 text-slate-800'
                      }`}
                    />
                  </div>

                  <div>
                    <label className={`block text-xs font-semibold mb-1.5 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="jane@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-4 py-2.5 text-sm rounded-xl border focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                        darkMode ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-300 text-slate-800'
                      }`}
                    />
                  </div>
                </div>

                <div>
                  <label className={`block text-xs font-semibold mb-1.5 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>Subject</label>
                  <input
                    type="text"
                    required
                    placeholder="Project Inquiry / Hiring"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className={`w-full px-4 py-2.5 text-sm rounded-xl border focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                      darkMode ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-300 text-slate-800'
                    }`}
                  />
                </div>

                <div>
                  <label className={`block text-xs font-semibold mb-1.5 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>Message</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell me about your project or team..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full px-4 py-2.5 text-sm rounded-xl border focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                      darkMode ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-300 text-slate-800'
                    }`}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={formLoading}
                  className="w-full py-3 px-6 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-md transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {formLoading ? (
                    <span className="inline-block w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                  ) : (
                    <>
                      <Send size={16} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className={`py-8 border-t text-xs text-center ${darkMode ? 'border-slate-800/80 text-slate-500' : 'border-slate-200 text-slate-500'}`}>
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            © {currentYear ?? ''} {PORTFOLIO_DATA.name}. Built with Next.js & React concepts.
          </div>
          <div className="flex gap-4">
            <a href="#hero" className="hover:underline">Back to top</a>
          </div>
        </div>
      </footer>

      {/* PROJECT DETAILS MODAL */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className={`max-w-2xl w-full rounded-2xl border p-6 shadow-2xl relative max-h-[90vh] overflow-y-auto ${
            darkMode ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-800'
          }`}>
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X size={20} />
            </button>

            <div className={`h-32 rounded-xl bg-gradient-to-r ${selectedProject.accentColor} mb-6 flex items-center justify-center text-white font-bold text-2xl`}>
              {selectedProject.title}
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                  {selectedProject.category}
                </span>
              </div>

              <h3 className="text-2xl font-bold">{selectedProject.title}</h3>
              <p className={`text-sm leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                {selectedProject.longDescription}
              </p>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag, idx) => (
                    <span key={idx} className={`px-3 py-1 rounded-lg text-xs font-medium ${
                      darkMode ? 'bg-slate-800 text-indigo-300' : 'bg-slate-100 text-indigo-600'
                    }`}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-slate-800 flex justify-end gap-3">
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className={`px-4 py-2 rounded-xl text-xs font-semibold border flex items-center gap-2 ${
                    darkMode ? 'border-slate-700 bg-slate-800 hover:bg-slate-700' : 'border-slate-300 bg-slate-100'
                  }`}
                >
                  <Code size={14} /> Source Code
                </a>
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 flex items-center gap-2 shadow-md"
                >
                  <ExternalLink size={14} /> Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Eye, 
  Target, 
  Building,
  Building2, 
  Cpu, 
  Lightbulb, 
  Microscope, 
  Briefcase,
  ChevronRight,
  Menu,
  X,
  Mail,
  MapPin,
  Phone,
  Sparkles,
  Zap,
  Award,
  Database,
  Globe,
  Users
} from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const navLinks = [
    { name: 'About', href: 'https://trident-about-page.netlify.app/', active: false },
    { name: 'Admissions', href: 'https://admissions-tat-tekkzy.netlify.app/', active: false },
    { name: 'Academics', href: 'https://trident-academic.netlify.app/', active: false },
    { name: 'Research', href: '#', active: true },
    { name: 'Campus Life', href: '#', active: false },
    { name: 'Activities', href: '#', active: false },
  ];

  const secondaryLinks = [
    { name: 'OBJECTIVES', href: '#objectives' },
    { name: 'RECOGNITIONS', href: '#recognitions' },
    { name: 'FUNDING & HUBS', href: '#funding-hubs' },
    { name: 'GOVERNANCE', href: '#governance' },
    { name: 'INITIATIVES', href: '#initiatives' },
  ];

  return (
    <div className="sticky top-0 left-0 right-0 z-50">
      {/* Primary Top Navbar */}
      <nav className="bg-white/95 backdrop-blur-md shadow-sm relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3">
              <img 
                src="/logo.png" 
                alt="Trident Logo" 
                className="w-12 h-12 object-contain shrink-0" 
                onError={(e) => { e.target.onerror = null; e.target.src = 'https://tat.ac.in/wp-content/uploads/2023/12/logo-1.png'; }}
              />
              <div className="flex flex-col justify-center">
                <h1 className="text-secondary font-serif font-bold text-xl leading-none tracking-tight">TRIDENT</h1>
              </div>
            </div>
            
            <div className="hidden md:flex flex-1 justify-center items-center gap-8">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className={`${link.active ? 'text-primary' : 'text-slate-600 hover:text-primary'} transition-colors duration-200 font-sans font-medium text-[0.8rem] tracking-wider uppercase`}
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="hidden md:flex items-center">
              <button className="bg-[#1a1a1a] text-white px-7 py-2.5 rounded-md text-[0.8rem] font-bold hover:bg-black transition-colors duration-200 shadow-md uppercase tracking-wider">
                CONTACT US
              </button>
            </div>

            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="text-secondary p-2">
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Secondary Navbar (Title Contents) */}
      <div className="hidden md:block bg-[#f8f9fa] border-t border-b border-black/5 shadow-sm relative z-10">
        <div className="max-w-7xl mx-auto px-4 flex justify-center gap-12 py-3 overflow-x-auto hide-scrollbar">
          {secondaryLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-[0.65rem] font-bold tracking-[0.15em] text-slate-500 hover:text-primary uppercase border-b-2 border-transparent hover:border-primary transition-colors duration-200 pb-1 whitespace-nowrap"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden bg-white border-b border-black/5 px-4 py-8 shadow-lg overflow-hidden absolute w-full z-50"
          >
            <div className="flex flex-col gap-6 text-center">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className={`${link.active ? 'text-primary' : 'text-slate-600 hover:text-primary'} font-sans font-medium text-[0.85rem] tracking-[1px] uppercase`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="h-px w-full bg-black/5 my-2" />
              {secondaryLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-primary/70 font-bold text-[0.75rem] tracking-widest uppercase"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <button className="bg-[#1a1a1a] text-white px-6 py-3 rounded-md text-[0.85rem] font-bold mx-auto transition-colors hover:bg-black uppercase tracking-wider w-full mt-4">
                CONTACT US
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const App = () => {
  const galleryImages = [
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1518152006812-edab29b069ac?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&q=80&w=800"
  ];

  return (
    <div className="min-h-screen bg-white selection:bg-primary/20 text-text-dark font-sans">
      <Navbar />

      {/* Hero Section — entrance animations only here */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#F5F5F7] pt-24 pb-16">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#EEF2FF] rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Content */}
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-white mb-8 shadow-sm"
              >
                <Sparkles className="text-[#1d71b8]" size={16} />
                <span className="text-slate-600 text-[11px] font-bold uppercase tracking-widest">Pioneering Global Discovery</span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
                className="text-4xl sm:text-5xl md:text-7xl lg:text-[5rem] text-[#1A1A1A] font-serif font-bold mb-6 tracking-tight leading-[1.1]"
              >
                Research & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1d71b8] to-[#2D336B] italic pr-4">Innovation</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.28, ease: "easeOut" }}
                className="text-lg md:text-xl text-slate-600 font-light max-w-xl leading-relaxed mb-10"
              >
                A Vision of Research Excellence and Scholarly Pursuit. Our institution is dedicated to pioneering scientific advancement and solving complex global challenges.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                className="flex flex-wrap gap-6 items-center"
              >
                <button className="bg-[#2D336B] text-white px-10 py-5 rounded-full font-bold text-[11px] tracking-[0.2em] hover:bg-[#1a1e40] transition-colors duration-200 uppercase shadow-xl shadow-[#2D336B]/20 flex items-center gap-2 group">
                  Explore Research <ChevronRight className="group-hover:translate-x-1 transition-transform duration-200" size={16} />
                </button>
              </motion.div>

              {/* Floating Stats */}
              <motion.div 
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.55, ease: "easeOut" }}
                className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-xl"
              >
                {[
                  { label: "Research Centers", val: "12+" },
                  { label: "Active Patents", val: "45+" },
                  { label: "Global Partners", val: "100+" }
                ].map((stat, i) => (
                  <div key={i} className="bg-white border border-slate-100 p-4 sm:p-5 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200">
                    <div className="text-2xl sm:text-3xl font-serif font-bold text-[#1A1A1A] mb-1">{stat.val}</div>
                    <div className="text-[9px] sm:text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em]">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right Column: Featured Image Collage */}
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
              className="relative hidden lg:block h-[700px] w-full"
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-[85%] rounded-[2rem] overflow-hidden shadow-2xl border-[12px] border-white transform rotate-3 hover:rotate-0 transition-transform duration-700 ease-out z-10 bg-slate-100">
                <img 
                  src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=800" 
                  alt="Students researching" 
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute top-10 right-4 w-48 h-48 rounded-[2rem] overflow-hidden shadow-xl border-[8px] border-white transform -rotate-6 z-20">
                <img 
                  src="https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=400" 
                  alt="Microscope" 
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute bottom-16 left-0 w-56 h-40 rounded-[2rem] overflow-hidden shadow-xl border-[8px] border-white transform rotate-[-8deg] z-20">
                <img 
                  src="https://images.unsplash.com/photo-1518152006812-edab29b069ac?auto=format&fit=crop&q=80&w=400" 
                  alt="Data Analysis" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="absolute top-1/4 left-10 w-20 h-20 bg-[#F7B538] rounded-full blur-[40px] opacity-60 z-0" />
            </motion.div>

          </div>
        </div>
      </section>

      {/* Research Gallery Section */}
      <section className="py-14 bg-[#2D336B] relative z-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-8 relative z-10">
            <h2 className="text-3xl font-serif font-bold text-white mb-3 uppercase tracking-[0.15em]">Gallery</h2>
            <div className="h-1 w-16 bg-white/20 mx-auto rounded-full" />
          </div>

          {/* Split layout: 1 big image left + 2×2 grid right */}
          <div className="flex flex-col md:flex-row gap-3">

            {/* Big image — left */}
            <div className="relative overflow-hidden rounded-2xl group cursor-pointer md:w-1/2 aspect-[4/3]">
              <img
                src={galleryImages[0]}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                alt="Research 1"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-250" />
            </div>

            {/* 2×2 grid — right */}
            <div className="grid grid-cols-2 gap-3 md:w-1/2">
              {galleryImages.slice(1, 5).map((src, i) => (
                <div
                  key={i}
                  className="relative overflow-hidden rounded-xl group cursor-pointer aspect-[4/3]"
                >
                  <img
                    src={src}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    alt={`Research ${i + 2}`}
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-250" />
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section id="vision" className="py-32 bg-[#FCF8F3] relative overflow-hidden border-y border-[#FCF8F3]/50">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-[2.5rem] p-10 md:p-14 shadow-sm border border-slate-100 relative overflow-hidden group hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center gap-6 mb-10 relative z-10">
                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center border border-slate-100 group-hover:border-[#00897B]/30 group-hover:bg-[#00897B]/5 transition-colors duration-300">
                  <Eye className="text-[#00897B]" size={32} strokeWidth={1.5} />
                </div>
                <h2 className="text-3xl font-serif font-bold tracking-[0.2em] text-secondary uppercase">Our Vision</h2>
              </div>
              <p className="text-[1.1rem] leading-relaxed text-slate-600 font-light relative z-10">
                To establish an ecosystem of continuous learning and discovery that pioneers scientific advancement and reshapes the global technological landscape.
              </p>
            </div>

            <div className="bg-white rounded-[2.5rem] p-10 md:p-14 shadow-sm border border-slate-100 relative overflow-hidden group hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center gap-6 mb-10 relative z-10">
                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center border border-slate-100 group-hover:border-blue-500/30 group-hover:bg-blue-500/5 transition-colors duration-300">
                  <Target className="text-blue-500" size={32} strokeWidth={1.5} />
                </div>
                <h2 className="text-3xl font-serif font-bold tracking-[0.2em] text-secondary uppercase">Our Mission</h2>
              </div>
              <ul className="space-y-6 relative z-10">
                {[
                  "Foster a culture of innovative and disruptive thinking.",
                  "Build state-of-the-art research infrastructure.",
                  "Facilitate global collaboration and knowledge exchange."
                ].map((item, index) => (
                  <li key={index} className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center shrink-0 mt-1 border border-slate-100">
                      <div className="w-2 h-2 rounded-full bg-blue-500" />
                    </div>
                    <span className="text-[1.05rem] text-slate-600 leading-relaxed font-light">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Research Funding & Hubs Section */}
      <section id="funding-hubs" className="py-32 bg-[#F5F5F7] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#EEF2FF] rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-sm font-bold text-slate-400 mb-4 uppercase tracking-[0.4em]">Ecosystem</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-secondary uppercase tracking-[0.1em] mb-6">Funding & Hubs</h3>
            <div className="h-1 w-24 bg-slate-200 mx-auto rounded-full" />
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Database, title: "Funding Schemes", desc: "Backed by prestigious TEFR, TIFR, and AICTE Research Incentive Schemes.", color: "#2b73b5", shadow: "rgba(43,115,181,0.15)", glow: "rgba(43,115,181,0.15)" },
              { icon: Globe, title: "Domain Hubs", desc: "Specialized centers focusing on emergent global technologies.", color: "#e53b49", shadow: "rgba(229,59,73,0.15)", glow: "rgba(229,59,73,0.15)" },
              { icon: Users, title: "Consultancy", desc: "Providing expert solutions and industrial research consultancy.", color: "#f3842c", shadow: "rgba(243,132,44,0.15)", glow: "rgba(243,132,44,0.15)" }
            ].map((hub, index) => (
              <div 
                key={index}
                className="bg-white px-8 py-14 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group flex flex-col items-center text-center relative border-b-[4px]"
                style={{ borderBottomColor: hub.color }}
              >
                <div 
                  className="w-[88px] h-[88px] rounded-full flex items-center justify-center mb-8 bg-white transition-colors duration-300 relative z-10 border border-slate-100" 
                  style={{ 
                    boxShadow: `0 0 40px ${hub.glow}, inset 0 0 20px ${hub.glow}` 
                  }}
                >
                  <hub.icon style={{ color: hub.color }} size={28} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-serif font-bold text-[#1A1A1A] mb-4 tracking-wide relative z-10">{hub.title}</h3>
                <p className="text-slate-500 text-[0.95rem] font-light leading-relaxed mb-10 relative z-10 px-2">{hub.desc}</p>
                
                <button className="mt-auto text-[0.8rem] font-bold uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all duration-200" style={{ color: hub.color }}>
                  DISCOVER <ChevronRight size={14} className="stroke-[2.5px]" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Objectives Section */}
      <section id="objectives" className="py-32 bg-[#EEF2FF] relative z-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-24">
            <h2 className="text-4xl font-serif font-bold text-secondary uppercase tracking-[0.2em] mb-6">Core Objectives</h2>
            <div className="h-1 w-24 bg-blue-200 mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Excellence in Research",
                desc: "Achieve academic, industrial, and societal research excellence through innovation.",
                color: "#1d71b8",
                gradient: "from-[#dbeafe] to-[#eff6ff]",
                accent: "rgba(29,113,184,0.15)"
              },
              {
                title: "Interdisciplinary Collaboration",
                desc: "Promote cross-domain research and share knowledge via reputed journals and conferences.",
                color: "#0f766e",
                gradient: "from-[#ccfbf1] to-[#f0fdfa]",
                accent: "rgba(15,118,110,0.15)"
              },
              {
                title: "Sensitization Programs",
                desc: "Organize seminars and workshops with guest experts to address societal and industrial needs.",
                color: "#7c3aed",
                gradient: "from-[#ede9fe] to-[#f5f3ff]",
                accent: "rgba(124,58,237,0.15)"
              },
              {
                title: "Industry Networking",
                desc: "Conduct research through active collaboration and networking with industry partners.",
                color: "#be185d",
                gradient: "from-[#fce7f3] to-[#fdf2f8]",
                accent: "rgba(190,24,93,0.15)"
              }
            ].map((obj, index) => (
              <div 
                key={index}
                className={`bg-gradient-to-br ${obj.gradient} p-10 rounded-[2.5rem] shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-[#2D336B]/5 border-b-[6px] group relative overflow-hidden`}
                style={{ borderBottomColor: obj.color }}
              >
                <div className="w-16 h-16 rounded-[1.5rem] bg-white shadow-sm flex items-center justify-center mb-10 border border-slate-100 relative z-10">
                  <span className="font-serif font-bold text-2xl" style={{ color: obj.color }}>{index + 1}</span>
                </div>
                <h3 className="text-xl font-serif font-bold text-secondary mb-4 pr-4 leading-snug relative z-10">{obj.title}</h3>
                <p className="text-slate-600 leading-relaxed text-[0.95rem] font-light relative z-10">{obj.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-40 bg-[#F7B538] relative overflow-hidden flex items-center justify-center border-t border-[#FCF8F3]/20 shadow-[0_-20px_50px_rgba(247,181,56,0.2)]">
        <div className="absolute inset-0 opacity-[0.03] mix-blend-luminosity bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-fixed bg-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#F7B538] via-transparent to-[#F7B538]/80" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <div className="text-secondary/10 text-9xl font-serif leading-none absolute -top-12 left-0 right-0 mx-auto select-none pointer-events-none self-center drop-shadow-sm">"</div>
          <h2 className="text-sm font-bold text-secondary/60 mb-12 uppercase tracking-[0.4em] relative z-10">Institutional Philosophy</h2>
          <p className="text-3xl md:text-5xl leading-tight font-serif text-secondary relative z-10">
            True academic excellence arises through <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2D336B] to-slate-800 italic">interdisciplinary collaboration</span> and sustained intellectual rigor.
          </p>
        </div>
      </section>

      {/* Governance & Policies Section */}
      <section id="governance" className="py-32 bg-[#FCF8F3] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-5 gap-16 items-center">
            <div className="lg:col-span-2">
              <h2 className="text-4xl font-serif font-bold text-secondary mb-6 uppercase tracking-[0.15em]">Governance & Policies</h2>
              <div className="h-1 w-24 bg-[#2D336B]/20 rounded-full mb-8" />
              <p className="text-slate-600 text-[1.05rem] mb-12 leading-relaxed font-light">
                Our established framework ensures rigorous ethical standards, active linkage with industry, and robust systems fostering research empowerment across all departments.
              </p>
              <div className="space-y-5">
                <button className="w-full bg-white border border-slate-200 text-secondary px-8 py-5 rounded-[1.5rem] font-bold text-[11px] tracking-[0.25em] transition-all duration-200 hover:border-slate-300 hover:shadow-md uppercase shadow-sm flex items-center justify-between group">
                  Research Committee <ChevronRight className="group-hover:translate-x-1 transition-transform duration-200 text-slate-400" size={18} />
                </button>
                <button className="w-full bg-white text-secondary px-8 py-5 rounded-[1.5rem] font-bold text-[11px] tracking-[0.25em] transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 uppercase flex items-center justify-between group border border-slate-200 shadow-sm hover:border-blue-500/30">
                  Research Linkage <Zap className="text-blue-500 group-hover:text-amber-400 transition-colors duration-200" size={18} />
                </button>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="bg-white rounded-[2.5rem] p-8 sm:p-12 shadow-sm border border-[#2D336B]/5 relative overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#F5F5F7] rounded-full blur-[80px]" />
                <h3 className="text-2xl font-serif font-bold text-[#2D336B] mb-10 pb-6 border-b border-[#F5F5F7] tracking-[0.15em] relative z-10 flex items-center gap-4">
                  <div className="w-4 h-4 bg-[#F7B538] rounded-sm transform rotate-45 shadow-sm" />
                  Core Documents
                </h3>
                
                <div className="space-y-4 relative z-10">
                  {[
                    { title: "Empowerment Guidelines", desc: "Framework for integrating research natively into academic curricula.", icon: Sparkles },
                    { title: "Research & Consultancy Policy 2013", desc: "Foundational rules and metrics governing industrial consultancy.", icon: Briefcase },
                    { title: "Research & Development Policy 2024", desc: "Updated mandates, ethical practices, and the R&D code of conduct.", icon: Mail }
                  ].map((policy, index) => (
                    <div key={index} className="flex gap-6 items-start group cursor-pointer p-6 rounded-[1.5rem] bg-[#FCF8F3]/50 hover:bg-white border border-[#F5F5F7] hover:border-[#2D336B]/20 hover:shadow-md transition-all duration-250">
                      <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shrink-0 border border-[#2D336B]/10 group-hover:bg-[#2D336B] group-hover:border-[#2D336B] transition-all duration-250 shadow-sm">
                        <policy.icon className="text-[#2D336B] group-hover:text-white transition-colors duration-250" size={22} strokeWidth={2} />
                      </div>
                      <div>
                        <h4 className="text-[1.1rem] font-bold text-secondary group-hover:text-[#2D336B] transition-colors duration-200 tracking-wide">{policy.title}</h4>
                        <p className="text-[0.9rem] text-slate-500 font-medium mt-2 leading-relaxed">{policy.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* National Initiatives Section */}
      <section id="initiatives" className="py-32 bg-[#2D336B] relative overflow-hidden shadow-[inset_0_20px_50px_rgba(0,0,0,0.1)]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none opacity-40" />
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-sm font-bold text-blue-100/60 mb-4 uppercase tracking-[0.3em] flex items-center justify-center gap-4">
              <span className="w-8 h-px bg-white/20" /> Aligning With <span className="w-8 h-px bg-white/20" />
            </h2>
            <h3 className="text-4xl font-serif font-bold text-white uppercase tracking-[0.1em] drop-shadow-sm">National Initiatives</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Building2, title: "SMART CITIES", desc: "Urban infrastructure models.", color: "#d32128", rgb: "211,33,40" },
              { icon: Cpu, title: "DIGITAL INDIA", desc: "Cyber-physical frameworks.", color: "#4F8AFF", rgb: "79,138,255" },
              { icon: Lightbulb, title: "STARTUP INDIA", desc: "Mentorship and funding.", color: "#fbbd18", rgb: "251,189,24" }
            ].map((item, index) => (
              <div 
                key={index} 
                className="bg-white/10 backdrop-blur-md p-12 rounded-[2rem] text-center border border-white/10 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-white/15 group relative overflow-hidden"
              >
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-40 h-40 blur-[80px] opacity-0 group-hover:opacity-50 transition-opacity duration-400 pointer-events-none" style={{ backgroundColor: item.color }} />
                <div className="w-20 h-20 rounded-[1.5rem] flex items-center justify-center mx-auto mb-8 border border-white/20 transition-all duration-300 shadow-sm bg-white/5 group-hover:bg-white group-hover:shadow-md">
                  <item.icon className="transition-colors duration-300" style={{ color: item.color }} strokeWidth={1.5} size={32} />
                </div>
                <h3 className="font-serif font-bold text-xl mb-4 tracking-widest text-white drop-shadow-sm" style={{ color: item.color }}>{item.title}</h3>
                <p className="text-blue-50 text-[0.95rem] font-light z-10 relative">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A1A1A] text-white py-24 pb-12 border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent -translate-x-1/2 opacity-30" />
        
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-12 text-center md:text-left relative z-10">
          <div>
            <div className="flex items-center gap-4 justify-center md:justify-start h-12 mb-6">
              <img 
                src="/logo.png" 
                alt="Trident Logo" 
                className="w-12 h-12 object-contain shrink-0" 
                onError={(e) => { e.target.onerror = null; e.target.src = 'https://tat.ac.in/wp-content/uploads/2023/12/logo-1.png'; }}
              />
              <h3 className="font-serif font-bold text-2xl tracking-[0.2em] pt-1">TRIDENT</h3>
            </div>
            <p className="text-white/60 text-[0.9rem] font-light leading-relaxed pr-6">Innovation in Education. Excellence in Research. Forging the future through cutting-edge discovery.</p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 text-[10px] uppercase tracking-[0.3em] h-12 flex items-center justify-center md:justify-start">Links</h4>
            <ul className="space-y-4 text-[0.9rem] font-light text-white/60">
              <li className="hover:text-white cursor-pointer transition-colors duration-200 block">About Us</li>
              <li className="hover:text-white cursor-pointer transition-colors duration-200 block">Academics</li>
              <li className="hover:text-white cursor-pointer transition-colors duration-200 block">Research</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 text-[10px] uppercase tracking-[0.3em] h-12 flex items-center justify-center md:justify-start">Contact</h4>
            <div className="space-y-4">
              <a href="mailto:info@tat.ac.in" className="block text-[0.9rem] font-bold text-white hover:text-white/80 transition-colors duration-200 cursor-pointer">info@tat.ac.in</a>
              <a href="tel:+916746649003" className="block text-[0.9rem] text-white/60 font-light hover:text-white transition-colors duration-200 cursor-pointer">+91 674 6649003</a>
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 text-[10px] uppercase tracking-[0.3em] h-12 flex items-center justify-center md:justify-start">Address</h4>
            <p className="text-[0.9rem] text-white/60 font-light leading-relaxed">Infocity, Chandaka Industrial Estate,<br />Bhubaneswar, Odisha 751024</p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 mt-20 pt-8 border-t border-white/5 text-center flex flex-col md:flex-row justify-between items-center gap-4 relative z-10">
          <p className="text-[10px] uppercase tracking-widest font-medium text-white/30">
            &copy; {new Date().getFullYear()} Trident Academy of Technology.
          </p>
          <div className="flex gap-6 text-[10px] uppercase tracking-widest font-medium text-white/30">
            <span className="hover:text-white cursor-pointer transition-colors duration-200">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer transition-colors duration-200">Terms of Service</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;

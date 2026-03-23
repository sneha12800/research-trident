import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Eye, 
  Target, 
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
  Award
} from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 bg-transparent py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-3">
            {/* Actual TAT institutional logo from public/logo.png */}
            <img src="/logo.png" alt="Trident Academy of Technology" className="w-12 h-12 object-contain" />
            <div>
              <h1 className="text-white font-serif font-bold text-lg leading-tight">Trident Academy of</h1>
              <h1 className="text-white font-serif font-bold text-lg leading-tight uppercase tracking-wider">Technology</h1>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            {[
              { name: 'Overview', href: 'https://trident-about-page.netlify.app/' },
              { name: 'Research', href: '#research' },
              { name: 'Programs', href: 'https://trident-academic.netlify.app/' },
              { name: 'Admissions', href: 'https://admissions-tat-tekkzy.netlify.app/' },
              { name: 'Contact', href: '#contact' }
            ].map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-white hover:text-pop transition-all font-bold text-sm tracking-widest uppercase"
              >
                {link.name}
              </a>
            ))}
            <button className="bg-pop text-white px-8 py-3 rounded-full text-xs font-bold hover:bg-opacity-90 transition-all shadow-lg">
              APPLY NOW
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="md:hidden bg-accent/95 backdrop-blur-xl border-b border-white/10 px-4 py-8"
          >
            <div className="flex flex-col gap-6 text-center">
              {[
                { name: 'Overview', href: 'https://trident-about-page.netlify.app/' },
                { name: 'Research', href: '#research' },
                { name: 'Programs', href: 'https://trident-academic.netlify.app/' },
                { name: 'Admissions', href: 'https://admissions-tat-tekkzy.netlify.app/' },
                { name: 'Contact', href: '#contact' }
              ].map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-white hover:text-pop font-bold text-lg tracking-widest uppercase"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <button className="bg-pop text-white px-6 py-4 rounded-full text-sm font-bold mx-auto">
                APPLY NOW
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const App = () => {
  const initiatives = [
    { title: "Innovation and Entrepreneurship Development Centre (IEDC)", desc: "Organizing regular hackathons, ideation camps, and business plan competitions.", icon: Sparkles },
    { title: "Technical Clubs & Student Chapters", desc: "Facilitating peer-to-peer learning through specialized departmental societies.", icon: Zap },
    { title: "Intramural Funded Schemes", desc: "Providing seed grants for promising undergraduate research projects.", icon: Award },
    { title: "Academic Conferences Participation", desc: "Sponsoring scholars to present their findings at prestigious forums.", icon: Mail }
  ];

  const galleryImages = [
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1518152006812-edab29b069ac?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&q=80&w=800"
  ];

  return (
    <div className="min-h-screen bg-[#fdfaf6] selection:bg-pop/20 text-[#2c1e16]">
      <Navbar />

      {/* Hero Section - Pattern Kept, Content Restored */}
      <section className="relative h-[100vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1562774053-701939374585?w=2000&auto=format&fit=crop&q=80" 
            className="w-full h-full object-cover"
            alt="Library"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-6xl md:text-8xl text-white font-serif font-bold mb-8 tracking-tight">
              Research & <span className="text-secondary italic">Innovation</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 font-medium max-w-2xl leading-relaxed mb-12">
              A Vision of Research Excellence and Scholarly Pursuit. Our institution is dedicated to pioneering scientific advancement and solving complex global challenges through rigorous inquiry and sustainable innovation.
            </p>
            <div className="flex flex-wrap gap-6">
              <button className="bg-[#d6b3b3] text-accent px-12 py-4 rounded-full font-bold text-sm tracking-widest hover:bg-opacity-90 transition-all uppercase">
                EXPLORE RESEARCH
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Research Gallery Section - STATIC */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-accent mb-4 uppercase tracking-[0.1em]">Research Gallery</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary via-pop to-primary mx-auto rounded-full" />
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {galleryImages.map((src, index) => (
              <div 
                key={index} 
                className={`relative overflow-hidden rounded-2xl bg-secondary aspect-[4/3] shadow-lg border border-primary/10 ${index === 1 ? 'md:col-span-1 md:row-span-2 aspect-auto' : ''}`}
              >
                <img 
                  src={src} 
                  className="w-full h-full object-cover" 
                  alt={`Research ${index + 1}`} 
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-24 bg-[#fdfaf6]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-12 rounded-3xl shadow-xl shadow-accent/5 border border-primary/20">
              <div className="flex items-center gap-6 mb-8">
                <div className="w-14 h-14 bg-accent rounded-2xl flex items-center justify-center">
                  <Eye className="text-primary" size={28} />
                </div>
                <h2 className="text-2xl font-serif font-bold text-accent uppercase tracking-widest">Our Vision</h2>
              </div>
              <p className="text-muted leading-relaxed text-lg mb-6 font-medium">
                To establish an ecosystem of continuous learning and discovery that pioneers scientific advancement.
              </p>
              <p className="text-muted text-sm border-l-4 border-primary/30 pl-4 italic">
                Guided by unwavering ethical standards.
              </p>
            </div>

            <div className="bg-white p-12 rounded-3xl shadow-xl shadow-accent/5 border border-primary/20">
              <div className="flex items-center gap-6 mb-8">
                <div className="w-14 h-14 bg-pop rounded-2xl flex items-center justify-center">
                  <Target className="text-white" size={28} />
                </div>
                <h2 className="text-2xl font-serif font-bold text-accent uppercase tracking-widest">Our Mission</h2>
              </div>
              <ul className="space-y-4 text-muted font-semibold">
                <li className="flex gap-4 items-center">
                  <div className="w-2 h-2 rounded-full bg-pop" />
                  Foster a culture of innovative thinking.
                </li>
                <li className="flex gap-4 items-center">
                  <div className="w-2 h-2 rounded-full bg-pop" />
                  Build state-of-the-art infrastructure.
                </li>
                <li className="flex gap-4 items-center">
                  <div className="w-2 h-2 rounded-full bg-pop" />
                  Facilitate global collaboration.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-accent text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-serif font-bold text-white mb-8 uppercase tracking-widest">Philosophy</h2>
          <p className="text-xl md:text-2xl leading-relaxed font-serif italic text-secondary/80">
            "True academic excellence arises through interdisciplinary collaboration and sustained intellectual rigor."
          </p>
        </div>
      </section>

      {/* National Initiatives Section */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: Building2, title: "SMART CITIES", color: "from-blue-500 to-cyan-400", desc: "Urban infrastructure models." },
            { icon: Cpu, title: "DIGITAL INDIA", color: "from-purple-500 to-indigo-400", desc: "Cyber-physical frameworks." },
            { icon: Lightbulb, title: "STARTUP INDIA", color: "from-amber-400 to-orange-500", desc: "Mentorship and funding." }
          ].map((item, index) => (
            <div key={index} className="bg-white p-10 rounded-3xl text-center border border-primary/20 shadow-lg uppercase">
              <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                <item.icon className="text-white" size={28} />
              </div>
              <h3 className="font-serif font-bold text-xl mb-4 text-accent">{item.title}</h3>
              <p className="text-muted text-xs font-bold leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-accent text-secondary py-20">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-12 text-center md:text-left">
          <div className="space-y-6">
            <h3 className="font-serif font-bold text-3xl text-white">Trident</h3>
            <p className="text-primary/70 text-sm font-medium">Innovation in Education. Excellence in Research.</p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 text-xs uppercase tracking-widest">Links</h4>
            <ul className="space-y-3 text-sm font-semibold text-primary/60">
              <li className="hover:text-pop cursor-pointer">About Us</li>
              <li className="hover:text-pop cursor-pointer">Academics</li>
              <li className="hover:text-pop cursor-pointer">Research</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 text-xs uppercase tracking-widest">Contact</h4>
            <p className="text-sm text-primary/60 font-semibold mb-2">info@tat.ac.in</p>
            <p className="text-sm text-primary/60 font-semibold">+91 674 6649003</p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 text-xs uppercase tracking-widest">Address</h4>
            <p className="text-sm text-primary/60 font-semibold">Bhubaneswar, Odisha, India</p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 mt-16 pt-8 border-t border-white/5 text-center text-[10px] font-bold tracking-widest uppercase text-primary/30">
          <p>&copy; 2024 Trident Academy of Technology.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;

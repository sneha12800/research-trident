import { useState, useEffect } from "react";
import { Users, Menu, X } from "lucide-react";
import { NAV_LINKS, APPLY_NOW_LINK } from "../data/constants";
import logo from "../assets/logo.png";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full z-[100] transition-all duration-500">
      {/* Utility Bar */}
      <div className={cn(
        "hidden lg:block bg-[#1B4D8E] border-b border-[#1B4D8E]/20 transition-all duration-500 overflow-hidden",
        isScrolled ? "max-h-0 py-0 opacity-0" : "max-h-20 py-2.5 opacity-100"
      )}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-[11px] font-semibold text-white/80 tracking-widest uppercase">
          <span>
            Affiliated to BPUT &nbsp;<span className="text-[#F7B538] opacity-50">|</span>&nbsp; NAAC 'A' Accredited
          </span>
          <div className="flex gap-6 text-[11px] font-bold text-white/90 uppercase tracking-widest">
            <a href="https://alumni-tat.tekkzy.com/" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              Alumni
            </a>
          </div>
        </div>
      </div>

      <header className={cn(
        "relative transition-all duration-500 bg-white",
        isScrolled ? "py-3 shadow-md" : "py-5"
      )}>
        <div className="mx-auto px-6 xl:px-12 flex items-center justify-between">
          
          {/* Logo Lockup */}
          <a href="https://tat.tekkzy.com/" className="flex items-center gap-3.5 group cursor-pointer" style={{ textDecoration: 'none' }}>
            <img src={logo} alt="TAT Logo" className="w-12 h-12 md:w-[52px] md:h-[52px] object-contain flex-shrink-0 drop-shadow-sm" />
            <div className="hidden sm:flex flex-col justify-center">
              <div className="font-serif text-[22px] md:text-[24px] font-black text-[#3E3A36] leading-none tracking-[0.04em] uppercase">Trident</div>
              <div className="w-full h-[1px] bg-gradient-to-r from-[#1B4D8E] to-transparent my-[3px]"></div>
              <div className="text-[9px] md:text-[10px] font-semibold text-[#1B4D8E] tracking-[0.22em] uppercase leading-none font-sans">Academy of Technology</div>
            </div>
          </a>

          {/* Desktop Navigation Menu */}
          <nav className="hidden lg:block">
            <ul className="flex items-center gap-6" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
              {NAV_LINKS.map(item => (
                <li key={item.label}>
                  <a 
                    href={item.href} 
                    className={cn(
                      "text-[14px] uppercase tracking-[0.14em] cursor-pointer whitespace-nowrap font-extrabold transition-colors",
                      item.label === 'RESEARCH' 
                        ? "text-[#1B4D8E] border-b-2 border-[#1B4D8E] pb-[2px]" 
                        : "text-[#3E3A36] hover:text-[#1B4D8E]"
                    )}
                    style={{ textDecoration: 'none' }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Call to Action & Mobile Menu Toggle */}
          <div className="hidden lg:flex items-center gap-5">
            <a href={APPLY_NOW_LINK} className="bg-[#E63946] hover:bg-[#c92f3a] text-white text-[12px] font-bold px-7 py-3 rounded uppercase whitespace-nowrap transition-colors" style={{ textDecoration: 'none' }}>
              Apply Now
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden text-[#1B4D8E] p-2 bg-slate-50 rounded-lg hover:bg-[#1B4D8E]/10 transition-colors active:scale-95 z-50 relative" 
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle Menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={cn(
          "lg:hidden absolute top-full left-0 w-full bg-white shadow-xl transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] origin-top overflow-hidden border-t border-[#1B4D8E]/10",
          mobileOpen ? "max-h-[85vh] opacity-100 py-6" : "max-h-0 opacity-0 py-0 pointer-events-none"
        )}
      >
        <div className="px-6 flex flex-col h-full overflow-y-auto pb-4">
          {NAV_LINKS.map((item, i) => (
            <a 
              key={item.label} 
              href={item.href} 
              onClick={() => setMobileOpen(false)}
              className={cn(
                "block py-3.5 text-[15px] font-extrabold uppercase tracking-[0.14em] rounded-lg px-3 transition-all duration-500 transform hover:text-[#1B4D8E] hover:bg-slate-50/50",
                item.label === 'RESEARCH' ? "text-[#1B4D8E] bg-slate-50" : "text-[#3E3A36]",
                mobileOpen ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
              )}
              style={{ 
                transitionDelay: `${mobileOpen ? i * 40 + 100 : 0}ms`, 
                borderBottom: i !== NAV_LINKS.length - 1 ? "1px solid rgba(27,77,142,0.1)" : "none",
                textDecoration: 'none'
              }}
            >
              {item.label}
            </a>
          ))}
          <div 
            className={cn(
              "pt-8 px-2 transition-all duration-700 transform",
              mobileOpen ? "translate-y-0 opacity-100 scale-100" : "translate-y-8 opacity-0 scale-95"
            )} 
            style={{ transitionDelay: `${mobileOpen ? NAV_LINKS.length * 40 + 150 : 0}ms` }}
          >
            <a href={APPLY_NOW_LINK} className="block text-center text-[13px] tracking-widest font-extrabold px-6 py-4 rounded-xl shadow-[0_10px_30px_-10px_rgba(230,57,70,0.5)] transition-colors bg-[#E63946] text-white hover:bg-[#c92f3a]" style={{ textDecoration: 'none' }}>
              START APPLICATION
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

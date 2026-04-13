import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
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
    <header className="fixed top-0 left-0 w-full z-[100] transition-all duration-300 bg-white/95 backdrop-blur-md shadow-sm border-b border-[#253386]/5">
      {/* Top Global Bar */}
      <div className={cn(
        "bg-[#253386] text-white px-4 md:px-8 transition-all duration-500 overflow-hidden",
        isScrolled ? "max-h-0 py-0 opacity-0" : "max-h-20 py-2 opacity-100"
      )}>
        <div className="max-w-7xl mx-auto flex justify-between items-center text-[10px] md:text-xs font-bold tracking-wider">
          <div className="flex gap-4 md:gap-8 uppercase">
            <span className="opacity-90">Affiliated to BPUT</span>
            <span className="hidden md:inline-block h-3.5 w-[1px] bg-white/20"></span>
            <span className="opacity-90">NAAC 'A' Accredited</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://alumni-tat.tekkzy.com/" className="flex items-center gap-1.5 hover:text-white/80 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-graduation-cap"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
              ALUMNI
            </a>
          </div>
        </div>
      </div>

      <nav className={cn(
        "max-w-7xl mx-auto px-4 md:px-8 transition-all duration-300",
        isScrolled ? "py-2" : "py-4"
      )}>
        <div className="flex justify-between items-center">
          
          {/* Branding / Logo Lockup */}
          <a href="https://tat.tekkzy.com/" className="flex items-center gap-3.5 group cursor-pointer shrink-0">
            <img src={logo} className="h-[52px] w-auto object-contain" alt="Trident Logo" />
            <div className="hidden sm:flex flex-col justify-center">
              <div className="font-serif text-[22px] font-black leading-none tracking-wider text-[#3E3A36] uppercase">
                TRIDENT
              </div>
              <div className="text-[9.5px] font-bold tracking-[0.22em] text-[#253386] uppercase mt-1">
                Academy of Technology
              </div>
            </div>
          </a>

          {/* Desktop Navigation Menu */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {NAV_LINKS.map(item => (
              <a 
                key={item.label}
                href={item.href} 
                className={cn(
                  "text-[13px] font-extrabold uppercase tracking-[0.12em] py-1 transition-all whitespace-nowrap",
                  item.label === 'RESEARCH' 
                    ? "text-[#253386] border-b-2 border-[#253386] pb-1" 
                    : "text-[#3E3A36] hover:text-[#253386]"
                )}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Call to Action & Mobile Menu Toggle */}
          <div className="flex items-center gap-4 shrink-0">
            <a href={APPLY_NOW_LINK} className="hidden lg:block bg-[#EB3D4D] hover:bg-[#c92f3a] text-white text-[12px] font-bold px-8 py-3 rounded-md uppercase transition-colors whitespace-nowrap">
              Apply Now
            </a>
            
            <button 
              className="lg:hidden text-[#253386] p-2 bg-slate-100 rounded-lg hover:bg-[#253386]/10 transition-colors active:scale-95 z-50 relative" 
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle Menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={cn(
          "lg:hidden absolute top-full left-0 w-full bg-white shadow-xl transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] origin-top overflow-hidden border-t border-[#253386]/10",
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
                "block py-3.5 text-sm uppercase tracking-[0.14em] hover:text-[#253386] hover:bg-slate-50/50 rounded-lg px-3 transition-all duration-500 transform font-extrabold",
                item.label === 'RESEARCH' ? "text-[#253386] bg-slate-50" : "text-[#3E3A36]",
                mobileOpen ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
              )}
              style={{ 
                transitionDelay: `${mobileOpen ? i * 40 + 100 : 0}ms`, 
                borderBottom: i !== NAV_LINKS.length - 1 ? "1px solid rgba(37,51,134,0.1)" : "none" 
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
            <a href={APPLY_NOW_LINK} className="block text-center text-[12px] font-bold px-7 py-3 rounded uppercase transition-colors bg-[#EB3D4D] text-white hover:bg-[#c92f3a]">
              START APPLICATION
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

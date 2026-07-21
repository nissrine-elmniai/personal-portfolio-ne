import { Button } from '@/components/Button';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from "react";
import { useScrollSpy } from '@/hooks/useScrollSpy';
const navLinks = [
  { href: '#about', label: "About" },
  { href: '#projects', label: "Projects" },
  { href: '#experience', label: "Experience" },
  { href: '#certifications', label: "Certifications" },
  { href: '#activities', label: "Activities" },
  { href: '#services', label: "Services" },


];
export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const sectionIds = navLinks.map((l) => l.href.slice(1))
  const activeSection = useScrollSpy(sectionIds)
  const scrollToContact = () => {
    setIsMobileMenuOpen(false);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header className={`fixed top-0 left-0 right-0 transition-all duration-500 ${isScrolled ? "glass-strong py-3" : "bg-transparent py-5"} z-50`}>
      <nav nav className="container mx-auto px-6 flex items-center justify-between" >
        <a href="#"
          className="text-xl font-bold tracking-tight hover:text-primary">
          NM<span className="text-primary">.</span>
        </a>
        {/*Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
            {navLinks.map((link, index) => {
              const id = link.href.slice(1)
              const isActive = activeSection === id
              return (
                <a key={index} href={link.href}
                  className={`relative px-4 py-2 text-sm rounded-full transition-all duration-300 ${isActive
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-surface"
                    }`}>
                  {link.label}
                  {isActive && (
                    <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary shadow-[0_0_10px_var(--color-primary)]" />
                  )}
                </a>)
            })}
          </div>
        </div>
        { /*CTA Button */}
        <div className="hidden md:block"><Button size="sm" onClick={scrollToContact}>Contact Me</Button></div>

        { /* Mobile Menu Button*/}
        <button className="md:hidden p-2 text-foreground cursor-pointer"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          {isMobileMenuOpen ? <X size={24} /> : < Menu size={24} />}
        </button>
      </nav >
      {/* Mobile Menu*/}
      {
        isMobileMenuOpen && (
          <div className="md:hidden glass-strong animate-fade-in">
            <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link, index) => {
                const id = link.href.slice(1)
                const isActive = activeSection === id
                return (
                  <a
                    href={link.href}
                    key={index}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-lg py-2 transition-colors ${isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
                      }`}
                  >
                    {link.label}
                  </a>)
              })}
              <Button onClick={() => { setIsMobileMenuOpen(false); scrollToContact(); }}>Contact Me</Button>
            </div>
          </div>)
      }
    </header >
  )
}

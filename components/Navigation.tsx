'use client';

import { useState, useEffect } from 'react';

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'gallery', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 w-full z-[100] bg-black/90 border-b-2 border-[#00ff00]/50 backdrop-blur-md shadow-lg shadow-[#00ff00]/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <a
            href="#home"
            onClick={(e) => handleClick(e, '#home')}
            className="text-xl font-bold tracking-tight terminal-text glitch"
          >
            <span className="glow-green-text">{'>'} IBRAHIM_SAMAD</span>
          </a>

          <div className="flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className={`text-xs font-bold uppercase tracking-widest transition-all duration-300 font-mono ${
                  activeSection === link.href.replace('#', '')
                    ? 'text-[#00ff00] glow-green-text'
                    : 'text-white/60 hover:text-[#00ff00]'
                }`}
              >
                [{link.label}]
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

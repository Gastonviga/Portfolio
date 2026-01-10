import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Logo } from './Logo';

const navLinksConfig = [
  { key: 'nav.services', href: '#services' },
  { key: 'nav.projects', href: '#work' },
  { key: 'nav.designLab', href: '#design-lab' },
  { key: 'nav.contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const lastScrollTime = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const now = Date.now();
      if (now - lastScrollTime.current < 100) return; // Throttle: 100ms
      lastScrollTime.current = now;

      const scrollY = window.scrollY;
      setScrolled(scrollY > 50);

      // ScrollSpy Logic
      // 150px offset to trigger active state when section is near the top (under header)
      const scrollPosition = scrollY + 150; 

      let current = '';
      for (const link of navLinksConfig) {
        const sectionId = link.href.substring(1);
        const element = document.getElementById(sectionId);
        
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            current = link.href;
          }
        }
      }
      
      // Edge case: if at bottom of page, highlight Contact (or last item)
      if ((window.innerHeight + Math.round(scrollY)) >= document.body.offsetHeight) {
         current = navLinksConfig[navLinksConfig.length - 1].href;
      }
      
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount

    // Initialize theme
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Allow external links (like /cv.pdf) to work normally
    if (!href.startsWith('#')) {
      setIsOpen(false);
      return;
    }

    e.preventDefault();
    setIsOpen(false);
    
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      window.history.pushState(null, '', window.location.pathname);
      setActiveSection('');
      return;
    }

    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      
      window.history.pushState(null, '', href);
      // We don't manually set activeSection here because the scroll listener will pick it up
    }
  };

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800 py-2' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a 
          href="#" 
          onClick={(e) => handleNavClick(e, '#')}
          className="transition-transform duration-300 hover:scale-95 origin-left flex items-center justify-center"
          aria-label="Viga Studio Home"
        >
          <Logo size="md" />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinksConfig.map((link) => (
            <a
              key={link.key}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`text-sm font-medium transition-colors duration-300 ${
                activeSection === link.href 
                  ? 'text-accent dark:text-accent' 
                  : 'text-neutral-600 dark:text-neutral-300 hover:text-accent dark:hover:text-accent'
              }`}
            >
              {t(link.key)}
            </a>
          ))}
          
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            aria-label="Toggle Dark Mode"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full text-neutral-800 dark:text-neutral-200"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          <button 
            className="text-neutral-800 dark:text-neutral-200"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800 p-6 md:hidden flex flex-col space-y-4 shadow-xl">
          {navLinksConfig.map((link) => (
            <a
              key={link.key}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`text-lg font-medium transition-colors ${
                activeSection === link.href 
                  ? 'text-accent dark:text-accent' 
                  : 'text-neutral-800 dark:text-neutral-100'
              }`}
            >
              {t(link.key)}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};
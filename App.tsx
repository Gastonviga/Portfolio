import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { DesignLab } from './components/DesignLab';
import { Contact } from './components/Contact';
import { LanguageToggle } from './components/LanguageToggle';

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <div className="bg-neutral-50 dark:bg-zinc-950 min-h-screen transition-colors duration-300">
        {/* Noise texture overlay */}
        <div className="noise-overlay" />
        
        <Navbar />
        <main>
          <Hero />
          <Problem />
          <Services />
          <Process />
          <DesignLab />
          <Contact />
        </main>
        
        <LanguageToggle />
      </div>
    </LanguageProvider>
  );
};

export default App;
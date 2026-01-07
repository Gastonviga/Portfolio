import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { DesignLab } from './components/DesignLab';
import { Contact } from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="bg-neutral-50 dark:bg-neutral-950 min-h-screen transition-colors duration-300">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <DesignLab />
        <Contact />
      </main>
    </div>
  );
};

export default App;
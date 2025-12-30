import React from 'react';
import { ArrowDown, Download } from 'lucide-react';
import { Reveal } from './Reveal';

export const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 pt-20">
      <div className="max-w-7xl mx-auto w-full">
        <Reveal>
          <h2 className="text-accent font-medium tracking-wide mb-4">AI SOLUTIONS ARCHITECT & AUTOMATION</h2>
        </Reveal>
        
        <Reveal delay={0.1}>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter leading-[0.9] mb-8 text-neutral-900 dark:text-white transition-colors duration-300">
            TURNING CHAOS <br />
            INTO <br />
            <span className="text-neutral-400 dark:text-neutral-600 transition-colors duration-300">INTELLIGENT SYSTEMS.</span>
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="max-w-xl text-lg md:text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed mb-10 transition-colors duration-300">
            I design autonomous systems and AI agents that solve complex business problems. 
            Bridging the gap between manual operations and automated scalability.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="flex flex-wrap gap-4">
            <a 
              href="#work"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 font-medium rounded-full hover:bg-accent dark:hover:bg-accent hover:text-white dark:hover:text-white transition-all duration-300"
            >
              View Projects
              <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform" />
            </a>
            <a 
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-8 py-4 border-2 border-neutral-900 dark:border-white text-neutral-900 dark:text-white font-medium rounded-full hover:bg-neutral-900 dark:hover:bg-white hover:text-white dark:hover:text-neutral-900 transition-all duration-300"
            >
              Download CV
              <Download size={18} className="group-hover:translate-y-0.5 transition-transform" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
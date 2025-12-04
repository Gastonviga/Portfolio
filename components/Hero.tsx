import React from 'react';
import { ArrowDown } from 'lucide-react';
import { Reveal } from './Reveal';

export const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 pt-20">
      <div className="max-w-7xl mx-auto w-full">
        <Reveal>
          <h2 className="text-accent font-medium tracking-wide mb-4">FRONTEND ENGINEER & DESIGNER</h2>
        </Reveal>
        
        <Reveal delay={0.1}>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter leading-[0.9] mb-8 text-neutral-900 dark:text-white transition-colors duration-300">
            CRAFTING <br />
            DIGITAL <br />
            <span className="text-neutral-400 dark:text-neutral-600 transition-colors duration-300">EXPERIENCES.</span>
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="max-w-xl text-lg md:text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed mb-10 transition-colors duration-300">
            I build pixel-perfect, accessible, and high-performance web interfaces. 
            Blending Swiss minimalistic design with robust engineering.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <a 
            href="#work"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 font-medium rounded-full hover:bg-accent dark:hover:bg-accent hover:text-white dark:hover:text-white transition-all duration-300"
          >
            View Projects
            <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform" />
          </a>
        </Reveal>
      </div>
    </section>
  );
};
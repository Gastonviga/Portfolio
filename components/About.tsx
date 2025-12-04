import React from 'react';
import { Reveal } from './Reveal';
import { SkillItem } from '../types';

const skills: SkillItem[] = [
  { category: "Frontend", technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Three.js"] },
  { category: "Backend", technologies: ["Node.js", "PostgreSQL", "GraphQL", "Python"] },
  { category: "Design", technologies: ["Figma", "Adobe XD", "Blender", "UI/UX Principles"] },
];

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white dark:bg-neutral-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Text Content */}
          <div className="space-y-8">
            <Reveal>
              <h3 className="text-sm font-bold text-neutral-400 dark:text-neutral-500 tracking-widest uppercase mb-2">About Me</h3>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-neutral-900 dark:text-white transition-colors">
                Bridging the gap between design and engineering.
              </h2>
            </Reveal>
            
            <Reveal delay={0.1}>
              <div className="text-neutral-600 dark:text-neutral-400 leading-relaxed space-y-4 transition-colors">
                <p>
                  I am an award-winning developer with over 5 years of experience building digital products for startups and enterprise clients.
                  My philosophy is simple: <strong>Less is more</strong>. I believe in stripping away the unnecessary to reveal the essential.
                </p>
                <p>
                  Currently based in New York, helping companies scale their frontend architecture while maintaining top-tier design standards.
                </p>
              </div>
            </Reveal>

            {/* Skills Tags */}
            <div className="pt-8">
              <Reveal delay={0.2}>
                <div className="space-y-6">
                  {skills.map((skillGroup) => (
                    <div key={skillGroup.category}>
                      <h4 className="text-sm font-semibold text-neutral-900 dark:text-neutral-200 mb-3">{skillGroup.category}</h4>
                      <div className="flex flex-wrap gap-2">
                        {skillGroup.technologies.map((tech) => (
                          <span 
                            key={tech} 
                            className="px-3 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 text-sm rounded-md border border-neutral-200 dark:border-neutral-700 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>

          {/* Image */}
          <Reveal delay={0.2} width="100%">
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto lg:ml-auto overflow-hidden bg-neutral-100 dark:bg-neutral-800 rounded-lg">
               <img 
                 src="https://picsum.photos/800/1000" 
                 alt="Portrait" 
                 className="object-cover w-full h-full hover:scale-105 transition-transform duration-700 ease-out grayscale hover:grayscale-0"
               />
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
};
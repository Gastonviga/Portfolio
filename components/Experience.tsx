import React from 'react';
import { Reveal } from './Reveal';
import { ExperienceItem } from '../types';

const experiences: ExperienceItem[] = [
  {
    id: 1,
    role: "Senior Software Engineer",
    company: "TechNova Inc.",
    period: "2021 - Present",
    description: "Architecting scalable web solutions and integrating AI-driven microservices. Reduced system latency by 40% through optimized data pipelines."
  },
  {
    id: 2,
    role: "Full Stack Developer",
    company: "Creative Studio",
    period: "2019 - 2021",
    description: "Developed end-to-end e-commerce platforms with real-time inventory management and payment gateway integrations."
  },
  {
    id: 3,
    role: "Solution Developer",
    company: "StartUp Alpha",
    period: "2017 - 2019",
    description: "Built MVPs for high-growth startups, focusing on rapid deployment, API design, and cloud infrastructure."
  }
];

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-neutral-50 dark:bg-neutral-950 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6">
        <Reveal>
          <h2 className="text-4xl font-bold tracking-tight mb-16 text-center text-neutral-900 dark:text-white">Experience</h2>
        </Reveal>

        <div className="space-y-12 border-l border-neutral-300 dark:border-neutral-800 ml-3 md:ml-0 transition-colors">
          {experiences.map((exp) => (
            <Reveal key={exp.id} width="100%">
              <div className="relative pl-8 md:pl-12 py-2 group">
                {/* Timeline Dot */}
                <div className="absolute -left-[5px] top-4 w-2.5 h-2.5 rounded-full bg-neutral-400 dark:bg-neutral-600 group-hover:bg-accent dark:group-hover:bg-accent transition-colors duration-300 ring-4 ring-neutral-50 dark:ring-neutral-950" />
                
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-white group-hover:text-accent dark:group-hover:text-accent transition-colors">
                    {exp.role}
                  </h3>
                  <span className="text-sm font-medium text-neutral-500 dark:text-neutral-500">{exp.period}</span>
                </div>
                <div className="text-md font-medium text-neutral-700 dark:text-neutral-300 mb-2">{exp.company}</div>
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
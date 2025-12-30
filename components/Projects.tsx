import React from 'react';
import { Reveal } from './Reveal';
import { ProjectItem } from '../types';
import { ArrowUpRight } from 'lucide-react';

const projects: ProjectItem[] = [
  {
    id: 1,
    title: "E-Commerce Dashboard",
    category: "Analytics / React",
    description: "A comprehensive dashboard for tracking sales and inventory with real-time data visualization.",
    imageUrl: "/imagenes/E-Commerce.png",
    size: "large"
  },
  {
    id: 2,
    title: "Finance App",
    category: "Mobile / React Native",
    description: "Personal finance tracking with AI insights.",
    imageUrl: "/imagenes/App-Finance.png",
    size: "small"
  },
  {
    id: 3,
    title: "Retail AI Agent",
    category: "Automation / WhatsApp API",
    description: "Autonomous customer service agent integrated with Google Sheets. Handles real-time stock queries and human-handoff logic, reducing response time by 90%.",
    imageUrl: "https://picsum.photos/seed/ai_agent/600/600",
    size: "small"
  },
  {
    id: 4,
    title: "Health Tracker",
    category: "Web App",
    description: "Integration with wearable devices to track vitals.",
    imageUrl: "https://picsum.photos/seed/health_tech/800/600",
    size: "large"
  }
];

export const Projects: React.FC = () => {
  return (
    <section id="work" className="py-24 bg-white dark:bg-neutral-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h3 className="text-sm font-bold text-neutral-400 dark:text-neutral-500 tracking-widest uppercase mb-2">Selected Works</h3>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white">Featured Projects</h2>
            </div>
            <a 
              href="#" 
              className="text-neutral-900 dark:text-white border-b border-neutral-900 dark:border-white pb-1 hover:text-accent dark:hover:text-accent hover:border-accent dark:hover:border-accent transition-colors"
              aria-label="View Github Repository"
            >
              View Github Repository
            </a>
          </div>
        </Reveal>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[400px]">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className={`${project.size === 'large' ? 'md:col-span-2' : 'md:col-span-1'}`}
            >
              <Reveal width="100%">
                 {/* Card Container - Styles moved here, explicit height added */}
                <div className="group relative w-full h-[400px] overflow-hidden rounded-2xl bg-neutral-100 dark:bg-neutral-800 shadow-md border border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 hover:shadow-2xl">
                  
                  {/* Image Background */}
                  <div className="absolute inset-0 w-full h-full">
                     <img 
                      src={project.imageUrl} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-neutral-900/20 dark:bg-black/40 group-hover:bg-neutral-900/60 dark:group-hover:bg-black/70 transition-colors duration-500" />
                  </div>

                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 p-8 w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-white/90 text-sm font-medium mb-1">{project.category}</p>
                        <h3 className="text-white text-2xl font-bold mb-2">{project.title}</h3>
                        <p className="text-neutral-100 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 max-w-sm">
                          {project.description}
                        </p>
                      </div>
                      <a 
                        href={project.link || "#"}
                        className="bg-white p-3 rounded-full opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-500 delay-200 ease-out hover:bg-accent text-neutral-900 hover:text-white cursor-pointer shadow-lg flex items-center justify-center"
                        aria-label={`View details for ${project.title}`}
                      >
                        <ArrowUpRight size={20} aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
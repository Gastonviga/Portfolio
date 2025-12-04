import React from 'react';
import { Reveal } from './Reveal';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-neutral-900 dark:bg-black text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          
          <div>
            <Reveal>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
                Let's work <br />
                <span className="text-neutral-500">together.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-lg text-neutral-400 mb-8 max-w-sm">
                Available for freelance opportunities and full-time roles. Have an idea? Let's discuss.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <a 
                href="mailto:hello@alex.dev" 
                className="inline-flex items-center gap-2 text-2xl font-medium hover:text-accent transition-colors mb-12"
              >
                <Mail /> hello@ema.dev
              </a>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="flex gap-6">
                <a href="#" className="p-3 bg-neutral-800 dark:bg-neutral-900 rounded-full hover:bg-accent hover:text-white transition-colors">
                  <Github size={24} />
                </a>
                <a href="#" className="p-3 bg-neutral-800 dark:bg-neutral-900 rounded-full hover:bg-accent hover:text-white transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="#" className="p-3 bg-neutral-800 dark:bg-neutral-900 rounded-full hover:bg-accent hover:text-white transition-colors">
                  <Twitter size={24} />
                </a>
              </div>
            </Reveal>
          </div>

          <div className="bg-neutral-800/50 dark:bg-neutral-900/50 p-8 rounded-2xl border border-neutral-700/50">
             <form className="space-y-6">
               <Reveal>
                 <div className="flex flex-col gap-2">
                   <label htmlFor="name" className="text-sm font-medium text-neutral-400">Name</label>
                   <input 
                    type="text" 
                    id="name" 
                    className="bg-neutral-900 dark:bg-neutral-950 border border-neutral-700 rounded-lg p-3 text-white focus:outline-none focus:border-accent transition-colors"
                    placeholder="John Doe"
                   />
                 </div>
               </Reveal>
               <Reveal delay={0.1}>
                 <div className="flex flex-col gap-2">
                   <label htmlFor="email" className="text-sm font-medium text-neutral-400">Email</label>
                   <input 
                    type="email" 
                    id="email" 
                    className="bg-neutral-900 dark:bg-neutral-950 border border-neutral-700 rounded-lg p-3 text-white focus:outline-none focus:border-accent transition-colors"
                    placeholder="john@example.com"
                   />
                 </div>
               </Reveal>
               <Reveal delay={0.2}>
                 <div className="flex flex-col gap-2">
                   <label htmlFor="message" className="text-sm font-medium text-neutral-400">Message</label>
                   <textarea 
                    id="message" 
                    rows={4} 
                    className="bg-neutral-900 dark:bg-neutral-950 border border-neutral-700 rounded-lg p-3 text-white focus:outline-none focus:border-accent transition-colors"
                    placeholder="Tell me about your project..."
                   />
                 </div>
               </Reveal>
               <Reveal delay={0.3}>
                 <button 
                  type="submit" 
                  className="w-full bg-white text-neutral-900 font-bold py-4 rounded-lg hover:bg-accent hover:text-white transition-all duration-300"
                 >
                   Send Message
                 </button>
               </Reveal>
             </form>
          </div>
        </div>

        <div className="mt-24 pt-8 border-t border-neutral-800 text-center text-neutral-500 text-sm">
          &copy; {new Date().getFullYear()} Ema Dev. Designed.
        </div>
      </div>
    </section>
  );
};
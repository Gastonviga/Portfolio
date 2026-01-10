import React from 'react';
import { Reveal } from './Reveal';
import { Mail, Github, Linkedin, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Contact: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <section id="contact" className="py-24 bg-neutral-50 dark:bg-zinc-950 text-neutral-900 dark:text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          
          <div>
            <Reveal>
              <h3 className="text-sm font-bold text-accent dark:text-slate-accent tracking-widest uppercase mb-3">
                {t('contact.label')}
              </h3>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
                {t('contact.title1')} <br />
                <span className="text-neutral-400 dark:text-neutral-500">{t('contact.title2')}</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8 max-w-sm">
                {t('contact.description')}
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <a 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=gastonvigabriel7@gmail.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 text-xl md:text-2xl font-medium hover:text-accent dark:hover:text-slate-accent transition-colors mb-12"
              >
                <div className="p-2 rounded-full bg-blue-50 dark:bg-slate-accent/10 border border-blue-100 dark:border-slate-accent/20 group-hover:border-accent/40 dark:group-hover:border-slate-accent/40 transition-colors">
                  <Mail size={20} className="text-accent dark:text-slate-accent" />
                </div>
                gastonvigabriel7@gmail.com
                <ArrowUpRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="flex gap-4">
                <a href="https://github.com/Gastonviga" target="_blank" rel="noopener noreferrer" className="p-3 glass rounded-xl hover:border-accent/40 dark:hover:border-slate-accent/40 transition-colors text-neutral-700 dark:text-white">
                  <Github size={22} />
                </a>
                <a href="#" className="p-3 glass rounded-xl hover:border-accent/40 dark:hover:border-slate-accent/40 transition-colors text-neutral-700 dark:text-white">
                  <Linkedin size={22} />
                </a>
              </div>
            </Reveal>
          </div>

          <div className="glass p-8 rounded-2xl spotlight-card">
             <form action="https://formspree.io/f/xqekvyqe" method="POST" className="space-y-6">
               <Reveal>
                 <div className="flex flex-col gap-2">
                   <label htmlFor="name" className="text-sm font-medium text-neutral-600 dark:text-neutral-400">{t('contact.form.name')}</label>
                   <input 
                    type="text" 
                    id="name" 
                    name="name"
                    required
                    className="bg-white/50 dark:bg-zinc-900/80 border border-neutral-200 dark:border-neutral-700/50 rounded-xl p-4 text-neutral-900 dark:text-white focus:outline-none focus:border-accent/60 dark:focus:border-slate-accent/60 transition-colors placeholder:text-neutral-400 dark:placeholder:text-neutral-600"
                    placeholder={t('contact.form.namePlaceholder')}
                   />
                 </div>
               </Reveal>
               <Reveal delay={0.1}>
                 <div className="flex flex-col gap-2">
                   <label htmlFor="email" className="text-sm font-medium text-neutral-600 dark:text-neutral-400">{t('contact.form.email')}</label>
                   <input 
                    type="email" 
                    id="email" 
                    name="email"
                    required
                    className="bg-white/50 dark:bg-zinc-900/80 border border-neutral-200 dark:border-neutral-700/50 rounded-xl p-4 text-neutral-900 dark:text-white focus:outline-none focus:border-accent/60 dark:focus:border-slate-accent/60 transition-colors placeholder:text-neutral-400 dark:placeholder:text-neutral-600"
                    placeholder={t('contact.form.emailPlaceholder')}
                   />
                 </div>
               </Reveal>
               <Reveal delay={0.2}>
                 <div className="flex flex-col gap-2">
                   <label htmlFor="message" className="text-sm font-medium text-neutral-600 dark:text-neutral-400">{t('contact.form.message')}</label>
                   <textarea 
                    id="message" 
                    name="message"
                    rows={4} 
                    required
                    className="bg-white/50 dark:bg-zinc-900/80 border border-neutral-200 dark:border-neutral-700/50 rounded-xl p-4 text-neutral-900 dark:text-white focus:outline-none focus:border-accent/60 dark:focus:border-slate-accent/60 transition-colors resize-none placeholder:text-neutral-400 dark:placeholder:text-neutral-600"
                    placeholder={t('contact.form.messagePlaceholder')}
                   />
                 </div>
               </Reveal>
               <Reveal delay={0.3}>
                 <button 
                  type="submit" 
                  className="w-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-bold py-4 rounded-xl hover:bg-accent dark:hover:bg-slate-accent hover:text-white dark:hover:text-white transition-all duration-300"
                 >
                   {t('contact.form.submit')}
                 </button>
               </Reveal>
             </form>
          </div>
        </div>

        <div className="mt-24 pt-8 border-t border-neutral-200 dark:border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-neutral-500 text-sm">
            &copy; {new Date().getFullYear()} Viga Studio. {t('contact.footer.rights')}
          </p>
          <p className="text-neutral-600 text-sm">
            {t('contact.footer.tagline')}
          </p>
        </div>
      </div>
    </section>
  );
};
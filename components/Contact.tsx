import React from 'react';
import { Reveal } from './Reveal';
import { Mail, Github, Instagram, ArrowUpRight } from 'lucide-react';
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
                <a href="https://www.tiktok.com/@vigastudio1" target="_blank" rel="noopener noreferrer" className="p-3 glass rounded-xl hover:border-accent/40 dark:hover:border-slate-accent/40 transition-colors text-neutral-700 dark:text-white">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </a>
                <a href="https://www.instagram.com/gastonviga" target="_blank" rel="noopener noreferrer" className="p-3 glass rounded-xl hover:border-accent/40 dark:hover:border-slate-accent/40 transition-colors text-neutral-700 dark:text-white">
                  <Instagram size={22} />
                </a>
                <a href="https://viga-suite.vercel.app/odontologia" target="_blank" rel="noopener noreferrer" className="p-3 glass rounded-xl hover:border-accent/40 dark:hover:border-slate-accent/40 transition-colors text-neutral-700 dark:text-white" title="Consultorio Odontológico">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C9.5 2 7.5 3.5 6.5 5.5C5.8 7 5.5 8.5 5.5 10C5.5 11 5.7 12 6 13C6.5 14.5 7 15.5 7.5 17C8 18.5 8 20 8 21.5V22.5C8 23.3 8.7 24 9.5 24H10.5C11.3 24 12 23.3 12 22.5V18C12 17.4 11.5 17 11 17C10.5 17 10 17.4 10 18V22H9.5V21.5C9.5 19.8 9.5 18 8.8 16.2C8.3 14.8 7.8 13.8 7.5 12.5C7.2 11.5 7 10.7 7 10C7 8.8 7.2 7.5 7.8 6.3C8.5 5 9.8 3.5 12 3.5C14.2 3.5 15.5 5 16.2 6.3C16.8 7.5 17 8.8 17 10C17 10.7 16.8 11.5 16.5 12.5C16.2 13.8 15.7 14.8 15.2 16.2C14.5 18 14.5 19.8 14.5 21.5V22H14V18C14 17.4 13.5 17 13 17C12.5 17 12 17.4 12 18V22.5C12 23.3 12.7 24 13.5 24H14.5C15.3 24 16 23.3 16 22.5V21.5C16 20 16 18.5 16.5 17C17 15.5 17.5 14.5 18 13C18.3 12 18.5 11 18.5 10C18.5 8.5 18.2 7 17.5 5.5C16.5 3.5 14.5 2 12 2Z"/>
                  </svg>
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
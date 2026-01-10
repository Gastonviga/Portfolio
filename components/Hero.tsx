import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Reveal } from './Reveal';
import { useLanguage } from '../context/LanguageContext';
import { Logo } from './Logo';

export const Hero: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 pt-32 overflow-hidden">
      {/* Structural Watermark Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] dark:opacity-[0.02] pointer-events-none scale-[4] md:scale-[5] lg:scale-[6] z-0 select-none">
        <Logo variant="icon-only" size="xl" />
      </div>

      {/* Abstract gradient glow background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-radial from-slate-accent/10 via-transparent to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-radial from-accent/5 via-transparent to-transparent rounded-full blur-3xl" />
      </div>

      {/* Geometric shapes */}
      <div className="absolute top-20 right-10 w-32 h-32 border border-slate-accent/20 rotate-45 hidden lg:block" />
      <div className="absolute bottom-32 left-16 w-24 h-24 border border-slate-accent/10 rotate-12 hidden lg:block" />
      <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-slate-accent/40 rounded-full hidden lg:block" />
      <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-accent/60 rounded-full hidden lg:block" />

      <div className="relative max-w-7xl mx-auto w-full z-10">
        <Reveal>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-accent/10 border border-slate-accent/20 mb-6">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-slate-accent text-sm font-medium tracking-wide">{t('hero.badge')}</span>
          </div>
        </Reveal>
        
        <Reveal delay={0.1}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter leading-[0.95] mb-8 text-neutral-900 dark:text-white transition-colors duration-300">
            {t('hero.title1')} <br />
            <span className="bg-gradient-to-r from-slate-accent via-steel-light to-accent bg-clip-text text-transparent">&</span> {t('hero.title2')} <br />
            <span className="text-neutral-400 dark:text-neutral-500 transition-colors duration-300">{t('hero.title3')}</span>
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="max-w-2xl text-lg md:text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed mb-10 transition-colors duration-300">
            {t('hero.description')}
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="flex flex-wrap gap-4">
            <a 
              href="#contact"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-neutral-900 font-semibold rounded-full hover:bg-accent hover:text-white transition-all duration-300 shadow-lg shadow-white/10"
            >
              {t('hero.cta.primary')}
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#design-lab"
              className="group inline-flex items-center gap-3 px-8 py-4 border border-neutral-300 dark:border-slate-accent/40 text-neutral-900 dark:text-white font-medium rounded-full hover:bg-neutral-100 dark:hover:bg-slate-accent/10 hover:border-neutral-400 dark:hover:border-slate-accent transition-all duration-300"
            >
              <Sparkles size={18} className="text-accent dark:text-slate-accent" />
              {t('hero.cta.secondary')}
            </a>
          </div>
        </Reveal>

        {/* Stats row */}
        <Reveal delay={0.4}>
          <div className="mt-16 pt-8 border-t border-neutral-200 dark:border-neutral-800 flex flex-wrap gap-12 transition-colors duration-300">
            <div>
              <p className="text-3xl font-bold text-neutral-900 dark:text-white">50+</p>
              <p className="text-sm text-neutral-600 dark:text-neutral-500">{t('hero.stats.projects')}</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-neutral-900 dark:text-white">5+</p>
              <p className="text-sm text-neutral-600 dark:text-neutral-500">{t('hero.stats.years')}</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-neutral-900 dark:text-white">100%</p>
              <p className="text-sm text-neutral-600 dark:text-neutral-500">{t('hero.stats.clients')}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
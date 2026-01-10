import React from 'react';
import { MessageCircle, Sparkles } from 'lucide-react';
import { Reveal } from '../Reveal';
import { useLanguage } from '../../context/LanguageContext';
import { getWhatsAppUrl } from '../../config/whatsapp';

export const OdontologiaHero: React.FC = () => {
  const { t } = useLanguage();
  
  const handleWhatsAppClick = () => {
    window.open(getWhatsAppUrl('odontologia'), '_blank');
  };
  
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 pt-32 pb-20 overflow-hidden bg-gradient-to-br from-cyan-50 via-blue-50 to-teal-50 dark:from-cyan-950 dark:via-blue-950 dark:to-teal-950">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-radial from-cyan-200/30 via-transparent to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-radial from-teal-200/20 via-transparent to-transparent rounded-full blur-3xl" />
      </div>

      {/* Geometric shapes */}
      <div className="absolute top-20 right-10 w-32 h-32 border border-cyan-300/30 rotate-45 hidden lg:block" />
      <div className="absolute bottom-32 left-16 w-24 h-24 border border-teal-300/20 rotate-12 hidden lg:block" />

      <div className="relative max-w-6xl mx-auto w-full z-10">
        <Reveal>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-100 dark:bg-cyan-900/30 border border-cyan-200 dark:border-cyan-800 mb-6">
            <Sparkles size={16} className="text-cyan-600 dark:text-cyan-400" />
            <span className="text-cyan-700 dark:text-cyan-300 text-sm font-medium tracking-wide">{t('odonto.hero.badge')}</span>
          </div>
        </Reveal>
        
        <Reveal delay={0.1}>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-8 text-neutral-900 dark:text-white">
            {t('odonto.hero.title1')} <br />
            {t('odonto.hero.title2')} <br />
            <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-teal-600 bg-clip-text text-transparent">
              {t('odonto.hero.title3')}
            </span>
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="max-w-2xl text-xl md:text-2xl text-neutral-700 dark:text-neutral-300 leading-relaxed mb-10">
            {t('odonto.hero.description')}
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <button
            onClick={handleWhatsAppClick}
            className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-cyan-600 to-teal-600 text-white font-bold rounded-xl hover:from-cyan-700 hover:to-teal-700 transition-all duration-300 shadow-xl shadow-cyan-500/20 hover:shadow-2xl hover:shadow-cyan-500/30 hover:scale-105"
          >
            <MessageCircle size={24} />
            {t('odonto.hero.cta')}
          </button>
        </Reveal>

        {/* Trust indicators */}
        <Reveal delay={0.4}>
          <div className="mt-16 pt-8 border-t border-cyan-200 dark:border-cyan-800 flex flex-wrap gap-12">
            <div>
              <p className="text-3xl font-bold text-neutral-900 dark:text-white">100%</p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">Responsive</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-neutral-900 dark:text-white">24hs</p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">Setup Time</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-neutral-900 dark:text-white">WhatsApp</p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">Direct Integration</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

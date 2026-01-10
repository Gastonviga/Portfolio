import React from 'react';
import { Reveal } from '../Reveal';
import { MessageCircle } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { getWhatsAppUrl } from '../../config/whatsapp';

export const OdontologiaCTA: React.FC = () => {
  const { t } = useLanguage();
  
  const handleWhatsAppClick = () => {
    window.open(getWhatsAppUrl('odontologia'), '_blank');
  };
  
  return (
    <section className="py-24 bg-white dark:bg-neutral-900 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-8">
            <h3 className="text-sm font-bold text-cyan-600 dark:text-cyan-400 tracking-widest uppercase mb-3">
              {t('odonto.cta.label')}
            </h3>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white mb-6">
              {t('odonto.cta.title')}
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto mb-10">
              {t('odonto.cta.description')}
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex justify-center">
            <button
              onClick={handleWhatsAppClick}
              className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-cyan-600 to-teal-600 text-white font-bold rounded-xl hover:from-cyan-700 hover:to-teal-700 transition-all duration-300 shadow-xl shadow-cyan-500/20 hover:shadow-2xl hover:shadow-cyan-500/30 hover:scale-105"
            >
              <MessageCircle size={24} />
              {t('odonto.cta.button')}
            </button>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="text-center text-sm text-neutral-500 dark:text-neutral-400 mt-8">
            Sin compromiso. Respondemos en menos de 24 horas.
          </p>
        </Reveal>
      </div>
    </section>
  );
};

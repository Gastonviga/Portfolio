import React from 'react';
import { Reveal } from '../Reveal';
import { Calendar } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export const OdontologiaProblem: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-24 bg-white dark:bg-neutral-900 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-8">
            <h3 className="text-sm font-bold text-cyan-600 dark:text-cyan-400 tracking-widest uppercase mb-3">
              {t('odonto.problem.label')}
            </h3>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white mb-6">
              {t('odonto.problem.title')}
            </h2>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative bg-gradient-to-br from-cyan-50 to-teal-50 dark:from-cyan-950/30 dark:to-teal-950/30 rounded-2xl p-8 md:p-12 border border-cyan-100 dark:border-cyan-900">
            <div className="absolute top-6 left-6 w-12 h-12 rounded-full bg-cyan-100 dark:bg-cyan-900 flex items-center justify-center text-cyan-600 dark:text-cyan-400">
              <Calendar size={24} />
            </div>
            
            <div className="pt-8">
              <p className="text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
                {t('odonto.problem.description')}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

import React from 'react';
import { Reveal } from './Reveal';
import { AlertCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Problem: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-24 bg-neutral-50 dark:bg-zinc-950 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-8">
            <h3 className="text-sm font-bold text-neutral-500 dark:text-neutral-400 tracking-widest uppercase mb-3">
              {t('problem.label')}
            </h3>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white mb-6">
              {t('problem.title')}
            </h2>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative glass rounded-2xl p-8 md:p-12">
            <div className="absolute top-6 left-6 w-12 h-12 rounded-full bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center text-neutral-600 dark:text-neutral-400">
              <AlertCircle size={24} />
            </div>
            
            <div className="pt-8">
              <p className="text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
                {t('problem.description')}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

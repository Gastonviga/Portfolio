import React from 'react';
import { Reveal } from '../Reveal';
import { Smile, Zap, Award } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

interface Benefit {
  icon: React.ReactNode;
  titleKey: string;
  descriptionKey: string;
}

const benefits: Benefit[] = [
  {
    icon: <Smile size={32} />,
    titleKey: 'odonto.benefits.benefit1.title',
    descriptionKey: 'odonto.benefits.benefit1.description'
  },
  {
    icon: <Zap size={32} />,
    titleKey: 'odonto.benefits.benefit2.title',
    descriptionKey: 'odonto.benefits.benefit2.description'
  },
  {
    icon: <Award size={32} />,
    titleKey: 'odonto.benefits.benefit3.title',
    descriptionKey: 'odonto.benefits.benefit3.description'
  }
];

export const OdontologiaBenefits: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-24 bg-gradient-to-br from-cyan-50 via-blue-50 to-teal-50 dark:from-cyan-950/20 dark:via-blue-950/20 dark:to-teal-950/20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-16">
            <h3 className="text-sm font-bold text-cyan-600 dark:text-cyan-400 tracking-widest uppercase mb-3">
              {t('odonto.benefits.label')}
            </h3>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white mb-4">
              {t('odonto.benefits.title')}
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <Reveal key={benefit.titleKey} delay={index * 0.1}>
              <div className="relative h-full bg-white dark:bg-neutral-900 rounded-2xl p-8 border border-cyan-100 dark:border-cyan-900">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center text-white mb-6 shadow-lg shadow-cyan-500/30">
                  {benefit.icon}
                </div>

                <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3">
                  {t(benefit.titleKey)}
                </h3>

                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {t(benefit.descriptionKey)}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

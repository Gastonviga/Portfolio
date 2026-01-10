import React from 'react';
import { Reveal } from '../Reveal';
import { Smartphone, MessageSquare, Mail } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

interface Feature {
  icon: React.ReactNode;
  titleKey: string;
  descriptionKey: string;
}

const features: Feature[] = [
  {
    icon: <Smartphone size={28} />,
    titleKey: 'odonto.solution.feature1.title',
    descriptionKey: 'odonto.solution.feature1.description'
  },
  {
    icon: <MessageSquare size={28} />,
    titleKey: 'odonto.solution.feature2.title',
    descriptionKey: 'odonto.solution.feature2.description'
  },
  {
    icon: <Mail size={28} />,
    titleKey: 'odonto.solution.feature3.title',
    descriptionKey: 'odonto.solution.feature3.description'
  }
];

export const OdontologiaSolution: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-24 bg-gradient-to-br from-cyan-50 via-blue-50 to-teal-50 dark:from-cyan-950/20 dark:via-blue-950/20 dark:to-teal-950/20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-16">
            <h3 className="text-sm font-bold text-cyan-600 dark:text-cyan-400 tracking-widest uppercase mb-3">
              {t('odonto.solution.label')}
            </h3>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white mb-4">
              {t('odonto.solution.title')}
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto text-lg">
              {t('odonto.solution.description')}
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <Reveal key={feature.titleKey} delay={index * 0.1}>
              <div className="relative h-full bg-white dark:bg-neutral-900 rounded-2xl p-8 border border-cyan-100 dark:border-cyan-900 hover:border-cyan-300 dark:hover:border-cyan-700 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-100 to-teal-100 dark:from-cyan-900 dark:to-teal-900 border border-cyan-200 dark:border-cyan-800 flex items-center justify-center text-cyan-600 dark:text-cyan-400 mb-6">
                  {feature.icon}
                </div>

                <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3">
                  {t(feature.titleKey)}
                </h3>

                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {t(feature.descriptionKey)}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

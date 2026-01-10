import React from 'react';
import { Reveal } from '../Reveal';
import { ClipboardList, MessageCircle, CheckCircle } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

interface ProcessStep {
  icon: React.ReactNode;
  titleKey: string;
  descriptionKey: string;
  number: string;
}

const processSteps: ProcessStep[] = [
  {
    icon: <ClipboardList size={24} />,
    titleKey: 'odonto.process.step1.title',
    descriptionKey: 'odonto.process.step1.description',
    number: '01'
  },
  {
    icon: <MessageCircle size={24} />,
    titleKey: 'odonto.process.step2.title',
    descriptionKey: 'odonto.process.step2.description',
    number: '02'
  },
  {
    icon: <CheckCircle size={24} />,
    titleKey: 'odonto.process.step3.title',
    descriptionKey: 'odonto.process.step3.description',
    number: '03'
  }
];

export const OdontologiaProcess: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-24 bg-white dark:bg-neutral-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-16">
            <h3 className="text-sm font-bold text-cyan-600 dark:text-cyan-400 tracking-widest uppercase mb-3">
              {t('odonto.process.label')}
            </h3>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white mb-4">
              {t('odonto.process.title')}
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto text-lg">
              {t('odonto.process.description')}
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {processSteps.map((step, index) => (
            <Reveal key={step.titleKey} delay={index * 0.1}>
              <div className="relative h-full bg-gradient-to-br from-cyan-50 to-teal-50 dark:from-cyan-950/30 dark:to-teal-950/30 rounded-2xl p-8 border border-cyan-100 dark:border-cyan-900">
                {/* Number Badge */}
                <div className="absolute top-4 right-4 text-6xl font-black text-cyan-100 dark:text-cyan-900/50 select-none">
                  {step.number}
                </div>
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-white dark:bg-neutral-900 border border-cyan-200 dark:border-cyan-800 flex items-center justify-center text-cyan-600 dark:text-cyan-400 mb-4">
                    {step.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3">
                    {t(step.titleKey)}
                  </h3>

                  {/* Description */}
                  <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {t(step.descriptionKey)}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

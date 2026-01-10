import React from 'react';
import { Reveal } from './Reveal';
import { Search, FileText, Code, Rocket } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface ProcessStep {
  icon: React.ReactNode;
  titleKey: string;
  descriptionKey: string;
  number: string;
}

const processSteps: ProcessStep[] = [
  {
    icon: <Search size={24} />,
    titleKey: 'process.step1.title',
    descriptionKey: 'process.step1.description',
    number: '01'
  },
  {
    icon: <FileText size={24} />,
    titleKey: 'process.step2.title',
    descriptionKey: 'process.step2.description',
    number: '02'
  },
  {
    icon: <Code size={24} />,
    titleKey: 'process.step3.title',
    descriptionKey: 'process.step3.description',
    number: '03'
  },
  {
    icon: <Rocket size={24} />,
    titleKey: 'process.step4.title',
    descriptionKey: 'process.step4.description',
    number: '04'
  }
];

export const Process: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-24 bg-white dark:bg-neutral-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-16">
            <h3 className="text-sm font-bold text-neutral-500 dark:text-neutral-400 tracking-widest uppercase mb-3">
              {t('process.label')}
            </h3>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white mb-4">
              {t('process.title')}
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              {t('process.description')}
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step, index) => (
            <Reveal key={step.titleKey} delay={index * 0.1}>
              <div className="relative glass rounded-2xl p-6 h-full">
                {/* Number Badge */}
                <div className="absolute top-4 right-4 text-6xl font-black text-neutral-100 dark:text-neutral-800 select-none">
                  {step.number}
                </div>
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 flex items-center justify-center text-neutral-700 dark:text-neutral-300 mb-4">
                    {step.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3">
                    {t(step.titleKey)}
                  </h3>

                  {/* Description */}
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
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

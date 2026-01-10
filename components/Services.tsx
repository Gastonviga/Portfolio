import React from 'react';
import { Reveal } from './Reveal';
import { Code2, Palette, Cloud } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface ServicePillarConfig {
  icon: React.ReactNode;
  titleKey: string;
  descriptionKey: string;
  featureKeys: string[];
  accentColor: string;
}

const servicePillarsConfig: ServicePillarConfig[] = [
  {
    icon: <Code2 size={32} />,
    titleKey: "services.pillar1.title",
    descriptionKey: "services.pillar1.description",
    featureKeys: ["services.pillar1.f1", "services.pillar1.f2", "services.pillar1.f3", "services.pillar1.f4"],
    accentColor: "from-blue-500/20 to-transparent"
  },
  {
    icon: <Palette size={32} />,
    titleKey: "services.pillar2.title",
    descriptionKey: "services.pillar2.description",
    featureKeys: ["services.pillar2.f1", "services.pillar2.f2", "services.pillar2.f3", "services.pillar2.f4"],
    accentColor: "from-purple-500/20 to-transparent"
  },
  {
    icon: <Cloud size={32} />,
    titleKey: "services.pillar3.title",
    descriptionKey: "services.pillar3.description",
    featureKeys: ["services.pillar3.f1", "services.pillar3.f2", "services.pillar3.f3", "services.pillar3.f4"],
    accentColor: "from-emerald-500/20 to-transparent"
  }
];

export const Services: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <section id="services" className="py-24 bg-white dark:bg-neutral-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-16">
            <h3 className="text-sm font-bold text-accent dark:text-slate-accent tracking-widest uppercase mb-3">
              {t('services.label')}
            </h3>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white mb-4">
              {t('services.title')}
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              {t('services.description')}
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {servicePillarsConfig.map((pillar, index) => (
            <Reveal key={pillar.titleKey} delay={index * 0.1}>
              <div className="group relative h-full glass rounded-2xl p-8 spotlight-card overflow-hidden">
                {/* Gradient accent top */}
                <div className={`absolute top-0 left-0 right-0 h-32 bg-gradient-to-b ${pillar.accentColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-blue-50 dark:bg-slate-accent/10 border border-blue-100 dark:border-slate-accent/20 flex items-center justify-center text-accent dark:text-slate-accent mb-6 group-hover:border-accent/40 dark:group-hover:border-slate-accent/40 transition-colors">
                    {pillar.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3">
                    {t(pillar.titleKey)}
                  </h3>

                  {/* Description */}
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-6 leading-relaxed">
                    {t(pillar.descriptionKey)}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {pillar.featureKeys.map((featureKey) => (
                      <li key={featureKey} className="flex items-center gap-2 text-sm text-neutral-700 dark:text-neutral-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent dark:bg-slate-accent" />
                        {t(featureKey)}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Bottom CTA */}
        <Reveal delay={0.4}>
          <div className="mt-16 text-center">
            <p className="text-neutral-500 mb-4">{t('services.cta.question')}</p>
            <a 
              href="#contact"
              className="inline-flex items-center gap-2 text-neutral-900 dark:text-white font-medium hover:text-accent dark:hover:text-accent transition-colors"
            >
              {t('services.cta.link')}
              <span className="text-accent dark:text-slate-accent">→</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

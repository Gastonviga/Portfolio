import React, { useState, useEffect } from 'react';
import { Globe, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const LanguageToggle: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const [showTooltip, setShowTooltip] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const wasDismissed = localStorage.getItem('viga-lang-tooltip-dismissed');
    if (wasDismissed) {
      setDismissed(true);
      return;
    }

    const browserLang = navigator.language.slice(0, 2);
    if (browserLang === 'es' && language === 'en') {
      const timer = setTimeout(() => setShowTooltip(true), 3000);
      return () => clearTimeout(timer);
    }
  }, [language]);

  const handleDismiss = () => {
    setShowTooltip(false);
    setDismissed(true);
    localStorage.setItem('viga-lang-tooltip-dismissed', 'true');
  };

  const handleSwitchLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
    setShowTooltip(false);
    setDismissed(true);
    localStorage.setItem('viga-lang-tooltip-dismissed', 'true');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Tooltip */}
      {showTooltip && !dismissed && (
        <div className="glass rounded-xl p-4 max-w-xs animate-fade-in-up shadow-xl">
          <div className="flex items-start justify-between gap-3">
            <p className="text-neutral-900 dark:text-white text-sm">{t('lang.tooltip')}</p>
            <button
              onClick={handleDismiss}
              className="text-neutral-500 dark:text-neutral-400 hover:text-accent dark:hover:text-white transition-colors flex-shrink-0"
            >
              <X size={16} />
            </button>
          </div>
          <button
            onClick={handleSwitchLanguage}
            className="mt-3 w-full px-4 py-2 bg-neutral-100 hover:bg-neutral-200 dark:bg-slate-accent/20 dark:hover:bg-slate-accent/30 border border-neutral-200 dark:border-slate-accent/40 rounded-lg text-neutral-900 dark:text-white text-sm font-medium transition-colors"
          >
            {t('lang.switch')}
          </button>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={handleSwitchLanguage}
        className="group p-3 glass rounded-full hover:border-accent/40 dark:hover:border-slate-accent/40 transition-all duration-300 shadow-lg"
        aria-label="Toggle language"
      >
        <Globe size={20} className="text-neutral-700 dark:text-slate-accent group-hover:text-accent dark:group-hover:text-white transition-colors" />
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-2 py-1 bg-neutral-900 dark:bg-white rounded text-xs text-white dark:text-neutral-900 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          {language === 'en' ? 'ES' : 'EN'}
        </span>
      </button>
    </div>
  );
};

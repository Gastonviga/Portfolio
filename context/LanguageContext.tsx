import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'es';

interface Translations {
  [key: string]: {
    en: string;
    es: string;
  };
}

export const translations: Translations = {
  // Navbar
  'nav.services': { en: 'Services', es: 'Servicios' },
  'nav.designLab': { en: 'Design Lab', es: 'Design Lab' },
  'nav.projects': { en: 'Projects', es: 'Proyectos' },
  'nav.contact': { en: 'Contact', es: 'Contacto' },

  // Hero
  'hero.badge': { en: 'VIGA STUDIO', es: 'VIGA STUDIO' },
  'hero.title1': { en: 'Digital Engineering', es: 'Ingeniería Digital' },
  'hero.title2': { en: '& Immersive', es: '& Experiencias' },
  'hero.title3': { en: 'Experiences.', es: 'Inmersivas.' },
  'hero.description': { 
    en: 'Viga Studio is a software consultancy and design studio led by Gastón Viga. We help businesses and startups build scalable systems and high-impact web presences.', 
    es: 'Viga Studio es una consultora de software y diseño dirigida por Gastón Viga. Ayudamos a negocios y startups a construir sistemas escalables y presencias web de alto impacto.' 
  },
  'hero.cta.primary': { en: 'Start a Project', es: 'Consultar Proyecto' },
  'hero.cta.secondary': { en: 'Explore Design Lab', es: 'Explorar Design Lab' },
  'hero.stats.projects': { en: 'Projects Delivered', es: 'Proyectos Entregados' },
  'hero.stats.years': { en: 'Years of Experience', es: 'Años de Experiencia' },
  'hero.stats.clients': { en: 'Satisfied Clients', es: 'Clientes Satisfechos' },

  // Services
  'services.label': { en: 'Our Services', es: 'Nuestros Servicios' },
  'services.title': { en: 'Integrated Solutions', es: 'Soluciones Integrales' },
  'services.description': { 
    en: 'We combine software engineering, high-end design, and artificial intelligence to create digital products that stand out.', 
    es: 'Combinamos ingeniería de software, diseño de alto nivel e inteligencia artificial para crear productos digitales que destacan.' 
  },
  'services.pillar1.title': { en: 'Custom Software Development', es: 'Desarrollo de Software a Medida' },
  'services.pillar1.description': { en: 'Robust architectures to solve complex business problems.', es: 'Arquitecturas robustas para resolver problemas complejos de negocio.' },
  'services.pillar1.f1': { en: 'SaaS Platforms', es: 'Plataformas SaaS' },
  'services.pillar1.f2': { en: 'ERPs & Dashboards', es: 'ERPs & Dashboards' },
  'services.pillar1.f3': { en: 'APIs & Microservices', es: 'APIs & Microservicios' },
  'services.pillar1.f4': { en: 'Complex Business Logic', es: 'Lógica de Negocio Compleja' },
  'services.pillar2.title': { en: 'High-Impact Web Design', es: 'Diseño Web de Alto Impacto' },
  'services.pillar2.description': { en: 'Digital experiences that captivate and convert.', es: 'Experiencias digitales que cautivan y convierten.' },
  'services.pillar2.f1': { en: 'Premium Animations', es: 'Animaciones Premium' },
  'services.pillar2.f2': { en: 'Scrollytelling', es: 'Scrollytelling' },
  'services.pillar2.f3': { en: 'High-End UI/UX', es: 'UI/UX de Alta Gama' },
  'services.pillar2.f4': { en: 'Responsive Design', es: 'Diseño Responsivo' },
  'services.pillar3.title': { en: 'Infrastructure & AI', es: 'Infraestructura & IA' },
  'services.pillar3.description': { en: 'Scalable solutions powered by artificial intelligence.', es: 'Soluciones escalables potenciadas con inteligencia artificial.' },
  'services.pillar3.f1': { en: 'Automated Deployments', es: 'Deploys Automatizados' },
  'services.pillar3.f2': { en: 'Chatbots & AI Agents', es: 'Chatbots & Agentes IA' },
  'services.pillar3.f3': { en: 'Cloud Scalability', es: 'Escalabilidad Cloud' },
  'services.pillar3.f4': { en: 'Performance Optimization', es: 'Optimización de Rendimiento' },
  'services.cta.question': { en: 'Have a project in mind?', es: '¿Tienes un proyecto en mente?' },
  'services.cta.link': { en: "Let's talk about your idea", es: 'Hablemos sobre tu idea' },

  // Projects
  'projects.label': { en: 'Selected Works', es: 'Trabajos Seleccionados' },
  'projects.title': { en: 'Featured Projects', es: 'Proyectos Destacados' },

  // Design Lab
  'designLab.label': { en: 'Visual Concepts', es: 'Conceptos Visuales' },
  'designLab.title': { en: 'Design Lab', es: 'Design Lab' },
  'designLab.description': { 
    en: 'A collection of landing page concepts exploring different visual styles and interaction patterns.', 
    es: 'Una colección de conceptos de landing pages explorando diferentes estilos visuales y patrones de interacción.' 
  },
  'designLab.viewConcept': { en: 'View Concept', es: 'Ver Concepto' },

  // Contact
  'contact.label': { en: 'Contact', es: 'Contacto' },
  'contact.title1': { en: "Let's work", es: 'Trabajemos' },
  'contact.title2': { en: 'together.', es: 'juntos.' },
  'contact.description': { 
    en: 'Have a project in mind? Tell us your idea and let\'s build something extraordinary.', 
    es: '¿Tienes un proyecto en mente? Cuéntanos tu idea y construyamos algo extraordinario.' 
  },
  'contact.form.name': { en: 'Name', es: 'Nombre' },
  'contact.form.namePlaceholder': { en: 'Your name', es: 'Tu nombre' },
  'contact.form.email': { en: 'Email', es: 'Email' },
  'contact.form.emailPlaceholder': { en: 'your@email.com', es: 'tu@email.com' },
  'contact.form.message': { en: 'Message', es: 'Mensaje' },
  'contact.form.messagePlaceholder': { en: 'Tell us about your project...', es: 'Cuéntanos sobre tu proyecto...' },
  'contact.form.submit': { en: 'Send Message', es: 'Enviar Mensaje' },
  'contact.footer.rights': { en: 'All rights reserved.', es: 'Todos los derechos reservados.' },
  'contact.footer.tagline': { en: 'Designed and developed with precision.', es: 'Diseñado y desarrollado con precisión.' },

  // Language Toggle
  'lang.tooltip': { en: '¿Prefieres ver esto en Español?', es: 'Prefer to see this in English?' },
  'lang.switch': { en: 'Cambiar a Español', es: 'Switch to English' },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const savedLang = localStorage.getItem('viga-lang') as Language;
    if (savedLang) {
      setLanguage(savedLang);
    } else {
      const browserLang = navigator.language.slice(0, 2);
      if (browserLang === 'es') {
        setTimeout(() => setShowTooltip(true), 2000);
      }
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('viga-lang', lang);
  };

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

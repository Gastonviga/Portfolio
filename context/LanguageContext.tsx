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
  'nav.designLab': { en: 'Examples', es: 'Ejemplos' },
  'nav.contact': { en: 'Contact', es: 'Contacto' },

  // Hero
  'hero.badge': { en: 'VIGA STUDIO', es: 'VIGA STUDIO' },
  'hero.title1': { en: 'Institutional Websites', es: 'Sitios Web Institucionales' },
  'hero.title2': { en: '& Contact Systems', es: 'y Sistemas de Contacto' },
  'hero.title3': { en: 'for Law Firms.', es: 'para Estudios Jurídicos.' },
  'hero.description': { 
    en: 'We build professional websites and contact management systems for law firms. Clear, secure, and designed to project institutional authority.', 
    es: 'Construimos sitios web profesionales y sistemas de gestión de contactos para estudios jurídicos. Claros, seguros y diseñados para proyectar autoridad institucional.' 
  },
  'hero.cta.primary': { en: 'Request Consultation', es: 'Solicitar Consulta' },
  'hero.cta.secondary': { en: 'View Examples', es: 'Ver Ejemplos' },
  'hero.stats.projects': { en: 'Delivered Projects', es: 'Proyectos Entregados' },
  'hero.stats.years': { en: 'Years of Experience', es: 'Años de Experiencia' },
  'hero.stats.clients': { en: 'Professional Trust', es: 'Confianza Profesional' },

  // Problem
  'problem.label': { en: 'The Challenge', es: 'El Desafío' },
  'problem.title': { en: 'Why Digital Presence Matters', es: 'Por Qué Importa la Presencia Digital' },
  'problem.description': { 
    en: 'In a competitive legal market, an unclear or outdated digital presence generates distrust. Potential clients evaluate your firm online before making contact. A professional website and efficient contact system are essential to project institutional authority.', 
    es: 'En un mercado legal competitivo, una presencia digital poco clara o desactualizada genera desconfianza. Los clientes potenciales evalúan tu estudio en línea antes de hacer contacto. Un sitio web profesional y un sistema de contacto eficiente son fundamentales para proyectar autoridad institucional.' 
  },

  // Services
  'services.label': { en: 'Our Services', es: 'Nuestros Servicios' },
  'services.title': { en: 'What We Offer', es: 'Qué Ofrecemos' },
  'services.description': { 
    en: 'Two core services designed to strengthen your firm\'s institutional presence and optimize client communication.', 
    es: 'Dos servicios centrales diseñados para fortalecer la presencia institucional de tu estudio y optimizar la comunicación con clientes.' 
  },
  'services.pillar1.title': { en: 'Institutional Website', es: 'Sitio Web Institucional' },
  'services.pillar1.description': { en: 'Professional website that conveys credibility and facilitates client contact.', es: 'Sitio web profesional que transmite credibilidad y facilita el contacto con clientes.' },
  'services.pillar1.f1': { en: 'Practice Areas', es: 'Áreas de Práctica' },
  'services.pillar1.f2': { en: 'Attorney Profiles', es: 'Perfiles Profesionales' },
  'services.pillar1.f3': { en: 'Contact Information', es: 'Información de Contacto' },
  'services.pillar1.f4': { en: 'Secure Hosting', es: 'Hosting Seguro' },
  'services.pillar2.title': { en: 'Contact & Follow-up System', es: 'Sistema de Contacto y Seguimiento' },
  'services.pillar2.description': { en: 'Tools to manage inquiries and maintain organized communication with clients.', es: 'Herramientas para gestionar consultas y mantener comunicación organizada con clientes.' },
  'services.pillar2.f1': { en: 'Contact Forms', es: 'Formularios de Contacto' },
  'services.pillar2.f2': { en: 'Inquiry Tracking', es: 'Seguimiento de Consultas' },
  'services.pillar2.f3': { en: 'Email Notifications', es: 'Notificaciones por Email' },
  'services.pillar2.f4': { en: 'Client Database', es: 'Base de Datos de Clientes' },
  'services.cta.question': { en: 'Want to discuss your project?', es: '¿Querés hablar sobre tu proyecto?' },
  'services.cta.link': { en: 'Request consultation', es: 'Solicitar consulta' },

  // Process
  'process.label': { en: 'How We Work', es: 'Cómo Trabajamos' },
  'process.title': { en: 'Simple Process', es: 'Proceso Simple' },
  'process.description': { 
    en: 'A clear and structured approach to deliver your project on time.', 
    es: 'Un enfoque claro y estructurado para entregar tu proyecto a tiempo.' 
  },
  'process.step1.title': { en: 'Analysis', es: 'Análisis' },
  'process.step1.description': { en: 'We understand your firm\'s needs and objectives.', es: 'Entendemos las necesidades y objetivos de tu estudio.' },
  'process.step2.title': { en: 'Proposal', es: 'Propuesta' },
  'process.step2.description': { en: 'We present a detailed plan with timeline and costs.', es: 'Presentamos un plan detallado con tiempos y costos.' },
  'process.step3.title': { en: 'Development', es: 'Desarrollo' },
  'process.step3.description': { en: 'We build your solution with constant communication.', es: 'Construimos tu solución con comunicación constante.' },
  'process.step4.title': { en: 'Launch', es: 'Publicación' },
  'process.step4.description': { en: 'We publish your project and provide initial support.', es: 'Publicamos tu proyecto y brindamos soporte inicial.' },

  // Projects
  'projects.label': { en: 'Selected Works', es: 'Trabajos Seleccionados' },
  'projects.title': { en: 'Featured Projects', es: 'Proyectos Destacados' },

  // Design Lab
  'designLab.label': { en: 'Visual References', es: 'Referencias Visuales' },
  'designLab.title': { en: 'Design References', es: 'Referencias de Diseño' },
  'designLab.description': { 
    en: 'Visual concepts that demonstrate different approaches for professional websites. These are design references, not completed client projects.', 
    es: 'Conceptos visuales que demuestran diferentes enfoques para sitios web profesionales. Estas son referencias de diseño, no proyectos de clientes finalizados.' 
  },
  'designLab.viewConcept': { en: 'View Example', es: 'Ver Ejemplo' },

  // Contact
  'contact.label': { en: 'Contact', es: 'Contacto' },
  'contact.title1': { en: "Let's discuss", es: 'Hablemos sobre' },
  'contact.title2': { en: 'your project.', es: 'tu proyecto.' },
  'contact.description': { 
    en: 'Tell us about your firm\'s needs and we\'ll get back to you within 24 hours with a tailored proposal.', 
    es: 'Contanos las necesidades de tu estudio y te responderemos en menos de 24 horas con una propuesta a medida.' 
  },
  'contact.form.name': { en: 'Name', es: 'Nombre' },
  'contact.form.namePlaceholder': { en: 'Your name', es: 'Tu nombre' },
  'contact.form.email': { en: 'Email', es: 'Email' },
  'contact.form.emailPlaceholder': { en: 'your@email.com', es: 'tu@email.com' },
  'contact.form.message': { en: 'Message', es: 'Mensaje' },
  'contact.form.messagePlaceholder': { en: 'Describe your firm\'s needs: website, case management system, etc.', es: 'Describí las necesidades de tu estudio: sitio web, sistema de gestión, etc.' },
  'contact.form.submit': { en: 'Send Message', es: 'Enviar Mensaje' },
  'contact.footer.rights': { en: 'All rights reserved.', es: 'Todos los derechos reservados.' },
  'contact.footer.tagline': { en: 'Designed and developed with precision.', es: 'Diseñado y desarrollado con precisión.' },

  // Language Toggle
  'lang.tooltip': { en: '¿Prefieres ver esto en Español?', es: 'Prefer to see this in English?' },
  'lang.switch': { en: 'Cambiar a Español', es: 'Switch to English' },

  // Odontologia Landing - Hero
  'odonto.hero.title1': { en: 'Your Dental Practice', es: 'Tu Consultorio Odontológico' },
  'odonto.hero.title2': { en: 'Deserves a Modern', es: 'Merece una Presencia' },
  'odonto.hero.title3': { en: 'Online Presence', es: 'Digital Moderna' },
  'odonto.hero.description': { 
    en: 'A professional landing page designed to make it easy for your patients to find you and book appointments via WhatsApp.', 
    es: 'Una landing profesional diseñada para que tus pacientes te encuentren fácilmente y reserven turnos por WhatsApp.' 
  },
  'odonto.hero.cta': { en: 'Chat on WhatsApp', es: 'Hablar por WhatsApp' },
  'odonto.hero.badge': { en: 'For Dental Clinics', es: 'Para Consultorios Odontológicos' },

  // Odontologia - Problem
  'odonto.problem.label': { en: 'The Challenge', es: 'El Desafío' },
  'odonto.problem.title': { en: 'Booking Appointments Shouldn\'t Be Complicated', es: 'Reservar un Turno No Debería Ser Complicado' },
  'odonto.problem.description': { 
    en: 'Many dental practices have outdated websites or unclear contact information. Patients want a simple, fast way to reach you. A modern landing page with WhatsApp integration removes friction and improves the patient experience.', 
    es: 'Muchos consultorios tienen sitios web desactualizados o información de contacto poco clara. Los pacientes quieren una forma simple y rápida de comunicarse. Una landing moderna con integración a WhatsApp elimina fricciones y mejora la experiencia del paciente.' 
  },

  // Odontologia - Solution
  'odonto.solution.label': { en: 'The Solution', es: 'La Solución' },
  'odonto.solution.title': { en: 'A Professional Landing Page', es: 'Una Landing Profesional' },
  'odonto.solution.description': { 
    en: 'We create a clean, modern landing page for your practice. Patients can quickly see your services, location, and contact you directly via WhatsApp to book appointments.', 
    es: 'Creamos una landing limpia y moderna para tu consultorio. Los pacientes pueden ver rápidamente tus servicios, ubicación y contactarte directamente por WhatsApp para reservar turnos.' 
  },
  'odonto.solution.feature1.title': { en: 'Responsive Design', es: 'Diseño Responsivo' },
  'odonto.solution.feature1.description': { en: 'Looks perfect on any device', es: 'Se ve perfecto en cualquier dispositivo' },
  'odonto.solution.feature2.title': { en: 'WhatsApp Integration', es: 'Integración con WhatsApp' },
  'odonto.solution.feature2.description': { en: 'Direct booking via WhatsApp', es: 'Reserva directa por WhatsApp' },
  'odonto.solution.feature3.title': { en: 'Contact Form', es: 'Formulario de Contacto' },
  'odonto.solution.feature3.description': { en: 'Easy inquiry submission', es: 'Consultas fáciles de enviar' },

  // Odontologia - Process
  'odonto.process.label': { en: 'How It Works', es: 'Cómo Funciona' },
  'odonto.process.title': { en: 'Simple Booking Process', es: 'Proceso de Reserva Simple' },
  'odonto.process.description': { 
    en: 'Your patients can book appointments in just a few clicks.', 
    es: 'Tus pacientes pueden reservar turnos en pocos clics.' 
  },
  'odonto.process.step1.title': { en: 'Patient Fills Form', es: 'El Paciente Completa el Formulario' },
  'odonto.process.step1.description': { en: 'They enter their name, contact info, and preferred date.', es: 'Ingresa su nombre, contacto y fecha preferida.' },
  'odonto.process.step2.title': { en: 'WhatsApp Opens', es: 'Se Abre WhatsApp' },
  'odonto.process.step2.description': { en: 'A pre-filled message opens in WhatsApp automatically.', es: 'Un mensaje pre-cargado se abre automáticamente en WhatsApp.' },
  'odonto.process.step3.title': { en: 'You Confirm', es: 'Vos Confirmás' },
  'odonto.process.step3.description': { en: 'You receive the request and confirm the appointment manually.', es: 'Recibís la solicitud y confirmás el turno manualmente.' },

  // Odontologia - Benefits
  'odonto.benefits.label': { en: 'Benefits', es: 'Beneficios' },
  'odonto.benefits.title': { en: 'Why This Works', es: 'Por Qué Funciona' },
  'odonto.benefits.benefit1.title': { en: 'Better Patient Experience', es: 'Mejor Experiencia para el Paciente' },
  'odonto.benefits.benefit1.description': { en: 'Fast, clear, and easy to use from any device.', es: 'Rápido, claro y fácil de usar desde cualquier dispositivo.' },
  'odonto.benefits.benefit2.title': { en: 'Less Friction', es: 'Menos Fricción' },
  'odonto.benefits.benefit2.description': { en: 'No phone calls during busy hours. Patients reach you instantly.', es: 'Sin llamadas en horarios ocupados. Los pacientes te contactan al instante.' },
  'odonto.benefits.benefit3.title': { en: 'Modern Image', es: 'Imagen Moderna' },
  'odonto.benefits.benefit3.description': { en: 'A professional online presence that builds trust.', es: 'Una presencia digital profesional que genera confianza.' },

  // Odontologia - CTA Final
  'odonto.cta.label': { en: 'Ready to Get Started?', es: '¿Listo para Empezar?' },
  'odonto.cta.title': { en: 'Let\'s Talk About Your Practice', es: 'Hablemos Sobre Tu Consultorio' },
  'odonto.cta.description': { 
    en: 'Tell us about your practice and we\'ll show you how a modern landing page can help you connect with more patients.', 
    es: 'Contanos sobre tu consultorio y te mostramos cómo una landing moderna puede ayudarte a conectar con más pacientes.' 
  },
  'odonto.cta.button': { en: 'Chat on WhatsApp', es: 'Hablar por WhatsApp' },
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

// Configuración de WhatsApp para CTAs
// Formato: código de país + número sin espacios ni guiones
// Ejemplo: 5491234567890 para Argentina

export const WHATSAPP_CONFIG = {
  // Reemplazar con el número real de WhatsApp de la agencia
  phoneNumber: '541171488045',
  
  // Mensajes predefinidos por vertical
  messages: {
    odontologia: 'Hola! Me interesa una landing profesional para mi consultorio odontológico.',
    juridico: 'Hola! Me interesa una solución digital para mi estudio jurídico.',
    general: 'Hola! Me gustaría conocer más sobre sus servicios.'
  }
};

export const getWhatsAppUrl = (vertical: 'odontologia' | 'juridico' | 'general' = 'general'): string => {
  const message = encodeURIComponent(WHATSAPP_CONFIG.messages[vertical]);
  return `https://wa.me/${WHATSAPP_CONFIG.phoneNumber}?text=${message}`;
};

export const siteConfig = {
  name: 'Vorantheus',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  description:
    'Software profesional para hacer crecer tu negocio: paginas web, apps, sistemas administrativos y automatizaciones con IA.',
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'hola@vorantheus.com',
  privacyEmail: process.env.NEXT_PUBLIC_PRIVACY_EMAIL || 'privacidad@vorantheus.com',
  legalEmail: process.env.NEXT_PUBLIC_LEGAL_EMAIL || 'legal@vorantheus.com',
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP || '5219991234567',
  whatsappDisplay: process.env.NEXT_PUBLIC_WHATSAPP_DISPLAY || '+52 1 999 123 4567',
  location: 'Merida, Yucatan, Mexico',
  social: {
    instagram: 'https://instagram.com/vorantheus',
    facebook: 'https://facebook.com/vorantheus',
  },
}

export function getWhatsAppUrl(message?: string) {
  const text = message ? `?text=${encodeURIComponent(message)}` : ''
  return `https://wa.me/${siteConfig.whatsapp}${text}`
}

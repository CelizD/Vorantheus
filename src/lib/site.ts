function normalizeUrl(raw: string | undefined): string {
  const value = raw?.trim() || 'http://localhost:3000'
  if (value.startsWith('http://') || value.startsWith('https://')) return value
  return `https://${value}`
}

export const siteConfig = {
  name: 'Vorantheus',
  url: normalizeUrl(process.env.NEXT_PUBLIC_SITE_URL),
  description:
    'Software profesional para hacer crecer tu negocio: paginas web, apps, sistemas administrativos y automatizaciones con IA.',
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'hola@vorantheus.com',
  salesEmail: process.env.NEXT_PUBLIC_SALES_EMAIL || 'ventas@vorantheus.com',
  supportEmail: process.env.NEXT_PUBLIC_SUPPORT_EMAIL || 'soporte@vorantheus.com',
  billingEmail: process.env.NEXT_PUBLIC_BILLING_EMAIL || 'facturacion@vorantheus.com',
  legalEmail: process.env.NEXT_PUBLIC_LEGAL_EMAIL || 'legal@vorantheus.com',
  // No existe alias privacidad@ — el contacto de privacidad/ARCO usa legal@
  privacyEmail: process.env.NEXT_PUBLIC_PRIVACY_EMAIL || 'legal@vorantheus.com',
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP || '5219991234567',
  whatsappDisplay: process.env.NEXT_PUBLIC_WHATSAPP_DISPLAY || '+52 1 999 123 4567',
  location: 'Merida, Yucatan, Mexico',
  social: {
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || 'https://instagram.com/vorantheus',
    facebook: process.env.NEXT_PUBLIC_FACEBOOK_URL || 'https://facebook.com/vorantheus',
  },
}

export function getWhatsAppUrl(message?: string) {
  const text = message ? `?text=${encodeURIComponent(message)}` : ''
  return `https://wa.me/${siteConfig.whatsapp}${text}`
}

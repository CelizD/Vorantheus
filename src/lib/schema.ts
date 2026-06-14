import { siteConfig } from '@/lib/site'
import { faqs } from '@/data/faqs'

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Vorantheus',
    description:
      'Software profesional para hacer crecer tu negocio: páginas web, apps móviles, sistemas administrativos y automatizaciones con IA.',
    url: siteConfig.url,
    email: siteConfig.email,
    telephone: `+${siteConfig.whatsapp}`,
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'sales',
        email: siteConfig.salesEmail,
        areaServed: 'MX',
        availableLanguage: 'Spanish',
      },
      {
        '@type': 'ContactPoint',
        contactType: 'customer support',
        email: siteConfig.supportEmail,
        areaServed: 'MX',
        availableLanguage: 'Spanish',
      },
      {
        '@type': 'ContactPoint',
        contactType: 'billing support',
        email: siteConfig.billingEmail,
        areaServed: 'MX',
        availableLanguage: 'Spanish',
      },
    ],
    priceRange: '$$',
    currenciesAccepted: 'MXN, USD',
    paymentAccepted: 'Transferencia bancaria, Tarjeta de crédito/débito, PayPal',
    openingHours: 'Mo-Fr 09:00-18:00',
    areaServed: ['México', 'Latinoamérica', 'Estados Unidos'],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Mérida',
      addressRegion: 'Yucatán',
      addressCountry: 'MX',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 20.9674,
      longitude: -89.5926,
    },
    sameAs: [siteConfig.social.instagram, siteConfig.social.facebook],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Servicios de desarrollo de software',
      itemListElement: [
        'Páginas web profesionales',
        'Tiendas en línea',
        'Sistemas administrativos',
        'Aplicaciones móviles iOS y Android',
        'Automatización con Inteligencia Artificial',
        'Landing pages',
        'Mantenimiento mensual',
      ].map((name) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name } })),
    },
  }
}

export function faqPageSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

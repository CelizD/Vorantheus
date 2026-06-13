export interface Package {
  id: string
  name: string
  price: string
  priceNote: string
  description: string
  features: string[]
  highlighted: boolean
  badge?: string
  ctaText: string
}

export const packages: Package[] = [
  {
    id: 'basico',
    name: 'Básico',
    price: '$8,500',
    priceNote: 'MXN / proyecto',
    description: 'Perfecto para emprendedores y pequeños negocios que necesitan presencia digital profesional sin complicaciones.',
    features: [
      'Página web de hasta 5 secciones',
      'Diseño responsivo mobile-first',
      'Formulario de contacto',
      'Integración con redes sociales',
      'Optimización SEO básica',
      'Certificado SSL incluido',
      '1 mes de soporte gratuito',
      'Capacitación básica de uso',
    ],
    highlighted: false,
    ctaText: 'Solicitar cotización',
  },
  {
    id: 'profesional',
    name: 'Profesional',
    price: '$22,000',
    priceNote: 'MXN / proyecto',
    description: 'La solución completa para negocios en crecimiento que quieren destacar y convertir visitas en clientes.',
    features: [
      'Todo lo del plan Básico',
      'Hasta 10 páginas o secciones',
      'Panel de administración (CMS)',
      'Blog o sección de noticias',
      'Integración con Google Analytics 4',
      'SEO avanzado y sitemap XML',
      'Velocidad optimizada (Core Web Vitals)',
      'Formularios avanzados con validación',
      '3 meses de soporte gratuito',
      'Dominio .com por 1 año',
    ],
    highlighted: true,
    badge: 'Más popular',
    ctaText: 'Empezar ahora',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: '$45,000',
    priceNote: 'MXN / proyecto',
    description: 'Para empresas que necesitan soluciones robustas, escalables y completamente personalizadas.',
    features: [
      'Todo lo del plan Profesional',
      'Aplicación web compleja o e-commerce',
      'Sistema de autenticación y usuarios',
      'Integraciones con APIs de terceros',
      'Panel administrativo completo',
      'Base de datos optimizada',
      'Despliegue en nube (AWS/Vercel)',
      'CI/CD y control de versiones',
      '6 meses de soporte gratuito',
      'Capacitación completa del equipo',
    ],
    highlighted: false,
    badge: 'Para grandes negocios',
    ctaText: 'Contactar ventas',
  },
  {
    id: 'mantenimiento-mensual',
    name: 'Mantenimiento',
    price: '$2,500',
    priceNote: 'MXN / mes',
    description: 'Mantén tu software seguro, actualizado y funcionando perfectamente con nuestro servicio mensual.',
    features: [
      'Actualizaciones de seguridad',
      'Monitoreo de uptime 24/7',
      'Backups automáticos diarios',
      'Hasta 5 horas de cambios incluidas',
      'Soporte prioritario vía WhatsApp',
      'Optimización de rendimiento',
      'Reporte mensual de métricas',
      'Renovación de dominio y hosting',
    ],
    highlighted: false,
    ctaText: 'Contratar servicio',
  },
]

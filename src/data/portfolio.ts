export interface PortfolioItem {
  id: string
  title: string
  description: string
  client: string
  category: string
  technologies: string[]
  imageColor: string
  year: string
  impact: string
  url?: string
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: 'elastron',
    title: 'ELASTRON',
    description:
      'Sistema ERP completo para empresa distribuidora de materiales de construcción. Incluye módulos de inventario, ventas, compras, facturación electrónica CFDI y reportes en tiempo real.',
    client: 'ELASTRON',
    category: 'Sistema administrativo',
    technologies: ['Next.js', 'TypeScript', 'Supabase', 'PostgreSQL', 'React Query'],
    imageColor: 'from-electric via-voBlue to-navy',
    year: '2024',
    impact: 'Centralización de inventario, ventas, compras y facturación en una operación interna más controlada.',
  },
  {
    id: 'vybra',
    title: 'VYBRA',
    description:
      'Plataforma de streaming y venta de música digital para artistas independientes. Monetización directa, análisis de audiencia y distribución a plataformas globales.',
    client: 'VYBRA',
    category: 'Aplicación web',
    technologies: ['Next.js', 'Stripe', 'Supabase', 'React Native', 'AWS S3'],
    imageColor: 'from-voPurple via-electric to-voBlue',
    year: '2024',
    impact: 'Monetización directa y herramientas de análisis para artistas independientes.',
  },
  {
    id: 'vinclea',
    title: 'Vinclea',
    description:
      'Marketplace de servicios profesionales freelance para el mercado latinoamericano. Conexión entre clientes y profesionales con sistema de pagos, escrow y valoraciones.',
    client: 'Vinclea',
    category: 'Marketplace',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe Connect', 'Redis'],
    imageColor: 'from-voBlue via-voPurple to-electric',
    year: '2023',
    impact: 'Flujo completo para conectar clientes, profesionales, pagos protegidos y reputación.',
  },
  {
    id: 'florapp',
    title: 'FlorApp',
    description:
      'Aplicación móvil para florerías y tiendas de regalos. Catálogo online, pedidos a domicilio, sistema de suscripciones y gestión de entregas con tracking en tiempo real.',
    client: 'FlorApp',
    category: 'App móvil',
    technologies: ['React Native', 'Expo', 'Node.js', 'MongoDB', 'Google Maps API'],
    imageColor: 'from-electric to-voPurple',
    year: '2023',
    impact: 'Pedidos móviles, suscripciones y seguimiento de entregas para una operación más clara.',
  },
  {
    id: 'linetflores',
    title: 'LinetFlores',
    description:
      'Landing page y tienda en línea para diseñadora de modas. Catálogo de colecciones, sistema de compras personalizado y sesión de administración de inventario.',
    client: 'LinetFlores',
    category: 'E-commerce',
    technologies: ['Next.js', 'Tailwind CSS', 'Stripe', 'Supabase', 'Framer Motion'],
    imageColor: 'from-navy via-voBlue to-electric',
    year: '2024',
    impact: 'Catálogo, compras e inventario administrable para vender colecciones en línea.',
  },
]

export const categories = [
  'Todos',
  'Sistema administrativo',
  'Aplicación web',
  'Marketplace',
  'App móvil',
  'E-commerce',
]

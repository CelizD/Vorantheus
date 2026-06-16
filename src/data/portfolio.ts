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
  problem?: string
  solution?: string
  results?: string[]
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
    problem: 'ELASTRON manejaba su inventario, ventas y facturación con Excel y sistemas desconectados. Los errores de datos eran frecuentes y no tenían visibilidad en tiempo real de su operación.',
    solution: 'Sistema ERP completo con módulos de inventario, ventas, compras, facturación electrónica CFDI, CRM y reportes en tiempo real. Acceso multi-usuario con roles por área.',
    results: [
      'Centralización de toda la operación en un solo sistema',
      'Eliminación de errores por doble captura en Excel',
      'Facturas CFDI emitidas directamente desde el sistema',
      'Reportes de ventas e inventario disponibles en tiempo real',
    ],
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
    problem: 'Los artistas independientes no tenían una plataforma propia para monetizar su música y dependían de plataformas que se quedan con la mayoría de los ingresos.',
    solution: 'Plataforma de streaming y venta directa de música con perfiles de artista, análisis de audiencia, pagos directos vía Stripe y distribución a plataformas globales.',
    results: [
      'Monetización directa sin intermediarios',
      'Dashboard de analítica para que artistas entiendan su audiencia',
      'Distribución a Spotify, Apple Music y otras plataformas',
      'Sistema de suscripciones y compra de álbumes',
    ],
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
    problem: 'Los freelancers latinoamericanos no tenían un marketplace local que les garantizara el pago y los protegiera de clientes que no pagaban.',
    solution: 'Marketplace con sistema de escrow, pagos protegidos vía Stripe Connect, valoraciones, mensajería y proceso de contratación estructurado.',
    results: [
      'Flujo completo de contratación con pagos protegidos',
      'Sistema de reputación para profesionales',
      'Escrow que garantiza el pago antes de iniciar el trabajo',
      'Panel de gestión para freelancers y clientes',
    ],
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
    problem: 'Las florerías no tenían una forma digital de recibir pedidos, gestionar entregas y mantener clientes recurrentes más allá del WhatsApp manual.',
    solution: 'App móvil para iOS y Android con catálogo, pedidos a domicilio, suscripciones periódicas y tracking de entregas en tiempo real.',
    results: [
      'Pedidos digitales sin depender de WhatsApp manual',
      'Sistema de suscripciones para clientes recurrentes',
      'Tracking de entregas en tiempo real para el cliente',
      'Panel de gestión para florerías',
    ],
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
    problem: 'La diseñadora vendía por Instagram sin tienda propia, con procesos manuales de cobro y sin control de su inventario de colecciones.',
    solution: 'Landing page y tienda en línea con catálogo de colecciones por temporada, carrito de compras, pagos con Stripe y panel de administración de inventario.',
    results: [
      'Tienda propia sin depender de Instagram para vender',
      'Cobros automáticos con Stripe',
      'Catálogo de colecciones administrable sin código',
      'Inventario controlado con alertas de stock',
    ],
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

export interface Service {
  id: string
  icon: string
  title: string
  description: string
  features: string[]
  idealFor: string
  color: string
}

export const services: Service[] = [
  {
    id: 'paginas-web',
    icon: 'Globe',
    title: 'Páginas web profesionales',
    description:
      'Sitios web modernos, rápidos y optimizados para posicionamiento en buscadores (SEO). Diseñados a medida para representar tu marca con la mejor imagen posible.',
    features: [
      'Diseño personalizado y responsivo',
      'Optimización SEO desde la base',
      'Alta velocidad de carga (Core Web Vitals)',
      'Integración con Google Analytics',
      'Formularios de contacto y mapas',
      'Panel de administración (CMS opcional)',
      'Certificado SSL incluido',
    ],
    idealFor: 'Empresas, despachos, restaurantes, clínicas, consultores y cualquier negocio que quiera presencia digital profesional.',
    color: 'from-electric to-voBlue',
  },
  {
    id: 'landing-pages',
    icon: 'Layout',
    title: 'Landing pages',
    description:
      'Páginas de aterrizaje de alta conversión para campañas publicitarias, lanzamiento de productos o captación de leads. Diseñadas con estrategia de ventas.',
    features: [
      'Estructura persuasiva orientada a conversión',
      'A/B testing opcional',
      'Integración con píxeles de Facebook/Google',
      'Formularios de captura de leads',
      'Conexión con CRMs y email marketing',
      'Velocidad extrema (menos de 2s)',
      'Tracking de eventos y conversiones',
    ],
    idealFor: 'Emprendedores, marketers y empresas que invierten en publicidad digital y necesitan maximizar su ROI.',
    color: 'from-voBlue to-voPurple',
  },
  {
    id: 'tiendas-en-linea',
    icon: 'ShoppingCart',
    title: 'Tiendas en línea',
    description:
      'E-commerce completo con catálogo de productos, carrito de compras, pasarela de pagos y panel de administración. Vende las 24 horas del día.',
    features: [
      'Catálogo ilimitado de productos',
      'Carrito y checkout optimizado',
      'Integración con Stripe, PayPal, MercadoPago',
      'Gestión de inventario',
      'Panel de pedidos y clientes',
      'Notificaciones automáticas por email',
      'Facturas y recibos digitales',
    ],
    idealFor: 'Negocios físicos que quieren vender en línea, marcas de ropa, tiendas de productos artesanales, suplementos y más.',
    color: 'from-electric to-voPurple',
  },
  {
    id: 'sistemas-administrativos',
    icon: 'Database',
    title: 'Sistemas administrativos',
    description:
      'Software a medida para gestionar tu negocio: facturación, inventario, empleados, clientes, reportes y mucho más. Tu empresa en un solo lugar.',
    features: [
      'Gestión de clientes (CRM)',
      'Control de inventario y almacén',
      'Facturación electrónica (CFDI)',
      'Reportes y dashboards en tiempo real',
      'Multi-usuario con roles y permisos',
      'Módulo de nómina y empleados',
      'Integración con APIs externas',
    ],
    idealFor: 'Empresas medianas, distribuidoras, talleres, clínicas y cualquier negocio con procesos internos complejos.',
    color: 'from-voPurple to-electric',
  },
  {
    id: 'aplicaciones-moviles',
    icon: 'Smartphone',
    title: 'Aplicaciones móviles',
    description:
      'Apps nativas o híbridas para iOS y Android. Desde apps sencillas hasta plataformas completas con funcionalidades avanzadas.',
    features: [
      'Desarrollo iOS y Android (React Native)',
      'Publicación en App Store y Google Play',
      'Notificaciones push',
      'Modo offline',
      'Integración con APIs REST',
      'Autenticación biométrica',
      'Actualizaciones over-the-air (OTA)',
    ],
    idealFor: 'Startups, empresas de logística, plataformas de servicios, aplicaciones de fidelización y cualquier negocio que necesite una app.',
    color: 'from-electric to-voBlue',
  },
  {
    id: 'automatizacion-ia',
    icon: 'Bot',
    title: 'Automatización con IA',
    description:
      'Chatbots inteligentes, automatización de procesos repetitivos, análisis de datos con inteligencia artificial y más. El futuro de tu empresa, hoy.',
    features: [
      'Chatbots con GPT-4 para atención al cliente',
      'Automatización de emails y seguimientos',
      'Análisis y clasificación de datos',
      'Integración con WhatsApp Business API',
      'Workflows automáticos (Make, Zapier)',
      'Agentes de IA personalizados',
      'Dashboard de analítica predictiva',
    ],
    idealFor: 'Empresas que quieren reducir costos operativos, automatizar soporte al cliente y tomar decisiones basadas en datos.',
    color: 'from-voPurple to-voBlue',
  },
  {
    id: 'mantenimiento',
    icon: 'Wrench',
    title: 'Mantenimiento mensual',
    description:
      'Servicio continuo de soporte, actualizaciones de seguridad, monitoreo de rendimiento y mejoras incrementales para mantener tu software al día.',
    features: [
      'Actualizaciones de seguridad mensuales',
      'Monitoreo de uptime 24/7',
      'Backups automáticos diarios',
      'Soporte prioritario por WhatsApp',
      'Optimización continua de rendimiento',
      'Hasta 5 horas de cambios incluidas',
      'Reporte mensual de métricas',
    ],
    idealFor: 'Negocios que ya tienen su software desarrollado y necesitan garantizar su funcionamiento, seguridad y evolución constante.',
    color: 'from-voBlue to-electric',
  },
]

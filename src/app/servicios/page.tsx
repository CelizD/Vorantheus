import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Services from '@/components/Services'
import Footer from '@/components/Footer'
import {
  Globe,
  Layout,
  ShoppingCart,
  Database,
  Smartphone,
  Bot,
  Wrench,
  ArrowRight,
} from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Servicios | Vorantheus',
  description:
    'Descubre todos los servicios de desarrollo de software que ofrece Vorantheus: páginas web, landing pages, e-commerce, sistemas administrativos, apps móviles, automatización con IA y mantenimiento.',
}

const serviceDetails = [
  {
    id: 'paginas-web',
    icon: Globe,
    title: 'Páginas web profesionales',
    fullDescription: `Una página web profesional es mucho más que una tarjeta de presentación digital. Es tu principal herramienta de ventas, la primera impresión que tienen tus clientes potenciales y una plataforma que trabaja para tu negocio las 24 horas del día.

En Vorantheus diseñamos y desarrollamos sitios web únicos, rápidos y optimizados desde la base para posicionamiento en buscadores (SEO). No usamos plantillas: cada proyecto parte de cero para representar tu marca con la mejor imagen posible.

Nuestros sitios web cumplen con los estándares más exigentes de rendimiento web (Core Web Vitals de Google), lo que significa mejor posicionamiento orgánico y mejor experiencia para tus usuarios.`,
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    deliverables: [
      'Diseño personalizado aprobado por ti',
      'Sitio web completamente responsive',
      'Optimización SEO técnica',
      'Integración con Google Analytics 4',
      'Panel de administración (opcional)',
      'Formularios y mapas integrados',
      'Certificado SSL configurado',
      'Documentación de uso',
    ],
    color: 'from-electric to-voBlue',
    gradient: 'from-[#0B84F3]/10 to-[#2563EB]/10',
  },
  {
    id: 'landing-pages',
    icon: Layout,
    title: 'Landing pages de alta conversión',
    fullDescription: `Una landing page bien diseñada puede transformar por completo el rendimiento de tus campañas publicitarias. Es el destino perfecto para tus anuncios de Facebook, Instagram, Google o TikTok.

Diseñamos cada landing page con estrategia de ventas: estructura persuasiva, llamadas a la acción claras, formularios optimizados para captar leads y velocidad extrema (menos de 2 segundos de carga).

También integramos píxeles de seguimiento, herramientas de A/B testing y conexiones con CRMs para que cada visita cuente y puedas medir el retorno de tu inversión publicitaria con precisión.`,
    technologies: ['Next.js', 'React', 'Framer Motion', 'Facebook Pixel', 'Google Tag Manager'],
    deliverables: [
      'Estructura persuasiva orientada a conversión',
      'Velocidad extrema (<2s)',
      'Integración con píxeles de Facebook/Google',
      'Formularios de captura de leads',
      'Conexión con email marketing',
      'Tracking de eventos y conversiones',
      'Reportes de rendimiento',
      'A/B testing (opcional)',
    ],
    color: 'from-voBlue to-voPurple',
    gradient: 'from-[#2563EB]/10 to-[#7C3AED]/10',
  },
  {
    id: 'tiendas-en-linea',
    icon: ShoppingCart,
    title: 'Tiendas en línea (e-commerce)',
    fullDescription: `Vende tus productos las 24 horas del día, los 7 días de la semana. Construimos tiendas en línea completas con todo lo que necesitas para procesar pagos, gestionar inventario y administrar tus pedidos.

Integramos las pasarelas de pago más populares: Stripe, PayPal, MercadoPago y otras según tu mercado. Tu tienda estará lista para vender desde el primer día con checkout optimizado para reducir el abandono de carrito.

Incluimos panel de administración completo para que tú mismo puedas gestionar productos, precios, stock e inventario sin necesitar conocimientos técnicos.`,
    technologies: ['Next.js', 'Stripe', 'PayPal API', 'MercadoPago', 'Supabase', 'PostgreSQL'],
    deliverables: [
      'Catálogo ilimitado de productos',
      'Carrito y checkout optimizado',
      'Integración con pasarelas de pago',
      'Gestión de inventario',
      'Panel de pedidos y clientes',
      'Notificaciones automáticas por email',
      'Facturas y recibos digitales',
      'Dashboard de ventas y analytics',
    ],
    color: 'from-electric to-voPurple',
    gradient: 'from-[#0B84F3]/10 to-[#7C3AED]/10',
  },
  {
    id: 'sistemas-administrativos',
    icon: Database,
    title: 'Sistemas administrativos a medida',
    fullDescription: `¿Usas hojas de cálculo, documentos en papel o software genérico que no se adapta a tus procesos? Un sistema administrativo a medida puede ahorrarte horas de trabajo cada semana y eliminar errores humanos.

Construimos ERPs, CRMs, sistemas de facturación, control de inventario, gestión de empleados y cualquier software interno que tu negocio necesite. Todo personalizado exactamente para cómo funciona tu empresa.

Nuestros sistemas son multi-usuario con roles y permisos, accesibles desde cualquier dispositivo y escalan contigo conforme tu negocio crece.`,
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Supabase', 'React Query', 'Prisma'],
    deliverables: [
      'Módulos personalizados según tus procesos',
      'Sistema multi-usuario con roles',
      'Dashboard y reportes en tiempo real',
      'Facturación electrónica CFDI',
      'Control de inventario y almacén',
      'Módulo de clientes (CRM)',
      'Integración con APIs externas',
      'Capacitación completa del equipo',
    ],
    color: 'from-voPurple to-electric',
    gradient: 'from-[#7C3AED]/10 to-[#0B84F3]/10',
  },
  {
    id: 'aplicaciones-moviles',
    icon: Smartphone,
    title: 'Aplicaciones móviles iOS y Android',
    fullDescription: `Llega a tus clientes directamente en sus smartphones. Desarrollamos aplicaciones móviles nativas e híbridas para iOS y Android usando React Native, lo que permite publicar en ambas plataformas con un solo código base.

Desde apps de fidelización de clientes hasta plataformas complejas de marketplace o logística, cubrimos el ciclo completo: diseño, desarrollo, pruebas y publicación en App Store y Google Play.

Incluimos funcionalidades avanzadas como notificaciones push, modo offline, autenticación biométrica y actualizaciones over-the-air sin pasar por revisión de tiendas.`,
    technologies: ['React Native', 'Expo', 'TypeScript', 'Firebase', 'REST APIs', 'Redux'],
    deliverables: [
      'App para iOS y Android',
      'Publicación en App Store y Google Play',
      'Notificaciones push configuradas',
      'Modo offline funcional',
      'Autenticación biométrica',
      'Panel web de administración',
      'Analytics de uso integrado',
      'Documentación técnica completa',
    ],
    color: 'from-electric to-voBlue',
    gradient: 'from-[#0B84F3]/10 to-[#2563EB]/10',
  },
  {
    id: 'automatizacion-ia',
    icon: Bot,
    title: 'Automatización con Inteligencia Artificial',
    fullDescription: `La inteligencia artificial ya no es el futuro: es una ventaja competitiva que tus competidores ya pueden estar usando. En Vorantheus integramos IA en tu negocio de forma práctica y con resultados medibles.

Construimos chatbots inteligentes con GPT-4 que atienden clientes 24/7, automatizan flujos de trabajo repetitivos, analizan y clasifican datos y generan reportes automáticos. Conectamos WhatsApp Business API para que tu chatbot opere directamente en el canal favorito de tus clientes.

También integramos herramientas de automatización como Make (Integromat) y Zapier para conectar todas las aplicaciones que usas sin necesidad de código manual.`,
    technologies: ['OpenAI GPT-4', 'Langchain', 'WhatsApp Business API', 'Make', 'Zapier', 'Python'],
    deliverables: [
      'Chatbot con IA personalizado',
      'Integración con WhatsApp Business',
      'Flujos de automatización configurados',
      'Panel de analítica y métricas',
      'Integración con tus sistemas actuales',
      'Capacitación de uso',
      'Monitoreo y ajuste continuo',
      'Dashboard de conversaciones',
    ],
    color: 'from-voPurple to-voBlue',
    gradient: 'from-[#7C3AED]/10 to-[#2563EB]/10',
  },
  {
    id: 'mantenimiento',
    icon: Wrench,
    title: 'Mantenimiento mensual',
    fullDescription: `Tu software necesita atención continua para mantenerse seguro, rápido y actualizado. Nuestro plan de mantenimiento mensual es la garantía de que tu inversión en tecnología seguirá funcionando perfectamente.

Realizamos actualizaciones de seguridad mensuales, monitoreamos el uptime las 24 horas, hacemos backups automáticos diarios y optimizamos el rendimiento de forma continua. También incluimos hasta 5 horas de cambios mensuales para pequeñas mejoras.

Con nuestro servicio de mantenimiento tienes acceso a soporte prioritario vía WhatsApp y un reporte mensual detallado de métricas y estado del sistema.`,
    technologies: ['Vercel', 'AWS', 'GitHub', 'Datadog', 'Sentry', 'Cloudflare'],
    deliverables: [
      'Actualizaciones de seguridad mensuales',
      'Monitoreo de uptime 24/7',
      'Backups automáticos diarios',
      'Hasta 5 horas de cambios incluidas',
      'Soporte prioritario WhatsApp',
      'Optimización de rendimiento',
      'Reporte mensual de métricas',
      'Renovación de dominio/hosting gestionada',
    ],
    color: 'from-voBlue to-electric',
    gradient: 'from-[#2563EB]/10 to-[#0B84F3]/10',
  },
]

export default function ServiciosPage() {
  return (
    <main className="min-h-screen bg-carbon">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-electric/5 rounded-full blur-3xl" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-electric/30 bg-electric/10 text-electric text-sm font-medium mb-6">
            Lo que hacemos
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6">
            Nuestros <span className="gradient-text">servicios</span>
          </h1>
          <p className="max-w-2xl mx-auto text-voGray text-lg leading-relaxed mb-8">
            Cubrimos todo el espectro del desarrollo de software profesional.
            Desde una landing page hasta un sistema empresarial complejo.
          </p>
          <Link
            href="/cotizar"
            className="inline-flex items-center gap-2 px-8 py-4 bg-electric hover:bg-voBlue text-white font-bold rounded-2xl shadow-electric hover:shadow-electric-lg transition-all duration-300 hover:scale-105"
          >
            Cotizar mi proyecto
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Services overview */}
      <Services />

      {/* Detailed service pages */}
      <section className="py-24 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
              Detalle de cada <span className="gradient-text">servicio</span>
            </h2>
            <p className="text-voGray max-w-2xl mx-auto">
              Conoce en profundidad qué incluye cada uno de nuestros servicios.
            </p>
          </div>

          <div className="flex flex-col gap-20">
            {serviceDetails.map((service, index) => {
              const Icon = service.icon
              const isEven = index % 2 === 0
              return (
                <div
                  key={service.id}
                  id={service.id}
                  className={`flex flex-col lg:flex-row gap-12 items-start ${isEven ? '' : 'lg:flex-row-reverse'}`}
                >
                  {/* Content */}
                  <div className="flex-1">
                    <div className={`flex items-center gap-3 mb-4`}>
                      <div
                        className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-electric`}
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-black text-white">{service.title}</h3>
                    </div>
                    <div className="text-voGray text-sm leading-relaxed whitespace-pre-line mb-6">
                      {service.fullDescription}
                    </div>

                    {/* Technologies */}
                    <div className="mb-6">
                      <p className="text-white text-sm font-semibold mb-3">Tecnologías utilizadas:</p>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1.5 rounded-lg bg-electric/10 border border-electric/20 text-electric text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Link
                      href="/cotizar"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-electric hover:bg-voBlue text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-electric"
                    >
                      Cotizar este servicio
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>

                  {/* Deliverables */}
                  <div className="flex-1 max-w-md">
                    <div className={`rounded-2xl p-6 bg-gradient-to-br ${service.gradient} border border-white/10`}>
                      <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-electric flex items-center justify-center text-xs">✓</span>
                        Qué incluye
                      </h4>
                      <ul className="flex flex-col gap-3">
                        {service.deliverables.map((item) => (
                          <li key={item} className="flex items-start gap-2.5 text-sm">
                            <span className="text-electric mt-0.5 shrink-0">→</span>
                            <span className="text-white/80">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

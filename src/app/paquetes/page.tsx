import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Pricing from '@/components/Pricing'
import Footer from '@/components/Footer'
import { Check, X, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { serviceQuoteTypes } from '@/lib/quote-schema'

export const metadata: Metadata = {
  title: 'Paquetes y Precios | Vorantheus',
  description:
    'Conoce los paquetes y precios de Vorantheus para desarrollo web, apps y sistemas. Planes flexibles para todo tipo de negocios. Cotización gratuita.',
  alternates: { canonical: '/paquetes' },
  openGraph: {
    title: 'Paquetes y Precios | Vorantheus',
    description: 'Planes claros para paginas web, apps, sistemas y mantenimiento mensual.',
    url: '/paquetes',
  },
}

const comparisonFeatures = [
  { feature: 'Diseño personalizado', basico: true, profesional: true, enterprise: true },
  { feature: 'Diseño responsivo mobile-first', basico: true, profesional: true, enterprise: true },
  { feature: 'Optimización SEO', basico: 'Básica', profesional: 'Avanzada', enterprise: 'Avanzada' },
  { feature: 'Páginas / secciones', basico: 'Hasta 5', profesional: 'Hasta 10', enterprise: 'Ilimitadas' },
  { feature: 'Panel de administración (CMS)', basico: false, profesional: true, enterprise: true },
  { feature: 'Blog o sección de noticias', basico: false, profesional: true, enterprise: true },
  { feature: 'Google Analytics 4', basico: false, profesional: true, enterprise: true },
  { feature: 'Velocidad Core Web Vitals', basico: false, profesional: true, enterprise: true },
  { feature: 'Sistema de autenticación de usuarios', basico: false, profesional: false, enterprise: true },
  { feature: 'Aplicación web / e-commerce', basico: false, profesional: false, enterprise: true },
  { feature: 'Integraciones con APIs de terceros', basico: false, profesional: false, enterprise: true },
  { feature: 'Despliegue en nube (AWS/Vercel)', basico: false, profesional: false, enterprise: true },
  { feature: 'CI/CD y control de versiones', basico: false, profesional: false, enterprise: true },
  { feature: 'Dominio .com (1 año)', basico: false, profesional: true, enterprise: true },
  { feature: 'Período de soporte gratuito', basico: '1 mes', profesional: '3 meses', enterprise: '6 meses' },
  { feature: 'Capacitación del equipo', basico: 'Básica', profesional: 'Estándar', enterprise: 'Completa' },
]

const paymentTerms = [
  {
    title: 'Pago en 3 etapas',
    description: 'Distribuye el costo en hitos del proyecto.',
    steps: [
      { label: '50% al firmar contrato', description: 'Para iniciar el proyecto' },
      { label: '25% al aprobar diseño', description: 'Al entregar mockups aprobados' },
      { label: '25% al entregar', description: 'Al terminar y publicar el proyecto' },
    ],
  },
]

const monthlyPlans = [
  {
    name: 'Básico',
    price: '$1,500 MXN/mes',
    features: ['Hosting gestionado', 'SSL renovado', 'Backups semanales', 'Soporte estándar'],
  },
  {
    name: 'Estándar',
    price: '$2,500 MXN/mes',
    features: [
      'Todo lo del Básico',
      'Backups diarios',
      'Monitoreo uptime 24/7',
      'Hasta 5h de cambios',
      'Soporte prioritario WhatsApp',
    ],
    highlighted: true,
  },
  {
    name: 'Premium',
    price: '$4,500 MXN/mes',
    features: [
      'Todo lo del Estándar',
      'Hasta 10h de cambios',
      'Reporte mensual de métricas',
      'Optimización SEO continua',
      'Reunión mensual de revisión',
    ],
  },
]

const maintenanceQuoteType = encodeURIComponent(serviceQuoteTypes.mantenimiento)

function FeatureValue({ value }: { value: string | boolean }) {
  if (value === true) {
    return <Check className="w-5 h-5 text-electric mx-auto" />
  }
  if (value === false) {
    return <X className="w-5 h-5 text-white/20 mx-auto" />
  }
  return <span className="text-voGray text-sm">{value}</span>
}

export default function PaquetesPage() {
  return (
    <main className="min-h-screen bg-carbon">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-navy relative overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-electric/30 bg-electric/10 text-electric text-sm font-medium mb-6">
            Precios transparentes
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6">
            Paquetes y <span className="gradient-text">precios</span>
          </h1>
          <p className="max-w-2xl mx-auto text-voGray text-lg leading-relaxed mb-8">
            Sin costos ocultos, sin sorpresas. Elige el paquete que se adapte a tu presupuesto
            y necesidades, o cuéntanos tu proyecto para una cotización personalizada.
          </p>
        </div>
      </section>

      {/* Pricing cards */}
      <Pricing />

      {/* Comparison table */}
      <section className="py-24 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
              Comparativa de <span className="gradient-text">planes</span>
            </h2>
            <p className="text-voGray max-w-2xl mx-auto">
              Compara en detalle qué incluye cada plan para tomar la mejor decisión.
            </p>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px]">
              <thead>
                <tr>
                  <th className="text-left py-4 pr-4 text-voGray text-sm font-medium w-2/5">
                    Característica
                  </th>
                  <th className="text-center py-4 px-4 text-white font-bold">Básico</th>
                  <th className="text-center py-4 px-4 text-electric font-bold">Profesional</th>
                  <th className="text-center py-4 px-4 text-white font-bold">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((row, index) => (
                  <tr
                    key={row.feature}
                    className={`border-t border-white/5 ${index % 2 === 0 ? 'bg-white/[0.02]' : ''}`}
                  >
                    <td className="py-3.5 pr-4 text-voGray text-sm">{row.feature}</td>
                    <td className="py-3.5 px-4 text-center">
                      <FeatureValue value={row.basico} />
                    </td>
                    <td className="py-3.5 px-4 text-center bg-electric/5">
                      <FeatureValue value={row.profesional} />
                    </td>
                    <td className="py-3.5 px-4 text-center">
                      <FeatureValue value={row.enterprise} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Monthly maintenance plans */}
      <section className="py-24 bg-carbon">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
              Planes de <span className="gradient-text">mantenimiento mensual</span>
            </h2>
            <p className="text-voGray max-w-2xl mx-auto">
              Mantén tu software seguro, actualizado y funcionando perfectamente con nuestros planes mensuales.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {monthlyPlans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl p-6 border ${
                  plan.highlighted
                    ? 'border-electric bg-electric/10 shadow-electric'
                    : 'border-white/10 glass-card'
                }`}
              >
                <div className={`text-sm font-bold mb-1 ${plan.highlighted ? 'text-electric' : 'text-voGray'}`}>
                  {plan.name}
                </div>
                <div className="text-2xl font-black text-white mb-4">{plan.price}</div>
                <ul className="flex flex-col gap-2">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-voGray">
                      <Check className="w-4 h-4 text-electric shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/cotizar?tipo=${maintenanceQuoteType}&origen=mantenimiento:${encodeURIComponent(plan.name.toLowerCase())}`}
                  className={`mt-6 flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 ${
                    plan.highlighted
                      ? 'bg-electric hover:bg-voBlue text-white shadow-electric'
                      : 'border border-electric/50 text-electric hover:bg-electric/10'
                  }`}
                >
                  Contratar
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment terms */}
      <section className="py-24 bg-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
              Condiciones de <span className="gradient-text">pago</span>
            </h2>
          </div>

          <div className="glass-card rounded-2xl p-8 border border-white/10">
            <h3 className="text-xl font-bold text-white mb-6">Esquema de pagos por etapas</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {paymentTerms[0].steps.map((step, index) => (
                <div key={step.label} className="flex flex-col items-center text-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-electric flex items-center justify-center text-white font-black text-lg">
                    {index + 1}
                  </div>
                  <div>
                    <p className="text-electric font-bold text-sm">{step.label}</p>
                    <p className="text-voGray text-xs mt-1">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="text-voGray text-sm text-center">
                Para proyectos Enterprise, podemos acordar un plan de pagos personalizado.
                Aceptamos transferencia bancaria, tarjeta de crédito/débito y PayPal.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/cotizar"
              className="inline-flex items-center gap-2 px-8 py-4 bg-electric hover:bg-voBlue text-white font-bold rounded-2xl shadow-electric hover:shadow-electric-lg transition-all duration-300 hover:scale-105"
            >
              Solicitar cotización gratuita
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

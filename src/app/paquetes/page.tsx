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
    return <Check className="w-5 h-5 text-[#0071E3] mx-auto" />
  }
  if (value === false) {
    return <X className="w-5 h-5 text-black/20 mx-auto" />
  }
  return <span className="text-muted text-sm">{value}</span>
}

export default function PaquetesPage() {
  return (
    <main className="bg-white">
      <Navbar />

      {/* Hero */}
      <section className="relative section-dark overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 60% at 30% 40%, rgba(0,113,227,0.12) 0%, transparent 65%)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-36 pb-24 text-center">
          <span className="tag">Precios transparentes</span>
          <h1 className="mt-8 text-5xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.05]" style={{ letterSpacing: '-0.02em' }}>
            Paquetes y <span className="gradient-text">precios</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-white/55 leading-relaxed">
            Sin costos ocultos, sin sorpresas. Elige el paquete que se adapte a tu presupuesto
            y necesidades, o cuéntanos tu proyecto para una cotización personalizada.
          </p>
        </div>
      </section>

      {/* Pricing cards */}
      <Pricing />

      {/* Comparison table */}
      <section className="py-24 section-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-ink mb-4">
              Comparativa de <span className="gradient-text">planes</span>
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              Compara en detalle qué incluye cada plan para tomar la mejor decisión.
            </p>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px]">
              <thead>
                <tr>
                  <th className="text-left py-4 pr-4 text-muted text-sm font-medium w-2/5">
                    Característica
                  </th>
                  <th className="text-center py-4 px-4 text-ink font-bold">Básico</th>
                  <th className="text-center py-4 px-4 text-[#0071E3] font-bold">Profesional</th>
                  <th className="text-center py-4 px-4 text-ink font-bold">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((row, index) => (
                  <tr
                    key={row.feature}
                    className={`border-t border-black/[0.06] ${index % 2 === 0 ? 'bg-smoke' : ''}`}
                  >
                    <td className="py-3.5 pr-4 text-muted text-sm">{row.feature}</td>
                    <td className="py-3.5 px-4 text-center">
                      <FeatureValue value={row.basico} />
                    </td>
                    <td className="py-3.5 px-4 text-center bg-[#0071E3]/5">
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
      <section className="py-24 section-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-ink mb-4">
              Planes de <span className="gradient-text">mantenimiento mensual</span>
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              Mantén tu software seguro, actualizado y funcionando perfectamente con nuestros planes mensuales.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {monthlyPlans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl p-6 ${
                  plan.highlighted
                    ? 'bg-[#000000] text-white'
                    : 'bg-white border border-black/[0.07] shadow-card'
                }`}
              >
                <div className="text-sm font-bold mb-1 text-[#0071E3]">
                  {plan.name}
                </div>
                <div className={`text-2xl font-black mb-4 ${plan.highlighted ? 'text-white' : 'text-ink'}`}>{plan.price}</div>
                <ul className="flex flex-col gap-2">
                  {plan.features.map((f) => (
                    <li key={f} className={`flex items-center gap-2 text-sm ${plan.highlighted ? 'text-white/60' : 'text-muted'}`}>
                      <Check className="w-4 h-4 text-[#0071E3] shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/cotizar?tipo=${maintenanceQuoteType}&origen=mantenimiento:${encodeURIComponent(plan.name.toLowerCase())}`}
                  className={`mt-6 flex items-center justify-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-200 ${
                    plan.highlighted
                      ? 'bg-[#0071E3] hover:bg-[#0077ED] text-white'
                      : 'border border-ink/20 text-ink hover:bg-ink/5'
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
      <section className="py-24 section-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-ink mb-4">
              Condiciones de <span className="gradient-text">pago</span>
            </h2>
          </div>

          <div className="bg-white border border-black/[0.04] shadow-card rounded-3xl p-8">
            <h3 className="text-xl font-bold text-ink mb-6">Esquema de pagos por etapas</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {paymentTerms[0].steps.map((step, index) => (
                <div key={step.label} className="flex flex-col items-center text-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#0071E3] flex items-center justify-center text-white font-black text-lg">
                    {index + 1}
                  </div>
                  <div>
                    <p className="text-[#0071E3] font-bold text-sm">{step.label}</p>
                    <p className="text-muted text-xs mt-1">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-6 border-t border-black/[0.08]">
              <p className="text-muted text-sm text-center">
                Para proyectos Enterprise, podemos acordar un plan de pagos personalizado.
                Aceptamos transferencia bancaria, tarjeta de crédito/débito y PayPal.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/cotizar"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0071E3] hover:bg-[#0077ED] text-white font-semibold rounded-full transition-all duration-200"
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

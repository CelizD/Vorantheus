import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import QuoteForm from '@/components/QuoteForm'
import Footer from '@/components/Footer'
import { CheckCircle, Clock, MessageCircle, Shield } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Cotizar Proyecto | Vorantheus',
  description:
    'Solicita una cotización gratuita para tu proyecto de software. Respondemos en menos de 24 horas con una propuesta personalizada.',
  alternates: { canonical: '/cotizar' },
  openGraph: {
    title: 'Cotizar Proyecto | Vorantheus',
    description: 'Cuentanos tu idea y recibe una propuesta personalizada en menos de 24 horas.',
    url: '/cotizar',
  },
}

const benefits = [
  {
    icon: Clock,
    title: 'Respuesta en 24 horas',
    description: 'Te contactamos en menos de un día hábil con una propuesta detallada.',
  },
  {
    icon: MessageCircle,
    title: 'Consulta gratuita',
    description: 'La primera reunión y cotización no tienen ningún costo ni compromiso.',
  },
  {
    icon: CheckCircle,
    title: 'Propuesta personalizada',
    description: 'Analizamos tu proyecto y creamos una propuesta adaptada a tus necesidades.',
  },
  {
    icon: Shield,
    title: 'Sin letra chica',
    description: 'Precios transparentes, alcance claro y contratos protegidos para ambas partes.',
  },
]

type CotizarPageProps = {
  searchParams?: Promise<Record<string, string | string[] | undefined>>
}

function getSearchParam(
  params: Record<string, string | string[] | undefined> | undefined,
  key: string,
) {
  const value = params?.[key]
  const rawValue = Array.isArray(value) ? value[0] : value

  if (!rawValue) return undefined

  try {
    return decodeURIComponent(rawValue)
  } catch {
    return rawValue
  }
}

export default async function CotizarPage({ searchParams }: CotizarPageProps) {
  const params = await searchParams
  const initialTipoProyecto = getSearchParam(params, 'tipo')
  const initialPresupuesto = getSearchParam(params, 'presupuesto')
  const initialOrigen = getSearchParam(params, 'origen') || 'cotizar'

  return (
    <main className="bg-white">
      <Navbar />

      {/* Hero */}
      <section className="relative section-dark overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 60% at 30% 40%, rgba(0,113,227,0.12) 0%, transparent 65%)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-36 pb-24 text-center">
          <span className="tag">Gratis y sin compromiso</span>
          <h1 className="mt-8 text-5xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.05]" style={{ letterSpacing: '-0.02em' }}>
            Cotiza tu <span className="gradient-text">proyecto</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-white/55 leading-relaxed">
            Cuéntanos tu idea y te enviaremos una propuesta completa con alcance,
            cronograma y precio. Sin costo, sin letra chica.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 section-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {benefits.map((benefit) => {
              const Icon = benefit.icon
              return (
                <div
                  key={benefit.title}
                  className="bg-white border border-black/[0.04] shadow-card rounded-2xl p-5 flex flex-col gap-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#0071E3]/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[#0071E3]" />
                  </div>
                  <div>
                    <p className="text-ink font-semibold text-sm mb-1">{benefit.title}</p>
                    <p className="text-muted text-xs leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Form */}
      <QuoteForm
        initialTipoProyecto={initialTipoProyecto}
        initialPresupuesto={initialPresupuesto}
        initialOrigen={initialOrigen}
      />

      <Footer />
    </main>
  )
}

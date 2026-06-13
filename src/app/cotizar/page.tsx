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
    <main className="min-h-screen bg-carbon">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-8 bg-navy relative overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-electric/30 bg-electric/10 text-electric text-sm font-medium mb-6">
            Gratis y sin compromiso
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6">
            Cotiza tu <span className="gradient-text">proyecto</span>
          </h1>
          <p className="max-w-2xl mx-auto text-voGray text-lg leading-relaxed">
            Cuéntanos tu idea y te enviaremos una propuesta completa con alcance,
            cronograma y precio. Sin costo, sin letra chica.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {benefits.map((benefit) => {
              const Icon = benefit.icon
              return (
                <div
                  key={benefit.title}
                  className="glass-card rounded-2xl p-5 border border-white/[0.08] flex flex-col gap-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-electric/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-electric" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm mb-1">{benefit.title}</p>
                    <p className="text-voGray text-xs leading-relaxed">{benefit.description}</p>
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

import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Contact from '@/components/Contact'
import WhyUs from '@/components/WhyUs'
import { ArrowRight, Target, Eye, Heart } from 'lucide-react'
import AnimatedCounter from '@/components/AnimatedCounter'

export const metadata: Metadata = {
  title: 'Nosotros | Vorantheus',
  description:
    'Conoce a Vorantheus: un equipo apasionado por construir software profesional que hace crecer negocios reales en México. Nuestra historia, misión y valores.',
  alternates: { canonical: '/nosotros' },
  openGraph: {
    title: 'Nosotros | Vorantheus',
    description:
      'Construimos software profesional que hace crecer negocios reales. Conoce nuestra historia, misión y valores.',
    url: '/nosotros',
  },
}

const stats = [
  { value: '50+', label: 'Proyectos completados' },
  { value: '3+', label: 'Años de experiencia' },
  { value: '98%', label: 'Clientes satisfechos' },
  { value: '24/7', label: 'Soporte disponible' },
]

const values = [
  {
    icon: Target,
    title: 'Misión',
    text: 'Hacer accesible el software profesional para negocios de todos los tamaños, entregando tecnología que genera resultados reales y medibles.',
  },
  {
    icon: Eye,
    title: 'Visión',
    text: 'Ser el aliado tecnológico de referencia en México, reconocido por la calidad, la cercanía y el impacto que generamos en cada negocio.',
  },
  {
    icon: Heart,
    title: 'Valores',
    text: 'Honestidad, calidad sin atajos y compromiso real con cada cliente. Tratamos cada proyecto como si fuera nuestro propio negocio.',
  },
]

export default function NosotrosPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative section-dark overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse 60% 60% at 30% 40%, rgba(0,113,227,0.12) 0%, transparent 65%)',
            }}
          />
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-36 pb-24">
            <div className="max-w-3xl">
              <span className="tag">Nosotros</span>
              <h1
                className="mt-8 text-5xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.05]"
                style={{ letterSpacing: '-0.02em' }}
              >
                Software con <span className="gradient-text">propósito.</span>
              </h1>
              <p className="mt-6 text-xl text-white/55 leading-relaxed max-w-2xl">
                Somos Vorantheus, un equipo apasionado por la tecnología y obsesionado con los resultados. Construimos páginas web, apps y sistemas que hacen crecer negocios reales en México.
              </p>
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="section-light">
          <div className="max-w-3xl mx-auto px-6 lg:px-8 py-24">
            <p className="text-xs font-medium uppercase tracking-widest text-[#0071E3] mb-4">
              Nuestra historia
            </p>
            <h2
              className="text-4xl sm:text-5xl font-black text-ink tracking-tight leading-tight mb-8"
              style={{ letterSpacing: '-0.02em' }}
            >
              Nacimos para resolver problemas reales.
            </h2>
            <div className="flex flex-col gap-5 text-lg text-muted leading-relaxed">
              <p>
                Vorantheus nació de una idea simple: demasiados negocios excelentes se quedan atrás por no tener la tecnología adecuada. Plantillas genéricas, sistemas que no se adaptan, y agencias que desaparecen después de cobrar.
              </p>
              <p>
                Decidimos hacer las cosas diferente. Cada proyecto parte de cero, pensado para cómo funciona tu negocio de verdad. Usamos las mismas tecnologías que las grandes empresas tecnológicas, pero con la cercanía y el trato directo de un equipo que realmente se involucra.
              </p>
              <p>
                Hoy ayudamos a empresas, emprendedores y profesionales a vender más, organizarse mejor y dar el salto digital que merecen, con software que se ve increíble y, sobre todo, funciona.
              </p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="section-white border-y border-black/[0.06]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <AnimatedCounter
                    value={stat.value}
                    className="text-4xl sm:text-5xl font-black text-ink tracking-tight"
                  />
                  <p className="mt-2 text-sm text-muted">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission / Vision / Values */}
        <section className="section-light">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {values.map((v) => {
                const Icon = v.icon
                return (
                  <div
                    key={v.title}
                    className="bg-white rounded-3xl p-8 shadow-card border border-black/[0.04]"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-[#0071E3]/10 flex items-center justify-center mb-5">
                      <Icon className="w-6 h-6 text-[#0071E3]" />
                    </div>
                    <h3 className="text-xl font-bold text-ink mb-3">{v.title}</h3>
                    <p className="text-sm text-muted leading-relaxed">{v.text}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Why us */}
        <WhyUs />

        {/* CTA to quote */}
        <section className="section-dark">
          <div className="max-w-3xl mx-auto px-6 lg:px-8 py-24 text-center">
            <h2
              className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-tight"
              style={{ letterSpacing: '-0.02em' }}
            >
              ¿Listo para trabajar juntos?
            </h2>
            <p className="mt-5 text-lg text-white/55 leading-relaxed">
              Cuéntanos qué tienes en mente. La cotización es gratis y sin compromiso.
            </p>
            <Link
              href="/cotizar"
              className="mt-10 inline-flex items-center gap-2 px-8 py-4 bg-[#0071E3] hover:bg-[#0077ED] text-white font-semibold text-base rounded-full transition-all duration-200"
            >
              Cotizar mi proyecto
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </>
  )
}

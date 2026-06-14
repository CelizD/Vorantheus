import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Portfolio from '@/components/Portfolio'
import Footer from '@/components/Footer'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Portafolio | Vorantheus',
  description:
    'Conoce los proyectos de software que hemos desarrollado: ELASTRON, VYBRA, Vinclea, FlorApp, LinetFlores y más. Sistemas, apps, e-commerce y automatización.',
  alternates: { canonical: '/portafolio' },
  openGraph: {
    title: 'Portafolio | Vorantheus',
    description: 'Casos de software, sistemas, apps y e-commerce desarrollados por Vorantheus.',
    url: '/portafolio',
  },
}

export default function PortafolioPage() {
  return (
    <main className="bg-white">
      <Navbar />

      {/* Hero */}
      <section className="relative section-dark overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 60% at 30% 40%, rgba(0,113,227,0.12) 0%, transparent 65%)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-36 pb-24 text-center">
          <span className="tag">Trabajo real, resultados reales</span>
          <h1 className="mt-8 text-5xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.05]" style={{ letterSpacing: '-0.02em' }}>
            Nuestro <span className="gradient-text">portafolio</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-white/55 leading-relaxed">
            Proyectos desarrollados con tecnología moderna, atención al detalle y
            orientados a resultados de negocio reales. Cada proyecto tiene su historia.
          </p>
          <Link
            href="/cotizar"
            className="mt-10 inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0071E3] hover:bg-[#0077ED] text-white font-semibold rounded-full transition-[background-color,border-color,color,transform] duration-200"
          >
            Quiero mi proyecto
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Portfolio grid with filters */}
      <Portfolio />

      {/* CTA section */}
      <section className="py-24 section-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/[0.03] border border-white/[0.08] rounded-3xl p-12">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
              ¿Listo para ser el{' '}
              <span className="gradient-text">próximo caso de éxito?</span>
            </h2>
            <p className="text-white/55 text-lg leading-relaxed mb-8 max-w-xl mx-auto">
              Cada uno de nuestros proyectos comenzó con una conversación. Cuéntanos tu idea
              y juntos la convertiremos en realidad.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/cotizar"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0071E3] hover:bg-[#0077ED] text-white font-semibold rounded-full transition-[background-color,border-color,color,transform] duration-200"
              >
                Cotizar mi proyecto
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white hover:bg-white/5 font-semibold transition-all duration-200"
              >
                Hablar con el equipo
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

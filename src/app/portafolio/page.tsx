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
}

export default function PortafolioPage() {
  return (
    <main className="min-h-screen bg-carbon">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-voPurple/5 rounded-full blur-3xl" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-electric/30 bg-electric/10 text-electric text-sm font-medium mb-6">
            Trabajo real, resultados reales
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6">
            Nuestro <span className="gradient-text">portafolio</span>
          </h1>
          <p className="max-w-2xl mx-auto text-voGray text-lg leading-relaxed mb-8">
            Proyectos desarrollados con tecnología moderna, atención al detalle y
            orientados a resultados de negocio reales. Cada proyecto tiene su historia.
          </p>
          <Link
            href="/cotizar"
            className="inline-flex items-center gap-2 px-8 py-4 bg-electric hover:bg-voBlue text-white font-bold rounded-2xl shadow-electric hover:shadow-electric-lg transition-all duration-300 hover:scale-105"
          >
            Quiero mi proyecto
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Portfolio grid with filters */}
      <Portfolio />

      {/* CTA section */}
      <section className="py-24 bg-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass-card rounded-3xl p-12 border border-electric/20 shadow-electric-lg">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
              ¿Listo para ser el{' '}
              <span className="gradient-text">próximo caso de éxito?</span>
            </h2>
            <p className="text-voGray text-lg leading-relaxed mb-8 max-w-xl mx-auto">
              Cada uno de nuestros proyectos comenzó con una conversación. Cuéntanos tu idea
              y juntos la convertiremos en realidad.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/cotizar"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-electric hover:bg-voBlue text-white font-bold rounded-2xl shadow-electric hover:shadow-electric-lg transition-all duration-300 hover:scale-105"
              >
                Cotizar mi proyecto
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-electric/50 hover:border-electric text-white font-bold rounded-2xl hover:bg-electric/10 transition-all duration-300"
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

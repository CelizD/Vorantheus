import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Contacto | Vorantheus',
  description:
    'Contáctanos por WhatsApp, correo electrónico o redes sociales. Respondemos en menos de 24 horas. Primera consulta gratuita.',
  alternates: { canonical: '/contacto' },
  openGraph: {
    title: 'Contacto | Vorantheus',
    description: 'Hablemos de tu proyecto de software. Primera consulta gratuita.',
    url: '/contacto',
  },
}

export default function ContactoPage() {
  return (
    <main className="min-h-screen bg-carbon">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-electric/5 rounded-full blur-3xl" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-electric/30 bg-electric/10 text-electric text-sm font-medium mb-6">
            Estamos aquí para ayudarte
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6">
            Hablemos de tu{' '}
            <span className="gradient-text">proyecto</span>
          </h1>
          <p className="max-w-2xl mx-auto text-voGray text-lg leading-relaxed mb-8">
            La primera consulta es completamente gratuita. Respondemos en menos de 24 horas
            por el canal que prefieras.
          </p>
          <Link
            href="/cotizar"
            className="inline-flex items-center gap-2 px-8 py-4 bg-electric hover:bg-voBlue text-white font-bold rounded-2xl shadow-electric hover:shadow-electric-lg transition-all duration-300 hover:scale-105"
          >
            Solicitar cotización gratis
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Contact />

      {/* FAQ link */}
      <section className="py-16 bg-carbon">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-voGray mb-4">¿Tienes dudas antes de contactarnos?</p>
          <Link
            href="/#faq"
            className="inline-flex items-center gap-2 text-electric hover:text-white font-medium transition-colors"
          >
            Ver preguntas frecuentes
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}

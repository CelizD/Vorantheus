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
    <main className="bg-white">
      <Navbar />

      {/* Hero */}
      <section className="relative section-dark overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 60% at 30% 40%, rgba(0,113,227,0.12) 0%, transparent 65%)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-36 pb-24 text-center">
          <span className="tag">Estamos aquí para ayudarte</span>
          <h1 className="mt-8 text-5xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.05]" style={{ letterSpacing: '-0.02em' }}>
            Hablemos de tu{' '}
            <span className="gradient-text">proyecto</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-white/55 leading-relaxed">
            La primera consulta es completamente gratuita. Respondemos en menos de 24 horas
            por el canal que prefieras.
          </p>
          <Link
            href="/cotizar"
            className="mt-10 inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0071E3] hover:bg-[#0077ED] text-white font-semibold rounded-full transition-all duration-200"
          >
            Solicitar cotización gratis
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Contact />

      {/* FAQ link */}
      <section className="py-16 section-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-muted mb-4">¿Tienes dudas antes de contactarnos?</p>
          <Link
            href="/#faq"
            className="inline-flex items-center gap-2 text-[#0071E3] hover:text-ink font-medium transition-colors"
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

'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import CalendlyButton from '@/components/CalendlyButton'

const stats = [
  { value: '50+', label: 'Proyectos completados' },
  { value: '98%', label: 'Clientes satisfechos' },
  { value: '24h', label: 'Tiempo de respuesta' },
  { value: '3+', label: 'Años de experiencia' },
]

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen overflow-hidden"
      style={{ background: '#000' }}
    >
      {/* Static subtle glow — no animation */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 55% 65% at 15% 55%, rgba(0,113,227,0.09) 0%, transparent 70%)',
        }}
      />

      {/* Content — left-aligned, editorial */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 pt-40 pb-28">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="tag">Software, IA y sistemas para negocios modernos</span>
        </motion.div>

        {/* Headline — large editorial */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-10 text-[clamp(3rem,8vw,6.5rem)] font-black text-white leading-[1.02] max-w-4xl"
          style={{ letterSpacing: '-0.03em' }}
        >
          Software profesional
          <br />
          para hacer crecer
          <br />
          tu negocio.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.22 }}
          className="mt-8 text-lg sm:text-xl text-white/45 leading-relaxed max-w-xl"
        >
          Páginas web, apps móviles, sistemas administrativos y automatizaciones
          con IA. Tecnología a medida para empresas que quieren vender más y operar mejor.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.32 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 items-start"
        >
          <Link
            href="/cotizar"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-[#0071E3] hover:bg-[#0077ED] text-white font-semibold text-base rounded-full transition-all duration-200"
          >
            Cotizar proyecto
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
          <CalendlyButton />
          <Link
            href="/#servicios"
            className="inline-flex items-center gap-1.5 text-base text-white/45 hover:text-white/80 transition-colors duration-200 font-medium py-4"
          >
            Ver servicios
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.48 }}
          className="mt-20 pt-8 border-t border-white/[0.08] flex flex-wrap gap-x-12 gap-y-6"
        >
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col gap-1">
              <span className="text-3xl font-black text-white">{s.value}</span>
              <span className="text-xs text-white/35 leading-snug">{s.label}</span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}

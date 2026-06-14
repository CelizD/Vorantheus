'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import AnimatedBackground from '@/components/AnimatedBackground'
import CalendlyButton from '@/components/CalendlyButton'

const metrics = [
  { value: '50+', label: 'Proyectos' },
  { value: '98%', label: 'Satisfacción' },
  { value: '24h', label: 'Respuesta' },
  { value: '3+', label: 'Años exp.' },
]

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen overflow-hidden"
      style={{ background: '#000' }}
    >
      <AnimatedBackground />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 pt-36 pb-24">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="tag">Software, IA y sistemas para negocios modernos</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-8 text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-[1.04]"
            style={{ letterSpacing: '-0.03em' }}
          >
            Software profesional
            <br />
            para hacer crecer{' '}
            <span className="gradient-text">tu negocio.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-7 text-lg sm:text-xl text-white/50 leading-relaxed max-w-2xl"
          >
            Páginas web, apps móviles, sistemas administrativos y automatizaciones
            con IA. Tecnología a medida para empresas que quieren vender más y
            operar mejor.
          </motion.p>

          {/* CTA row */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 items-center justify-center"
          >
            <Link
              href="/cotizar"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-[#0071E3] hover:bg-[#0077ED] text-white font-semibold text-base rounded-full transition-all duration-200 glow-blue"
            >
              Cotizar proyecto
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <CalendlyButton />
            <Link
              href="/#servicios"
              className="inline-flex items-center gap-1.5 text-base text-white/50 hover:text-white/80 transition-colors duration-200 font-medium py-4"
            >
              Ver servicios
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* Floating metric cards */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-16 flex flex-wrap items-center justify-center gap-4"
          >
            {metrics.map((m) => (
              <div
                key={m.label}
                className="glass rounded-2xl px-6 py-4 flex flex-col items-center min-w-[90px]"
              >
                <span className="text-2xl font-black text-white">{m.value}</span>
                <span className="text-xs text-white/40 mt-0.5">{m.label}</span>
              </div>
            ))}
          </motion.div>

        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: 'linear-gradient(to top, #000 0%, transparent 100%)',
        }}
      />
    </section>
  )
}

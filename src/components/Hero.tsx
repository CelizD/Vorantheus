'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import CalendlyButton from '@/components/CalendlyButton'
import HeroOrb from '@/components/HeroOrb'

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
      style={{ background: '#F7F4EF' }}
    >
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 pt-36 pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[calc(100vh-144px)]">

          {/* LEFT — editorial text */}
          <div className="flex flex-col justify-center">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="tag">Software, IA y sistemas para negocios modernos</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-10 text-[clamp(2.8rem,5.5vw,5.5rem)] font-black text-[#1C1B18] leading-[1.02]"
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
              className="mt-7 text-lg sm:text-xl text-[#6B6860] leading-relaxed max-w-lg"
            >
              Páginas web, apps móviles, sistemas administrativos y
              automatizaciones con IA. Tecnología a medida para empresas que
              quieren vender más y operar mejor.
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
                className="inline-flex items-center gap-1.5 text-base text-[#6B6860] hover:text-[#1C1B18] transition-colors duration-200 font-medium py-4"
              >
                Ver servicios
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.48 }}
              className="mt-16 pt-8 border-t border-[#E6E0D6] flex flex-wrap gap-x-10 gap-y-6"
            >
              {stats.map((s) => (
                <div key={s.label} className="flex flex-col gap-1">
                  <span className="text-3xl font-black text-[#1C1B18]">{s.value}</span>
                  <span className="text-xs text-[#9B9890] leading-snug">{s.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — animated globe */}
          <div className="hidden lg:flex items-center justify-center lg:justify-end">
            <HeroOrb />
          </div>

        </div>
      </div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-[#E6E0D6]" />
    </section>
  )
}

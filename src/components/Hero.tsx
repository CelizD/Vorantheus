'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { DashboardMockup } from '@/components/mockups'

const stats = [
  { value: '50+', label: 'Proyectos completados' },
  { value: '3+', label: 'Años de experiencia' },
  { value: '98%', label: 'Clientes satisfechos' },
]

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen overflow-hidden section-dark"
    >
      {/* Soft radial glow — left side */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 60% at 20% 50%, rgba(0,113,227,0.12) 0%, transparent 65%)',
        }}
      />
      {/* Purple accent glow — right side */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 50% 50% at 80% 50%, rgba(124,58,237,0.07) 0%, transparent 70%)',
        }}
      />

      {/* Content grid */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[calc(100vh-128px)]">

          {/* LEFT: Text content */}
          <div className="flex flex-col justify-center">
            {/* Tag */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              <span className="tag">Desarrollo de software profesional</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
              className="mt-8 text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.04]"
              style={{ letterSpacing: '-0.02em' }}
            >
              Software que hace
              <br />
              crecer tu
              <br />
              <span className="gradient-text">negocio.</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
              className="mt-6 max-w-sm text-xl text-white/50 leading-relaxed"
            >
              Páginas web, apps, sistemas y automatizaciones con IA para negocios que quieren vender más.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
              className="mt-10 flex flex-col sm:flex-row gap-4 items-start"
            >
              <Link
                href="/cotizar"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-[#0071E3] hover:bg-[#0077ED] text-white font-semibold text-base rounded-full transition-all duration-200"
              >
                Cotizar proyecto
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                href="/#servicios"
                className="inline-flex items-center gap-1.5 text-base text-white/60 hover:text-white transition-colors duration-200 font-medium py-4"
              >
                Ver servicios
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* Stats bar */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: 'easeOut' }}
              className="mt-16 flex items-center gap-0 border-t border-white/[0.1] pt-8"
            >
              {stats.map((stat, i) => (
                <div key={stat.label} className="flex items-center">
                  <div className="flex flex-col gap-1 pr-8">
                    <span className="text-3xl font-black text-white">{stat.value}</span>
                    <span className="text-xs text-white/40 leading-snug">{stat.label}</span>
                  </div>
                  {i < stats.length - 1 && (
                    <div className="w-px h-10 bg-white/[0.1] mr-8 shrink-0" />
                  )}
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT: Dashboard mockup */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: 'easeOut' }}
            className="relative flex items-center justify-center lg:justify-end"
          >
            {/* Glow behind mockup */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(0,113,227,0.18) 0%, transparent 70%)',
                filter: 'blur(40px)',
              }}
            />
            <div className="relative w-full max-w-xl">
              <DashboardMockup />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

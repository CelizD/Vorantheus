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
      className="relative min-h-screen flex flex-col items-center justify-start overflow-hidden section-dark"
    >
      {/* Soft radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 50% 30%, rgba(11,132,243,0.10) 0%, transparent 65%)',
        }}
      />
      {/* Purple accent glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 40% 40% at 75% 55%, rgba(124,58,237,0.07) 0%, transparent 70%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 lg:px-8 pt-36 pb-10 flex flex-col items-center text-center">
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
          className="mt-8 text-6xl sm:text-7xl lg:text-8xl font-black tracking-tight text-white leading-[1.04]"
        >
          Software que hace
          <br />
          <span className="gradient-text">crecer tu negocio.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          className="mt-8 max-w-xl text-xl text-white/55 leading-relaxed"
        >
          Creamos páginas web, apps, sistemas y automatizaciones con IA para negocios que quieren vender más y verse más profesionales.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
          className="mt-10 flex flex-col sm:flex-row gap-4 items-center"
        >
          <Link
            href="/cotizar"
            className="group inline-flex items-center gap-2 px-8 py-3.5 bg-white hover:bg-white/90 text-black font-semibold text-base rounded-full transition-all duration-200"
          >
            Cotizar proyecto
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
          <Link
            href="/#servicios"
            className="inline-flex items-center gap-1.5 text-base text-[#0B84F3] hover:text-white transition-colors duration-200 font-medium"
          >
            Ver servicios
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>

      {/* Product mockup */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.45, ease: 'easeOut' }}
        className="relative z-10 w-full max-w-3xl mx-auto px-6 lg:px-8"
      >
        <div className="relative">
          {/* glow behind mockup */}
          <div className="absolute -inset-x-10 -top-6 bottom-0 bg-[#0B84F3]/15 blur-3xl rounded-full pointer-events-none" />
          <div className="relative flex justify-center">
            <DashboardMockup />
          </div>
        </div>
      </motion.div>

      {/* Stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7, ease: 'easeOut' }}
        className="relative z-10 w-full max-w-lg mx-auto px-6 lg:px-8 mt-16 mb-24"
      >
        <div className="flex items-center justify-between border-t border-white/10 pt-8">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-1">
              <span className="text-3xl font-black text-white">{stat.value}</span>
              <span className="text-xs text-white/40 text-center leading-snug">{stat.label}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

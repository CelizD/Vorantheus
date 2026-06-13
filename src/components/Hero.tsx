'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, ChevronDown, Star, Users, Award } from 'lucide-react'

const stats = [
  { icon: Star, value: '50+', label: 'Proyectos completados' },
  { icon: Award, value: '3+', label: 'Años de experiencia' },
  { icon: Users, value: '98%', label: 'Clientes satisfechos' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-carbon"
    >
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-40" />

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-[#0B84F3]/10 via-transparent to-transparent" />

      {/* Animated blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-electric/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-voPurple/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1.5s' }} />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-8"
        >
          {/* Badge */}
          <motion.div variants={itemVariants}>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-electric/30 bg-electric/10 text-electric text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-electric animate-pulse" />
              Software profesional a medida
            </span>
          </motion.div>

          {/* Headline */}
          <motion.div variants={itemVariants} className="max-w-5xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight">
              <span className="text-white">Software profesional para</span>
              <br />
              <span className="gradient-text">hacer crecer tu negocio</span>
            </h1>
          </motion.div>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="max-w-2xl text-lg sm:text-xl text-voGray leading-relaxed"
          >
            Creamos páginas web, aplicaciones móviles, sistemas administrativos y soluciones con
            inteligencia artificial que convierten visitantes en clientes y automatizan tu empresa.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 items-center"
          >
            <Link
              href="/cotizar"
              className="group flex items-center gap-2 px-8 py-4 bg-electric hover:bg-voBlue text-white font-bold text-lg rounded-2xl shadow-electric hover:shadow-electric-lg transition-all duration-300 hover:scale-105"
            >
              Cotizar proyecto
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/#servicios"
              className="flex items-center gap-2 px-8 py-4 border-2 border-electric/50 hover:border-electric text-white font-bold text-lg rounded-2xl hover:bg-electric/10 transition-all duration-300"
            >
              Ver servicios
            </Link>
          </motion.div>

          {/* Trust indicators */}
          <motion.div variants={itemVariants} className="flex items-center gap-6 text-sm text-voGray">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
              Sin costos ocultos
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
              Garantía de satisfacción
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
              Soporte incluido
            </span>
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto"
        >
          {stats.map((stat) => {
            const Icon = stat.icon
            return (
              <div
                key={stat.label}
                className="glass-card rounded-2xl p-6 flex flex-col items-center gap-3 hover:border-electric/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-electric/10 flex items-center justify-center group-hover:bg-electric/20 transition-colors">
                  <Icon className="w-6 h-6 text-electric" />
                </div>
                <div className="text-3xl font-black text-white">{stat.value}</div>
                <div className="text-sm text-voGray text-center">{stat.label}</div>
              </div>
            )
          })}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-voGray/60"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  )
}

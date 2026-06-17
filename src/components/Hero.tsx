'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, CheckCircle, Zap } from 'lucide-react'
import CalendlyButton from '@/components/CalendlyButton'
import MagneticButton from '@/components/MagneticButton'
import AnimatedCounter from '@/components/AnimatedCounter'

const stats = [
  { value: '50+', label: 'Proyectos completados' },
  { value: '98%', label: 'Clientes satisfechos' },
  { value: '24h', label: 'Tiempo de respuesta' },
  { value: '3+', label: 'Años de experiencia' },
]

const features = [
  'Diseño personalizado a tu marca',
  'Tecnología de última generación',
  'Soporte y mantenimiento incluido',
]

const chartBars = [40, 65, 45, 80, 55, 90, 70, 95, 75, 85, 60, 100]

function FloatingMockup() {
  return (
    <div className="relative w-full max-w-[460px]">
      {/* Glow behind the card */}
      <div
        className="absolute inset-0 -z-10 blur-3xl opacity-20 rounded-full"
        style={{ background: 'radial-gradient(circle, #0071E3 0%, transparent 70%)' }}
      />

      {/* Dashboard card */}
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
        className="relative rounded-2xl overflow-hidden border border-white/10"
        style={{ background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(20px)' }}
      >
        {/* Window chrome */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/[0.06]">
          <div className="flex gap-1.5">
            {['#FF5F56', '#FFBD2E', '#27C93F'].map((c) => (
              <div key={c} className="w-3 h-3 rounded-full opacity-70" style={{ background: c }} />
            ))}
          </div>
          <div
            className="flex items-center gap-1.5 rounded-md px-3 py-1"
            style={{ background: 'rgba(255,255,255,0.05)' }}
          >
            <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
            <span className="text-white/25 text-xs">dashboard.vorantheus.com</span>
          </div>
          <div className="w-12" />
        </div>

        <div className="p-5">
          {/* Stats row */}
          <div className="grid grid-cols-3 gap-3 mb-4">
            {[
              { label: 'Ventas', value: '$24K', trend: '+12%' },
              { label: 'Pedidos', value: '1,458', trend: '+8%' },
              { label: 'Usuarios', value: '3,204', trend: '+15%' },
            ].map((s) => (
              <div
                key={s.label}
                className="rounded-xl p-3"
                style={{ background: 'rgba(255,255,255,0.04)' }}
              >
                <p className="text-white/30 text-[11px] mb-1">{s.label}</p>
                <p className="text-white font-bold text-sm">{s.value}</p>
                <span className="text-green-400 text-[10px]">↑ {s.trend}</span>
              </div>
            ))}
          </div>

          {/* Chart */}
          <div
            className="rounded-xl p-4 mb-4"
            style={{ background: 'rgba(255,255,255,0.03)' }}
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-white/35 text-xs">Crecimiento mensual</span>
              <span className="text-[#4DA3F5] text-xs font-medium">+28% este mes</span>
            </div>
            <div className="flex items-end gap-1 h-14">
              {chartBars.map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: `${h}%`, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.7 + i * 0.04 }}
                  className="flex-1 rounded-sm"
                  style={{ background: `rgba(0,113,227,${0.25 + (h / 100) * 0.65})` }}
                />
              ))}
            </div>
          </div>

          {/* Recent projects */}
          <div className="space-y-2">
            {[
              { name: 'Tienda Nuevo León', status: 'Completado', cls: 'text-green-400 bg-green-500/15' },
              { name: 'App Logistics Pro', status: 'En progreso', cls: 'text-blue-400 bg-blue-500/15' },
              { name: 'CRM Distribuidora', status: 'En revisión', cls: 'text-amber-400 bg-amber-500/15' },
            ].map((item) => (
              <div
                key={item.name}
                className="flex items-center justify-between py-2 border-b border-white/[0.05] last:border-0"
              >
                <span className="text-white/45 text-xs">{item.name}</span>
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${item.cls}`}>
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Floating badge: Deploy */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 1.0, ease: [0.23, 1, 0.32, 1] }}
        className="absolute -left-10 top-[38%] rounded-xl px-3 py-2.5 border border-white/10 shadow-lg"
        style={{ background: 'rgba(8,9,15,0.88)', backdropFilter: 'blur(20px)' }}
      >
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-green-500/20 flex items-center justify-center shrink-0">
            <span className="text-green-400 text-sm">✓</span>
          </div>
          <div>
            <p className="text-white text-xs font-semibold leading-none mb-0.5">Deploy exitoso</p>
            <p className="text-white/30 text-[10px]">hace 2 min · sin errores</p>
          </div>
        </div>
      </motion.div>

      {/* Floating badge: Lighthouse */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 1.2, ease: [0.23, 1, 0.32, 1] }}
        className="absolute -right-8 bottom-[25%] rounded-xl px-3 py-2.5 border border-white/10 shadow-lg"
        style={{ background: 'rgba(8,9,15,0.88)', backdropFilter: 'blur(20px)' }}
      >
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-[#0071E3]/20 flex items-center justify-center shrink-0">
            <Zap className="w-3.5 h-3.5 text-[#4DA3F5]" />
          </div>
          <div>
            <p className="text-white text-xs font-semibold leading-none mb-0.5">98/100 Lighthouse</p>
            <p className="text-white/30 text-[10px]">Performance · Optimizado</p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-[100dvh] overflow-hidden hero-bg"
    >
      {/* Background glows */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div
          className="absolute top-[-10%] right-[-5%] w-[700px] h-[700px] rounded-full opacity-[0.18] blur-3xl"
          style={{ background: 'radial-gradient(circle, #0071E3 0%, transparent 70%)' }}
        />
        <div
          className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full opacity-[0.10] blur-3xl"
          style={{ background: 'radial-gradient(circle, #7C3AED 0%, transparent 70%)' }}
        />
      </div>

      {/* Subtle grid */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.025]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 pt-36 pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100dvh-144px)]">
          {/* LEFT */}
          <div className="flex flex-col justify-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#0071E3]/25 text-[#4DA3F5] text-sm font-medium"
                style={{ background: 'rgba(0,113,227,0.08)' }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#0071E3] animate-pulse" />
                Software, IA y sistemas para negocios modernos
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
              className="mt-8 text-[clamp(2.8rem,5.5vw,5.5rem)] font-black text-white leading-[1.02]"
              style={{ letterSpacing: '-0.03em' }}
            >
              Software profesional
              <br />
              para hacer crecer
              <br />
              <span style={{ color: '#0071E3' }}>tu negocio.</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.22 }}
              className="mt-6 text-lg text-white/45 leading-relaxed max-w-lg"
            >
              Creamos páginas web, aplicaciones móviles, sistemas administrativos, tiendas en
              línea y automatizaciones con IA para negocios que quieren vender más, operar mejor
              y verse profesionales.
            </motion.p>

            {/* Feature pills */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-5 flex flex-wrap gap-x-6 gap-y-2"
            >
              {features.map((f) => (
                <span key={f} className="flex items-center gap-1.5 text-sm text-white/40">
                  <CheckCircle className="w-3.5 h-3.5 text-[#0071E3] shrink-0" />
                  {f}
                </span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.36 }}
              className="mt-10 flex flex-col sm:flex-row gap-4 items-start"
            >
              <MagneticButton className="inline-block" strength={0.3}>
                <Link
                  href="/cotizar"
                  className="group inline-flex items-center gap-2 px-8 py-4 bg-[#0071E3] hover:bg-[#0077ED] text-white font-semibold text-base rounded-full transition-colors duration-200 active:scale-[0.97]"
                >
                  Cotizar proyecto
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </MagneticButton>
              <CalendlyButton />
              <Link
                href="/#servicios"
                className="inline-flex items-center gap-1.5 text-base text-white/35 hover:text-white/70 transition-colors duration-200 font-medium py-4"
              >
                Ver servicios
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.52 }}
              className="mt-16 pt-8 border-t border-white/[0.08] grid grid-cols-2 sm:grid-cols-4 gap-6"
            >
              {stats.map((s) => (
                <div key={s.label} className="flex flex-col gap-1">
                  <AnimatedCounter value={s.value} className="text-3xl font-black text-white" />
                  <span className="text-xs text-white/25 leading-snug">{s.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — floating mockup */}
          <div className="hidden md:flex items-center justify-center lg:justify-end">
            <FloatingMockup />
          </div>
        </div>
      </div>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/[0.06]" />
    </section>
  )
}

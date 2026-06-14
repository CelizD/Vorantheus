'use client'

import { motion } from 'framer-motion'
import {
  Clock,
  Code2,
  Headphones,
  Gauge,
  MessageCircle,
  ShieldCheck,
  LucideIcon,
} from 'lucide-react'
import { differentiators } from '@/data/whyus'

const iconMap: Record<string, LucideIcon> = {
  Clock,
  Code2,
  Headphones,
  Gauge,
  MessageCircle,
  ShieldCheck,
}

export default function WhyUs() {
  return (
    <section className="section-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-16"
        >
          <p className="text-xs font-medium uppercase tracking-widest text-[#0071E3] mb-4">
            Por qué elegirnos
          </p>
          <h2
            className="text-4xl sm:text-5xl font-black text-ink tracking-tight leading-tight"
            style={{ letterSpacing: '-0.02em' }}
          >
            No solo entregamos software. Entregamos tranquilidad.
          </h2>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            Trabajar con nosotros significa claridad, calidad y acompañamiento real en cada etapa de tu proyecto.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentiators.map((item, i) => {
            const Icon = iconMap[item.icon] || ShieldCheck
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group p-8 rounded-3xl bg-smoke border border-black/[0.04] hover:shadow-card hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#0071E3]/10 flex items-center justify-center mb-5 group-hover:bg-[#0071E3] transition-colors duration-300">
                  <Icon className="w-6 h-6 text-[#0071E3] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-ink mb-2">{item.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{item.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

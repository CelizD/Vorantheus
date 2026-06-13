'use client'

import { motion } from 'framer-motion'
import {
  Globe,
  Layout,
  ShoppingCart,
  Database,
  Smartphone,
  Bot,
  Wrench,
  Check,
  LucideIcon,
} from 'lucide-react'
import { services, Service } from '@/data/services'

const iconMap: Record<string, LucideIcon> = {
  Globe,
  Layout,
  ShoppingCart,
  Database,
  Smartphone,
  Bot,
  Wrench,
}

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const Icon = iconMap[service.icon] || Globe

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -4, scale: 1.01 }}
      className="glass-card rounded-2xl p-6 flex flex-col gap-5 border border-white/8 hover:border-electric/30 hover:shadow-electric transition-all duration-300 group"
    >
      {/* Icon */}
      <div
        className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg group-hover:shadow-electric transition-shadow duration-300`}
      >
        <Icon className="w-7 h-7 text-white" />
      </div>

      {/* Title & Description */}
      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-bold text-white">{service.title}</h3>
        <p className="text-voGray text-sm leading-relaxed">{service.description}</p>
      </div>

      {/* Features */}
      <ul className="flex flex-col gap-2">
        {service.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2 text-sm">
            <Check className="w-4 h-4 text-electric shrink-0 mt-0.5" />
            <span className="text-voGray">{feature}</span>
          </li>
        ))}
      </ul>

      {/* Ideal for */}
      <div className="mt-auto pt-4 border-t border-white/8">
        <p className="text-xs text-voGray/70 leading-relaxed">
          <span className="text-electric font-semibold">Ideal para: </span>
          {service.idealFor}
        </p>
      </div>
    </motion.div>
  )
}

export default function Services() {
  return (
    <section id="servicios" className="py-24 bg-navy relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-electric/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-voPurple/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-electric/30 bg-electric/10 text-electric text-sm font-medium mb-4">
            Nuestros servicios
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            ¿Qué <span className="gradient-text">hacemos?</span>
          </h2>
          <p className="max-w-2xl mx-auto text-voGray text-lg leading-relaxed">
            Desde páginas web hasta sistemas complejos con inteligencia artificial.
            Cubrimos todo el espectro del desarrollo de software para tu negocio.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <p className="text-voGray mb-4">¿No encuentras lo que buscas?</p>
          <a
            href="/cotizar"
            className="inline-flex items-center gap-2 px-8 py-4 bg-electric hover:bg-voBlue text-white font-bold rounded-2xl shadow-electric hover:shadow-electric-lg transition-all duration-300 hover:scale-105"
          >
            Cotiza tu proyecto personalizado
          </a>
        </motion.div>
      </div>
    </section>
  )
}

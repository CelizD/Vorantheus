'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Globe, ShoppingCart, Database, Smartphone, Layout, Bot, Wrench, Check, ArrowRight, LucideIcon } from 'lucide-react'
import { services } from '@/data/services'
import { Mockup } from '@/components/mockups'
import { serviceQuoteTypes } from '@/lib/quote-schema'

const iconMap: Record<string, LucideIcon> = {
  Globe,
  Layout,
  ShoppingCart,
  Database,
  Smartphone,
  Bot,
  Wrench,
}

// The 4 main featured services, each paired with a CSS product mockup + glow tint
const featuredServiceIds = ['paginas-web', 'tiendas-en-linea', 'sistemas-administrativos', 'aplicaciones-moviles'] as const
const mockupFor: Record<string, 'browser' | 'store' | 'dashboard' | 'phone'> = {
  'paginas-web': 'browser',
  'tiendas-en-linea': 'store',
  'sistemas-administrativos': 'dashboard',
  'aplicaciones-moviles': 'phone',
}
// The 3 smaller supplemental services
const supplementalServiceIds = ['landing-pages', 'automatizacion-ia', 'mantenimiento']

interface FeatureSectionProps {
  service: (typeof services)[0]
  reversed: boolean
}

function FeatureSection({ service, reversed }: FeatureSectionProps) {
  const quoteHref = `/cotizar?tipo=${encodeURIComponent(
    serviceQuoteTypes[service.id] || service.title,
  )}&origen=servicios:${service.id}`

  const textBlock = (
    <div className="flex flex-col gap-6 justify-center">
      <div>
        <span className="tag">{service.title}</span>
      </div>
      <h3 className="text-4xl sm:text-5xl font-bold text-ink leading-tight tracking-tight">
        {service.title}
      </h3>
      <p className="text-lg text-muted leading-relaxed max-w-lg">
        {service.description}
      </p>
      <ul className="flex flex-col gap-3">
        {service.features.slice(0, 5).map((feature) => (
          <li key={feature} className="flex items-center gap-3">
            <div className="w-5 h-5 rounded-full bg-[#0071E3]/10 flex items-center justify-center shrink-0">
              <Check className="w-3 h-3 text-[#0071E3]" />
            </div>
            <span className="text-muted text-sm">{feature}</span>
          </li>
        ))}
      </ul>
      <div>
        <Link
          href={quoteHref}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-[#0071E3] hover:text-ink transition-colors duration-200"
        >
          Cotizar este servicio
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  )

  const visualBlock = (
    <div className="relative flex items-center justify-center min-h-[340px] lg:min-h-[420px]">
      <div className="relative w-full bg-white rounded-3xl shadow-card border border-black/[0.04] p-8 flex items-center justify-center">
        <Mockup type={mockupFor[service.id] || 'browser'} />
      </div>
    </div>
  )

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center ${reversed ? 'lg:[direction:rtl]' : ''}`}
    >
      <div className={reversed ? 'lg:[direction:ltr]' : ''}>{textBlock}</div>
      <div className={reversed ? 'lg:[direction:ltr]' : ''}>{visualBlock}</div>
    </motion.div>
  )
}

export default function Services() {
  const featuredServices = featuredServiceIds
    .map((id) => services.find((s) => s.id === id))
    .filter(Boolean) as typeof services

  const supplementalServices = supplementalServiceIds
    .map((id) => services.find((s) => s.id === id))
    .filter(Boolean) as typeof services

  return (
    <section id="servicios" className="section-light">
      {/* Section header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <span className="tag">Servicios</span>
          <h2 className="mt-6 text-5xl sm:text-6xl font-black text-ink tracking-tight leading-tight">
            Todo lo que tu negocio necesita.
          </h2>
          <p className="mt-6 text-xl text-muted leading-relaxed">
            Desde una página de presentación hasta sistemas complejos con inteligencia artificial. Cubrimos cada etapa del crecimiento digital.
          </p>
        </motion.div>
      </div>

      {/* Featured alternating sections */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col gap-32 pb-32">
        {featuredServices.map((service, index) => (
          <FeatureSection
            key={service.id}
            service={service}
            reversed={index % 2 !== 0}
          />
        ))}
      </div>

      {/* Supplemental services - smaller cards */}
      <div className="border-t border-black/[0.06] section-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-sm text-muted uppercase tracking-widest mb-12"
          >
            También ofrecemos
          </motion.p>
          {/* Divided list (no card-in-card) — breaks the 3-equal-card pattern */}
          <div className="flex flex-col divide-y divide-black/[0.07] border-t border-black/[0.07]">
            {supplementalServices.map((service, index) => {
              const Icon = iconMap[service.icon] || Globe
              const quoteHref = `/cotizar?tipo=${encodeURIComponent(
                serviceQuoteTypes[service.id] || service.title,
              )}&origen=servicios:${service.id}`

              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08, ease: [0.23, 1, 0.32, 1] }}
                >
                  <Link
                    href={quoteHref}
                    className="group grid grid-cols-1 md:grid-cols-[auto_1fr_auto] items-center gap-5 md:gap-8 py-8"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#0071E3]/10 flex items-center justify-center shrink-0 group-hover:bg-[#0071E3] transition-colors duration-300">
                      <Icon className="w-6 h-6 text-[#0071E3] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div className="max-w-2xl">
                      <h4 className="text-xl font-bold text-ink mb-1.5">{service.title}</h4>
                      <p className="text-sm text-muted leading-relaxed">{service.description}</p>
                    </div>
                    <span className="text-sm text-[#0071E3] inline-flex items-center gap-1 md:justify-self-end group-hover:gap-2 transition-[gap] duration-200">
                      Saber más <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

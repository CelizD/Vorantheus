'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Check } from 'lucide-react'
import { packages, Package } from '@/data/packages'

function PricingCard({ pkg, index }: { pkg: Package; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative flex flex-col rounded-3xl p-10 transition-all duration-300 ${
        pkg.highlighted
          ? 'bg-white text-[#050816]'
          : 'bg-white/[0.03] border border-white/[0.08] hover:border-white/[0.16]'
      }`}
    >
      {/* Badge */}
      {pkg.badge && (
        <div
          className={`absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold whitespace-nowrap ${
            pkg.highlighted
              ? 'bg-[#0B84F3] text-white'
              : 'bg-white/10 text-white border border-white/20'
          }`}
        >
          {pkg.badge}
        </div>
      )}

      {/* Name */}
      <p className={`text-sm font-semibold uppercase tracking-widest mb-3 ${pkg.highlighted ? 'text-[#0B84F3]' : 'text-[#94A3B8]'}`}>
        {pkg.name}
      </p>

      {/* Price */}
      <div className="flex items-end gap-2 mb-2">
        <span className={`text-5xl font-black tracking-tight ${pkg.highlighted ? 'text-[#050816]' : 'text-white'}`}>
          {pkg.price}
        </span>
      </div>
      <p className={`text-sm mb-4 ${pkg.highlighted ? 'text-[#050816]/60' : 'text-[#94A3B8]'}`}>
        {pkg.priceNote}
      </p>

      {/* Description */}
      <p className={`text-sm leading-relaxed mb-8 ${pkg.highlighted ? 'text-[#050816]/70' : 'text-[#94A3B8]'}`}>
        {pkg.description}
      </p>

      {/* Divider */}
      <div className={`h-px mb-8 ${pkg.highlighted ? 'bg-[#050816]/10' : 'bg-white/[0.06]'}`} />

      {/* Features */}
      <ul className="flex flex-col gap-3.5 flex-1 mb-10">
        {pkg.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <div
              className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                pkg.highlighted ? 'bg-[#0B84F3]/15' : 'bg-[#0B84F3]/10'
              }`}
            >
              <Check className={`w-3 h-3 ${pkg.highlighted ? 'text-[#0B84F3]' : 'text-[#0B84F3]'}`} />
            </div>
            <span className={`text-sm leading-relaxed ${pkg.highlighted ? 'text-[#050816]/80' : 'text-[#94A3B8]'}`}>
              {feature}
            </span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <Link
        href="/cotizar"
        className={`flex items-center justify-center px-6 py-3.5 rounded-2xl font-semibold text-sm transition-all duration-200 ${
          pkg.highlighted
            ? 'bg-[#050816] hover:bg-[#0D1117] text-white'
            : 'bg-white/[0.06] hover:bg-white/[0.1] text-white border border-white/[0.08] hover:border-white/[0.2]'
        }`}
      >
        {pkg.ctaText}
      </Link>
    </motion.div>
  )
}

export default function Pricing() {
  return (
    <section id="paquetes" className="section-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-32">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-20"
        >
          <span className="tag">Precios transparentes</span>
          <h2 className="mt-6 text-5xl sm:text-6xl font-black text-white tracking-tight leading-tight">
            Elige tu plan.
          </h2>
          <p className="mt-6 text-xl text-white/50 leading-relaxed">
            Precios claros y sin sorpresas. Elige el plan que mejor se adapta a tu negocio o cuéntanos tu proyecto para una cotización personalizada.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {packages.map((pkg, index) => (
            <PricingCard key={pkg.id} pkg={pkg} index={index} />
          ))}
        </div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-sm text-white/40"
        >
          Los precios son orientativos. Cada proyecto es único y cotizamos según los requerimientos específicos.{' '}
          <Link href="/cotizar" className="text-[#0B84F3] hover:text-white transition-colors">
            Solicita tu cotización gratis →
          </Link>
        </motion.p>
      </div>
    </section>
  )
}

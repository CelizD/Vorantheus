'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Check, Star, Zap } from 'lucide-react'
import { packages, Package } from '@/data/packages'

function PricingCard({ pkg, index }: { pkg: Package; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6, scale: 1.01 }}
      className={`relative rounded-2xl p-6 flex flex-col gap-6 transition-all duration-300 ${
        pkg.highlighted
          ? 'bg-gradient-to-b from-electric/20 to-voBlue/10 border-2 border-electric shadow-electric-lg'
          : 'glass-card border border-white/8 hover:border-electric/30 hover:shadow-electric'
      }`}
    >
      {/* Badge */}
      {pkg.badge && (
        <div
          className={`absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap ${
            pkg.highlighted
              ? 'bg-electric text-white shadow-electric'
              : 'bg-white/10 text-white border border-white/20'
          }`}
        >
          {pkg.highlighted && <Star className="w-3 h-3 inline mr-1" fill="white" />}
          {pkg.badge}
        </div>
      )}

      {/* Name & Price */}
      <div className="pt-2">
        <h3 className={`text-xl font-bold mb-3 ${pkg.highlighted ? 'text-white' : 'text-white'}`}>
          {pkg.name}
        </h3>
        <div className="flex items-end gap-1 mb-3">
          <span className={`text-4xl font-black ${pkg.highlighted ? 'text-electric' : 'text-white'}`}>
            {pkg.price}
          </span>
          <span className="text-voGray text-sm pb-1.5">{pkg.priceNote}</span>
        </div>
        <p className="text-voGray text-sm leading-relaxed">{pkg.description}</p>
      </div>

      {/* Divider */}
      <div className={`h-px ${pkg.highlighted ? 'bg-electric/30' : 'bg-white/8'}`} />

      {/* Features */}
      <ul className="flex flex-col gap-3 flex-1">
        {pkg.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5">
            <div
              className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                pkg.highlighted ? 'bg-electric/20' : 'bg-white/10'
              }`}
            >
              <Check className={`w-3 h-3 ${pkg.highlighted ? 'text-electric' : 'text-voGray'}`} />
            </div>
            <span className="text-voGray text-sm leading-relaxed">{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <Link
        href="/cotizar"
        className={`flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 ${
          pkg.highlighted
            ? 'bg-electric hover:bg-voBlue text-white shadow-electric hover:shadow-electric-lg hover:scale-105'
            : 'border border-electric/50 hover:border-electric text-electric hover:bg-electric/10'
        }`}
      >
        {pkg.highlighted && <Zap className="w-4 h-4" />}
        {pkg.ctaText}
      </Link>
    </motion.div>
  )
}

export default function Pricing() {
  return (
    <section id="paquetes" className="py-24 bg-carbon relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-96 bg-electric/5 rounded-full blur-3xl" />

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
            Precios transparentes
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Paquetes y <span className="gradient-text">precios</span>
          </h2>
          <p className="max-w-2xl mx-auto text-voGray text-lg leading-relaxed">
            Precios claros y sin sorpresas. Elige el plan que mejor se adapta a tu negocio
            o cuéntanos tu proyecto para una cotización personalizada.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mt-8">
          {packages.map((pkg, index) => (
            <PricingCard key={pkg.id} pkg={pkg} index={index} />
          ))}
        </div>

        {/* Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12 text-voGray text-sm"
        >
          <p>
            Los precios son orientativos. Cada proyecto es único y cotizamos según los requerimientos específicos.{' '}
            <Link href="/cotizar" className="text-electric hover:text-white transition-colors font-medium">
              Solicita tu cotización gratis →
            </Link>
          </p>
        </motion.div>
      </div>
    </section>
  )
}

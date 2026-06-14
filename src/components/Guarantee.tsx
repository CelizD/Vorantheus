'use client'

import { motion } from 'framer-motion'
import { ShieldCheck } from 'lucide-react'

const points = [
  '14 días de garantía de satisfacción',
  'Revisiones incluidas hasta que quede perfecto',
  'Sin costos ocultos ni sorpresas',
]

export default function Guarantee() {
  return (
    <section className="section-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl px-8 py-14 sm:px-14"
          style={{
            background: 'linear-gradient(135deg, #0071E3 0%, #2563EB 55%, #7C3AED 100%)',
          }}
        >
          {/* Decorative glow */}
          <div
            className="absolute inset-0 pointer-events-none opacity-60"
            style={{
              background:
                'radial-gradient(ellipse 50% 80% at 85% 20%, rgba(255,255,255,0.18) 0%, transparent 60%)',
            }}
          />

          <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto">
            <div className="w-14 h-14 rounded-2xl bg-white/15 backdrop-blur-sm flex items-center justify-center mb-6">
              <ShieldCheck className="w-7 h-7 text-white" />
            </div>

            <h2
              className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight"
              style={{ letterSpacing: '-0.02em' }}
            >
              Tu inversión, protegida.
            </h2>
            <p className="mt-4 text-lg text-white/80 leading-relaxed">
              Trabajamos contigo hasta que estés satisfecho. Si en los primeros 14 días algo no cumple lo acordado, lo resolvemos sin costo.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-x-8 gap-y-3">
              {points.map((point) => (
                <span key={point} className="flex items-center gap-2 text-white/90 text-sm font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/80" />
                  {point}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

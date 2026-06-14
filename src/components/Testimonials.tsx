'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { testimonials } from '@/data/testimonials'

export default function Testimonials() {
  return (
    <section style={{ background: '#FFFFFF' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-16"
        >
          <p className="text-xs font-medium uppercase tracking-widest text-[#0071E3] mb-4">
            Testimonios
          </p>
          <h2
            className="text-4xl sm:text-5xl font-black text-[#1C1B18] tracking-tight leading-tight"
            style={{ letterSpacing: '-0.02em' }}
          >
            Negocios reales,
            <br />
            resultados reales.
          </h2>
          <p className="mt-5 text-lg text-[#6B6860] leading-relaxed">
            Esto es lo que dicen quienes ya confiaron su crecimiento digital a Vorantheus.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex flex-col bg-[#F7F4EF] rounded-3xl p-8 border border-[#E6E0D6]"
            >
              <div className="flex items-center gap-1 mb-5">
                {Array.from({ length: t.rating }).map((_, s) => (
                  <Star key={s} className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]" />
                ))}
              </div>
              <blockquote className="text-[#1C1B18] text-lg leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-4">
                <div
                  className={`w-12 h-12 rounded-full bg-gradient-to-br ${t.avatarColor} flex items-center justify-center shrink-0`}
                >
                  <span className="text-white font-bold text-sm">{t.initials}</span>
                </div>
                <div>
                  <p className="text-[#1C1B18] font-semibold text-sm">{t.name}</p>
                  <p className="text-[#6B6860] text-sm">
                    {t.role}, {t.company}
                  </p>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}

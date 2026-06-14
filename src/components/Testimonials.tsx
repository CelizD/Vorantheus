'use client'

import { useRef } from 'react'
import { motion, useMotionValue, useTransform, useReducedMotion } from 'framer-motion'
import { Star } from 'lucide-react'
import { testimonials } from '@/data/testimonials'

function SpotlightCard({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const prefersReduced = useReducedMotion()
  const mouseX = useMotionValue(-999)
  const mouseY = useMotionValue(-999)

  const background = useTransform(
    [mouseX, mouseY],
    ([x, y]: number[]) =>
      `radial-gradient(280px circle at ${x}px ${y}px, rgba(0,113,227,0.09), transparent 65%)`,
  )

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (prefersReduced) return
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    mouseX.set(e.clientX - rect.left)
    mouseY.set(e.clientY - rect.top)
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { mouseX.set(-999); mouseY.set(-999) }}
      className={`relative overflow-hidden ${className ?? ''}`}
    >
      {/* Spotlight glow — follows cursor */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-3xl"
        style={{ background }}
      />
      {children}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section style={{ background: '#FFFFFF' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
          className="max-w-2xl mb-16"
        >
          <p className="text-xs font-medium uppercase tracking-widest text-[#1C1B18] mb-4">
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
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.23, 1, 0.32, 1] }}
            >
              <SpotlightCard className="flex flex-col h-full bg-[#F7F4EF] rounded-3xl p-8 border border-[#E6E0D6]">
                <div className="flex items-center gap-1 mb-5">
                  {Array.from({ length: t.rating }).map((_, s) => (
                    <Star key={s} className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]" aria-hidden />
                  ))}
                </div>
                <blockquote className="text-[#1C1B18] text-lg leading-relaxed flex-1">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-4">
                  {/* Avatar: gradient ring + initials */}
                  <div className="relative shrink-0">
                    <div
                      className={`w-12 h-12 rounded-full bg-gradient-to-br ${t.avatarColor} flex items-center justify-center`}
                    >
                      <span className="text-white font-bold text-sm">{t.initials}</span>
                    </div>
                    {/* Subtle ring */}
                    <div className="absolute inset-0 rounded-full ring-2 ring-white/60" />
                  </div>
                  <div>
                    <p className="text-[#1C1B18] font-semibold text-sm">{t.name}</p>
                    <p className="text-[#6B6860] text-sm">
                      {t.role}, {t.company}
                    </p>
                  </div>
                </figcaption>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

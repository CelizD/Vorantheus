'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { portfolioItems } from '@/data/portfolio'

const gradientTints: Record<string, string> = {
  'from-electric via-voBlue to-navy': 'from-[#0B84F3]/40 via-[#2563EB]/25 to-[#071B3A]',
  'from-voPurple via-electric to-voBlue': 'from-[#7C3AED]/40 via-[#0B84F3]/25 to-[#2563EB]/30',
  'from-voBlue via-voPurple to-electric': 'from-[#2563EB]/40 via-[#7C3AED]/25 to-[#0B84F3]/30',
  'from-electric to-voPurple': 'from-[#0B84F3]/40 to-[#7C3AED]/30',
  'from-navy via-voBlue to-electric': 'from-[#071B3A] via-[#2563EB]/25 to-[#0B84F3]/40',
}

const featured = portfolioItems.slice(0, 2)

export default function HomePortfolio() {
  return (
    <section className="section-dark border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-12 flex items-end justify-between">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-3">Portafolio</p>
          <h2
            className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-tight max-w-md"
            style={{ letterSpacing: '-0.02em' }}
          >
            Proyectos que hablan por sí solos.
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link
            href="/portafolio"
            className="hidden sm:inline-flex items-center gap-1.5 text-sm text-white/40 hover:text-white transition-colors duration-200"
          >
            Ver portafolio completo
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {featured.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-3xl overflow-hidden bg-white/[0.04] border border-white/[0.07] hover:border-white/[0.18] transition-[border-color] duration-300"
            >
              {/* Image area */}
              <div
                className={`relative aspect-[16/9] bg-gradient-to-br ${
                  gradientTints[item.imageColor] || 'from-[#0B84F3]/40 to-[#7C3AED]/30'
                }`}
              >
                <div className="absolute top-4 left-4 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-white/30" />
                  <span className="w-2 h-2 rounded-full bg-white/20" />
                  <span className="w-2 h-2 rounded-full bg-white/15" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl font-black text-white/80 tracking-wide">
                    {item.title}
                  </span>
                </div>
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/0 group-hover:bg-white flex items-center justify-center transition-[background-color] duration-300">
                  <ArrowUpRight className="w-4 h-4 text-white group-hover:text-black opacity-0 group-hover:opacity-100 transition-[color,opacity] duration-300" />
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs text-[#0071E3] font-medium uppercase tracking-widest mb-1.5">
                    {item.category}
                  </p>
                  <h3 className="text-xl font-bold text-white mb-2">{item.client}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{item.impact}</p>
                </div>
                <div className="flex flex-wrap gap-1.5 shrink-0 max-w-[120px] justify-end">
                  {item.technologies.slice(0, 2).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded-md bg-white/[0.04] border border-white/[0.06] text-white/40 text-[11px] whitespace-nowrap"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="sm:hidden text-center mt-8">
          <Link
            href="/portafolio"
            className="inline-flex items-center gap-1.5 text-sm text-white/40 hover:text-white transition-colors duration-200"
          >
            Ver portafolio completo <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

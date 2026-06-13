'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { portfolioItems, categories } from '@/data/portfolio'

// Map the design-token gradient strings from the data to concrete tints.
const gradientTints: Record<string, string> = {
  'from-electric via-voBlue to-navy': 'from-[#0B84F3]/40 via-[#2563EB]/25 to-[#071B3A]',
  'from-voPurple via-electric to-voBlue': 'from-[#7C3AED]/40 via-[#0B84F3]/25 to-[#2563EB]/30',
  'from-voBlue via-voPurple to-electric': 'from-[#2563EB]/40 via-[#7C3AED]/25 to-[#0B84F3]/30',
  'from-electric to-voPurple': 'from-[#0B84F3]/40 to-[#7C3AED]/30',
  'from-navy via-voBlue to-electric': 'from-[#071B3A] via-[#2563EB]/25 to-[#0B84F3]/40',
}

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('Todos')

  const filtered =
    activeCategory === 'Todos'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory)

  return (
    <section id="portafolio" className="section-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-32">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-12"
        >
          <span className="tag">Portafolio</span>
          <h2 className="mt-6 text-5xl sm:text-6xl font-black text-white tracking-tight leading-tight">
            Proyectos que hablan por sí solos.
          </h2>
          <p className="mt-6 text-xl text-white/50 leading-relaxed">
            Sistemas, apps y tiendas en línea construidos con tecnología moderna y resultados reales.
          </p>
        </motion.div>

        {/* Filter pills */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              aria-pressed={activeCategory === cat}
              className={`px-4 py-2 rounded-full text-sm transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-white text-black font-medium'
                  : 'border border-white/[0.12] text-white/60 hover:text-white hover:border-white/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="group rounded-3xl overflow-hidden bg-white/[0.02] border border-white/[0.07] hover:border-white/[0.16] transition-all duration-300"
              >
                {/* Thumbnail */}
                <div className={`relative aspect-[16/10] bg-gradient-to-br ${gradientTints[item.imageColor] || 'from-[#0B84F3]/40 to-[#7C3AED]/30'} overflow-hidden`}>
                  {/* subtle window chrome */}
                  <div className="absolute top-4 left-4 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-white/30" />
                    <span className="w-2 h-2 rounded-full bg-white/20" />
                    <span className="w-2 h-2 rounded-full bg-white/15" />
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="px-2.5 py-1 rounded-full bg-black/30 backdrop-blur-sm text-white/70 text-[11px] font-medium border border-white/10">
                      {item.year}
                    </span>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-3xl font-black text-white/80 tracking-wide">{item.title}</span>
                  </div>
                  <div className="absolute bottom-4 right-4 w-9 h-9 rounded-full bg-white/0 group-hover:bg-white flex items-center justify-center transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4 text-white group-hover:text-black opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-xs text-[#0B84F3] font-medium uppercase tracking-widest mb-2">{item.category}</p>
                  <h3 className="text-lg font-bold text-white mb-2">{item.client}</h3>
                  <p className="text-white/45 text-sm leading-relaxed mb-4 line-clamp-3">{item.description}</p>
                  <p className="text-white/65 text-sm leading-relaxed mb-4">
                    <span className="text-white font-medium">Impacto:</span> {item.impact}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {item.technologies.slice(0, 4).map((tech) => (
                      <span key={tech} className="px-2 py-0.5 rounded-md bg-white/[0.04] border border-white/[0.06] text-white/40 text-[11px]">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

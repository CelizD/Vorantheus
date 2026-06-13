'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { BrowserMockup, DashboardMockup, PhoneMockup } from '@/components/mockups'

const tiles = [
  {
    tag: 'Páginas web & E-commerce',
    headline: 'Tu negocio en internet, hecho en serio.',
    body: 'Diseño profesional, carga rápida y optimizado para convertir visitas en clientes.',
    href: '/servicios',
    bg: 'bg-[#0D1117]',
    mockup: <BrowserMockup />,
    glow: 'bg-[#0B84F3]/10',
  },
  {
    tag: 'Sistemas administrativos',
    headline: 'Automatiza y organiza tu empresa.',
    body: 'Paneles a medida con inventario, ventas, clientes, reportes y accesos por rol.',
    href: '/servicios',
    bg: 'bg-[#071B3A]',
    mockup: <DashboardMockup />,
    glow: 'bg-[#2563EB]/10',
  },
  {
    tag: 'Aplicaciones móviles',
    headline: 'Una app con tu marca en el bolsillo de tu cliente.',
    body: 'Android e iPhone. Login, notificaciones, pagos, mapas y panel de administración.',
    href: '/servicios',
    bg: 'bg-[#0a0414]',
    mockup: (
      <div className="flex justify-center">
        <PhoneMockup />
      </div>
    ),
    glow: 'bg-[#7C3AED]/10',
  },
]

export default function HomeServices() {
  return (
    <section id="servicios" className="section-dark border-t border-white/[0.06]">
      {/* Section label */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-12 flex items-end justify-between">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-3">Qué hacemos</p>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-tight max-w-md">
            Soluciones digitales a medida.
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link
            href="/servicios"
            className="hidden sm:inline-flex items-center gap-1.5 text-sm text-[#0B84F3] hover:text-white transition-colors duration-200"
          >
            Ver todos los servicios
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>

      {/* Tiles grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {tiles.map((tile, i) => (
            <motion.div
              key={tile.tag}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                href={tile.href}
                className={`group relative flex flex-col rounded-3xl overflow-hidden ${tile.bg} border border-white/[0.07] hover:border-white/[0.18] transition-all duration-300 min-h-[480px]`}
              >
                {/* Glow */}
                <div className={`absolute inset-0 ${tile.glow} blur-3xl pointer-events-none`} />

                {/* Text top */}
                <div className="relative z-10 p-8 flex flex-col gap-4 flex-1">
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#0B84F3]">{tile.tag}</p>
                  <h3 className="text-2xl font-bold text-white leading-snug">{tile.headline}</h3>
                  <p className="text-white/45 text-sm leading-relaxed">{tile.body}</p>
                  <div className="mt-auto inline-flex items-center gap-1.5 text-sm text-white/50 group-hover:text-white transition-colors duration-200">
                    Saber más
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                  </div>
                </div>

                {/* Mockup bottom */}
                <div className="relative z-10 px-6 pb-0 flex items-end justify-center overflow-hidden" style={{ minHeight: 200 }}>
                  <div className="w-full scale-90 origin-bottom opacity-80 group-hover:opacity-100 group-hover:scale-95 transition-all duration-500">
                    {tile.mockup}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Mobile "ver todos" link */}
        <div className="sm:hidden text-center mt-8">
          <Link href="/servicios" className="inline-flex items-center gap-1.5 text-sm text-[#0B84F3] hover:text-white transition-colors duration-200">
            Ver todos los servicios <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { BrowserMockup, DashboardMockup, PhoneMockup } from '@/components/mockups'

const tiles = [
  {
    category: 'Páginas web & E-commerce',
    headline: 'Tu negocio en internet, hecho en serio.',
    body: 'Diseño profesional, carga rápida y optimizado para convertir visitas en clientes reales.',
    href: '/servicios',
    gradientArea: 'bg-gradient-to-br from-blue-50 to-blue-100',
    mockup: <BrowserMockup />,
  },
  {
    category: 'Sistemas administrativos',
    headline: 'Automatiza y organiza tu empresa.',
    body: 'Paneles a medida con inventario, ventas, clientes, reportes y accesos por rol.',
    href: '/servicios',
    gradientArea: 'bg-gradient-to-br from-slate-50 to-slate-100',
    mockup: <DashboardMockup />,
  },
  {
    category: 'Aplicaciones móviles',
    headline: 'Tu marca en el bolsillo de tu cliente.',
    body: 'Android e iPhone. Login, notificaciones, pagos, mapas y panel de administración.',
    href: '/servicios',
    gradientArea: 'bg-gradient-to-br from-purple-50 to-purple-100',
    mockup: (
      <div className="flex justify-center">
        <PhoneMockup />
      </div>
    ),
  },
]

export default function HomeServices() {
  return (
    <section id="servicios" className="section-light">
      {/* Section header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs font-medium uppercase tracking-widest text-muted mb-4">Qué hacemos</p>
          <h2
            className="text-4xl sm:text-5xl font-black text-ink tracking-tight leading-tight max-w-md"
            style={{ letterSpacing: '-0.02em' }}
          >
            Soluciones digitales a medida.
          </h2>
          <p className="mt-4 text-muted text-lg max-w-md leading-relaxed">
            Creamos software profesional adaptado a las necesidades reales de tu negocio.
          </p>
          <Link
            href="/servicios"
            className="mt-4 inline-flex items-center gap-1 text-[#0071E3] text-sm font-medium hover:underline"
          >
            Ver todos los servicios
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </motion.div>
      </div>

      {/* Cards grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {tiles.map((tile, i) => (
            <motion.div
              key={tile.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                href={tile.href}
                className="group flex flex-col bg-white rounded-3xl overflow-hidden shadow-card hover:shadow-medium border border-black/[0.04] hover:-translate-y-1 transition-all duration-300"
              >
                {/* Gradient area with mockup */}
                <div
                  className={`relative h-52 ${tile.gradientArea} flex items-center justify-center overflow-hidden`}
                >
                  <div className="w-full scale-75 origin-center opacity-90 group-hover:opacity-100 group-hover:scale-80 transition-all duration-500">
                    {tile.mockup}
                  </div>
                </div>

                {/* Card content */}
                <div className="p-8 flex flex-col flex-1">
                  <p className="text-xs font-medium uppercase tracking-widest text-[#0071E3] mb-3">
                    {tile.category}
                  </p>
                  <h3 className="text-2xl font-bold text-ink leading-snug mb-3">
                    {tile.headline}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed flex-1">
                    {tile.body}
                  </p>
                  <div className="mt-4 inline-flex items-center gap-1 text-sm text-[#0071E3] font-medium group-hover:gap-2 transition-all duration-200">
                    Saber más
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Mobile "ver todos" link */}
        <div className="lg:hidden text-center mt-8">
          <Link
            href="/servicios"
            className="inline-flex items-center gap-1.5 text-sm text-[#0071E3] hover:underline"
          >
            Ver todos los servicios <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

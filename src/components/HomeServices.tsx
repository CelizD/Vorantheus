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
    accentColor: 'rgba(0,113,227,0.15)',
    mockup: <BrowserMockup />,
  },
  {
    category: 'Sistemas administrativos',
    headline: 'Automatiza y organiza tu empresa.',
    body: 'Paneles a medida con inventario, ventas, clientes, reportes y accesos por rol.',
    href: '/servicios',
    accentColor: 'rgba(100,100,100,0.12)',
    mockup: <DashboardMockup />,
  },
  {
    category: 'Aplicaciones móviles',
    headline: 'Tu marca en el bolsillo de tu cliente.',
    body: 'Android e iPhone. Login, notificaciones, pagos, mapas y panel de administración.',
    href: '/servicios',
    accentColor: 'rgba(124,58,237,0.15)',
    mockup: (
      <div className="flex justify-center">
        <PhoneMockup />
      </div>
    ),
  },
]

export default function HomeServices() {
  return (
    <section id="servicios" style={{ background: '#050505' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs font-medium uppercase tracking-widest text-white/30 mb-4">Qué hacemos</p>
          <h2
            className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-tight max-w-md"
            style={{ letterSpacing: '-0.02em' }}
          >
            Soluciones digitales <span className="gradient-text">a medida.</span>
          </h2>
          <p className="mt-4 text-white/40 text-lg max-w-md leading-relaxed">
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

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
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
                className="group flex flex-col glass rounded-3xl overflow-hidden hover:-translate-y-1 transition-all duration-300"
              >
                {/* Mockup area */}
                <div
                  className="relative h-52 flex items-center justify-center overflow-hidden"
                  style={{ background: tile.accentColor }}
                >
                  <div className="w-full scale-75 origin-center opacity-80 group-hover:opacity-100 group-hover:scale-80 transition-all duration-500">
                    {tile.mockup}
                  </div>
                </div>

                {/* Card content */}
                <div className="p-8 flex flex-col flex-1">
                  <p className="text-xs font-medium uppercase tracking-widest text-[#0071E3] mb-3">
                    {tile.category}
                  </p>
                  <h3 className="text-2xl font-bold text-white leading-snug mb-3">
                    {tile.headline}
                  </h3>
                  <p className="text-sm text-white/40 leading-relaxed flex-1">
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

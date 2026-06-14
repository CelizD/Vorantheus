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
    gradientArea: 'bg-gradient-to-br from-blue-50 to-blue-100/60',
    mockup: <BrowserMockup />,
    // Bento layout — wide tile spanning 2 cols, mockup + text side by side
    span: 'lg:col-span-2',
    wide: true,
  },
  {
    category: 'Sistemas administrativos',
    headline: 'Automatiza y organiza tu empresa.',
    body: 'Paneles a medida con inventario, ventas, clientes, reportes y accesos por rol.',
    href: '/servicios',
    gradientArea: 'bg-gradient-to-br from-stone-50 to-stone-100/60',
    mockup: <DashboardMockup />,
    span: 'lg:col-span-1',
    wide: false,
  },
  {
    category: 'Aplicaciones móviles',
    headline: 'Tu marca en el bolsillo de tu cliente.',
    body: 'Android e iPhone. Login, notificaciones, pagos, mapas y panel de administración.',
    href: '/servicios',
    gradientArea: 'bg-gradient-to-br from-stone-50 to-blue-50/40',
    mockup: (
      <div className="flex justify-center">
        <PhoneMockup />
      </div>
    ),
    // Full-width tile closing the bento, mockup + text side by side
    span: 'lg:col-span-3',
    wide: true,
  },
]

export default function HomeServices() {
  return (
    <section id="servicios" style={{ background: '#F7F4EF' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs font-medium uppercase tracking-widest text-[#9B9890] mb-4">Qué hacemos</p>
          <h2
            className="text-4xl sm:text-5xl font-black text-[#1C1B18] tracking-tight leading-tight max-w-md"
            style={{ letterSpacing: '-0.02em' }}
          >
            Soluciones digitales a medida.
          </h2>
          <p className="mt-4 text-[#6B6860] text-lg max-w-md leading-relaxed">
            Creamos software profesional adaptado a las necesidades reales de tu negocio.
          </p>
          <Link
            href="/servicios"
            className="mt-4 inline-flex items-center gap-1 text-[#1C1B18] text-sm font-medium hover:underline"
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
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.23, 1, 0.32, 1] }}
              className={tile.span}
            >
              <Link
                href={tile.href}
                className={`group h-full bg-white rounded-3xl overflow-hidden border border-[#E6E0D6] hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-[transform,box-shadow] duration-300 ${
                  tile.wide ? 'grid lg:grid-cols-2 items-stretch' : 'flex flex-col'
                }`}
              >
                <div
                  className={`relative ${tile.wide ? 'h-52 lg:h-auto lg:min-h-[300px]' : 'h-52'} ${tile.gradientArea} flex items-center justify-center overflow-hidden`}
                >
                  <div className="w-full scale-75 origin-center opacity-90 group-hover:opacity-100 group-hover:scale-[0.8] transition-[transform,opacity] duration-500">
                    {tile.mockup}
                  </div>
                </div>

                <div className="p-8 flex flex-col flex-1 lg:justify-center">
                  <p className="text-xs font-medium uppercase tracking-widest text-[#1C1B18] mb-3">
                    {tile.category}
                  </p>
                  <h3 className={`font-bold text-[#1C1B18] leading-snug mb-3 ${tile.wide ? 'text-2xl lg:text-3xl max-w-sm' : 'text-2xl'}`}>
                    {tile.headline}
                  </h3>
                  <p className={`text-sm text-[#6B6860] leading-relaxed ${tile.wide ? 'max-w-md' : 'flex-1'}`}>
                    {tile.body}
                  </p>
                  <div className="mt-4 inline-flex items-center gap-1 text-sm text-[#1C1B18] font-medium group-hover:gap-2 transition-[gap] duration-200">
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
            className="inline-flex items-center gap-1.5 text-sm text-[#1C1B18] hover:underline"
          >
            Ver todos los servicios <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

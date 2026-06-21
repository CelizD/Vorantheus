import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { technologies } from '@/data/technologies'
import { technologyLogos } from '@/data/technologyLogos'

export const metadata: Metadata = {
  title: 'Tecnologías | Vorantheus',
  description:
    'Conoce las tecnologías que usamos para construir sitios web, sistemas, aplicaciones móviles, automatizaciones e infraestructura moderna.',
  alternates: { canonical: '/tecnologias' },
  openGraph: {
    title: 'Tecnologías | Vorantheus',
    description:
      'React, Next.js, TypeScript, Supabase, PostgreSQL, IA y más tecnologías usadas en proyectos profesionales.',
    url: '/tecnologias',
  },
}

export default function TecnologiasPage() {
  return (
    <>
      <Navbar />

      <main style={{ background: '#F7F4EF' }}>
        <section style={{ background: '#1C1B18' }} className="pt-32 pb-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl">
              <span
                className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-widest border mb-6"
                style={{
                  color: 'rgba(255,255,255,0.5)',
                  background: 'rgba(255,255,255,0.06)',
                  borderColor: 'rgba(255,255,255,0.12)',
                }}
              >
                Stack tecnológico
              </span>
              <h1
                className="text-5xl sm:text-7xl font-black text-white tracking-tight"
                style={{ letterSpacing: '-0.03em', lineHeight: 1.04 }}
              >
                Tecnologías que sostienen productos reales.
              </h1>
              <p className="mt-6 text-xl text-white/50 leading-relaxed max-w-2xl">
                Estas son las herramientas que usamos para construir software rápido,
                mantenible y preparado para crecer.
              </p>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {technologies.map((tech) => {
              const logo = technologyLogos[tech.name]

              return (
                <Link
                  key={tech.slug}
                  href={`/tecnologias/${tech.slug}`}
                  className="group bg-white border border-[#E6E0D6] rounded-3xl p-7 min-h-[260px] flex flex-col justify-between hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] transition-[transform,box-shadow] duration-300"
                >
                  <div>
                    <div className="mb-6 flex items-start justify-between gap-4">
                      <p className="text-xs font-semibold uppercase tracking-widest text-[#9B9890]">
                        Tecnología
                      </p>
                      {logo && (
                        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#E6E0D6] bg-[#F7F4EF] transition-transform duration-300 group-hover:scale-110">
                          <Image
                            src={`/technologies/${logo}`}
                            alt={`${tech.name} logo`}
                            width={32}
                            height={32}
                            className="h-8 w-8 object-contain"
                            unoptimized
                          />
                        </span>
                      )}
                    </div>
                    <h2 className="text-3xl font-black text-[#1C1B18] tracking-tight">
                      {tech.name}
                    </h2>
                    <p className="mt-4 text-sm text-[#1C1B18]/60 leading-relaxed">
                      {tech.tagline}
                    </p>
                  </div>
                  <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#0071E3] group-hover:gap-3 transition-[gap] duration-200">
                    Ver detalle
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              )
            })}
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

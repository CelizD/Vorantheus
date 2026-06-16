import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import { portfolioItems } from '@/data/portfolio'

const gradientTints: Record<string, string> = {
  'from-electric via-voBlue to-navy': 'from-[#0B84F3]/40 via-[#2563EB]/25 to-[#071B3A]',
  'from-voPurple via-electric to-voBlue': 'from-[#7C3AED]/40 via-[#0B84F3]/25 to-[#2563EB]/30',
  'from-voBlue via-voPurple to-electric': 'from-[#2563EB]/40 via-[#7C3AED]/25 to-[#0B84F3]/30',
  'from-electric to-voPurple': 'from-[#0B84F3]/40 to-[#7C3AED]/30',
  'from-navy via-voBlue to-electric': 'from-[#071B3A] via-[#2563EB]/25 to-[#0B84F3]/40',
}

export async function generateStaticParams() {
  return portfolioItems.map((p) => ({ slug: p.id }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const project = portfolioItems.find((p) => p.id === slug)
  if (!project) return {}
  return {
    title: `${project.title} | Portafolio | Vorantheus`,
    description: project.description,
    alternates: { canonical: `/portafolio/${slug}` },
    openGraph: {
      title: `${project.title} | Vorantheus`,
      description: project.description,
      url: `/portafolio/${slug}`,
    },
  }
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = portfolioItems.find((p) => p.id === slug)
  if (!project) notFound()

  const tint = gradientTints[project.imageColor] || 'from-[#0B84F3]/40 to-[#7C3AED]/30'

  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="relative section-dark overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 60% 60% at 30% 40%, rgba(0,113,227,0.12) 0%, transparent 65%)',
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-36 pb-24">
          <Link
            href="/portafolio"
            className="inline-flex items-center gap-1.5 text-white/40 hover:text-white/70 text-sm transition-colors mb-8"
          >
            ← Ver todos los proyectos
          </Link>
          <span className="inline-block px-3 py-1 rounded-full bg-[#0071E3]/20 text-[#4DA3F5] text-xs font-medium mb-4">
            {project.category}
          </span>
          <h1
            className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-6"
            style={{ letterSpacing: '-0.02em' }}
          >
            {project.title}
          </h1>
          <p className="text-xl text-white/50 max-w-2xl leading-relaxed">{project.description}</p>
          <div className="flex items-center gap-4 mt-8">
            <span className="text-white/30 text-sm">{project.client}</span>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <span className="text-white/30 text-sm">{project.year}</span>
          </div>
        </div>
      </section>

      {/* Visual mockup */}
      <section className={`h-64 sm:h-80 bg-gradient-to-br ${tint} flex items-center justify-center`}>
        <span className="text-5xl font-black text-white/50 tracking-wide">{project.title}</span>
      </section>

      {/* Problem & Solution */}
      {(project.problem || project.solution) && (
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 gap-12">
              {project.problem && (
                <div>
                  <p className="text-xs text-[#0071E3] font-semibold uppercase tracking-widest mb-4">
                    El desafío
                  </p>
                  <p className="text-[#1C1B18] text-lg leading-relaxed">{project.problem}</p>
                </div>
              )}
              {project.solution && (
                <div>
                  <p className="text-xs text-[#0071E3] font-semibold uppercase tracking-widest mb-4">
                    La solución
                  </p>
                  <p className="text-[#1C1B18] text-lg leading-relaxed">{project.solution}</p>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Results */}
      {project.results && project.results.length > 0 && (
        <section className="py-20 bg-[#F7F4EF]">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-xs text-[#0071E3] font-semibold uppercase tracking-widest mb-4">
              Resultados
            </p>
            <h2 className="text-3xl font-black text-[#1C1B18] mb-8" style={{ letterSpacing: '-0.02em' }}>
              Qué se logró
            </h2>
            <ul className="grid sm:grid-cols-2 gap-4">
              {project.results.map((r) => (
                <li key={r} className="flex items-start gap-3 bg-white rounded-2xl p-5 border border-[#E6E0D6]">
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-[#0071E3]/10 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-[#0071E3]" />
                  </span>
                  <span className="text-[#6B6860] leading-relaxed text-sm">{r}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Technologies */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs text-[#0071E3] font-semibold uppercase tracking-widest mb-4">
            Tecnologías
          </p>
          <h2 className="text-2xl font-black text-[#1C1B18] mb-6">Stack utilizado</h2>
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-xl bg-[#F7F4EF] border border-[#E6E0D6] text-[#1C1B18] text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 section-dark">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <div className="bg-white/[0.03] border border-white/[0.08] rounded-3xl p-12">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4" style={{ letterSpacing: '-0.02em' }}>
              ¿Quieres algo similar?
            </h2>
            <p className="text-white/50 text-lg leading-relaxed mb-8 max-w-xl mx-auto">
              Cuéntanos tu proyecto y creamos algo a la medida de tu negocio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/cotizar"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0071E3] hover:bg-[#0077ED] text-white font-semibold rounded-full transition-colors duration-200 active:scale-[0.97]"
              >
                Cotizar mi proyecto
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/portafolio"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white hover:bg-white/5 font-semibold transition-colors duration-200"
              >
                Ver más proyectos
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

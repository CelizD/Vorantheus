import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowRight, ArrowLeft, CheckCircle } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { technologies, getTechnology } from '@/data/technologies'
import { getWhatsAppUrl } from '@/lib/site'

type PageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return technologies.map((t) => ({ slug: t.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const tech = getTechnology(slug)
  if (!tech) return {}

  return {
    title: `${tech.name} | Tecnología | Vorantheus`,
    description: `Qué es ${tech.name}, para qué sirve y cómo lo usa Vorantheus en proyectos profesionales de software.`,
    alternates: { canonical: `/tecnologias/${tech.slug}` },
    openGraph: {
      title: `${tech.name} — ${tech.tagline}`,
      description: `Qué es ${tech.name}, para qué sirve y cómo lo usa Vorantheus en proyectos profesionales de software.`,
      url: `/tecnologias/${tech.slug}`,
    },
  }
}

export default async function TechnologyPage({ params }: PageProps) {
  const { slug } = await params
  const tech = getTechnology(slug)
  if (!tech) notFound()

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section style={{ background: '#1C1B18' }} className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Link
            href="/#tecnologias"
            className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white/70 transition-colors duration-200 mb-12"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver a tecnologías
          </Link>

          <div className="max-w-3xl">
            <span
              className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-widest border mb-6"
              style={{
                color: 'rgba(255,255,255,0.5)',
                background: 'rgba(255,255,255,0.06)',
                borderColor: 'rgba(255,255,255,0.12)',
              }}
            >
              Tecnología
            </span>
            <h1
              className="text-6xl sm:text-7xl font-black text-white tracking-tight"
              style={{ letterSpacing: '-0.03em', lineHeight: 1.04 }}
            >
              {tech.name}
            </h1>
            <p className="mt-6 text-xl text-white/50 leading-relaxed max-w-2xl">
              {tech.tagline}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <main style={{ background: '#F7F4EF' }}>

        {/* ¿Qué es? */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20 border-b border-[#E6E0D6]">
          <div className="grid lg:grid-cols-[280px_1fr] gap-16">
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-widest text-[#9B9890]">
                ¿Qué es?
              </h2>
            </div>
            <div className="space-y-5">
              {tech.description.map((paragraph, i) => (
                <p key={i} className="text-lg text-[#1C1B18]/75 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* ¿Para qué sirve? */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20 border-b border-[#E6E0D6]">
          <div className="grid lg:grid-cols-[280px_1fr] gap-16">
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-widest text-[#9B9890]">
                ¿Para qué sirve?
              </h2>
            </div>
            <ul className="space-y-4">
              {tech.useCases.map((useCase) => (
                <li key={useCase} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#0071E3] flex-shrink-0 mt-0.5" />
                  <span className="text-[#1C1B18]/75 leading-relaxed">{useCase}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Por qué la usamos */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20 border-b border-[#E6E0D6]">
          <div className="grid lg:grid-cols-[280px_1fr] gap-16">
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-widest text-[#9B9890]">
                Por qué la usamos
              </h2>
            </div>
            <div>
              <p className="text-lg text-[#1C1B18]/75 leading-relaxed">{tech.whyWeUseIt}</p>
            </div>
          </div>
        </section>

        {/* Beneficios para tu negocio */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20 border-b border-[#E6E0D6]">
          <div className="grid lg:grid-cols-[280px_1fr] gap-16">
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-widest text-[#9B9890]">
                Beneficios para tu negocio
              </h2>
            </div>
            <ul className="space-y-4">
              {tech.businessBenefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0071E3] flex-shrink-0 mt-2.5" />
                  <span className="text-[#1C1B18]/75 leading-relaxed">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Cómo la usamos en Vorantheus */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20 border-b border-[#E6E0D6]">
          <div className="grid lg:grid-cols-[280px_1fr] gap-16">
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-widest text-[#9B9890]">
                En Vorantheus
              </h2>
            </div>
            <ul className="space-y-3">
              {tech.vorantheusCases.map((c) => (
                <li key={c} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#1C1B18]/30 flex-shrink-0 mt-2.5" />
                  <span className="text-[#1C1B18]/75 leading-relaxed">{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Ejemplos prácticos */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20 border-b border-[#E6E0D6]">
          <div className="grid lg:grid-cols-[280px_1fr] gap-16">
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-widest text-[#9B9890]">
                Ejemplos prácticos
              </h2>
            </div>
            <div className="space-y-6">
              {tech.examples.map((example) => (
                <div
                  key={example.title}
                  className="p-6 rounded-2xl border border-[#E6E0D6] bg-white"
                >
                  <h3 className="font-semibold text-[#1C1B18] mb-2">{example.title}</h3>
                  <p className="text-[#1C1B18]/60 leading-relaxed text-sm">{example.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-black text-[#1C1B18] tracking-tight" style={{ letterSpacing: '-0.02em' }}>
              ¿Quieres usar {tech.name} en tu proyecto?
            </h2>
            <p className="mt-4 text-lg text-[#1C1B18]/60 leading-relaxed">
              Cuéntanos tu idea y te enviamos una propuesta técnica detallada en menos de 24 horas. La consulta es gratis.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/cotizar"
                className="group inline-flex items-center gap-2 px-7 py-3.5 bg-[#0071E3] hover:bg-[#0077ED] text-white font-semibold text-base rounded-full transition-colors duration-200 active:scale-[0.97]"
              >
                Cotizar proyecto gratis
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <a
                href={getWhatsAppUrl(`Hola, quiero hablar sobre un proyecto con ${tech.name}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-[#1C1B18]/20 hover:border-[#1C1B18]/40 text-[#1C1B18] font-medium text-base rounded-full transition-all duration-200 hover:bg-[#1C1B18]/5 active:scale-[0.97]"
              >
                WhatsApp directo
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

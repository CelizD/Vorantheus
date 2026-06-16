import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { ArrowRight, Check, Globe, Layout, ShoppingCart, Database, Smartphone, Bot, Wrench } from 'lucide-react'
import { services } from '@/data/services'
import { servicesExtended } from '@/data/services-extended'

const iconMap: Record<string, React.ElementType> = {
  Globe, Layout, ShoppingCart, Database, Smartphone, Bot, Wrench,
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.id }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const service = services.find((s) => s.id === slug)
  const extended = servicesExtended[slug]
  if (!service || !extended) return {}
  return {
    title: `${service.title} | Vorantheus`,
    description: service.description,
    alternates: { canonical: `/servicios/${slug}` },
    openGraph: {
      title: `${service.title} | Vorantheus`,
      description: service.description,
      url: `/servicios/${slug}`,
    },
  }
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = services.find((s) => s.id === slug)
  const extended = servicesExtended[slug]
  if (!service || !extended) notFound()

  const Icon = iconMap[service.icon] ?? Globe
  const quoteHref = `/cotizar?tipo=${encodeURIComponent(service.title)}&origen=servicios-detalle:${slug}`

  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="relative section-dark overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 60% 60% at 30% 40%, rgba(0,113,227,0.12) 0%, transparent 65%)',
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-36 pb-24">
          <Link
            href="/servicios"
            className="inline-flex items-center gap-1.5 text-white/40 hover:text-white/70 text-sm transition-colors mb-8"
          >
            ← Todos los servicios
          </Link>
          <div className="flex items-center gap-4 mb-6">
            <div
              className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center`}
            >
              <Icon className="w-7 h-7 text-white" />
            </div>
          </div>
          <h1
            className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-6"
            style={{ letterSpacing: '-0.02em' }}
          >
            {service.title}
          </h1>
          <p className="text-xl text-white/50 max-w-2xl leading-relaxed mb-4">{extended.tagline}</p>
          <div className="flex flex-wrap gap-4 mt-8">
            <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/60 text-sm">
              {extended.priceFrom}
            </span>
            <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/60 text-sm">
              {extended.timeFrom}
            </span>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-20 bg-white border-b border-black/[0.04]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs text-[#0071E3] font-semibold uppercase tracking-widest mb-4">El problema</p>
          <p className="text-2xl sm:text-3xl text-[#1C1B18] font-medium leading-relaxed">
            {extended.problem}
          </p>
        </div>
      </section>

      {/* Benefits + Features */}
      <section className="py-24 bg-[#F7F4EF]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Benefits */}
            <div>
              <p className="text-xs text-[#0071E3] font-semibold uppercase tracking-widest mb-4">
                Beneficios
              </p>
              <h2 className="text-3xl sm:text-4xl font-black text-[#1C1B18] mb-8" style={{ letterSpacing: '-0.02em' }}>
                Por qué contratar este servicio
              </h2>
              <ul className="space-y-4">
                {extended.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <span className="mt-0.5 w-5 h-5 rounded-full bg-[#0071E3]/10 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-[#0071E3]" />
                    </span>
                    <span className="text-[#6B6860] leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Features / Deliverables */}
            <div>
              <p className="text-xs text-[#0071E3] font-semibold uppercase tracking-widest mb-4">
                Qué incluye
              </p>
              <h2 className="text-3xl sm:text-4xl font-black text-[#1C1B18] mb-8" style={{ letterSpacing: '-0.02em' }}>
                Entregables del proyecto
              </h2>
              <div className="bg-white rounded-3xl p-6 border border-black/[0.04] shadow-card">
                <ul className="space-y-3">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 py-2 border-b border-black/[0.04] last:border-0">
                      <span className="text-[#0071E3] mt-0.5 shrink-0">→</span>
                      <span className="text-[#6B6860] text-sm leading-relaxed">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs text-[#0071E3] font-semibold uppercase tracking-widest mb-4">
            Proceso de desarrollo
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-[#1C1B18] mb-12" style={{ letterSpacing: '-0.02em' }}>
            Cómo trabajamos
          </h2>
          <div className="space-y-0">
            {extended.process.map((step, i) => (
              <div key={step.step} className="flex gap-6 pb-10 last:pb-0">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-[#0071E3] flex items-center justify-center shrink-0 text-white font-bold text-sm">
                    {i + 1}
                  </div>
                  {i < extended.process.length - 1 && (
                    <div className="w-px flex-1 mt-3 bg-[#E6E0D6]" />
                  )}
                </div>
                <div className="pt-2 pb-8">
                  <h3 className="text-lg font-bold text-[#1C1B18] mb-2">{step.step}</h3>
                  <p className="text-[#6B6860] leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-16 bg-[#F7F4EF]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs text-[#0071E3] font-semibold uppercase tracking-widest mb-4">
            Tecnologías
          </p>
          <h2 className="text-2xl font-black text-[#1C1B18] mb-6">Stack tecnológico</h2>
          <div className="flex flex-wrap gap-3">
            {service.features.slice(0, 0).concat(
              // Use idealFor text area to show the tech stack
              []
            )}
            {/* Tech tags from idealFor context — use hardcoded tech per service */}
            {['Next.js', 'TypeScript', 'React', 'Tailwind CSS', 'Supabase', 'PostgreSQL']
              .slice(0, 5)
              .map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-xl bg-white border border-[#E6E0D6] text-[#1C1B18] text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
          </div>
          <p className="mt-4 text-[#6B6860] text-sm">{service.idealFor}</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <p className="text-xs text-[#0071E3] font-semibold uppercase tracking-widest mb-4">FAQ</p>
          <h2 className="text-3xl sm:text-4xl font-black text-[#1C1B18] mb-12" style={{ letterSpacing: '-0.02em' }}>
            Preguntas frecuentes
          </h2>
          <div className="space-y-6">
            {extended.faqs.map((faq) => (
              <div key={faq.q} className="border-b border-[#E6E0D6] pb-6">
                <h3 className="text-lg font-bold text-[#1C1B18] mb-3">{faq.q}</h3>
                <p className="text-[#6B6860] leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 section-dark">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <div className="bg-white/[0.03] border border-white/[0.08] rounded-3xl p-12">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4" style={{ letterSpacing: '-0.02em' }}>
              ¿Listo para empezar?
            </h2>
            <p className="text-white/50 text-lg leading-relaxed mb-8 max-w-xl mx-auto">
              Cuéntanos tu proyecto y te damos una cotización sin compromiso en menos de 24 horas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={quoteHref}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0071E3] hover:bg-[#0077ED] text-white font-semibold rounded-full transition-colors duration-200 active:scale-[0.97]"
              >
                Cotizar {service.title}
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/servicios"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white hover:bg-white/5 font-semibold transition-colors duration-200"
              >
                Ver todos los servicios
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

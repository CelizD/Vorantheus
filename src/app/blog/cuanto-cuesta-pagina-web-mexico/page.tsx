import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: '¿Cuánto cuesta hacer una página web en México en 2025? | Vorantheus',
  description:
    'Guía completa de precios reales para páginas web profesionales en México. Qué factores afectan el costo y cómo no pagar de más.',
  alternates: { canonical: '/blog/cuanto-cuesta-pagina-web-mexico' },
  openGraph: {
    title: '¿Cuánto cuesta hacer una página web en México en 2025?',
    description:
      'Guía completa de precios reales para páginas web profesionales en México. Qué factores afectan el costo y cómo no pagar de más.',
    url: '/blog/cuanto-cuesta-pagina-web-mexico',
  },
}

export default function ArticleCuantoCuesta() {
  return (
    <>
      <Navbar />

      {/* Mini Dark Hero */}
      <section className="relative bg-black overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 60% 60% at 30% 40%, rgba(0,113,227,0.10) 0%, transparent 65%)',
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8 pt-36 pb-20 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1 text-white/40 hover:text-white/70 text-sm mb-6 transition-colors duration-200"
          >
            ← Volver al Blog
          </Link>
          <p className="text-[#0071E3] text-xs font-semibold uppercase tracking-widest mb-4">
            Precios
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-5 leading-tight">
            ¿Cuánto cuesta hacer una página web en México en 2025?
          </h1>
          <p className="text-white/40 text-sm">
            1 de junio de 2025 · 8 min de lectura
          </p>
        </div>
      </section>

      {/* Article Body */}
      <section className="bg-[#F5F5F7] py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-white rounded-3xl p-10 shadow-card border border-black/[0.04]">

            <p className="text-[#6E6E73] leading-relaxed mb-5">
              Si alguna vez has buscado cuánto cuesta una página web en México, probablemente recibiste respuestas que van desde &quot;$3,000 pesos&quot; hasta &quot;$300,000 pesos&quot;. La brecha es enorme y confusa. En esta guía te explicamos exactamente qué determina el precio, qué deberías esperar pagar y cómo evitar que te cobren de más — o de menos.
            </p>

            <h2 className="text-2xl font-bold text-[#1D1D1F] mb-4 mt-10">
              ¿Por qué es tan difícil saber el precio?
            </h2>
            <p className="text-[#6E6E73] leading-relaxed mb-5">
              El problema principal es que &quot;página web&quot; puede significar cosas completamente distintas según quién lo diga. Una página web puede ser un sitio de una sola página estático hecho con una plantilla de WordPress, o puede ser una plataforma compleja con tienda en línea, sistema de membresías, integración con CRM y SEO técnico avanzado. El precio de una cosa tiene muy poco que ver con el precio de la otra.
            </p>
            <p className="text-[#6E6E73] leading-relaxed mb-5">
              A esto hay que sumarle que el mercado mexicano es muy fragmentado: hay estudiantes freelance, agencias grandes, agencias boutique y desarrolladores internacionales compitiendo al mismo tiempo. Cada uno cobra diferente y entrega diferente.
            </p>

            <h2 className="text-2xl font-bold text-[#1D1D1F] mb-4 mt-10">
              ¿Cuánto cuesta una página web básica?
            </h2>
            <p className="text-[#6E6E73] leading-relaxed mb-5">
              Aquí están los rangos reales que verás en el mercado mexicano en 2025:
            </p>
            <ul className="mb-5 flex flex-col gap-3">
              {[
                { rango: '$5,000 – $15,000 MXN', desc: 'Plantilla de WordPress o Wix con personalización mínima. Ideal para negocios que recién empiezan y necesitan presencia online básica.' },
                { rango: '$15,000 – $40,000 MXN', desc: 'Diseño personalizado con identidad propia, secciones optimizadas y SEO básico. El punto dulce para la mayoría de las pymes.' },
                { rango: '$40,000 – $100,000 MXN', desc: 'Sitios con tienda en línea, sistema de reservas, blog robusto, integraciones con sistemas externos o aplicaciones web a medida.' },
                { rango: '$100,000+ MXN', desc: 'Plataformas complejas, marketplaces, sistemas administrativos integrados o proyectos de largo plazo con equipo dedicado.' },
              ].map((item) => (
                <li key={item.rango} className="flex gap-3">
                  <span className="mt-1.5 w-2 h-2 min-w-[8px] rounded-full bg-[#0071E3]" />
                  <span className="text-[#6E6E73] text-sm leading-relaxed">
                    <strong className="text-[#1D1D1F]">{item.rango}:</strong> {item.desc}
                  </span>
                </li>
              ))}
            </ul>

            <h2 className="text-2xl font-bold text-[#1D1D1F] mb-4 mt-10">
              Factores que afectan el precio
            </h2>
            <p className="text-[#6E6E73] leading-relaxed mb-5">
              No todos los proyectos son iguales. Estos son los factores que más impactan el costo final:
            </p>
            <ul className="mb-5 flex flex-col gap-3">
              {[
                { factor: 'Complejidad del diseño', desc: 'Un diseño de plantilla cuesta menos que uno creado desde cero con identidad visual propia, animaciones y experiencia de usuario pulida.' },
                { factor: 'Funcionalidades', desc: 'Blog, formularios de contacto, tienda en línea, sistema de citas, membresías, chat en vivo... cada función agrega costo y tiempo de desarrollo.' },
                { factor: 'SEO técnico', desc: 'La optimización para buscadores va más allá de poner palabras clave. Velocidad de carga, estructura de URL, schema markup, Core Web Vitals: todo tiene costo.' },
                { factor: 'CMS y facilidad de edición', desc: '¿Necesitas actualizar el contenido tú mismo? Un CMS bien implementado agrega tiempo de configuración pero te ahorra dinero a largo plazo.' },
                { factor: 'Integraciones externas', desc: 'Conectar tu sitio con Google Analytics, CRM, pasarelas de pago, ERP o APIs de terceros requiere desarrollo adicional.' },
              ].map((item) => (
                <li key={item.factor} className="flex gap-3">
                  <span className="mt-1.5 w-2 h-2 min-w-[8px] rounded-full bg-[#0071E3]" />
                  <span className="text-[#6E6E73] text-sm leading-relaxed">
                    <strong className="text-[#1D1D1F]">{item.factor}:</strong> {item.desc}
                  </span>
                </li>
              ))}
            </ul>

            <h2 className="text-2xl font-bold text-[#1D1D1F] mb-4 mt-10">
              ¿Plantilla o diseño personalizado?
            </h2>
            <p className="text-[#6E6E73] leading-relaxed mb-5">
              Las plantillas son una opción válida para muchos negocios, pero tienen límites claros. Son rápidas de implementar y económicas, pero todas se parecen entre sí, suelen ser lentas por el exceso de código genérico y pueden ser difíciles de adaptar cuando tu negocio crece.
            </p>
            <p className="text-[#6E6E73] leading-relaxed mb-5">
              Un diseño personalizado, por otro lado, refleja exactamente tu marca, se construye con el código justo y necesario (lo que lo hace más rápido), y escala mejor con el tiempo. Si tu negocio tiene planes de crecimiento serios, el diseño personalizado generalmente paga su costo adicional en pocos meses.
            </p>

            <h2 className="text-2xl font-bold text-[#1D1D1F] mb-4 mt-10">
              Lo que NO deberías sacrificar para ahorrar
            </h2>
            <p className="text-[#6E6E73] leading-relaxed mb-5">
              Cuando el presupuesto aprieta, hay tentación de recortar. Pero hay tres cosas que, si las sacrificas, pagarás caro después:
            </p>
            <ul className="mb-5 flex flex-col gap-3">
              {[
                { item: 'SEO técnico básico', desc: 'Si Google no puede leer o indexar tu sitio correctamente, nadie te encontrará. Esto incluye velocidad de carga, URLs amigables y metadatos correctos.' },
                { item: 'Diseño responsive', desc: 'Más del 70% del tráfico web en México viene de celulares. Un sitio que no se ve bien en móvil pierde la mayoría de sus visitantes.' },
                { item: 'Velocidad de carga', desc: 'Google penaliza los sitios lentos en sus resultados de búsqueda. Además, cada segundo de demora en carga reduce las conversiones hasta un 20%.' },
              ].map((item) => (
                <li key={item.item} className="flex gap-3">
                  <span className="mt-1.5 w-2 h-2 min-w-[8px] rounded-full bg-[#0071E3]" />
                  <span className="text-[#6E6E73] text-sm leading-relaxed">
                    <strong className="text-[#1D1D1F]">{item.item}:</strong> {item.desc}
                  </span>
                </li>
              ))}
            </ul>

            <p className="text-[#6E6E73] leading-relaxed mb-5">
              En Vorantheus, todas nuestras páginas web incluyen estos tres elementos como estándar, sin importar el paquete que elijas. No vendemos sitios que estén a medias.
            </p>

            {/* CTA */}
            <div className="mt-10 pt-8 border-t border-black/[0.06] text-center">
              <p className="text-[#1D1D1F] font-semibold text-lg mb-2">
                ¿Quieres saber cuánto costaría tu proyecto específico?
              </p>
              <p className="text-[#6E6E73] text-sm mb-6">
                Te damos una cotización detallada y sin compromiso en menos de 24 horas.
              </p>
              <Link
                href="/cotizar"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#0071E3] hover:bg-[#0077ED] text-white font-semibold rounded-full transition-all duration-200"
              >
                Cotizar mi página web →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

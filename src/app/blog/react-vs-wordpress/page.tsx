import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'React vs WordPress: ¿cuál elegir para tu negocio en 2025? | Vorantheus',
  description:
    'Comparativa honesta entre las dos tecnologías más populares para sitios web. Cuándo usar cada una, ventajas y desventajas reales.',
  alternates: { canonical: '/blog/react-vs-wordpress' },
  openGraph: {
    title: 'React vs WordPress: ¿cuál elegir para tu negocio en 2025?',
    description:
      'Comparativa honesta entre las dos tecnologías más populares para sitios web. Cuándo usar cada una, ventajas y desventajas reales.',
    url: '/blog/react-vs-wordpress',
  },
}

const comparison = [
  { criterio: 'Velocidad de carga', wordpress: 'Media-lenta (depende de plugins)', react: 'Muy rápida' },
  { criterio: 'SEO técnico', wordpress: 'Básico con plugins', react: 'Avanzado nativo' },
  { criterio: 'Mantenimiento', wordpress: 'Alto (actualizaciones frecuentes)', react: 'Bajo' },
  { criterio: 'Costo inicial', wordpress: 'Bajo', react: 'Medio-alto' },
  { criterio: 'Personalización', wordpress: 'Limitada por el CMS', react: 'Total' },
  { criterio: 'Facilidad de edición', wordpress: 'Alta (sin programar)', react: 'Requiere desarrollador' },
]

export default function ArticleReactVsWordPress() {
  return (
    <>
      <Navbar />

      {/* Mini Dark Hero */}
      <section className="relative bg-black overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 60% 60% at 70% 40%, rgba(0,113,227,0.10) 0%, transparent 65%)',
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
            Tecnología
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-5 leading-tight">
            React vs WordPress: ¿cuál elegir para tu negocio en 2025?
          </h1>
          <p className="text-white/40 text-sm">
            15 de mayo de 2025 · 6 min de lectura
          </p>
        </div>
      </section>

      {/* Article Body */}
      <section className="bg-[#F5F5F7] py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-white rounded-3xl p-10 shadow-card border border-black/[0.04]">

            <p className="text-[#6E6E73] leading-relaxed mb-5">
              &quot;¿Usamos WordPress o algo más moderno?&quot; Es, con diferencia, la pregunta que más recibimos de clientes que están a punto de iniciar su proyecto web. Y no tiene una respuesta única. Depende de tu negocio, tu equipo y tus planes a futuro. Aquí te damos la respuesta honesta.
            </p>

            <h2 className="text-2xl font-bold text-[#1D1D1F] mb-4 mt-10">
              WordPress: cuándo es una buena opción
            </h2>
            <p className="text-[#6E6E73] leading-relaxed mb-5">
              WordPress sigue siendo la plataforma más usada del mundo y hay razones válidas para ello. Si tu proyecto es principalmente un blog o un sitio de contenido, si tu equipo de marketing necesita actualizar textos e imágenes sin depender de un desarrollador, o si el presupuesto inicial es la prioridad absoluta, WordPress puede ser la herramienta correcta.
            </p>
            <p className="text-[#6E6E73] leading-relaxed mb-4">
              Sus ventajas principales:
            </p>
            <ul className="mb-5 flex flex-col gap-3">
              {[
                'Panel de administración intuitivo: cualquier persona puede actualizar contenido sin saber programar.',
                'Ecosistema enorme de plugins para casi cualquier funcionalidad.',
                'Hosting económico y ampliamente disponible en México.',
                'Curva de aprendizaje baja para el usuario final.',
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1.5 w-2 h-2 min-w-[8px] rounded-full bg-[#0071E3]" />
                  <span className="text-[#6E6E73] text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-[#6E6E73] leading-relaxed mb-4">
              Sus desventajas reales:
            </p>
            <ul className="mb-5 flex flex-col gap-3">
              {[
                'Velocidad: los sitios de WordPress suelen ser lentos por defecto, con demasiados plugins que agregan código innecesario.',
                'Seguridad: al ser la plataforma más popular, también es la más atacada. Requiere actualizaciones constantes de WordPress, plugins y temas.',
                'Deuda técnica: con el tiempo, los plugins en conflicto y las actualizaciones rompidas se acumulan.',
                'Personalización limitada: llevar WordPress más allá de sus capacidades nativas se vuelve costoso y frágil.',
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1.5 w-2 h-2 min-w-[8px] rounded-full bg-[#0071E3]" />
                  <span className="text-[#6E6E73] text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <h2 className="text-2xl font-bold text-[#1D1D1F] mb-4 mt-10">
              React / Next.js: cuándo es la mejor opción
            </h2>
            <p className="text-[#6E6E73] leading-relaxed mb-5">
              Next.js (el framework de React que usamos en Vorantheus) es la tecnología detrás de sitios como Notion, GitHub, TikTok y miles de empresas modernas. No es una moda: es el estándar de la industria para aplicaciones web de alto rendimiento.
            </p>
            <p className="text-[#6E6E73] leading-relaxed mb-4">
              Sus ventajas:
            </p>
            <ul className="mb-5 flex flex-col gap-3">
              {[
                'Velocidad extrema: carga en milisegundos, lo que impacta directamente en SEO y conversiones.',
                'SEO técnico avanzado: metadatos dinámicos, SSR, SSG, schema markup y Core Web Vitals perfectos desde el inicio.',
                'Seguridad: sin plugins de terceros vulnerables, sin base de datos expuesta.',
                'Escalabilidad total: puedes construir desde una landing page hasta una plataforma compleja sin cambiar de tecnología.',
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1.5 w-2 h-2 min-w-[8px] rounded-full bg-[#0071E3]" />
                  <span className="text-[#6E6E73] text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-[#6E6E73] leading-relaxed mb-5">
              Su única desventaja real: necesitas un desarrollador para hacer cambios en el código. Para cambios de contenido, sin embargo, se puede integrar un CMS headless (como Sanity o Contentful) que da la misma facilidad de edición que WordPress pero con todo el rendimiento de Next.js.
            </p>

            <h2 className="text-2xl font-bold text-[#1D1D1F] mb-4 mt-10">
              Comparativa directa
            </h2>
            <div className="overflow-x-auto mb-5">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-black/[0.08]">
                    <th className="text-left py-3 pr-4 text-[#1D1D1F] font-semibold">Criterio</th>
                    <th className="text-left py-3 pr-4 text-[#1D1D1F] font-semibold">WordPress</th>
                    <th className="text-left py-3 text-[#0071E3] font-semibold">React / Next.js</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row, i) => (
                    <tr key={row.criterio} className={i < comparison.length - 1 ? 'border-b border-black/[0.05]' : ''}>
                      <td className="py-3 pr-4 text-[#1D1D1F] font-medium">{row.criterio}</td>
                      <td className="py-3 pr-4 text-[#6E6E73]">{row.wordpress}</td>
                      <td className="py-3 text-[#6E6E73]">{row.react}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-[#1D1D1F] mb-4 mt-10">
              Conclusión
            </h2>
            <p className="text-[#6E6E73] leading-relaxed mb-5">
              WordPress es una herramienta válida para proyectos sencillos de contenido donde la facilidad de edición es la prioridad máxima. Next.js es la opción correcta para cualquier negocio que quiera una presencia digital seria, escalable, rápida y optimizada para Google.
            </p>
            <p className="text-[#6E6E73] leading-relaxed mb-5">
              Si tu negocio tiene planes de crecer, si el SEO es importante para ti, o si necesitas funcionalidades más allá de un blog, Next.js va a servir mejor a tus objetivos a mediano y largo plazo.
            </p>

            {/* CTA */}
            <div className="mt-10 pt-8 border-t border-black/[0.06] text-center">
              <p className="text-[#1D1D1F] font-semibold text-lg mb-2">
                ¿No sabes cuál tecnología conviene para tu proyecto?
              </p>
              <p className="text-[#6E6E73] text-sm mb-6">
                Cuéntanos tu caso y te recomendamos la solución más adecuada, sin sesgos.
              </p>
              <Link
                href="/cotizar"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#0071E3] hover:bg-[#0077ED] text-white font-semibold rounded-full transition-all duration-200"
              >
                Cotizar mi proyecto →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

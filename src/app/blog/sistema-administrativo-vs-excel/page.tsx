import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Por qué tu negocio ya superó el Excel (y qué hacer al respecto) | Vorantheus',
  description:
    'Si manejas tu inventario, ventas o clientes en hojas de cálculo, estás dejando dinero sobre la mesa. Aquí explicamos por qué y cómo dar el salto.',
  alternates: { canonical: '/blog/sistema-administrativo-vs-excel' },
  openGraph: {
    title: 'Por qué tu negocio ya superó el Excel (y qué hacer al respecto)',
    description:
      'Si manejas tu inventario, ventas o clientes en hojas de cálculo, estás dejando dinero sobre la mesa. Aquí explicamos por qué y cómo dar el salto.',
    url: '/blog/sistema-administrativo-vs-excel',
  },
}

export default function ArticleSistemaVsExcel() {
  return (
    <>
      <Navbar />

      {/* Mini Dark Hero */}
      <section className="relative bg-black overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 60% 60% at 50% 40%, rgba(0,113,227,0.10) 0%, transparent 65%)',
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
            Negocios
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-5 leading-tight">
            Por qué tu negocio ya superó el Excel (y qué hacer al respecto)
          </h1>
          <p className="text-white/40 text-sm">
            28 de abril de 2025 · 5 min de lectura
          </p>
        </div>
      </section>

      {/* Article Body */}
      <section className="bg-[#F5F5F7] py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-white rounded-3xl p-10 shadow-card border border-black/[0.04]">

            <p className="text-[#6E6E73] leading-relaxed mb-5">
              Excel es gratuito, está disponible en prácticamente cualquier computadora y la mayoría de las personas saben usarlo. Entonces, ¿por qué reemplazarlo? Porque hay un punto en el crecimiento de un negocio donde Excel deja de ser una herramienta y se convierte en un cuello de botella. Si llegaste a ese punto y aún no lo sabes, este artículo es para ti.
            </p>

            <h2 className="text-2xl font-bold text-[#1D1D1F] mb-4 mt-10">
              Señales de que ya lo superaste
            </h2>
            <p className="text-[#6E6E73] leading-relaxed mb-4">
              No es una cuestión de tamaño de empresa. Es una cuestión de complejidad operativa. Estas son las señales más claras:
            </p>
            <ul className="mb-5 flex flex-col gap-4">
              {[
                {
                  señal: 'Errores constantes en los datos',
                  desc: 'Alguien sobreescribió una celda, una fórmula rota que nadie detectó, versiones distintas del mismo archivo circulando por WhatsApp. Si esto suena familiar, ya lo superaste.',
                },
                {
                  señal: 'Múltiples archivos por actualizar',
                  desc: 'Inventario en un archivo, ventas en otro, clientes en un tercero. Cuando una venta ocurre, hay que actualizar tres lugares distintos manualmente. Cada actualización es una oportunidad de error.',
                },
                {
                  señal: 'No hay acceso en tiempo real para el equipo',
                  desc: 'Tu vendedor en campo no sabe si hay stock. Tu contador trabaja con datos de ayer. Tu gerente de sucursal no puede ver las ventas del día sin llamarte. La información está atrapada en archivos locales.',
                },
                {
                  señal: 'No tienes reportes automáticos',
                  desc: 'Para saber cuánto vendiste este mes, cuál es tu producto más rentable o qué clientes no han comprado en 60 días, alguien tiene que sentarse a construir el reporte a mano. Eso tarda horas y pasa poco seguido.',
                },
              ].map((item) => (
                <li key={item.señal} className="flex gap-3">
                  <span className="mt-1.5 w-2 h-2 min-w-[8px] rounded-full bg-[#0071E3]" />
                  <span className="text-[#6E6E73] text-sm leading-relaxed">
                    <strong className="text-[#1D1D1F]">{item.señal}:</strong> {item.desc}
                  </span>
                </li>
              ))}
            </ul>

            <h2 className="text-2xl font-bold text-[#1D1D1F] mb-4 mt-10">
              Qué ganas con un sistema administrativo
            </h2>
            <p className="text-[#6E6E73] leading-relaxed mb-4">
              Un sistema administrativo a medida no es solo Excel en la nube. Es una herramienta diseñada para los procesos específicos de tu negocio. Esto es lo que obtienes:
            </p>
            <ul className="mb-5 flex flex-col gap-3">
              {[
                'Inventario en tiempo real: cualquier venta, compra o ajuste actualiza el stock al instante y en todos los accesos.',
                'Ventas y facturación integradas: el ticket de venta genera automáticamente el movimiento de inventario y la factura fiscal.',
                'Acceso por roles: tu vendedor ve lo que necesita, tu contador ve lo que le corresponde, tú ves todo.',
                'Reportes automáticos: ventas del día, semana o mes; margen por producto; clientes por frecuencia de compra. Todo con un clic.',
                'Reducción de errores humanos: las reglas de negocio están en el sistema, no en la memoria de una persona.',
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1.5 w-2 h-2 min-w-[8px] rounded-full bg-[#0071E3]" />
                  <span className="text-[#6E6E73] text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <h2 className="text-2xl font-bold text-[#1D1D1F] mb-4 mt-10">
              Un ejemplo real
            </h2>
            <p className="text-[#6E6E73] leading-relaxed mb-5">
              Un cliente nuestro en el sector distribución manejaba 200 SKUs en Excel. El proceso para cerrar ventas era: consultar el archivo de inventario, checar si había stock, anotar el pedido en otro archivo, actualizar manualmente el inventario y enviar la factura por separado. El proceso completo tomaba entre 15 y 25 minutos por pedido, y generaban en promedio 30 pedidos al día.
            </p>
            <p className="text-[#6E6E73] leading-relaxed mb-5">
              Después de implementar su sistema administrativo, el tiempo por pedido bajó a menos de 3 minutos. En un mes ya habían recuperado más en productividad de lo que costó el sistema.
            </p>

            <h2 className="text-2xl font-bold text-[#1D1D1F] mb-4 mt-10">
              ¿Cuánto cuesta hacer el cambio?
            </h2>
            <p className="text-[#6E6E73] leading-relaxed mb-5">
              Un sistema administrativo a medida para pymes en México parte desde $30,000 MXN dependiendo del alcance: módulos necesarios, número de usuarios, integraciones con facturación electrónica, etc. Puede sonar a mucho, pero hay que ponerlo en contexto: ¿cuánto vale el tiempo que tu equipo pierde cada semana en tareas manuales? ¿Cuánto cuesta un error de inventario que lleva a vender algo que no tienes? ¿Cuánto vale la tranquilidad de saber que tus datos son confiables?
            </p>
            <p className="text-[#6E6E73] leading-relaxed mb-5">
              La mayoría de nuestros clientes recuperan la inversión en los primeros tres a seis meses.
            </p>

            {/* CTA */}
            <div className="mt-10 pt-8 border-t border-black/[0.06] text-center">
              <p className="text-[#1D1D1F] font-semibold text-lg mb-2">
                ¿Estás listo para dejar atrás el Excel?
              </p>
              <p className="text-[#6E6E73] text-sm mb-6">
                Cuéntanos cómo manejas tu negocio hoy y te proponemos un sistema que se adapta exactamente a ti.
              </p>
              <Link
                href="/cotizar"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#0071E3] hover:bg-[#0077ED] text-white font-semibold rounded-full transition-all duration-200"
              >
                Cotizar mi sistema →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

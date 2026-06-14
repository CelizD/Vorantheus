import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { siteConfig } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Política de Privacidad | Vorantheus',
  description: 'Política de privacidad y manejo de datos personales de Vorantheus.',
  alternates: { canonical: '/privacidad' },
  robots: { index: true, follow: true },
}

export default function PrivacidadPage() {
  return (
    <main className="bg-white">
      <Navbar />

      <section className="section-light pt-36 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12">
            <p className="text-xs font-medium uppercase tracking-widest text-[#0071E3] mb-4">Legal</p>
            <h1 className="text-4xl sm:text-5xl font-black text-ink mb-4">
              Política de privacidad
            </h1>
            <p className="text-muted">Última actualización: enero de 2025</p>
          </div>

          {/* Content */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-black/[0.06] shadow-card flex flex-col gap-10">
            <div>
              <h2 className="text-2xl font-bold text-ink mb-4">1. Identificación del Responsable</h2>
              <p className="text-muted leading-relaxed mb-4">
                Vorantheus (en adelante, &quot;la Empresa&quot;, &quot;nosotros&quot; o &quot;Vorantheus&quot;) con actividades en
                Mérida, Yucatán, México, es responsable del tratamiento de los datos personales que
                nos proporcione a través de nuestro sitio web y servicios.
              </p>
              <p className="text-muted leading-relaxed">
                Para cualquier consulta relacionada con esta política, puede contactarnos en:
                <a href={`mailto:${siteConfig.privacyEmail}`} className="text-[#0071E3] ml-1 hover:text-ink transition-colors">
                  {siteConfig.privacyEmail}
                </a>
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-ink mb-4">2. Datos Personales que Recopilamos</h2>
              <p className="text-muted leading-relaxed mb-4">
                Recopilamos los siguientes tipos de datos personales cuando interactúa con nuestro sitio web o servicios:
              </p>
              <ul className="space-y-2">
                {[
                  'Nombre y apellidos',
                  'Dirección de correo electrónico',
                  'Número de teléfono o WhatsApp',
                  'Nombre de la empresa o negocio',
                  'Información del proyecto o requerimientos de software',
                  'Presupuesto aproximado',
                  'Datos de facturación (cuando aplica)',
                  'Información de navegación y uso del sitio web (cookies)',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-muted">
                    <span className="text-[#0071E3] mt-1 shrink-0">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-ink mb-4">3. Finalidades del Tratamiento</h2>
              <p className="text-muted leading-relaxed mb-4">
                Sus datos personales son utilizados para las siguientes finalidades:
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="text-ink font-semibold mb-2">Finalidades necesarias:</h3>
                  <ul className="space-y-2">
                    {[
                      'Atender y responder a solicitudes de cotización de proyectos',
                      'Establecer y gestionar la relación contractual con el cliente',
                      'Prestar los servicios de desarrollo de software contratados',
                      'Emitir facturas y gestionar pagos',
                      'Enviar comunicaciones relacionadas con el proyecto en curso',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-muted text-sm">
                        <span className="text-[#0071E3] mt-0.5 shrink-0">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-ink font-semibold mb-2">Finalidades secundarias (con consentimiento):</h3>
                  <ul className="space-y-2">
                    {[
                      'Enviar información sobre nuevos servicios, actualizaciones y promociones',
                      'Realizar encuestas de satisfacción',
                      'Compartir casos de éxito y referencias (con autorización expresa)',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-muted text-sm">
                        <span className="text-muted/50 mt-0.5 shrink-0">○</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-ink mb-4">4. Transferencia de Datos</h2>
              <p className="text-muted leading-relaxed mb-4">
                Sus datos personales pueden ser compartidos con:
              </p>
              <ul className="space-y-2">
                {[
                  'Proveedores de servicios tecnológicos necesarios para operar el negocio (hosting, base de datos, email)',
                  'Herramientas de análisis web para mejorar la experiencia del usuario',
                  'Autoridades competentes cuando sea requerido por ley',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-muted text-sm">
                    <span className="text-[#0071E3] mt-0.5 shrink-0">→</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-muted leading-relaxed mt-4">
                No vendemos, alquilamos ni compartimos sus datos personales con terceros
                para fines comerciales propios de esos terceros.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-ink mb-4">5. Derechos ARCO</h2>
              <p className="text-muted leading-relaxed mb-4">
                De conformidad con la Ley Federal de Protección de Datos Personales en Posesión
                de los Particulares (LFPDPPP), usted tiene los siguientes derechos:
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { letra: 'A', derecho: 'Acceso', desc: 'Conocer qué datos tenemos sobre usted' },
                  { letra: 'R', derecho: 'Rectificación', desc: 'Corregir datos inexactos o incompletos' },
                  { letra: 'C', derecho: 'Cancelación', desc: 'Solicitar la eliminación de sus datos' },
                  { letra: 'O', derecho: 'Oposición', desc: 'Oponerse al tratamiento de sus datos' },
                ].map((item) => (
                  <div
                    key={item.letra}
                    className="rounded-xl bg-smoke border border-black/[0.06] p-4 flex gap-3"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#0071E3]/15 flex items-center justify-center text-[#0071E3] font-black shrink-0">
                      {item.letra}
                    </div>
                    <div>
                      <p className="text-ink font-semibold text-sm">{item.derecho}</p>
                      <p className="text-muted text-xs">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-muted leading-relaxed mt-4 text-sm">
                Para ejercer cualquiera de estos derechos, envíe un correo a{' '}
                <a href={`mailto:${siteConfig.privacyEmail}`} className="text-[#0071E3] hover:text-ink transition-colors">
                  {siteConfig.privacyEmail}
                </a>{' '}
                con su nombre, descripción del derecho que desea ejercer y copia de identificación oficial.
                Responderemos en un plazo máximo de 20 días hábiles.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-ink mb-4">6. Uso de Cookies</h2>
              <p className="text-muted leading-relaxed">
                Nuestro sitio web utiliza cookies y tecnologías similares para mejorar la experiencia
                de usuario, analizar el tráfico y personalizar contenido. Las cookies de análisis
                (Google Analytics) son opcionales. Puede configurar su navegador para rechazar cookies,
                aunque esto puede afectar la funcionalidad del sitio.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-ink mb-4">7. Seguridad</h2>
              <p className="text-muted leading-relaxed">
                Implementamos medidas técnicas y organizativas apropiadas para proteger sus datos
                personales contra acceso no autorizado, pérdida, destrucción o alteración. Estos
                incluyen cifrado SSL/TLS, control de acceso basado en roles y revisiones periódicas
                de seguridad. Sin embargo, ninguna transmisión de datos por internet es 100% segura.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-ink mb-4">8. Retención de Datos</h2>
              <p className="text-muted leading-relaxed">
                Conservamos sus datos personales por el tiempo necesario para cumplir con los fines
                para los que fueron recopilados y para cumplir con obligaciones legales. Los datos
                de contacto de clientes se conservan por 5 años después de la última transacción.
                Las solicitudes de cotización sin contrato se eliminan después de 1 año.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-ink mb-4">9. Cambios a esta Política</h2>
              <p className="text-muted leading-relaxed">
                Nos reservamos el derecho de actualizar esta política de privacidad en cualquier
                momento. Las modificaciones entrarán en vigor inmediatamente después de su publicación.
                Le notificaremos por correo electrónico si los cambios son significativos.
              </p>
            </div>

            <div className="border-t border-black/[0.08] pt-6">
              <p className="text-muted text-sm">
                Al utilizar nuestro sitio web o contratar nuestros servicios, usted acepta los términos
                de esta política de privacidad.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

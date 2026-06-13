import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Términos y Condiciones | Vorantheus',
  description:
    'Términos y condiciones de servicio de Vorantheus para la prestación de servicios de desarrollo de software.',
}

export default function TerminosPage() {
  return (
    <main className="min-h-screen bg-carbon">
      <Navbar />

      <section className="pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-electric/30 bg-electric/10 text-electric text-sm font-medium mb-4">
              Legal
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
              Términos y condiciones
            </h1>
            <p className="text-voGray">Última actualización: enero de 2025</p>
          </div>

          {/* Content */}
          <div className="glass-card rounded-3xl p-8 sm:p-12 border border-white/10 flex flex-col gap-10">
            <div>
              <p className="text-voGray leading-relaxed">
                Los presentes Términos y Condiciones (en adelante &quot;T&C&quot;) regulan la prestación de
                servicios de desarrollo de software por parte de Vorantheus (en adelante &quot;el Proveedor&quot;)
                a sus clientes (en adelante &quot;el Cliente&quot;). Al contratar cualquier servicio de Vorantheus,
                el Cliente acepta íntegramente estos términos.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">1. Definiciones</h2>
              <div className="space-y-3">
                {[
                  { term: 'Proveedor', def: 'Vorantheus, empresa de desarrollo de software.' },
                  { term: 'Cliente', def: 'Persona física o moral que contrata los servicios del Proveedor.' },
                  { term: 'Proyecto', def: 'El trabajo de desarrollo de software acordado entre ambas partes.' },
                  { term: 'Propuesta', def: 'Documento formal que detalla el alcance, precio y cronograma del Proyecto.' },
                  { term: 'Entregable', def: 'Cualquier producto, código, diseño o documento producido durante el Proyecto.' },
                ].map((item) => (
                  <div key={item.term} className="flex gap-3">
                    <span className="text-electric font-semibold text-sm shrink-0 mt-0.5 w-24">{item.term}:</span>
                    <span className="text-voGray text-sm leading-relaxed">{item.def}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">2. Alcance de los Servicios</h2>
              <p className="text-voGray leading-relaxed mb-4">
                Los servicios que el Proveedor prestará al Cliente quedarán definidos en la Propuesta
                correspondiente, la cual constituye el alcance acordado del Proyecto. Cualquier
                requerimiento adicional al alcance original será cotizado y aprobado por escrito
                antes de su implementación.
              </p>
              <p className="text-voGray leading-relaxed">
                El Proveedor se reserva el derecho de subcontratar parte del trabajo a colaboradores
                de confianza, manteniendo en todo momento la responsabilidad final ante el Cliente.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">3. Cotizaciones y Precios</h2>
              <ul className="space-y-3">
                {[
                  'Las cotizaciones tienen una vigencia de 15 días calendario desde su emisión.',
                  'Los precios están expresados en Pesos Mexicanos (MXN) salvo indicación contraria.',
                  'Para clientes internacionales, los precios pueden acordarse en USD según el tipo de cambio del día de firma.',
                  'Los precios no incluyen IVA, el cual se aplicará conforme a la legislación fiscal vigente.',
                  'El Proveedor puede ajustar precios para proyectos que presenten cambios significativos en el alcance durante el desarrollo.',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-voGray text-sm">
                    <span className="text-electric mt-0.5 shrink-0">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">4. Condiciones de Pago</h2>
              <div className="rounded-2xl bg-white/5 border border-white/10 p-6 mb-4">
                <h3 className="text-white font-semibold mb-3">Esquema estándar de pagos:</h3>
                <div className="flex flex-col gap-3">
                  {[
                    { pct: '50%', cuando: 'Al firmar el contrato', desc: 'Para iniciar el desarrollo del proyecto' },
                    { pct: '25%', cuando: 'Al aprobar el diseño', desc: 'Una vez validados los mockups y prototipos' },
                    { pct: '25%', cuando: 'Al entregar el proyecto', desc: 'Al publicar y entregar el proyecto final' },
                  ].map((step) => (
                    <div key={step.cuando} className="flex items-center gap-4">
                      <span className="text-electric font-black text-lg w-12 shrink-0">{step.pct}</span>
                      <div>
                        <p className="text-white text-sm font-medium">{step.cuando}</p>
                        <p className="text-voGray text-xs">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <ul className="space-y-2">
                {[
                  'Los pagos deben realizarse dentro de los 3 días hábiles siguientes a su vencimiento.',
                  'El retraso en pagos puede pausar el desarrollo del proyecto sin responsabilidad para el Proveedor.',
                  'Los reembolsos proceden únicamente para etapas no iniciadas, según el criterio del Proveedor.',
                  'Aceptamos transferencia bancaria, tarjeta de crédito/débito y PayPal.',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-voGray text-sm">
                    <span className="text-electric mt-0.5 shrink-0">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">5. Revisiones y Cambios</h2>
              <ul className="space-y-2">
                {[
                  'El proyecto incluye hasta 2 rondas de revisiones sin costo adicional por etapa del proceso.',
                  'Una "revisión" se define como cambios menores que no alteran el alcance original acordado.',
                  'Los cambios que modifiquen el alcance original serán cotizados y deberán ser aprobados por escrito.',
                  'Las modificaciones urgentes fuera del horario de trabajo pueden tener un cargo adicional del 25%.',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-voGray text-sm">
                    <span className="text-electric mt-0.5 shrink-0">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">6. Propiedad Intelectual</h2>
              <p className="text-voGray leading-relaxed mb-4">
                Una vez que el Cliente haya realizado el pago total del proyecto, la propiedad
                intelectual del código fuente y diseños creados específicamente para el Cliente
                será transferida a éste, con las siguientes condiciones:
              </p>
              <ul className="space-y-2">
                {[
                  'El Proveedor conserva el derecho de mencionar el proyecto en su portafolio, salvo acuerdo de confidencialidad.',
                  'Las librerías, frameworks y componentes de código abierto utilizados siguen sus propias licencias.',
                  'El Proveedor puede reutilizar componentes y soluciones genéricas en otros proyectos.',
                  'El Cliente no adquiere propiedad sobre herramientas o metodologías propias del Proveedor.',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-voGray text-sm">
                    <span className="text-electric mt-0.5 shrink-0">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">7. Confidencialidad</h2>
              <p className="text-voGray leading-relaxed">
                Ambas partes se comprometen a mantener la confidencialidad de cualquier información
                sensible compartida durante el proyecto, incluyendo datos de negocio, estrategias,
                datos de clientes y cualquier otro material que una parte designe como confidencial.
                Esta obligación persiste por 2 años después de la conclusión del proyecto.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">8. Plazos y Entrega</h2>
              <ul className="space-y-2">
                {[
                  'Los plazos de entrega se establecen en la Propuesta y dependen de la cooperación del Cliente.',
                  'El incumplimiento del Cliente en proporcionar materiales o aprobaciones puede extender los plazos.',
                  'El Proveedor notificará con anticipación cualquier retraso justificado.',
                  'Las demoras causadas por cambios en el alcance no son responsabilidad del Proveedor.',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-voGray text-sm">
                    <span className="text-electric mt-0.5 shrink-0">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">9. Garantía y Soporte</h2>
              <p className="text-voGray leading-relaxed mb-4">
                El Proveedor ofrece un período de garantía gratuita post-entrega según el plan contratado
                (1-6 meses). Durante este período, se corregirán sin costo errores o fallas que sean
                responsabilidad del Proveedor. No aplica para:
              </p>
              <ul className="space-y-2">
                {[
                  'Problemas causados por modificaciones del Cliente o terceros al código entregado.',
                  'Incompatibilidades con cambios en plataformas de terceros (actualizaciones de SO, navegadores, APIs).',
                  'Funcionalidades nuevas o mejoras no incluidas en el alcance original.',
                  'Problemas de hosting o dominio no gestionados por el Proveedor.',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-voGray text-sm">
                    <span className="text-red-400 mt-0.5 shrink-0">✗</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">10. Limitación de Responsabilidad</h2>
              <p className="text-voGray leading-relaxed">
                La responsabilidad máxima del Proveedor ante el Cliente, por cualquier causa, se
                limita al monto total pagado por el Cliente por el proyecto en cuestión. El Proveedor
                no será responsable por daños indirectos, pérdida de ingresos o ganancias no obtenidas,
                pérdida de datos o cualquier daño consecuente derivado del uso o imposibilidad de uso
                del software entregado.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">11. Terminación del Contrato</h2>
              <p className="text-voGray leading-relaxed mb-4">
                Cualquiera de las partes puede terminar el contrato con 15 días de aviso por escrito.
                En caso de terminación:
              </p>
              <ul className="space-y-2">
                {[
                  'El Cliente pagará el trabajo realizado hasta la fecha de terminación.',
                  'El Proveedor entregará los entregables completados hasta ese momento.',
                  'No procede reembolso por etapas ya completadas y aprobadas.',
                  'En caso de incumplimiento grave, la parte afectada puede terminar de forma inmediata.',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-voGray text-sm">
                    <span className="text-electric mt-0.5 shrink-0">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">12. Ley Aplicable y Jurisdicción</h2>
              <p className="text-voGray leading-relaxed">
                Estos términos se rigen por las leyes de los Estados Unidos Mexicanos. Cualquier
                disputa que no pueda resolverse amigablemente será sometida a la jurisdicción de
                los tribunales competentes de la ciudad de Mérida, Yucatán, México, renunciando
                ambas partes a cualquier otro fuero que pudiera corresponderles.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">13. Disposiciones Generales</h2>
              <ul className="space-y-2">
                {[
                  'Si alguna cláusula es declarada inválida, las demás permanecerán vigentes.',
                  'La omisión del Proveedor en exigir el cumplimiento de alguna cláusula no implica renuncia a ella.',
                  'Estos T&C prevalecen sobre cualquier comunicación verbal previa.',
                  'El Proveedor puede modificar estos T&C con aviso previo de 30 días a clientes activos.',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-voGray text-sm">
                    <span className="text-electric mt-0.5 shrink-0">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-white/10 pt-6">
              <p className="text-voGray text-sm">
                Al contratar cualquier servicio de Vorantheus, el Cliente declara haber leído,
                entendido y aceptado estos Términos y Condiciones en su totalidad.
              </p>
              <p className="text-voGray text-sm mt-3">
                Contacto legal:{' '}
                <a href="mailto:legal@vorantheus.com" className="text-electric hover:text-white transition-colors">
                  legal@vorantheus.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

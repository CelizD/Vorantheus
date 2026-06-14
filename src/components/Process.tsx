'use client'

import { motion } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: 'Descubrimiento',
    description: 'Reunión inicial gratuita para entender tu negocio, objetivos y requerimientos. Sin costo ni compromiso.',
  },
  {
    number: '02',
    title: 'Propuesta',
    description: 'Propuesta detallada con alcance, cronograma y presupuesto. Una vez aprobada, firmamos contrato y comenzamos.',
  },
  {
    number: '03',
    title: 'Diseño UI/UX',
    description: 'Creamos mockups y prototipos interactivos. Iteramos hasta que el diseño capture perfectamente tu visión.',
  },
  {
    number: '04',
    title: 'Desarrollo',
    description: 'Nuestro equipo desarrolla tu proyecto con tecnologías modernas, código limpio y las mejores prácticas.',
  },
  {
    number: '05',
    title: 'Pruebas QA',
    description: 'Pruebas exhaustivas en múltiples dispositivos y navegadores. Corregimos cualquier error antes de la entrega.',
  },
  {
    number: '06',
    title: 'Lanzamiento',
    description: 'Desplegamos en producción, configuramos dominio, SSL y todas las integraciones. ¡Tu negocio sale al aire!',
  },
  {
    number: '07',
    title: 'Capacitación',
    description: 'Te enseñamos a usar y administrar tu nuevo sistema. Entregamos documentación completa y videos de referencia.',
  },
  {
    number: '08',
    title: 'Soporte',
    description: 'Período de soporte gratuito post-lanzamiento. Monitoreo activo del rendimiento, seguridad y crecimiento.',
  },
]

export default function Process() {
  return (
    <section id="proceso" style={{ background: '#F7F4EF' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-28">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-20"
        >
          <span className="tag">Metodología probada</span>
          <h2
            className="mt-6 text-5xl sm:text-6xl font-black text-[#1C1B18] tracking-tight leading-tight"
            style={{ letterSpacing: '-0.02em' }}
          >
            Así trabajamos.
          </h2>
          <p className="mt-6 text-xl text-[#6B6860] leading-relaxed">
            Un proceso estructurado que garantiza transparencia, calidad y entrega a tiempo.
          </p>
        </motion.div>

        {/* Steps — vertical list with left number, right content */}
        <div className="flex flex-col divide-y divide-[#E6E0D6]">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: index * 0.04 }}
              className="group grid grid-cols-1 lg:grid-cols-[100px_1fr] gap-4 lg:gap-16 py-10"
            >
              <span className="text-xs font-bold tracking-widest text-[#0071E3] uppercase pt-1">
                {step.number}
              </span>
              <div>
                <h3 className="text-2xl font-bold text-[#1C1B18] mb-3 group-hover:text-[#0071E3] transition-colors duration-200">
                  {step.title}
                </h3>
                <p className="text-[#6B6860] leading-relaxed max-w-2xl">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

'use client'

import { motion } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: 'Descubrimiento',
    description:
      'Reunión inicial gratuita para entender tu negocio, objetivos y requerimientos. Sin costo ni compromiso.',
  },
  {
    number: '02',
    title: 'Propuesta y contrato',
    description:
      'Te enviamos una propuesta detallada con alcance, cronograma y presupuesto. Una vez aprobada, firmamos contrato y comenzamos.',
  },
  {
    number: '03',
    title: 'Diseño UI/UX',
    description:
      'Creamos mockups y prototipos interactivos. Iteramos hasta que el diseño capture perfectamente tu visión.',
  },
  {
    number: '04',
    title: 'Desarrollo',
    description:
      'Nuestro equipo desarrolla tu proyecto con tecnologías modernas, código limpio y las mejores prácticas de la industria.',
  },
  {
    number: '05',
    title: 'Pruebas QA',
    description:
      'Realizamos pruebas exhaustivas en múltiples dispositivos y navegadores. Corregimos cualquier error antes de la entrega.',
  },
  {
    number: '06',
    title: 'Lanzamiento',
    description:
      'Desplegamos tu proyecto en producción, configuramos dominio, SSL y todas las integraciones. ¡Tu negocio sale al aire!',
  },
  {
    number: '07',
    title: 'Capacitación',
    description:
      'Te enseñamos a usar y administrar tu nuevo sistema. Entregamos documentación completa y videos de referencia.',
  },
  {
    number: '08',
    title: 'Soporte continuo',
    description:
      'Período de soporte gratuito post-lanzamiento. Monitoreo activo del rendimiento, seguridad y crecimiento continuo.',
  },
]

export default function Process() {
  return (
    <section id="proceso" className="section-mid">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-32">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-24"
        >
          <span className="tag">Metodología probada</span>
          <h2 className="mt-6 text-5xl sm:text-6xl font-black text-white tracking-tight leading-tight">
            Así trabajamos.
          </h2>
          <p className="mt-6 text-xl text-white/50 leading-relaxed">
            Un proceso estructurado que garantiza transparencia, calidad y entrega a tiempo. Sabes en todo momento en qué etapa está tu proyecto.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="flex flex-col">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: index * 0.04 }}
              className="group relative grid grid-cols-1 lg:grid-cols-[120px_1fr] gap-6 lg:gap-16 py-10 border-b border-white/[0.06] last:border-0"
            >
              {/* Step number */}
              <div className="flex items-start gap-5 lg:block">
                <span className="text-xs font-bold tracking-widest text-[#0B84F3] uppercase">
                  Paso {step.number}
                </span>
              </div>

              {/* Content */}
              <div className="relative">
                {/* Large background number */}
                <span className="absolute -top-6 right-0 text-[120px] leading-none font-black text-white/[0.03] select-none pointer-events-none hidden lg:block">
                  {step.number}
                </span>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#0B84F3] transition-colors duration-200">
                  {step.title}
                </h3>
                <p className="text-[#94A3B8] leading-relaxed max-w-2xl">
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

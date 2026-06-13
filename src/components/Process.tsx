'use client'

import { motion } from 'framer-motion'
import {
  MessageSquare,
  FileText,
  Palette,
  Code2,
  FlaskConical,
  Rocket,
  Headphones,
  TrendingUp,
  RefreshCw,
} from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Descubrimiento',
    description:
      'Reunión inicial gratuita para entender tu negocio, objetivos, público objetivo y requerimientos del proyecto. Sin costo ni compromiso.',
    color: 'from-electric to-voBlue',
  },
  {
    number: '02',
    icon: FileText,
    title: 'Propuesta y contrato',
    description:
      'Te enviamos una propuesta detallada con alcance, cronograma y presupuesto. Una vez aprobada, firmamos contrato y comenzamos.',
    color: 'from-voBlue to-voPurple',
  },
  {
    number: '03',
    icon: Palette,
    title: 'Diseño UI/UX',
    description:
      'Creamos los mockups y prototipos interactivos de tu proyecto. Iteramos hasta que el diseño capture perfectamente tu visión.',
    color: 'from-voPurple to-electric',
  },
  {
    number: '04',
    icon: Code2,
    title: 'Desarrollo',
    description:
      'Nuestro equipo desarrolla tu proyecto con tecnologías modernas, código limpio y las mejores prácticas de la industria.',
    color: 'from-electric to-voPurple',
  },
  {
    number: '05',
    icon: FlaskConical,
    title: 'Pruebas QA',
    description:
      'Realizamos pruebas exhaustivas en múltiples dispositivos y navegadores. Corregimos cualquier error antes de la entrega.',
    color: 'from-voBlue to-electric',
  },
  {
    number: '06',
    icon: Rocket,
    title: 'Lanzamiento',
    description:
      'Desplegamos tu proyecto en producción, configuramos el dominio, SSL y todas las integraciones necesarias. ¡Tu negocio sale al aire!',
    color: 'from-voPurple to-voBlue',
  },
  {
    number: '07',
    icon: Headphones,
    title: 'Capacitación',
    description:
      'Te enseñamos a usar y administrar tu nuevo sistema. Entregamos documentación completa y videos de referencia.',
    color: 'from-electric to-voBlue',
  },
  {
    number: '08',
    icon: TrendingUp,
    title: 'Soporte post-lanzamiento',
    description:
      'Período de soporte gratuito para resolver cualquier incidencia. Monitoreo activo del rendimiento y seguridad.',
    color: 'from-voBlue to-voPurple',
  },
  {
    number: '09',
    icon: RefreshCw,
    title: 'Crecimiento continuo',
    description:
      'Planificamos juntos las siguientes mejoras y funcionalidades. Tu software crece al ritmo de tu negocio.',
    color: 'from-voPurple to-electric',
  },
]

export default function Process() {
  return (
    <section id="proceso" className="py-24 bg-navy relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-electric/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-voPurple/30 to-transparent" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-voPurple/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-electric/30 bg-electric/10 text-electric text-sm font-medium mb-4">
            Metodología probada
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Nuestro <span className="gradient-text">proceso</span>
          </h2>
          <p className="max-w-2xl mx-auto text-voGray text-lg leading-relaxed">
            Un proceso estructurado que garantiza transparencia, calidad y entrega a tiempo.
            Sabes en todo momento en qué etapa está tu proyecto.
          </p>
        </motion.div>

        {/* Steps - Desktop: alternating, Mobile: vertical */}
        <div className="relative">
          {/* Vertical line - desktop only */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-electric via-voPurple to-electric opacity-30 -translate-x-1/2" />

          <div className="flex flex-col gap-12 lg:gap-16">
            {steps.map((step, index) => {
              const Icon = step.icon
              const isEven = index % 2 === 0

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className={`relative flex flex-col lg:flex-row items-center gap-6 lg:gap-0 ${
                    isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Content side */}
                  <div className={`w-full lg:w-5/12 ${isEven ? 'lg:pr-16 lg:text-right' : 'lg:pl-16 lg:text-left'}`}>
                    <div
                      className={`glass-card rounded-2xl p-6 border border-white/8 hover:border-electric/30 transition-all duration-300 group hover:shadow-electric ${
                        isEven ? '' : ''
                      }`}
                    >
                      <div
                        className={`flex items-center gap-3 mb-3 ${
                          isEven ? 'lg:flex-row-reverse' : 'flex-row'
                        }`}
                      >
                        <div
                          className={`w-10 h-10 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center shrink-0 group-hover:shadow-electric transition-shadow`}
                        >
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <div className={`${isEven ? 'lg:text-right' : ''}`}>
                          <span className="text-electric text-xs font-bold tracking-widest">PASO {step.number}</span>
                          <h3 className="text-lg font-bold text-white">{step.title}</h3>
                        </div>
                      </div>
                      <p className="text-voGray text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </div>

                  {/* Center node */}
                  <div className="hidden lg:flex w-2/12 items-center justify-center">
                    <div
                      className={`w-12 h-12 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white font-black text-sm shadow-electric z-10`}
                    >
                      {step.number}
                    </div>
                  </div>

                  {/* Empty side */}
                  <div className="hidden lg:block w-5/12" />

                  {/* Mobile step number */}
                  <div className="lg:hidden absolute -top-4 left-4 w-8 h-8 rounded-full bg-electric flex items-center justify-center text-white font-black text-xs">
                    {step.number}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

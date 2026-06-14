'use client'

import { motion } from 'framer-motion'
import {
  Search,
  FileText,
  Palette,
  Code2,
  CheckCircle,
  Rocket,
  BookOpen,
  Headphones,
  type LucideIcon,
} from 'lucide-react'

const steps: { number: string; title: string; description: string; icon: LucideIcon }[] = [
  {
    number: '01',
    title: 'Descubrimiento',
    description: 'Reunión inicial gratuita para entender tu negocio, objetivos y requerimientos. Sin costo ni compromiso.',
    icon: Search,
  },
  {
    number: '02',
    title: 'Propuesta',
    description: 'Propuesta detallada con alcance, cronograma y presupuesto. Una vez aprobada, firmamos contrato y comenzamos.',
    icon: FileText,
  },
  {
    number: '03',
    title: 'Diseño UI/UX',
    description: 'Creamos mockups y prototipos interactivos. Iteramos hasta que el diseño capture perfectamente tu visión.',
    icon: Palette,
  },
  {
    number: '04',
    title: 'Desarrollo',
    description: 'Nuestro equipo desarrolla tu proyecto con tecnologías modernas, código limpio y las mejores prácticas.',
    icon: Code2,
  },
  {
    number: '05',
    title: 'Pruebas QA',
    description: 'Pruebas exhaustivas en múltiples dispositivos y navegadores. Corregimos cualquier error antes de la entrega.',
    icon: CheckCircle,
  },
  {
    number: '06',
    title: 'Lanzamiento',
    description: 'Desplegamos en producción, configuramos dominio, SSL y todas las integraciones. ¡Tu negocio sale al aire!',
    icon: Rocket,
  },
  {
    number: '07',
    title: 'Capacitación',
    description: 'Te enseñamos a usar y administrar tu nuevo sistema. Entregamos documentación completa y videos de referencia.',
    icon: BookOpen,
  },
  {
    number: '08',
    title: 'Soporte',
    description: 'Período de soporte gratuito post-lanzamiento. Monitoreo activo del rendimiento, seguridad y crecimiento.',
    icon: Headphones,
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
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
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

        {/* Steps — timeline with icon badges */}
        <div className="relative">
          {/* Vertical connector line — desktop only, runs through the icon centers */}
          <div
            aria-hidden
            className="absolute hidden lg:block w-px bg-[#E6E0D6]"
            style={{ left: '19px', top: '20px', bottom: '20px' }}
          />

          <div className="flex flex-col">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: index * 0.04, ease: [0.23, 1, 0.32, 1] }}
                  className="group grid grid-cols-1 lg:grid-cols-[40px_1fr] gap-4 lg:gap-14 py-9 border-b border-[#E6E0D6] last:border-b-0"
                >
                  {/* Left: icon badge */}
                  <div className="flex items-center gap-3 lg:block">
                    <div className="relative z-10 w-10 h-10 rounded-xl bg-white border border-[#E6E0D6] flex items-center justify-center shrink-0 group-hover:bg-[#0071E3] group-hover:border-[#0071E3] transition-[background-color,border-color] duration-300">
                      <Icon
                        className="w-5 h-5 text-[#6B6860] group-hover:text-white transition-colors duration-300"
                        aria-hidden
                      />
                    </div>
                    {/* Step number — shown inline on mobile, hidden on desktop */}
                    <span className="lg:hidden text-xs font-bold tracking-widest text-[#9B9890] uppercase">
                      {step.number}
                    </span>
                  </div>

                  {/* Right: content */}
                  <div className="pb-1">
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="hidden lg:block text-xs font-bold tracking-widest text-[#9B9890] uppercase">
                        {step.number}
                      </span>
                      <h3 className="text-2xl font-bold text-[#1C1B18] group-hover:text-[#0071E3] transition-colors duration-300">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-[#6B6860] leading-relaxed max-w-2xl">
                      {step.description}
                    </p>
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

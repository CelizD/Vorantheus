'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Clock,
  CreditCard,
  Pencil,
  Globe,
  Headphones,
  MapPin,
  Sparkles,
  LayoutGrid,
  Shield,
  TrendingUp,
  ChevronDown,
  type LucideIcon,
} from 'lucide-react'
import { faqs } from '@/data/faqs'
import { getWhatsAppUrl } from '@/lib/site'

const FAQ_ICONS: LucideIcon[] = [
  Clock,        // ¿Cuánto tiempo tarda en completarse un proyecto?
  CreditCard,   // ¿Cómo es el proceso de pago?
  Pencil,       // ¿Puedo pedir cambios durante el desarrollo?
  Globe,        // ¿El proyecto incluye hosting y dominio?
  Headphones,   // ¿Qué pasa si necesito soporte después de entregar el proyecto?
  MapPin,       // ¿Pueden trabajar con negocios fuera de México?
  Sparkles,     // ¿Mi proyecto será único o usan plantillas?
  LayoutGrid,   // ¿Puedo ver ejemplos de trabajos anteriores?
  Shield,       // ¿Ofrecen garantía de satisfacción?
  TrendingUp,   // ¿Puedo escalar o añadir funcionalidades después?
]

function FAQItem({
  question,
  answer,
  index,
  isOpen,
  onToggle,
  Icon,
}: {
  question: string
  answer: string
  index: number
  isOpen: boolean
  onToggle: () => void
  Icon: LucideIcon
}) {
  const panelId = `faq-panel-${index}`
  const buttonId = `faq-btn-${index}`

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.4, delay: index * 0.04 }}
      className="border-b border-black/[0.07]"
    >
      <button
        id={buttonId}
        onClick={onToggle}
        className="w-full flex items-center gap-5 py-6 text-left group"
        aria-expanded={isOpen}
        aria-controls={panelId}
      >
        {/* Icon box */}
        <span
          className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-[background-color,border-color] duration-300"
          style={{
            background: isOpen ? 'rgba(0,113,227,0.10)' : 'rgba(28,27,24,0.06)',
            border: `1px solid ${isOpen ? 'rgba(0,113,227,0.28)' : 'rgba(28,27,24,0.10)'}`,
          }}
          aria-hidden="true"
        >
          <Icon
            className="transition-colors duration-300"
            style={{ color: isOpen ? '#0071E3' : 'rgba(28,27,24,0.38)', width: 18, height: 18 }}
          />
        </span>

        {/* Question */}
        <span
          className={`flex-1 text-[17px] font-medium transition-colors duration-200 leading-snug ${
            isOpen ? 'text-ink' : 'text-ink/65 group-hover:text-ink'
          }`}
        >
          {question}
        </span>

        {/* Chevron toggle */}
        <span
          aria-hidden="true"
          className={`shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-[border-color,color,transform] duration-300 ${
            isOpen
              ? 'border-[#0071E3]/40 text-[#0071E3] rotate-180'
              : 'border-black/15 text-ink/30 group-hover:border-black/30 group-hover:text-ink/60'
          }`}
        >
          <ChevronDown className="w-3.5 h-3.5" />
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={buttonId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="pb-7 pl-[60px]">
              <p
                className="text-muted leading-relaxed max-w-3xl border-l-2 pl-5"
                style={{ borderColor: 'rgba(0,113,227,0.35)' }}
              >
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const waUrl = getWhatsAppUrl('Hola, tengo una pregunta antes de cotizar mi proyecto.')

  return (
    <section id="faq" className="section-light">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-32">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="tag">Preguntas frecuentes</span>
          <h2
            className="mt-6 text-5xl sm:text-6xl font-black text-ink tracking-tight leading-tight"
            style={{ letterSpacing: '-0.02em' }}
          >
            Todo lo que necesitas saber.
          </h2>
        </motion.div>

        <div className="border-t border-black/[0.07]">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              index={index}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              Icon={FAQ_ICONS[index] ?? Clock}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-14 flex items-center gap-3 text-muted text-sm"
        >
          <span>¿Tienes otra pregunta?</span>
          {waUrl && (
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0071E3] hover:text-ink transition-colors duration-200 font-medium"
            >
              Escríbenos por WhatsApp →
            </a>
          )}
        </motion.div>
      </div>
    </section>
  )
}

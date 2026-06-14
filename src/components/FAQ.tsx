'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import { faqs } from '@/data/faqs'
import { getWhatsAppUrl } from '@/lib/site'

function FAQItem({
  question,
  answer,
  index,
  isOpen,
  onToggle,
}: {
  question: string
  answer: string
  index: number
  isOpen: boolean
  onToggle: () => void
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
        className="w-full flex items-center justify-between gap-6 py-7 text-left group"
        aria-expanded={isOpen}
        aria-controls={panelId}
      >
        <span
          className={`text-lg font-medium transition-colors duration-200 ${
            isOpen ? 'text-ink' : 'text-ink/70 group-hover:text-ink'
          }`}
        >
          {question}
        </span>
        <span
          aria-hidden="true"
          className={`shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-[border-color,color] duration-300 ${
            isOpen
              ? 'border-[#0071E3] text-[#0071E3]'
              : 'border-black/20 text-ink/40 group-hover:border-black/40 group-hover:text-ink/70'
          }`}
        >
          {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
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
            <p className="pb-7 text-muted leading-relaxed max-w-3xl">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

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
          <a
            href={getWhatsAppUrl('Hola, tengo una pregunta antes de cotizar mi proyecto.')}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0071E3] hover:text-ink transition-colors duration-200 font-medium"
          >
            Escríbenos por WhatsApp →
          </a>
        </motion.div>
      </div>
    </section>
  )
}

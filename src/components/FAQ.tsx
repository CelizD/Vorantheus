'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import { faqs } from '@/data/faqs'

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
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.4, delay: index * 0.04 }}
      className="border-b border-white/[0.07]"
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-6 py-7 text-left group"
        aria-expanded={isOpen}
      >
        <span className={`text-lg font-medium transition-colors duration-200 ${isOpen ? 'text-white' : 'text-white/70 group-hover:text-white'}`}>
          {question}
        </span>
        <span className={`shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${
          isOpen
            ? 'border-[#0B84F3] text-[#0B84F3]'
            : 'border-white/20 text-white/40 group-hover:border-white/40 group-hover:text-white/70'
        }`}>
          {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="pb-7 text-white/50 leading-relaxed max-w-3xl">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="section-mid">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-32">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="tag">Preguntas frecuentes</span>
          <h2 className="mt-6 text-5xl sm:text-6xl font-black text-white tracking-tight leading-tight">
            Todo lo que necesitas saber.
          </h2>
        </motion.div>

        <div className="border-t border-white/[0.07]">
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
          className="mt-14 flex items-center gap-3 text-white/40 text-sm"
        >
          <span>¿Tienes otra pregunta?</span>
          <a
            href={`https://wa.me/5219991234567`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0B84F3] hover:text-white transition-colors duration-200 font-medium"
          >
            Escríbenos por WhatsApp →
          </a>
        </motion.div>
      </div>
    </section>
  )
}

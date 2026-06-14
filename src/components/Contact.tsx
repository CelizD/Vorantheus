'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, MessageCircle, Mail, Instagram, Facebook } from 'lucide-react'
import { getWhatsAppUrl, siteConfig } from '@/lib/site'
export default function Contact() {
  return (
    <section id="contacto" style={{ background: '#000' }}>

      {/* Big CTA band */}
      <div className="border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="tag">Empecemos</span>
            <h2
              className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.04]"
              style={{ letterSpacing: '-0.02em' }}
            >
              ¿Listo para hacer crecer{' '}
              tu negocio?
            </h2>
            <p className="mt-8 text-xl text-white/40 leading-relaxed max-w-xl">
              La primera consulta es gratis. Cuéntanos tu idea y te enviamos una propuesta en menos de 24 horas.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/cotizar"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-[#0071E3] hover:bg-[#0077ED] text-white font-semibold text-base rounded-full transition-all duration-200 glow-blue"
              >
                Cotizar proyecto gratis
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <a
                href={getWhatsAppUrl('Hola, quiero cotizar un proyecto con Vorantheus.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 border border-white/15 hover:border-white/30 text-white font-medium text-base rounded-full transition-all duration-200 hover:bg-white/5"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp directo
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Contact info bar */}
      <div className="border-t border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8"
          >
            <div className="flex flex-col sm:flex-row gap-8 text-sm text-white/30">
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2 hover:text-white transition-colors duration-200"
              >
                <Mail className="w-4 h-4" />
                {siteConfig.email}
              </a>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors duration-200"
              >
                <MessageCircle className="w-4 h-4" />
                {siteConfig.whatsappDisplay}
              </a>
              <span className="text-white/20">{siteConfig.location}</span>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full border border-white/[0.08] flex items-center justify-center text-white/30 hover:text-white hover:border-white/25 transition-all duration-200"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full border border-white/[0.08] flex items-center justify-center text-white/30 hover:text-white hover:border-white/25 transition-all duration-200"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

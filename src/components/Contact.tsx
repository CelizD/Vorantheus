'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, MessageCircle, Mail, Instagram, Facebook } from 'lucide-react'
import { getWhatsAppUrl, siteConfig } from '@/lib/site'

const departments = [
  { label: 'Ventas y cotizaciones', email: siteConfig.salesEmail },
  { label: 'Soporte técnico', email: siteConfig.supportEmail },
  { label: 'Facturación', email: siteConfig.billingEmail },
]

export default function Contact() {
  const waQuoteUrl = getWhatsAppUrl('Hola, quiero cotizar un proyecto con Vorantheus.')
  const waContactUrl = getWhatsAppUrl()
  return (
    <section id="contacto" style={{ background: '#1C1B18' }}>

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
            <span
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest border"
              style={{
                color: 'rgba(255,255,255,0.7)',
                background: 'rgba(255,255,255,0.06)',
                borderColor: 'rgba(255,255,255,0.14)',
              }}
            >
              Empecemos
            </span>
            <h2
              className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.04]"
              style={{ letterSpacing: '-0.02em' }}
            >
              ¿Listo para hacer crecer
              <br />
              tu negocio?
            </h2>
            <p className="mt-8 text-xl text-white/50 leading-relaxed max-w-xl">
              La primera consulta es gratis. Cuéntanos tu idea y te enviamos una propuesta en menos de 24 horas.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/cotizar"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-[#0071E3] hover:bg-[#0077ED] text-white font-semibold text-base rounded-full transition-[background-color,transform] duration-200 active:scale-[0.97]"
              >
                Cotizar proyecto gratis
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              {waQuoteUrl && (
                <a
                  href={waQuoteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 hover:border-white/40 text-white font-medium text-base rounded-full transition-all duration-200 hover:bg-white/5"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp directo
                </a>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Contact info bar */}
      <div className="border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8"
          >
            <div className="flex flex-col sm:flex-row gap-8 text-sm text-white/40">
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2 hover:text-white transition-colors duration-200"
              >
                <Mail className="w-4 h-4" />
                {siteConfig.email}
              </a>
              {waContactUrl && siteConfig.whatsappDisplay && (
                <a
                  href={waContactUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white transition-colors duration-200"
                >
                  <MessageCircle className="w-4 h-4" />
                  {siteConfig.whatsappDisplay}
                </a>
              )}
              <span className="text-white/25">{siteConfig.location}</span>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full border border-white/[0.1] flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-all duration-200"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full border border-white/[0.1] flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-all duration-200"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Department emails */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-8 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row gap-6 sm:gap-12"
          >
            {departments.map((d) => (
              <a
                key={d.email}
                href={`mailto:${d.email}`}
                className="group flex flex-col gap-0.5"
              >
                <span className="text-[11px] uppercase tracking-widest text-white/35">
                  {d.label}
                </span>
                <span className="text-sm text-white/55 group-hover:text-white transition-colors duration-200">
                  {d.email}
                </span>
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

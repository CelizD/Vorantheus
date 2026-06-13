'use client'

import { motion } from 'framer-motion'
import { MessageCircle, Mail, Instagram, Facebook, ExternalLink, MapPin } from 'lucide-react'

const contactMethods = [
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: '+52 1 999 123 4567',
    description: 'Respuesta inmediata en horario de negocio',
    href: `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP || '5219991234567'}?text=${encodeURIComponent('Hola, me interesa conocer más sobre sus servicios')}`,
    color: 'from-green-500 to-green-600',
    badge: 'Más rápido',
  },
  {
    icon: Mail,
    label: 'Correo electrónico',
    value: 'hola@vorantheus.com',
    description: 'Enviamos propuestas detalladas por correo',
    href: 'mailto:hola@vorantheus.com',
    color: 'from-electric to-voBlue',
    badge: null,
  },
  {
    icon: MapPin,
    label: 'Ubicación',
    value: 'Mérida, Yucatán, México',
    description: 'Atendemos clientes en toda Latinoamérica',
    href: '#',
    color: 'from-voPurple to-electric',
    badge: null,
  },
]

const socialLinks = [
  {
    icon: Instagram,
    label: 'Instagram',
    href: 'https://instagram.com/vorantheus',
    username: '@vorantheus',
  },
  {
    icon: Facebook,
    label: 'Facebook',
    href: 'https://facebook.com/vorantheus',
    username: 'Vorantheus',
  },
  {
    icon: ExternalLink,
    label: 'TikTok',
    href: 'https://tiktok.com/@vorantheus',
    username: '@vorantheus',
  },
]

export default function Contact() {
  return (
    <section id="contacto" className="py-24 bg-navy relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-electric/30 to-transparent" />
      <div className="absolute top-0 right-0 w-80 h-80 bg-electric/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-voPurple/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-electric/30 bg-electric/10 text-electric text-sm font-medium mb-4">
            Hablemos
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            ¿Listo para{' '}
            <span className="gradient-text">comenzar?</span>
          </h2>
          <p className="max-w-2xl mx-auto text-voGray text-lg leading-relaxed">
            Escríbenos por el canal que prefieras. Respondemos en menos de 24 horas
            y la primera consulta es completamente gratuita.
          </p>
        </motion.div>

        {/* Contact cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {contactMethods.map((method, index) => {
            const Icon = method.icon
            return (
              <motion.a
                key={method.label}
                href={method.href}
                target={method.href.startsWith('http') ? '_blank' : undefined}
                rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="glass-card rounded-2xl p-6 border border-white/8 hover:border-electric/30 hover:shadow-electric transition-all duration-300 flex flex-col gap-4 group"
              >
                <div className="flex items-start justify-between">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${method.color} flex items-center justify-center shadow-lg`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  {method.badge && (
                    <span className="px-2.5 py-1 rounded-full bg-electric/20 text-electric text-xs font-bold">
                      {method.badge}
                    </span>
                  )}
                </div>
                <div>
                  <p className="text-voGray text-sm mb-1">{method.label}</p>
                  <p className="text-white font-bold text-lg group-hover:text-electric transition-colors">
                    {method.value}
                  </p>
                  <p className="text-voGray text-xs mt-1">{method.description}</p>
                </div>
              </motion.a>
            )
          })}
        </div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <p className="text-voGray text-sm mb-6">Síguenos en redes sociales</p>
          <div className="flex items-center justify-center gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 glass-card rounded-xl border border-white/8 hover:border-electric/30 text-voGray hover:text-white hover:shadow-electric transition-all duration-300 group"
                >
                  <Icon className="w-5 h-5 group-hover:text-electric transition-colors" />
                  <span className="text-sm font-medium">{social.username}</span>
                </a>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

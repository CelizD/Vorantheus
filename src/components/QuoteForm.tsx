'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion } from 'framer-motion'
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'
import { supabase, supabaseConfigured } from '@/lib/supabase'

const quoteSchema = z.object({
  nombre: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  correo: z.string().email('Ingresa un correo electrónico válido'),
  whatsapp: z
    .string()
    .min(10, 'El número debe tener al menos 10 dígitos')
    .regex(/^\+?[\d\s\-()]+$/, 'Número de teléfono inválido'),
  negocio: z.string().min(2, 'El nombre del negocio es requerido'),
  tipo_proyecto: z.string().min(1, 'Selecciona un tipo de proyecto'),
  presupuesto: z.string().min(1, 'Selecciona un rango de presupuesto'),
  descripcion: z
    .string()
    .min(30, 'Por favor describe tu proyecto con al menos 30 caracteres')
    .max(1000, 'La descripción no puede superar 1000 caracteres'),
})

type QuoteFormData = z.infer<typeof quoteSchema>

const tiposProyecto = [
  'Página web profesional',
  'Landing page',
  'Tienda en línea (e-commerce)',
  'Sistema administrativo / ERP',
  'Aplicación móvil',
  'Chatbot / Automatización con IA',
  'Mantenimiento mensual',
  'Otro / No estoy seguro',
]

const presupuestos = [
  'Menos de $8,000 MXN',
  '$8,000 - $15,000 MXN',
  '$15,000 - $30,000 MXN',
  '$30,000 - $60,000 MXN',
  'Más de $60,000 MXN',
  'No lo sé todavía',
]

function FieldError({ message }: { message?: string }) {
  if (!message) return null
  return (
    <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
      <AlertCircle className="w-3 h-3" />
      {message}
    </p>
  )
}

export default function QuoteForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteSchema),
  })

  const descripcion = watch('descripcion', '')

  const onSubmit = async (data: QuoteFormData) => {
    setStatus('loading')

    try {
      if (supabaseConfigured && supabase) {
        const { error } = await supabase.from('quotes').insert([
          {
            nombre: data.nombre,
            correo: data.correo,
            whatsapp: data.whatsapp,
            negocio: data.negocio,
            tipo_proyecto: data.tipo_proyecto,
            presupuesto: data.presupuesto,
            descripcion: data.descripcion,
            created_at: new Date().toISOString(),
          },
        ])

        if (error) throw error
      } else {
        // Fallback: simulate a successful submission when Supabase is not configured
        await new Promise((resolve) => setTimeout(resolve, 1200))
      }

      setStatus('success')
      reset()
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <section id="cotizar" className="py-24 bg-carbon">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="glass-card rounded-3xl p-12 text-center border border-electric/30 shadow-electric-lg"
          >
            <div className="w-20 h-20 rounded-full bg-electric/20 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-electric" />
            </div>
            <h3 className="text-3xl font-black text-white mb-4">¡Solicitud enviada!</h3>
            <p className="text-voGray text-lg leading-relaxed mb-8">
              Hemos recibido tu cotización. Nuestro equipo te contactará en las próximas{' '}
              <strong className="text-electric">24 horas</strong> para discutir tu proyecto.
            </p>
            <button
              onClick={() => setStatus('idle')}
              className="px-8 py-3 bg-electric hover:bg-voBlue text-white font-bold rounded-xl transition-all duration-300 hover:scale-105"
            >
              Enviar otra cotización
            </button>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section id="cotizar" className="py-24 bg-carbon relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-electric/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-electric/30 bg-electric/10 text-electric text-sm font-medium mb-4">
            Sin costo ni compromiso
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Cotiza tu <span className="gradient-text">proyecto</span>
          </h2>
          <p className="max-w-xl mx-auto text-voGray text-lg leading-relaxed">
            Cuéntanos sobre tu proyecto y en menos de 24 horas recibirás una propuesta personalizada.
          </p>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card rounded-3xl p-8 border border-white/10"
        >
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
            {/* Row: Nombre + Correo */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-voGray mb-1.5">
                  Nombre completo <span className="text-electric">*</span>
                </label>
                <input
                  {...register('nombre')}
                  type="text"
                  placeholder="Juan Pérez"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-voGray/50 focus:border-electric focus:bg-electric/5 outline-none transition-all duration-200 text-sm"
                />
                <FieldError message={errors.nombre?.message} />
              </div>
              <div>
                <label className="block text-sm font-medium text-voGray mb-1.5">
                  Correo electrónico <span className="text-electric">*</span>
                </label>
                <input
                  {...register('correo')}
                  type="email"
                  placeholder="juan@empresa.com"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-voGray/50 focus:border-electric focus:bg-electric/5 outline-none transition-all duration-200 text-sm"
                />
                <FieldError message={errors.correo?.message} />
              </div>
            </div>

            {/* Row: WhatsApp + Negocio */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-voGray mb-1.5">
                  WhatsApp <span className="text-electric">*</span>
                </label>
                <input
                  {...register('whatsapp')}
                  type="tel"
                  placeholder="+52 999 123 4567"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-voGray/50 focus:border-electric focus:bg-electric/5 outline-none transition-all duration-200 text-sm"
                />
                <FieldError message={errors.whatsapp?.message} />
              </div>
              <div>
                <label className="block text-sm font-medium text-voGray mb-1.5">
                  Nombre del negocio <span className="text-electric">*</span>
                </label>
                <input
                  {...register('negocio')}
                  type="text"
                  placeholder="Mi Empresa S.A."
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-voGray/50 focus:border-electric focus:bg-electric/5 outline-none transition-all duration-200 text-sm"
                />
                <FieldError message={errors.negocio?.message} />
              </div>
            </div>

            {/* Row: Tipo + Presupuesto */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-voGray mb-1.5">
                  Tipo de proyecto <span className="text-electric">*</span>
                </label>
                <select
                  {...register('tipo_proyecto')}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-electric focus:bg-electric/5 outline-none transition-all duration-200 text-sm appearance-none"
                >
                  <option value="" className="bg-[#050816]">Selecciona una opción</option>
                  {tiposProyecto.map((tipo) => (
                    <option key={tipo} value={tipo} className="bg-[#050816]">
                      {tipo}
                    </option>
                  ))}
                </select>
                <FieldError message={errors.tipo_proyecto?.message} />
              </div>
              <div>
                <label className="block text-sm font-medium text-voGray mb-1.5">
                  Presupuesto aproximado <span className="text-electric">*</span>
                </label>
                <select
                  {...register('presupuesto')}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-electric focus:bg-electric/5 outline-none transition-all duration-200 text-sm appearance-none"
                >
                  <option value="" className="bg-[#050816]">Selecciona un rango</option>
                  {presupuestos.map((p) => (
                    <option key={p} value={p} className="bg-[#050816]">
                      {p}
                    </option>
                  ))}
                </select>
                <FieldError message={errors.presupuesto?.message} />
              </div>
            </div>

            {/* Descripción */}
            <div>
              <label className="block text-sm font-medium text-voGray mb-1.5">
                Descripción del proyecto <span className="text-electric">*</span>
              </label>
              <textarea
                {...register('descripcion')}
                rows={5}
                placeholder="Cuéntanos sobre tu proyecto: ¿qué necesitas? ¿para qué fecha? ¿tienes diseño o referencias? Cualquier detalle que nos ayude a entender mejor tu proyecto..."
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-voGray/50 focus:border-electric focus:bg-electric/5 outline-none transition-all duration-200 text-sm resize-none"
              />
              <div className="flex justify-between items-center mt-1">
                <FieldError message={errors.descripcion?.message} />
                <span className="text-xs text-voGray/50 ml-auto">{descripcion.length}/1000</span>
              </div>
            </div>

            {/* Error message */}
            {status === 'error' && (
              <div className="flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
                <AlertCircle className="w-5 h-5 shrink-0" />
                <p>Ocurrió un error al enviar tu solicitud. Por favor intenta de nuevo o escríbenos directamente por WhatsApp.</p>
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={status === 'loading'}
              className="flex items-center justify-center gap-2 w-full px-8 py-4 bg-electric hover:bg-voBlue text-white font-bold text-lg rounded-2xl shadow-electric hover:shadow-electric-lg transition-all duration-300 hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {status === 'loading' ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Enviando solicitud...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Enviar cotización gratuita
                </>
              )}
            </button>

            <p className="text-center text-xs text-voGray/60">
              Al enviar este formulario, aceptas nuestra{' '}
              <a href="/privacidad" className="text-electric hover:text-white transition-colors">
                política de privacidad
              </a>
              . Respondemos en menos de 24 horas.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

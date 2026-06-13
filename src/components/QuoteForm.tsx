'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'
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

const inputClass =
  'w-full px-4 py-3 rounded-2xl bg-white/[0.03] border border-white/[0.08] text-white placeholder-white/25 focus:border-[#0B84F3] focus:bg-[#0B84F3]/[0.04] outline-none transition-all duration-200 text-sm'

const labelClass = 'block text-sm font-medium text-white/60 mb-2'

function FieldError({ message }: { message?: string }) {
  if (!message) return null
  return (
    <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
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
      <section id="cotizar" className="section-mid">
        <div className="max-w-2xl mx-auto px-6 lg:px-8 py-32">
          <motion.div
            initial={{ scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl p-12 text-center bg-white/[0.02] border border-white/[0.08]"
          >
            <div className="w-16 h-16 rounded-full bg-[#0B84F3]/15 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-[#0B84F3]" />
            </div>
            <h3 className="text-3xl font-black text-white mb-4">¡Solicitud enviada!</h3>
            <p className="text-white/50 text-lg leading-relaxed mb-8">
              Hemos recibido tu cotización. Te contactaremos en las próximas{' '}
              <strong className="text-white">24 horas</strong> para platicar tu proyecto.
            </p>
            <button
              onClick={() => setStatus('idle')}
              className="px-8 py-3.5 bg-white hover:bg-white/90 text-black font-semibold rounded-full transition-all duration-200"
            >
              Enviar otra cotización
            </button>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section id="cotizar" className="section-mid">
      <div className="max-w-2xl mx-auto px-6 lg:px-8 py-32">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="tag">Sin costo ni compromiso</span>
          <h2 className="mt-6 text-5xl sm:text-6xl font-black text-white tracking-tight leading-tight">
            Cuéntanos tu idea.
          </h2>
          <p className="mt-6 text-xl text-white/50 leading-relaxed">
            En menos de 24 horas recibirás una propuesta personalizada para tu proyecto.
          </p>
        </motion.div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-6"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>Nombre completo *</label>
              <input {...register('nombre')} type="text" placeholder="Juan Pérez" className={inputClass} />
              <FieldError message={errors.nombre?.message} />
            </div>
            <div>
              <label className={labelClass}>Correo electrónico *</label>
              <input {...register('correo')} type="email" placeholder="juan@empresa.com" className={inputClass} />
              <FieldError message={errors.correo?.message} />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>WhatsApp *</label>
              <input {...register('whatsapp')} type="tel" placeholder="+52 999 123 4567" className={inputClass} />
              <FieldError message={errors.whatsapp?.message} />
            </div>
            <div>
              <label className={labelClass}>Nombre del negocio *</label>
              <input {...register('negocio')} type="text" placeholder="Mi Empresa S.A." className={inputClass} />
              <FieldError message={errors.negocio?.message} />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>Tipo de proyecto *</label>
              <select {...register('tipo_proyecto')} className={`${inputClass} appearance-none`}>
                <option value="" className="bg-[#0D1117]">Selecciona una opción</option>
                {tiposProyecto.map((tipo) => (
                  <option key={tipo} value={tipo} className="bg-[#0D1117]">{tipo}</option>
                ))}
              </select>
              <FieldError message={errors.tipo_proyecto?.message} />
            </div>
            <div>
              <label className={labelClass}>Presupuesto aproximado *</label>
              <select {...register('presupuesto')} className={`${inputClass} appearance-none`}>
                <option value="" className="bg-[#0D1117]">Selecciona un rango</option>
                {presupuestos.map((p) => (
                  <option key={p} value={p} className="bg-[#0D1117]">{p}</option>
                ))}
              </select>
              <FieldError message={errors.presupuesto?.message} />
            </div>
          </div>

          <div>
            <label className={labelClass}>Descripción del proyecto *</label>
            <textarea
              {...register('descripcion')}
              rows={5}
              placeholder="¿Qué necesitas? ¿Para qué fecha? ¿Tienes diseño o referencias? Cualquier detalle nos ayuda a entender mejor tu proyecto..."
              className={`${inputClass} resize-none`}
            />
            <div className="flex justify-between items-center mt-1.5">
              <FieldError message={errors.descripcion?.message} />
              <span className="text-xs text-white/25 ml-auto">{descripcion.length}/1000</span>
            </div>
          </div>

          {status === 'error' && (
            <div className="flex items-center gap-3 p-4 rounded-2xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
              <AlertCircle className="w-5 h-5 shrink-0" />
              <p>Ocurrió un error al enviar tu solicitud. Intenta de nuevo o escríbenos por WhatsApp.</p>
            </div>
          )}

          <button
            type="submit"
            disabled={status === 'loading'}
            className="group flex items-center justify-center gap-2 w-full px-8 py-4 bg-white hover:bg-white/90 text-black font-semibold text-base rounded-full transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === 'loading' ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Enviando...
              </>
            ) : (
              <>
                Enviar cotización gratuita
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </>
            )}
          </button>

          <p className="text-center text-xs text-white/30">
            Al enviar aceptas nuestra{' '}
            <a href="/privacidad" className="text-[#0B84F3] hover:text-white transition-colors">política de privacidad</a>
            . Respondemos en menos de 24 horas.
          </p>
        </motion.form>
      </div>
    </section>
  )
}

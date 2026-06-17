'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useForm, useWatch } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'
import {
  budgetRanges,
  projectTypes,
  quoteSchema,
  type QuoteFormData,
} from '@/lib/quote-schema'
import { getWhatsAppUrl } from '@/lib/site'

type SubmitStatus = 'idle' | 'loading' | 'success' | 'error'

const inputClass =
  'w-full px-4 py-3 rounded-2xl bg-white border border-black/[0.1] text-ink placeholder-muted/60 focus:border-[#0071E3] focus:ring-2 focus:ring-[#0071E3]/15 outline-none transition-all duration-200 text-sm'

const labelClass = 'block text-sm font-medium text-ink mb-2'

function FieldError({ message, id }: { message?: string; id: string }) {
  if (!message) return null
  return (
    <p id={id} className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
      <AlertCircle className="w-3 h-3" />
      {message}
    </p>
  )
}

function trackGenerateLead(tipoProyecto: string, origen: string) {
  const gtag = (window as Window & {
    gtag?: (event: string, action: string, params?: Record<string, string>) => void
  }).gtag

  gtag?.('event', 'generate_lead', {
    tipo_proyecto: tipoProyecto,
    origen,
  })
}

function getLeadContext(fallbackOrigen: string) {
  const params = new URLSearchParams(window.location.search)

  return {
    origen: params.get('origen') || fallbackOrigen,
    pagina: `${window.location.pathname}${window.location.search}`,
  }
}

function getValidOption(value: string | undefined, options: string[]) {
  return value && options.includes(value) ? value : ''
}

function getInitialOption(key: string, fallback: string | undefined, options: string[]) {
  if (typeof window === 'undefined') {
    return getValidOption(fallback, options)
  }

  return getValidOption(new URLSearchParams(window.location.search).get(key) ?? fallback, options)
}

interface QuoteFormProps {
  initialTipoProyecto?: string
  initialPresupuesto?: string
  initialOrigen?: string
}

export default function QuoteForm({
  initialTipoProyecto,
  initialPresupuesto,
  initialOrigen = 'cotizar',
}: QuoteFormProps) {
  const [status, setStatus] = useState<SubmitStatus>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const tipoProyectoInicial = getInitialOption('tipo', initialTipoProyecto, projectTypes)
  const presupuestoInicial = getInitialOption('presupuesto', initialPresupuesto, budgetRanges)

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteSchema),
    defaultValues: {
      nombre: '',
      correo: '',
      whatsapp: '',
      negocio: '',
      tipo_proyecto: tipoProyectoInicial,
      presupuesto: presupuestoInicial,
      descripcion: '',
    },
  })

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const tipoProyecto = getValidOption(
      params.get('tipo') ?? initialTipoProyecto,
      projectTypes,
    )
    const presupuesto = getValidOption(
      params.get('presupuesto') ?? initialPresupuesto,
      budgetRanges,
    )

    if (!tipoProyecto && !presupuesto) return

    reset({
      nombre: '',
      correo: '',
      whatsapp: '',
      negocio: '',
      tipo_proyecto: tipoProyecto,
      presupuesto,
      descripcion: '',
    })
  }, [initialPresupuesto, initialTipoProyecto, reset])

  const descripcion = useWatch({ control, name: 'descripcion' }) || ''

  const onSubmit = async (data: QuoteFormData) => {
    setStatus('loading')
    setErrorMessage('')

    try {
      const leadContext = getLeadContext(initialOrigen)
      const response = await fetch('/api/quotes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          origen: leadContext.origen,
          pagina: leadContext.pagina,
        }),
      })
      const result = (await response.json().catch(() => null)) as {
        ok?: boolean
        message?: string
      } | null

      if (!response.ok || !result?.ok) {
        throw new Error(result?.message || 'No pudimos enviar tu solicitud.')
      }

      trackGenerateLead(data.tipo_proyecto, leadContext.origen)
      setStatus('success')
      reset({
        nombre: '',
        correo: '',
        whatsapp: '',
        negocio: '',
        tipo_proyecto: tipoProyectoInicial,
        presupuesto: presupuestoInicial,
        descripcion: '',
      })
    } catch (error) {
      setStatus('error')
      setErrorMessage(
        error instanceof Error
          ? error.message
          : 'Ocurrió un error al enviar tu solicitud. Intenta de nuevo.',
      )
    }
  }

  if (status === 'success') {
    return (
      <section id="cotizar" className="section-light">
        <div className="max-w-2xl mx-auto px-6 lg:px-8 py-32">
          <motion.div
            initial={{ scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl p-12 text-center bg-white border border-black/[0.04] shadow-card"
          >
            <div className="w-16 h-16 rounded-full bg-[#0071E3]/10 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-[#0071E3]" />
            </div>
            <h3 className="text-3xl font-black text-ink mb-4">¡Solicitud enviada!</h3>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Hemos recibido tu cotización. Te contactaremos en las próximas{' '}
              <strong className="text-ink">24 horas</strong> para platicar tu proyecto.
            </p>
            <button
              type="button"
              onClick={() => setStatus('idle')}
              className="px-8 py-3.5 bg-[#0071E3] hover:bg-[#0077ED] text-white font-semibold rounded-full transition-all duration-200"
            >
              Enviar otra cotización
            </button>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section id="cotizar" className="section-light">
      <div className="max-w-2xl mx-auto px-6 lg:px-8 py-32">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="tag">Sin costo ni compromiso</span>
          <h2 className="mt-6 text-5xl sm:text-6xl font-black text-ink tracking-tight leading-tight">
            Cuéntanos tu idea.
          </h2>
          <p className="mt-6 text-xl text-muted leading-relaxed">
            En menos de 24 horas recibirás una propuesta personalizada para tu proyecto.
          </p>
        </motion.div>

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
              <label htmlFor="nombre" className={labelClass}>
                Nombre completo *
              </label>
              <input
                id="nombre"
                {...register('nombre')}
                type="text"
                placeholder="Juan Pérez"
                className={inputClass}
                aria-invalid={Boolean(errors.nombre)}
                aria-describedby={errors.nombre ? 'nombre-error' : undefined}
              />
              <FieldError id="nombre-error" message={errors.nombre?.message} />
            </div>
            <div>
              <label htmlFor="correo" className={labelClass}>
                Correo electrónico *
              </label>
              <input
                id="correo"
                {...register('correo')}
                type="email"
                placeholder="juan@empresa.com"
                className={inputClass}
                aria-invalid={Boolean(errors.correo)}
                aria-describedby={errors.correo ? 'correo-error' : undefined}
              />
              <FieldError id="correo-error" message={errors.correo?.message} />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="whatsapp" className={labelClass}>
                WhatsApp *
              </label>
              <input
                id="whatsapp"
                {...register('whatsapp')}
                type="tel"
                placeholder="+52 999 123 4567"
                className={inputClass}
                aria-invalid={Boolean(errors.whatsapp)}
                aria-describedby={errors.whatsapp ? 'whatsapp-error' : undefined}
              />
              <FieldError id="whatsapp-error" message={errors.whatsapp?.message} />
            </div>
            <div>
              <label htmlFor="negocio" className={labelClass}>
                Nombre del negocio *
              </label>
              <input
                id="negocio"
                {...register('negocio')}
                type="text"
                placeholder="Mi Empresa S.A."
                className={inputClass}
                aria-invalid={Boolean(errors.negocio)}
                aria-describedby={errors.negocio ? 'negocio-error' : undefined}
              />
              <FieldError id="negocio-error" message={errors.negocio?.message} />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="tipo_proyecto" className={labelClass}>
                Tipo de proyecto *
              </label>
              <select
                id="tipo_proyecto"
                {...register('tipo_proyecto')}
                defaultValue={tipoProyectoInicial}
                className={`${inputClass} appearance-none`}
                aria-invalid={Boolean(errors.tipo_proyecto)}
                aria-describedby={errors.tipo_proyecto ? 'tipo-proyecto-error' : undefined}
              >
                <option value="" className="bg-white text-ink">
                  Selecciona una opción
                </option>
                {projectTypes.map((tipo) => (
                  <option key={tipo} value={tipo} className="bg-white text-ink">
                    {tipo}
                  </option>
                ))}
              </select>
              <FieldError id="tipo-proyecto-error" message={errors.tipo_proyecto?.message} />
            </div>
            <div>
              <label htmlFor="presupuesto" className={labelClass}>
                Presupuesto aproximado *
              </label>
              <select
                id="presupuesto"
                {...register('presupuesto')}
                defaultValue={presupuestoInicial}
                className={`${inputClass} appearance-none`}
                aria-invalid={Boolean(errors.presupuesto)}
                aria-describedby={errors.presupuesto ? 'presupuesto-error' : undefined}
              >
                <option value="" className="bg-white text-ink">
                  Selecciona un rango
                </option>
                {budgetRanges.map((presupuesto) => (
                  <option key={presupuesto} value={presupuesto} className="bg-white text-ink">
                    {presupuesto}
                  </option>
                ))}
              </select>
              <FieldError id="presupuesto-error" message={errors.presupuesto?.message} />
            </div>
          </div>

          <div>
            <label htmlFor="descripcion" className={labelClass}>
              Descripción del proyecto *
            </label>
            <textarea
              id="descripcion"
              {...register('descripcion')}
              rows={5}
              placeholder="¿Qué necesitas? ¿Para qué fecha? ¿Tienes diseño o referencias? Cualquier detalle nos ayuda a entender mejor tu proyecto..."
              className={`${inputClass} resize-none`}
              aria-invalid={Boolean(errors.descripcion)}
              aria-describedby={errors.descripcion ? 'descripcion-error' : undefined}
            />
            <div className="flex justify-between items-center mt-1.5">
              <FieldError id="descripcion-error" message={errors.descripcion?.message} />
              <span className="text-xs text-muted/60 ml-auto">{descripcion.length}/1000</span>
            </div>
          </div>

          {status === 'error' && (
            <div className="flex items-start gap-3 p-4 rounded-2xl bg-red-50 border border-red-200 text-red-600 text-sm">
              <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
              <p>
                {errorMessage}{' '}
                {(() => {
                  const waUrl = getWhatsAppUrl('Hola, intenté cotizar en el sitio y necesito ayuda.')
                  return waUrl ? (
                    <a
                      href={waUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-ink hover:text-ink/80"
                    >
                      Escríbenos por WhatsApp.
                    </a>
                  ) : null
                })()}
              </p>
            </div>
          )}

          <button
            type="submit"
            disabled={status === 'loading'}
            className="group flex items-center justify-center gap-2 w-full px-8 py-4 bg-[#0071E3] hover:bg-[#0077ED] text-white font-semibold text-base rounded-full transition-[background-color,transform] duration-200 active:scale-[0.97] disabled:opacity-60 disabled:cursor-not-allowed"
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

          <p className="text-center text-xs text-muted">
            Al enviar aceptas nuestra{' '}
            <Link href="/privacidad" className="text-[#0071E3] hover:text-ink transition-colors">
              política de privacidad
            </Link>
            . Respondemos en menos de 24 horas.
          </p>
        </motion.form>
      </div>
    </section>
  )
}

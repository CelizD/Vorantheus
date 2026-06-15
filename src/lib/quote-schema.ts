import { z } from 'zod'

export const projectTypes = [
  'Página web profesional',
  'Landing page',
  'Tienda en línea (e-commerce)',
  'Sistema administrativo / ERP',
  'Aplicación móvil',
  'Chatbot / Automatización con IA',
  'Mantenimiento mensual',
  'Otro / No estoy seguro',
]

export const budgetRanges = [
  'Menos de $8,000 MXN',
  '$8,000 - $15,000 MXN',
  '$15,000 - $30,000 MXN',
  '$30,000 - $60,000 MXN',
  'Más de $60,000 MXN',
  'No lo sé todavía',
]

export const serviceQuoteTypes: Record<string, string> = {
  'paginas-web': 'Página web profesional',
  'landing-pages': 'Landing page',
  'tiendas-en-linea': 'Tienda en línea (e-commerce)',
  'sistemas-administrativos': 'Sistema administrativo / ERP',
  'aplicaciones-moviles': 'Aplicación móvil',
  'automatizacion-ia': 'Chatbot / Automatización con IA',
  mantenimiento: 'Mantenimiento mensual',
}

export const quoteSchema = z.object({
  nombre: z.string().trim().min(2, 'El nombre debe tener al menos 2 caracteres').max(120),
  correo: z.string().trim().email('Ingresa un correo electrónico válido').max(254),
  whatsapp: z
    .string()
    .trim()
    .min(10, 'El número debe tener al menos 10 dígitos')
    .max(30)
    .regex(/^\+?[\d\s\-()]+$/, 'Número de teléfono inválido')
    .refine((v) => (v.match(/\d/g)?.length ?? 0) >= 10, {
      message: 'El número debe tener al menos 10 dígitos',
    }),
  negocio: z.string().trim().min(2, 'El nombre del negocio es requerido').max(200),
  tipo_proyecto: z.enum(projectTypes as [string, ...string[]], {
    errorMap: () => ({ message: 'Selecciona un tipo de proyecto válido' }),
  }),
  presupuesto: z.enum(budgetRanges as [string, ...string[]], {
    errorMap: () => ({ message: 'Selecciona un rango de presupuesto válido' }),
  }),
  descripcion: z
    .string()
    .trim()
    .min(30, 'Por favor describe tu proyecto con al menos 30 caracteres')
    .max(1000, 'La descripción no puede superar 1000 caracteres'),
})

export const quoteRequestSchema = quoteSchema.extend({
  origen: z.string().trim().max(120).optional(),
  pagina: z.string().trim().max(200).optional(),
})

export type QuoteFormData = z.infer<typeof quoteSchema>
export type QuoteRequestData = z.infer<typeof quoteRequestSchema>

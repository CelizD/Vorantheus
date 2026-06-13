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
  nombre: z.string().trim().min(2, 'El nombre debe tener al menos 2 caracteres'),
  correo: z.string().trim().email('Ingresa un correo electrónico válido'),
  whatsapp: z
    .string()
    .trim()
    .min(10, 'El número debe tener al menos 10 dígitos')
    .regex(/^\+?[\d\s\-()]+$/, 'Número de teléfono inválido'),
  negocio: z.string().trim().min(2, 'El nombre del negocio es requerido'),
  tipo_proyecto: z.string().trim().min(1, 'Selecciona un tipo de proyecto'),
  presupuesto: z.string().trim().min(1, 'Selecciona un rango de presupuesto'),
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

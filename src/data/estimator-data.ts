import { Globe, ShoppingCart, Database, Smartphone, Layout, Bot } from 'lucide-react'
import type { ProjectType, Feature, Urgency } from '@/lib/estimator'

export const projectTypes: ProjectType[] = [
  { id: 'pagina-web', label: 'Página web', icon: Globe, base: [45000, 120000] },
  { id: 'tienda-online', label: 'Tienda en línea', icon: ShoppingCart, base: [85000, 240000] },
  { id: 'sistema-admin', label: 'Sistema administrativo', icon: Database, base: [160000, 520000] },
  { id: 'app-movil', label: 'App móvil', icon: Smartphone, base: [220000, 750000] },
  { id: 'landing', label: 'Landing page', icon: Layout, base: [18000, 55000] },
  { id: 'ia', label: 'Automatización IA', icon: Bot, base: [90000, 320000] },
]

export const featuresByType: Record<string, Feature[]> = {
  'pagina-web': [
    { id: 'cms', label: 'Panel de administración (CMS)', add: [20000, 55000] },
    { id: 'blog', label: 'Blog o noticias', add: [12000, 30000] },
    { id: 'multiidioma', label: 'Multiidioma', add: [18000, 45000] },
    { id: 'seo', label: 'SEO avanzado', add: [15000, 40000] },
  ],
  'tienda-online': [
    { id: 'pagos', label: 'Múltiples métodos de pago', add: [25000, 65000] },
    { id: 'cupones', label: 'Cupones y descuentos', add: [15000, 35000] },
    { id: 'inventario', label: 'Inventario avanzado', add: [35000, 95000] },
    { id: 'carrito', label: 'Recuperación de carrito abandonado', add: [18000, 45000] },
  ],
  'sistema-admin': [
    { id: 'crm', label: 'Módulo CRM (clientes)', add: [45000, 120000] },
    { id: 'cfdi', label: 'Facturación electrónica CFDI', add: [50000, 140000] },
    { id: 'inventario', label: 'Control de inventario', add: [55000, 160000] },
    { id: 'reportes', label: 'Reportes y analytics', add: [35000, 95000] },
  ],
  'app-movil': [
    { id: 'push', label: 'Notificaciones push', add: [30000, 85000] },
    { id: 'pagos', label: 'Pagos in-app', add: [60000, 180000] },
    { id: 'geo', label: 'Geolocalización y mapas', add: [65000, 190000] },
    { id: 'offline', label: 'Modo sin conexión', add: [70000, 220000] },
  ],
  landing: [
    { id: 'ab', label: 'A/B testing', add: [8000, 22000] },
    { id: 'crm', label: 'Integración con CRM / email marketing', add: [12000, 35000] },
    { id: 'pixels', label: 'Píxeles y analytics avanzado', add: [7000, 18000] },
  ],
  ia: [
    { id: 'whatsapp', label: 'Chatbot en WhatsApp Business', add: [45000, 140000] },
    { id: 'datos', label: 'Análisis automático de datos', add: [55000, 180000] },
    { id: 'flujos', label: 'Automatización de flujos de trabajo', add: [35000, 120000] },
    { id: 'crm', label: 'Integración con sistemas existentes', add: [40000, 150000] },
  ],
}

export const urgencies: Urgency[] = [
  { id: 'calma', label: 'Sin prisa', desc: 'Más de 12 semanas', multiplier: 1.0 },
  { id: 'normal', label: 'Normal', desc: '8 a 12 semanas', multiplier: 1.12 },
  { id: 'urgente', label: 'Urgente', desc: 'Menos de 8 semanas', multiplier: 1.35 },
]

import { Globe, ShoppingCart, Database, Smartphone, Layout, Bot } from 'lucide-react'
import type { ProjectType, Feature, Urgency } from '@/lib/estimator'

export const projectTypes: ProjectType[] = [
  { id: 'pagina-web', label: 'Página web', icon: Globe, base: [15000, 35000] },
  { id: 'tienda-online', label: 'Tienda en línea', icon: ShoppingCart, base: [20000, 50000] },
  { id: 'sistema-admin', label: 'Sistema administrativo', icon: Database, base: [35000, 90000] },
  { id: 'app-movil', label: 'App móvil', icon: Smartphone, base: [45000, 120000] },
  { id: 'landing', label: 'Landing page', icon: Layout, base: [7000, 18000] },
  { id: 'ia', label: 'Automatización IA', icon: Bot, base: [22000, 65000] },
]

export const featuresByType: Record<string, Feature[]> = {
  'pagina-web': [
    { id: 'cms', label: 'Panel de administración (CMS)', add: [4000, 8000] },
    { id: 'blog', label: 'Blog o noticias', add: [3000, 6000] },
    { id: 'multiidioma', label: 'Multiidioma', add: [5000, 10000] },
    { id: 'seo', label: 'SEO avanzado', add: [3000, 5000] },
  ],
  'tienda-online': [
    { id: 'pagos', label: 'Múltiples métodos de pago', add: [3000, 6000] },
    { id: 'cupones', label: 'Cupones y descuentos', add: [2000, 4000] },
    { id: 'inventario', label: 'Inventario avanzado', add: [5000, 12000] },
    { id: 'carrito', label: 'Recuperación de carrito abandonado', add: [3000, 5000] },
  ],
  'sistema-admin': [
    { id: 'crm', label: 'Módulo CRM (clientes)', add: [10000, 20000] },
    { id: 'cfdi', label: 'Facturación electrónica CFDI', add: [8000, 15000] },
    { id: 'inventario', label: 'Control de inventario', add: [8000, 15000] },
    { id: 'reportes', label: 'Reportes y analytics', add: [5000, 10000] },
  ],
  'app-movil': [
    { id: 'push', label: 'Notificaciones push', add: [5000, 10000] },
    { id: 'pagos', label: 'Pagos in-app', add: [8000, 15000] },
    { id: 'geo', label: 'Geolocalización y mapas', add: [6000, 12000] },
    { id: 'offline', label: 'Modo sin conexión', add: [8000, 15000] },
  ],
  landing: [
    { id: 'ab', label: 'A/B testing', add: [2000, 4000] },
    { id: 'crm', label: 'Integración con CRM / email marketing', add: [3000, 6000] },
    { id: 'pixels', label: 'Píxeles y analytics avanzado', add: [2000, 4000] },
  ],
  ia: [
    { id: 'whatsapp', label: 'Chatbot en WhatsApp Business', add: [10000, 20000] },
    { id: 'datos', label: 'Análisis automático de datos', add: [8000, 15000] },
    { id: 'flujos', label: 'Automatización de flujos de trabajo', add: [5000, 10000] },
    { id: 'crm', label: 'Integración con sistemas existentes', add: [5000, 10000] },
  ],
}

export const urgencies: Urgency[] = [
  { id: 'calma', label: 'Sin prisa', desc: 'Más de 2 meses', multiplier: 1.0 },
  { id: 'normal', label: 'Normal', desc: '4 a 8 semanas', multiplier: 1.1 },
  { id: 'urgente', label: 'Urgente', desc: 'Menos de 4 semanas', multiplier: 1.3 },
]

import type { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/site'

const routes = [
  '',
  '/servicios',
  '/paquetes',
  '/portafolio',
  '/nosotros',
  '/estimador',
  '/cotizar',
  '/contacto',
  '/privacidad',
  '/terminos',
  '/blog',
  '/blog/cuanto-cuesta-pagina-web-mexico',
  '/blog/react-vs-wordpress',
  '/blog/sistema-administrativo-vs-excel',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified,
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : route === '/cotizar' ? 0.9 : 0.7,
  }))
}

import type { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/site'

const routes = [
  '',
  '/servicios',
  '/paquetes',
  '/portafolio',
  '/cotizar',
  '/contacto',
  '/privacidad',
  '/terminos',
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

import type { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/site'
import { blogPosts } from '@/data/blog'
import { technologies } from '@/data/technologies'
import { services } from '@/data/services'
import { portfolioItems } from '@/data/portfolio'

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
]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  const staticPages: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified,
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : route === '/cotizar' ? 0.9 : 0.7,
  }))

  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: new Date(`${post.date}T00:00:00`),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  const techPages: MetadataRoute.Sitemap = technologies.map((tech) => ({
    url: `${siteConfig.url}/tecnologias/${tech.slug}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.65,
  }))

  const servicePages: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${siteConfig.url}/servicios/${s.id}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }))

  const portfolioPages: MetadataRoute.Sitemap = portfolioItems.map((p) => ({
    url: `${siteConfig.url}/portafolio/${p.id}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.65,
  }))

  return [...staticPages, ...blogPages, ...techPages, ...servicePages, ...portfolioPages]
}

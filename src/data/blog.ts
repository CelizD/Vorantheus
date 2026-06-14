export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string        // 'YYYY-MM-DD'
  readTime: string    // e.g. '8 min'
  category: string
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'cuanto-cuesta-pagina-web-mexico',
    title: '¿Cuánto cuesta hacer una página web en México en 2025?',
    description: 'Guía completa de precios reales para páginas web profesionales en México. Qué factores afectan el costo y cómo no pagar de más.',
    date: '2025-06-01',
    readTime: '8 min',
    category: 'Precios',
  },
  {
    slug: 'react-vs-wordpress',
    title: 'React vs WordPress: ¿cuál elegir para tu negocio en 2025?',
    description: 'Comparativa honesta entre las dos tecnologías más populares para sitios web. Cuándo usar cada una, ventajas y desventajas reales.',
    date: '2025-05-15',
    readTime: '6 min',
    category: 'Tecnología',
  },
  {
    slug: 'sistema-administrativo-vs-excel',
    title: 'Por qué tu negocio ya superó el Excel (y qué hacer al respecto)',
    description: 'Si manejas tu inventario, ventas o clientes en hojas de cálculo, estás dejando dinero sobre la mesa. Aquí explicamos por qué y cómo dar el salto.',
    date: '2025-04-28',
    readTime: '5 min',
    category: 'Negocios',
  },
]

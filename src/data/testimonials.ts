export interface Testimonial {
  id: string
  quote: string
  name: string
  role: string
  company: string
  /** Initials shown in the avatar circle */
  initials: string
  /** Tailwind gradient classes for the avatar background */
  avatarColor: string
  rating: number
}

export const testimonials: Testimonial[] = [
  {
    id: 'restaurante-laparrilla',
    quote:
      'Pasamos de recibir pedidos por mensajes sueltos a tener un sistema que organiza todo. Las ventas en línea subieron muchísimo desde el primer mes.',
    name: 'Laura Méndez',
    role: 'Dueña',
    company: 'La Parrilla del Sur',
    initials: 'LM',
    avatarColor: 'from-[#0071E3] to-[#2563EB]',
    rating: 5,
  },
  {
    id: 'clinica-dental',
    quote:
      'El sistema de citas nos ahorró horas de trabajo a la semana. Todo es claro, rápido y el soporte siempre responde cuando lo necesitamos.',
    name: 'Dr. Carlos Rivas',
    role: 'Director',
    company: 'Clínica Dental Sonrisa',
    initials: 'CR',
    avatarColor: 'from-[#7C3AED] to-[#0071E3]',
    rating: 5,
  },
  {
    id: 'boutique-online',
    quote:
      'Querían una tienda que se viera profesional y así fue. Diseño impecable, carga rapidísimo y vender en línea por fin es sencillo.',
    name: 'Andrea Sosa',
    role: 'Fundadora',
    company: 'Boutique Aurora',
    initials: 'AS',
    avatarColor: 'from-[#0B84F3] to-[#7C3AED]',
    rating: 5,
  },
  {
    id: 'distribuidora',
    quote:
      'El panel de inventario nos cambió la forma de trabajar. Ahora sabemos en tiempo real qué tenemos, qué se vende y qué falta. Vale cada peso.',
    name: 'Miguel Ángel Torres',
    role: 'Gerente de operaciones',
    company: 'Distribuidora Peninsular',
    initials: 'MT',
    avatarColor: 'from-[#2563EB] to-[#071B3A]',
    rating: 5,
  },
]

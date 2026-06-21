import Link from 'next/link'
import Image from 'next/image'
import { technologies } from '@/data/technologies'
import { technologyLogos } from '@/data/technologyLogos'

const ABBREV: Record<string, string> = {
  AWS: 'AWS',
  'Google Analytics': 'GA',
  'Google Cloud': 'GC',
  'GitHub Actions': 'GA',
  'Mercado Pago': 'MP',
  'React Native': 'RN',
  'Tailwind CSS': 'TW',
  'Vue.js': 'VU',
  '.NET': 'NET',
  n8n: 'N8',
}

function TechLogo({ name }: { name: string }) {
  const logo = technologyLogos[name]

  if (!logo) {
    return (
      <span className="flex h-8 w-8 items-center justify-center text-[9px] font-bold">
        {ABBREV[name] ?? name.slice(0, 2).toUpperCase()}
      </span>
    )
  }

  return (
    <span className="flex h-8 w-8 items-center justify-center">
      <Image
        src={`/technologies/${logo}`}
        alt=""
        width={28}
        height={28}
        aria-hidden="true"
        className="h-7 w-7 object-contain opacity-55 grayscale transition duration-200 group-hover:opacity-100 group-hover:grayscale-0"
        loading="lazy"
        unoptimized
      />
    </span>
  )
}

const marqueeTechnologyNames = [
  'Next.js',
  'React',
  'TypeScript',
  'Tailwind CSS',
  'Node.js',
  'Express.js',
  'Python',
  'Django',
  'FastAPI',
  'Supabase',
  'PostgreSQL',
  'MySQL',
  'MongoDB',
  'Redis',
  'Firebase',
  'Docker',
  'AWS',
  'Google Cloud',
  'Vercel',
  'Cloudflare',
  'GitHub',
  'GitHub Actions',
  'Grafana',
  'Prometheus',
  'Sentry',
  'Jira',
  'Notion',
  'Figma',
  'Postman',
  'Swagger',
  'n8n',
  'Stripe',
  'Mercado Pago',
  'PayPal',
  'Conekta',
  'Shopify',
  'WordPress',
  'WooCommerce',
  'OpenAI',
  'React Native',
  'Kotlin',
  'Swift',
  'Flutter',
  'Angular',
  'Vue.js',
  'Laravel',
  'Spring Boot',
  'GraphQL',
  'Socket.IO',
  'Prisma',
  'Kubernetes',
  'Terraform',
  'Nginx',
  'Google Analytics',
  'Electron',
  'Capacitor',
  'Strapi',
  'JavaScript',
  '.NET',
  'PHP',
  'Cypress',
  'Jest',
  'Vitest',
] as const

const techList = marqueeTechnologyNames
  .map((name) => technologies.find((tech) => tech.name === name))
  .filter((tech): tech is (typeof technologies)[number] => Boolean(tech))
  .map((tech) => ({ name: tech.name, slug: tech.slug }))

export default function TechMarquee() {
  const loop = [...techList, ...techList]

  return (
    <section
      id="tecnologias"
      className="border-y border-[#E6E0D6]"
      style={{ background: '#FFFFFF' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10">
        <p className="text-center text-xs font-medium uppercase tracking-widest text-[#9B9890] mb-8">
          Construido con tecnología de primer nivel
        </p>

        <div className="marquee-track marquee-mask overflow-hidden">
          <div className="animate-marquee flex w-max items-center gap-10">
            {loop.map((tech, i) => (
              <Link
                key={`${tech.slug}-${i}`}
                href={`/tecnologias/${tech.slug}`}
                aria-label={`Leer más sobre ${tech.name}`}
                className="group flex w-24 select-none flex-col items-center gap-2 text-[#1C1B18]/35 transition-[color,transform] duration-200 hover:scale-110 hover:text-[#1C1B18]"
              >
                <TechLogo name={tech.name} />
                <span className="text-center text-[10px] font-semibold leading-tight">
                  {tech.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

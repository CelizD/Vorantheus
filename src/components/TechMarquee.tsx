import Link from 'next/link'
import { technologies } from '@/data/technologies'

const ABBREV: Record<string, string> = {
  'Firebase':     'FB',
  'MySQL':        'MY',
  'MongoDB':      'MG',
  'NestJS':       'NE',
  'Express.js':   'EX',
  'Docker':       'DK',
  'AWS':          'AWS',
  'OpenAI':       'AI',
  'Stripe':       'ST',
  'Mercado Pago': 'MP',
  'Flutter':      'FL',
  'GitHub':       'GH',
  'Figma':        'FG',
  'Kotlin':       'KT',
  'Swift':        'SW',
}

function TechIcon({ name }: { name: string }) {
  const cls = 'w-7 h-7 flex-shrink-0'
  switch (name) {
    case 'React':
    case 'React Native':
      return (
        <svg viewBox="0 0 32 32" fill="none" className={cls} aria-hidden>
          <circle cx="16" cy="16" r="2.5" fill="currentColor" />
          <ellipse cx="16" cy="16" rx="13.5" ry="5.2" stroke="currentColor" strokeWidth="1.4" />
          <ellipse cx="16" cy="16" rx="13.5" ry="5.2" stroke="currentColor" strokeWidth="1.4" transform="rotate(60 16 16)" />
          <ellipse cx="16" cy="16" rx="13.5" ry="5.2" stroke="currentColor" strokeWidth="1.4" transform="rotate(-60 16 16)" />
        </svg>
      )
    case 'Next.js':
      return (
        <svg viewBox="0 0 32 32" fill="none" className={cls} aria-hidden>
          <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="1.4" />
          <path d="M11 21.5V10.5l13 13.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M11 10.5l10 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )
    case 'TypeScript':
      return (
        <svg viewBox="0 0 32 32" fill="currentColor" className={cls} aria-hidden>
          <rect x="1" y="1" width="30" height="30" rx="5" />
          <path d="M6 12h8.5v2H11v8H9v-8H6v-2z" fill="white" />
          <path d="M15.5 19.5c.5.5 1.2.8 2 .8.6 0 1.1-.2 1.4-.5.3-.3.4-.7.4-1.1 0-.4-.1-.7-.3-.9-.2-.2-.7-.5-1.5-.8-1.6-.5-2.4-1.3-2.4-2.5 0-.7.3-1.3.8-1.7.5-.4 1.2-.7 2-.7.8 0 1.5.2 2.1.6v2c-.5-.5-1.1-.7-1.8-.7-.5 0-.9.1-1.2.3-.2.2-.4.5-.4.8 0 .7.5 1.1 1.5 1.4 1 .3 1.7.7 2.1 1.2.4.5.6 1 .6 1.7 0 .8-.3 1.4-.8 1.9-.5.5-1.2.7-2.1.7-.9 0-1.7-.2-2.4-.7v-2.2h.5v.7z" fill="white" />
        </svg>
      )
    case 'Node.js':
      return (
        <svg viewBox="0 0 32 32" fill="none" className={cls} aria-hidden>
          <path d="M16 3L28.1 10v14L16 31 3.9 24V10z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
          <text x="8.5" y="21" fontSize="10.5" fontWeight="bold" fill="currentColor" fontFamily="monospace">JS</text>
        </svg>
      )
    case 'Supabase':
      return (
        <svg viewBox="0 0 32 32" fill="currentColor" className={cls} aria-hidden>
          <path d="M19.5 3.5L6 19h8.5l-2.5 9.5L27 14h-8.5l1-9.5z" />
        </svg>
      )
    case 'PostgreSQL':
      return (
        <svg viewBox="0 0 32 32" fill="none" className={cls} aria-hidden>
          <ellipse cx="16" cy="9" rx="10" ry="3.5" stroke="currentColor" strokeWidth="1.4" />
          <path d="M6 9v14" stroke="currentColor" strokeWidth="1.4" />
          <path d="M26 9v14" stroke="currentColor" strokeWidth="1.4" />
          <ellipse cx="16" cy="23" rx="10" ry="3.5" stroke="currentColor" strokeWidth="1.4" />
          <path d="M6 16c0 1.9 4.5 3.4 10 3.4s10-1.5 10-3.4" stroke="currentColor" strokeWidth="1.4" />
        </svg>
      )
    case 'Tailwind CSS':
      return (
        <svg viewBox="0 0 32 32" fill="currentColor" className={cls} aria-hidden>
          <path d="M16 6.5c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.9.23 1.5.88 2.2 1.6 1.2 1.2 2.5 2.6 5.4 2.6 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.9-.23-1.5-.88-2.2-1.6C20.2 7.9 18.9 6.5 16 6.5zm-6 7.6c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.9.23 1.5.88 2.2 1.6 1.2 1.2 2.5 2.6 5.4 2.6 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.9-.23-1.5-.88-2.2-1.6C14.2 15.5 12.9 14.1 10 14.1z" />
        </svg>
      )
    case 'Python':
      return (
        <svg viewBox="0 0 32 32" fill="none" className={cls} aria-hidden>
          <path d="M16 3c-4 0-7 1.5-7 4v3h7v1H6c-2.5 0-4 1.5-4 4v5c0 2.5 2 4 4 4h2v-3.5c0-2 1.5-3 3-3h8c1.5 0 3-1 3-3V7c0-2-2.5-4-6-4zm-2 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" fill="currentColor" />
          <path d="M23 10v3.5c0 2-1.5 3-3 3H12c-1.5 0-3 1-3 3v5c0 2 2.5 4 6 4s7-1.5 7-4v-3H15v-1h9c2.5 0 4-1.5 4-4v-5c0-2.5-2-4-5-4zm-5 17a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" fill="currentColor" />
        </svg>
      )
    case 'Vercel':
      return (
        <svg viewBox="0 0 32 32" fill="currentColor" className={cls} aria-hidden>
          <polygon points="16,4 30,28 2,28" />
        </svg>
      )
    case 'Kotlin':
      return (
        <svg viewBox="0 0 32 32" fill="currentColor" className={cls} aria-hidden>
          <path d="M3 3h13.5L3 18v-15z" />
          <path d="M3 29l13.5-13.5L29 29H3z" />
          <polygon points="16.5,3 29,3 29,15.5" />
        </svg>
      )
    case 'Swift':
      return (
        <svg viewBox="0 0 32 32" fill="currentColor" className={cls} aria-hidden>
          <path d="M28 10c-1-2-3-4-6-5-4-1-8 0-11 3 0 0 6 4 9 8-3-2-8-4-11-3 0 0 4 5 9 7-2 1-5 1-8 0 2 3 6 5 10 5 6 0 10-4 11-9 1-2 0-4-3-6z" />
        </svg>
      )
    case 'Firebase':
      return (
        <svg viewBox="0 0 32 32" fill="currentColor" className={cls} aria-hidden>
          <path d="M5.8 24.6L8.4 4.6l6.2 11.1L5.8 24.6z" opacity=".6" />
          <path d="M20.6 9.4l-6 10.7L5.8 24.6 26.2 24.6 20.6 9.4z" opacity=".9" />
          <path d="M20.6 9.4L14.6 4.6l-2.2 8.4 2.2 2.8 6-6.4z" />
        </svg>
      )
    case 'MySQL':
      return (
        <svg viewBox="0 0 32 32" fill="none" className={cls} aria-hidden>
          <ellipse cx="16" cy="8" rx="11" ry="4" stroke="currentColor" strokeWidth="1.4" />
          <path d="M5 8v8c0 2.2 4.9 4 11 4s11-1.8 11-4V8" stroke="currentColor" strokeWidth="1.4" />
          <path d="M5 16v8c0 2.2 4.9 4 11 4s11-1.8 11-4v-8" stroke="currentColor" strokeWidth="1.4" />
        </svg>
      )
    case 'MongoDB':
      return (
        <svg viewBox="0 0 32 32" fill="none" className={cls} aria-hidden>
          <path d="M16 3c0 0-8 7-8 14a8 8 0 0016 0C24 10 16 3 16 3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M16 8v16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      )
    case 'Docker':
      return (
        <svg viewBox="0 0 32 32" fill="none" className={cls} aria-hidden>
          <rect x="3" y="13" width="4" height="4" rx="0.5" stroke="currentColor" strokeWidth="1.3" />
          <rect x="9" y="13" width="4" height="4" rx="0.5" stroke="currentColor" strokeWidth="1.3" />
          <rect x="15" y="13" width="4" height="4" rx="0.5" stroke="currentColor" strokeWidth="1.3" />
          <rect x="9" y="7" width="4" height="4" rx="0.5" stroke="currentColor" strokeWidth="1.3" />
          <rect x="15" y="7" width="4" height="4" rx="0.5" stroke="currentColor" strokeWidth="1.3" />
          <path d="M21 15.5c1-1 3-1 4 .5.5 1 .5 4-2 5H6c-2-1-3-3-2-5 .5-1 1.5-1.5 3-1.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
          <path d="M23 12c1-2 4-2 5 0" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
        </svg>
      )
    case 'AWS':
      return (
        <svg viewBox="0 0 32 32" fill="currentColor" className={cls} aria-hidden>
          <path d="M9.5 16.5c0 1.4 1.5 2.5 4 3l2.5.7v2.3c-1.6-.2-3-.8-4-1.5l-1 1.7c1.4.9 3 1.4 5 1.6v1.2h2v-1.2c3-.4 4.5-2 4.5-3.8 0-2-1.5-3-4-3.7l-2.5-.7v-2.1c1.3.2 2.5.6 3.5 1.3l1-1.7c-1.2-.8-2.7-1.3-4.5-1.4v-1.2h-2v1.2c-2.8.4-4.5 2-4.5 3.8v.5zm6.5 3.8l-2-.6c-1.2-.4-1.8-.9-1.8-1.8 0-.8.7-1.5 2-1.8l1.8 4.2zm2-1l-1.8-4.2 2 .6c1.3.4 2 1 2 1.9 0 .8-.7 1.5-2.2 1.7z" />
          <path d="M4 22c2 2 4.5 3.5 8 4.3l.5-1.8c-3-.7-5-2-7-3.5L4 22zm24 0l-1.5 1c-2 1.5-4 2.8-7 3.5l.5 1.8c3.5-.8 6-2.3 8-4.3zm-12 5.5v2H16v-2h-.5 1z" />
        </svg>
      )
    case 'OpenAI':
      return (
        <svg viewBox="0 0 32 32" fill="currentColor" className={cls} aria-hidden>
          <path d="M28 13.5A8.5 8.5 0 0 0 20.5 4a8.5 8.5 0 0 0-8-5.5A8.5 8.5 0 0 0 4 6.5 8.5 8.5 0 0 0 4 19a8.5 8.5 0 0 0 8 11.5A8.5 8.5 0 0 0 20 27a8.5 8.5 0 0 0 8-6.5A8.5 8.5 0 0 0 28 13.5zM16 22a6 6 0 1 1 0-12 6 6 0 0 1 0 12z" opacity=".15"/>
          <circle cx="16" cy="16" r="4" />
          <path d="M16 4v4M16 24v4M4 16h4M24 16h4M7 7l3 3M22 22l3 3M7 25l3-3M22 10l3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        </svg>
      )
    case 'Stripe':
      return (
        <svg viewBox="0 0 32 32" fill="none" className={cls} aria-hidden>
          <rect x="2" y="6" width="28" height="20" rx="3" stroke="currentColor" strokeWidth="1.4" />
          <path d="M2 12h28" stroke="currentColor" strokeWidth="1.4" />
          <path d="M7 20h4M14 20h3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )
    case 'Mercado Pago':
      return (
        <svg viewBox="0 0 32 32" fill="none" className={cls} aria-hidden>
          <circle cx="16" cy="16" r="13" stroke="currentColor" strokeWidth="1.4" />
          <path d="M10 16l4 4 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    case 'Flutter':
      return (
        <svg viewBox="0 0 32 32" fill="none" className={cls} aria-hidden>
          <path d="M5 16L18 3h9L14 17 5 16z" fill="currentColor" opacity=".7" />
          <path d="M14 17l9-9 4 4-6 6 6 6-4 4L14 17z" fill="currentColor" />
        </svg>
      )
    case 'GitHub':
      return (
        <svg viewBox="0 0 32 32" fill="currentColor" className={cls} aria-hidden>
          <path d="M16 2C8.27 2 2 8.27 2 16c0 6.19 4.01 11.44 9.57 13.3.7.13.96-.3.96-.68v-2.38c-3.89.84-4.71-1.88-4.71-1.88-.64-1.62-1.56-2.05-1.56-2.05-1.27-.87.1-.85.1-.85 1.41.1 2.15 1.45 2.15 1.45 1.25 2.14 3.28 1.52 4.08 1.16.13-.9.49-1.52.89-1.87-3.1-.35-6.37-1.55-6.37-6.91 0-1.53.55-2.78 1.44-3.75-.14-.35-.62-1.78.14-3.7 0 0 1.18-.38 3.85 1.43a13.4 13.4 0 013.5-.47c1.19.01 2.38.16 3.5.47 2.67-1.81 3.84-1.43 3.84-1.43.77 1.92.29 3.35.14 3.7.9.97 1.44 2.22 1.44 3.75 0 5.37-3.27 6.56-6.39 6.9.5.43.95 1.29.95 2.6v3.85c0 .38.25.82.96.68C25.99 27.44 30 22.19 30 16c0-7.73-6.27-14-14-14z" />
        </svg>
      )
    case 'Figma':
      return (
        <svg viewBox="0 0 32 32" fill="none" className={cls} aria-hidden>
          <rect x="10" y="2" width="12" height="9" rx="4.5" fill="currentColor" opacity=".7" />
          <rect x="10" y="11" width="12" height="9" rx="4.5" fill="currentColor" opacity=".5" />
          <rect x="10" y="20" width="6" height="9" rx="3" fill="currentColor" opacity=".4" />
          <circle cx="22" cy="15.5" r="4.5" fill="currentColor" />
        </svg>
      )
    case 'NestJS':
      return (
        <svg viewBox="0 0 32 32" fill="currentColor" className={cls} aria-hidden>
          <path d="M19.5 4C14.5 4 11 8 10 11c-1-1.5-2.5-2-4-1.5L4.5 11c2-.5 3.5.5 3.5 3C8 18 11.5 22 16 23c.5.5.5 1 0 1.5L14 27l2 1 2-1-2-2.5c4-1 7.5-5 7.5-9.5 0-3-1.5-5-4-6 0 0 3 0 4.5 2.5C24 10 22 4 19.5 4z" />
        </svg>
      )
    case 'Express.js':
      return (
        <svg viewBox="0 0 32 32" fill="none" className={cls} aria-hidden>
          <text x="3" y="20" fontSize="11" fontWeight="bold" fill="currentColor" fontFamily="monospace">ex</text>
          <path d="M21 11l6 5-6 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    default: {
      const abbr = ABBREV[name] ?? name.slice(0, 2).toUpperCase()
      return (
        <span
          className="w-7 h-7 flex items-center justify-center text-[9px] font-bold flex-shrink-0"
          aria-hidden
        >
          {abbr}
        </span>
      )
    }
  }
}

const techList = technologies.map((t) => ({ name: t.name, slug: t.slug }))

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
                className="group flex flex-col items-center gap-2 w-20 select-none text-[#1C1B18]/30 hover:text-[#1C1B18] transition-[color,transform] duration-200 hover:scale-110 cursor-pointer"
              >
                <TechIcon name={tech.name} />
                <span className="text-[10px] font-semibold whitespace-nowrap text-center leading-tight">
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

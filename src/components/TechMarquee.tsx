'use client'

// Hand-crafted inline SVG logos using simple geometric shapes — no external deps
function TechIcon({ name }: { name: string }) {
  const cls = 'w-7 h-7 flex-shrink-0'
  switch (name) {
    case 'React':
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
    case 'React Native':
      return (
        <svg viewBox="0 0 32 32" fill="none" className={cls} aria-hidden>
          <circle cx="16" cy="16" r="2.5" fill="currentColor" />
          <ellipse cx="16" cy="16" rx="13.5" ry="5.2" stroke="currentColor" strokeWidth="1.4" />
          <ellipse cx="16" cy="16" rx="13.5" ry="5.2" stroke="currentColor" strokeWidth="1.4" transform="rotate(60 16 16)" />
          <ellipse cx="16" cy="16" rx="13.5" ry="5.2" stroke="currentColor" strokeWidth="1.4" transform="rotate(-60 16 16)" />
          <text x="9.5" y="20.5" fontSize="4.5" fill="currentColor" fontFamily="sans-serif" fontWeight="bold">RN</text>
        </svg>
      )
    case 'Kotlin':
      return (
        <svg viewBox="0 0 32 32" fill="currentColor" className={cls} aria-hidden>
          <path d="M3 3h13.5L3 18v-15z" />
          <path d="M3 29l13.5-13.5L29 29H3z" />
          <path d="M16.5 3L3 16.5 16.5 3z M16.5 3L29 3 16.5 15.5z" />
          <polygon points="16.5,3 29,3 29,15.5" />
        </svg>
      )
    case 'Swift':
      return (
        <svg viewBox="0 0 32 32" fill="currentColor" className={cls} aria-hidden>
          <path d="M28 10c-1-2-3-4-6-5-4-1-8 0-11 3 0 0 6 4 9 8-3-2-8-4-11-3 0 0 4 5 9 7-2 1-5 1-8 0 2 3 6 5 10 5 6 0 10-4 11-9 1-2 0-4-3-6z" />
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
    default:
      return null
  }
}

const technologies = [
  'React',
  'Next.js',
  'TypeScript',
  'Node.js',
  'Supabase',
  'PostgreSQL',
  'Tailwind CSS',
  'React Native',
  'Kotlin',
  'Swift',
  'Python',
  'Vercel',
]

export default function TechMarquee() {
  const loop = [...technologies, ...technologies]

  return (
    <section
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
              <div
                key={`${tech}-${i}`}
                className="flex flex-col items-center gap-2 w-20 select-none text-[#1C1B18]/30 hover:text-[#1C1B18]/70 transition-colors duration-200"
              >
                <TechIcon name={tech} />
                <span className="text-[10px] font-semibold whitespace-nowrap text-center leading-tight">
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

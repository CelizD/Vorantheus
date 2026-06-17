import Link from 'next/link'
import { technologies } from '@/data/technologies'

const ABBREV: Record<string, { abbr: string; accent?: string }> = {
  'Next.js':       { abbr: 'N'   },
  'React':         { abbr: 'R'   },
  'TypeScript':    { abbr: 'TS',  accent: '#0071E3' },
  'Tailwind CSS':  { abbr: 'TW'  },
  'Firebase':      { abbr: 'FB'  },
  'Supabase':      { abbr: 'SB'  },
  'PostgreSQL':    { abbr: 'PG'  },
  'MySQL':         { abbr: 'MY'  },
  'MongoDB':       { abbr: 'MG'  },
  'NestJS':        { abbr: 'NE'  },
  'Node.js':       { abbr: 'NO'  },
  'Express.js':    { abbr: 'EX'  },
  'Docker':        { abbr: 'DK'  },
  'AWS':           { abbr: 'AWS' },
  'Vercel':        { abbr: 'VE'  },
  'OpenAI':        { abbr: 'AI'  },
  'Stripe':        { abbr: 'ST'  },
  'Mercado Pago':  { abbr: 'MP'  },
  'React Native':  { abbr: 'RN'  },
  'Flutter':       { abbr: 'FL'  },
  'Kotlin':        { abbr: 'KT'  },
  'Swift':         { abbr: 'SW'  },
  'Python':        { abbr: 'PY'  },
  'GitHub':        { abbr: 'GH'  },
  'Figma':         { abbr: 'FG'  },
}

export default function TechMarquee() {
  return (
    <section
      id="tecnologias"
      className="border-y border-[#E6E0D6]"
      style={{ background: '#0E1117' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <p className="text-center text-xs font-semibold uppercase tracking-widest mb-10"
          style={{ color: 'rgba(255,255,255,0.35)' }}>
          Tecnología de primer nivel
        </p>

        <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 xl:grid-cols-9 gap-3">
          {technologies.map((tech) => {
            const meta = ABBREV[tech.name]
            const abbr = meta?.abbr ?? tech.name.slice(0, 2).toUpperCase()
            const accent = meta?.accent

            return (
              <Link
                key={tech.slug}
                href={`/tecnologias/${tech.slug}`}
                aria-label={tech.name}
                className="group flex flex-col items-center gap-2.5 py-4 px-2 rounded-2xl transition-[background-color,transform] duration-200 hover:scale-[1.04] active:scale-[0.97] cursor-pointer"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.07)',
                }}
              >
                {/* Abbreviation badge */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center font-bold text-sm tracking-tight transition-[background-color] duration-200 group-hover:bg-[rgba(0,113,227,0.18)]"
                  style={{
                    background: accent ? `${accent}22` : 'rgba(255,255,255,0.06)',
                    color: accent ?? 'rgba(255,255,255,0.65)',
                    letterSpacing: abbr.length > 2 ? '-0.03em' : '0',
                    fontSize: abbr.length > 2 ? 11 : 14,
                  }}
                >
                  {abbr}
                </div>

                {/* Name */}
                <span
                  className="text-[10px] font-medium text-center leading-tight transition-colors duration-200 group-hover:text-white/80"
                  style={{ color: 'rgba(255,255,255,0.40)' }}
                >
                  {tech.name}
                </span>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

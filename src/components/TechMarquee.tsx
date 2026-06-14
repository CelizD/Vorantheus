'use client'

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
      className="border-y border-white/[0.05]"
      style={{ background: '#080808' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10">
        <p className="text-center text-xs font-medium uppercase tracking-widest text-white/25 mb-8">
          Construido con tecnología de primer nivel
        </p>

        <div className="marquee-track marquee-mask overflow-hidden">
          <div className="animate-marquee flex w-max items-center gap-12">
            {loop.map((tech, i) => (
              <span
                key={`${tech}-${i}`}
                className="text-xl sm:text-2xl font-bold text-white/20 whitespace-nowrap select-none hover:text-white/50 transition-colors duration-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

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
  // Duplicate the list so the -50% translate loops seamlessly
  const loop = [...technologies, ...technologies]

  return (
    <section className="section-white border-y border-black/[0.06]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <p className="text-center text-xs font-medium uppercase tracking-widest text-muted mb-8">
          Construido con tecnología de primer nivel
        </p>

        <div className="marquee-track marquee-mask overflow-hidden">
          <div className="animate-marquee flex w-max items-center gap-12">
            {loop.map((tech, i) => (
              <span
                key={`${tech}-${i}`}
                className="text-xl sm:text-2xl font-bold text-ink/30 whitespace-nowrap select-none"
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

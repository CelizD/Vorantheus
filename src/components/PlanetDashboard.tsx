'use client'

import { useState, useId } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Globe2, Smartphone, Database, Cpu } from 'lucide-react'

// ── Types ─────────────────────────────────────────────────────────────────────

interface City {
  id: string
  cx: number
  cy: number
  name: string
  tagline: string
  services: string
}

// ── Data ──────────────────────────────────────────────────────────────────────

const CITIES: City[] = [
  { id: 'tijuana',  cx: 112, cy: 208, name: 'Tijuana',          tagline: 'Centro de operaciones digitales', services: 'Web · Apps · Sistemas · IA'  },
  { id: 'sandiego', cx: 100, cy: 192, name: 'San Diego',        tagline: 'Hub tecnológico fronterizo',       services: 'Web · IA · Consultoría'      },
  { id: 'la',       cx: 84,  cy: 177, name: 'Los Angeles',      tagline: 'Centro de innovación digital',    services: 'Apps · Sistemas · IA'         },
  { id: 'cdmx',     cx: 163, cy: 272, name: 'CDMX',             tagline: 'Capital digital de Latinoamérica',services: 'Web · E-commerce · Sistemas'  },
  { id: 'gdl',      cx: 138, cy: 260, name: 'Guadalajara',      tagline: 'Silicon Valley mexicano',         services: 'Web · Apps · Automatización'  },
  { id: 'mty',      cx: 167, cy: 244, name: 'Monterrey',        tagline: 'Polo industrial tecnológico',     services: 'Sistemas · ERP · Web'         },
  { id: 'ny',       cx: 243, cy: 160, name: 'New York',         tagline: 'Mercado global de negocios',      services: 'IA · Apps · E-commerce'       },
  { id: 'madrid',   cx: 350, cy: 155, name: 'Madrid',           tagline: 'Expansión al mercado europeo',    services: 'Web · IA · Sistemas'          },
  { id: 'tokyo',    cx: 422, cy: 182, name: 'Tokyo',            tagline: 'Innovación del Pacífico',         services: 'IA · Apps · Automatización'   },
]

// Connections: [fromId, toId, arc duration in seconds]
const ARCS: [string, string, number][] = [
  ['tijuana',  'sandiego', 2.0],
  ['tijuana',  'cdmx',     2.8],
  ['cdmx',     'gdl',      2.2],
  ['cdmx',     'mty',      2.5],
  ['la',       'ny',       3.2],
  ['madrid',   'tokyo',    3.8],
]

const SERVICE_CARDS = [
  { id: 'web', Icon: Globe2,     title: 'Páginas web',            desc: 'Sitios modernos para negocios que quieren verse profesionales.',   side: 'left'  as const },
  { id: 'app', Icon: Smartphone, title: 'Apps móviles',           desc: 'Aplicaciones Android y iOS para conectar con tus clientes.',        side: 'left'  as const },
  { id: 'sys', Icon: Database,   title: 'Sistemas admin.',        desc: 'Control de ventas, inventario, clientes y operaciones.',            side: 'right' as const },
  { id: 'ai',  Icon: Cpu,        title: 'Automatización con IA',  desc: 'Procesos inteligentes para ahorrar tiempo y vender mejor.',         side: 'right' as const },
]

// Deterministic pseudo-particles (avoids hydration mismatch from Math.random)
const PARTICLES = Array.from({ length: 48 }, (_, i) => {
  const s = (i * 2654435761) >>> 0
  return {
    id: i,
    x: (s % 1000) / 10,
    y: ((s >> 10) % 1000) / 10,
    size: 0.8 + ((s >> 20) % 3),
    opacity: 0.08 + ((s >> 4) % 5) / 20,
  }
})

// ── Helpers ───────────────────────────────────────────────────────────────────

function arcPath(from: City, to: City): string {
  const mx = (from.cx + to.cx) / 2
  const my = (from.cy + to.cy) / 2
  const dx = to.cx - from.cx
  const dy = to.cy - from.cy
  const len = Math.sqrt(dx * dx + dy * dy)
  const cpx = mx + (250 - mx) * 0.1
  const cpy = my - len * 0.22
  return `M ${from.cx},${from.cy} Q ${cpx},${cpy} ${to.cx},${to.cy}`
}

function cityById(id: string): City | undefined {
  return CITIES.find((c) => c.id === id)
}

// ── Sub-components ────────────────────────────────────────────────────────────

function GlobeSVG({
  hoveredCity,
  onHoverCity,
  reduced,
}: {
  hoveredCity: string | null
  onHoverCity: (id: string | null) => void
  reduced: boolean
}) {
  const raw = useId()
  const uid = raw.replace(/:/g, '')

  return (
    <svg
      viewBox="0 0 500 500"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      aria-label="Mapa global de proyectos Vorantheus"
      role="img"
    >
      <defs>
        {/* Planet gradient */}
        <radialGradient id={`pg-${uid}`} cx="38%" cy="33%" r="65%">
          <stop offset="0%"   stopColor="#2563eb" stopOpacity="0.9" />
          <stop offset="38%"  stopColor="#1e3a8a"                   />
          <stop offset="72%"  stopColor="#0f172a"                   />
          <stop offset="100%" stopColor="#020617"                   />
        </radialGradient>

        {/* Highlight shimmer */}
        <radialGradient id={`hl-${uid}`} cx="30%" cy="26%" r="36%">
          <stop offset="0%"   stopColor="#bfdbfe" stopOpacity="0.20" />
          <stop offset="100%" stopColor="#bfdbfe" stopOpacity="0"    />
        </radialGradient>

        {/* Atmosphere glow */}
        <radialGradient id={`atm-${uid}`} cx="50%" cy="50%" r="50%">
          <stop offset="80%"  stopColor="transparent"                />
          <stop offset="91%"  stopColor="#3b82f6" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.32" />
        </radialGradient>

        {/* City glow */}
        <filter id={`cg-${uid}`} x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="2.5" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>

        {/* Arc glow */}
        <filter id={`ag-${uid}`} x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="1.2" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>

        {/* Clip to planet circle */}
        <clipPath id={`clip-${uid}`}>
          <circle cx="250" cy="250" r="190" />
        </clipPath>
      </defs>

      {/* ── Atmosphere ── */}
      <circle cx="250" cy="250" r="202" fill={`url(#atm-${uid})`} />

      {/* ── Planet base ── */}
      <circle cx="250" cy="250" r="190" fill={`url(#pg-${uid})`} />

      {/* ── Grid lines (latitude + longitude) ── */}
      <g clipPath={`url(#clip-${uid})`} className={reduced ? '' : 'vo-grid-spin'}>
        {/* Latitude lines */}
        {([-130, -90, -50, 0, 50, 90, 130] as number[]).map((dy) => {
          const y = 250 + dy
          const rx = Math.sqrt(Math.max(0, 190 * 190 - dy * dy))
          if (rx < 5) return null
          return (
            <ellipse
              key={`lat${dy}`}
              cx="250" cy={y}
              rx={rx} ry={rx * 0.11}
              fill="none"
              stroke="rgba(96,165,250,0.09)"
              strokeWidth="0.7"
            />
          )
        })}
        {/* Longitude lines */}
        {([20, 50, 80, 110, 140] as number[]).map((a) => {
          const rx = Math.sin((a * Math.PI) / 180) * 190
          const ry2 = Math.cos((a * Math.PI) / 180) * 190
          return (
            <g key={`lon${a}`}>
              <ellipse cx="250" cy="250" rx={Math.abs(rx)} ry="190" fill="none" stroke="rgba(96,165,250,0.07)" strokeWidth="0.6" />
              <ellipse cx="250" cy="250" rx={Math.abs(ry2)} ry="190" fill="none" stroke="rgba(96,165,250,0.06)" strokeWidth="0.5" />
            </g>
          )
        })}
      </g>

      {/* ── Highlight ── */}
      <circle cx="250" cy="250" r="190" fill={`url(#hl-${uid})`} />

      {/* ── Connection arcs ── */}
      {ARCS.map(([fromId, toId, dur]) => {
        const from = cityById(fromId)
        const to = cityById(toId)
        if (!from || !to) return null
        const d = arcPath(from, to)
        const active = hoveredCity === fromId || hoveredCity === toId
        return (
          <g key={`arc-${fromId}-${toId}`} filter={`url(#ag-${uid})`}>
            {/* Static base line */}
            <path
              d={d} fill="none"
              stroke={active ? 'rgba(96,165,250,0.45)' : 'rgba(59,130,246,0.18)'}
              strokeWidth={active ? 1.5 : 0.8}
            />
            {/* Animated photon */}
            <path
              d={d} fill="none"
              stroke={active ? 'rgba(147,197,253,0.95)' : 'rgba(96,165,250,0.55)'}
              strokeWidth={active ? 2.5 : 1.5}
              strokeDasharray="5 195"
              className={reduced ? '' : 'vo-arc-flow'}
              style={reduced ? {} : { animationDuration: `${dur}s` }}
            />
          </g>
        )
      })}

      {/* ── Cities ── */}
      {CITIES.map((city, i) => {
        const active = hoveredCity === city.id
        return (
          <g
            key={city.id}
            filter={`url(#cg-${uid})`}
            style={{ cursor: 'pointer' }}
            onMouseEnter={() => onHoverCity(city.id)}
            onMouseLeave={() => onHoverCity(null)}
            onClick={() => onHoverCity(active ? null : city.id)}
            role="button"
            aria-label={`${city.name} — ${city.tagline}`}
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && onHoverCity(active ? null : city.id)}
          >
            {/* Pulse ring */}
            <circle
              cx={city.cx} cy={city.cy}
              r={active ? 10 : 8}
              fill="none"
              stroke={active ? 'rgba(96,165,250,0.70)' : 'rgba(59,130,246,0.35)'}
              strokeWidth="1"
              className={reduced ? '' : 'vo-pulse'}
              style={reduced ? {} : { animationDelay: `${(i % 5) * 0.5}s` }}
            />
            {/* Glow dot */}
            <circle cx={city.cx} cy={city.cy} r={active ? 5 : 3.5} fill={active ? '#93c5fd' : '#60a5fa'} />
            {/* Core */}
            <circle cx={city.cx} cy={city.cy} r="1.5" fill="white" opacity={active ? 1 : 0.85} />
            {/* Label */}
            <text
              x={city.cx + 9} y={city.cy + 4}
              fontSize="7.5"
              fill={active ? 'rgba(255,255,255,0.95)' : 'rgba(255,255,255,0.48)'}
              fontFamily="system-ui,-apple-system,sans-serif"
              fontWeight={active ? '600' : '400'}
              style={{ pointerEvents: 'none', userSelect: 'none' }}
            >
              {city.name}
            </text>
          </g>
        )
      })}

      {/* ── Planet edge rings ── */}
      <circle cx="250" cy="250" r="190" fill="none" stroke="rgba(59,130,246,0.22)" strokeWidth="1.5" />
      <circle cx="250" cy="250" r="195" fill="none" stroke="rgba(59,130,246,0.07)" strokeWidth="4"   />
    </svg>
  )
}

function CityPopup({ city }: { city: City }) {
  return (
    <motion.div
      key={city.id}
      initial={{ opacity: 0, scale: 0.92, y: 8 }}
      animate={{ opacity: 1, scale: 1,    y: 0 }}
      exit={{    opacity: 0, scale: 0.92, y: 4 }}
      transition={{ duration: 0.18 }}
      className="absolute left-1/2 -translate-x-1/2 bottom-4 z-20 pointer-events-none"
      style={{ minWidth: 190 }}
    >
      <div
        className="rounded-2xl px-4 py-3 border border-white/15"
        style={{ background: 'rgba(8,9,20,0.88)', backdropFilter: 'blur(18px)' }}
      >
        <p className="text-white text-sm font-bold mb-0.5">{city.name}</p>
        <p className="text-white/45 text-xs leading-snug mb-2">{city.tagline}</p>
        <p className="text-[#60a5fa] text-[10px] font-semibold tracking-wide">{city.services}</p>
      </div>
    </motion.div>
  )
}

function ServiceCard({
  Icon,
  title,
  desc,
  delay,
  floatDelay,
  reduced,
}: {
  Icon: React.ElementType
  title: string
  desc: string
  delay: number
  floatDelay: string
  reduced: boolean
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: [0.23, 1, 0.32, 1] }}
      className={`rounded-2xl p-4 border border-white/10 w-44 shrink-0 ${reduced ? '' : 'vo-float'}`}
      style={{
        background: 'rgba(255,255,255,0.04)',
        backdropFilter: 'blur(20px)',
        animationDelay: floatDelay,
      }}
    >
      <div className="w-8 h-8 rounded-xl bg-[#0071E3]/20 flex items-center justify-center mb-3">
        <Icon className="w-4 h-4 text-[#60a5fa]" />
      </div>
      <p className="text-white text-xs font-bold mb-1.5 leading-snug">{title}</p>
      <p className="text-white/38 text-[10px] leading-relaxed">{desc}</p>
    </motion.div>
  )
}

// ── Main export ───────────────────────────────────────────────────────────────

export default function PlanetDashboard() {
  const [hoveredCity, setHoveredCity] = useState<string | null>(null)
  const reduced = useReducedMotion() ?? false

  const leftCards  = SERVICE_CARDS.filter((c) => c.side === 'left')
  const rightCards = SERVICE_CARDS.filter((c) => c.side === 'right')

  return (
    <section
      className="relative py-24 overflow-hidden"
      style={{ background: '#07080D' }}
      aria-labelledby="planet-heading"
    >
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none opacity-[0.06] blur-3xl"
        style={{ background: 'radial-gradient(circle, #3b82f6 0%, transparent 70%)' }}
      />

      {/* Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {PARTICLES.map((p) => (
          <div
            key={p.id}
            className="absolute rounded-full bg-blue-400"
            style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size, opacity: p.opacity }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── Left: text ── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
          >
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#0071E3]/25 text-[#60a5fa] text-sm font-medium mb-6"
              style={{ background: 'rgba(0,113,227,0.08)' }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6] animate-pulse" />
              Red global de proyectos
            </span>

            <h2
              id="planet-heading"
              className="text-4xl sm:text-5xl lg:text-[3.25rem] font-black text-white leading-[1.06] mb-6"
              style={{ letterSpacing: '-0.02em' }}
            >
              Un dashboard global para impulsar tu negocio
            </h2>

            <p className="text-lg text-white/45 leading-relaxed mb-10 max-w-lg">
              Visualiza proyectos, clientes, sistemas y automatizaciones conectadas desde una misma experiencia digital.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/cotizar"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-[#0071E3] hover:bg-[#0077ED] text-white font-semibold rounded-full transition-colors duration-200 active:scale-[0.97]"
              >
                Cotizar proyecto
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                href="/servicios"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/15 text-white/70 hover:text-white hover:border-white/30 font-semibold transition-colors duration-200"
              >
                Ver servicios
              </Link>
            </div>

            {/* Cards on mobile (below text) */}
            <div className="lg:hidden grid grid-cols-2 gap-3 mt-10">
              {SERVICE_CARDS.map((card, i) => (
                <ServiceCard
                  key={card.id}
                  Icon={card.Icon}
                  title={card.title}
                  desc={card.desc}
                  delay={0.1 + i * 0.1}
                  floatDelay={`${i * 0.8}s`}
                  reduced={reduced}
                />
              ))}
            </div>
          </motion.div>

          {/* ── Right: planet + floating cards ── */}
          <div className="flex items-center justify-center gap-4 lg:gap-5">

            {/* Left cards (desktop only) */}
            <div className="hidden lg:flex flex-col gap-4">
              {leftCards.map((card, i) => (
                <ServiceCard
                  key={card.id}
                  Icon={card.Icon}
                  title={card.title}
                  desc={card.desc}
                  delay={0.3 + i * 0.15}
                  floatDelay={`${i * 1.2}s`}
                  reduced={reduced}
                />
              ))}
            </div>

            {/* Globe */}
            <motion.div
              initial={{ opacity: 0, scale: 0.88 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.0, ease: [0.23, 1, 0.32, 1] }}
              className="relative shrink-0"
              style={{
                width:  'min(400px, 85vw)',
                height: 'min(400px, 85vw)',
              }}
            >
              <GlobeSVG
                hoveredCity={hoveredCity}
                onHoverCity={setHoveredCity}
                reduced={reduced}
              />
              <AnimatePresence>
                {hoveredCity && (() => {
                  const city = cityById(hoveredCity)
                  return city ? <CityPopup city={city} /> : null
                })()}
              </AnimatePresence>
            </motion.div>

            {/* Right cards (desktop only) */}
            <div className="hidden lg:flex flex-col gap-4">
              {rightCards.map((card, i) => (
                <ServiceCard
                  key={card.id}
                  Icon={card.Icon}
                  title={card.title}
                  desc={card.desc}
                  delay={0.5 + i * 0.15}
                  floatDelay={`${(i + 2) * 1.2}s`}
                  reduced={reduced}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

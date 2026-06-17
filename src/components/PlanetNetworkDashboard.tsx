'use client'

import { useState, useId } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Globe, Smartphone, LayoutDashboard, Bot, type LucideIcon } from 'lucide-react'

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
  { id: 'tijuana',  cx: 112, cy: 222, name: 'Tijuana',          tagline: 'Centro de operaciones digitales',    services: 'Web · Apps · Sistemas · IA'          },
  { id: 'sandiego', cx:  98, cy: 204, name: 'San Diego',        tagline: 'Conexión binacional tecnológica',    services: 'Software · Automatización · Dashboards' },
  { id: 'la',       cx:  82, cy: 186, name: 'Los Angeles',      tagline: 'Experiencias digitales premium',     services: 'Web · Branding · Apps'                },
  { id: 'cdmx',     cx: 166, cy: 280, name: 'Ciudad de México', tagline: 'Expansión empresarial digital',      services: 'Sistemas · E-commerce · IA'           },
  { id: 'gdl',      cx: 140, cy: 266, name: 'Guadalajara',      tagline: 'Silicon Valley mexicano',            services: 'Web · Apps · Automatización'          },
  { id: 'mty',      cx: 170, cy: 250, name: 'Monterrey',        tagline: 'Polo industrial y tecnológico',      services: 'Sistemas · ERP · Web'                 },
  { id: 'ny',       cx: 248, cy: 164, name: 'New York',         tagline: 'Mercado global de negocios',         services: 'IA · Apps · E-commerce'               },
  { id: 'madrid',   cx: 354, cy: 158, name: 'Madrid',           tagline: 'Presencia internacional',            services: 'Soluciones digitales escalables'       },
  { id: 'tokyo',    cx: 418, cy: 186, name: 'Tokyo',            tagline: 'Innovación tecnológica',             services: 'Automatización · IA · Software'       },
]

// [fromId, toId, durationSeconds]
const ARCS: [string, string, number][] = [
  ['tijuana',  'sandiego', 2.0],
  ['tijuana',  'cdmx',     2.8],
  ['cdmx',     'gdl',      2.2],
  ['cdmx',     'mty',      2.5],
  ['la',       'ny',       3.2],
  ['ny',       'madrid',   3.5],
  ['madrid',   'tokyo',    3.8],
  ['tokyo',    'tijuana',  4.2],
]

const CARDS: {
  id: string
  Icon: LucideIcon
  title: string
  desc: string
  corner: 'tl' | 'tr' | 'bl' | 'br'
  delay: number
  floatDelay: string
}[] = [
  {
    id: 'web',
    Icon: Globe,
    title: 'Páginas web',
    desc: 'Sitios modernos para negocios que quieren vender más y verse profesionales.',
    corner: 'tl',
    delay: 0.5,
    floatDelay: '0s',
  },
  {
    id: 'apps',
    Icon: Smartphone,
    title: 'Apps móviles',
    desc: 'Aplicaciones Android y iOS pensadas para conectar con tus clientes.',
    corner: 'tr',
    delay: 0.65,
    floatDelay: '1.2s',
  },
  {
    id: 'sistemas',
    Icon: LayoutDashboard,
    title: 'Sistemas admin.',
    desc: 'Control de ventas, inventario, clientes, reportes y operaciones.',
    corner: 'bl',
    delay: 0.8,
    floatDelay: '2.4s',
  },
  {
    id: 'ia',
    Icon: Bot,
    title: 'Automatización IA',
    desc: 'Procesos inteligentes para ahorrar tiempo y mejorar resultados.',
    corner: 'br',
    delay: 0.95,
    floatDelay: '3.6s',
  },
]

const METRICS = [
  { label: '+10 soluciones digitales' },
  { label: 'Web, apps & sistemas' },
  { label: 'Automatización con IA' },
]

// Deterministic particles — seeded to avoid SSR/client hydration mismatch
const PARTICLES = Array.from({ length: 70 }, (_, i) => {
  const a = ((i + 1) * 2654435761) >>> 0
  const b = (a * 1664525 + 1013904223) >>> 0
  return {
    id: i,
    x: (a % 10000) / 100,
    y: (b % 10000) / 100,
    size: 0.4 + (a % 16) / 25,
    opacity: 0.025 + (b % 8) / 220,
  }
})

// ── Helpers ───────────────────────────────────────────────────────────────────

function cityById(id: string): City | undefined {
  return CITIES.find((c) => c.id === id)
}

function arcPath(from: City, to: City): string {
  const mx = (from.cx + to.cx) / 2
  const my = (from.cy + to.cy) / 2
  const dx = to.cx - from.cx
  const dy = to.cy - from.cy
  const len = Math.sqrt(dx * dx + dy * dy)
  // Bow arc upward relative to midpoint (away from equator)
  const cpx = mx + (250 - mx) * 0.06
  const cpy = my - len * 0.26
  return `M ${from.cx},${from.cy} Q ${cpx},${cpy} ${to.cx},${to.cy}`
}

// ── GlobeSVG ──────────────────────────────────────────────────────────────────

function GlobeSVG({
  hovered,
  onHover,
  reduced,
}: {
  hovered: string | null
  onHover: (id: string | null) => void
  reduced: boolean
}) {
  const raw = useId()
  const uid = raw.replace(/:/g, 'u')

  return (
    <svg
      viewBox="0 0 500 500"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      aria-label="Red global de proyectos Vorantheus: ciudades conectadas digitalmente"
      role="img"
    >
      <defs>
        {/* ── Planet surface gradient — deep blue-navy ── */}
        <radialGradient id={`pg-${uid}`} cx="34%" cy="28%" r="74%">
          <stop offset="0%"   stopColor="#1a6fd4" stopOpacity="0.95" />
          <stop offset="22%"  stopColor="#0d3f82"                    />
          <stop offset="48%"  stopColor="#061630"                    />
          <stop offset="74%"  stopColor="#030c1e"                    />
          <stop offset="100%" stopColor="#010610"                    />
        </radialGradient>

        {/* ── Upper-left shimmer highlight ── */}
        <radialGradient id={`hl-${uid}`} cx="27%" cy="21%" r="42%">
          <stop offset="0%"   stopColor="#a8d8ff" stopOpacity="0.24" />
          <stop offset="55%"  stopColor="#38bdf8" stopOpacity="0.05" />
          <stop offset="100%" stopColor="#38bdf8" stopOpacity="0"    />
        </radialGradient>

        {/* ── Atmosphere halo ring ── */}
        <radialGradient id={`atm-${uid}`} cx="50%" cy="50%" r="50%">
          <stop offset="70%"  stopColor="transparent"                />
          <stop offset="82%"  stopColor="#3b82f6"  stopOpacity="0.06" />
          <stop offset="91%"  stopColor="#60a5fa"  stopOpacity="0.20" />
          <stop offset="97%"  stopColor="#93c5fd"  stopOpacity="0.08" />
          <stop offset="100%" stopColor="transparent"                />
        </radialGradient>

        {/* ── Outer diffuse glow ── */}
        <radialGradient id={`gl-${uid}`} cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor="#1d4ed8" stopOpacity="0.18" />
          <stop offset="60%"  stopColor="#1d4ed8" stopOpacity="0.06" />
          <stop offset="100%" stopColor="transparent"                />
        </radialGradient>

        {/* ── City dot glow filter ── */}
        <filter id={`cg-${uid}`} x="-140%" y="-140%" width="380%" height="380%">
          <feGaussianBlur stdDeviation="3.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* ── Arc glow filter ── */}
        <filter id={`ag-${uid}`} x="-18%" y="-18%" width="136%" height="136%">
          <feGaussianBlur stdDeviation="1.8" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* ── Clip to planet circle ── */}
        <clipPath id={`cp-${uid}`}>
          <circle cx="250" cy="250" r="192" />
        </clipPath>
      </defs>

      {/* ── Outer diffuse glow (behind planet) ── */}
      <circle cx="250" cy="250" r="240" fill={`url(#gl-${uid})`} />

      {/* ── Atmosphere ring ── */}
      <circle cx="250" cy="250" r="220" fill={`url(#atm-${uid})`} />

      {/* ── Planet base ── */}
      <circle cx="250" cy="250" r="192" fill={`url(#pg-${uid})`} />

      {/* ── Star-field inside planet ── */}
      <g clipPath={`url(#cp-${uid})`} aria-hidden="true">
        {PARTICLES.slice(0, 35).map((p) => (
          <circle
            key={`sp${p.id}`}
            cx={(p.x / 100) * 384 + 58}
            cy={(p.y / 100) * 384 + 58}
            r={p.size * 0.55}
            fill="white"
            opacity={p.opacity * 2.2}
          />
        ))}
      </g>

      {/* ── Latitude / longitude grid ── */}
      <g
        clipPath={`url(#cp-${uid})`}
        className={reduced ? '' : 'pnd-grid-spin'}
        aria-hidden="true"
      >
        {/* Latitude ellipses */}
        {([-145, -105, -60, 0, 60, 105, 145] as number[]).map((dy) => {
          const y = 250 + dy
          const rx = Math.sqrt(Math.max(0, 192 * 192 - dy * dy))
          if (rx < 10) return null
          return (
            <ellipse
              key={`lat${dy}`}
              cx="250" cy={y}
              rx={rx} ry={rx * 0.115}
              fill="none"
              stroke="rgba(120,180,255,0.10)"
              strokeWidth="0.65"
            />
          )
        })}
        {/* Longitude ellipses */}
        {([22, 50, 78, 106, 134, 162] as number[]).map((a) => {
          const rx = Math.abs(Math.sin((a * Math.PI) / 180) * 192)
          return (
            <ellipse
              key={`lon${a}`}
              cx="250" cy="250"
              rx={rx} ry="192"
              fill="none"
              stroke="rgba(100,165,255,0.07)"
              strokeWidth="0.55"
            />
          )
        })}
      </g>

      {/* ── Highlight shimmer ── */}
      <circle cx="250" cy="250" r="192" fill={`url(#hl-${uid})`} />

      {/* ── Connection arcs ── */}
      {ARCS.map(([fromId, toId, dur]) => {
        const from = cityById(fromId)
        const to   = cityById(toId)
        if (!from || !to) return null
        const d = arcPath(from, to)
        const active = hovered === fromId || hovered === toId
        return (
          <g key={`arc-${fromId}-${toId}`} filter={`url(#ag-${uid})`}>
            {/* Static base line */}
            <path
              d={d} fill="none"
              stroke={active ? 'rgba(96,165,250,0.55)' : 'rgba(59,130,246,0.18)'}
              strokeWidth={active ? 1.7 : 0.85}
            />
            {/* Animated photon dot */}
            <path
              d={d} fill="none"
              stroke={active ? 'rgba(200,235,255,0.98)' : 'rgba(147,197,253,0.65)'}
              strokeWidth={active ? 3.0 : 1.7}
              strokeLinecap="round"
              strokeDasharray="6 245"
              className={reduced ? '' : 'pnd-arc-flow'}
              style={reduced ? {} : { animationDuration: `${dur}s` }}
            />
          </g>
        )
      })}

      {/* ── City markers ── */}
      {CITIES.map((city, i) => {
        const active = hovered === city.id
        return (
          <g
            key={city.id}
            filter={`url(#cg-${uid})`}
            style={{ cursor: 'pointer' }}
            onMouseEnter={() => onHover(city.id)}
            onMouseLeave={() => onHover(null)}
            onClick={() => onHover(active ? null : city.id)}
            role="button"
            aria-label={`${city.name} — ${city.tagline}`}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                onHover(active ? null : city.id)
              }
            }}
          >
            {/* Outer pulse ring */}
            <circle
              cx={city.cx} cy={city.cy}
              r={active ? 13 : 9}
              fill="none"
              stroke={active ? 'rgba(96,165,250,0.70)' : 'rgba(59,130,246,0.28)'}
              strokeWidth="0.8"
              className={reduced ? '' : 'pnd-pulse'}
              style={reduced ? {} : { animationDelay: `${(i % 6) * 0.42}s` }}
            />
            {/* Filled glow area */}
            <circle
              cx={city.cx} cy={city.cy}
              r={active ? 6.5 : 4.8}
              fill={active ? 'rgba(96,165,250,0.30)' : 'rgba(59,130,246,0.14)'}
            />
            {/* Main dot */}
            <circle
              cx={city.cx} cy={city.cy}
              r={active ? 3.8 : 2.8}
              fill={active ? '#93c5fd' : '#7dd3fc'}
            />
            {/* Bright core */}
            <circle
              cx={city.cx} cy={city.cy}
              r="1.4"
              fill="white"
              opacity={active ? 1 : 0.82}
            />
            {/* City label */}
            <text
              x={city.cx + 8}
              y={city.cy + 4.5}
              fontSize={active ? '8.2' : '7.2'}
              fill={active ? 'rgba(255,255,255,0.95)' : 'rgba(255,255,255,0.42)'}
              fontFamily="system-ui,-apple-system,sans-serif"
              fontWeight={active ? '700' : '400'}
              style={{ pointerEvents: 'none', userSelect: 'none' }}
            >
              {city.name}
            </text>
          </g>
        )
      })}

      {/* ── Planet edge rings ── */}
      <circle cx="250" cy="250" r="192" fill="none" stroke="rgba(59,130,246,0.26)" strokeWidth="1.5" />
      <circle cx="250" cy="250" r="198" fill="none" stroke="rgba(59,130,246,0.07)" strokeWidth="5"   />
    </svg>
  )
}

// ── City Tooltip ──────────────────────────────────────────────────────────────

function CityTooltip({ city }: { city: City }) {
  return (
    <motion.div
      key={city.id}
      initial={{ opacity: 0, y: 8,  scale: 0.93 }}
      animate={{ opacity: 1, y: 0,  scale: 1    }}
      exit={{    opacity: 0, y: 5,  scale: 0.93 }}
      transition={{ duration: 0.20, ease: [0.23, 1, 0.32, 1] }}
      className="absolute left-1/2 -translate-x-1/2 bottom-2 z-30 pointer-events-none"
      style={{ minWidth: 210 }}
    >
      <div
        className="rounded-2xl px-4 py-3.5"
        style={{
          background: 'rgba(3, 8, 22, 0.93)',
          backdropFilter: 'blur(22px)',
          WebkitBackdropFilter: 'blur(22px)',
          border: '1px solid rgba(96,165,250,0.18)',
        }}
      >
        <div className="flex items-center gap-2 mb-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#7dd3fc] flex-shrink-0" />
          <p className="text-white text-sm font-bold tracking-tight">{city.name}</p>
        </div>
        <p className="text-white/65 text-xs leading-snug mb-2 pl-3.5">{city.tagline}</p>
        <p className="text-[#7dd3fc] text-[10px] font-semibold tracking-wide pl-3.5">{city.services}</p>
      </div>
    </motion.div>
  )
}

// ── Floating Card ─────────────────────────────────────────────────────────────

const CORNER_POS: Record<string, string> = {
  tl: '-top-4 -left-3 lg:-top-6 lg:-left-8',
  tr: '-top-4 -right-3 lg:-top-6 lg:-right-8',
  bl: '-bottom-4 -left-3 lg:-bottom-6 lg:-left-8',
  br: '-bottom-4 -right-3 lg:-bottom-6 lg:-right-8',
}

function FloatingCard({
  Icon,
  title,
  desc,
  corner,
  delay,
  floatDelay,
  reduced,
}: {
  Icon: LucideIcon
  title: string
  desc: string
  corner: keyof typeof CORNER_POS
  delay: number
  floatDelay: string
  reduced: boolean
}) {
  const yInit = corner.startsWith('b') ? 14 : -14

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.86, y: yInit }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.68, delay, ease: [0.23, 1, 0.32, 1] }}
      className={`hidden lg:block absolute z-10 w-44 ${CORNER_POS[corner] ?? ''} ${reduced ? '' : 'pnd-float'}`}
      style={{
        animationDelay: floatDelay,
        background: 'rgba(6, 12, 30, 0.88)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        border: '1px solid rgba(96, 165, 250, 0.20)',
        borderRadius: 18,
        padding: '14px 16px',
      }}
    >
      <div
        className="w-8 h-8 rounded-xl flex items-center justify-center mb-3"
        style={{ background: 'rgba(96, 165, 250, 0.15)' }}
      >
        <Icon className="w-4 h-4 text-[#7dd3fc]" />
      </div>
      <p className="text-white text-[12px] font-bold mb-1.5 leading-tight">{title}</p>
      <p className="text-white/60 text-[10px] leading-relaxed">{desc}</p>
    </motion.div>
  )
}

// ── Main export ───────────────────────────────────────────────────────────────

export default function PlanetNetworkDashboard() {
  const [hovered, setHovered] = useState<string | null>(null)
  const reduced = useReducedMotion() ?? false

  return (
    <section
      className="relative overflow-hidden"
      style={{ background: 'linear-gradient(150deg, #06091a 0%, #07101e 45%, #04080f 100%)' }}
      aria-labelledby="pnd-heading"
    >
      {/* ── Ambient background glows ── */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        {/* Top-right warm glow */}
        <div
          className="absolute"
          style={{
            top: '-8%', right: '-8%',
            width: 750, height: 750,
            background: 'radial-gradient(circle, rgba(0,80,230,0.09) 0%, transparent 62%)',
            borderRadius: '50%',
          }}
        />
        {/* Bottom-left cool glow */}
        <div
          className="absolute"
          style={{
            bottom: '-12%', left: '-6%',
            width: 650, height: 650,
            background: 'radial-gradient(circle, rgba(80,0,200,0.07) 0%, transparent 62%)',
            borderRadius: '50%',
          }}
        />
        {/* Center subtle glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{
            width: 900, height: 900,
            background: 'radial-gradient(circle, rgba(0,50,160,0.06) 0%, transparent 58%)',
            borderRadius: '50%',
          }}
        />
      </div>

      {/* ── Star-field background ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        {PARTICLES.map((p) => (
          <div
            key={p.id}
            className="absolute rounded-full bg-white"
            style={{
              left: `${p.x}%`,
              top:  `${p.y}%`,
              width:  `${p.size}px`,
              height: `${p.size}px`,
              opacity: p.opacity,
            }}
          />
        ))}
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="min-h-[100dvh] grid lg:grid-cols-2 gap-12 lg:gap-8 items-center py-24">

          {/* ── Left: text content ── */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease: [0.23, 1, 0.32, 1] }}
          >
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full mb-8"
              style={{
                background: 'rgba(0, 70, 220, 0.10)',
                border: '1px solid rgba(96, 165, 250, 0.20)',
              }}
            >
              <span
                className={`w-1.5 h-1.5 rounded-full bg-[#7dd3fc] flex-shrink-0 ${reduced ? '' : 'pnd-pulse'}`}
                style={reduced ? {} : { animationDuration: '2.2s' }}
              />
              <span className="text-[#93c5fd] text-xs font-semibold tracking-widest uppercase">
                Vorantheus Global Network
              </span>
            </div>

            {/* Heading */}
            <h2
              id="pnd-heading"
              className="text-4xl sm:text-5xl lg:text-[3.3rem] font-black text-white leading-[1.05] mb-6"
              style={{ letterSpacing: '-0.025em' }}
            >
              Conectamos negocios con{' '}
              <span className="text-[#60a5fa]">tecnología inteligente</span>
            </h2>

            {/* Subtitle */}
            <p className="text-lg text-white/70 leading-relaxed mb-10 max-w-[480px]">
              Un ecosistema digital para crear páginas web, apps móviles, sistemas
              administrativos, tiendas en línea y automatizaciones con IA desde una
              sola visión tecnológica.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                href="/cotizar"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#0071E3] hover:bg-[#0077ED] text-white font-semibold transition-colors duration-200 active:scale-[0.97]"
              >
                Cotizar proyecto
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
              </Link>
              <Link
                href="/servicios"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/14 text-white/65 hover:text-white hover:border-white/28 font-semibold transition-colors duration-200"
              >
                Ver servicios
              </Link>
            </div>

            {/* Metrics */}
            <div className="flex flex-wrap gap-3">
              {METRICS.map((m) => (
                <div
                  key={m.label}
                  className="flex items-center gap-2 px-3.5 py-2 rounded-full"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.09)',
                  }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7dd3fc] flex-shrink-0" />
                  <span className="text-white/75 text-sm font-medium">{m.label}</span>
                </div>
              ))}
            </div>

            {/* Mobile: service cards grid */}
            <div className="lg:hidden grid grid-cols-2 gap-3 mt-10">
              {CARDS.map((card, i) => (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                  style={{
                    background: 'rgba(6, 12, 30, 0.88)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    border: '1px solid rgba(96, 165, 250, 0.18)',
                    borderRadius: 16,
                    padding: '14px 16px',
                  }}
                >
                  <div
                    className="w-7 h-7 rounded-lg flex items-center justify-center mb-2"
                    style={{ background: 'rgba(96, 165, 250, 0.15)' }}
                  >
                    <card.Icon className="w-3.5 h-3.5 text-[#7dd3fc]" />
                  </div>
                  <p className="text-white text-[11px] font-bold mb-1 leading-tight">{card.title}</p>
                  <p className="text-white/60 text-[10px] leading-relaxed">{card.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ── Right: planet + floating cards ── */}
          <div className="flex items-center justify-center">
            <div
              className="relative"
              style={{ width: 'min(540px, 92vw)', height: 'min(540px, 92vw)' }}
            >
              {/* Corner cards (desktop only — hidden on mobile via FloatingCard) */}
              {CARDS.map((card) => (
                <FloatingCard
                  key={card.id}
                  Icon={card.Icon}
                  title={card.title}
                  desc={card.desc}
                  corner={card.corner}
                  delay={card.delay}
                  floatDelay={card.floatDelay}
                  reduced={reduced}
                />
              ))}

              {/* Globe */}
              <motion.div
                initial={{ opacity: 0, scale: 0.82 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.15, ease: [0.23, 1, 0.32, 1] }}
                className="w-full h-full relative"
              >
                <GlobeSVG hovered={hovered} onHover={setHovered} reduced={reduced} />

                {/* City tooltip */}
                <AnimatePresence>
                  {hovered && (() => {
                    const city = cityById(hovered)
                    return city ? <CityTooltip city={city} /> : null
                  })()}
                </AnimatePresence>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

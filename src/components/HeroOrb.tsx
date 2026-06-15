'use client'

import { motion, useReducedMotion } from 'framer-motion'

export default function HeroOrb() {
  const prefersReduced = useReducedMotion()

  // When reduced motion is preferred, collapse durations so animations settle instantly
  const dur = (base: string) => (prefersReduced ? '0.01s' : base)

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.88 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.4, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
      whileHover={prefersReduced ? {} : { scale: 1.035 }}
      className="relative flex items-center justify-center select-none w-full"
      style={{ maxWidth: 520, aspectRatio: '1' }}
    >
      {/* Ambient outer glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 44% 50%, rgba(0,113,227,0.09) 0%, rgba(124,58,237,0.05) 52%, transparent 72%)',
          filter: 'blur(55px)',
        }}
      />

      <svg
        viewBox="0 0 480 480"
        className="w-full h-full pointer-events-none"
        aria-hidden="true"
        role="img"
      >
        <defs>
          <radialGradient id="vo-orb-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%"  stopColor="#0071E3" stopOpacity="0.40" />
            <stop offset="55%" stopColor="#0071E3" stopOpacity="0.10" />
            <stop offset="100%" stopColor="#0071E3" stopOpacity="0" />
          </radialGradient>
          {/* Subtle gradient for equator line */}
          <linearGradient id="vo-equator-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"   stopColor="rgba(0,113,227,0.08)" />
            <stop offset="35%"  stopColor="rgba(0,113,227,0.28)" />
            <stop offset="65%"  stopColor="rgba(0,113,227,0.28)" />
            <stop offset="100%" stopColor="rgba(0,113,227,0.08)" />
          </linearGradient>
        </defs>

        {/* ─── Sphere outline ─── */}
        <circle cx="240" cy="240" r="182"
          fill="none"
          stroke="rgba(28,27,24,0.07)"
          strokeWidth="1"
        />

        {/* ─── Latitude rings — depth layering ─── */}
        {/* Polar (farthest — most faded, thinnest) */}
        <ellipse cx="240" cy="155" rx="118" ry="31" fill="none"
          stroke="rgba(0,113,227,0.055)" strokeWidth="0.75" />
        <ellipse cx="240" cy="325" rx="118" ry="31" fill="none"
          stroke="rgba(0,113,227,0.055)" strokeWidth="0.75" />

        {/* Sub-tropics */}
        <ellipse cx="240" cy="194" rx="160" ry="43" fill="none"
          stroke="rgba(0,113,227,0.12)" strokeWidth="1" />
        <ellipse cx="240" cy="286" rx="160" ry="43" fill="none"
          stroke="rgba(0,113,227,0.12)" strokeWidth="1" />

        {/* Equator — closest, most prominent */}
        <ellipse cx="240" cy="240" rx="182" ry="51" fill="none"
          stroke="url(#vo-equator-grad)" strokeWidth="1.6" />

        {/* ─── Meridian rings ─── */}
        {/* Subtle background diagonals */}
        <ellipse cx="240" cy="240" rx="51" ry="182" fill="none"
          stroke="rgba(0,113,227,0.055)" strokeWidth="0.7"
          transform="rotate(27 240 240)" />
        <ellipse cx="240" cy="240" rx="51" ry="182" fill="none"
          stroke="rgba(124,58,237,0.055)" strokeWidth="0.7"
          transform="rotate(-80 240 240)" />

        {/* Secondary meridians */}
        <ellipse cx="240" cy="240" rx="51" ry="182" fill="none"
          stroke="rgba(124,58,237,0.12)" strokeWidth="1"
          transform="rotate(-55 240 240)" />
        <ellipse cx="240" cy="240" rx="51" ry="182" fill="none"
          stroke="rgba(124,58,237,0.16)" strokeWidth="1.1"
          transform="rotate(55 240 240)" />

        {/* Prime meridian */}
        <ellipse cx="240" cy="240" rx="51" ry="182" fill="none"
          stroke="rgba(0,113,227,0.20)" strokeWidth="1.3" />

        {/* ─── Orbiting dot 1: equatorial, clockwise, blue ─── */}
        {/* Outer halo */}
        <circle cx="422" cy="240" r="13" fill="rgba(0,113,227,0.08)">
          <animateTransform attributeName="transform" type="rotate"
            from="0 240 240" to="360 240 240"
            dur={dur('22s')} repeatCount="indefinite"
          />
        </circle>
        {/* Inner halo */}
        <circle cx="422" cy="240" r="8" fill="rgba(0,113,227,0.18)">
          <animateTransform attributeName="transform" type="rotate"
            from="0 240 240" to="360 240 240"
            dur={dur('22s')} repeatCount="indefinite"
          />
        </circle>
        {/* Main dot */}
        <circle cx="422" cy="240" r="5" fill="#0071E3">
          <animateTransform attributeName="transform" type="rotate"
            from="0 240 240" to="360 240 240"
            dur={dur('22s')} repeatCount="indefinite"
          />
        </circle>

        {/* ─── Orbiting dot 2: tilted plane, counter-clockwise, purple ─── */}
        <g transform="rotate(65 240 240)">
          {/* Outer halo */}
          <circle cx="422" cy="240" r="11" fill="rgba(124,58,237,0.08)">
            <animateTransform attributeName="transform" type="rotate"
              from="0 240 240" to="-360 240 240"
              dur={dur('32s')} repeatCount="indefinite" begin="-14s"
            />
          </circle>
          {/* Main dot */}
          <circle cx="422" cy="240" r="4.5" fill="rgba(124,58,237,0.82)">
            <animateTransform attributeName="transform" type="rotate"
              from="0 240 240" to="-360 240 240"
              dur={dur('32s')} repeatCount="indefinite" begin="-14s"
            />
          </circle>
        </g>

        {/* ─── Orbiting dot 3: small, fast, counter-equatorial ─── */}
        <circle cx="58" cy="240" r="3" fill="rgba(0,113,227,0.42)">
          <animateTransform attributeName="transform" type="rotate"
            from="0 240 240" to="-360 240 240"
            dur={dur('15s')} repeatCount="indefinite" begin="-5s"
          />
        </circle>

        {/* ─── Center: pulsing glow layers ─── */}
        {/* Outer pulse ring */}
        <circle cx="240" cy="240" r="30" fill="url(#vo-orb-glow)">
          <animate attributeName="r"
            values="22;40;22"
            dur={dur('5s')} repeatCount="indefinite"
            calcMode="spline" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"
          />
          <animate attributeName="opacity"
            values="0.9;0.35;0.9"
            dur={dur('5s')} repeatCount="indefinite"
            calcMode="spline" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"
          />
        </circle>
        {/* Middle pulse */}
        <circle cx="240" cy="240" r="10" fill="rgba(0,113,227,0.15)">
          <animate attributeName="r"
            values="8;14;8"
            dur={dur('5s')} repeatCount="indefinite"
            calcMode="spline" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"
            begin="-0.3s"
          />
        </circle>
        {/* Core dot */}
        <circle cx="240" cy="240" r="4" fill="rgba(0,113,227,0.60)">
          <animate attributeName="r"
            values="3.5;5.5;3.5"
            dur={dur('5s')} repeatCount="indefinite"
            calcMode="spline" keySplines="0.42 0 0.58 1;0.42 0 0.58 1"
          />
        </circle>
      </svg>
    </motion.div>
  )
}

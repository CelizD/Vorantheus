'use client'

import { motion } from 'framer-motion'

export default function HeroOrb() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.1, delay: 0.35, ease: 'easeOut' }}
      className="relative flex items-center justify-center select-none pointer-events-none"
      style={{ width: 480, height: 480 }}
    >
      {/* Ambient glow */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background:
            'radial-gradient(circle at 50% 50%, rgba(0,113,227,0.07) 0%, rgba(124,58,237,0.04) 50%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <svg
        viewBox="0 0 480 480"
        className="absolute inset-0 w-full h-full"
        aria-hidden="true"
      >
        {/* Sphere outline */}
        <circle
          cx="240" cy="240" r="180"
          fill="none"
          stroke="rgba(28,27,24,0.09)"
          strokeWidth="1"
        />

        {/* Latitude rings */}
        {/* Equator */}
        <ellipse cx="240" cy="240" rx="180" ry="48" fill="none" stroke="rgba(0,113,227,0.22)" strokeWidth="1.2" />
        {/* Tropic N */}
        <ellipse cx="240" cy="198" rx="160" ry="43" fill="none" stroke="rgba(0,113,227,0.13)" strokeWidth="1" />
        {/* Tropic S */}
        <ellipse cx="240" cy="282" rx="160" ry="43" fill="none" stroke="rgba(0,113,227,0.13)" strokeWidth="1" />
        {/* Arctic N */}
        <ellipse cx="240" cy="158" rx="118" ry="31" fill="none" stroke="rgba(0,113,227,0.07)" strokeWidth="0.8" />
        {/* Arctic S */}
        <ellipse cx="240" cy="322" rx="118" ry="31" fill="none" stroke="rgba(0,113,227,0.07)" strokeWidth="0.8" />

        {/* Longitude rings (meridians) */}
        <ellipse cx="240" cy="240" rx="48" ry="180" fill="none" stroke="rgba(0,113,227,0.18)" strokeWidth="1" />
        <ellipse cx="240" cy="240" rx="48" ry="180" fill="none"
          stroke="rgba(124,58,237,0.14)" strokeWidth="1"
          transform="rotate(55 240 240)" />
        <ellipse cx="240" cy="240" rx="48" ry="180" fill="none"
          stroke="rgba(124,58,237,0.10)" strokeWidth="0.8"
          transform="rotate(-55 240 240)" />

        {/* Orbiting dot 1 — equatorial, clockwise */}
        <circle cx="420" cy="240" r="5" fill="#0071E3">
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 240 240"
            to="360 240 240"
            dur="10s"
            repeatCount="indefinite"
          />
        </circle>

        {/* Orbiting dot 2 — tilted orbit, counter-clockwise */}
        <g transform="rotate(65 240 240)">
          <circle cx="420" cy="240" r="3.5" fill="rgba(124,58,237,0.75)">
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 240 240"
              to="-360 240 240"
              dur="16s"
              repeatCount="indefinite"
              begin="-6s"
            />
          </circle>
        </g>

        {/* Orbiting dot 3 — small, fast, opposite equatorial direction */}
        <circle cx="60" cy="240" r="2.5" fill="rgba(0,113,227,0.45)">
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 240 240"
            to="-360 240 240"
            dur="7s"
            repeatCount="indefinite"
            begin="-2s"
          />
        </circle>

        {/* Core */}
        <circle cx="240" cy="240" r="5" fill="rgba(0,113,227,0.15)" />
        <circle cx="240" cy="240" r="2.5" fill="rgba(0,113,227,0.4)" />
      </svg>
    </motion.div>
  )
}

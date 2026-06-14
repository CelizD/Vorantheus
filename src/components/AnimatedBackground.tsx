'use client'

import { useEffect, useState } from 'react'

interface AnimatedBackgroundProps {
  className?: string
  showDotGrid?: boolean
}

export default function AnimatedBackground({
  className = '',
  showDotGrid = true,
}: AnimatedBackgroundProps) {
  const [mounted, setMounted] = useState(false)
  useEffect(() => { setMounted(true) }, [])

  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      aria-hidden="true"
    >
      {/* Blue blob — top left */}
      <div
        className="absolute animate-blob-1"
        style={{
          width: '60vw',
          height: '60vw',
          maxWidth: 700,
          maxHeight: 700,
          top: '-20%',
          left: '-15%',
          background: 'radial-gradient(ellipse, rgba(0,113,227,0.18) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />
      {/* Purple blob — bottom right */}
      <div
        className="absolute animate-blob-2"
        style={{
          width: '50vw',
          height: '50vw',
          maxWidth: 600,
          maxHeight: 600,
          bottom: '-15%',
          right: '-10%',
          background: 'radial-gradient(ellipse, rgba(124,58,237,0.15) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />
      {/* Cyan accent — center */}
      <div
        className="absolute animate-blob-3"
        style={{
          width: '30vw',
          height: '30vw',
          maxWidth: 400,
          maxHeight: 400,
          top: '40%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(ellipse, rgba(0,200,255,0.06) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />
      {/* Dot grid overlay */}
      {showDotGrid && mounted && (
        <div className="dot-grid absolute inset-0 opacity-[0.3]" />
      )}
    </div>
  )
}

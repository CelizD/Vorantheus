'use client'

import { useEffect, useRef } from 'react'
import { Calendar } from 'lucide-react'

const CALENDLY_URL =
  process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/vorantheus/consulta-gratuita'

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void
    }
  }
}

interface CalendlyButtonProps {
  className?: string
  label?: string
}

export default function CalendlyButton({
  className,
  label = 'Agendar llamada gratuita',
}: CalendlyButtonProps) {
  const ready = useRef(false)

  useEffect(() => {
    if (!document.getElementById('calendly-css')) {
      const link = document.createElement('link')
      link.id = 'calendly-css'
      link.rel = 'stylesheet'
      link.href = 'https://assets.calendly.com/assets/external/widget.css'
      link.crossOrigin = 'anonymous'
      document.head.appendChild(link)
    }

    if (!document.getElementById('calendly-js')) {
      const script = document.createElement('script')
      script.id = 'calendly-js'
      script.src = 'https://assets.calendly.com/assets/external/widget.js'
      script.async = true
      script.crossOrigin = 'anonymous'
      script.onload = () => { ready.current = true }
      document.head.appendChild(script)
    } else {
      // Script tag already exists — may have loaded already
      ready.current = !!window.Calendly
    }
  }, [])

  function openCalendly() {
    if (ready.current && window.Calendly) {
      window.Calendly.initPopupWidget({ url: CALENDLY_URL })
    } else {
      // Script not ready yet — open the scheduling page directly as fallback
      window.open(CALENDLY_URL, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <button
      type="button"
      onClick={openCalendly}
      aria-label={label}
      className={
        className ??
        'inline-flex items-center gap-2 text-base text-white/60 hover:text-white transition-colors duration-200 font-medium py-4 active:scale-[0.97]'
      }
    >
      <Calendar className="w-4 h-4" aria-hidden="true" />
      {label}
    </button>
  )
}

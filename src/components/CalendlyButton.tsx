'use client'

import { useEffect } from 'react'
import { Calendar } from 'lucide-react'

// Set your Calendly URL here or via env var NEXT_PUBLIC_CALENDLY_URL
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
  useEffect(() => {
    // Load Calendly assets once — guard against duplicate injection
    if (!document.getElementById('calendly-css')) {
      const link = document.createElement('link')
      link.id = 'calendly-css'
      link.rel = 'stylesheet'
      link.href = 'https://assets.calendly.com/assets/external/widget.css'
      // crossOrigin enables CORS checks for the stylesheet
      link.crossOrigin = 'anonymous'
      document.head.appendChild(link)
    }

    if (!document.getElementById('calendly-js')) {
      const script = document.createElement('script')
      script.id = 'calendly-js'
      script.src = 'https://assets.calendly.com/assets/external/widget.js'
      script.async = true
      script.crossOrigin = 'anonymous'
      document.head.appendChild(script)
    }
    // No cleanup needed: these assets persist for the session lifetime.
    // Removing them on unmount would break other mounted CalendlyButton instances.
  }, [])

  function openCalendly() {
    window.Calendly?.initPopupWidget({ url: CALENDLY_URL })
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

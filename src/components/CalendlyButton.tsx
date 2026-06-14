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
    // Load Calendly assets once
    if (document.getElementById('calendly-css')) return

    const link = document.createElement('link')
    link.id = 'calendly-css'
    link.rel = 'stylesheet'
    link.href = 'https://assets.calendly.com/assets/external/widget.css'
    document.head.appendChild(link)

    const script = document.createElement('script')
    script.id = 'calendly-js'
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.head.appendChild(script)
  }, [])

  function openCalendly() {
    window.Calendly?.initPopupWidget({ url: CALENDLY_URL })
  }

  return (
    <button
      onClick={openCalendly}
      className={
        className ??
        'inline-flex items-center gap-2 text-base text-white/60 hover:text-white transition-colors duration-200 font-medium py-4'
      }
    >
      <Calendar className="w-4 h-4" />
      {label}
    </button>
  )
}

'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Cookie } from 'lucide-react'

const STORAGE_KEY = 'vo_cookie_consent'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    const timer = window.setTimeout(() => {
      setVisible(!stored)
    }, 0)

    return () => window.clearTimeout(timer)
  }, [])

  function accept() {
    localStorage.setItem(STORAGE_KEY, 'granted')
    // Update GA4 consent mode if available
    const w = window as Window & {
      gtag?: (cmd: string, target: string, params: Record<string, string>) => void
    }
    w.gtag?.('consent', 'update', {
      analytics_storage: 'granted',
      ad_storage: 'denied',
    })
    setVisible(false)
  }

  function reject() {
    localStorage.setItem(STORAGE_KEY, 'denied')
    setVisible(false)
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="fixed bottom-0 left-0 right-0 z-[60] p-4 sm:p-6 pointer-events-none"
        >
          <div className="max-w-4xl mx-auto bg-white border border-black/[0.08] rounded-2xl shadow-medium p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 pointer-events-auto">
            <div className="flex items-start gap-3 flex-1">
              <div className="w-9 h-9 rounded-xl bg-[#0071E3]/10 flex items-center justify-center shrink-0 mt-0.5">
                <Cookie className="w-4.5 h-4.5 text-[#0071E3]" />
              </div>
              <p className="text-sm text-muted leading-relaxed">
                Usamos cookies de análisis para mejorar tu experiencia en el sitio.{' '}
                <Link href="/privacidad" className="text-[#0071E3] hover:underline">
                  Política de privacidad
                </Link>
                .
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto">
              <button
                onClick={reject}
                className="flex-1 sm:flex-none px-5 py-2 text-sm text-muted border border-black/[0.1] rounded-full hover:bg-black/[0.03] transition-colors duration-200"
              >
                Rechazar
              </button>
              <button
                onClick={accept}
                className="flex-1 sm:flex-none px-5 py-2 text-sm text-white bg-[#0071E3] hover:bg-[#0077ED] rounded-full transition-colors duration-200 font-medium"
              >
                Aceptar
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

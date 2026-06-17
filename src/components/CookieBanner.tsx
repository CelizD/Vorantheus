'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

const STORAGE_KEY = 'vo_cookie_consent'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    const timer = window.setTimeout(() => {
      setVisible(!stored)
    }, 800)
    return () => window.clearTimeout(timer)
  }, [])

  function accept() {
    localStorage.setItem(STORAGE_KEY, 'granted')
    const w = window as Window & {
      gtag?: (cmd: string, target: string, params: Record<string, string>) => void
    }
    w.gtag?.('consent', 'update', {
      analytics_storage: 'granted',
      ad_storage: 'denied',
    })
    setVisible(false)
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
          className="fixed bottom-6 left-0 right-0 z-[60] px-4 pointer-events-none"
        >
          <div
            role="region"
            aria-label="Aviso de cookies"
            className="max-w-2xl mx-auto pointer-events-auto flex flex-col sm:flex-row items-center gap-4 px-5 py-4 rounded-2xl"
            style={{
              background: 'rgba(28, 27, 24, 0.96)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
              border: '1px solid rgba(255,255,255,0.10)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.28)',
            }}
          >
            <p className="text-sm text-white/65 leading-relaxed flex-1 text-center sm:text-left">
              Usamos cookies de análisis para mejorar tu experiencia.{' '}
              <Link
                href="/privacidad"
                className="text-white/90 hover:text-white underline underline-offset-2 transition-colors duration-200"
              >
                Política de privacidad
              </Link>
              .
            </p>
            <button
              type="button"
              onClick={accept}
              className="shrink-0 px-6 py-2 text-sm font-semibold text-white bg-[#0071E3] hover:bg-[#0077ED] rounded-full transition-[background-color,transform] duration-200 active:scale-[0.97] whitespace-nowrap"
            >
              Entendido
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

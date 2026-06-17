'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('Unhandled error:', error.message)
  }, [error])

  return (
    <>
      <Navbar />
      <main
        className="min-h-[calc(100dvh-144px)] flex flex-col items-center justify-center px-6"
        style={{ background: '#F7F4EF' }}
      >
        <p className="text-8xl font-black text-[#1C1B18]/10 select-none" aria-hidden="true">
          500
        </p>
        <h1 className="mt-4 text-3xl font-black text-[#1C1B18] tracking-tight text-center">
          Algo salió mal
        </h1>
        <p className="mt-3 text-[#1C1B18]/50 text-center max-w-sm leading-relaxed">
          Ocurrió un error inesperado. Puedes intentarlo de nuevo o volver al inicio.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <button
            onClick={reset}
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#0071E3] hover:bg-[#0077ED] text-white font-semibold text-base rounded-full transition-colors duration-200 active:scale-[0.97]"
          >
            Intentar de nuevo
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-[#1C1B18]/20 hover:border-[#1C1B18]/40 text-[#1C1B18] font-medium text-base rounded-full transition-colors duration-200 hover:bg-[#1C1B18]/5 active:scale-[0.97]"
          >
            Volver al inicio
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}

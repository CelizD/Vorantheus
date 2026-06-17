import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main
        className="min-h-[calc(100dvh-144px)] flex flex-col items-center justify-center px-6"
        style={{ background: '#F7F4EF' }}
      >
        <p className="text-8xl font-black text-[#1C1B18]/10 select-none" aria-hidden="true">
          404
        </p>
        <h1 className="mt-4 text-3xl font-black text-[#1C1B18] tracking-tight text-center">
          Página no encontrada
        </h1>
        <p className="mt-3 text-[#1C1B18]/50 text-center max-w-sm leading-relaxed">
          La página que buscas no existe o fue movida a otra dirección.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 px-7 py-3.5 bg-[#0071E3] hover:bg-[#0077ED] text-white font-semibold text-base rounded-full transition-colors duration-200 active:scale-[0.97]"
        >
          Volver al inicio
        </Link>
      </main>
      <Footer />
    </>
  )
}

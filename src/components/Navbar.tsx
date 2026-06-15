'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { href: '/servicios', label: 'Servicios' },
  { href: '/paquetes', label: 'Paquetes' },
  { href: '/portafolio', label: 'Portafolio' },
  { href: '/nosotros', label: 'Nosotros' },
  { href: '/contacto', label: 'Contacto' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  useEffect(() => {
    if (!mobileOpen) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [mobileOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#F7F4EF]/95 backdrop-blur-2xl border-b border-[#E6E0D6]'
            : 'bg-[#F7F4EF]/80 backdrop-blur-xl border-b border-[#E6E0D6]/50'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-5 h-5 rounded-sm bg-[#0071E3] flex items-center justify-center">
                <div className="w-2 h-2 rounded-sm bg-white" />
              </div>
              <span className="text-sm font-bold tracking-widest text-[#1C1B18] uppercase">
                Vorantheus
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-sm text-[#6B6860] hover:text-[#1C1B18] transition-colors duration-200 rounded-lg"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-3">
              <Link
                href="/cotizar"
                className="hidden sm:inline-flex items-center px-5 py-2 bg-[#0071E3] hover:bg-[#0077ED] text-white text-sm rounded-full transition-[background-color,transform] duration-200 font-medium active:scale-[0.97]"
              >
                Cotizar
              </Link>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 rounded-lg text-[#6B6860] hover:text-[#1C1B18] transition-colors duration-200"
                aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
                aria-expanded={mobileOpen}
                aria-controls="mobile-menu"
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Menú de navegación"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 lg:hidden flex flex-col items-center justify-center bg-[#F7F4EF]"
          >
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute top-5 right-6 p-2 text-[#6B6860] hover:text-[#1C1B18] transition-colors"
              aria-label="Cerrar menú"
            >
              <X className="w-6 h-6" />
            </button>

            <nav className="flex flex-col items-center gap-2 w-full px-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.3 }}
                  className="w-full text-center"
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-4 text-2xl font-semibold text-[#6B6860] hover:text-[#1C1B18] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.06 + 0.05, duration: 0.3 }}
                className="mt-6"
              >
                <Link
                  href="/cotizar"
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex items-center justify-center px-8 py-3 bg-[#0071E3] hover:bg-[#0077ED] text-white font-semibold rounded-full transition-[background-color,transform] duration-200 active:scale-[0.97]"
                >
                  Cotizar proyecto
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

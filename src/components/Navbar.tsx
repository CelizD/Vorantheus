'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { href: '/servicios', label: 'Servicios' },
  { href: '/paquetes', label: 'Paquetes' },
  { href: '/portafolio', label: 'Portafolio' },
  { href: '/contacto', label: 'Contacto' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#050816]/95 backdrop-blur-xl border-b border-white/[0.06]'
            : 'bg-[#050816]/60 backdrop-blur-md border-b border-white/[0.04]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-5 h-5 rounded-sm bg-[#0B84F3] flex items-center justify-center">
                <div className="w-2 h-2 rounded-sm bg-white" />
              </div>
              <span className="text-sm font-bold tracking-widest text-white uppercase">
                Vorantheus
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-sm text-white/60 hover:text-white transition-colors duration-200 rounded-lg"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-3">
              <Link
                href="/cotizar"
                className="hidden sm:inline-flex items-center px-4 py-1.5 border border-white/20 hover:border-white/40 text-white text-sm rounded-full transition-all duration-200 hover:bg-white/5"
              >
                Cotizar
              </Link>

              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 rounded-lg text-white/60 hover:text-white transition-colors duration-200"
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

      {/* Mobile Menu - full screen overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 lg:hidden bg-[#050816]/98 backdrop-blur-2xl flex flex-col items-center justify-center"
          >
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute top-4 right-6 p-2 text-white/60 hover:text-white transition-colors"
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
                    className="block py-4 text-2xl font-semibold text-white/80 hover:text-white transition-colors duration-200"
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
                  className="inline-flex items-center justify-center px-8 py-3 bg-[#0B84F3] hover:bg-[#0070d8] text-white font-semibold rounded-full transition-all duration-200"
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

import Link from 'next/link'

const servicesLinks = [
  { label: 'Páginas web', href: '/servicios' },
  { label: 'Landing pages', href: '/servicios' },
  { label: 'Tiendas en línea', href: '/servicios' },
  { label: 'Sistemas administrativos', href: '/servicios' },
  { label: 'Aplicaciones móviles', href: '/servicios' },
  { label: 'Automatización con IA', href: '/servicios' },
]

const companyLinks = [
  { label: 'Portafolio', href: '/portafolio' },
  { label: 'Paquetes y precios', href: '/paquetes' },
  { label: 'Proceso de trabajo', href: '/#proceso' },
  { label: 'Preguntas frecuentes', href: '/#faq' },
  { label: 'Cotizar proyecto', href: '/cotizar' },
  { label: 'Contacto', href: '/#contacto' },
]

const legalLinks = [
  { label: 'Política de privacidad', href: '/privacidad' },
  { label: 'Términos y condiciones', href: '/terminos' },
]

export default function Footer() {
  return (
    <footer className="bg-[#030711] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main columns */}
        <div className="py-16 grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1 flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-sm bg-[#0B84F3] flex items-center justify-center">
                <div className="w-2 h-2 rounded-sm bg-white" />
              </div>
              <span className="text-sm font-bold tracking-widest text-white uppercase">Vorantheus</span>
            </Link>
            <p className="text-white/35 text-sm leading-relaxed max-w-xs">
              Software profesional para hacer crecer tu negocio. Páginas web, apps, sistemas y automatizaciones con IA.
            </p>
          </div>

          {/* Services */}
          <div>
            <p className="text-white text-xs font-semibold uppercase tracking-widest mb-5">Servicios</p>
            <ul className="flex flex-col gap-3">
              {servicesLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-white/40 hover:text-white text-sm transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="text-white text-xs font-semibold uppercase tracking-widest mb-5">Empresa</p>
            <ul className="flex flex-col gap-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-white/40 hover:text-white text-sm transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-white text-xs font-semibold uppercase tracking-widest mb-5">Contacto</p>
            <ul className="flex flex-col gap-3">
              <li>
                <a href="mailto:hola@vorantheus.com" className="text-white/40 hover:text-white text-sm transition-colors duration-200">
                  hola@vorantheus.com
                </a>
              </li>
              <li>
                <a href="https://wa.me/5219991234567" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white text-sm transition-colors duration-200">
                  +52 1 999 123 4567
                </a>
              </li>
              <li>
                <a href="https://instagram.com/vorantheus" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white text-sm transition-colors duration-200">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://facebook.com/vorantheus" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white text-sm transition-colors duration-200">
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-white/[0.05] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-xs">
            © 2025 Vorantheus. Todos los derechos reservados. Mérida, Yucatán, México.
          </p>
          <div className="flex items-center gap-6">
            {legalLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-white/25 hover:text-white/60 text-xs transition-colors duration-200">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

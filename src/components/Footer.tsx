import Link from 'next/link'
import { Zap, Instagram, Facebook, ExternalLink, Mail, MessageCircle } from 'lucide-react'

const services = [
  { label: 'Páginas web', href: '/servicios#paginas-web' },
  { label: 'Landing pages', href: '/servicios#landing-pages' },
  { label: 'Tiendas en línea', href: '/servicios#tiendas-en-linea' },
  { label: 'Sistemas administrativos', href: '/servicios#sistemas-administrativos' },
  { label: 'Aplicaciones móviles', href: '/servicios#aplicaciones-moviles' },
  { label: 'Automatización con IA', href: '/servicios#automatizacion-ia' },
]

const company = [
  { label: 'Portafolio', href: '/portafolio' },
  { label: 'Paquetes y precios', href: '/paquetes' },
  { label: 'Proceso de trabajo', href: '/#proceso' },
  { label: 'Preguntas frecuentes', href: '/#faq' },
  { label: 'Cotizar proyecto', href: '/cotizar' },
  { label: 'Contacto', href: '/contacto' },
]

const legal = [
  { label: 'Política de privacidad', href: '/privacidad' },
  { label: 'Términos y condiciones', href: '/terminos' },
]

export default function Footer() {
  return (
    <footer className="bg-[#030711] border-t border-white/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1 flex flex-col gap-5">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-electric to-voPurple flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" fill="white" />
              </div>
              <span className="text-xl font-black tracking-wider text-electric">VORANTHEUS</span>
            </Link>
            <p className="text-voGray text-sm leading-relaxed">
              Software profesional para hacer crecer tu negocio. Creamos páginas web, aplicaciones y
              sistemas a medida con tecnología de vanguardia.
            </p>

            {/* Social links */}
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com/vorantheus"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg glass-card border border-white/10 flex items-center justify-center text-voGray hover:text-white hover:border-electric/30 transition-all duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com/vorantheus"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg glass-card border border-white/10 flex items-center justify-center text-voGray hover:text-white hover:border-electric/30 transition-all duration-200"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://tiktok.com/@vorantheus"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg glass-card border border-white/10 flex items-center justify-center text-voGray hover:text-white hover:border-electric/30 transition-all duration-200"
                aria-label="TikTok"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Contact quick links */}
            <div className="flex flex-col gap-2">
              <a
                href="mailto:hola@vorantheus.com"
                className="flex items-center gap-2 text-voGray hover:text-white text-sm transition-colors group"
              >
                <Mail className="w-4 h-4 text-electric" />
                hola@vorantheus.com
              </a>
              <a
                href={`https://wa.me/5219991234567`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-voGray hover:text-white text-sm transition-colors group"
              >
                <MessageCircle className="w-4 h-4 text-green-400" />
                +52 1 999 123 4567
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-sm mb-5 uppercase tracking-wider">Servicios</h3>
            <ul className="flex flex-col gap-2.5">
              {services.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-voGray hover:text-white text-sm transition-colors hover:translate-x-1 inline-block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-bold text-sm mb-5 uppercase tracking-wider">Empresa</h3>
            <ul className="flex flex-col gap-2.5">
              {company.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-voGray hover:text-white text-sm transition-colors hover:translate-x-1 inline-block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h3 className="text-white font-bold text-sm mb-5 uppercase tracking-wider">
              ¿Listo para comenzar?
            </h3>
            <p className="text-voGray text-sm leading-relaxed mb-5">
              Cotiza tu proyecto gratis. Sin compromisos. Respondemos en menos de 24 horas.
            </p>
            <Link
              href="/cotizar"
              className="inline-flex items-center gap-2 px-5 py-3 bg-electric hover:bg-voBlue text-white font-semibold text-sm rounded-xl shadow-electric hover:shadow-electric-lg transition-all duration-300 hover:scale-105"
            >
              <Zap className="w-4 h-4" />
              Cotizar ahora
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-voGray text-xs">
            © 2025 Vorantheus. Todos los derechos reservados. Mérida, Yucatán, México.
          </p>
          <div className="flex items-center gap-4">
            {legal.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-voGray hover:text-white text-xs transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

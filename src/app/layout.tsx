import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import WhatsAppButton from '@/components/WhatsAppButton'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Vorantheus | Software profesional para hacer crecer tu negocio',
  description:
    'Creamos páginas web, aplicaciones móviles, sistemas administrativos y soluciones con inteligencia artificial para hacer crecer tu negocio. Desarrollo de software profesional en México.',
  keywords: [
    'desarrollo web',
    'software a medida',
    'páginas web profesionales',
    'aplicaciones móviles',
    'sistemas administrativos',
    'automatización IA',
    'e-commerce',
    'México',
    'Yucatán',
    'Mérida',
  ],
  authors: [{ name: 'Vorantheus' }],
  creator: 'Vorantheus',
  publisher: 'Vorantheus',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    url: '/',
    title: 'Vorantheus | Software profesional para hacer crecer tu negocio',
    description:
      'Creamos páginas web, aplicaciones móviles, sistemas administrativos y soluciones con IA para hacer crecer tu negocio.',
    siteName: 'Vorantheus',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vorantheus | Software profesional',
    description: 'Software profesional para hacer crecer tu negocio.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={inter.variable}>
      <body className={`${inter.className} antialiased`}>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  )
}

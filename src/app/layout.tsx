import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import WhatsAppButton from '@/components/WhatsAppButton'
import { siteConfig } from '@/lib/site'

const gaId = process.env.NEXT_PUBLIC_GA_ID

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
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: '/',
  },
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
    <html lang="es">
      <body className="antialiased">
        {gaId ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}');
              `}
            </Script>
          </>
        ) : null}
        {children}
        <WhatsAppButton />
      </body>
    </html>
  )
}

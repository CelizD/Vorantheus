import type { NextConfig } from 'next'

// Content Security Policy.
// Scoped to the third parties this site actually loads:
//   - Google Analytics / Tag Manager (analytics)
//   - Calendly (popup scheduling widget — script, css, iframe)
// 'unsafe-inline' is required for script-src because Next.js injects inline
// hydration/bootstrap scripts and the GA consent + gtag config snippets run
// inline. Nonces are not viable here since most pages are statically
// prerendered. 'unsafe-inline' on style-src covers Tailwind/inline styles and
// Framer Motion's runtime style injection.
const csp = [
  "default-src 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "form-action 'self'",
  "frame-ancestors 'self'",
  "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://assets.calendly.com",
  "style-src 'self' 'unsafe-inline' https://assets.calendly.com",
  "img-src 'self' data: blob: https://*.calendly.com https://www.googletagmanager.com https://www.google-analytics.com",
  "font-src 'self' data: https://assets.calendly.com",
  "connect-src 'self' https://www.google-analytics.com https://*.google-analytics.com https://www.googletagmanager.com https://calendly.com https://*.calendly.com",
  "frame-src https://calendly.com https://*.calendly.com",
  'upgrade-insecure-requests',
].join('; ')

const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: csp,
  },
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()',
  },
]

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ]
  },
}

export default nextConfig

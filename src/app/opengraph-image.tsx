import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: '#000000',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '80px 80px',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          position: 'relative',
        }}
      >
        {/* Blue radial glow */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              'radial-gradient(ellipse 55% 65% at 15% 50%, rgba(0,113,227,0.22) 0%, transparent 60%)',
          }}
        />
        {/* Purple accent glow */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              'radial-gradient(ellipse 40% 50% at 85% 60%, rgba(124,58,237,0.10) 0%, transparent 65%)',
          }}
        />

        {/* Logo */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 14,
            marginBottom: 56,
            position: 'relative',
            zIndex: 1,
          }}
        >
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: 8,
              background: '#0071E3',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                width: 16,
                height: 16,
                borderRadius: 4,
                background: 'white',
              }}
            />
          </div>
          <span
            style={{
              color: 'white',
              fontSize: 18,
              fontWeight: 700,
              letterSpacing: 10,
              textTransform: 'uppercase',
            }}
          >
            VORANTHEUS
          </span>
        </div>

        {/* Headline */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <span
            style={{
              color: 'white',
              fontSize: 72,
              fontWeight: 900,
              lineHeight: 1.04,
              letterSpacing: -2,
              maxWidth: 820,
            }}
          >
            Software que hace crecer tu{' '}
            <span style={{ color: '#0071E3' }}>negocio.</span>
          </span>
        </div>

        {/* Subtitle */}
        <div
          style={{
            color: 'rgba(255,255,255,0.52)',
            fontSize: 22,
            marginTop: 28,
            maxWidth: 680,
            lineHeight: 1.5,
            position: 'relative',
            zIndex: 1,
          }}
        >
          Páginas web, apps, sistemas y automatizaciones con IA para negocios en México.
        </div>

        {/* Stats bar */}
        <div
          style={{
            display: 'flex',
            gap: 0,
            marginTop: 56,
            paddingTop: 36,
            borderTop: '1px solid rgba(255,255,255,0.1)',
            position: 'relative',
            zIndex: 1,
            width: '100%',
          }}
        >
          {[
            ['50+', 'Proyectos'],
            ['3+', 'Años'],
            ['98%', 'Satisfacción'],
            ['24/7', 'Soporte'],
          ].map(([value, label], i) => (
            <div
              key={label}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 0,
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: 4, paddingRight: 48 }}>
                <span style={{ color: 'white', fontSize: 38, fontWeight: 900 }}>{value}</span>
                <span style={{ color: 'rgba(255,255,255,0.38)', fontSize: 14 }}>{label}</span>
              </div>
              {i < 3 && (
                <div
                  style={{
                    width: 1,
                    height: 44,
                    background: 'rgba(255,255,255,0.1)',
                    marginRight: 48,
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  )
}

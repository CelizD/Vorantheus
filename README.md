# Vorantheus

Sitio web de Vorantheus — agencia de software profesional. Construido con Next.js 16 App Router, TypeScript, Tailwind CSS y Framer Motion.

## Prerequisitos

- Node.js 20+
- npm 10+

## Instalación

```bash
npm install
```

Copia las variables de entorno y llena los valores:

```bash
cp .env.local.example .env.local
```

## Variables de entorno

| Variable | Requerida | Descripción |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | No | URL pública del sitio (default: `http://localhost:3000`) |
| `NEXT_PUBLIC_WHATSAPP` | **Sí** | Número de WhatsApp en formato internacional sin `+` (ej. `5219991234567`) |
| `NEXT_PUBLIC_WHATSAPP_DISPLAY` | No | Texto a mostrar para el número (ej. `+52 1 999 123 4567`) |
| `NEXT_PUBLIC_SUPABASE_URL` | **Sí** | URL del proyecto Supabase (ej. `https://xxx.supabase.co`) |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | **Sí** | Clave pública `anon` de Supabase |
| `SUPABASE_SERVICE_ROLE_KEY` | **Sí** | Clave `service_role` de Supabase — solo servidor, nunca en el cliente |
| `RESEND_API_KEY` | No | API key de Resend para notificaciones de cotizaciones por correo |
| `QUOTE_NOTIFY_EMAIL` | No | Correo que recibe las cotizaciones (default: `ventas@vorantheus.com`) |
| `QUOTE_FROM_EMAIL` | No | Remitente del correo de notificación (default: `Vorantheus <onboarding@resend.dev>`) |
| `NEXT_PUBLIC_CONTACT_EMAIL` | No | Correo general (default: `hola@vorantheus.com`) |
| `NEXT_PUBLIC_SALES_EMAIL` | No | Correo de ventas (default: `ventas@vorantheus.com`) |
| `NEXT_PUBLIC_SUPPORT_EMAIL` | No | Correo de soporte (default: `soporte@vorantheus.com`) |
| `NEXT_PUBLIC_BILLING_EMAIL` | No | Correo de facturación (default: `facturacion@vorantheus.com`) |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | No | ID de medición de Google Analytics 4 |
| `NEXT_PUBLIC_INSTAGRAM_URL` | No | URL del perfil de Instagram |
| `NEXT_PUBLIC_FACEBOOK_URL` | No | URL del perfil de Facebook |

## Comandos

```bash
# Servidor de desarrollo
npm run dev

# Build de producción
npm run build

# Servidor de producción (requiere build previo)
npm start

# Linter
npm run lint

# TypeScript type-check
npm run type-check
```

## Arquitectura

```
src/
  app/          # Rutas Next.js App Router (page.tsx, layout.tsx, error.tsx, not-found.tsx)
  components/   # Componentes reutilizables (Server y Client Components)
  data/         # Datos estáticos (servicios, tecnologías, FAQs, proceso, testimonios)
  lib/          # Utilidades y configuración (site.ts, schema.ts, quote-schema.ts)
```

El formulario de cotizaciones (`/cotizar`) usa el endpoint `/api/quotes` que:
1. Aplica rate limiting en memoria (5 req/min por IP).
2. Valida el cuerpo con Zod.
3. Inserta en la tabla `quotes` de Supabase usando la service role key.
4. Envía una notificación por correo vía Resend.

La tabla `quotes` en Supabase se crea con:

```sql
create table if not exists public.quotes (
  id            uuid        primary key default gen_random_uuid(),
  nombre        text        not null,
  correo        text        not null,
  whatsapp      text        not null,
  negocio       text        not null,
  tipo_proyecto text        not null,
  presupuesto   text        not null,
  descripcion   text        not null,
  created_at    timestamptz not null default now()
);

alter table public.quotes enable row level security;
```

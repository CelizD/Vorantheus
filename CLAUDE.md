# Vorantheus — Contexto para Claude Code

Sitio web de agencia de software (Next.js 16, TypeScript). Mérida, Yucatán, México.

## Comandos

```bash
npm run dev          # Dev server con Turbopack (http://localhost:3000)
npm run build        # Build de producción
npm run lint         # ESLint
npm run type-check   # tsc --noEmit
npm run check        # lint + type-check + build (equivalente a CI)
```

**Rama activa:** `claude/magical-cray-7gak0o` — Vercel auto-despliega al hacer push.

## Stack

| Capa | Tecnología |
|---|---|
| Framework | Next.js 16.2 · App Router · TypeScript 5 strict |
| UI | Tailwind CSS 3.4 · Framer Motion 11 · Lucide React |
| Fuente | Geist Sans + Geist Mono (`next/font`, auto-hospedado) |
| Forms | react-hook-form 7.53 + Zod 3.23 |
| BD | Supabase JS 2.45 (PostgreSQL) |
| Email | Resend 6.12 |

## Arquitectura

```
src/
  app/          # Rutas App Router, layouts, api/
    api/quotes/ # POST → valida Zod → Supabase insert → Resend email
  components/   # Secciones de página (Server/Client según necesidad)
  data/         # Contenido estático: servicios, portafolio, FAQs, tecnologías, paquetes, etc.
  lib/
    site.ts          # siteConfig + getWhatsAppUrl() → string | null
    schema.ts        # JSON-LD (LocalBusiness, FAQPage, Breadcrumb)
    quote-schema.ts  # Zod schemas de cotización
    utils.ts         # cn() para clases condicionales
```

Path alias: `@/*` → `./src/*`

### API `/api/quotes`
Rate limit 5 req/min por IP (in-memory). Valida con Zod, inserta en tabla `quotes` de Supabase con `SUPABASE_SERVICE_ROLE_KEY`, envía notificación por email vía Resend.

## Paleta de colores

> No modificar sin aprobación explícita del usuario.

| Rol | Valor |
|---|---|
| Body / beige | `#F7F4EF` |
| Dark / ink | `#1C1B18` |
| Blue CTA | `#0071E3` / hover `#0077ED` |
| Bordes | `#E6E0D6` |
| Texto muted | `#6B6860` / `#9B9890` |

- **Máximo 1 acento**. Sin lila (`#7C3AED`) en la UI pública. Sin `#000000` puro.

## Variables de entorno

| Variable | Descripción |
|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | URL del proyecto Supabase |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Clave anon (segura para el cliente) |
| `SUPABASE_SERVICE_ROLE_KEY` | **Server-only** — jamás usar prefijo `NEXT_PUBLIC_` |
| `RESEND_API_KEY` | Envío de correos |
| `QUOTE_NOTIFY_EMAIL` | Recibe cotizaciones (default: `ventas@vorantheus.com`) |
| `QUOTE_FROM_EMAIL` | Remitente (default: `Vorantheus <onboarding@resend.dev>`) |
| `NEXT_PUBLIC_WHATSAPP` | Número sin `+` (ej: `5219991234567`) |
| `NEXT_PUBLIC_GA_ID` | Measurement ID de Google Analytics 4 |
| `NEXT_PUBLIC_CALENDLY_URL` | URL del widget de Calendly |
| `NEXT_PUBLIC_SITE_URL` | URL pública (default: `http://localhost:3000`) |

Ver `.env.local.example` para la lista completa con comentarios.

## Reglas importantes

- **NO** `npm audit fix --force` — rompe Next.js.
- **NO** modificar `next.config.ts` CSP sin revisar impacto en GA4, Calendly y fuentes.
- `getWhatsAppUrl()` retorna `string | null`. Siempre verificar con `&&` antes de renderizar.
- Commits y push siempre a `claude/magical-cray-7gak0o`.

## Supabase — tabla `quotes`

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
-- Sin policies: solo service_role puede operar
```

# Repository Guidelines

## Project Structure & Module Organization

This is a Next.js 16 App Router project for the Vorantheus website. Route files live in `src/app`, including pages, layouts, error boundaries, dynamic routes such as `src/app/blog/[slug]`, and API handlers such as `src/app/api/quotes/route.ts`. Shared UI belongs in `src/components`. Static business content is stored in `src/data` for services, packages, portfolio, FAQs, testimonials, technologies, and blog posts. Utilities, schemas, tracking, estimator logic, and site configuration live in `src/lib`. Global styles are in `src/app/globals.css`; Tailwind configuration is in `tailwind.config.ts`.

## Build, Test, and Development Commands

- `npm install`: install dependencies from `package-lock.json`.
- `npm run dev`: start the local Next.js dev server.
- `npm run lint`: run ESLint across the repository.
- `npm run type-check`: run TypeScript with `tsc --noEmit`.
- `npm run build`: create a production build.
- `npm run check`: run lint, type-check, and build together.
- `npm start`: serve the production build after `npm run build`.

## Coding Style & Naming Conventions

Use TypeScript and React functional components. Follow the existing style: 2-space indentation, single quotes, no semicolons, and concise prop types or interfaces. Name components in PascalCase (`QuoteForm.tsx`, `WhatsAppButton.tsx`) and data/utilities in camelCase or descriptive kebab-free filenames (`site.ts`, `quote-schema.ts`). Prefer existing components, Tailwind utilities, Framer Motion, and lucide-react icons before introducing new abstractions or dependencies.

## Testing Guidelines

There is no dedicated unit test runner configured yet. Treat `npm run check` as the required quality gate before handing off changes. For UI work, verify key routes locally in the browser, especially `/`, `/blog`, `/servicios`, `/paquetes`, `/cotizar`, and affected dynamic routes. If tests are added later, colocate them near the relevant module and use `*.test.ts` or `*.test.tsx`.

## Commit & Pull Request Guidelines

Recent history uses short imperative commits, sometimes with conventional prefixes such as `feat:` and `fix:`. Keep messages focused, for example `feat: add service landing pages` or `fix: update quote form validation`. Pull requests should include a clear summary, screenshots for visual changes, affected routes, environment changes, and confirmation that `npm run check` passed.

## Security & Configuration Tips

Copy `.env.local.example` to `.env.local` for local development. Never commit secrets. `SUPABASE_SERVICE_ROLE_KEY` must remain server-only; do not expose it in client components. Optional services include Resend, Calendly, WhatsApp, and Google Analytics IDs.

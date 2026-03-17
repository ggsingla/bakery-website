# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Monorepo Structure

pnpm workspaces monorepo with two apps:

- `apps/web/` — Next.js 16 website (customer-facing)
- `apps/studio/` — Sanity Studio v5 (CMS admin)

## Commands

```bash
# Root-level
pnpm dev:web      # Start Next.js dev server
pnpm dev:studio   # Start Sanity Studio dev server
pnpm dev          # Start both
pnpm build:web    # Build Next.js app
pnpm build:studio # Build Sanity Studio
pnpm format       # Prettier (write)
pnpm format:check # Prettier (check only)

# Seed script (one-time)
SANITY_API_TOKEN=<token> node scripts/seed-sanity.mjs
```

## Tech Stack

- **Next.js 16** with App Router, **React 19**, **TypeScript** (strict mode)
- **Sanity v5** CMS with GROQ queries via `next-sanity`
- **Tailwind CSS 4** with `@theme` / `@import` syntax in `globals.css` (oklch color space)
- **shadcn/ui** (New York style) + **Radix UI** primitives + **CVA** for component variants
- **React Hook Form** + **Zod** for form validation
- **AOS** for scroll animations, **next-themes** for dark mode
- Path alias: `@/*` maps to `apps/web/` root

## Architecture

**CMS-driven e-commerce site** — content managed in Sanity, fetched server-side via GROQ queries.

### Data flow

Pages are server components that fetch from Sanity at build/request time (ISR with `revalidate`). Client components receive data as props for interactivity (filtering, dialogs).

**Orders** are submitted via HTML forms to **FormSubmit.co** (email-based), redirecting to `/order-placed` on success.

### Sanity schemas (apps/studio/schemas/)

**Document types:** `product`, `category`
**Singletons:** `companyInfo`, `homePage`, `aboutSection`

### Key directories (apps/web/)

- `app/` — Pages and route-scoped components (`app/_components/`)
- `app/products/[slug]/` — Product detail pages (slug-based URLs)
- `components/` — Shared components (header, footer, product-card, buy-now-dialog)
- `components/ui/` — shadcn/ui primitives
- `lib/sanity/` — Sanity client (`client.ts`), image helper (`image.ts`), GROQ queries (`queries.ts`), types (`types.ts`)
- `lib/types.ts` — Re-exports Sanity types
- `lib/utils.ts` — `cn()` utility
- `hooks/` — `use-media-query`, `use-mobile`, `use-toast`

### Responsive pattern

`BuyNowDialog` renders as a `Dialog` on desktop and `Drawer` on mobile, switching via `useMediaQuery('(min-width: 768px)')`.

### Styling conventions

- Theme colors defined as CSS variables in `app/globals.css` using oklch
- `cn()` utility from `lib/utils.ts` for merging Tailwind classes (clsx + tailwind-merge)
- Fonts: Inter (sans) and Fraunces (serif) from Google Fonts

### Image handling

Images hosted on Sanity CDN. Use `urlFor(image).width(w).height(h).url()` from `lib/sanity/image.ts`. `next/image` with `unoptimized={true}` (Sanity CDN handles optimization, avoids Vercel costs).

## Environment Variables (apps/web/.env.local)

```
NEXT_PUBLIC_SANITY_PROJECT_ID=qij3vxam
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_URL=http://localhost:3000
```

## Deployment

Deployed on **Vercel free tier** — image optimization disabled (`unoptimized: true`), Sanity CDN handles image optimization instead.

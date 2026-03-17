# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev          # Start dev server (includes --no-deprecation flag)
pnpm build        # Production build (ESLint & TS errors ignored in config)
pnpm lint         # ESLint
pnpm format       # Prettier (write)
pnpm format:check # Prettier (check only)
```

## Tech Stack

- **Next.js 16** with App Router, **React 19**, **TypeScript** (strict mode)
- **Tailwind CSS 4** with `@theme` / `@import` syntax in `globals.css` (oklch color space)
- **shadcn/ui** (New York style) + **Radix UI** primitives + **CVA** for component variants
- **React Hook Form** + **Zod** for form validation
- **AOS** for scroll animations, **next-themes** for dark mode
- Path alias: `@/*` maps to project root

## Architecture

**Static e-commerce site** — no database or API. Product data lives in `lib/products.ts` as a static array with helper functions (`getProductById`, `getProductsByCategory`, `getFeaturedProducts`, `getRecommendedProducts`).

**Orders** are submitted via HTML forms to **FormSubmit.co** (email-based), redirecting to `/order-placed` on success.

### Key directories

- `app/` — Pages and route-scoped components (`app/_components/`)
- `components/` — Shared components (header, footer, product-card, buy-now-dialog)
- `components/ui/` — shadcn/ui primitives
- `lib/` — Types (`types.ts`), product data (`products.ts`), utilities (`utils.ts`)
- `hooks/` — `use-media-query`, `use-mobile`, `use-toast`
- `constants/` — Company contact info

### Responsive pattern

`BuyNowDialog` renders as a `Dialog` on desktop and `Drawer` on mobile, switching via `useMediaQuery('(min-width: 768px)')`. This pattern is used for responsive modal/sheet behavior.

### Styling conventions

- Theme colors defined as CSS variables in `app/globals.css` using oklch
- `cn()` utility from `lib/utils.ts` for merging Tailwind classes (clsx + tailwind-merge)
- Fonts: Inter (sans) and Fraunces (serif) from Google Fonts

## Deployment

Deployed on **Vercel free tier** — image optimization is disabled (`unoptimized: true` in `next.config.mjs`).

# Project Overview

## Identity
- **Name**: arizona-website
- **Type**: TanStack Start (React 19) web application
- **Domain**: Arizona Window Cleaning & Pressure Washing
- **Deployment**: Netlify (primary) + Cloudflare Workers (edge SSR)

## Tech Stack
| Layer | Technology |
|-------|-----------|
| Framework | TanStack Start (React 19) |
| Routing | TanStack Router (file-based, auto-generated routeTree) |
| Styling | Tailwind CSS v4 + `tw-animate-css` |
| UI Library | Radix UI primitives (shadcn-style, 40+ components) |
| Animations | GSAP 3.15 + Lenis 1.3 (smooth scroll) |
| Forms | React Hook Form 7.71 + Zod 3.24 |
| Charts | Recharts 2.15 |
| Build | Vite 7 + @lovable.dev/vite-tanstack-config |
| Server | Cloudflare Workers (via Wrangler) |
| Package Mgr | npm (lockfile: package-lock.json) |

## Routes (file-based)
| Route | Component | Status |
|-------|-----------|--------|
| `/` | Home (Hero, Navbar, Services, Pricing, Testimonials, WhyChooseUs, Warranty, Contact, Footer) | Active |
| `/about` | About.tsx | Active |
| `/services` | Services.tsx | Active |
| `/booking` | Booking.tsx | Active |
| `/gallery` | Gallery.tsx | Active |

## Components
- **Page sections**: Hero, About, Services, Booking, Gallery, Pricing, Testimonials, Warranty, WhyChooseUs, Contact
- **Layout**: Navbar, Footer, Loader, FloatingWhatsApp, AmbientParticles
- **UI Primitives** (40+): accordion, alert-dialog, avatar, badge, button, calendar, card, carousel, chart, checkbox, collapsible, command, context-menu, dialog, drawer, dropdown-menu, form, hover-card, input, input-otp, label, menubar, navigation-menu, pagination, popover, progress, radio-group, resizable, scroll-area, select, separator, sheet, sidebar, skeleton, slider, sonner, switch, table, tabs, textarea, toggle, toggle-group, tooltip

## Lib
- `business.ts` — Business logic / data
- `error-capture.ts` — Error boundary and logging
- `error-page.ts` — Error page component
- `i18n.tsx` — Internationalization setup
- `smooth-scroll.tsx` — Lenis smooth scroll integration
- `theme.tsx` — Theme context (light/dark)
- `use-scroll-reveal.ts` — Scroll reveal animation hook
- `utils.ts` — Shared utilities (cn, etc.)

## Config Files
- `netlify.toml` — Build: `npm run build`, publish: `dist/client`, Node 22
- `wrangler.jsonc` — Worker name: arizona-website, compat_date: 2025-09-24, nodejs_compat
- `vite.config.ts` — Lovable config + Netlify plugin, server entry override to `src/server.ts`
- `tsconfig.json` — Strict mode, ES2022, Bundler module resolution, `@/*` path alias
- `eslint.config.js` — ESLint 9 flat config with Prettier plugin

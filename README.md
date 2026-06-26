# Arizona Window Cleaning & Pressure Washing

TanStack Start (React 19) website with SSR via Cloudflare Workers.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | TanStack Start (React 19) |
| Routing | TanStack Router (file-based) |
| Styling | Tailwind CSS v4 |
| UI | Radix UI primitives |
| Animations | framer-motion + Lenis |
| Build | Vite 7 + @cloudflare/vite-plugin |
| Server | Cloudflare Workers |

## Development

```bash
npm run dev     # Start dev server
npm run build   # Production build
npm run lint    # Code quality
```

## Deployment

SSR via Cloudflare Workers (`wrangler versions upload + deploy`).

## Routes

- `/` — Home
- `/about` — About
- `/services` — Services
- `/booking` — Booking
- `/gallery` — Gallery

# Arizona Window Cleaning & Pressure Washing

TanStack Start (React 19) website with SSR via Cloudflare Workers, deployed on Netlify.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | TanStack Start (React 19) |
| Routing | TanStack Router (file-based) |
| Styling | Tailwind CSS v4 |
| UI | Radix UI primitives |
| Animations | GSAP + Lenis |
| Build | Vite 7 |
| Server | Cloudflare Workers |
| Hosting | Netlify |

## Development

```bash
npm run dev     # Start dev server
npm run build   # Production build
npm run lint    # Code quality
```

## Deployment

Push to `main` triggers auto-deploy to Netlify. Cloudflare Workers handle SSR.

## Routes

- `/` — Home
- `/about` — About
- `/services` — Services
- `/booking` — Booking
- `/gallery` — Gallery

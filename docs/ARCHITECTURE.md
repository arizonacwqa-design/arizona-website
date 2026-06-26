# Architecture Overview

## Application Architecture

```
Client Browser
      |
      v
Netlify Edge (CDN + SSR)
      |
      v
TanStack Start (React 19)
  ├── TanStack Router (file-based routing)
  ├── TanStack Query (data fetching)
  ├── Tailwind CSS v4 (styling)
  ├── GSAP + Lenis (animations)
  └── Radix UI (component primitives)
      |
      v
Cloudflare Workers (Server Runtime)
  ├── SSR rendering
  ├── API routes
  └── Edge caching
```

## Directory Layout
```
arizona-website/
├── .memory/          # AI agent memory system
├── rules/            # Engineering rules
├── knowledge/        # Project knowledge
├── docs/             # System documentation
├── scripts/          # Automation scripts
├── public/           # Static assets
├── src/
│   ├── assets/       # Images, fonts, etc.
│   ├── components/   # React components
│   │   └── ui/       # Radix UI primitives
│   ├── hooks/        # Custom React hooks
│   ├── lib/          # Utility functions
│   ├── routes/       # File-based route pages
│   ├── router.tsx    # Route configuration
│   ├── server.ts     # SSR server entry
│   ├── start.ts      # App entry point
│   └── styles.css    # Global styles
├── dist/             # Build output (gitignored)
├── netlify.toml      # Netlify deployment config
├── wrangler.jsonc    # Cloudflare Workers config
├── vite.config.ts    # Build configuration
└── tsconfig.json     # TypeScript configuration
```

## Data Flow
1. User requests page → Netlify CDN
2. CDN serves static assets or proxies to Cloudflare Worker
3. Worker renders React app via TanStack Start SSR
4. Client hydrates and takes over for SPA navigation
5. TanStack Query handles API data fetching and caching

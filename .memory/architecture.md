# Architecture

## System Architecture
```
Client Browser
      |
      v
Netlify Edge (CDN + Static Assets)
      |
      v
TanStack Start (SSR + SPA)
  ├── TanStack Router (file-based routing)
  ├── TanStack Query (data fetching/caching)
  ├── Tailwind CSS v4 (utility-first styling)
  ├── GSAP + Lenis (animations)
  └── Radix UI (accessible primitives)
      |
      v
Cloudflare Workers (Server Runtime)
  ├── SSR rendering (src/server.ts)
  ├── API routes (future)
  └── Edge caching
```

## Directory Layout
```
arizona-website/
├── .memory/              # Persistent AI memory system
│   ├── project.md
│   ├── architecture.md
│   ├── workflows.md
│   ├── decisions.md
│   ├── lessons.md
│   ├── known-issues.md
│   ├── todo.md
│   └── changelog.md
├── rules/                # Domain-specific AI behavior rules (6 files)
├── knowledge/            # Searchable workflow & pattern knowledge base (5 sub-dirs)
├── docs/                 # Human-readable system docs
├── scripts/              # Automation scripts
├── public/               # Static assets
├── src/
│   ├── assets/           # Images, fonts
│   ├── components/       # React components
│   │   └── ui/           # Radix UI primitives (40+)
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utilities & business logic
│   ├── routes/           # File-based route pages
│   ├── router.tsx        # Route tree config
│   ├── server.ts         # SSR error wrapper entry
│   ├── start.ts          # App bootstrap
│   └── styles.css        # Global styles
├── dist/                 # Build output (gitignored)
├── netlify.toml          # Netlify config
├── wrangler.jsonc        # Cloudflare Workers config
├── vite.config.ts        # Build config
└── tsconfig.json         # TypeScript config
```

## Data Flow
1. **Request** → Netlify CDN (edge-cached static assets)
2. **SSR** → Cloudflare Worker renders React via TanStack Start
3. **Hydration** → Client JS hydrates, takes over as SPA
4. **Navigation** → TanStack Router client-side transitions
5. **Data** → TanStack Query fetches/caches API data
6. **Animations** → GSAP + Lenis on scroll/intersection

## Key Design Decisions
- **File-based routing**: Auto-generated `routeTree.gen.ts` from `src/routes/`
- **SSR via Cloudflare Workers**: Edge-rendered for performance
- **Netlify for static delivery**: CDN + deploy previews
- **Radix UI primitives**: Accessible, unstyled, composable
- **GSAP + Lenis**: Complex scroll-triggered animations

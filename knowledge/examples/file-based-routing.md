# Example: TanStack File-Based Routing

## Context
Routes are defined as files in `src/routes/`. TanStack Router auto-generates `routeTree.gen.ts` from the file structure.

## Structure
```
src/routes/
├── __root.tsx      # Root layout (wraps all routes)
├── index.tsx       # / — Home page
├── about.tsx       # /about
├── services.tsx    # /services
├── booking.tsx     # /booking
└── gallery.tsx     # /gallery
```

## How It Works
1. Each `.tsx` file in `src/routes/` becomes a route
2. `index.tsx` maps to `/`
3. `about.tsx` maps to `/about`
4. Nested routes use folders: `routes/services/cleaning.tsx` → `/services/cleaning`
5. Dynamic params use brackets: `routes/blog/[slug].tsx` → `/blog/:slug`
6. `__root.tsx` wraps all routes (navbar, footer, theme provider)
7. `routeTree.gen.ts` is auto-generated — do not edit manually

## Key Points
- No manual route config needed — TanStack Router handles it
- Type-safe links: `Link` component catches broken routes at compile time
- Lazy loading is automatic per route
- Search params and loader data are route-scoped

## Source
`src/routes/` directory and `src/routeTree.gen.ts`

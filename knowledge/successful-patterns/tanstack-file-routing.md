# Successful Pattern: TanStack File-Based Routing

## Context
The arizona-website needed a type-safe, SSR-compatible routing solution. Routes needed to be easy to add, maintain, and lazy-load.

## Solution
Use TanStack Router with file-based routing. Routes are defined as `.tsx` files in `src/routes/`. The router auto-generates `routeTree.gen.ts` from the file structure.

## Key Decisions
1. **File-based over config-based**: Files are easier to organize — one route = one file
2. **No manual route tree**: Auto-generation from `src/routes/` ensures tree is always in sync
3. **`__root.tsx` for layout**: Wraps all routes with navbar, footer, theme provider, and error boundary
4. **Type-safe links**: `Link` component catches broken routes and invalid params at compile time

## Outcomes
- 5 routes defined in ~50 total lines of code
- Zero manual route configuration
- Automatic lazy loading per route
- Type-safe navigation — cannot link to non-existent routes
- Easy to add new routes: just create a file

## Code
```typescript
// src/router.tsx
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export const router = createRouter({ routeTree });
```

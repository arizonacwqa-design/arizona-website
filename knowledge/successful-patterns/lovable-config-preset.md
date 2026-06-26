# Successful Pattern: Lovable Vite Config Preset

## Context
The project uses Vite 7 with TanStack Start, React, Tailwind CSS, TypeScript, Cloudflare Workers, and multiple plugins. Manually configuring all plugins and their interactions would be error-prone.

## Solution
Use `@lovable.dev/vite-tanstack-config` as the single `defineConfig` wrapper. It pre-configures:
- tanstackStart (SSR + SPA)
- viteReact (HMR, Fast Refresh)
- tailwindcss v4
- tsConfigPaths (`@/` alias)
- cloudflare (build-only worker output)
- componentTagger (dev-only component inspection)
- VITE_* env injection
- React/TanStack dedupe
- Error logger plugins
- Sandbox detection (port/host/strictPort)

## Key Decisions
1. **Don't fight the preset**: The preset handles 90% of config — only add extras for platform-specific needs
2. **Extras via `defineConfig({ vite: { plugins: [...] } })`**: Additional plugins go in the `vite` key
3. **Server entry override**: `tanstackStart.server.entry = "server"` redirects SSR to `src/server.ts`

## Outcomes
- `vite.config.ts` is only 15 lines
- No plugin conflicts or duplicate registrations
- Build produces both `dist/client` (static) and `dist/server` (worker) correctly
- Dev mode has full HMR, component inspection, and sandbox isolation

## Code
```typescript
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import netlify from "@netlify/vite-plugin-tanstack-start";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  vite: {
    plugins: [netlify()],
  },
});
```

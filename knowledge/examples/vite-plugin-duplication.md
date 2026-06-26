# Example: Vite Config Preset Plugin Duplication Prevention

## Context
The `vite.config.ts` uses `@lovable.dev/vite-tanstack-config` which already includes: tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare plugin, componentTagger, VITE_* env injection, @ path alias, and React/TanStack dedupe.

## The Pattern
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

## Key Points
1. Do NOT manually add plugins that the config preset already includes
2. The `defineConfig` wrapper accepts a `vite` key for extra plugins
3. Only the Netlify plugin is added because it's NOT in the preset
4. Server entry is overridden via `tanstackStart.server.entry`, not via plugins

## What Happens If You Break This
Adding viteReact or tanstackStart plugins manually causes:
- Duplicate plugin errors during build
- Broken HMR in development
- SSR rendering failures

## Source
`vite.config.ts:1-9` — comment at top explicitly warns against this.

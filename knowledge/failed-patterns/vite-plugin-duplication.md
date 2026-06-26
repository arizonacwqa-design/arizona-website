# Failed Pattern: Vite Plugin Duplication

## What Was Attempted
Adding `viteReact` and `@tanstack/start` plugins manually to `vite.config.ts` to customize the build.

## What Went Wrong
Build failed with duplicate plugin errors. HMR stopped working. SSR rendering produced blank pages.

## Root Cause
`@lovable.dev/vite-tanstack-config` already includes: tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only), componentTagger (dev-only), env injection, path alias, React/TanStack dedupe, error loggers, and sandbox detection. Adding any of these again causes duplicate registration.

## Detection
Build fails with errors like:
```
Error: Plugin "vite:react-refresh" already registered
```

## Prevention
- Read the comment at the top of `vite.config.ts` before editing
- The comment explicitly lists what's already included
- Only add plugins that are NOT in the preset (e.g., `@netlify/vite-plugin-tanstack-start`)
- Use `defineConfig({ vite: { plugins: [...] } })` for extras

## Status
Resolved. Config now only adds the Netlify plugin.

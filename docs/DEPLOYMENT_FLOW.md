# Deployment Flow

## Target Platforms

### Netlify (Primary)
- **Build command**: `npm run build`
- **Publish directory**: `dist/client`
- **Node version**: 22
- **Environment variables**: Configured via Netlify UI
- **Auto-deploys**: Triggered on push to `main` via Git integration

### Cloudflare Workers (Server Runtime)
- **Config file**: `wrangler.jsonc`
- **Entry point**: `src/server.ts`
- **Secrets**: Managed via `wrangler secret put`
- **Compatibility flags**: `nodejs_compat`

## Build Pipeline
```
npm run build
  ├── vite build (TanStack Start + Cloudflare plugin)
  ├── Output: dist/client (static) + dist/server (worker)
  └── Netlify plugin adds required headers/routing
```

## Deployment Checklist
1. [ ] Run `npm run build` locally
2. [ ] Run `npm run lint` for code quality
3. [ ] Verify all routes render correctly
4. [ ] Check environment variables are set in target platform
5. [ ] Push to `main` for production deploy
6. [ ] Monitor deploy logs for errors

## Rollback
- Netlify: Use Deploy History to revert to previous deploy
- Cloudflare: Use `wrangler rollback` to previous version

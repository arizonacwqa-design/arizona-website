# Deployment Rules

## General
- **Always validate all configs before deploying** — check `netlify.toml`, `wrangler.jsonc`, Railway config
- **Always check environment variables** — verify every env var used in the app is set in the target platform
- Never deploy with uncommitted changes — `git status` must be clean
- Deploy only from `main` branch unless explicitly testing a preview deploy

## Netlify (Primary Platform)
- Build command: `npm run build` (Node 22, set in `netlify.toml`)
- Publish directory: `dist/client`
- Environment variables: set via Netlify UI dashboard — never committed
- Auto-deploys: triggered on push to `main` via Git integration
- Preview deploys: available on PR branches via Netlify

### Netlify Pre-Deploy Check
1. [ ] `npm run build` succeeds locally
2. [ ] `npm run lint` is clean
3. [ ] All routes render correctly in preview
4. [ ] `netlify.toml` is valid (build command, publish dir, Node version)
5. [ ] All `import.meta.env.VITE_*` vars are set in Netlify dashboard
6. [ ] Push to `main` triggers deploy — monitor Netlify deploy logs

## Cloudflare Workers (SSR Runtime)
- Config file: `wrangler.jsonc` — validate JSON structure before deploy
- Entry point: `src/server.ts`
- Secrets: `wrangler secret put <KEY>` — never hardcoded
- Compatibility flags: `nodejs_compat` must remain set

### Cloudflare Pre-Deploy Check
1. [ ] `wrangler.jsonc` is valid JSON
2. [ ] `src/server.ts` compiles without errors
3. [ ] All `wrangler secret put` values are set
4. [ ] `wrangler whoami` confirms correct account

## Railway (Backend / Automation)
- Project: `intuitive-exploration` (configured at `~/.railway/config.json`)
- Always validate Railway config before deploy: `railway status`
- Check environment variables: `railway variables`
- Never deploy without checking upstream service health

### Railway Pre-Deploy Check
1. [ ] `railway status` shows project and environment correctly
2. [ ] `railway variables` lists all required env vars
3. [ ] Local `.env` matches Railway environment (excluding secrets)
4. [ ] No hardcoded credentials in code
5. [ ] Railway project is linked to correct directory

## Rollback Procedures
- **Netlify**: Deploy History → select previous deploy → "Publish deploy"
- **Cloudflare**: `wrangler rollback` to previous version
- **Railway**: `railway rollback` or redeploy previous deployment

## Environmental Separation
- **Development**: Local `npm run dev` with `.dev.vars` for Cloudflare bindings
- **Preview**: Netlify auto-deploys from feature branches
- **Production**: Push to `main` → Netlify + Cloudflare deploy

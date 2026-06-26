# Workflow: Development to Production Deployment

## Purpose
Deploy the arizona-website application from local development to production (Netlify + Cloudflare Workers) with validation and rollback capability.

## Node Structure
```
[Local Dev] → [Git Commit] → [Git Push (main)] → [Netlify Build] → [Cloudflare Worker Deploy] → [Verify]

Nodes:
1. Local Development (npm run dev)
2. Code Review (git diff, lint)
3. Memory Update (changelog, todo, decisions)
4. Git Commit (type(scope): description)
5. Push to main
6. Netlify Auto-Deploy (build + publish dist/client)
7. Cloudflare Worker (SSR via wrangler)
8. Verify (check routes, monitor logs)
```

## API Dependencies
| Dependency | Purpose | Config Location |
|------------|---------|-----------------|
| Netlify | Static hosting + CDN | netlify.toml |
| Cloudflare Workers | SSR runtime | wrangler.jsonc |
| Netlify Deploy Webhook | Git integration | Netlify dashboard |
| wrangler CLI | Worker deployment | Local env |

## Edge Cases
- **Build failure**: `npm run build` may fail due to type errors or dependency issues — fix locally before push
- **CRLF lint errors**: Prettier may fail on CRLF line endings — run `npm run format` first
- **Env vars missing**: Deploy succeeds but pages error — check Netlify dashboard env vars
- **Worker timeout**: Cloudflare Workers have 30s CPU limit — optimize SSR if slow
- **Cache staleness**: Netlify CDN may serve stale assets — check deploy status in dashboard

## Improvements
- [ ] Add GitHub Actions CI for automated lint + build checks before deploy
- [ ] Add preview deploys for feature branches
- [ ] Add health check endpoint that verifies both Netlify and Worker are live
- [ ] Add automated rollback on deploy failure detection

## Failure Recovery
If any step fails, follow the 7-step Failure Recovery Protocol (`.memory/workflows.md`):
1. Read deploy logs (Netlify dashboard or `railway logs`)
2. Identify root cause (build error, missing env var, worker timeout)
3. Suggest fix (see Common Failure Patterns in `rules/deployment.md`)
4. Ask before applying
5. Apply fix if approved
6. Re-deploy and verify
7. Report resolution in `.memory/changelog.md`

For repeated failures: escalate with timeline, logs, and 2+ alternative solutions.

## Usage Guide
1. `git status` — verify working tree state
2. `npm run lint` — ensure lint is clean
3. `npm run build` — verify build succeeds
4. Update `.memory/changelog.md` with what changed, why, risks
5. `git add <files> && git commit -m "type(scope): description"`
6. `git push origin main` — triggers Netlify auto-deploy
7. Monitor Netlify deploy log at app.netlify.com
8. Visit production URL and verify all routes render
9. If issues: apply Failure Recovery Protocol → Netlify Deploy History → Publish previous deploy

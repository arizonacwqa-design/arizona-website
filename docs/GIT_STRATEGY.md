# Git Strategy

## Branch Strategy
- **main**: Production-ready code, auto-deploys to Netlify
- Feature branches for larger changes (not yet active in this repo)

## Commit Message Format
```
<type>(<scope>): <description>
```

### Types
- `feat` — New feature
- `fix` — Bug fix
- `refactor` — Code restructuring
- `style` — Styling changes only
- `docs` — Documentation
- `chore` — Build/config/tooling
- `perf` — Performance improvement

### Examples
```
feat(booking): add date picker component
fix(nav): correct mobile menu z-index
docs: add deployment flow documentation
chore(deps): update TanStack Router to v1.168
```

## Commit Rules
1. **One concern per commit** — Each commit is a logical unit
2. **No secrets** — Never commit API keys, tokens, or passwords
3. **Descriptive messages** — Explain what and why, not how
4. **Review before commit** — Always check `git diff` first

## Workflow
```bash
git status                    # Check current state
git diff                      # Review changes
git add <files>               # Stage specific files
git commit -m "type(scope): description"  # Commit
git push                      # Push (when ready to deploy)
```

## Files NOT to commit
- `.env` files
- `.dev.vars`
- `node_modules/`
- `dist/`
- `.wrangler/`
- `.netlify/`
- `.tanstack/`

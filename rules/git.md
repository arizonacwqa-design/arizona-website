# Git Rules

## Commit Discipline
- **Every change must have a commit message** — no uncommitted work left at session end
- One commit per logical unit of work — don't bundle unrelated changes
- Commit message format: `<type>(<scope>): <description>`
- Use imperative mood, present tense ("add", "fix", not "added", "fixed")
- Keep descriptions concise but descriptive — explain what and why, not how

## Commit Types
| Type | When to Use |
|------|-------------|
| `feat` | New feature or component |
| `fix` | Bug fix |
| `refactor` | Code restructuring with no behavior change |
| `style` | Visual/styling changes only |
| `docs` | Documentation or memory file updates |
| `chore` | Build config, deps, tooling, CI |
| `perf` | Performance optimization |

## Examples
```
feat(booking): add date picker with time slot selection
fix(nav): correct mobile menu z-index overlap
refactor(hero): extract particle config to separate file
docs(memory): add ADR for TanStack Router migration
chore(deps): update TanStack Router to v1.168
```

## Push Rules
- **No direct push to production without confirmation** — always verify with `git diff main...HEAD` before push
- Push only after:
  1. `npm run lint` is clean
  2. `npm run build` succeeds (for structural changes)
  3. Memory files are updated (changelog, todo, decisions)
- Feature branches should be used for changes spanning multiple commits

## What NOT to Commit
- `.env` files (any variant)
- `.dev.vars`
- `node_modules/`
- `dist/`, `.output/`, `.vinxi/`
- `.wrangler/`, `.netlify/`, `.tanstack/`
- `.memory/backups/`
- `*.log`, `npm-debug.log*`

## Pre-Push Checklist
1. [ ] `git diff` reviewed — only intended changes staged
2. [ ] No secrets or keys in staged files
3. [ ] `npm run lint` passes
4. [ ] `npm run build` passes (if applicable)
5. [ ] Memory files updated (changelog.md with what/why/risks/impact/rollback)
6. [ ] Commit message follows `<type>(<scope>): <description>` format
7. [ ] User confirmed push for production branch

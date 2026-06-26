# Task Tracking

## Legend
- `[ ]` — Pending
- `[/]` — In progress
- `[x]` — Completed
- `[!]` — Blocked

---

## Current Priorities

### [x] Initialize AI Engineering System
- [x] Upgrade dev workflow to 15-step execution pipeline with approval gate and report requirements
- [x] Create knowledge base: 5 sub-dirs, INDEX.md, 17 files across workflows/templates/examples/patterns
- [x] Create rules system: development.md, git.md, deployment.md, n8n.md, safety.md, quality.md
- [x] Remove old ENGINEERING.md and SECURITY.md
- [x] Update memory files (changelog, decisions, todo, architecture)
- [x] Create `.memory/` directory structure
- [x] Create `project.md` — consolidated project overview
- [x] Create `architecture.md` — architecture details
- [x] Create `workflows.md` — development & deployment workflows
- [x] Create `decisions.md` — ADR-style decision log
- [x] Create `lessons.md` — lessons learned
- [x] Create `known-issues.md` — known issues register
- [x] Create `todo.md` — task tracking
- [x] Create `changelog.md` — change log
- [x] Create `docs/MEMORY_USAGE_GUIDE.md`
- [x] Remove old `.memory/` files (SESSION.md, CHANGELOG.md, MEMORY_INDEX.md)
- [x] Update `docs/MEMORY_STRATEGY.md`
- [x] Update `rules/ENGINEERING.md`

### [ ] Fix lint errors (CRLF)
- [ ] Add `.gitattributes` with `* text=auto eol=lf`
- [ ] Update `.prettierrc` with `"endOfLine": "auto"`
- [ ] Run `npm run format` to normalize all files
- [ ] Verify `npm run lint` is clean

### [ ] Create .env.example
- [ ] Document required environment variables
- [ ] Create `.env.example` in repo root

### [ ] Establish branch strategy
- [ ] Create feature branch workflow docs
- [ ] Set up GitHub branch protection rules

## Backlog
- [ ] Add test framework (Vitest?)
- [ ] Add CI workflow (GitHub Actions)
- [ ] Performance audit
- [ ] Accessibility audit

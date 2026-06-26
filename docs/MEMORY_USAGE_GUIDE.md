# Memory Usage Guide

## Purpose
This guide explains how future AI agents should use the persistent memory system in `.memory/`. Following these rules ensures context continuity, traceability, and safe operations across sessions.

---

## Golden Rules

1. **Read all memory files before starting any task** — Always load full context first.
2. **Never overwrite full files** — Only append new entries or modify the most recent section. Existing history must be preserved.
3. **Never store secrets or API keys** — Use `.env`, `.dev.vars`, or platform env vars.
4. **Store only system knowledge and decisions** — No personal data, no speculative features.
5. **Memory must reflect real repository state** — If you don't find it in the code, don't document it.

---

## Memory File Map

| File | Purpose | When to Update |
|------|---------|----------------|
| `project.md` | Project identity, tech stack, routes, components, config files | When new deps, routes, or components are added |
| `architecture.md` | System architecture diagram, data flow, directory layout, design decisions | When architecture changes (new infra, new pattern) |
| `workflows.md` | Dev workflow, deployment flow, rollback steps, backup procedures | When workflow steps or deploy targets change |
| `decisions.md` | Architecture Decision Records (ADR) — why decisions were made | After any significant architectural or workflow decision |
| `lessons.md` | Lessons learned — problems encountered and how they were resolved | After debugging, incident, or valuable discovery |
| `known-issues.md` | Active bugs, tech debt, limitations — with severity, impact, workaround | When new issue discovered or existing one resolved |
| `todo.md` | Task tracking — current priorities, backlog, blocked items | Start/end of session, after task completion |
| `changelog.md` | Project changelog — what changed, why, risks, rollback | After every meaningful change (code, config, docs) |

---

## Standard Workflow

The full 15-step execution pipeline is defined in `.memory/workflows.md`. Every task must follow it.

### Pre-task (steps 1-3)
```markdown
1. Read all .memory/*.md files
2. Read all rules/*.md files
3. Search knowledge/ for existing relevant work
```

### Planning (steps 4-8)
```markdown
4. Analyze repository (source files, git status, git log)
5. Identify all impacted files
6. Create plan (scope, approach, risks, rollback)
7. Show plan to user
8. Wait for approval if needed
```

### Execution (steps 9-11)
```markdown
9. Execute changes step-by-step in logical increments
10. Validate: npm run lint, npm run build
11. Test workflow end-to-end if applicable
```

### Post-task (steps 12-15)
```markdown
12. Update memory files:
    - changelog.md: what changed, why, risks, impact, rollback
    - todo.md: mark completed, add new tasks
    - decisions.md: if significant decision was made
    - lessons.md: if something was learned
    - known-issues.md: if issue discovered or resolved
    - project.md or architecture.md: if change affected identity/structure

13. Update docs/ if system behavior changed

14. Generate git commit message

15. Produce final report with:
    - Summary
    - Files changed
    - Reason for changes
    - Risk level
    - Dependencies affected
    - Rollback instructions
    - Future improvements
```

---

## Commit Guidelines for Memory Files

- Always commit `.memory/` changes alongside the code changes they describe
- Use commit type `docs:` for memory-only updates
- Use commit type `chore:` for memory updates that accompany a code change
- Example: `docs(memory): add ADR for TanStack Router migration`

---

## Recovery After Context Loss

If you (the AI) lose context mid-session:

```markdown
1. Read this file (MEMORY_USAGE_GUIDE.md) to understand the system
2. Read .memory/project.md for project identity
3. Read .memory/architecture.md for system structure
4. Read .memory/decisions.md for prior decisions
5. Read .memory/todo.md for active tasks
6. Read .memory/changelog.md for recent changes
7. Read .memory/known-issues.md for active problems
8. Run .\scripts\status.ps1 for system health
```

---

## Example: Changelog Entry After a Change

```markdown
### Changed
- **File**: `src/components/Hero.tsx`
- **What**: Updated hero heading text and CTA button style
- **Why**: Design feedback — original text was unclear, button lacked contrast
- **Risks**: None — purely presentational change
- **Impact**: Improved conversion rate on landing page
- **Rollback**: `git revert <commit-hash>` to restore previous hero
```

---

## Example: Decision Entry

```markdown
### 2026-06-27: Adopted TanStack Router file-based routing
- **Status**: Accepted
- **Context**: Needed a type-safe routing solution with SSR support
- **Decision**: Use TanStack Router with auto-generated route tree from `src/routes/`
- **Consequences**:
  - Routes defined as files in `src/routes/`, auto-generated in `routeTree.gen.ts`
  - Type-safe links and params
  - Requires route file naming conventions (index.tsx for `/`, `about.tsx` for `/about`)
```

---

## Example: Lesson Entry

```markdown
### 2026-06-27: Vite config plugins must not be duplicated
- **Situation**: Build failed with duplicate plugin errors
- **Root Cause**: Added viteReact plugin manually, but @lovable.dev/vite-tanstack-config already includes it
- **Resolution**: Removed duplicate plugins, used defineConfig({ vite: { plugins: [...] } }) for extras only
- **Prevention**: Always check preset documentation before adding plugins
```

---

## Example: Known Issue Entry

```markdown
### [KI-001] CRLF line endings cause 6108 Prettier errors
- **Severity**: Medium
- **Area**: Linting
- **Description**: Prettier reports CRLF line endings in all TS/TSX files
- **Impact**: Cannot get clean lint output
- **Workaround**: Run `npm run format`
- **Fix plan**: Add `.gitattributes` and run one-time format
```

---

## Final Reminder

> **If you don't document it, it didn't happen.**
> **If you don't read memory first, you're flying blind.**

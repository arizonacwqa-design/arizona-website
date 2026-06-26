# Memory Strategy

## Purpose
The memory system provides persistent context across sessions, enabling the AI engineering agent to maintain coherence and continuity. All memory files live in `.memory/` and follow strict append-only rules.

## Memory Files

| File | Purpose | Update Trigger |
|------|---------|----------------|
| `project.md` | Project identity, tech stack, routes, components | New deps, routes, or components |
| `architecture.md` | System architecture, data flow, directory layout | Architecture or infra changes |
| `workflows.md` | Dev/deploy/rollback procedures | Workflow or deploy target changes |
| `decisions.md` | Architecture Decision Records (ADR) | After any significant decision |
| `lessons.md` | Lessons learned register | After debugging, incidents, discoveries |
| `known-issues.md` | Active bugs, tech debt, limitations | Issue discovered or resolved |
| `todo.md` | Task tracking (priorities, backlog, blockers) | Session start/end, task completion |
| `changelog.md` | Project changelog — what, why, risks, rollback | After every meaningful change |

## Core Rules
1. **Read all memory files before starting any task**
2. **Never overwrite full files** — Append or edit the most recent section only
3. **Never store secrets or API keys**
4. **Store only system knowledge and decisions**
5. **Memory must reflect real repository state**

## Post-Task Update Checklist
After every task, update:
- `changelog.md` — What changed, why, risks, impact, rollback steps
- `todo.md` — Mark completed items, add new tasks
- `decisions.md` — If a decision was made
- `lessons.md` — If something was learned
- `known-issues.md` — If issue discovered or resolved
- `project.md` / `architecture.md` — If the change affected project identity or structure

## Recovery
If context is lost:
1. Read `docs/MEMORY_USAGE_GUIDE.md` for the full guide
2. Read all `.memory/*.md` files for current state
3. Run `.\scripts\status.ps1` for system health

## Integration
- Memory files are committed alongside code changes (type `docs:` or `chore:`)
- Backups in `.memory/backups/` are gitignored
- See `docs/MEMORY_USAGE_GUIDE.md` for detailed usage with examples

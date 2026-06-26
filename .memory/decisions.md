# Decisions Log

## Format
```
### YYYY-MM-DD: Title
- **Status**: [Proposed | Accepted | Deprecated | Superseded]
- **Context**: Why this decision was needed
- **Decision**: What was chosen
- **Consequences**: Impact on the system
```

---

### 2026-06-27: AI Engineering System initialization
- **Status**: Accepted
- **Context**: Needed structured, persistent memory for AI agent to maintain context across sessions and enforce engineering discipline.
- **Decision**: Created `.memory/` directory with 8 specialized files (project, architecture, workflows, decisions, lessons, known-issues, todo, changelog) plus a Memory Usage Guide in `docs/`. Each file has a single responsibility — append-only, never overwritten fully.
- **Consequences**:
  - AI agent can restore full context after session loss
  - Every change is traceable (what, why, risks, rollback)
  - Slightly more files to maintain, but each is focused
  - Old flat files (SESSION.md, MEMORY_INDEX.md) removed as superseded

### 2026-06-27: Memory files in .memory/ not committed
- **Status**: Accepted
- **Context**: `.memory/` contains internal agent state that may include transient task tracking. Committing every memory change creates noisy git history.
- **Decision**: Memory files are committed alongside code changes, but only when meaningful. Backup directory `.memory/backups/` is gitignored.
- **Consequences**:
  - Cleaner git history
  - Memory always reflects real repo state
  - Backups don't pollute the repo

### 2026-06-27: Added 7-step Failure Recovery Protocol with escalation path
- **Status**: Accepted
- **Context**: Pipeline steps 10-11 (validate, test) can fail, but there was no defined recovery procedure. Failures were handled ad-hoc with no log analysis, root cause tracking, or escalation for repeated issues.
- **Decision**: Added Failure Recovery Protocol to `.memory/workflows.md`: Read logs → Identify root cause → Suggest fix → Ask before applying → Apply if approved → Re-test → Report resolution. For repeated failures: escalate with full analysis and 2+ alternative solutions. Common failure patterns documented in `rules/deployment.md`.
- **Consequences**:
  - Every failure now has a structured recovery path
  - Repeated failures get escalated with alternatives instead of retrying same fix
  - Root causes documented in lessons.md and failed-patterns/ for future prevention
  - Integration with pipeline steps 10-11 means recovery is always gated by approval

### 2026-06-27: Adopted 15-step execution pipeline as universal workflow
- **Status**: Accepted
- **Context**: Previous 7-step workflow was underspecified — missing pre-work (read rules, search knowledge, analyze repo, identify impacted files), missing planning/approval gate, missing validation, testing, and report generation requirements.
- **Decision**: Replaced the old 7-step workflow with a 15-step pipeline: Read .memory → Read /rules → Search /knowledge → Analyze repo → Identify impacted files → Create plan → Show plan → Wait for approval → Execute step-by-step → Validate → Test → Update memory → Update docs → Generate commit → Produce report. Every report must include summary, files changed, reason, risk level, dependencies, rollback instructions, and future improvements.
- **Consequences**:
  - All work is now traceable from context to final report
  - Approval gate prevents unapproved destructive changes
  - Reports include rollback steps, reducing recovery time
  - Knowledge base is searched before any work, reducing duplication
  - Slightly more overhead for small changes, but enforced discipline prevents mistakes

### 2026-06-27: Knowledge base system with 5 sub-directories
- **Status**: Accepted
- **Context**: Need to reduce duplicate work by providing a searchable, structured repository of workflows, templates, patterns, and lessons learned.
- **Decision**: Created `knowledge/` with 5 sub-directories: workflows/, templates/, examples/, failed-patterns/, successful-patterns/. Each with an INDEX.md registry. Added INDEX.md at root for governance rules.
- **Consequences**:
  - Before creating anything new, AI must search knowledge base first
  - Every workflow documented with purpose, node structure, API deps, edge cases, improvements, usage guide
  - Failed attempts saved with root cause to prevent repeats
  - Successful patterns saved as reference for future work
  - Old PROJECT.md content migrated to `.memory/project.md` — knowledge/ is now for workflows/patterns only

### 2026-06-27: Restructured rules into 6 specialized files
- **Status**: Accepted
- **Context**: Previous flat rules (ENGINEERING.md, SECURITY.md) mixed concerns. Needed domain-specific rulebooks for AI behavior control.
- **Decision**: Created 6 focused rule files: development.md, git.md, deployment.md, n8n.md, safety.md, quality.md. Removed the two old files.
- **Consequences**:
  - Each rule file has a single concern — easier to find and enforce
  - Added n8n-specific rules (workflow integrity, JSON validation, credential preservation)
  - Added deployment rules for Railway (previously undocumented)
  - Safety rules centralize destructive operation protocol
  - Quality rules formalize reusability and modularity standards

### 2026-06-27: TanStack Start + Cloudflare Workers for SSR
- **Status**: Accepted (pre-existing, documented)
- **Context**: Needed SSR with edge performance and CDN static delivery.
- **Decision**: TanStack Start renders on Cloudflare Workers, Netlify serves static assets.
- **Consequences**:
  - Fast edge rendering worldwide via Cloudflare
  - Build produces both client (dist/client) and worker (dist/server) output
  - Dual platform dependency — both must be configured correctly

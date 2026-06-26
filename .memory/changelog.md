# Changelog

All notable changes to this project are documented here. This file is the single source of truth for project history.

Format: [Keep a Changelog](https://keepachangelog.com/)
Types: Added | Changed | Deprecated | Removed | Fixed | Security

---

## [Unreleased]

### Added
- Failure Recovery Protocol: 7-step process for deployment/workflow failures with escalation path for repeated failures
  - `.memory/workflows.md` — Full protocol definition + escalation requirements
  - `rules/deployment.md` — Common failure patterns table (build, worker, env, Railway)
  - `rules/safety.md` — Updated procedural safety to reference protocol
  - `knowledge/workflows/dev-deploy.md` — Failure recovery section in usage guide
- Knowledge base system with 6 directories and 17 files
  - `knowledge/INDEX.md` — Governance rules for knowledge base usage
  - `knowledge/workflows/` — 3 workflow entries (dev-deploy, n8n-backup, n8n-lead-capture)
  - `knowledge/templates/` — 3 templates (workflow-doc, git-commit-message, n8n-error-handler)
  - `knowledge/examples/` — 2 examples (vite-plugin-duplication, file-based-routing)
  - `knowledge/failed-patterns/` — 2 patterns (crlf-line-endings, vite-plugin-duplication)
  - `knowledge/successful-patterns/` — 2 patterns (tanstack-file-routing, lovable-config-preset)
- AI Engineering System initialization
  - `.memory/` directory with persistent memory files:
    - `project.md` - Project overview and tech stack
    - `architecture.md` - System architecture and data flow
    - `workflows.md` - Development, deployment, backup workflows
    - `decisions.md` - Architecture Decision Records
    - `lessons.md` - Lessons learned register
    - `known-issues.md` - Known issues tracker
    - `todo.md` - Task tracking
    - `changelog.md` - This file, project changelog
  - `docs/MEMORY_USAGE_GUIDE.md` - Guide for future AI agents
  - `rules/development.md` - Architecture compliance, dependency discipline, code conventions
  - `rules/git.md` - Commit discipline, message format, push rules
  - `rules/deployment.md` - Netlify, Cloudflare, Railway validation
  - `rules/n8n.md` - Workflow integrity, JSON validation, credential preservation
  - `rules/safety.md` - Destructive operation protocol, pre-execution planning
  - `rules/quality.md` - Code reusability, duplication avoidance, modular structure
- `rules/` directory for engineering and security rules
- `knowledge/` directory for project knowledge base
- `docs/` directory for system documentation (6 docs)
- `scripts/` directory for automation (backup, init, status)

### Changed
- Upgraded development workflow from 7-step to 15-step execution pipeline
  - Steps 1-3: Context load (read .memory, /rules, /knowledge)
  - Steps 4-8: Analysis and planning with approval gate
  - Steps 9-11: Step-by-step execution, validation, testing
  - Steps 12-15: Memory update, docs update, commit, final report
- All task reports now require: summary, files changed, reason, risk level, dependencies, rollback, future improvements
- Updated `docs/MEMORY_USAGE_GUIDE.md` to reflect new pipeline
- Updated `rules/development.md` to reference pipeline
- Updated `rules/safety.md` to reference pipeline approval gate
- Restructured `.memory/` from flat (SESSION.md, CHANGELOG.md, MEMORY_INDEX.md) to 8 specialized files
- Restructured `rules/` from 2 flat files (ENGINEERING.md, SECURITY.md) to 6 domain-specific rule files
- Updated `docs/MEMORY_STRATEGY.md` to reference new memory file structure
- Updated `.gitignore` to exclude `.memory/backups/`

### Removed
- `.memory/SESSION.md` - Superseded by `todo.md` + `decisions.md`
- `.memory/MEMORY_INDEX.md` - Superseded by `docs/MEMORY_USAGE_GUIDE.md`
- `rules/ENGINEERING.md` - Content distributed across development.md, safety.md, quality.md
- `rules/SECURITY.md` - Content merged into safety.md and development.md

# Safety Rules

## Destructive Operations
- **No destructive operations without explicit user confirmation**
- Destructive operations include:
  - Deleting files or directories
  - Overwriting existing workflows or configs
  - Dropping database tables or collections
  - Removing environment variables
  - Unlinking deployment targets
  - Force-pushing to git branches
  - Rolling back production deployments
- For any destructive operation: propose the full plan first, wait for confirmation

## Pre-Execution Plan Requirement (Pipeline Steps 6-8)
Before executing any change that could impact system stability — per the 15-step pipeline in `.memory/workflows.md`:
1. **Create execution plan** — scope, approach, impacted files, risks, rollback
2. **Show plan to user** — present the full plan
3. **Wait for confirmation** — do not proceed without explicit approval

## Backup Requirements
- Always create a backup before modifying:
  - Configuration files (`netlify.toml`, `wrangler.jsonc`, `vite.config.ts`)
  - Workflow definitions (n8n workflows, CI/CD pipelines)
  - Environment configurations
- Backup command: `.\scripts\backup.ps1 -Path <file> -Label "pre-change"`
- Verify backup exists and is readable before proceeding

## Environment Safety
- Never expose secrets in logs, console output, or error messages
- Never commit `.env`, `.dev.vars`, or credential files
- Never store API keys in source code
- Never disable security features (HTTPS, CSP, input validation)
- Never use `eval()`, `Function()`, or dynamic code execution

## Git Safety
- Never force-push to `main` or production branches
- Never amend or rebase pushed commits on shared branches
- Never commit large files (binaries, node_modules, build output)
- Always review `git diff` before staging and `git diff --cached` before committing

## Failure Recovery
When any deployment, workflow, or operation fails — follow the 7-step Failure Recovery Protocol in `.memory/workflows.md`:
1. Read logs → 2. Identify root cause → 3. Suggest fix → 4. Ask before applying → 5. Apply if approved → 6. Re-test → 7. Report resolution

If the same failure repeats: escalate with full analysis and provide 2+ alternative solutions.

## Procedural Safety
- Work in logical, reversible increments — each step should be independently revertible
- After each increment: verify system state before proceeding
- If a step fails: stop, apply Failure Recovery Protocol (`.memory/workflows.md`), then proceed
- When uncertain: ask rather than assume — never guess

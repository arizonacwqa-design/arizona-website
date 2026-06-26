# Workflows

## Execution Pipeline

This 15-step pipeline governs ALL work in this repository. Every task must follow these steps in order.

```
 1. READ .memory          — Load all 8 memory files for full context
 2. READ /rules           — Load all 6 rule files for behavioral constraints
 3. SEARCH /knowledge     — Search knowledge base to avoid duplicate work
 4. ANALYZE REPOSITORY    — Read relevant source files, git status, git log
 5. IDENTIFY IMPACTED     —— Determine which files will be created/modified/deleted
 6. CREATE PLAN           — Define scope, approach, risks, rollback steps
 7. SHOW PLAN TO USER     — Present plan for review
 8. WAIT FOR APPROVAL     — Do not proceed without explicit confirmation
 9. EXECUTE STEP-BY-STEP  — Make changes in logical, reversible increments
10. VALIDATE CHANGES      — npm run lint, npm run build, check regressions
11. TEST WORKFLOW         — If applicable, test the modified workflow end-to-end
12. UPDATE MEMORY         — changelog.md (what/why/risks/impact/rollback), todo.md,
                             decisions.md, lessons.md, known-issues.md
13. UPDATE DOCS           — docs/ files if system behavior changed
14. GENERATE COMMIT       — git commit -m "type(scope): description"
15. PRODUCE REPORT        — Final report with all required sections
```

## Failure Recovery Protocol

If a deployment, workflow, or any operation fails — follow this 7-step protocol:

```
 1. READ LOGS            — Collect all error output, stack traces, status codes
 2. IDENTIFY ROOT CAUSE  — Determine exact failure point and underlying reason
 3. SUGGEST FIX          — Propose specific, actionable fix with expected outcome
 4. ASK BEFORE APPLYING  — Present fix to user; do not apply without approval
 5. APPLY FIX (approved) — Execute the fix in a reversible manner
 6. RE-TEST SYSTEM       — Re-run the failed operation; verify full recovery
 7. REPORT RESOLUTION    — Document cause, fix, and verification in changelog
```

### Failure Escalation
If the same failure repeats after applying a fix:

1. **Escalate with detailed analysis** — provide:
   - Full timeline of failure + attempted fix
   - Log excerpts at each failure point
   - System state (recent changes, env diffs, dependency versions)
   - Correlation analysis (what changed between first and second failure)
2. **Provide alternative solutions** (minimum 2):
   - Option A: Different approach to the same fix
   - Option B: Workaround that avoids the failing path
   - Option C: Architectural change to eliminate the root cause
3. Document the repeated failure in `lessons.md` and `failed-patterns/`

### Protocol Integration
- The protocol triggers at pipeline step 10 (VALIDATE) or step 11 (TEST) if checks fail
- Repeated failures must be recorded in `failed-patterns/` with full root cause
- Every failure recovery must produce a changelog entry with cause, fix, and re-test results

## Report Requirements

Every task's final report MUST include:

| Section | Content |
|---------|---------|
| **Summary** | One-paragraph overview of what was done |
| **Files changed** | List of all files created, modified, or deleted |
| **Reason for changes** | Why the change was needed / what requirement drove it |
| **Risk level** | Low / Medium / High — with justification |
| **Dependencies affected** | Any upstream/downstream impacts |
| **Rollback instructions** | Exact steps to revert the change |
| **Future improvements** | What could be done next to build on this work |

## Change Types
- `feat` — New feature or component
- `fix` — Bug fix
- `refactor` — Code restructuring (no behavior change)
- `style` — Styling/visual changes only
- `docs` — Documentation or memory files
- `chore` — Build/config/tooling/deps
- `perf` — Performance optimization

## Deployment Workflow
### Netlify (Primary)
- **Trigger**: Push to `main`
- **Build**: `npm run build` (Node 22)
- **Publish**: `dist/client`
- **Environments**: Via Netlify UI (not committed)

### Cloudflare Workers (SSR)
- **Config**: `wrangler.jsonc`
- **Entry**: `src/server.ts`
- **Secrets**: `wrangler secret put` (not committed)

### Checklist
1. [ ] `npm run build` succeeds
2. [ ] `npm run lint` clean
3. [ ] All routes render correctly
4. [ ] Environment variables set in target platform
5. [ ] Push to `main`
6. [ ] Monitor Netlify deploy logs

## Rollback
- **Netlify**: Deploy History → revert to previous deploy
- **Cloudflare**: `wrangler rollback` to previous version

## Backup Workflow
```powershell
.\scripts\backup.ps1 -Path "netlify.toml" -Label "before-config-change"
.\scripts\backup.ps1  # Backup all config files
```

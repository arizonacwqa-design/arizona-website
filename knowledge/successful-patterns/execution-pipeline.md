# Successful Pattern: 15-Step Execution Pipeline

## Context
The original 7-step development workflow was underspecified — it had no pre-work phase (read rules, search knowledge base), no planning/approval gate, no validation step after execution, and no final report requirement. This led to inconsistent task execution and missing context.

## Solution
Replace the 7-step workflow with a 15-step execution pipeline that covers the full task lifecycle:

```
 1. Read .memory          — Full context
 2. Read /rules           — Behavioral constraints
 3. Search /knowledge     — Avoid duplicate work
 4. Analyze repo          — Source files, git state
 5. Identify impacted     — Files to change
 6. Create plan           — Scope, risks, rollback
 7. Show plan to user     — Review
 8. Wait for approval     — Gate
 9. Execute step-by-step  — Logical increments
10. Validate              — Lint, build
11. Test workflow         — End-to-end
12. Update memory         — All 8 files
13. Update docs           — If behavior changed
14. Generate commit       — Git message
15. Produce report        — 7 required sections
```

## Key Decisions
1. **Approval gate at step 8**: Prevents unapproved destructive changes — safety.md enforces this
2. **Search before create**: Step 3 enforces knowledge base lookup before any work
3. **Report with rollback**: Step 15 requires rollback instructions, reducing recovery time
4. **Rules as constraints**: Step 2 ensures behavioral rules are always fresh in context

## Outcomes
- Every task is traceable from initial context to final report
- No more "flying blind" — full context always loaded before work
- Rollback instructions documented before execution begins
- Knowledge base is actually used, reducing duplicate work

## Source
`.memory/workflows.md` — full pipeline definition

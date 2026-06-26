# Knowledge Base Index

## Purpose
Reduce duplicate work by providing a searchable, structured repository of workflows, templates, patterns, and lessons learned. Always search here before creating anything new.

## Directory Structure
```
knowledge/
├── INDEX.md                       # This file
├── PROJECT.md                     # Legacy project knowledge (migrated to .memory/project.md)
├── workflows/                     # Operational workflows (dev, deploy, n8n automation)
│   ├── INDEX.md                   # Workflow registry
│   └── <workflow-name>.md         # Individual workflow documentation
├── templates/                     # Reusable templates (workflow blueprints, config stubs)
│   ├── INDEX.md                   # Template registry
│   └── <template-name>.md         # Individual template
├── examples/                      # Concrete examples demonstrating patterns
│   ├── INDEX.md                   # Examples index
│   └── <example-name>.md          # Individual example
├── failed-patterns/               # Failed attempts with documented root causes
│   ├── INDEX.md                   # Failed patterns index
│   └── <pattern-name>.md          # Individual failure record
└── successful-patterns/           # Proven successful patterns
    ├── INDEX.md                   # Successful patterns index
    └── <pattern-name>.md          # Individual pattern record
```

## Usage Rules

### Before creating anything new
1. **Search knowledge base first** — grep across all `knowledge/` files for relevant terms
2. **Check `workflows/INDEX.md`** — see if a workflow already exists for your need
3. **Check `templates/INDEX.md`** — see if a reusable template covers your use case
4. **Check `successful-patterns/`** — see if a proven pattern already solves the problem
5. **Check `failed-patterns/`** — see if someone already tried and failed at your approach

### When reusing
- **Reuse existing workflows if possible** — copy from `templates/` and adapt, don't rebuild
- Reference the source template in your new file
- If a template doesn't quite fit, extend it and document the extension

### When saving a new workflow
Every workflow entry MUST include:
- **Purpose** — What this workflow accomplishes
- **Node structure** — Logical flow (triggers, actions, conditions, outputs)
- **API dependencies** — External services, endpoints, credentials required
- **Edge cases** — Known failure modes, rate limits, error states
- **Improvements** — What could be better, planned enhancements
- **Usage guide** — Step-by-step instructions to deploy and use

### When saving a failed attempt
- Save to `failed-patterns/` with the reason for failure
- Include: what was attempted, what went wrong, root cause, how it was detected
- This prevents repeating the same mistake

### When saving a successful pattern
- Save to `successful-patterns/` with implementation details
- Include: context, solution, key decisions, outcomes
- This becomes a reference for future similar work

## Search Tips
- Use `grep -r "keyword" knowledge/` for cross-file search
- Use `grep -r "keyword" knowledge/workflows/` for workflow-specific search
- Check `lessons.md` and `known-issues.md` in `.memory/` for related context

# n8n Rules

## Workflow Integrity
- **Never break existing workflows** — always verify workflow IDs and connections before editing
- Backup before editing: export workflow as JSON before making changes
- Understand the full workflow DAG before modifying any node
- Test edited workflows in isolation mode before activating

## JSON Structure
- **Always validate JSON structure** before importing or editing workflow definitions
- Use `n8n export --workflow <id>` to get valid JSON before manual edits
- After editing JSON manually, validate with `n8n import --workflow --input <file>` in dry-run mode
- Check for: valid node connections, correct `id`/`name` references, proper credential IDs

## Credentials
- **Always preserve credential references** — never remove or change credential IDs without verification
- Never store credential values in workflow JSON — use n8n credential store only
- When duplicating workflows: update credential references, don't reuse production creds in dev
- Credential names should follow convention: `<SERVICE>_<ENV>` (e.g., `GMAIL_PRODUCTION`, `OPENAI_DEV`)

## Workflow Design
- Use sub-workflows for reusable logic — avoid duplicating node chains
- Use error workflows for failure handling — every workflow should have error handling
- Tag workflows by domain and environment for discoverability
- Keep workflow descriptions updated — document trigger, inputs, outputs, and dependencies

## Pre-Edit Checklist
1. [ ] Export current workflow: `n8n export --workflow <id> --output .memory/backups/n8n/`
2. [ ] Read the full workflow DAG — understand all connections
3. [ ] Identify all credential references
4. [ ] Verify no other workflows depend on this one (check sub-workflow references)
5. [ ] Plan changes as a diff before executing

## Post-Edit Checklist
1. [ ] Workflow activates without errors
2. [ ] All credential references still valid
3. [ ] Test with sample data to verify output
4. [ ] Update workflow description if behavior changed
5. [ ] Document change in `.memory/changelog.md`

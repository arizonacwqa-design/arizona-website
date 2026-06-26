# Workflow Registry

## Purpose
Central registry of all operational workflows. Each file documents a complete workflow with purpose, node structure, API dependencies, edge cases, improvements, and usage guide.

## Workflows

| Name | Type | Description | Status |
|------|------|-------------|--------|
| `dev-deploy` | Development | Full dev-to-production deployment pipeline | Active |
| `n8n-backup` | Automation | Backup and restore n8n workflows | Active |
| `n8n-lead-capture` | Automation | Lead form → CRM → Email notification | Draft |

## How to Add a New Workflow
1. Create `<workflow-name>.md` in this directory
2. Add it to the table above
3. Ensure it includes all required sections: Purpose, Node Structure, API Dependencies, Edge Cases, Improvements, Usage Guide
4. If it's a reusable pattern, also add a template to `templates/`

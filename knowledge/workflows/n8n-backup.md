# Workflow: n8n Backup and Restore

## Purpose
Backup all n8n workflows to the repository's `.memory/backups/n8n/` directory for version control and disaster recovery.

## Node Structure
```
[n8n CLI] → [Export Workflows as JSON] → [Save to .memory/backups/n8n/] → [Git Commit (optional)]

Manual steps:
1. List all workflows: n8n list --workflows
2. For each workflow: n8n export --workflow <id> --output .memory/backups/n8n/<name>.json
3. (Optional) Commit backups: git add .memory/backups/n8n/ && git commit -m "chore: backup n8n workflows"
```

## API Dependencies
| Dependency | Purpose |
|------------|---------|
| n8n CLI | Export/import workflows |
| n8n API (internal) | Workflow CRUD |

## Edge Cases
- **Workflow renamed**: ID stays the same but filename should reflect current name
- **Missing credentials**: Exported JSON references credential IDs — these won't work on import without the same credentials configured
- **Sub-workflow references**: Exported workflows may reference other workflows by ID — ensure all dependencies are backed up together
- **Large workflows**: JSON can be large — check for truncation in CLI output

## Improvements
- [ ] Automate backup via scheduled n8n workflow
- [ ] Add restore script that imports all workflows from backup directory
- [ ] Add version comparison between backup and live workflow
- [ ] Integrate backup with git pre-commit hook

## Usage Guide
### Backup
```powershell
mkdir .memory/backups/n8n -Force
n8n list --workflows --output json | ConvertFrom-Json | ForEach-Object {
  $id = $_.id
  $name = $_.name -replace '[^a-zA-Z0-9_-]', '_'
  n8n export --workflow $id --output ".memory/backups/n8n/$name.json"
}
```

### Restore
```powershell
n8n import --workflow --input ".memory/backups/n8n/<filename>.json"
```

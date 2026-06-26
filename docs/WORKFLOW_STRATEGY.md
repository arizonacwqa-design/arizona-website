# Workflow Strategy

## Development Workflow
```
1. Context Load
   ├── Read .memory/SESSION.md
   ├── git status + git log --oneline -5
   └── Read relevant source files

2. Plan
   ├── Define scope of change
   ├── Identify files to modify
   └── Verify approach with docs

3. Execute
   ├── Make changes in logical units
   ├── Each unit = single concern
   └── Verify with npm run lint

4. Verify
   ├── npm run build (if applicable)
   ├── npm run lint (always)
   └── Check for regressions

5. Record
   ├── Update .memory/SESSION.md
   ├── Update .memory/CHANGELOG.md
   └── Update knowledge/PROJECT.md if new context learned

6. Commit
   ├── git add <relevant files>
   ├── git commit -m "type(scope): description"
   └── Never commit secrets
```

## Change Types
- **feat**: New feature
- **fix**: Bug fix
- **refactor**: Code restructuring
- **style**: Styling changes only
- **docs**: Documentation changes
- **chore**: Build/config changes
- **perf**: Performance improvement

## Backup Workflow
Before modifying workflows or configs:
1. Copy file to `.memory/backups/` with timestamp
2. Proceed with modification
3. Verify backup exists before destroying originals

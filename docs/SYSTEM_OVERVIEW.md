# System Overview

## Purpose
The AI Engineering System manages the arizona-website repository with DevOps, full-stack, and automation engineering discipline. It ensures safe, traceable, and documented changes across the entire software lifecycle.

## Components

### Memory System (`.memory/`)
Tracks session state, changelog, and memory index. Updated on every session boundary and after each meaningful change.

### Rules (`rules/`)
Engineering and security guidelines that govern all work in the repository.

### Knowledge Base (`knowledge/`)
Persistent project knowledge capturing decisions, architecture, and operational details.

### Documentation (`docs/`)
Human-readable system documentation covering architecture, workflows, deployment, git strategy, and memory strategy.

### Automation (`scripts/`)
PowerShell scripts for backups, initialization, and system status checks.

## Principles
1. **Memory-first**: All context is stored and retrievable
2. **Safe operations**: Backups before destructive changes
3. **Git discipline**: Commits after every logical unit
4. **Documentation parity**: Docs updated when behavior changes
5. **No secrets in code**: Environment-only configuration

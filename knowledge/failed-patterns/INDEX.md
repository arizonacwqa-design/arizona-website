# Failed Patterns Index

## Purpose
Document failed attempts with root causes to prevent repeating mistakes. Each entry describes what was attempted, what went wrong, and how to avoid it.

## Failed Patterns

| Name | Area | Failure |
|------|------|---------|
| `crlf-line-endings` | Linting | 6108 Prettier errors due to CRLF line endings on Windows |
| `vite-plugin-duplication` | Build | Build failure from duplicate Vite plugins |

## How to Add
1. Create `<pattern-name>.md` with full description
2. Add it to the table above
3. Include: what was attempted, what went wrong, root cause, detection method, prevention

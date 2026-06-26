# Lessons Learned

## Format
```
### YYYY-MM-DD: Short Title
- **Situation**: What happened
- **Root Cause**: Why it happened
- **Resolution**: How it was fixed
- **Prevention**: How to avoid in future
```

---

### 2026-06-27: CRLF line endings cause 6108 ESLint errors
- **Situation**: Running `npm run lint` shows 6108 `prettier/prettier` errors, all "Delete `␍`" (CRLF) across nearly every file.
- **Root Cause**: Files were created/edited on Windows (CRLF line endings), but Prettier is configured for LF.
- **Resolution**: Not yet resolved. `npm run format` (Prettier `--write`) should fix all instances.
- **Prevention**: Configure Prettier to handle line endings: `"endOfLine": "auto"` in `.prettierrc`, or ensure editor saves as LF. Add a `.gitattributes` file: `* text=auto eol=lf`.

### 2026-06-27: 7-step workflow was underspecified for complex tasks
- **Situation**: The original 7-step workflow skipped pre-work (read rules, search knowledge), had no approval gate, no validation step, and no report requirement.
- **Root Cause**: Assumed all tasks are simple code changes. Didn't account for complex multi-step operations needing planning, approval, validation, and reporting.
- **Resolution**: Replaced with 15-step execution pipeline covering full task lifecycle from context load to final report.
- **Prevention**: The 15-step pipeline is now the single standard — simpler workflows were not adequate.

### 2026-06-27: Vite config comment warns against manual plugin duplication
- **Situation**: `vite.config.ts` has a comment warning not to manually add plugins (tanstackStart, viteReact, tailwindcss, etc.) because `@lovable.dev/vite-tanstack-config` already includes them.
- **Lesson**: Always trust bundled config presets. Adding duplicate plugins causes build failures. Use `defineConfig({ vite: { plugins: [...] } })` for extras.
- **Prevention**: When extending Vite config, check the preset's documentation first. Only add plugins NOT already included.

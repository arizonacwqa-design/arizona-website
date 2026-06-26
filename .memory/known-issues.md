# Known Issues

## Format
```
### [ID] Short Title
- **Severity**: [Critical | High | Medium | Low]
- **Area**: Which part of the system
- **Description**: What's wrong
- **Impact**: What breaks or degrades
- **Workaround**: How to work around it
- **Fix plan**: Planned resolution (if any)
```

---

### [KI-001] CRLF line endings cause 6108 Prettier errors
- **Severity**: Medium
- **Area**: Code quality / linting
- **Description**: `npm run lint` reports 6108 `prettier/prettier` errors across all source files — all "Delete `␍`" (CRLF line endings where LF expected).
- **Impact**: Cannot get clean lint output. Errors drown out real issues.
- **Workaround**: Run `npm run format` to auto-fix, or use `--fix` flag.
- **Fix plan**: Add `"endOfLine": "auto"` to `.prettierrc` or add `.gitattributes` with `* text=auto eol=lf`. Then run `npm run format` once to normalize all files.

### [KI-002] No .env.example file
- **Severity**: Low
- **Area**: Configuration
- **Description**: Repository has no `.env.example` documenting required environment variables.
- **Impact**: Unclear what env vars are needed for local development or deployment.
- **Workaround**: Check Netlify dashboard and `wrangler.jsonc` for expected variables.
- **Fix plan**: Create `.env.example` with documented variables (e.g., Cloudflare account ID, API keys).

### [KI-003] No feature branch strategy defined
- **Severity**: Low
- **Area**: Git / workflow
- **Description**: All development happens directly on `main`. No branch protection, no PR workflow.
- **Impact**: Risk of breaking production directly. No code review process.
- **Workaround**: Use `git stash` or careful incremental commits.
- **Fix plan**: Establish feature branch workflow with PRs and branch protection rules in GitHub.

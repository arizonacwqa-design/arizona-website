# Development Rules

## Architecture Compliance
- Follow the existing architecture defined in `.memory/architecture.md` — do not introduce new patterns without ADR
- Maintain file-based routing in `src/routes/` — do not add manual route configs outside TanStack Router
- Use TanStack Query for server state, React state for UI state — no Redux or external state libs
- Keep SSR entry at `src/server.ts` — do not change the server bootstrap without ADR

## Dependency Discipline
- **No unnecessary dependencies** — every new package must justify its addition vs. existing capabilities
- Prefer Radix UI primitives over new component libraries — we already have 40+ primitives
- Prefer Tailwind CSS over style libraries or CSS-in-JS
- Before adding a dep: check if `lodash`, `date-fns`, or existing utils already cover the need
- Run `npm ls <package>` to verify a dep isn't already transitive before adding it directly

## Code Conventions
- **TypeScript**: Strict mode, `zod` for runtime validation, no `any`, no `as` casting without reason
- **React**: Functional components, hooks over classes, named exports (no default exports)
- **Imports**: Use `@/*` path alias for `src/`
- **Styling**: Tailwind CSS v4 utility classes, `tw-animate-css` for keyframe animations, no CSS modules
- **Animations**: GSAP for complex scroll-triggered animations, Lenis for smooth scroll
- **Error handling**: Use `error-capture.ts` for error boundaries, `zod` for input validation
- **No secrets in code**: All config via `import.meta.env.VITE_*` or server-side env vars

## File Organization
- Page components → `src/routes/` (file-based routing)
- Feature sections → `src/components/` (one file per section)
- Shared UI → `src/components/ui/` (Radix primitives)
- Business logic → `src/lib/`
- Custom hooks → `src/hooks/`
- Assets → `src/assets/`

## Execution Pipeline
All work MUST follow the 15-step pipeline defined in `.memory/workflows.md`:
1. Read .memory → 2. Read /rules → 3. Search /knowledge → 4-8. Analyze, plan, get approval → 9-11. Execute, validate, test → 12-15. Update memory, docs, commit, report

## Pre-Commit Checks
1. `npm run lint` — must be clean (fix with `npm run format` if CRLF errors)
2. `npm run build` — must succeed for structural changes
3. No `console.log` — use `error-capture.ts` for logging
4. No commented-out code
5. No hardcoded URLs, keys, or secrets

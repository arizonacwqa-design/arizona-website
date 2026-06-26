# Quality Rules

## Code Reusability
- Extract shared logic into `src/lib/` — don't duplicate across components
- Create custom hooks (`src/hooks/`) for reusable stateful logic
- Use Radix UI primitives (`src/components/ui/`) for shared UI patterns — don't rebuild from scratch
- Parameterize components via props and composition — avoid rigid hardcoded implementations
- Prefer small, focused functions over large monolithic ones

## Duplication Avoidance
- Before writing new code: grep for existing implementations that do something similar
- If the same pattern appears 3+ times: extract it into a shared utility or hook
- Use the "Rule of Three" — third occurrence means it's time to abstract
- Watch for duplication in:
  - Type definitions (share via `src/lib/types.ts` or Zod schemas)
  - API call patterns (use TanStack Query hooks)
  - Animation configurations (use shared GSAP timeline configs)
  - Form validation schemas (use shared Zod schemas)

## Modular Structure
- Each file should have a single responsibility
- Components should be presentational or container — not both
- Business logic belongs in `src/lib/`, not inside components
- Side effects belong in hooks, not in render functions
- Keep imports clean — no deep relative imports (`../../../`), use `@/*` path alias

## Code Quality Checks
- **TypeScript strict mode** must compile without errors
- **No `any` types** — use `unknown` with type guards if type is uncertain
- **No `eslint-disable` comments** without justification comment
- **No magic numbers or strings** — extract to named constants
- **No `setTimeout`/`setInterval`** without cleanup in useEffect returns
- **No large components** (>300 lines) — extract sub-components

## Performance Awareness
- Memoize expensive computations with `useMemo` and `useCallback`
- Virtualize long lists if rendering 100+ items
- Lazy-load routes and heavy components with React.lazy
- Optimize images — use appropriate formats (WebP), sizes, and lazy loading
- Monitor bundle size — avoid importing entire libraries when tree-shakeable imports exist

## Verification
- `npm run lint` must be clean before any commit
- `npm run build` must succeed for structural changes
- New code should follow existing patterns — check `.memory/project.md` for conventions
- Review `known-issues.md` before starting to avoid reintroducing fixed bugs

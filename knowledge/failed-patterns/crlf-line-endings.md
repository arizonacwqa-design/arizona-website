# Failed Pattern: CRLF Line Endings

## What Was Attempted
Running `npm run lint` to verify code quality before committing.

## What Went Wrong
6108 `prettier/prettier` errors — every single `.ts`, `.tsx`, `.json`, and config file flagged with "Delete `␍`" (carriage return). The error count drowns out all other lint warnings.

## Root Cause
Windows default line endings (CRLF) vs. Prettier expectation of LF. When files are created or edited on Windows (including via the AI agent's write tool), they may be saved with `\r\n` line endings. Prettier's default `endOfLine` setting is `lf`, so every line in every file is flagged.

## Detection
First run of `npm run lint` after project initialization. Output showed 6108 errors, all `prettier/prettier` with "Delete `␍`".

## Prevention
Two approaches:
1. **`.prettierrc`: Add `"endOfLine": "auto"`** — Prettier will respect the OS default (LF on Mac/Linux, CRLF on Windows)
2. **`.gitattributes`: Add `* text=auto eol=lf`** — Git normalizes to LF on commit, even if edited as CRLF locally

After configuration change, run `npm run format` once to normalize all existing files.

## Status
Unresolved — fix planned but not yet applied.

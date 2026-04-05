---
name: format-check
description: Run Prettier and ESLint across the monorepo and fix any issues. Use after making changes to ensure code quality.
model: haiku
allowed-tools: Bash, Read
---

# Format & Lint Check

Run formatting and linting across the monorepo, fixing any issues found.

## Process

1. Run `pnpm format` to auto-format all files with Prettier
2. Run `pnpm lint` to check for ESLint errors
3. If lint errors exist, report them clearly so they can be fixed
4. Summarize: how many files formatted, any lint issues remaining

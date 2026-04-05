# Kiterail Websites Monorepo

Turborepo + pnpm monorepo hosting multiple Next.js sites with a shared design system.

## Commands

- Install: `pnpm install`
- Build all: `pnpm turbo build`
- Dev all: `pnpm turbo dev`
- Build one site: `pnpm --filter @kiterail/<site> build`
- Dev one site: `pnpm --filter @kiterail/<site> dev`
- Lint: `pnpm lint`
- Format: `pnpm format`
- Format check: `pnpm format:check`
- Clean: `pnpm turbo clean`

## Structure

```
apps/              — Each site is a Next.js app
  kiterail/        — Brochure site (first site)
packages/
  ui/              — Shared component library (Button, Container, Section, Card)
  tailwind-config/ — Shared Tailwind v4 preset with CSS variable theming
  tsconfig/        — Shared TypeScript configs (base.json, nextjs.json)
  eslint-config/   — Shared ESLint flat config (base, react, nextjs presets)
```

## Adding a New Site

Use `/scaffold-site <name>` to generate a new site with all boilerplate.

## Skills

- `/scaffold-site <name>` — create a new Next.js site in the monorepo
- `/add-page <site> <path>` — add a page to an existing site
- `/update-content <description>` — edit text content on a page (uses Haiku to save tokens)
- `/preview-site [name]` — start dev server and screenshot a site (uses Haiku)
- `/format-check` — run Prettier + ESLint across the repo (uses Haiku)

## Conventions

- Package manager: **pnpm** (never npm or yarn)
- All sites import from `@kiterail/ui` for shared components
- Per-site theming via CSS custom properties (`--color-brand-*`) in each site's `globals.css`
- Next.js App Router only (no Pages Router)
- TypeScript strict mode everywhere
- Static generation by default; SSR only when needed

## Security

- NEVER place Claude config, CLAUDE.md, or .claude/ contents into any file under `apps/` or `packages/ui/` that gets built into site output
- No Claude-related text, references, or metadata should appear in rendered HTML, page content, or build artifacts
- `.claude/`, `CLAUDE.md`, and `.mcp.json` live at the repo root and are not imported by any app — keep it that way

## Commit Rules

- Do NOT include `Co-Authored-By` lines in commit messages
- Write concise messages focused on the "why"

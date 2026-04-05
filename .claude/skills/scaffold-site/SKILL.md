---
name: scaffold-site
description: Create a new Next.js site in the monorepo with shared design system, Tailwind theming, and standard page structure. Use when adding a new website to apps/.
allowed-tools: Read, Write, Edit, Bash, Glob, Grep, Agent
---

# Scaffold a New Site

Create a new Next.js site in the monorepo at `apps/$0/`.

## Input

- `$0` — site slug (kebab-case, e.g. `livejournal-clone`, `portfolio`)
- `$1` — (optional) one-line site description. If omitted, ask the user.

## Prerequisites

Before scaffolding, verify:

1. `apps/$0/` does not already exist
2. The monorepo root `pnpm-workspace.yaml` includes `"apps/*"`
3. `packages/ui/` and `packages/tailwind-config/` exist

## Process

### Step 1 — Gather context

Read these files to understand current patterns:

- `apps/kiterail/package.json` — dependency versions and scripts
- `apps/kiterail/app/layout.tsx` — layout structure
- `apps/kiterail/app/globals.css` — how theming overrides work
- `apps/kiterail/tsconfig.json` — path aliases
- `apps/kiterail/next.config.ts` — transpile config
- `apps/kiterail/postcss.config.mjs` — PostCSS setup
- `apps/kiterail/eslint.config.mjs` — ESLint config

### Step 2 — Choose brand colors

Ask the user what brand colors they want for the new site, or suggest a palette based on the site's purpose. Define CSS custom properties `--color-brand-50` through `--color-brand-950`.

### Step 3 — Create the site

Create the following files, mirroring the kiterail app structure but customized for the new site:

```
apps/$0/
├── app/
│   ├── components/
│   │   ├── header.tsx      # Site nav with brand name and links
│   │   └── footer.tsx      # Site footer with copyright
│   ├── globals.css         # @import tailwindcss + brand color overrides
│   ├── layout.tsx          # Root layout with fonts, metadata
│   └── page.tsx            # Home page using @kiterail/ui components
├── public/                 # Static assets (empty to start)
├── next.config.ts          # transpilePackages: ["@kiterail/ui"]
├── package.json            # @kiterail/web-$0, workspace deps
├── postcss.config.mjs      # @tailwindcss/postcss
├── eslint.config.mjs       # uses @kiterail/eslint-config nextjs preset
└── tsconfig.json           # extends @kiterail/tsconfig/nextjs.json
```

Key rules:

- Package name must be `@kiterail/$0` (e.g. `@kiterail/livejournal-clone`)
- Import shared components from `@kiterail/ui`
- Override brand colors in `globals.css` using CSS custom properties
- Use the same dependency versions as the kiterail app
- Include `"use client"` directive only in components that need interactivity (e.g. header with mobile menu)
- Include `@kiterail/eslint-config` and `eslint` in devDependencies
- Add `lint` and `format` scripts matching the kiterail app pattern

### Step 4 — Install and verify

Run:

```bash
pnpm install
pnpm --filter @kiterail/$0 build
```

Fix any build errors before proceeding.

### Step 5 — Report

Tell the user:

1. What was created and where
2. How to run the dev server: `pnpm --filter @kiterail/$0 dev`
3. How to customize: edit `app/globals.css` for colors, `app/page.tsx` for content
4. Remind them to add site-specific pages as needed

## Important Notes

- Always use `@kiterail/ui` components (Button, Container, Section, Card) — do not duplicate them locally
- Each site gets its own brand color palette via CSS custom properties
- Keep the `globals.css` import order: `@import "tailwindcss"` first, then `@import "@kiterail/ui/globals.css"`
- The home page should be a reasonable starting point for the site's purpose, not just a copy of kiterail

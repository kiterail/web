---
paths:
  - "apps/**"
---

# App Development Rules

- Every site imports shared components from `@kiterail/ui` — do not recreate Button, Container, Section, or Card locally
- Brand theming is done via CSS custom properties (`--color-brand-*`) in each site's `globals.css`
- Use Next.js App Router (not Pages Router)
- Only add `"use client"` when the component actually needs client-side interactivity
- Static generation is the default — only use server-side rendering when truly needed
- Dev server: `pnpm --filter @kiterail/<site-name> dev`
- Build: `pnpm --filter @kiterail/<site-name> build`

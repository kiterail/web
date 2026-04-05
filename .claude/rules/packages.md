---
paths:
  - "packages/**"
---

# Shared Package Rules

- `packages/ui/` components must be generic and site-agnostic — use CSS custom properties for theming, never hardcode site-specific colors
- Export all public components from `packages/ui/src/index.ts`
- Components use `className` prop for extension, not wrapper divs
- `packages/tailwind-config/` content paths must include `../../packages/ui/src/**` so shared components get Tailwind classes
- Changes to shared packages affect all sites — test across apps before committing

---
name: add-page
description: Add a new page to an existing site with consistent layout, header, footer, and shared UI components.
model: sonnet
allowed-tools: Read, Write, Edit, Glob, Grep
---

# Add a Page

Add a new page to an existing site in the monorepo.

## Input

- `$0` — site name (e.g. `kiterail`)
- `$1` — page path (e.g. `about`, `services/consulting`, `blog`)

## Process

### Step 1 — Read the site's existing layout

Read these to match the site's patterns:
- `apps/$0/app/layout.tsx` — root layout
- `apps/$0/app/page.tsx` — home page for style reference
- `apps/$0/app/components/header.tsx` — check nav links
- `apps/$0/app/components/footer.tsx` — footer pattern

### Step 2 — Create the page

Create `apps/$0/app/$1/page.tsx` with:
- Appropriate metadata export (title, description)
- Import and use Header + Footer from the site's components
- Import shared components from `@kiterail/ui` (Container, Section, etc.)
- Placeholder content appropriate for the page's purpose
- Only add `"use client"` if the page needs interactivity

### Step 3 — Update navigation

Add the new page to the nav links in `apps/$0/app/components/header.tsx`.

### Step 4 — Report

Tell the user what was created and how to view it.

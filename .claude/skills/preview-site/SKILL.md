---
name: preview-site
description: Start a site's dev server and take a screenshot to preview it. Use to visually check a site after changes.
model: haiku
allowed-tools: Bash, Read, mcp__Claude_Preview__preview_start, mcp__Claude_Preview__preview_screenshot, mcp__Claude_Preview__preview_click, mcp__Claude_Preview__preview_resize
---

# Preview Site

Start a site's dev server and capture a visual preview.

## Input

- `$0` — site name (e.g. `kiterail`). Defaults to `kiterail` if omitted.

## Process

1. Call `preview_start` with name `$0` (or `kiterail` if no argument)
2. Wait a moment, then take a screenshot with `preview_screenshot`
3. If the user asks to check mobile, use `preview_resize` to 375x812 and screenshot again
4. Report what you see — layout issues, broken styles, etc.

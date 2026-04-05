---
name: update-content
description: Update text content on an existing page — headings, copy, metadata, links. Use for content edits that don't change structure.
model: haiku
allowed-tools: Read, Edit, Grep
---

# Update Content

Make content changes to an existing page without altering structure or layout.

## Input

- `$ARGUMENTS` — natural language description of what to change (e.g. "change the hero heading on kiterail to 'Ship Faster'")

## Process

1. Parse the user's request to identify which site and page to edit
2. Read the target file
3. Make the requested text changes using Edit — headings, copy, metadata, links, etc.
4. Do NOT change layout, components, styling, or imports unless explicitly asked
5. Summarize what was changed

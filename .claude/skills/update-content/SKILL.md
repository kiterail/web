---
name: update-content
description: Update text content on an existing page — headings, copy, metadata, links. Proposes changes for review before applying.
model: haiku
allowed-tools: Read, Edit, Grep
---

# Update Content

Make content changes to an existing page without altering structure or layout.

## Input

- `$ARGUMENTS` — natural language description of what to change (e.g. "change the hero heading on kiterail to 'Ship Faster'")

## Process

1. Parse the user's request to identify which site and page to edit
2. Read the target file and the voice guide at `.claude/rules/voice.md`
3. **If the user provided exact wording**, apply it directly with Edit
4. **If the user described a change without exact wording**, draft the proposed text and present it for review. Do NOT edit files until the user approves the wording.
5. Do NOT change layout, components, styling, or imports unless explicitly asked
6. After edits are approved and applied, summarize what was changed

## Voice

Follow the writing guidelines in `.claude/rules/voice.md` when drafting new copy. Key points: warm and confident tone, no em dashes, no halting cadence, no formulaic AI phrases. Read it aloud mentally — if it sounds like a LinkedIn post, rewrite it.

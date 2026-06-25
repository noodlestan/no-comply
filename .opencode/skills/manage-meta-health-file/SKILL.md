---
name: manage-meta-health-file
description: Manages meta/health.md of a project
---

# Skill: Manage meta/health.md

## Goal

Generate or update `meta/health.md` from a template.

Used to track technical debt and known issues.

## When To Use

When asked to create or update a meta health file for a project.

Suggest when the context is already populated with details about the project and the target meta file is missing or outdated.

## Instructions

### Before you start

Definition: a project is a package, library, application, or tool containing a `meta` directory.

Use session context as source of truth, not current `meta/health.md`.

Assume context is already populated with project details.

Do not scan the filesystem unless info is missing, outdated, or inconsistent. Ask before scanning.

### Step 1: Generate fresh report

Open `./template.md`.

Template has `## Category` headings and example items. Examples only show format: terse bullets with leading #tags.

For each category:

- discard if not applicable
- always preserve category
- extract relevant items from context
- include only issues (no positive statements)
- each item = single bullet as in template

Move most important items to top of each category (only within category, no cross-ranking).

Present draft before continuing.

### Step 2: Compare

Skip if no existing `meta/health.md`.

Open existing file and compare with new report. Output proposed additions, deletions, and changes.

Prefer latest report format if template changed.

If recategorising, explain changes so nothing is lost.

Present before continuing.

### Step 3: Update

Write `meta/health.md`.

Set current date/time.

Set `by` to a short agent/env/session id (ask if unknown).

## Output

Write `meta/health.md` at project root.

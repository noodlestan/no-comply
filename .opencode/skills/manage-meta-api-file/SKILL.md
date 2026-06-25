---
name: manage-meta-api-file
description: Manages meta/api.md of a project
---

# Skill: Manage meta/api.md

## Goal

Generate or update `meta/api.md` — a minimal summary of entry point, exports, main APIs, and helpers.

## When To Use

When asked to create or update a meta api file for a project.

Suggest when the context is already populated with details about the project and the target meta file is missing or outdated.

## Instructions

### Before you start

Definition: a project is a package, library, application, or tool containing a `meta` directory.

Use session context as source of truth, not current `meta/api.md`.

Assume context is already populated with project details.

Do not scan the filesystem unless info is missing, outdated, or inconsistent. Ask before scanning.

### Step 1: Generate draft

From available context, extract:

- **Entry point** — main import path
- **Exports summary** — factories, helpers, types
- **Main API** — name, simplified signature, description
- **Helpers** — a few representative examples with simplified signature and description

Present draft before continuing.

### Step 2: Compare

Skip if no existing `meta/api.md`.

Open existing file and compare with the draft. Output proposed additions, deletions, and changes.

Prefer latest draft format if the structure changed.

Present before continuing.

### Step 3: Update

Write `meta/api.md`.

Set current date/time.

Set `by` to a short agent/env/session id (ask if unknown).

## Output

Write `meta/api.md` at project root.

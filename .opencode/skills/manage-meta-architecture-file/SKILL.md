---
name: manage-meta-architecture-file
description: Manages meta/architecture.md of a project
---

# Skill: Manage meta/architecture.md

## Goal

Generate or update `meta/architecture.md` — design principles, layering, dependency flow, and external/peer dependencies.

## When To Use

When asked to create or update a meta architecture file for a project.

Suggest when the context is already populated with details about the project and the target meta file is missing or outdated.

## Instructions

### Before you start

Definition: a project is a package, library, application, or tool containing a `meta` directory.

Use session context as source of truth, not current `meta/architecture.md`.

Assume context is already populated with project details.

Do not scan the filesystem unless info is missing, outdated, or inconsistent. Ask before scanning.

### Step 1: Generate draft

From available context, extract:

- **Design principles** — 2-3 key ones, no filler
- **Layering diagram** — text-based, direction arrows
- **Dependency flow** — who imports whom, circular deps note
- **External dependencies**
- **Peer dependencies**

Present draft before continuing.

### Step 2: Compare

Skip if no existing `meta/architecture.md`.

Open existing file and compare with the draft. Output proposed additions, deletions, and changes.

Prefer latest draft format if the structure changed.

Present before continuing.

### Step 3: Update

Write `meta/architecture.md`.

Set current date/time.

Set `by` to a short agent/env/session id (ask if unknown).

## Output

Write `meta/architecture.md` at project root.

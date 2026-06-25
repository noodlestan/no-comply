---
name: manage-meta-modules-file
description: Manages meta/modules.md of a project
---

# Skill: Manage meta/modules.md

## Goal

Generate or update `meta/modules.md` — a tree of non-index, non-private source files with one-line scope descriptions.

## When To Use

When asked to create or update a meta modules file for a project.

Suggest when the context is already populated with details about the project and the target meta file is missing or outdated.

## Instructions

### Before you start

Definition: a project is a package, library, application, or tool containing a `meta` directory.

Use session context as source of truth, not current `meta/modules.md`.

Assume context is already populated with project details.

Do not scan the filesystem unless info is missing, outdated, or inconsistent. Ask before scanning.

### Step 1: Generate draft

From available context, produce a module map — a text tree of the source directory excluding:

- Index files (barrel re-exports)
- Contents of `private/` folders
- Contents of `parts/` or `functions/` folders

Each listed file gets a one-line description of its scope/responsibility.

Present draft before continuing.

### Step 2: Compare

Skip if no existing `meta/modules.md`.

Open existing file and compare with the draft. Output proposed additions, deletions, and changes.

Prefer latest draft format if the structure changed.

Present before continuing.

### Step 3: Update

Write `meta/modules.md`.

Set current date/time.

Set `by` to a short agent/env/session id (ask if unknown).

## Output

Write `meta/modules.md` at project root.

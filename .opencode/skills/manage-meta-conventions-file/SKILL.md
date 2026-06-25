---
name: manage-meta-conventions-file
description: Manages meta/conventions.md of a project
---

# Skill: Manage meta/conventions.md

## Goal

Generate or update `meta/conventions.md` — naming, file organization, API design patterns, and typing conventions.

## When To Use

When asked to create or update a meta conventions file for a project.

Suggest when the context is already populated with details about the project and the target meta file is missing or outdated.

## Instructions

### Before you start

Definition: a project is a package, library, application, or tool containing a `meta` directory.

Use session context as source of truth, not current `meta/conventions.md`.

Assume context is already populated with project details.

Do not scan the filesystem unless info is missing, outdated, or inconsistent. Ask before scanning.

### Step 1: Generate draft

From available context, extract:

- **Naming conventions**
- **File organization patterns** — one function per file, barrel exclusions, etc.
- **API design patterns** — factory, options object, preset system, debug modes, error handling
- **Typing conventions** — generics, unions over enums, dynamic scope types, visibility

Present draft before continuing.

### Step 2: Compare

Skip if no existing `meta/conventions.md`.

Open existing file and compare with the draft. Output proposed additions, deletions, and changes.

Prefer latest draft format if the structure changed.

Present before continuing.

### Step 3: Update

Write `meta/conventions.md`.

Set current date/time.

Set `by` to a short agent/env/session id (ask if unknown).

## Output

Write `meta/conventions.md` at project root.

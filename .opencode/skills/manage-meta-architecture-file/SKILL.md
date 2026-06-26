---
name: manage-meta-architecture-file
description: Manages `meta/architecture.md` for a project
---

---

# Skill: Manage `meta/architecture.md`

## Goal

Generate or update `meta/architecture.md` for a project.

## When to use

Use when asked to create or update the meta architecture file for a `<project>`.

Suggest using this skill when the conversation already contains enough project context and the target file is missing, incomplete, outdated, or degraded.

## Instructions

### Before you start

A **project** is a package, library, application, or tool containing a `meta` directory.

1. IGNORE THE CURRENT `meta/architecture.md`.
2. Scan the project filesystem.
3. Assume the current file may be incomplete, outdated, or inconsistent. Note important omissions and mismatches.
4. Read:
   - `<root>/architecture/no-comply.md` (global)
   - the project group architecture file for `<project>`

Example: for `main/libs/purrception-lang-ts`, read:

- `<root>/architecture/no-comply.md`
- `<root>/architecture/purrtrait.md` (extends the global architecture)

---

## Step 1: Generate draft

Generate a new version of `meta/architecture.md` with the following structure.

### h2. Project Context

- include an extends note, for example:
  `> This file extends [purrception architecture](../../../architecture/purrception.md).`
- explain what this project contributes to the ecosystem
- explain what it consumes, from where, and what it provides, to whom
- describe API categories, not individual symbols

### h2. Design principles **(MOST IMPORTANT SECTION)**

- concise principles in the style of `<root>/architecture/*.md`
- group under h3 headings when useful
- explain how global or project-group principles are applied _in this project_
- do **not** restate principles already defined in parent architecture files
- add project-specific principles and patterns

### h2. Structure

Include **exactly one** filesystem tree diagram.

Rules:

- **Exactly one tree diagram. Never more than one.**
- **No tree diagrams anywhere else in the document.**
- **The Structure section is the only place allowed to contain a diagram.**
- maximum 15 lines
- keep comments short (max width ~120 chars)
- abstract repeated siblings into placeholders, e.g.
  `<entity>/ // Button, and 12 more`
- show the _shape_ of the project, not exhaustive filenames
- **Do not expand `helpers/`.** If needed, mention a single helper as an example and stop there.
- **Never show the contents of `helpers/`.**
- **Never expand `private/`.**
- **Never show the contents of `private/`.**
- **Do not mention `private/` at all.**
- mention type files only if the project is primarily about types
- add a short paragraph below the diagram only if needed to explain conventions or placeholders

### h2. Main patterns

- identify the major API entity categories exposed by the project
- group peer modules by the kind of entities they provide (Components, Providers, Mixins, Language Layouts, etc.)
- small libraries may only need one or two short entries

### h2. Layers

- **No diagrams.**
- terse text only
- one short paragraph or up to 7 small bullet points
- describe import direction between layers
- mention circular dependencies or layering inconsistencies if present

### h2. External dependencies

- notes about dependencies
- notes about peer dependencies

### h3. Tradeoffs

Short bullets:

- category
- what
- why

Produce the draft from the available context and the existing file.

---

## Step 2: Review

Verify all of the following before continuing:

- Design principles and Main patterns contain meaningful project-specific information.
- **There are no diagrams anywhere except `## Structure`.**
- **There is exactly one tree diagram in the entire document.**
- **Exactly one. Never two. Never zero.**
- **The only diagram is the filesystem tree inside `## Structure`.**
- the tree has at most 15 lines
- very small projects may legitimately have a 3-line tree
- **`helpers/` is never expanded. Never list its contents. At most, mention a single helper by name as an example.**
- **`private/` is never expanded and its contents are never shown. Do not include `private/` in the tree.**
- there are no tables
- there is no bragging, speculation, or unsupported claims
- small projects may naturally produce a very small architecture file

Present the draft before continuing.

---

## Step 3: Update

Write `meta/architecture.md`.

Update:

- current date/time
- `by` using a short agent/environment/session identifier (ask if unknown)

## Output

Write `meta/architecture.md` at the project root.

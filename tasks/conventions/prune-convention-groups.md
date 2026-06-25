# Task: aggregate-conventions

## Status

COMPLETED

## Task description

Consolidate all per-project `meta/conventions.md` files across the monorepo into group-level convention documents. Each group gets a single file under `<root>/conventions/<group-name>.md` that concatenates the conventions of every project in that group — preserving the original content verbatim with a project heading prefix per section.

Groups and their projects:

### purrception

- @purrception/primitives — `libs/purrception-primitives`
- @purrception/lang-ts — `libs/purrception-lang-ts`
- @purrception/lang-ts-extract — `cli/purrception-lang-ts-extract`
- @purrception/source-fs — `cli/purrception-source-fs`

### purrtrait

- @purrtrait/code-layout — `libs/purrtrait-code-layout`
- @purrtrait/lang-ts — `libs/purrtrait-lang-ts`
- @purrtrait/client-tsx — `libs/purrtrait-client-tsx`
- @purrtrait/solid-code — `libs/purrtrait-solid-code`
- @purrtrait/view-tsx — `libs/purrtrait-view-tsx`

### purrpose

- @purrpose/client-babel — `libs/purrpose-client-babel`
- @purrpose/client-babel-preset-solidjs — `libs/purrpose-client-babel-solidjs-preset`

### no-comply demo

- @no-comply/standard-ui-demo — `apps/standard-ui-demo`
- @no-comply/build-tools — `tools/build`
- @no-comply/meta — `libs/meta`
- @no-comply/meta-extract — `cli/meta-extract`

### no-comply libs

- @no-comply/solid-primitives — `libs/solid-primitives`
- @no-comply/solid-accessibility — `libs/solid-accessibility`
- @no-comply/solid-contexts — `libs/solid-contexts`
- @no-comply/solid-composables — `libs/solid-composables`
- @no-comply/solid-dev-tools — `libs/solid-dev-tools`
- @no-comply/standard-ui — `libs/standard-ui`

### Output files

Create one file per group under `<workspace-root>/conventions/`:

```
conventions/
├── purrception.md
├── purrtrait.md
├── purrpose.md
├── no-comply-demo.md
└── no-comply-libs.md
```

Each output file must:

1. Start with a top-level heading matching the group name (e.g. `# purrception`).
2. For each project in the group, emit:
   - `## @org/project-name`
   - `**Path:** <relative-path>`
   - A blank line, then the **verbatim** contents of that project's `meta/conventions.md`.
3. Separate projects with a blank line.
4. If a project has no `meta/conventions.md`, skip it and note the omission as a comment.

## Skill list

### Skill: manage-meta-conventions-file

ID: file:///Users/andretorgal/sources/noodlestan/context-ui/.opencode/skills/manage-meta-conventions-file/SKILL.md

Description: Manages meta/conventions.md of a project

When to use: When creating, updating, or reviewing conventions documentation for a project

### Skill: inspect-project

ID: file:///Users/andretorgal/sources/noodlestan/context-ui/.opencode/skills/inspect-project/SKILL.md

Description: Iteratively analyzes a code project and produces a structured summary of architecture, APIs, and conventions

When to use: When a deeper understanding of a project's structure is needed

## Prompt

### Objective

Consolidate all per-project `meta/conventions.md` files into group-level convention documents under `conventions/` at the monorepo root.

### Context

The monorepo root is `/Users/andretorgal/sources/noodlestan/context-ui`. Each project listed below has a `meta/conventions.md` file already present. Your job is to read those files and concatenate them into group files.

Do **not** modify any source files. Only create the group files under `conventions/`.

### Groups

**purrception** — files to read:

- `libs/purrception-primitives/meta/conventions.md`
- `libs/purrception-lang-ts/meta/conventions.md`
- `cli/purrception-lang-ts-extract/meta/conventions.md`
- `cli/purrception-source-fs/meta/conventions.md`

**purrtrait** — files to read:

- `libs/purrtrait-code-layout/meta/conventions.md`
- `libs/purrtrait-lang-ts/meta/conventions.md`
- `libs/purrtrait-client-tsx/meta/conventions.md`
- `libs/purrtrait-solid-code/meta/conventions.md`
- `libs/purrtrait-view-tsx/meta/conventions.md`

**purrpose** — files to read:

- `libs/purrpose-client-babel/meta/conventions.md`
- `libs/purrpose-client-babel-solidjs-preset/meta/conventions.md`

**no-comply demo** — files to read:

- `apps/standard-ui-demo/meta/conventions.md`
- `tools/build/meta/conventions.md`
- `libs/meta/meta/conventions.md`
- `cli/meta-extract/meta/conventions.md`

**no-comply libs** — files to read:

- `libs/solid-primitives/meta/conventions.md`
- `libs/solid-accessibility/meta/conventions.md`
- `libs/solid-contexts/meta/conventions.md`
- `libs/solid-composables/meta/conventions.md`
- `libs/solid-dev-tools/meta/conventions.md`
- `libs/standard-ui/meta/conventions.md`

### Output format

Write to `<root>/conventions/<group-name>.md` where `<group-name>` is one of:
`purrception`, `purrtrait`, `purrpose`, `no-comply-demo`, `no-comply-libs`.

Each output file must follow this structure:

```markdown
# purrception

## @purrception/primitives

**Path:** libs/purrception-primitives

<verbatim content of meta/conventions.md>

## @purrception/lang-ts

**Path:** libs/purrception-lang-ts

<verbatim content of meta/conventions.md>

... etc
```

- Preserve the original `meta/conventions.md` content exactly as-is (including frontmatter if any).
- Do not edit, summarize, or reformat the original content.
- If a file is missing, add a comment `<!-- SKIPPED: <path> — no meta/conventions.md found -->`.
- Create the `conventions/` directory if it does not exist.

### Verification

After writing all files, verify:

- `conventions/purrception.md` exists and contains 4 project sections.
- `conventions/purrtrait.md` exists and contains 5 project sections.
- `conventions/purrpose.md` exists and contains 2 project sections.
- `conventions/no-comply-demo.md` exists and contains 4 project sections.
- `conventions/no-comply-libs.md` exists and contains 6 project sections.

Each section heading should match the npm scope/name (e.g. `@purrception/primitives`).

### Non-interactive

This task is self-contained. Do not ask questions. Do not request clarification. If something is missing, use your best judgment and proceed.

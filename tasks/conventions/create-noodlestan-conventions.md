# Task: create-noodlestan-conventions

## Status

DONE

## Changes

Created consolidated monorepo-wide conventions guide at `conventions/noodlestan.md` (328 lines) organized by project type.

### Details

- Created `conventions/_aggregate.md` — verbatim concatenation of all 5 group files with source markers (491 lines)
- Created `conventions/_noodlestan.md` — working consolidated file with 6 project type sections (preserved)
- Created `conventions/noodlestan.md` — final polished guide (copied from `_noodlestan.md`)
- Organized by 6 project types: SolidJS UI Libraries, Metadata Extraction, Code Layout & Rendering, In-Browser Compilation, Demo Application, Build Tooling
- General section with shared conventions across project types
- All formatting rules applied: no h4+, no tables, bold-topic bullets, consistent inline code, no HTML comments

## Notes

None.

## Task description

Consolidate all per-group `conventions/<group>.md` files into a single comprehensive monorepo-wide conventions guide at `conventions/_noodlestan.md` (intermediate) and `conventions/noodlestan.md` (final). The guide categorizes conventions by **project type** (e.g. metadata extraction libraries, UI component libraries, demo apps, CLI tools, build tooling) rather than by package group, with a **General** section for conventions shared across multiple project types.

**Target files:**

- `conventions/_aggregate.md` (intermediate — concatenation with source markers)
- `conventions/_noodlestan.md` (intermediate — the working output)
- `conventions/noodlestan.md` (final polished output)

**Sources:** Read only the 5 group conventions files:

- `conventions/purrception.md`
- `conventions/purrtrait.md`
- `conventions/purrpose.md`
- `conventions/no-comply-demo.md`
- `conventions/no-comply-libs.md`

Also read the 5 task files (`tasks/consolidate-{purrception,purrtrait,purrpose,no-comply-demo,no-comply-libs}-conventions.md`) and the repository `AGENTS.md` at workspace root to understand what each project type does.

Do **not** read per-project `meta/conventions.md` files or inspect source code.

### Process

Follow these steps in order, consolidating intermediate results before moving to the next step:

#### Step 1 — Create `conventions/_aggregate.md`

Concatenate all 5 group conventions files into a single file. For each group, prefix with a source marker heading:

```markdown
<!-- SOURCE: conventions/purrception.md -->

<verbatim content of conventions/purrception.md>

---

<!-- SOURCE: conventions/purrtrait.md -->

<verbatim content of conventions/purrtrait.md>

---

<!-- SOURCE: conventions/purrpose.md -->

...
```

Separate each group section with `---`. Do not modify the content of any group file — concatenate verbatim.

#### Step 2 — Create `conventions/_noodlestan.md` (skeleton)

Create an empty skeleton with this structure:

```markdown
# noodlestan code conventions

## Introduction

<!-- TBD: short description of what this document is -->

## General

Conventions shared across all project types.

### API & Types

### Modules and Files

### Naming

### Others

## <ProjectType1>

Description of what this project type encompasses and which packages belong to it.

### <SpecificCategory>

Project-type-specific conventions that don't fit the standard categories.

### API & Types

### Modules and Files

### Naming

## <ProjectType2>

...
```

The heading `SubCategory 2` referenced below is a placeholder — replace it with the actual domain-specific category name for each project type (discovered in step 3). For example, a UI library type might have a "Component Patterns" or "Styling" specific category, while a metadata extraction type might have "Pipeline Patterns".

The structure per project type is:

- `h3 <SpecificCategory>` — domain-specific category unique to this project type
- `h3 API & Types` — project-type-specific API and typing conventions
- `h3 Modules and Files` — project-type-specific module/file organization
- `h3 Naming` — project-type-specific naming conventions

#### Step 3 — Identify project types

Read `tasks/consolidate-*-conventions.md` and `AGENTS.md` to understand what each project does. Categorize them into meaningful project types. Read the introductory descriptions in each `conventions/<group>.md` file as well.

Suggested starting point (you may refine):

| Project type                | Packages                                                                                                                                                                 | Source group(s)     |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------- |
| **Metadata Extraction**     | @purrception/primitives, @purrception/lang-ts, @purrception/lang-ts-extract, @purrception/source-fs                                                                      | `purrception.md`    |
| **Code Layout & Rendering** | @purrtrait/code-layout, @purrtrait/lang-ts, @purrtrait/client-tsx, @purrtrait/solid-code, @purrtrait/view-tsx                                                            | `purrtrait.md`      |
| **In-browser Compilation**  | @purrpose/client-babel, @purrpose/client-babel-preset-solidjs                                                                                                            | `purrpose.md`       |
| **UI Component Libraries**  | @no-comply/solid-primitives, @no-comply/solid-accessibility, @no-comply/solid-contexts, @no-comply/solid-composables, @no-comply/solid-dev-tools, @no-comply/standard-ui | `no-comply-libs.md` |
| **Demo & Documentation**    | @no-comply/standard-ui-demo                                                                                                                                              | `no-comply-demo.md` |
| **Build Tooling**           | @no-comply/build-tools                                                                                                                                                   | `no-comply-demo.md` |
| **Meta Services & CLI**     | @no-comply/meta, @no-comply/meta-extract                                                                                                                                 | `no-comply-demo.md` |

For each project type, identify a specific domain category (the "SubCategory 2" placeholder) — e.g.:

- **Metadata Extraction**: "Pipeline Patterns"
- **Code Layout & Rendering**: "Visitor / Dispatch Patterns"
- **In-browser Compilation**: "Preset / Compiler Patterns"
- **UI Component Libraries**: "Component & Mixin Patterns"
- **Demo & Documentation**: "App Shell Patterns"
- **Build Tooling**: "Plugin Composition Patterns"
- **Meta Services & CLI**: "Entity Extraction Patterns"

If a group is too heterogeneous (like `no-comply-demo.md` which spans 3 distinct project types), split it into the appropriate project type sections — each convention item should be placed under the correct project type.

Populate the project type sections in `conventions/_noodlestan.md` with descriptions of what each type encompasses.

#### Step 4 — Distribute items

For each `conventions/<group>.md`, read every convention item and place it into `conventions/_noodlestan.md`:

- If the convention is shared across **multiple project types** (e.g., "PascalCase for types" appears in both UI libs and metadata extraction), place it under **General** > the appropriate h3 category.
- If the convention is specific to **one project type**, place it under that project type's section, in the appropriate h3 subcategory.

For each convention item, preserve the source group as an HTML comment:

```markdown
- **Types**: PascalCase (`EntityDataBase`, `DocsData`)
  <!-- source: purrception -->
```

#### Step 5 — Hoist duplicates to General

After distributing all items, scan each project type section for repeated or highly similar conventions. If the same convention appears in 2+ different project type sections, hoist it to the **General** section under the matching h3 category. Remove the duplicates from the project type sections.

When hoisting, make the rule more generic: combine examples from across projects and use language that applies broadly. Add the source comments from all contributing project types.

#### Step 6 — Final pass

Read the entire `conventions/_noodlestan.md` and apply these formatting rules:

**6.1 Format rules**

- Maximum heading depth: `h3`. No `h4` or deeper.
- All leaf items are bullet points (`- `) starting with a **bold topic** prefix before the colon.
- No tables — convert any remaining tables to bold-topic-bullet format.
- No `---` horizontal rules.
- No per-project sections — this is a unified guide organized by project type.
- All code examples use backtick inline code formatting.
- Consistent vocabulary and tone throughout — choose one term per concept (e.g., "types" not "types/interfaces").
- All examples formatted as inline code within the sentence. At most one example per rule.
- Short, declarative sentences.

Also add a **short, terse introduction** (2–4 sentences) under the `## Introduction` heading explaining what this document is.

Remove any `<!-- SOURCE: ... -->` comments — they were only needed during step 1 aggregation.

#### Step 7 — Output

Copy `conventions/_noodlestan.md` to `conventions/noodlestan.md`. Preserve `_noodlestan.md` as-is.

Do **not** delete `conventions/_aggregate.md`.

### Verification

After completing, verify the output file `conventions/noodlestan.md` meets these criteria:

- [ ] No duplicate convention items
- [ ] No `h4` or deeper headings
- [ ] Every leaf item is a bullet with a bold topic prefix (`- **Topic**: ...`)
- [ ] No tables present
- [ ] File starts with `# noodlestan code conventions`
- [ ] Introduction present under `## Introduction` (2–4 sentences)
- [ ] All examples use consistent inline code formatting
- [ ] General section exists with h3 categories: **API & Types**, **Modules and Files**, **Naming**, **Others**
- [ ] At least 3 project type sections exist (with their own h3 subcategories)
- [ ] No `<!-- SOURCE: ... -->` comments remain in `noodlestan.md`
- [ ] `conventions/_noodlestan.md` preserved as-is
- [ ] `conventions/_aggregate.md` exists and contains all 5 group files concatenated with markers

## Skill list

### Skill: manage-meta-conventions-file

ID: file:///Users/andretorgal/sources/noodlestan/context-ui/.opencode/skills/manage-meta-conventions-file/SKILL.md

Description: Manages meta/conventions.md of a project

When to use: When creating, updating, or reviewing conventions documentation for a project

## Prompt

### Objective

Consolidate all 5 per-group conventions files (`conventions/*.md`) into a single comprehensive monorepo-wide conventions guide at `conventions/_noodlestan.md` and `conventions/noodlestan.md`, organized by **project type** rather than by package group.

### Context

The workspace root is `/Users/andretorgal/sources/noodlestan/context-ui`.

**Input files** (each is a polished, deduplicated conventions guide for its group):

| File                            | Group scope                                                                                                                              |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `conventions/purrception.md`    | @purrception — metadata extraction packages (primitives, lang-ts, lang-ts-extract, source-fs)                                            |
| `conventions/purrtrait.md`      | @purrtrait — code layout & rendering packages (code-layout, lang-ts, client-tsx, solid-code, view-tsx)                                   |
| `conventions/purrpose.md`       | @purrpose — in-browser compilation packages (client-babel, client-babel-preset-solidjs)                                                  |
| `conventions/no-comply-demo.md` | @no-comply demo-scope (standard-ui-demo, build-tools, meta, meta-extract)                                                                |
| `conventions/no-comply-libs.md` | @no-comply SolidJS UI libraries (solid-primitives, solid-accessibility, solid-contexts, solid-composables, solid-dev-tools, standard-ui) |

**Reference files** (read these to understand project types and package natures):

- `tasks/consolidate-purrception-conventions.md` — describes @purrception packages
- `tasks/consolidate-purrtrait-conventions.md` — describes @purrtrait packages
- `tasks/consolidate-purrpose-conventions.md` — describes @purrpose packages
- `tasks/consolidate-no-comply-demo-conventions.md` — describes demo-scope packages
- `tasks/consolidate-no-comply-libs-conventions.md` — describes libs packages
- `AGENTS.md` — monorepo overview with package map and domain descriptions

### Process steps

Follow each step to completion before moving to the next:

#### Step 1 — Create `conventions/_aggregate.md`

Read all 5 group files. Concatenate their content verbatim into a single file. Prefix each group section with:

```markdown
<!-- SOURCE: conventions/purrception.md -->

[verbatim content]

---
```

Separate groups with `---`. Do not modify any group content.

#### Step 2 — Create `conventions/_noodlestan.md` skeleton

Write the skeleton structure:

```markdown
# noodlestan code conventions

## Introduction

<!-- TBD -->

## General

Conventions shared across all project types.

### API & Types

### Modules and Files

### Naming

### Others

## <ProjectType1>

Description...

### <SpecificCategory>

### API & Types

### Modules and Files

### Naming
```

Leave the `<!-- TBD -->` introduction and empty h3 sections. This is the working file you will populate.

#### Step 3 — Identify project types

Read the reference files (`tasks/consolidate-*-conventions.md` and `AGENTS.md`) to categorize the packages into meaningful project types. The `no-comply-demo` group is heterogeneous — split it into its constituent project types (demo app, build tooling, meta services, CLI).

Determine a specific domain category name for each project type (replacing the `SubCategory 2` placeholder). For example, UI component libraries might have a "Component & Mixin Patterns" category, while metadata extraction might have "Pipeline Patterns."

Populate each project type `h2` with a brief description of what it encompasses and which packages belong to it. Replace the generic `### <SpecificCategory>` with the actual domain category name for that type.

#### Step 4 — Distribute items

For each convention item in each `conventions/<group>.md`, determine whether it is:

- **General** — applies across multiple project types → place under `## General` > appropriate h3
- **Project-type-specific** — applies to only one project type → place under that project type's section

The same convention item may appear in multiple group files (e.g., "PascalCase for types" is in both purrception and no-comply-libs). In that case, evaluate whether it's truly general or whether each project type has a specific flavor.

Add a `<!-- source: <group> -->` comment on each item during this step to track provenance.

#### Step 5 — Hoist duplicates to General

Scan all project type sections for repeated conventions. If a convention (with the same rule and examples) appears in 2+ project type sections:

1. Remove it from each project type section
2. Add it to the matching h3 category under General
3. Generalize the wording to fit all project types

If only specific examples differ but the rule is the same, keep the rule generic and combine examples.

#### Step 6 — Final pass

Apply formatting rules to the entire file:

- Max heading depth h3
- Bullets with bold topic prefix
- No tables, no ---
- Consistent vocabulary and tone
- One example per rule
- Inline code for examples
- Write a 2–4 sentence introduction under `## Introduction`
- Remove all `<!-- source: ... -->` comments

#### Step 7 — Output

Copy `conventions/_noodlestan.md` to `conventions/noodlestan.md`. Preserve `conventions/_noodlestan.md`.

### Format rules

- Maximum heading depth: `h3`. No `h4` or deeper.
- All leaf items: bullet points (`- `) starting with a **bold topic** prefix.
- No tables — convert any remaining tables to bold-topic-bullet format.
- No `---` horizontal rules.
- All code examples use backtick inline code formatting.
- Consistent vocabulary and tone throughout.
- One example per rule, formatted as inline code.

### Output files

| File                         | Purpose                                                         |
| ---------------------------- | --------------------------------------------------------------- |
| `conventions/_aggregate.md`  | Verbatim concatenation with source markers (intermediate)       |
| `conventions/_noodlestan.md` | Working output with all steps applied (preserved)               |
| `conventions/noodlestan.md`  | Final polished conventions guide (copied from `_noodlestan.md`) |

### Verification

After completing, verify `conventions/noodlestan.md`:

- [ ] No duplicate convention items
- [ ] No `h4` or deeper headings
- [ ] Every leaf item is a bullet with a bold topic prefix (`- **Topic**: ...`)
- [ ] No tables present
- [ ] File starts with `# noodlestan code conventions`
- [ ] Introduction present under `## Introduction` (2–4 sentences)
- [ ] All examples use consistent inline code formatting
- [ ] General section exists with h3 categories: **API & Types**, **Modules and Files**, **Naming**, **Others**
- [ ] At least 3 project type sections exist
- [ ] No `<!-- SOURCE: ... -->` comments remain
- [ ] `conventions/_noodlestan.md` preserved as-is
- [ ] `conventions/_aggregate.md` exists and contains all 5 group files

### Non-interactive

This task is self-contained. Do not ask questions. Do not request clarification. If something is ambiguous, use your best judgment and proceed.

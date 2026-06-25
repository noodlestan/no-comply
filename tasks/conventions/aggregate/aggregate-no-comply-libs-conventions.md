# Task: aggregate-no-comply-libs-conventions

## Status

DONE

## Changes

Reduced file from 656 lines (6 verbatim project sections) to 154 lines — unified, deduplicated conventions guide for @no-comply libs scope.

### Details

- Merged 6 per-project sections into unified guide under 4 h2 groups: **API & Types**, **Modules and Files**, **Naming**, **Others**
- Converted tables and horizontal rules to bold-topic-bullet format (no tables, no `---`)
- Removed h4+ headings
- Added 1-sentence introduction after h1
- All examples use consistent inline code formatting

## Notes

None.

## Task description

Analyze `conventions/no-comply-libs.md` — a concatenation of 6 per-project `meta/conventions.md` files from the @no-comply libs scope — and transform it into a unified, deduplicated project-level conventions guide.

**Target file:** `conventions/no-comply-libs.md` at workspace root (`/Users/andretorgal/sources/noodlestan/context-ui/conventions/no-comply-libs.md`)

**Scope:** Only the target file. Do not inspect source code, do not modify any other files, do not read the original per-project `meta/conventions.md` files.

**Expected output:** An updated `conventions/no-comply-libs.md` that replaces the current verbatim-concatenation format with a polished, unified conventions guide.

**Note on coherence:** These 6 projects are all SolidJS libraries with significant overlap in conventions (same patterns for PascalCase components, camelCase functions, `type` over `interface`, CSS Modules, etc.) but each project also has domain-specific conventions. Expect substantial deduplication. Where a convention is shared across ≥3 projects, state it as a shared rule. Where it applies to a single project, prefix with project context (e.g. "**Accessibility controllers**:").

### Process

Follow these steps in order, consolidating intermediate results before moving to the next step:

1. **Consolidate category list** — Scan every `## @no-comply/*` project section and extract the `h2` headings within each project. These are the categories. Build a single flat list of categories with item counts per category.

2. **Merge low-count categories** — Review categories with ≤2 items. Merge them into sibling categories unless the items are important enough to stand alone. Document merge decisions.

3. **Nest under h2/h3 grouping** — Build a hierarchy where the `h2` level uses exactly these groups, in this order and with these exact labels: **API & Types**, **Modules and Files**, **Naming**, **Others**. Each `h3` under the `h2` is a category from step 2. No level deeper than `h3`. Discard any original category that doesn't fit or merge it under "Others".

4. **Aggregate patterns** — Under each category, collect every convention item from all 6 projects. When the same convention appears across projects, pick the best-worded variant. Do not deduplicate yet — just aggregate.

5. **Deduplicate** — Merge identical or overlapping items. This is the critical step for this group — there will be many shared patterns. Example format:

   ```markdown
   - **Components**: PascalCase (`Button`, `CodeBlock`, `DebugDrawer`)
   - **Functions / hooks**: camelCase (`createFlexBase`, `useSystemContext`, `createAriaAlert`)
   ```

6. **Rewrite** — Polish every item:
   - Mark all examples uniformly as inline code
   - Provide at most one example per rule
   - If examples differ across projects for the same rule, split into separate rules
   - Ensure consistent tone and vocabulary throughout
   - Use short declarative statements consistently

7. **Review** — Read the entire file and add a short, terse introduction (1–3 sentences).

### Format rules

- Maximum 2 heading levels deep (`##` h2, `###` h3)
- All leaf items are bullet points (`- `)
- Each bullet starts with a **bold topic** before the colon
- No tables (convert any existing tables to the bold-topic-bullet format)
- No `---` horizontal rules
- No per-project sections — this is a unified guide for the entire @no-comply libs scope

### Verification

After completing, verify:

- No duplicate convention items remain
- No h4 or deeper headings exist
- Every leaf item is a bullet with a bold topic prefix
- No tables remain
- File starts with `# no-comply libs` as h1
- Introduction present after the h1 heading
- Examples use consistent inline-code formatting
- The 4 h2 groups exist in order: **API & Types**, **Modules and Files**, **Naming**, **Others**

## Skill list

### Skill: manage-meta-conventions-file

ID: file:///Users/andretorgal/sources/noodlestan/context-ui/.opencode/skills/manage-meta-conventions-file/SKILL.md

Description: Manages meta/conventions.md of a project

When to use: When creating, updating, or reviewing conventions documentation for a project

## Prompt

### Objective

Transform `conventions/no-comply-libs.md` from a verbatim concatenation of 6 per-project conventions files into a unified, deduplicated, polished conventions guide for the @no-comply libs scope.

### Context

The workspace root is `/Users/andretorgal/sources/noodlestan/context-ui`.

The file `conventions/no-comply-libs.md` currently contains 6 project sections with verbatim content from:

| Project                        | Original source                                |
| ------------------------------ | ---------------------------------------------- |
| @no-comply/solid-primitives    | `libs/solid-primitives/meta/conventions.md`    |
| @no-comply/solid-accessibility | `libs/solid-accessibility/meta/conventions.md` |
| @no-comply/solid-contexts      | `libs/solid-contexts/meta/conventions.md`      |
| @no-comply/solid-composables   | `libs/solid-composables/meta/conventions.md`   |
| @no-comply/solid-dev-tools     | `libs/solid-dev-tools/meta/conventions.md`     |
| @no-comply/standard-ui         | `libs/standard-ui/meta/conventions.md`         |

Your job is to read the current `conventions/no-comply-libs.md`, analyze its content, and rewrite it into a clean unified conventions guide. Do **not** read the original per-project `meta/conventions.md` files — the concatenated file already contains all the content you need.

Do not modify any files other than `conventions/no-comply-libs.md`.

### Process steps

Follow each step in sequence, consolidating the intermediate representation before proceeding:

#### Step 1 — Consolidate category list

Scan every `## @no-comply/*` project section and extract the `h2` headings within each project section. Build a flat list with item counts per category.

This group has many categories — some shared across all projects (Naming, File Organization, API Design Patterns, Typing Conventions) and some unique (e.g. "Internal vs External Boundaries", "Cross-module Import Rules", "CSS / SCSS Conventions", "Error Handling", "Component Pattern", "Mixin Pattern", "Styling Conventions", "Import Ordering", "Style Conventions", "Component / Mixin patterns").

#### Step 2 — Merge low-count categories

If any category has ≤2 items and is not critically important, merge it into the nearest sibling category. Document your merge decisions.

#### Step 3 — Nest under h2/h3 grouping

Create the following h2 groups exactly as listed, in this order:

1. **API & Types**
2. **Modules and Files**
3. **Naming**
4. **Others**

Under each, create `h3` subheadings for the categories from step 2. Place project-specific or cross-cutting categories (e.g. "Component Pattern", "Mixin Pattern", "CSS / SCSS Conventions", "Error Handling", "Import Ordering") under **Others**.

Do not exceed h3 depth — no `h4` or deeper.

#### Step 4 — Aggregate patterns

For each category, collect every convention item from every project. Do not deduplicate yet. When the same convention appears across projects, prefer the best-worded variant.

IMPORTANT: when aggregating items keep a number of occurrences at the end of the string and always add them up.

#### Step 5 — Deduplicate

Go through each category and merge identical or overlapping items. This is the most important step — there is heavy overlap across these 6 projects:

- **Same rule, different wording** → keep the most precise version
- **Same topic, complementary details** → merge into one bullet with bold topic prefix, combine examples
- **Same topic, different examples** → split into sibling bullets under the same topic prefix

When a convention applies to only one or two sub-projects, prefix with project context:

```markdown
- **Accessibility controllers**: factory pattern `createAriaAlert`, `createAriaPressable`
- **Composables**: `createExposable` pattern for reactive prop sharing
```

When a convention is shared by most projects, state it generically:

```markdown
- **Components**: PascalCase (`Button`, `CodeBlock`, `DebugDrawer`)
- **Types**: `type` over `interface` — no `interface` or `enum` declarations
- **CSS Modules**: `*.module.scss` for component-scoped styles
```

IMPORTANT

- get rid of the counts

#### Step 6 — Rewrite

Polish every item:

- Evaluate rule to understand if it's too specific for this namespace level
- Mark all examples as inline code
- Provide at most one example per rule
- Split into separate rules if examples differ
- Use consistent vocabulary throughout — choose one term per concept (e.g., "types" not "types/interfaces")
- Convert any remaining tables to the bold-topic-bullet format

#### Step 7 — Review

Add a short, terse introduction (1–3 sentences) right after the `# no-comply libs` heading. Example:

```markdown
# no-comply libs

This document consolidates naming, file organization, API design, and typing conventions across all @no-comply SolidJS libraries. It serves as a single source of truth for contributors.
```

Then read the entire file one more time and fix any remaining inconsistencies or awkward phrasing.

### Format rules

- Maximum heading depth: h3. No h4 or deeper.
- All leaf items: bullet points (`- `) starting with a **bold topic**
- No tables — convert any remaining tables to bold-topic-bullet format
- No `---` horizontal rules
- No per-project sections — this is a unified guide
- All code examples use backtick inline code formatting
- Consistent vocabulary and tone throughout

### Output

Overwrite `conventions/no-comply-libs.md` with the final result.

### Verification

After writing, verify the file meets these criteria:

- [ ] No duplicate convention items
- [ ] No h4 or deeper headings
- [ ] Every leaf item is a bullet with a bold topic prefix (`- **Topic**: ...`)
- [ ] No tables present
- [ ] File starts with `# no-comply libs`
- [ ] Introduction present after h1 heading (1–3 sentences)
- [ ] All examples use consistent inline code formatting
- [ ] The 4 h2 groups exist in order: **API & Types**, **Modules and Files**, **Naming**, **Others**

### Non-interactive

This task is self-contained. Do not ask questions. Do not request clarification. If something is ambiguous, use your best judgment and proceed.

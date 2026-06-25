# Task: aggregate-no-comply-demo-conventions

## Status

DONE

## Changes

Reduced file from 311 lines (4 verbatim project sections) to 102 lines — unified conventions guide for @no-comply demo scope.

### Details

- Unified under 4 h2 groups: **API & Types**, **Modules and Files**, **Naming**, **Others**
- Replaced all tables, `---` rules, and per-project headers with bold-topic-bullet format
- Merged identical/overlapping conventions across projects
- Added project-context annotations where conventions are project-specific
- Added 1-sentence introduction after h1

## Notes

None.

## Task description

Analyze `conventions/no-comply-demo.md` — a concatenation of 4 per-project `meta/conventions.md` files from the @no-comply demo scope — and transform it into a unified, deduplicated project-level conventions guide.

**Target file:** `conventions/no-comply-demo.md` at workspace root (`/Users/andretorgal/sources/noodlestan/context-ui/conventions/no-comply-demo.md`)

**Scope:** Only the target file. Do not inspect source code, do not modify any other files, do not read the original per-project `meta/conventions.md` files.

**Expected output:** An updated `conventions/no-comply-demo.md` that replaces the current verbatim-concatenation format with a polished, unified conventions guide.

**Note on coherence:** The 4 projects in this group serve very different roles (a demo app, a build tool, a meta library, a CLI orchestrator). Not all conventions will overlap. The goal is still a unified guide — be explicit where a convention applies to only one sub-project (prefix with the project context if needed, e.g. "**Build tool plugins**:").

### Process

Follow these steps in order, consolidating intermediate results before moving to the next step:

1. **Consolidate category list** — Scan every `## @no-comply/*` project section and extract the `h2` headings within each project. These are the categories (e.g. "Naming Conventions", "File Organization Patterns", "API Design Patterns", "Typing Conventions"). Build a single flat list of categories with item counts per category.

2. **Merge low-count categories** — Review categories with ≤2 items. Merge them into sibling categories unless the items are important enough to stand alone. Document merge decisions.

3. **Nest under h2/h3 grouping** — Build a hierarchy where the `h2` level uses exactly these groups, in this order and with these exact labels: **API & Types**, **Modules and Files**, **Naming**, **Others**. Each `h3` under the `h2` is a category from step 2. No level deeper than `h3`. Discard any original category that doesn't fit or merge it under "Others".

4. **Aggregate patterns** — Under each category, collect every convention item from all 4 projects. When the same convention appears across projects, pick the best-worded variant. Do not deduplicate yet — just aggregate.

5. **Deduplicate** — Merge identical or overlapping items. Where two items say the same thing with different wording, keep one (prefer the most precise). Where items share a topic but differ in detail, merge into a single bullet with a bold topic prefix before the colon. Where examples differ significantly, split into sibling bullets under the same topic prefix. Example format:

   ```markdown
   - **Components**: PascalCase (`AppServicesProvider`, `SidebarNav`)
   - **Factories**: `create*` prefix (`createAppNavigation`, `createBuild`)
   ```

6. **Rewrite** — Polish every item:
   - Mark all examples uniformly as inline code
   - Provide at most one example per rule
   - If examples differ across projects for the same rule, split into separate rules
   - Ensure consistent tone and vocabulary throughout
   - Use short declarative statements consistently

7. **Review** — Read the entire file and add a short, terse introduction (1–3 sentences) stating that this file consolidates conventions for @no-comply demo-scope packages.

### Format rules

- Maximum 2 heading levels deep (`##` h2, `###` h3)
- All leaf items are bullet points (`- `)
- Each bullet starts with a **bold topic** before the colon
- No tables (convert any existing tables to the bold-topic-bullet format)
- No `---` horizontal rules
- No per-project sections — this is a unified guide for the entire no-comply demo scope

### Verification

After completing, verify:

- No duplicate convention items remain
- No h4 or deeper headings exist
- Every leaf item is a bullet with a bold topic prefix
- No tables remain
- File starts with `# no-comply demo` as h1
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

Transform `conventions/no-comply-demo.md` from a verbatim concatenation of 4 per-project conventions files into a unified, deduplicated, polished conventions guide for the @no-comply demo scope.

### Context

The workspace root is `/Users/andretorgal/sources/noodlestan/context-ui`.

The file `conventions/no-comply-demo.md` currently contains 4 project sections with verbatim content from:

| Project                     | Original source                             |
| --------------------------- | ------------------------------------------- |
| @no-comply/standard-ui-demo | `apps/standard-ui-demo/meta/conventions.md` |
| @no-comply/build-tools      | `tools/build/meta/conventions.md`           |
| @no-comply/meta             | `libs/meta/meta/conventions.md`             |
| @no-comply/meta-extract     | `cli/meta-extract/meta/conventions.md`      |

Your job is to read the current `conventions/no-comply-demo.md`, analyze its content, and rewrite it into a clean unified conventions guide. Do **not** read the original per-project `meta/conventions.md` files — the concatenated file already contains all the content you need.

Do not modify any files other than `conventions/no-comply-demo.md`.

### Process steps

Follow each step in sequence, consolidating the intermediate representation before proceeding:

#### Step 1 — Consolidate category list

Scan every `## @no-comply/*` project section and extract the `h2` headings within each project section (e.g., "Naming Conventions", "File Organization Patterns", "API Design Patterns", "Typing Conventions", "Styling Conventions", "Composition Patterns", "Error Handling", "Internal vs External Boundaries"). Build a flat list with item counts per category.

Note: This group is diverse. Some projects have unique categories (e.g. @no-comply/standard-ui-demo has "Styling Conventions", @no-comply/meta-extract has "Composition Patterns"). Every category should be captured.

#### Step 2 — Merge low-count categories

If any category has ≤2 items and is not critically important, merge it into the nearest sibling category. Document your merge decisions.

#### Step 3 — Nest under h2/h3 grouping

Create the following h2 groups exactly as listed, in this order:

1. **API & Types**
2. **Modules and Files**
3. **Naming**
4. **Others**

Under each, create `h3` subheadings for the categories from step 2. Place project-specific categories (e.g. "Styling Conventions", "Composition Patterns", "Internal vs External Boundaries") under **Others** if they don't fit the first three groups.

Do not exceed h3 depth — no `h4` or deeper.

#### Step 4 — Aggregate patterns

For each category, collect every convention item from every project. Do not deduplicate yet. When the same convention appears across projects, prefer the best-worded variant.

IMPORTANT: when aggregating items keep a number of occurrences at the end of the string and always add them up.

#### Step 5 — Deduplicate

Go through each category and merge identical or overlapping items:

- **Same rule, different wording** → keep the most precise version
- **Same topic, complementary details** → merge into one bullet with bold topic prefix, combine examples
- **Same topic, different examples** → split into sibling bullets under the same topic prefix

When a convention applies to only one sub-project (e.g., build-tools uses `.mjs` files, meta uses kebab-case), prefix the bullet with the project context:

```markdown
- **Source files (build-tools)**: kebab-case + `.mjs` (`resolve-package-json.mjs`)
- **Source files (meta)**: kebab-case (`create-no-comply-meta-service.ts`)
```

Example format for shared bullets:

```markdown
- **Components**: PascalCase (`AppServicesProvider`, `SidebarNav`)
- **Factories**: `create*` prefix (`createAppNavigation`, `createBuild`)
```

IMPORTANT

- get rid of the counts

#### Step 6 — Rewrite

Polish every item:

- Evaluate rule to understand if it's too specific for this namespace level
- Mark all examples as inline code
- Provide at most one example per rule
- Split into separate rules if examples differ
- Use consistent vocabulary throughout
- Convert any remaining tables to the bold-topic-bullet format

#### Step 7 — Review

Add a short, terse introduction (1–3 sentences) right after the `# no-comply demo` heading. Example:

```markdown
# no-comply demo

This document consolidates naming, file organization, API design, and typing conventions across @no-comply demo-scope packages (standard-ui-demo, build-tools, meta, meta-extract). It serves as a single source of truth for contributors.
```

Then read the entire file one more time and fix any remaining inconsistencies.

### Format rules

- Maximum heading depth: h3. No h4 or deeper.
- All leaf items: bullet points (`- `) starting with a **bold topic**
- No tables — convert any remaining tables to bold-topic-bullet format
- No `---` horizontal rules
- No per-project sections — this is a unified guide
- All code examples use backtick inline code formatting
- Consistent vocabulary and tone throughout

### Output

Overwrite `conventions/no-comply-demo.md` with the final result.

### Verification

After writing, verify the file meets these criteria:

- [ ] No duplicate convention items
- [ ] No h4 or deeper headings
- [ ] Every leaf item is a bullet with a bold topic prefix (`- **Topic**: ...`)
- [ ] No tables present
- [ ] File starts with `# no-comply demo`
- [ ] Introduction present after h1 heading (1–3 sentences)
- [ ] All examples use consistent inline code formatting
- [ ] The 4 h2 groups exist in order: **API & Types**, **Modules and Files**, **Naming**, **Others**

### Non-interactive

This task is self-contained. Do not ask questions. Do not request clarification. If something is ambiguous, use your best judgment and proceed.

# Art Language Guide

## What Is Art

Art is a structured markdown format for defining domain models, project structures, and agent instructions. It provides a consistent way to declare resources, types, and relationships that can be parsed, validated, and transformed.

Art files (`.art`) are the source of truth. Templates (`.tart`) generate outputs from them. Together, they enable artificial-driven development.

NOTE: Any markdown file is also a valid `.art` file. If the `md` file wasn't generated with Art, though, it will require an agent to perform a lot more inference to read resources and interpret instructions.

## File Types

| Extension | Purpose                                                     | Example                  |
| --------- | ----------------------------------------------------------- | ------------------------ |
| `.art`    | Resource definitions — structures, types, records, routines | `project.art`, `bin.art` |
| `.tart`   | Templates — generate outputs from records                   | `namespace-readme.tart`  |
| `.md`     | Guides, WIPs, context files                                 | `_guide.md`, `_wip.md`   |

## Modules

Each `_art/{folder}` is a module — a self-contained set of types and routines for a specific concern.

- **Validation** — Types and routines for discovering artefact files, extracting references, and checking they resolve to existing paths.
- **Structures** — Routines for defining the standard format of Art resource files (how to write routines, types, structures).
- **Discover** — Routines for scanning and listing resources across all domains.

## Structures

| Module     | Structure | File                                       | Purpose                                      |
| ---------- | --------- | ------------------------------------------ | -------------------------------------------- |
| Structures | Routine   | `routines/structures/routine.art`          | Reusable procedure that performs a task      |

## Routines

| Module     | Routine                      | File                                                   | Inputs                                                   | Outputs       | Purpose                                       |
| ---------- | ---------------------------- | ------------------------------------------------------ | -------------------------------------------------------- | ------------- | --------------------------------------------- |
| Discover   | List Resources               | `discover/routines/list-resources.art`                 | `%scope`?                                                | `%resources`  | Scan _guide.md files and compile resource table |
| Discover   | Find Resources               | `discover/routines/find-resources.art`                 | `%kind`?, `%scope`?                                      | `%resources`  | Scan filesystem for resources matching kind   |
| Structures | Write Routine                | `structures/routines/routine.art`                      | `%name`, `%purpose`, `%inputs`, `%outputs`, `%procedure` | `%file`       | Define standard format for routine .art files |
| Validation | Validate Artefact References | `validation/routines/validate-artefact-references.art` | `%project`?, `%path`                                     | `%report`     | Orchestrate the full validation pipeline      |
| Validation | Locate Artefact Files        | `validation/routines/locate-artefact-files.art`        | `%path`                                                  | `%files`      | Discover all .md and .art files under path    |
| Validation | Extract Artefact References  | `validation/routines/extract-artefact-references.art`  | `%files`                                                 | `%references` | Read files and extract references             |
| Validation | Check Reference Paths        | `validation/routines/check-reference-paths.art`        | `%references`                                            | `%broken`     | Verify references resolve to existing files   |
| Validation | Report Validation Results    | `validation/routines/report-validation-results.art`    | `%files`, `%references`, `%broken`                       | `%report`     | Aggregate results and format report           |

## How Routines Work

Each routine is a `.art` file with:

- **Purpose** — what the routine does
- **Inputs** — structures and types the routine requires
- **Outputs** — what the routine produces (if any)
- **Procedure** — step-by-step instructions, may reference other routines

Routines declare detailed workflows under procedure, using `%variables` that match inputs and outputs, or creating their own. Routines can type inputs and outputs with `Structure: ...` or `Type: ...` and can also declare local types. Routines can invoke other routines.

Pattern for invoking routines: `With {input contexts}, execute the **Routine: {name}** to (output contexts or purpose)`.

## Resources, Structures, and Types

- Resources declare themselves with `## {Kind}: {Name}` headings.
- Fields follow `**Field:** value` patterns.
- Types compose via `List (Type: X)` or `Structure: Y` references.
- Templates use `{{%field}}` interpolation and `::TEMPLATE for each` loops.

### Inheritance

All Structures extend `Structure: Structure` which extends `Structure: Base`.

Fields are inherited from Base

- `id` – inferrable from heading
- `name` – inferrable from heading
- `kind` – inferrable from heading
- `purpose`
- `description`
- `status`
- `examples`

Fields are inherited from Structure

- `composes` – Another Structure
- `primitive` – PrimitiveName
- `shape` – One of WIP (primitive types)

## Declaring Records

Records are `.art` files of any kind that adhere to a `Structure`.

When creating a resource of `Kind`, always locate the `Structure: {Kind}` art file and remember all structures inherit from `Structure: Base` and `Structure: Structure`.

Pattern for all resources kinds:

```md
# Module

## {Kind}: {Name}

**Purpose:** ...

**Description:** ...

{structure-specific fields in order}

**{FieldName}:** {inline field value}

**{FieldName}:**

{block field value}
```

Rules:

- `id`, `name`, `kind` are inferred from `## {Kind}: {Name}` — do not declare them.
- Fields are declared in the order defined by the Structure shape.
- References to other resources use `{Kind}: {Name}` format.
- Inline types (e.g. Bin) use nested bullet format:

```md
**Scripts:**

- `build`:
  - `command`: npm run build
  - `purpose`: Build for production.
```

- Compound types (e.g. License) use dot notation:

```md
**License.Short:** Copyright (c) ...

**License.Long:**

MIT License ...
```

## How to Read a Record

1. Open the `.art` file.
2. Read the heading: `## {Kind}: {Name}` → this is the id, name, kind.
3. Read fields in order. Each field is a `**Field:** value` block.
4. Nested types use indentation:
   - Bin: ``- `name`:\n  - `command`: ...\n  - `purpose`: ...``
   - License: `**License.Short**` / `**License.Long**`
5. References to other resources use `{Kind}: {Name}` format.

## How to Modify Records

1. Identify the record file: `_domains/monorepo/{kind}s/{id}.art`
2. Read the structure definition in `_meta/_architect/project/structures/{kind}.art` to know the fields.
3. Edit the record, keeping fields in structure order.
4. Never add `id`, `name`, or `kind` fields — they come from the heading.

## How Templates Work

Templates in `_domains/monorepo/tools/` generate files from records.

- `{{%field}}` — interpolate a field value
- `{%field}` — raw interpolation
- `::TEMPLATE for each` — loop over a list
- `::TEMPLATE make` — filter a list
- `::END` — close a loop

Templates reference record fields directly (e.g. `%package.name`, `%namespace.description`).

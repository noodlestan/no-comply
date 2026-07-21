# Architect Session: Deep Planning for Artificials

> WIP: Add summary fof "table of contents (h2 only)"

## Mandatory Reading

::READ `artificials/_domain/_guide.md` to learn about the domain layout and how records work.
::READ `artificials/_architect/_guide.md` to learn about the data structures (types, shapes, conventions).
::READ `artificials/_architect/_wip.md` to learn about pending meta work (developer routines).
::READ `artificials/_domain/_wip.md` to learn about pending domain work.

## Scope

### Project Context

**$SCOPE:** `artificials/`
**Layer:** monorepo bootstrap
**Goal:** Tools for working with Art files

### Meta Context

**$SCOPE:** `artificials/_architect`
**Layer:** Meta: Art files for modelling and automating monorepos
**Goal:** Art files (structures, routines) for architecting and automating monorepo management.

## Prompt

> You are working in two layers at the same time

- **Project context** — you help build a project: create records, update structures, render templates, scaffold directories.
- **Meta context** — you help improve the system itself: extend types, refine structures, write developer routines, update guides.

Both layers use the same file formats (`.art`, `.tart` for templates and `.md`) and the same conventions. The architect agent reads structures and types to understand what fields exist, reads records to understand what's been built, and reads templates to understand what gets generated.

When you make a change, always ask: does this affect the meta layer (structures, types, guides) or the domain layer (records, templates, tools)?

Do not immidately update both if not previously agree with the user. Typically, perform the change and report with pointers to what might need to be checked and updated as well.

## Project status

> This project is still just an intention and a scaffold in progress.

The artificials project defines the Art language toolchain: parsers, validators, compilers, bundlers, and developer tools.

The domain layer is established:

- **Project record** — Artificials (version, namespaces, scripts, license).
- **Namespace record** — Artificials (path, packages, scripts).
- **Package records** — 5 libraries (primitives, parser, validator, program, bundler) and 5 CLI tools (watcher, bin, tools, language-server, ldev-server).
- **Tool records** — Root README, Cli README, Lib README.
- **Templates** — namespace-readme.tart, cli-readme.tart, lib-readme.tart.
- **Root README** — rendered from template + records.

The architect layer is established:

- **Structures** — Project, Namespace, Package, Package Tool.
- **Types** — Bin, License, Package Tool File.

Pending work:

- Developer routines (Check Package Path Exists, Apply Package Tool) are sketched in `_architect/_wip.md` but not yet implemented as `.art` routine files.
- Package-level templates (per-package README) are not yet rendered — only the root README has been generated.
- No `package.json` files exist yet — they would be generated from records via a NpmPackage tool.
- No `src/` directories exist yet — scaffolding is not automated.
- The template syntax (`::TEMPLATE`) has not been formalised in the art grammar.

## Architect Responsibilities

> WIP: add sentence

### Project Context

#### Structures

Create, extend, or refine structures in `_architect/structures/`.

- **Create** a new structure: define Purpose and Shape fields.
- **Extend** an existing structure: add fields to Shape.
- **Refine** an existing structure: change a field type, rename a field, or remove a field.
- **Relate** structures: add a field that references another structure Example: "`List (Structure: Package)".

When you change structures

- update `_architect/_guide.md` diagram and notes if applicable
- Check if `_domain/` needs to be udpdated as well and ALERT the user

#### Types

Create, extend, or refine types in `_architect/types/`.

- **Create** a new type: define Purpose, Primitive, Shape, and Examples.
- **Extend** an existing type: add fields to Shape.
- **Refine** an existing type: change a field type or description.

Types are referenced in structures, using primitives like List and "generics". Example: "List (Type: Bin)".

When you change types:

- Check structures that might be using them and need updating as well.
- Update `_architect/_guide.md` diagram and notes if applicable
- Check if `_domain/` needs to be udpdated as well and ALERT the user

When you change structures:

- update `_architect/_guide.md` diagram and notes if applicable
- Check if `_domain/` needs to be udpdated as well and ALERT the user

#### Records

Create, update, or delete records in `_domain/{kind}s/`.

- **Create** a new record: follow the structure's Shape order, infer id/name/kind from heading.
- **Update** an existing record: change field values, add new fields, remove fields that are no longer in the structure.
- **Delete** a record: remove the `.art` file.
- **Validate** a record: check that all structure fields are present and in order.

When you create a record that is used in records of a different structure, ensure the parent record references it Example: "Namespace lists its Package".

#### Templates

Create, update, or refine templates in `_domain/templates/`.

- **Create** a new template: define the output format, use `{{%field}}` interpolation and `::TEMPLATE for each` loops.
- **Update** an existing template: add sections, change formatting, fix field references.
- **Refine** a template: improve clarity, add conditional logic, fix path construction.

Templates reference record fields. When you change a structure, check if templates that use those fields need updating.

#### Rendering

Generate files from templates + records.

- **Render** a README: apply namespace-readme.tart to namespace + package records.
- **Render** a package README: apply cli-readme.tart or lib-readme.tart to package records.
- **Dry-run** a render: show what would be generated without writing files.
- **Validate** a render: check that all template variables resolve to actual record fields.

#### Scaffolding

Create directories and files from records.

- **Scaffold** a package directory: create `{namespace.path}{package.path}/` with `src/`, `package.json`, `README.md`.
- **Scaffold** a lib directory: same as package but with bundler-compatible structure.
- **Scaffold** a CLI directory: same as package but with Node.js-compatible structure.

Scaffolding is driven by Tool records (template → target mappings).

### Meta Context

#### Extending the system

Add new capabilities to the architect domain.

- **Add a field** to an existing structure Example: "add `tools` to Packag".
- **Create a new structure** Example: "Package Tool for file generatio".
- **Create a new type** Example: "Package Tool File for template mapping".
- **Move fields** between structures when responsibilities shift Example: "scripts from Package to Namespac".

#### Writing routines

Define reusable procedures in `_architect/` as `.art` routine files.

- **Sketch** a routine in `_architect/_wip.md` first (name, inputs, outputs, purpose, procedure draft).
- **Formalise** a routine into a `.art` file with `# Module` / `## Routine: {name}` sections.
- **Refine** a routine: clarify inputs/outputs, simplify procedure steps, add error handling.

Routines should be idempotent and describe desired state rather than conditional steps.

#### Updating `_guide.md` and `_wip.md` files

Keep documentation in sync with the system.

- **Update `_architect/_guide.md`** when structures, types, or templates change.
- **Update `_domain/_guide.md`** when the directory layout or meta-model changes.
- **Update `_architect/_wip.md`** when pending work is completed or new work is identified.
- **Update `_domain/_wip.md`** when domain work is completed or new work is identified.

## Feedback From Previous Architects

### Architect #1

#### Feedback about the System

Working with `.art` files is straightforward — the heading pattern `## {Kind}: {Name}` makes it easy to locate resources. The `::READ` directives in context files work well for loading prerequisites before interpretation. The separation between structures (schema) and records (instances) is clean and avoids confusion.

**Major doubts:**

- How does the template engine resolve `{namespace.path}{package.path}` — is it string concatenation or path joining?
- What happens when a tool's target path conflicts with another tool's target?
- Can templates reference fields from multiple records (namespace + package) in a single render?

#### Feedback about Art

The `.art` format is readable and consistent. Structures are easy to understand from the Shape section. Types are simple and focused. The dot notation for compound types (`License.Short`) is intuitive.

**Major doubts:**

- Is there a formal grammar for `.art` files, or is it convention-based?
- How are multi-line values (like the License.Long text) parsed — is indentation significant?
- Can types compose other types, or only structures?

#### Feedback about the Project

The `_wip.md` files are useful for tracking pending work. The `_guide.md` files provide good orientation. The separation of `_architect` (meta) and `_domain` (records) is clear.

**Major doubts:**

- Is the developer routines section in `_architect/_wip.md` ready to be formalised into `.art` routine files?
- What's the next priority — scaffolding directories, generating `package.json`, or implementing the routines?

## Command: Consolidate Knowledge After a Session

**Trigger:**

- When the user says "consolidate"
- When the user says "handoff"

**Procedure:**

1. Check each one of these files to see
2. If content is stale,
   1. Prepare an ERROR message
   2. THROW ERROR to user and STOP processing instructions
3. Update `## Project status`
   1. Update the outline of the project
   2. Add new items to the appropriate layer (domain or architect).
   3. Remove completed items from "Pending work".
   4. Add new pending items you identified but didn't complete.
4. Report under `## Architect Responsibilities`
   1. Update Architect Responsibilities to reflect what you did in the session.
   2. Add new items if your responsibilities were extended.
   3. Re-order so that the responsibilities exercised during this session, appear
   4. Do not create new categories — only add bullets under existing ones.
   5. If you think a new category is needed, ALERT the user after your udpates.
5. Add feedback at the the top of `## Feedback From Previous Architects` in this file. Use the template below to create your section.

```md
### Architect {your number}

#### Feedback about the Session

{short paragraph about tasks you performed and deviations from the architecture responsibilities. Example: too many chores performed, lost track of big picture and problem statements}

**Major doubts:** {your major questions, Example: I am tired of rendering templates, can we add a Routine to automate}

#### Feedback about the System

{short paragraph about your experience working with resources in MD and ART files and with processing ::READ directives}

**Major doubts:** {your major questions}

#### Feedback about Art

{short paragraph about your experience working with Art files and the `_architect` layer, its domain, meta structures, types, routines, ...}

**Major doubts:** {your major questions}

#### Feedback about the Project

{short paragraph about your experience working with the project, `_wip.md`, `_guide.md`, knowledge, and artefacts}

**Major doubts:** {your major questions}
```

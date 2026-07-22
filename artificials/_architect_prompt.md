# Architect Session: Deep Planning for Artificials

## Mandatory Reading

::READ `artificials/_domains/monorepo/_guide.md` to learn about the project domain (tools for Working with Art).
::READ `artificials/_meta/_architect/_guide.md` to learn about the Art resources (structures, types, shapes, routines, conventions).
::READ `artificials/_meta/_architect/_wip.md` to learn about pending meta work (typically more structures and routines).
::READ `artificials/_domains/monorepo/_wip.md` to learn about pending project work (typically more architecture decisions, more records and scaffolding).
::READ `artificials/_meta/_developer/_guide.md` to learn about the meta automation tools (typically routines).
::READ `artificials/__architect_history.md` to learn about previous architect feedback (used during handoff to summarise).
::READ `artificials/_meta/_developer/_wip.md` to learn about pending meta automation work (typically more routines).

## Scope

### Project Context

**$SCOPE:** `artificials/`
**Layer:** monorepo bootstrap
**Goal:** Tools for working with Art files

### Meta Context

**$SCOPE:** `artificials/_meta`
**Layer:** Meta: Art files for modelling and automating monorepos
**Goal:** Art files (structures, routines) for architecting and automating monorepo management.

## Prompt

> You are working in two layers at the same time

- **Project context** — you help build a project: create records, update structures, render templates, scaffold directories.
- **Meta context** — you help improve the system itself: extend types, refine structures, write developer routines, update guides.

Both layers use the same conventions and the same file formats (`.art` for meta-programming in the Art language, `.tart` for Art templates and `.md` for agent context files and todos).

## Global Context

**Summarising changes:**

- Report all changed resources as `` `{{%kind}}: {{%name}}` — {{%path}} `` relative to monorepo root.
- Report all guides and wips as `{{%parent_dir}}/{{%file}}.md` — {{%path}} relative to monorepo root.

## Project Vocabulary

- Use project and meta vocabulary when applicable. Examples: "record" instead of "instance", "structure" instead of "model".
- When referring to resources always prefix their `{Kind}: ` prefix and use backticks to avoid ambiguity. Example: "inspect the `Routine: Delete Project` file".

## Project status

> This project has a working tool scaffolding system. The domain layer is stable with complete tool coverage.

The artificials project defines the Art language toolchain: parsers, validators, compilers, bundlers, and developer tools.

The meta layer is established with a module convention (`_meta/{domain}/{module}/`):

- **`_art/`** — 2 modules: Validation (5 routines, 4 types), Structures (1 routine).
- **`_architect/`** — 2 modules: Project (4 structures, 3 types), Design (1 routine).
- **`_developer/`** — 3 modules: Refactor (5 routines, 2 types), Validate (2 routines), Generate (5 routines).

The project layer has tool records for generating package files:

- **README tools** (4): Project, Namespace, Lib, Cli
- **Package tools - shared** (2): License, Dotfiles
- **Package tools - lib** (4): Lib Package Json, Lib Tsconfig, Lib Vite, Lib Vitest
- **Package tools - cli** (3): Cli Package Json, Cli Tsconfig, Cli Tsconfig CJS/ESM
- **Tools namespace** (3): Tools Namespace Readme, Tools Pkg Readme, Tools Package Json

**Namespace renamed:** `Namespace: Artificials` → `Namespace: Art JS` (path: `art-js/`)

Pending work:

- The template syntax (`::TEMPLATE`) has not been formalised in the art grammar.
- Exercise `Apply Package Tools` routine on all packages to generate files.
- **Package Tool Types proposal** — extend Package Tool with Skeleton and Procedural types (see `_architect/_wip.md`).

## Architect Responsibilities

### Project Context

#### Design

Define what the project is: structures, types, records, templates.

- Create, update, or delete records in `_domains/monorepo/records/{kind}s/`.
- Create, update, or refine templates in `_domains/monorepo/tools/`.
- Design routines using `_meta/_architect/design/routines/design-routines.art`.

#### Scaffold and Validate

Generate files from records and templates, and verify they are correct.

- Render a README: apply template to namespace + package records.
- Render a package README: apply template to package records.
- Scaffold a package directory: create `{namespace.path}{package.path}/` with `src/`, `package.json`, `README.md`.
- Run `Routine: Validate Artefact References` to scan a path for broken file references.
- Validate a render: check that all template variables resolve to actual record fields.

### Meta Context

#### Extending the System

Define what projects look like and automate architecture tasks.

- **Project structures and types** — Create, extend, or refine structures in `_meta/_architect/project/structures/` and types in `_meta/_architect/project/types/`. These define the shape of monorepo projects: what fields exist, how they compose, what primitives they use.
- **Architecture routines** — Design and formalise routines in `_meta/_architect/design/`. These automate design tasks: drafting routine specifications, decomposing processes into steps.
- **Developer routines** — Define routines in `_meta/_developer/` modules (refactor, validate, generate). These automate project generation and refactoring: rendering templates, checking state, moving resources between files.

When you add or modify a structure, type, or routine:

- Update the module's `_guide.md` with new entries in the appropriate table.
- Update `_wip.md` if work was completed or new work was identified.
- Follow `Routine: Write Routine` format when creating `.art` files.

## Architect Feedback

### Architect #4

#### Feedback about the Session

Session focused on: (1) namespace rename from Artificials to Art JS with directory restructure, (2) tool file format standardisation (`{{%path}/README.md`), (3) separation of project vs namespace README templates, (4) Package Tool Types proposal for extensible tool system, (5) validation pipeline execution on artefact files.

**Major doubts:** Should Package Tool Sets be recursive (sets within sets)?

#### Feedback about the System

The validation pipeline (`Validate Artefact References`) works but requires manual execution — no CLI entry point yet. Tool file format is now consistent. The `::READ` directives in `_architect_prompt.md` are stable. Guide tables are the source of truth but require manual sync.

**Major doubts:** Should guides be auto-generated from filesystem?

#### Feedback about Art

The `Structure: Package Tool` base type with `extends` field enables clean polymorphism. Templates use `{{%field}}` interpolation consistently. The `::TEMPLATE for each` loop works for scripts. The `With {inputs} execute **Routine: {name}** to capture {outputs}` pattern is clear but verbose.

**Major doubts:** Should routine invocation have a shorthand syntax?

#### Feedback about the Project

Domain layer is stable with complete tool coverage. Meta layer has all developer routines implemented. The `_architect_prompt.md` was updated by parallel architect — may have conflicts with my changes.

**Major doubts:** How to handle concurrent architect sessions without merge conflicts?

### Feedback from previous architects

**Session:** Architect #1 started with tool system discovery, focused on template engine and type composition. Architect #2 started as validation scan, became full meta-layer restructure with format normalisation and module reorganisation. Architect #3 focused on tool scaffolding design with 15 tool records and templates.

**System:** `.art` files clean once normalised. `_guide.md` drifts when files move. `_wip.md` path references go stale. Heading pattern `## {Kind}: {Name}` makes resources easy to locate.

**Art:** Module convention scales well. Types shared across routines justify separate files; local types can co-locate. `Routine: Write Routine` is a useful self-describing pattern.

**Project:** `_architect_prompt.md` was the most stale file. Domain layer stable. Meta layer has working tool system now.

## Commands

### Command: List Resources

**Trigger:**

- When the user says "list resources of {kind}"
- When the user says "list {kind}s"

**Procedure:**

1. With `%scope` (default: `artificials/`) execute **Routine: List Resources**.
2. If `%kind` provided, filter results to matching kind.
3. Present results as table: `domain | module | kind | name | purpose`.

### Command: Find Resources

**Trigger:**

- When the user says "find resources of {kind} in {path}"
- When the user says "find {kind}s"

**Procedure:**

1. With `%kind` and `%scope` (default: `artificials/`) execute **Routine: Find Resources**.
2. Present results as table: `file | kind | name`.

### Command: Draft Handoff

**Trigger:**

- When the user says "consolidate"
- When the user says "draft handoff"

**Procedure:**

1. Prepare `## Project status` content:
   1. Outline the current state of the project.
   2. Add new items to the appropriate layer (domain or architect).
   3. Remove completed items from "Pending work".
   4. List new pending items identified but not completed.
2. Prepare `## Architect Feedback` content:
   1. Add a new section at the top using the template below.
3. Present both prepared sections to the user for review.
4. Do NOT modify `_architect_prompt.md` — wait for user approval.

### Command: Handoff

**Trigger:**

- When the user says "handoff"
- When the user says "wrap up"

**Procedure:**

1. Check each file listed in `## Mandatory Reading` for stale content.
2. If content is stale,
   1. Prepare an ERROR message listing stale files.
   2. THROW ERROR to user and STOP processing instructions.
3. Check context for an approved draft from `Command: Draft Handoff`.
4. If no approved draft found,
   1. Prepare an ERROR message with "No approved draft found. Run Draft Handoff first."
   1. THROW ERROR to user and STOP processing instructions.
5. Apply the approved `## Project status` draft to this file.
6. Apply the approved `## Architect Feedback` draft to this file.
7. Extract the previous architect's feedback from `## Architect Feedback` to `__architect_history.md`.
8. Summarise the feedback of most recent (up to 5) architects in 4 sentences classified by session, system, art, and project. Add the summary under your feedback as `### Feedback from previous architects`.

```md
### Architect {your number}

#### Feedback about the Session

{short paragraph about tasks you performed and deviations from the architecture responsibilities}

**Major doubts:** {your major questions}

#### Feedback about the System

{short paragraph about your experience working with resources in MD and ART files and with processing ::READ directives}

**Major doubts:** {your major questions}

#### Feedback about Art

{short paragraph about your experience working with Art files and the `_meta/` layer, its structures, types, routines, ...}

**Major doubts:** {your major questions}

#### Feedback about the Project

{short paragraph about your experience working with the project, `_wip.md`, `_guide.md`, knowledge, and artefacts}

**Major doubts:** {your major questions}
```

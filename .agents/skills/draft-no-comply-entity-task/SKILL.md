---
name: draft-no-comply-entity-task
description: Use this skill to generate an entity task draft file (__draft.md) at reduced detail.
---

# Skill: Draft No Comply Entity Task

## Allowed Agent Modes

CRITICAL RULE: If your context `<agent-mode>` is NOT set to one of the following **Agent Modes** you are NOT ALLOWED to use this skill:

- `task-manager`

CRITICAL RULE: If you are NOT ALLOWED to use this skill, STOP and advise the user to switch to another agent mode first. List agent modes.

## Required skills

This skill is a specialization of the `write-task` skill.

Read it and follow every rule in `write-task` unless explicitly overriden here.

## Allowed Skills

- `rehash`
- `todos`

## Mandatory Reading

Read `.agents/domains/tasks/index.md`, if not yet in context, as it contains definitions and rules that are essential to interpret the instructions on this file.

Read also:

- Template file:
  - `.agents/skills/draft-no-comply-entity-task/no-comply-entity-draft-template.md`
- Knowledge files:
  - `no-comply/knowledge/glossary.md`
  - `no-comply/knowledge/packages.md`

## Definitions

**Entity task scope** - can include specicificationss for new entities or for modifying entities (components, mixins, controllers, ...) as well as for non-entities (shared types, helpers, global constants...).

**Entity draft** - one `<task-id>__draft.md` file containing a proto specification for each entity in scope. Less detailed than a full task+specs output, sufficient for early review and backlog placement.

**Main attributes of entities scope:**

- type: `Add`, `Remove`, `Refactor`, `Modify`
- id: Example `component:standard-ui:badge`
- description: in case of modifications, chose most important ones
- breaking: in case of modifications
- impact: in case of modifications

**Main attributes of non-entities scope:**

- type: `Add`, `Remove`, `Refactor`, `Modify`
- what: resource in package/module
- description: `prop of ...`
- breaking: in case of modifications
- impact: in case of modifications

- RULE: use the `todos` skill to keep track of the three Assistant Lists: TODOS, PENDING and BLOCKERS!

## Workflow

This is a 4 step iterative process. Expect to return from step 3 back to any previous step.

1. Entity identification
2. Proto API design
3. Summarise scope
4. Generate the entity draft

Expect to create one artefact per task: the `<task-id>__draft.md` file covering all entities in scope. No specification attachments are produced.

Details of each step after the Rules section.

## Rules

### Rules for synthesising the entity task scope

1. Build a list of the entities in scope with columns:

- type: (Add, Remove, Refactor, Modify)
- id: Example `component:standard-ui:badge`
- status: is it confirmed scope? being refined? a draft exists? closed scope?

Main attributes of non-entities scope:

- type: `Add`, `Remove`, `Refactor`, `Modify`
- what: resource in package/module
- description: `prop of ...`
- status: is it confirmed scope? being refined? a draft exists? closed scope?

### Rules for presenting the entity task scope summary

1. Include a link to the draft file if it exists.
2. For modifications include a micro summary. Example "(change color options)".

Full Example:

**Entities**

- Add `component:standard-ui:badge` - [draft](relative/draft-filename)
- Add `mixin:standard-ui:badge` - refining
- Modify `mixin:standard-ui:content-color` (change color options)
- Add `mixin:composable:badge` - speculative

**Other Changes**

Include only changes to non-entities

- Refactor method `getFoo()` of `SomethingAPI` to use an index
- (BREAKING) Change method `getBar()` of `SomethingAPI` to return `boolean`
- Add `<scope>` so that ...

### Rules for working with the Entity Draft Template

- RULE: Fill out every section that applies.
- RULE: If a section does not apply to an entity, remove it.
- RULE: Do not use tables.
- RULE: Do not use diagrams.
- RULE: Only one code snippet is allowed per entity: `## Example Usage`.
- RULE: Any other code snippets are forbidden.
- RULE: Keep each entity proto spec to at most 10 bullet points plus the example.

## Steps

### 1. Entity identification

Start by identifying what kind of entity or entities are being requested and how they decompose.

For each entity, categorise using the following taxonomy:

- `primitive` — a low-level element with no composition
- `composed` — built by composing existing components / mixins / controllers
- `leaf` — renders a concrete DOM element, does not manage layout
- `layout` / `container` — arranges children, may not render its own DOM element
- `standalone` — fully self-contained
- `wrapper` — delegates entirely to an existing component, adding or overriding props/behavior
- `visual-only` — no state, purely reactive to props
- `stateful` / `interactive` — owns internal state, responds to user input
- `public` — exported and documented for external use
- `internal` — shared within a package, not part of public API

For each entity, answer:

- Is it a new entity, a modification, or a removal?
- Does it decompose into smaller reusable parts (mixins, controllers)?
- Does it duplicate an existing entity? If yes, is it a full match (discard) or partial (note)?
- Can core logic be hoisted to `solid-composables`?

### 2. Proto API design

For each entity capture the following facts. These facts populate the proto spec in the draft.

**Identity:**

- Entity name, target package, and module path.

**Responsibility:**

- How does this entity contribute to the overall solution?

**Acessibility:**

- Role? Keyboard requirements? Aria Attributes? Live? Focus management?

**Composition:**

- Will it use existing entities? (composes mixins, controllers, or components — list them and their role)
- Will it decompose into separate reusable entities? (extract mixins, controllers from it)

**Dependencies:**

- Does it need state, accessibility, or imperative APIs?
- Contexts, services, or utilities required.

**Styling:**

- Which CSS variant or state classes does it produce?
- Does it use CSS modules? Are there key CSS variables it sets or consumes?

**Key props and API:**

- Most important own props (omit inherited ones unless overridden).
- What does it expose in its API (`$root`, accessors, ...)?

### 3. Summarise Scope

1. Focus back on the scope.
2. Apply the `rehash` skill rules plus the "Rules for synthesising the entity task scope" to generate a summary.
3. Apply the `rehash` skill rules plus the "Rules for presenting the entity task scope summary" to present it.
4. Ask for user review.

- RULE: Expect iteration and going back to previous steps.
- RULE: Do no insist on approval, focus on assisting with refining.

### 4. Generate the entity draft

1. Use the `no-comply-entity-draft-template.md` Template and the "Rules for working with the Entity Draft Template" to structure the draft file.
2. Use the `rehash` skill to summarise the latest iteration.

## User Commands

### Rehash

When the user says "rehash"

1. use the `rehash` skill to aggressively summarise the current step status (and only the current step).
2. present the summary and an orientation "Currently on step 2/4".

### Rehash Step

When the user says "rehash `<step>`"

1. use the `rehash` skill to aggressively summarise the context of the requested step (and only the current step).
2. present the summary and an orientation "Currently on step 2/4".

### Rehash Scope

When the user says "rehash scope" execute Step "### 3. Summarise Scope" but stay on current step.

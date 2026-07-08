---
name: write-no-comply-entity-task
description: Task-writing skill specialised in generating tasks and specs for developing no-comply entities.
---

# Skill: Write No Comply Entity Task

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

- Template files:
  - `.agents/skills/write-no-comply-entity-task/no-comply-entity-task-template.md`
  - `.agents/skills/write-no-comply-entity-task/no-comply-entity-spec-template.md`
- Knowledge files:
  - `no-comply/knowledge/glossary.md`
  - `no-comply/knowledge/packages.md`

## Definitions

**Entity task scope** - can include specicificationss for new entities or for modifying entities (components, mixins, controllers, ...) as well as for non-entities (shared types, helpers, global constants...).

The main Attributes of the scope items, useful for summarising the status of the refinement and task-wrting process are:

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

This is a 7 step iterative process with small sub-iterations and regular context dump.

1. Component classification
2. API Design
3. Decomposition
4. Deduplication
5. Abstraction
6. Summarise changes
7. Generate the component specification files:
8. Generate the component task draft

Expect to return from step 6 back to any previous step several times.

Expect to create unfinished artefacts (task files and specification attachments) and keep track of unrefined.

Details of each step after the Rules section.

## Rules

### Rules for synthesising the entity task scope

1. Build a table with the entities in scope, and with columns

- type: (Add, Remove, Refactor, Modify)
- id: Example `component:standard-ui:badge`
- description: in case of modifications, chose the most important ones
- status: is it confirmed scope? being refined? a spec draft exists? closed scope?

Main attributes of non-entities scope:

- type: `Add`, `Remove`, `Refactor`, `Modify`
- what: resource in package/module
- description: `prop of ...`
- status: is it confirmed scope? being refined? a spec draft exists? closed scope?

### Rules for presenting the entity task scope summary

1. Include a link to the specification attachment file if it exists.
2. Otherwise, include a micro status expression. Example: (refining, speculative, problematic)
3. For modifications include a micro summary. Example "(change color options)".

Full Example:

**Entities**

- Add `component:standard-ui:badge` - [spec](relative/spec-filename)
- Add `mixin:standard-ui:badge` - refining
- Modify `mixin:standard-ui:content-color` refining (change color options)
- Add `mixin:composable:badge` - speculative
- REFACTOR `<scope>` so that ...

**Other Changes**

Include only changes to non-entities

- Refactor method `getFoo()` of `SomethingAPI` to use an index a optimise responsiveness
- (BREAKING) Change method `getBar()` of `SomethingAPI` to return `boolean` (easy fix downstream)
- Add `<scope>` so that ...

### Rules for working with Entity Specicication Templates

- RULE: Fill out every section that applies to the change type and entity type.
- RULE: Tables with wider than 80 characters are forbidden.
- RULE: Diagrams are forbidden.
- RULE: Only one code snippet is allowed (and mandatory): `## Example Usage`.
- RULE: Any other code snippets are forbidden.
- RULE: Don't include details already expressed in the specs.

### Rules for working with Entity Task Template

- RULE: Fill out every section that applies to the entity.
- RULE: If a section does not apply to an entity, remove it.
- RULE: Tables wider than 80 characters are forbidden.
- RULE: Diagrams are forbidden.
- RULE: Only two code snippets are allowed:
  - `## Example Usage` (mandatory for all entities)
  - `## Renders` (mandatory for components)
- RULE: Any other code snippets are forbidden.
- RULE: identify the specification variant for this entity (modifications or new entities)
- RULE: ask the user if unsure about the specification variant to apply to this entity

## Steps

### 1. Component classification

Start by identifying what kind of entity or entities are being requested.

The following taxonomy is usfull to gather context, but note that it does not map directly to no-comply entity concepts.

- `primitive` — a low-level element with no composition (e.g. a styled HTML element)
- `composed` — built by composing existing components / mixins / controllers
- `leaf` — renders a concrete DOM element, does not manage layout
- `layout` / `container` — arranges children, may not render its own DOM element
- `standalone` — fully self-contained
- `wrapper` — delegates entirely to an existing component, adding or overriding props/behavior
- `visual-only` — no state, purely reactive to props
- `stateful` / `interactive` — owns internal state, responds to user input
- `public` — exported and documented for external use
- `internal` — shared within a package, not part of public API

### 2. API Design

Capture every applicable fact below. These facts inform the spec but do **not** appear verbatim in the task — they are used to populate the template sections.

- RULE: Do not use the specification template format yet. It is too early for a detailed specification as the next steps are likely to overturn many decisions.

**Identity:**

- Component name and target package / path.
- Whether it is new, extends, or replaces an existing component.
- Whether it is based on or derived from another component.
- Whether it composes existing components (list them and their role).

**Dependencies:**

- Mixins, controllers, contexts, or utilities used.
- Which props are inherited from each dependency — and whether they are taken `all`, `pick`, or `omit`.
- Whether it renders children, has slots, or uses render delegation.

**Structure**

- Is it a compounded froup of components that meant to be is used together? Is it a single component that participates in a larger compounded component?

**State & interaction:**

- Whether it owns state. What state (value, open/closed, selection, focus, etc.).
- Whether it needs accessibility semantics (role, ARIA attributes, keyboard behavior, live regions, focus management).
- Whether it needs refs / imperative APIs / observers / measurements.

**Styling:**

- Whether it needs styles and what style mechanism it uses.
- Which **variant CSS classes** it produces and which props drive their value. Example: `variant => .variant-{variant}`
- Which **boolean CSS classes** it produces and which props drive their value. Example: `inline => .inline`
- Which **state CSS classes** it produces and which props drive their value. Example: `active => .is-active`
- Which dom nodes will be styled and their CSS names. Example: `$label = .-Label`

### 3. Decomposition

During this phase you need to work with the user designing different alternatives for decomposing the component into reusable parts.

It is very likely that the component spec results in creating more than one entity:

- The component itself.
- The component styles (or a part of) made reusable via one or more `createSomethingMixin()`.
- Some part of the component state and behaviour made reusable as a `createSomething()` controller from its own module.

### 4. Deduplication

For each potential entity identified search for existing mixins and controllers that are similar in responsibility and API.md

If there is a full match discard the candidate.
If it is a partial match include it with notes.

For verified list its type, eventual name, responsibility and API summary.

### 5. Abstraction

Identify if the component, some of its parts, and the other entities already identitied can be split into a concrete and abstract layer, that core logic and structural styles can be hoisted to new entities `solid-composables` (in rare cases to `solid-accessibility` also).

It is also very likely that some of these composables should be stripped of `standard-ui` bindings and styiling and result in the creation of new enititis in `solid-composables`

### 6. Summarise Scope

1. Focus back on the scope.
2. Apply the `rehash` skill rules plus the "Rules for synthesising the entity task scope" to generate a summary.
3. Apply the `rehash` skill rules plus the "Rules for presenting the entity task scope summary" to present it.
4. Ask for user review.

- RULE: Expect iteration and going back to previous steps.
- RULE: Do no insist on approval, focus on assisting with refining.

### 7. Generate the component specification files:

For each entity identified, chose the appropriate specification template

- Add: `no-comply-new-entity-spec-template.md`
- Modify: `no-comply-mod-entity-spec-template.md`
- Remove: `no-comply-mod-entity-spec-template.md`
- Refactor: `no-comply-mod-entity-spec-template.md`

Apply the rules

### 8. Generate the component task draft

1. Use the `no-comply-entity-task-template.md` Template and the "Rules for working with Entity Task Template" to structure the task file for the main entity.
2. Use the `rehash` skill to summarise the latest iteration.

## User Commands

### Rehash

When the user says "rehash"

1. use the `rehash` skill to aggressively summarise the current step status (and only the current step).
2. present the summary and an orientation "Currently on step 2/7 | 2 specifications closed".

### Rehash Step

When the user says "rehash `<step>`"

1. use the `rehash` skill to aggressively summarise the context of the requested step (and only the current step).
2. present the summary and an orientation "Currently on step 2/7 | 2 specifications closed".

### Rehash Scope

When the user says "rehash scope" execute Step "### 6. Summarise Scope" but stay on current step.

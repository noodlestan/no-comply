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

## Before you start

This is an iterative process with small iterations and regular

- RULE: use the `todos` skill to keep track of the three Assistant Lists: TODOS, PENDING and BLOCKERS!
- RULE: use the `rehash` skill to aggressively summarise your responses when you report back findings and progress.

## Steps

### 1. Component classification

Record what kind of component is being requested:

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

### 6. Generate the component task draft

Use the `no-comply-entity-task-template.md` Template to structure the task file for the main entity.

### 7. Generate the component specs

For each entity identified, use the `no-comply-entity-spec-template.md` Template to structure the entity specification.

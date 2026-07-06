---
name: write-component-task
description: Specialized task-writing skill for producing component tasks grounded in repo conventions with exhaustive API specs and zero implementation instructions.
---

# Skill: Write Component Task

This skill is a **specialization of `write-task`**.

Obey every rule in `write-task` unless explicitly overriden here.

## Before you start

This skill generates a **component task** — a deferred work item containing a **component specification** that is exhaustive about public API, dependencies, parts, and composition.

The task does **not** contain implementation plans or instructions. Implementation plans are generated from the task, not by this skill.

## Steps

### 1. Convention discovery

Before writing the task you MUST discover the relevant conventions and architecture rules that govern the component:

- Search for `conventions/` directories and `architecture/` directories at the **library level**, **namespace level**, and **repository root**.
- Read every conventions file that applies to the component's area, package, or pattern.
- Read every architecture file that defines the patterns this component participates in.

However:

- **Convention files** — reference them in the task's "Conventions Referenced" section so the implementer can consult them. Do not inline convention rules into the task body.
- **Architecture files** — use them to align the spec, but do **not** mention or reference them in the generated task. Architecture knowledge is consumed by the spec writer, not exposed to the implementer.
- Do not inline convention or architecture notes unless the task depends on a local exception or gap in conventions.

### 2. Component classification

Record what kind of component is being built:

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

### 3. Gather mandatory implementation facts

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

**Compound components:**

- Whether it participates in a larger compound component API.

### 4. Decomposition

During this phase you need to work with the user designing different alternatives for decomposing the component into reusable parts.

It is very likely that the component spec results in creating more than one entity:

- The component itself.
- The component styles (or a part of) made reusable via one or more `SomethingMixin`.
- Some part of the component state and behaviour made reusable a `Something` controller.

It is also very likely that some of these composables should be stripped of `standard-ui` bindings and styiling and result in the creation of new enititis in `solid-composables` or even additions to `solid-accessibility`.

### 5. Generate the component spec

Use `component-task-template.md` to structure the task.

The spec MUST be **exhaustive** about:

- **Props** — every prop, its type, required/optional, default value, source (local / inherited / picked / omitted), and description.
- **API members** — every member exposed via `$root`, `exposeAPI`, or returned from `create*`. Include type and origin.
- **Parts** — every named part (e.g. `_button`, `_icon`, `_label`) and whether it is optional.
- **Dependencies** — every composable, mixin, controller, context, or utility used, including what each contributes.
- **Composition** — which components are composed and how they fit together.

The spec MUST **not** contain:

- Implementation steps, filenames, private variables, internal types, or helper functions.
- Code samples, except a single `Example usage: <ComponentName prop={value} />` line in the task template.
- Architecture references (consume architecture internally but do not expose).
- Convention text inlined into the task body (reference convention files instead).
- Speculative or invented API not supported by existing patterns in the codebase.

The spec MUST include:

- All entities to create and the Props/API definitions.
- All entities to modify, such as add `rounded` prop to `mixin:solid-composables:icon`.

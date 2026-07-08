# No Comply New Entity Specification Template

Use this template to produce a modificiations specification attachment for an entity task file.

- RULE: Fill out every section that applies to the entity.
- RULE: If a section does not apply to an entity, remove it.
- RULE: Tables wider than 80 characters are forbidden.
- RULE: Diagrams are forbidden.
- RULE: Only two code snippets are allowed:
  - `## Example Usage` (mandatory for all entities)
  - `## Renders` (mandatory for components)
- RULE: Any other code snippets are forbidden.

IMPORTANT NOTE: The template below is still wip and contains examples of sections for both

- modification specs (marked as ``)
- for additions (marked as `(for new entities)`)

- RULE: identify the specification variant for this entity (modifications or new entities)
- RULE: ask the user if unsure about the specification variant to apply to this entity

Template:

---

## Metadata

template: `.agents/skills/write-no-comply-composable-task/no-comply-composable-spec-template.md`

## Mandatory Reading

- `no-comply/knowledge/index.md`
- `<path-to-knowledge-conventions-file>`
- `<path-to-knowledge-patterns-file>`

## Why

Adding the new prop `foo` in the `BarMixin` will allow composing ... in ...

## Example Usage (component)

Focus the example on the use case addressed by the modification.

Do not include example usage if props and API are not changing.

```tsx
<ToggleButton value={signal()} onChange={setSignal} />
```

## Example Usage (composable mixin or controller)

```tsx
const exampleComposableProps = computedProps({ size, color });
const { $root } = createExampleComposable(exampleComposableProps);
```

## Identity

Package: `@solid-composables`
Module: `content`
Name: `BadgeMixin`
Factory: `createBadgeMixin`
CSS Module?: YES/NO
Id: `component:standard-ui-badge`

## Impact

Examples:

This mixin is currently not used anywhere. This is not a breaking change, nothing to update.

This mixin is currently used in ... and a refactoring task is required to adapt the new APIS.

## Changes

Agressive bullet point summary (max 5)

### Accessibility

Include bullet points categorised by **Role**, **Keyboard**, **Attributes**, **Live**, **Focus** if any of these accessiblity traits is being modified.

### Responsibilities

No longer maps a prop `foo` to styles.

### Changes to Props

Remove own prop `foo` This prop is not relevant anymore.
The current options map to semantic colors and are suitable for application in content contexts.

New `color` options: `color-neutral`, `color-1`, `color-2` up to 7.

### Changes to Computations

Sets the default for prop `foo`.

### Changes to Composition

No longer composes `createSomethingMixin()` it now composes `createSomethingElse()` directly.

### Changes to Styles

New CSS classes map colors to palettes `primary`, `graphics-1` and so on.

Old CSS removed

### Changes to API

Added new member `_thing` with the combined props for the `<Thing>` component.

Remaining API stays the same because `createSomethingElse()` is fuly compatible with `createSomethingMixin()`. but references must be replaced by `SomethingElseAPI['$root']`.

### Other Changes

New variant `bar` in type `foo`
New type `bar` in type `foo`
New private constant: `DEFAULT_FOO`

# No Comply New Entity Specification Template

> Template for Modifications / Removals / Refactors.
> Rules for content and template usage in `SKILL.md` §"Rules for Writing Content for Entity Specifications" and §"Rules for Creating Entity Specifications from Template".

---

## Metadata

template: `.agents/skills/write-no-comply-composable-task/no-comply-composable-spec-template.md`

## Mandatory Reading

- `no-comply/reference/index.md`
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

## Responsibility

One-line statement of what changed for this entity. Example: "No longer maps prop `foo` to styles. Now reads palette from CSS variable instead."

## Impact

Examples:

This mixin is currently not used anywhere. This is not a breaking change, nothing to update.

This mixin is currently used in ... and a refactoring task is required to adapt the new APIS.

## Changes

Agressive bullet point summary (max 5)

### Accessibility (if applicable)

> Note: Remove this entire sub-section if no accessibility traits are being modified.

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

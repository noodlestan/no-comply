# No Comply Composable Spec Template

Use this template to produce a composable specification attachment for a component task file.

- RULE: Fill out every section that applies to the entity.
- RULE: If a section does not apply to an entity, leave "Does not Apply" rather than deleting the section.
- RULE: Tables wider than 80 characters are forbidden.
- RULE: Diagrams are forbidden.
- RULE: Only one code snippet is allowed (and mandatory): `## Example Usage`.
- RULE: Any other code snippets are forbidden.

Template:

---

## Metadata

template: `.agents/skills/write-no-comply-composable-task/no-comply-composable-spec-template.md`

## Mandatory Reading

references:

- `no-comply/knowledge/index.md`

---

# ADD `mixin:solid-composables:badge`

## Mandatory Reading

- `<path-to-knowledge-conventions-file>`
- `<path-to-knowledge-patterns-file>`

## Example Usage (component)

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

## Impact (for modifications)

Examples:

This mixin is currently not used anywhere. This is not a breaking change, nothing to update.

This mixin is currently used in ... and a refactoring task is required.

## Changes (for modifications)

### Remove prop foo

This prop is not relevant anymore.

### Change color options

The current options map to semantic colors and are suitable for application in content contexts.

New options: `color-neutral`, `color-1`, `color-2` up to 7.

CSS should map these to palettes `primary`, `graphics-1` and so on.

### Summary of changes to Props

- removed own prop: foo

### Summary of changes to Compositions

- no longer composes `createSomethingMixin()` it now composes `createSomethingElse()` directly.

### Summary of changes to API

Added new member `_thing` with props for the `<Thing>` component.

Remaining API stays the same because `createSomethingElse()` is fuly compatible with `createSomethingMixin()`. but references must be replaced by `SomethingElseAPI['$root']`.

## Composes (for new composables)

Composes `createSomethingNew()` inheriting all its props and exposing its full API.

Composes `createSomethingMore()` inheriting some props and exposing only the `$label` member, merged with the local styles.

## Declares Props (for new composables)

**Own props:**

- `size?: ContentSize` (no default, default provided by composed `SomeSizeMixin`)
- `collapsed?: boolean` (default to false)

**Composed props:**

- All props from `SomethingElseMixin`
- Props `bar` and `baz` from `YetAnotherComosable`

## Computed

Local `$label` = `ClassList` + `data-attribute-foo` set too `collapsed`

## Exposes API

**$root** = SomethingAPI['$root'] + SomethingElse['$root'].

**$label** = SomethinMore[`$label`] + Local `$label`.

**\_thing** - props for the `<Thing>` component.

**size()** = `Accessor<ContentSize>` from `SomeSizeMixin`.

### Renders

`<ComponentFoo>` (role in rendered structure).

### Accessibility

- **Role:** `<role>` (e.g. `switch`, `button`, `combobox`)
- **Keyboard:** `<key>` → `<action>`
- **ARIA:** `<attribute>` bound to `<prop / state>`
- **Live region / focus trap / etc:** `yes` / `no`

## Parts (private)

For multi-part components specify each part `Props`, `API` and what they render.

- RULE: Each component part requires its own specification file.

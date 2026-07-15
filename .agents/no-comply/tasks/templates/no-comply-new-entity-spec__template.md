# No Comply New Entity Specification Template

> Template for new entities.
> Rules for content and template usage in `SKILL.md` §"Rules for Writing Content for Entity Specifications" and §"Rules for Creating Entity Specifications from Template".

TEMPLATE-DIRECTIVE: One-line statement of what this entity does. Not how it does it or what it composes.

TEMPLATE-DIRECTIVE: Change the h1 title to the match the following pattern: `# ADD|REMOVE|MODIFY mixin:solid-composables:badge`

## Metadata

template: `.agents/no-comply/tasks/templates/no-comply-new-entity-spec__template.md`

## Mandatory Reading

**Example:**

- `no-comply/reference/index.md`
- `{path-to-reference-conventions-file}`
- `{path-to-reference-patterns-file}`

## Why

TEMPLATE-DIRECTIVE: Explain why this is being introduced. Not what it does, or how it does it, not even what the main responsibility of the entity, rather how it's use, or event better, where it is planned to be use.

EXAMPLE: Needed as composable part of the new `Badge` component.

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
CSS Module?: `BadgeMixin.module.css` (include only if mixin with css module)
Id: `component:standard-ui-badge`

## Responsibility

TEMPLATE-DIRECTIVE: One-line statement of what this entity does. Not how it does it or what it composes.

TEMPLATE-EXAMPLE: "Ths mixin provides a way for composers to control text wrapping modes with granularity".

TEMPLATE-DIRECTIVE: Include the name of another entity when the main responsibility is related to the other entity (extending it, costumising it, rendering it, ...).

TEMPLATE-EXAMPLE: "Ths mixin extends `SizedAction` with explicit control over aspect-ratio.

TEMPLATE-DIRECTIVE: When the main responsibility is composing a number of other composables, summarise them without naming them.

TEMPLATE-EXAMPLE: "Ths mixin composes typography, size, color and spacing mixins, synchronising them to provide a single entry point to coordinated styles".

## Accessibility (if applicable)

> Note: Remove this entire section if the entity has no accessibility responsibilities.

**Role:**

- `status` provided by `createAriaRegion()`

**Keyboard:** none

**Attributes:**

- `attribute` bound to `prop`, provided by `createAriaController()`

**Live:** `no`

**Focus:**

- pseudo focus on element `$root` handled by `createFocusable()`
- focus trap on `$trap` handled by `createFocusTrap()`

## Composes

Composes `createSomethingNew()` inheriting all its props and exposing its full API.

Composes `createSomethingMore()` inheriting some props and exposing only the `$label` member, merged with the local styles.

## Accepts Props

**Own props:**

- `size?: ContentSize` (no default, default provided by composed `SomeSizeMixin`)
- `collapsed?: boolean` (default to false)

**Composed props:**

- All props from `SomethingElseMixin`
- Props `bar` and `baz` from `YetAnotherComosable`

## Composes

Composes `AlignedToFirstLineMixin` propagating the `alignFirstLine` prop.

## Computes

**Input Props**

- Prop `size` with `VARIANT_TO_SIZE` mapping.
- Prop `collapsed` with default value applied. (exposed).

**Internal Values**

- Value `size` with `VARIANT_TO_SIZE` mapping.

**ClassLists**

Exposed in `$root`:

- `.stretch` bound to prop `stretch`.

Exposed in `$input`:

- `.size-{...}` bound to computed `size`.
- `.stretch` with static `false`

**Exposed**

- `isCollapsed` bound to `collapsed`, exposed in `$root`

## Styles (for mixins only)

Maps prop `palette` to new variant classes `.palette-{palette} { ... }`

Maps internal computed value `aligned` to ...

The new new `.palette-{palette}` classes map palette variants to `--{size}` tokens, exposing the resolved value in a private `--__palette` for composition by other entities.

## Exposes API

**$root** = `SomethingAPI['$root']` + `SomethingElse['$root']`

**$label** = `SomethingMore['$label']` + Local `$label`.

**\_thing** - props for the `<Thing>` component.

**size()** = `Accessor<ContentSize>` from `SomeSizeMixin`.

## Component (for component entities only)

Is a `ParentComponent` with regular `chilren` prop.

### Props (for component entities only)

Accepts also `ClosedTagProps` as `$others`.

### Parts (for component entities only)

For multi-part components specify each part `Props`, `API` and what they render.

- RULE: A very basic component part can be expressed here in no more than 5 bullet points.
- RULE: A more complex component part requires its own specification file.

### Renders (for component entities only)

**Structure**

Pseudo code:

```
<SomethingProvider value={contextValue}>
  <div {...$ = combined $root + $others}>
  <PrivatePart {..._part}>
  <OtherComponentFoo {..._foo}>
    {children}
  </OtherComponentFoo>
</SomethingProvider>
```

**Responsibilities**

- The `SomethingProvider` (from ...) provides ... required by ... to ...
- `div $root` - Visual root of the component
- `PrivatePart` - partial to render the formatted number

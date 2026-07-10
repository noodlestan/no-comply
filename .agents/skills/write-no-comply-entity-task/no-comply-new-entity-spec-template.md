# No Comply New Entity Specification Template

> Template for new entities.
> Rules for content and template usage in `SKILL.md` §"Rules for Writing Content for Entity Specifications" and §"Rules for Creating Entity Specifications from Template".

Change the h1 title to the match the following pattern:

`# ADD|REMOVE|MODIFY mixin:solid-composables:badge`

## Metadata

template: `.agents/skills/write-no-comply-composable-task/no-comply-composable-spec-template.md`

## Mandatory Reading

- `no-comply/reference/index.md`
- `<path-to-knowledge-conventions-file>`
- `<path-to-knowledge-patterns-file>`

## Why

This new mixin will allow composing ... in ...

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

## Responsibility

One-line statement of what this entity does. Example: "Apply `size` and `scale` defaults, map props to size tokens, and expose `size()` and `scale()` accessors."

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

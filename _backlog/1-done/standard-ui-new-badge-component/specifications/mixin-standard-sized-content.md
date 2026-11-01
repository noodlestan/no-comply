# ADD mixin:standard:sized-content

## Metadata

template: `.agents/skills/write-no-comply-entity-task/no-comply-new-entity-spec-template.md`

## Mandatory Reading

- `no-comply/knowledge/**`

## Why

Current `SizedIconMixin` duplicates `SizedActionMixin` but offsets sizes by one index (e.g. `SizedIcon.small` maps to `2xs` token, `SizedAction.small` maps to `xs`). This "down-scaling" pattern has surfaced in multiple content use cases, along with "up-scaling" (maps to `s` instead of `m`). A single `SizedContent` mixin parametrized by a `scale` prop eliminates the duplication and provides consistent size behavior regardless of context.

## Example Usage (composable mixin or controller)

```tsx
const sizedContentProps = computedProps({
  size,
  scale: () => 'down',
  alignFirstLine: () => true,
});
const { $root, size, scale } = createSizedContentMixin(sizedContentProps);
```

## Identity

Package: `@no-comply/standard-ui`
Module: `content/mixins/SizedContent/`
Name: `SizedContentMixin`
Factory: `createSizedContentMixin`
CSS Module?: YES
Id: `mixin:standard:sized-content`

## Responsibility

Apply `size` and `scale` defaults, map props to size tokens according to 3 scale modes, propagate resolved height to `AlignedToFirstLineMixin`, and expose `size()` and `scale()` accessors.

## Composes

Composes `AlignedToFirstLineMixin` (from `@no-comply/solid-composables`) propagating the `alignFirstLine` prop. The `$root` from the mixin and the local `$root` are combined.

## Accepts Props

**Own props:**

- `size?: ContentSize` (default: `'normal'`)
- `scale?: ContentScale` (default: `'normal'`)
- `alignFirstLine?: AlignedToFirstLineMeasureProp` (inherited from composed mixin)

**New type `ContentScale`:**

- Defined in `standard-ui/src/size/types.ts`
- `ContentScale = 'down' | 'normal' | 'up'`

**Composed props:**

- All props from `AlignedToFirstLineMixin` (via `AlignedToFirstLineMeasureProps`)

## Computes

**Input Props**

- Prop `size` with default `'normal'` applied (exposed).
- Prop `scale` with default `'normal'` applied (exposed).

**Internal Values**

- Resolved height propagated via `--__first-line-content-height: var(--__content-height)` for the `AlignedToFirstLineMixin` integration.

**ClassLists**

Exposed in `$root`:

- `.size-{size}` — bound to computed `size` (resolved default)
- `.scale-{scale}` — bound to computed `scale` (resolved default)

**Exposed**

- `size()` — accessor with applied default
- `scale()` — accessor with applied default

## Styles

**Scale variants** (3 hardcoded classes):

- `.scale-down { --__content-scaled-size-small: var(--size-2xs); --__content-scaled-size-normal: var(--size-xs); --__content-scaled-size-medium: var(--size-s); --__content-scaled-size-large: var(--size-m); }`
- `.scale-normal { --__content-scaled-size-small: var(--size-xs); --__content-scaled-size-normal: var(--size-s); --__content-scaled-size-medium: var(--size-m); --__content-scaled-size-large: var(--size-l); }`
- `.scale-up { --__content-scaled-size-small: var(--size-s); --__content-scaled-size-normal: var(--size-m); --__content-scaled-size-medium: var(--size-l); --__content-scaled-size-large: var(--size-xl); }`

**Size variant classes** (4 hardcoded classes, same logic as `SizedIcon`):

- `.size-small { --__content-height: var(--__content-scaled-size-small); }`
- `.size-normal { --__content-height: var(--__content-scaled-size-normal); }`
- `.size-medium { --__content-height: var(--__content-scaled-size-medium); }`
- `.size-large { --__content-height: var(--__content-scaled-size-large); }`

**Structural:**

- `--__first-line-content-height: var(--__content-height)` — propagated to composable `AlignFirstLineMixin`
- `--__first-line-element-height: var(--__first-line-content-height)` — for local alignment computation

## Exposes API

**$root** = `AlignedToFirstLineMixinAPI['$root']` + local `$root` (combined via `combineProps`)
**size()** = `Accessor<ContentSize>` with defaults applied
**scale()** = `Accessor<ContentScale>` with defaults applied

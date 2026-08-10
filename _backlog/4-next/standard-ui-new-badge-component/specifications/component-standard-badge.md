# ADD component:standard:badge

## Metadata

template: `.agents/skills/write-no-comply-entity-task/no-comply-new-entity-spec-template.md`

## Mandatory Reading

- `no-comply/knowledge/index.md`
- `no-comply/knowledge/conventions/components.md`
- `no-comply/knowledge/patterns/components.md`

## Why

Documentation pages need a "badges" component to display tags and labels with coordinated palette-based coloring. The Badge component composes `SizedContent` (size/scale) and `BadgeMixin` (palette + color composition + typography) to provide a consistent themed appearance.

## Example Usage (component)

```tsx
<Badge palette="color-1" size="medium">
    {tag.name}
</Badge>
```

## Identity

Package: `@no-comply/standard-ui`
Module: `content/components/Badge/`
Name: `Badge`
Factory: `createBadge`
CSS Module?: YES
Id: `component:standard:badge`

### Responsibility

The `<span>` is the visual root carrying all class lists, coordinated color variables, and typography. Children are rendered as-is (text or inline elements).

## Composes

- `SizedContent` — provides `size` and `scale` support. Badge adopts `size` prop, passes static `scale: 'down'`.
- `BadgeMixin` — entry point for palette, color composition (`ContentPaletteMixin` + `ComposeColorMixin` + `createTextMixin()`), `.Badge` structural styles, and `--__compose-color` overrides.

## Accepts Props

**Own props:**

- `size?: ContentSize` (default: `'normal'`, propagated to `SizedContent` and `BadgeMixin`)
- `palette?: ContentPaletteVariant` (default: `'neutral'`, propagated to `BadgeMixin`)

**Composed props:**

- Omit prop `scale` from `SizedContent` (static value `'down'` sent to mixin)
- No other composed props exposed to consumers

## Computes

**ClassLists**

Exposed in `$root`:

- `.Badge` — structural class (from `BadgeMixin`)
- `.size-{size}` — variant class (from `SizedContent`)

**Exposed**

- `size()` — from `SizedContent` (via composition)
- `palette()` — from `BadgeMixin` (via composition)

## Component

Is a `ParentComponent` rendering a single `<span>` element with children.

### Props

Accepts `ClosedTagProps` as `$others`.

### Renders

**Structure**

```
<span $={combined $root + $others}>
  {children}
</span>
```

**Responsibilities**

- The `<span>` is the visual root carrying all class lists, coordinated color variables (via `BadgeMixin`), and typography (via `BadgeMixin`).
- Children are rendered as-is (text or inline elements).

## Unrefined

No open refinement items — remaining details (CSS module, `--__compose-color` overrides) are implementation concerns for planner/coder and designer/coder respectively.

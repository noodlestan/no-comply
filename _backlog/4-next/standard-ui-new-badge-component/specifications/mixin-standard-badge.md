# ADD mixin:standard:badge

## Metadata

template: `.agents/skills/write-no-comply-entity-task/no-comply-new-entity-spec-template.md`

## Mandatory Reading

- `no-comply/knowledge/index.md`
- `no-comply/knowledge/conventions/components.md`
- `no-comply/knowledge/patterns/components.md`

## Why

The Badge component factory (`createBadge()`) needs to compose `ContentPaletteMixin` + `ComposeColorMixin` together with Badge-specific structural styles and `--__compose-color` level/alpha overrides. A `BadgeMixin` encapsulates this composition so the component factory has a single entry point for color + structure.

## Example Usage (composable mixin or controller)

```tsx
const badgeProps = { palette: 'color-1', size: 'medium' };
const { $root, palette } = createBadgeMixin(badgeProps);
```

## Identity

Package: `@no-comply/standard-ui`
Module: `content/mixins/Badge/`
Name: `BadgeMixin`
Factory: `createBadgeMixin`
CSS Module?: YES
Id: `mixin:standard:badge`

## Responsibility

Compose `ContentPaletteMixin`, `ComposeColorMixin` (with `foreground`, `background`, `border` all `true`), and `createTextMixin()` (with resolved `size()`). Apply `.Badge` structural styles and set `--__compose-color` level/alpha overrides per target if needed.

## Composes

- `ContentPaletteMixin` — provides `palette` prop and sets `--__color-palette`.
- `ComposeColorMixin` — reads `--__color-palette` and sets `--__color-fg`, `--__color-bg`, `--__color-border`. Called with fixed `foreground: true`, `background: true`, `border: true`.
- `createTextMixin()` — provides typography sizing. Called directly, passing the resolved `size()` accessor. No props exposed to consumers.

## Accepts Props

**Own props:**

- `size?: ContentSize` (passed to `createTextMixin()` internally)
- `palette?: ContentPaletteVariant` (default: `'neutral'`, propagated to `ContentPaletteMixin`)

**Composed props:**

- All props from `ContentPaletteMixin` (`palette`)
- No props from `ComposeColorMixin` (fixed values)
- No props from `TextMixin` (used internally only)

## Computes

**ClassLists**

Exposed in `$root`:

- `.Badge` — structural class with inline-flex layout, coordinate system for `ComposeColorMixin`
- `.size-{size}` — variant class

**Exposed**

- `palette()` — from `ContentPaletteMixin` (via composition)

## Styles

**Structural:**
- `.Badge { display: inline-flex; align-items: center; /* padding, border-radius, gap per size */ }`

**Coordinate system for ComposeColorMixin:**
- Sets `--__compose-color-fg-level` and `--__compose-color-fg-alpha` (and bg/border equivalents) if Badge-specific overrides are needed beyond the defaults.

## Exposes API

**$root** = `ContentPaletteMixin['$root']` + `ComposeColorMixin['$root']` + `TextMixin['$root']` + local `$root` (combined via `combineProps`)
**palette()** = `Accessor<ContentPaletteVariant>`

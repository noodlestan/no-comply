# ADD mixin:standard:content-palette

## Metadata

template: `.agents/skills/write-no-comply-entity-task/no-comply-new-entity-spec-template.md`

## Mandatory Reading

- `no-comply/knowledge/index.md`
- `no-comply/knowledge/conventions/components.md`
- `no-comply/knowledge/patterns/components.md`

## Why

`ContentColorMixin` uses semantic color names unsuitable for palette-based components like badges and chips. It also sets `color:` directly via `--__fg`, restricting use to text only. `ContentPaletteMixin` replaces it with a pure palette-variable protocol — it sets only `--__color-palette` via the `set-palette(__palette)` SCSS mixin and never applies color properties directly. The actual color composition is delegated to `ComposeColorMixin`.

## Example Usage (composable mixin or controller)

```tsx
const { $root, palette } = createContentPaletteMixin({ palette: "color-1" });
// $root sets --__color-palette via set-palette SCSS mixin
```

## Identity

Package: `@no-comply/standard-ui`
Module: `color/mixins/ContentPalette/`
Name: `ContentPaletteMixin`
Factory: `createContentPaletteMixin`
CSS Module?: YES
Id: `mixin:standard:content-palette`

## Responsibility

set only the palette variable. Never apply `color`, `background`, or `border` directly.

## Impact

Replaces `ContentColorMixin` (`mixin:standard:content-color`). The old mixin is not used anywhere; no migration required.

## Composes

Does not compose any other composables.

## Accepts Props

**Own props:**

- `palette?: ContentPaletteVariant` (default: `'neutral'`)

**New type `ContentPaletteVariant`:**

- Defined in `standard-ui/src/color/types.ts`
- `ContentPaletteVariant = 'neutral' | 'color-1' | 'color-2'`

## Computes

**Input Props**

- Prop `palette` with default `'neutral'` applied (exposed).

**ClassLists**

Exposed in `$root`:

- `.palette-{palette}` — bound to computed `palette`

**Exposed**

- `palette()` — accessor with applied default

## Styles

Each `.palette-{palette}` class calls the `set-palette(__palette, <palette name>)` SCSS mixin, which resolves the palette identifier to token values.

## Exposes API

**$root** = local `$root` with classList
**palette()** = `Accessor<ContentPaletteVariant>`

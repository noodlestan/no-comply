# ADD mixin:standard:content-palette

## Metadata

template: `.agents/skills/write-no-comply-entity-task/no-comply-new-entity-spec-template.md`

## Mandatory Reading

- `no-comply/knowledge/**`

## Why

Current `ContentColorMixin` uses semantic color names unsuitable for palette-based components like badges and chips. It also sets `color:` directly via `--__fg`, restricting use to text only. `ContentPaletteMixin` replaces it with a pure palette-variable protocol — it sets only `--__content-palette` via the `set-palette(__content-palette, {value})` SCSS mixin and never applies color properties directly. The actual color composition is delegated to consumers, that can use it directly or use `ComposeColorMixin` to use the palette for bg, fg, and color.

## Example Usage (composable mixin or controller)

```tsx
const { $root, palette } = createContentPaletteMixin({ palette: 'color-1' });
// $root sets --__content-palette-palette + --__content-palette+color via set-palette SCSS mixin
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
- `ContentPaletteVariant = 'neutral' | 'color-1' | 'color-2' | 'color-3' | 'color-4' | 'color-5' | 'color-6' | 'color-7'`

## Computes

**Input Props**

- Prop `palette` with default `'neutral'` applied (exposed).

**ClassLists**

Exposed in `$root`:

- `.palette-{palette}` — bound to computed `palette` (prop with default applied)

**Exposed**

- `palette()` — accessor with applied default

## Styles

**Layer:** `@layer lib.standard-ui.content-palette`

**Depdenencies:**

- `@use '@no-comply/standard-ui/scss/mixins/color.scss' as *;`

**Classes:**

- `.palette-{palette}` classes (all variants of `ContentPaletteVariant`) using `set-palette` to set the `__content-palette` variables.

```
.palette-neutral {
	set-palette(__content-palette, {palette})`
}
```

## Exposes API

**$root** = local `$root` with classList
**palette()** = `Accessor<ContentPaletteVariant>` with default applied

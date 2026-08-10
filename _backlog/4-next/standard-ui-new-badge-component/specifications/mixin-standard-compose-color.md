# ADD mixin:standard:compose-color

## Metadata

template: `.agents/skills/write-no-comply-entity-task/no-comply-new-entity-spec-template.md`

## Mandatory Reading

- `no-comply/knowledge/index.md`
- `no-comply/knowledge/conventions/components.md`
- `no-comply/knowledge/patterns/components.md`

## Why

`ContentPaletteMixin` sets only the palette variable (`--__color-palette`). To translate that palette into rendered colors for foreground, background, and border — each potentially using different levels and alpha — a separate composable is needed. `ComposeColorMixin` accepts opt-in target selectors and wires the resolved color values via CSS variables, keeping palette selection and color coordination independently composable.

## Example Usage (composable mixin or controller)

```tsx
const { $root } = createComposeColorMixin({
    foreground: true,
    background: true,
});
```

## Identity

Package: `@no-comply/standard-ui`
Module: `color/mixins/ComposeColor/`
Name: `ComposeColorMixin`
Factory: `createComposeColorMixin`
CSS Module?: YES
Id: `mixin:standard:compose-color`

## Responsibility

Read `--__color-palette` from DOM (set by `ContentPaletteMixin`). For each opt-in target (`foreground`, `background`, `border`), set the corresponding named CSS variable (`--__color-fg`, `--__color-bg`, `--__color-border`) with the resolved palette color. Each target can use a different level and/or alpha, supplied by the composer via CSS variables and applied through SCSS mixins.

## Composes

Does not compose any other composables.

## Accepts Props

**Own props:**

- `foreground?: boolean` — opt-in, default false
- `background?: boolean` — opt-in, default false
- `border?: boolean` — opt-in, default false

## Computes

**ClassLists**

Exposed in `$root`:

- `.ComposeColor` — structural class setting default values for all 3 components (palette, level, alpha) of all 3 targets (`--__bg`, `--__fg`, `--__border`). These defaults are supplied via CSS variables by the composer.

## Styles

- `.foreground` - boolean prop used to active `set-color(__fg)`
- `.background` - boolean prop used to active `set-color(__bg)`
- `.border` - boolean prop used to active `set-color(__border)`

Selectors read `--__color-palette from` DOM (set by `ContentPaletteMixin`)

Does NOT set `color`, `background`, or `border` properties directly — only the named variables for composers.

## Exposes API

**$root** = local `$root` with classList and CSS variables

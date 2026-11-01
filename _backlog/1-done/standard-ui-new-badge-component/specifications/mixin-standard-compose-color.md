# ADD mixin:standard:compose-colors

## Metadata

template: `.agents/skills/write-no-comply-entity-task/no-comply-new-entity-spec-template.md`

## Mandatory Reading

- `no-comply/knowledge/**`

## Why

Allows consumers to set values for bg, fg, colors composing a palette choice (injected via css var) with costumisable levels for fg, bg, and border (also injectable via css var). Declares default values for all css vars, and composes and applies colors to bg, fg, and border, allowing composing mixins to select a base palette and setting any palette, level, or alpha components of each of bg, fg, border (always via css vars). This mixin will only apply the colors to the attributes opted in by the composer via separate boolean props for fg, bg, and border.

## Example Usage (composable mixin or controller)

```tsx
const { $root } = createComposeColorMixin({
  fg: true,
  bg: true,
});
```

## Identity

Package: `@no-comply/standard-ui`
Module: `color/mixins/ComposeColors/`
Name: `ComposeColorsMixin`
Factory: `createComposeColorsMixin`
CSS Module?: YES
Id: `mixin:standard:compose-colors`

## Responsibility

Set default variables for one palette plus individual levels and alphas for bg, fg, border (main class). On the opt-in boolean classes `.fg`, `.bg`, and `.border`, set color for that attribute using the color components.

## Composes

Does not compose any other composables.

## Accepts Props

**Own props:**

- `fg?: boolean` — opt-in, default false
- `bg?: boolean` — opt-in, default false
- `border?: boolean` — opt-in, default false

## Computes

**ClassLists**

Exposed in `$root` — `.ComposeColors` and boolean classes for opt-in targets.

## Styles

**Dependencies:**

- `@no-comply/standard-ui/scss/mixins/color.scss`.

```
use '@no-comply/standard-ui/scss/mixins/color.scss' as *;
```

**Classes:**

- `.ComposeColors` — class for binding variables only.

Sets default values for all 3 components (palette, level, alpha)

```
.ComposeColors {
    @include set-palette(__composed-colors, primary);

    @include set-palette(__composed-colors-fg, __composed-colors);
    @include set-palette(__composed-colors-bg, __composed-colors);
    @include set-palette(__composed-colors-border, __composed-colors);

    @include set-level(__composed-colors-fg, fg-primary);
    @include set-level(__composed-colors-bg, content-bg-0);
    @include set-level(__composed-colors-border, border-0);

    @include set-alpha(__composed-colors-fg, content-fg);
    @include set-alpha(__composed-colors-bg, content-fg);
    @include set-alpha(__composed-colors-border, content-fg);
}
```

- each one of boolean classes (`.bg`, `.fg`, `.border`) compose and apply the color from components via

```
.fg {
    @include apply-color(color, __composed-colors-fg);
}
```

## Exposes API

**$root** = local `$root` with `classList` only.

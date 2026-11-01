# ADD mixin:standard:badge

## Metadata

template: `.agents/skills/write-no-comply-entity-task/no-comply-new-entity-spec-template.md`

## Mandatory Reading

- `no-comply/knowledge/**`

## Why

A Badge is a composition of existing size, color, and typography mixins. The `BadgeMixin` encapsulates this composition so that the component factory has a single entry point for color + structure. It also allows composing these styles in other "badge-like" components in the future.

## Example Usage (composable mixin or controller)

```tsx
const badgeProps = { palette: 'color-1', size: 'medium' };
const { $root } = createBadgeMixin(badgeProps);
```

## Identity

Package: `@no-comply/standard-ui`
Module: `content/mixins/Badge/`
Name: `BadgeMixin`
Factory: `createBadgeMixin`
CSS Module?: YES
Id: `mixin:standard:badge`

## Responsibility

Set structural styles and compose size, palette, composed color, and typography from other mixins.

## Composes

- `SizedContentMixin` — called with `size` (bound to prop `size`) and static `scale: down` ,
- `ContentPaletteMixin` — called with `palette` (bound to prop `color`),
- `ComposeColorsMixin` — called with fixed `fg: true`, `bg: true`, `border: true`.
- `TextMixin` — called with `size` (bound to prop `size`)

## Accepts Props

**Own props:**

- `color?: ContentPaletteVariant` (default: `'neutral'`, propagated to `ContentPaletteMixin` as `palette` prop)

**Composed props:**

- All props from `SizedContentMixin` minus `scale` (fixed to `down`) // includes `size` and others.
- No props from `ContentPaletteMixin` (exposes color instead)
- No props from `ComposeColorsMixin` (fixed values)
- No props from `TextMixin` (used internally only)

## Computes

**ClassLists** - Exposed in `$root`

## Styles

**Classes:**

- `.Badge` - structural styles and variable bindings

```
{
	display: inline-flex;
	align-items: center;
	height: var(--__content-size);
	padding-inline: var(--__badge-padding-inline, var(--space-pad-0));
	border-radius: var(--radius-m);
	set-palette(__composed-colors, __content-palette);
}
```

## Exposes API

**$root** = `SizedContentMixin['$root']` + `ContentPaletteMixin['$root']` + `ComposeColorsMixin['$root']` + `TextMixin['$root']` + local `$root` (just a `Classist`).
**size()** = `Accessor<ContentSize>`
**palette()** = `Accessor<ContentPaletteVariant>`

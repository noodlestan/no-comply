# SCSS Conventions

## scss / File Organisation / Global SCSS Mixins

WIP

- RULE: Global scss mixins (`solid-composables`) MUST ve declared in ... and re-exported in ?? and made available for import in other packages via ??

## scss / File Organisation / SCSS Tokens

Add (incomplete):

- RULE: Tokens in `standard-ui` MUST be declaared in

## scss / File Organisation / Module Location

Add:

- RULE: Mixin styles MUST be named `[MixinName]Mixin.module.scss` and co-located with the mixin directory.
- RULE: Styles for a component MUST be named `[ComponentName].module.scss` and co-located with the component directory.

## scss / Cascade Layers / Scoping

Add:

- RULE: Every SCSS module MUST wrap all its rules in `@layer <layer>.<nested>.<path>`
- RULE: When or components compose other mixins, the `@layer`s it depends on must be declarade at the top of the file, to enforce the cascading order. Example `@layer composables { @layer layout, grid; }` enforces that `composables.grid` layer is always applied after the `composables.layout` layer.

## scss / Naming / Convention

Add:

- RULE: The root class MUST match the component PascalCase name. Example:`.Checkbox`, `.Divider`.
- RULE: Other element selectors MUST use a hyphen prefix. Example:`.-Control`, `.-Title`, `.-Icon`.

## scss / Naming / State selectors

Add:

- RULE: Hover states MUST target `&:not([aria-disabled], [data-inactive]):hover`.
- RULE: Disabled states MUST target `&:is([aria-disabled], [data-inactive])`.
- RULE: State selectors MUST be in kebab case and start with verb prefix: `.is-disabled`, `.has-icon`.

## scss / Naming / Variant and State Classes

Add:

- RULE: Size variant selectors MUST use the `size-` prefix. Example:`size-small`, `size-medium`, ...
- RULE: Visual variant selectors MUST use the `variant-` prefix. Example:`variant-primary`, `variant-plain`, `variant-base`.
- RULE: Boolean selectors MUST be named in kebab case. Example:`.stretch`, `.inline`.

## scss / Tokens / Internal Variables

Add:

- RULE: Internal component CSS custom properties MUST use `--__` prefix (double underscore) to distinguish from public design Tokens. Example:`--__input-height`, `--__divider-style`, `--__action-gap`.
- RULE: Component CSS custom properties MUST only be referenced within the component's own `@layer` scope.

## scss / TOKENS / Internal Variables

Add:

- RULE: Internal mixin CSS custom properties MUST use `--__<scope>-` prefix (double underscore) to distinguish from public design tokens. Example:`--__input-height`, `--__divider-style`, `--__action-gap`.
- RULE: Internal mixin CSS custom properties can be referenced within sibling mixins or from a composing mixin or component.

## scss / Theming / Color System

Add:

- RULE: Color values MUST be set via the theme color mixin system: `set-palette`, `set-color`, `set-level`, `set-alpha`, `apply-color`.
- RULE: Direct color values in `hsla(...)` format are DEPRECATED and need to be converted to the current color system.
- RULE: Hardcoded color values such as `red` or `#000000` are FORBIDDEN and need to be converted to the current color system.

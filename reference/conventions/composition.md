# Composition Conventions

These rules aplly to **Composable Mixins**, **Composable Controllers** and to **component factories**.

## Structure

- RULE: Every composable MUST follow the `[name].ts` + `types.ts` + `constants.ts` + `create[name].ts` + `index.ts` scaffold.
- RULE: The `create[name].ts` factory is the single source of composable logic;

## Props

- RULE: Composable props types must be declared in `types.ts`
- RULE: Composable props types must not include `children` or `ClosedTagProps`.
- RULE: Extra `children` or `ClosedTagProps` MUST only be declared in the final component implementation file (`tsx`).

### Composing Props

- RULE: A composable that composes other entities MUST declare their props as an intersection of composed props with own props. Example: `= IconMixinProps & { size: ContentSize }`
- RULE: A composable that composes other composables but must use `= Pick<IconMixinProps, 'exposed'> & { ... }` to hide all other props.
- RULE: A composable that overrides a composed prop must use `Omit<Source, 'prop'>` before intersecting with own prop with same name. Example: `= Omit<IconMixinProps, 'round'> & { round: boolean }`

## API

- RULE: Composable APIs must be declared in `types.ts`
- RULE: API members that carry props for DOM elements should be prefixed by `$`. Example: `$header`.
- RULE: The API member that targets the components root DOM node MUST be name `$root`.
- RULE: API members that carry props for a component MUST be prefixed with underscore. Example: `_icon`, `_surface`.
- RULE: Multitple API members that target the same type of component should have an extra word in the name. Example: `_iconBefore`, `_iconAfter`.
- RULE: API members that carry props for components (`_icon`) myst be declared AFTER the dom (`$root`) ones.
- RULE: API members that are accessor (example: `size()`) or any other non-prop member must be declared after the `$` and `_` members.

### Composing APIs

- RULE: A composable that composes other components must merge the composesed API members individually.

## Implementation

- RULE: Every composable `create*` function MUST use `createExposable(id, props)` for debug purposes.
- RULE: Every composable MUST return its API via `exposeAPI(expose, '$root', {...})` where `$root` is the API member that contains the props for the component's root DOM.
- RULE: A composable that delegates to an existing component MUST return its API via `exposeAPI(expose, '_icon', {...})` where `_icon` is the API member that contains the props for the delegatee component.

## Constants

- RULE: Composable identifier constant must be named in ALL CAPS, prefixed by `$` and exported from `constants.ts`. Example: `$BUTTON`.
- RULE: Composable identified value MUST follow the pattern `'<type>:<package simplified>:<name>'` Example: `mixin:composable:divider`, `controller:composable:icon-action`.
- RULE: Props array constant MUST be named in ALL CAPS, sufixed by `_PROPS` and exported from `constants.ts`. Example: `BUTTON_PROPS`.
- RULE: Props array constant MUST be declared using `definePropKeys<Props>()([...])`.
- RULE: When omitting keys from a mixin's prop keys, the Props array constant must use `omitPropKeys(MIXIN_PROPS, ['key'] as const)`.

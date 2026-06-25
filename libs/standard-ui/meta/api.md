# @no-comply/standard-ui — API

> Generated: 2026-06-25
> By: sub-agent

---

## Entry Point

```
import { ... } from '@no-comply/standard-ui';
```

Source: `./src/index.ts` — barrel re-exporting 16 domain modules.

---

## Domain Modules

| Domain         | Exports                                                                                                                                                                                                                                                                                                                                                                                       |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **action**     | `Button`, `CloseButton`, `ExpandButton`, `IconButton`, `ToggleButton` — solid-ui components<br>`createActionMixin`, `createButtonMixin`, `createIconButtonMixin`, `createSizedActionMixin` — mixin factories<br>`ActionVariant`, `ActionIntent` — types                                                                                                                                       |
| **content**    | `Callout`, `Canvas`, `DataItem`, `DataValue` — components<br>`createContentColorMixin` — mixin                                                                                                                                                                                                                                                                                                |
| **dialog**     | `ModalDialog` — component                                                                                                                                                                                                                                                                                                                                                                     |
| **feedback**   | `ToastMessage` — component                                                                                                                                                                                                                                                                                                                                                                    |
| **focus**      | `createFocusRing` — controller<br>`createFocusRingMixin`, `createFocusRingOffsetMixin` — mixins                                                                                                                                                                                                                                                                                               |
| **form**       | `Field`, `FieldLabel`, `Fieldset`, `FieldsetLabel`, `Form` — components                                                                                                                                                                                                                                                                                                                       |
| **icon**       | `Icon` — lucide-solid wrapper component                                                                                                                                                                                                                                                                                                                                                       |
| **input**      | `Checkbox`, `NumberInput`, `RangeInput`, `SegmentedButton`, `SegmentedButtonItem`, `Select`, `TextInput` — components<br>SegmentedButton contexts, mixins, providers                                                                                                                                                                                                                          |
| **layout**     | `Divider`, `Flex`, `Grid`, `Layout`, `Scrollable` — components<br>`createDividerMixin`, `createFlexMixin`, `createGridMixin`, `createLayoutMixin` — mixins<br>`DividerVariant`, `DividerLength` — types                                                                                                                                                                                       |
| **menu**       | `Menu`, `MenuItemAction`, `MenuItemGroup`, `MenuItemSubMenu` — components<br>`createMenuMixin`, `createMenuItemMixin`, `createMenuItemGroupMixin` — mixins                                                                                                                                                                                                                                    |
| **navigation** | `Link`, `NavLink`, `SkipLink` — components<br>`createLinkMixin`, `createNavLinkMixin`, `createSkipLinkMixin` — mixins                                                                                                                                                                                                                                                                         |
| **organisms**  | `TreeListItemDetails` — component                                                                                                                                                                                                                                                                                                                                                             |
| **popover**    | `AnchoredPopover`, `Popover` — components                                                                                                                                                                                                                                                                                                                                                     |
| **size**       | `ContentSize` (`small`/`normal`/`medium`/`large`)<br>`SizeScale` (`2xs`/`xs`/`s`/`m`/`l`/`xl`) — types only                                                                                                                                                                                                                                                                                   |
| **surface**    | `Surface` — component<br>`createSurfaceMixin` — mixin                                                                                                                                                                                                                                                                                                                                         |
| **theme**      | `ThemeStandard` — provider component<br>Theme constants, settings, composable-ui (responsive breakpoints + variants), SCSS styles<br>Private: dark/light mode contexts, surface variant contexts                                                                                                                                                                                              |
| **typography** | `ActionLabel`, `ActionLabelAligned`, `AlignFirstLine`, `Display`, `DisplayAligned`, `Label`, `LabelAligned`, `Text`, `TextAligned` — components<br>`createActionLabelMixin`, `createAlignFirstLineMixin`, `createComposableTypeMixin`, `createDisplayMixin`, `createLabelMixin`, `createTextMixin` — mixins<br>`AlignFirstLineContext` — provider<br>`DisplayLevel`, `DisplayVariant` — types |

---

## Core Type Reference

| Type             | Values                                                                                                                                  |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `ActionVariant`  | `'primary'` \| `'secondary'` \| `'plain'`                                                                                               |
| `ActionIntent`   | `'positive'` \| `'negative'` \| `'neutral'`                                                                                             |
| `ContentSize`    | `'small'` \| `'normal'` \| `'medium'` \| `'large'`                                                                                      |
| `SizeScale`      | `'2xs'` \| `'xs'` \| `'s'` \| `'m'` \| `'l'` \| `'xl'`                                                                                  |
| `DividerVariant` | `'base'` \| `'strong'` \| `'muted'` \| `'alt'`                                                                                          |
| `DividerLength`  | `'s'` \| `'m'` \| `'l'` \| `'full'`                                                                                                     |
| `SurfaceVariant` | `'stage'` \| `'page'` \| `'card'` \| `'card-rounded'` \| `'panel'` \| `'inverse'` \| `'message'` \| `'toast'` \| `'dialog'` \| `'menu'` |
| `DisplayLevel`   | `1` \| `2` \| `3` \| `4` \| `5`                                                                                                         |
| `DisplayVariant` | `'hero'` \| `'xl'` \| `'l'` \| `'m'` \| `'s'` \| `'xs'`                                                                                 |
| `BreakpointName` | `'m'` \| `'l'`                                                                                                                          |

---

## Main APIs

### Components

Components follow a consistent pattern — see `meta/conventions.md` for full pattern.

```tsx
// Generic component signature (all components follow this shape)
type Props = IntrinsicElementProps & DomainProps;
export const Component: ParentComponent<Props>;
```

### Mixins

Mixins are created via factory functions returning an API object with a `$root` merge target:

```ts
type MixinAPI = {
  $root: MixinRoot;
  // optional accessors
};
const mixin: MixinAPI = createXxxMixin(props);
```

### Providers

```tsx
// ThemeStandard — wraps children with theme context
<ThemeStandard mode="dark" surface="page">
  {children}
</ThemeStandard>

// AlignFirstLineContext — aligns first line of text
<AlignFirstLineContext.Provider value={...}>
  {children}
</AlignFirstLineContext.Provider>
```

### Controllers

```ts
// FocusRing — imperative controller
const ring = createFocusRing();
ring.focus(); // programmatically focus
```

---

## Helpers

| Helper            | Source                        | Description                                                |
| ----------------- | ----------------------------- | ---------------------------------------------------------- |
| `createClassList` | `@no-comply/solid-primitives` | Builds conditional class string from mixin styles          |
| `combineProps`    | `@no-comply/solid-primitives` | Merges multiple prop objects (used in `$root` composition) |
| `createExposable` | `@no-comply/solid-contexts`   | Creates context-exposable state with compose capability    |
| `exposeAPI`       | `@no-comply/solid-contexts`   | Exposes mixin/component API through context                |
| `definePropKeys`  | `@no-comply/solid-primitives` | Type-safe prop key definition for `splitProps`             |

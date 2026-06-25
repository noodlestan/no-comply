# @no-comply/solid-composables — API

**Generated:** 2026-06-25  
**By:** sub-agent

## Entry Point

```
import { ... } from '@no-comply/solid-composables';
```

- **Source:** `src/index.ts`
- **Module:** ESM (`type: "module"`)
- **Side effects:** `false` (tree-shakeable)
- **Build output:** `dist/esm/index.js`

## Exports Summary

19 domain modules re-exported from the package entry. Each module exports controllers (`create{Name}`), mixins (`create{Name}Mixin`), components (`{Name}Base`/`{Name}`), providers (`{Name}Provider`), contexts, helpers, constants, and types.

### `action`

| Kind        | Exports                                                                                                      |
| ----------- | ------------------------------------------------------------------------------------------------------------ |
| Controllers | `createExpandAction`, `createExtendedPressable`, `createIconAction`, `createPressable`, `createToggleAction` |
| Mixins      | `createActionMixin`                                                                                          |

### `content`

| Kind        | Exports                     |
| ----------- | --------------------------- |
| Components  | `VisuallyHidden`            |
| Controllers | `createContentMessage`      |
| Mixins      | `createVisuallyHiddenMixin` |

### `error`

| Kind       | Exports         |
| ---------- | --------------- |
| Components | `ErrorBoundary` |

### `feedback`

| Kind        | Exports                 |
| ----------- | ----------------------- |
| Controllers | `createFeedbackMessage` |

### `focus`

| Kind        | Exports                                                                                                              |
| ----------- | -------------------------------------------------------------------------------------------------------------------- |
| Components  | `FocusableBase`, `FocusTrapBase`                                                                                     |
| Controllers | `createDismissible`, `createFocusable`, `createFocusOut`, `createFocusRing`, `createFocusTrap`, `createPressOutside` |
| Mixins      | `createFocusableMixin`, `createFocusRingMixin`                                                                       |
| Helpers     | `getFocusableElements`                                                                                               |

### `form`

| Kind        | Exports                                         |
| ----------- | ----------------------------------------------- |
| Controllers | `createField`, `createFieldLabel`, `createForm` |
| Mixins      | `createFieldMixin`, `createFieldLabelMixin`     |

### `icon`

| Kind        | Exports           |
| ----------- | ----------------- |
| Controllers | `createIcon`      |
| Mixins      | `createIconMixin` |

### `input`

| Kind        | Exports                                     |
| ----------- | ------------------------------------------- |
| Controllers | `createBaseInput`, `createOptionGroupInput` |
| Providers   | `OptionGroupProvider`                       |
| Contexts    | `createOptionGroupContext`                  |

### `layout`

| Kind       | Exports                                                                                                  |
| ---------- | -------------------------------------------------------------------------------------------------------- |
| Components | `FlexBase`, `LayoutBase`                                                                                 |
| Mixins     | `createDividerMixin`, `createFlexMixin`, `createGridMixin`, `createLayoutMixin`, `createScrollableMixin` |
| Helpers    | `resolveGapShorthand`, `resolvePaddingShorthand`                                                         |
| Constants  | (layout-specific constants, e.g. `$FLEX_BASE`)                                                           |
| Types      | (module-level shared types)                                                                              |

### `menu`

| Kind        | Exports                                                                              |
| ----------- | ------------------------------------------------------------------------------------ |
| Controllers | `createMenu`, `createMenuItemAction`, `createMenuItemGroup`, `createMenuItemSubMenu` |
| Providers   | `MenuContextProvider`, `MenuItemGroupProvider`                                       |
| Types       | (module-level shared types)                                                          |

### `modal`

| Kind        | Exports                  |
| ----------- | ------------------------ |
| Components  | `ModalPortal`            |
| Controllers | `createModalDialog`      |
| Mixins      | `createModalDialogMixin` |

### `navigation`

| Kind        | Exports                       |
| ----------- | ----------------------------- |
| Controllers | `createLink`, `createNavLink` |
| Mixins      | `createLinkMixin`             |
| Helpers     | `isExternalURL`, `linkRelFor` |

### `organisms`

| Module     | Exports                                                                                                                                            |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `List`     | Components, Controllers (`createList`), Contexts, Mixins, Providers (`ListContextProvider`), Helpers, Types                                        |
| `TreeList` | Components, Controllers (`createTreeList`), Contexts, Mixins, Providers (`TreeListContextProvider`), Primitives (`createTreeNode`), Helpers, Types |

### `placement`

| Kind        | Exports               |
| ----------- | --------------------- |
| Controllers | `createPlacement`     |
| Constants   | (placement constants) |
| Types       | (placement types)     |

### `popover`

| Kind        | Exports                                            |
| ----------- | -------------------------------------------------- |
| Components  | `AnchoredPopoverBase`, `PopoverBase`               |
| Controllers | `createAnchoredPopover`, `createPopover`           |
| Mixins      | `createAnchoredPopoverMixin`, `createPopoverMixin` |
| Providers   | `PopoverContextProvider`                           |
| Contexts    | `createPopoverContext`                             |

### `responsive`

| Kind        | Exports                                                                                                            |
| ----------- | ------------------------------------------------------------------------------------------------------------------ |
| Components  | `OverflowItems`                                                                                                    |
| Controllers | `createContainerQuery`, `createMediaQuery`, `createSupportsQuery`                                                  |
| Helpers     | `responsiveBooleanClasses`, `responsiveBooleanClassList`, `responsiveVariantClasses`, `responsiveVariantClassList` |
| Types       | (responsive types)                                                                                                 |

### `surface`

| Kind        | Exports              |
| ----------- | -------------------- |
| Components  | `SurfaceBase`        |
| Controllers | `createSurface`      |
| Mixins      | `createSurfaceMixin` |

### `typography`

| Kind   | Exports                                                                         |
| ------ | ------------------------------------------------------------------------------- |
| Mixins | `createAlignedToFirstLineMixin`, `createAlignFirstLineMixin`, `createTextMixin` |

## Core API Shape

### Controllers (`create*`)

```typescript
type ControllerAPI<T> = {
  $root: CombinedRootProps; // Spread onto root DOM element
  $label?: PropObject; // Optional label props
  $anchor?: PropObject; // Optional anchor props
  $target?: PropObject; // Optional target props
  context: ContextType; // Context value object
  contextValue: ContextValueType; // Value for context provider
  update?: () => void; // Imperative update trigger
  reset?: () => void; // Imperative reset
  [key: string]: unknown; // Domain-specific keys
};
```

### Mixins (`create*Mixin`)

```typescript
type MixinAPI = {
  $root: {
    classList: ClassList; // Reactive CSS class list
    style: Styles; // Inline style object
  };
};
```

### Components (`*Base`)

SolidJS wrapper components that compose a controller + mixin internally. Use `<Dynamic>` for polymorphic HTML elements and `splitProps` for prop separation.

### Providers (`*Provider` / `use*` / `use*Maybe`)

SolidJS context providers. Each exports a provider component and paired hooks (`use{Name}`, `use{Name}Maybe`).

## Internal Boundaries

- `private/` directories contain implementation details not re-exported by the public index
- `functions/` directories (mentioned in glob pattern) are excluded from public API
- Build output strips internal modules; only the entry re-exports are published

# @no-comply/solid-accessibility — API

_Generated: 2026-06-25 | by: sub-agent_

## Entry Point

```
import { ... } from '@no-comply/solid-accessibility';
```

Source: `src/index.ts`

## Exports Summary

The package exports four modules from its barrel index:

| Module        | Kind               | Description                                                                            |
| ------------- | ------------------ | -------------------------------------------------------------------------------------- |
| `attributes`  | Type definitions   | ARIA attribute value types (checked, orientation, live, relevant)                      |
| `role`        | Type definitions   | ARIA role name union types (AriaRoleName, FeedbackRoleName, etc.)                      |
| `tag`         | Type definitions   | HTML tag name union types constrained per role (PressableTagName, DialogTagName, etc.) |
| `controllers` | Reactive factories | 22 `createAria*` controller factories that return spreadable ARIA props                |

## Main API — Controller Factories

All controllers follow the same pattern:

```ts
createAria<Name>(props?: <Name>Props): <Name>API
```

Input: a plain `Props` object. Output: a reactive `API` object with `$`-prefixed keys.

### Base Controllers

| Factory              | Props Type          | API Type          | Description                                   |
| -------------------- | ------------------- | ----------------- | --------------------------------------------- |
| `createAriaLabelled` | `AriaLabelledProps` | `AriaLabelledAPI` | Adds `aria-labelledby` / `aria-label` support |
| `createAriaLive`     | `AriaLiveProps`     | `AriaLiveAPI`     | Adds `aria-live` region semantics             |
| `createAriaBusy`     | `AriaBusyProps`     | `AriaBusyAPI`     | Adds `aria-busy` indicator                    |

### Composed Controllers (region-based)

| Factory              | Props Type          | API Type           | Composes                               |
| -------------------- | ------------------- | ------------------ | -------------------------------------- |
| `createAriaRegion`   | `AriaRegionProps`   | `AriaRegionAPI<T>` | label                                  |
| `createAriaAlert`    | `AriaAlertProps`    | `AriaAlertAPI`     | region (static `'alert'`) + label      |
| `createAriaStatus`   | `AriaStatusProps`   | `AriaStatusAPI`    | region (static `'status'`) + label     |
| `createAriaDialog`   | `AriaDialogProps`   | `AriaDialogAPI`    | region (static `'dialog'`) + label     |
| `createAriaLog`      | `AriaLogProps`      | `AriaLogAPI`       | region (static `'log'`) + live + label |
| `createAriaGroup`    | `AriaGroupProps`    | `AriaGroupAPI`     | region (static `'group'`) + label      |
| `createAriaForm`     | `AriaFormProps`     | `AriaFormAPI`      | region + label                         |
| `createAriaSwitch`   | `AriaSwitchProps`   | `AriaSwitchAPI`    | region (static `'switch'`) + label     |
| `createAriaFeedback` | `AriaFeedbackProps` | `AriaFeedbackAPI`  | region + live + label                  |
| `createAriaTree`     | `AriaTreeProps`     | `AriaTreeAPI`      | region (static `'tree'`) + label       |
| `createAriaTreeItem` | `AriaTreeItemProps` | `AriaTreeItemAPI`  | region (static `'treeitem'`) + label   |

### Standalone Controllers (label-based or independent)

| Factory                | Props Type            | API Type              | Composes |
| ---------------------- | --------------------- | --------------------- | -------- |
| `createAriaPressable`  | `AriaPressableProps`  | `AriaPressableAPI<T>` | —        |
| `createAriaMenu`       | `AriaMenuProps`       | `AriaMenuAPI`         | label    |
| `createAriaMenuItem`   | `AriaMenuItemProps`   | `AriaMenuItemAPI`     | label    |
| `createAriaList`       | `AriaListProps`       | `AriaListAPI`         | label    |
| `createAriaListItem`   | `AriaListItemProps`   | `AriaListItemAPI`     | label    |
| `createAriaRadioGroup` | `AriaRadioGroupProps` | `AriaRadioGroupAPI`   | label    |
| `createAriaSeparator`  | `AriaSeparatorProps`  | `AriaSeparatorAPI`    | —        |

## Return Shape Convention

Every controller returns an object with `$`-prefixed keys for spreading onto SolidJS elements:

```ts
{
  $root: { ... }                  // ARIA props for the root element
  $label?: { id?: string }         // Props for the <label> element
  $description?: { ... }          // Props for the description element
  hasLabel?: Accessor<boolean>     // Whether a label is active
}
```

## Helpers (from @no-comply/solid-primitives)

| Helper           | Signature                                                                | Description                                                           |
| ---------------- | ------------------------------------------------------------------------ | --------------------------------------------------------------------- |
| `computedProps`  | `(record: Record<string, Accessor<unknown>>) => Record<string, unknown>` | Resolves accessor record to a reactive props object                   |
| `combineProps`   | `(...sources: Record<string, unknown>[]) => Record<string, unknown>`     | Merges multiple props objects with conflict resolution                |
| `definePropKeys` | `<T>() => (keys: (keyof T)[]) => (keyof T)[]`                            | Creates typed prop key arrays (curried for type inference)            |
| `shortId`        | `() => string`                                                           | Generates short unique IDs for `aria-describedby` / `aria-labelledby` |

## SCSS Mixins

| File                          | Description                                            |
| ----------------------------- | ------------------------------------------------------ |
| `scss/mixins/visibility.scss` | `visually-hidden` mixin for screen-reader-only content |

# Draft: ADD Field component (prototype exists)

## Classification

`composed` / `form` / `public` — field wrapper with state tracking.

## Entities

| Entity | Kind | Package | Responsibility |
|---|---|---|---|
| `createField` | Controller | `solid-composables` | WIP — must wire `touched`, `invalid`, `modified`, `showFeedback` |
| `Field` | Component | `standard-ui` | Consumer-facing component |

## API

```tsx
type FieldProps = {
  name: string;
  touched?: Accessor<boolean>;
  invalid?: Accessor<boolean>;
  modified?: Accessor<boolean>;
  showFeedback?: boolean;          // show validation UI
  children: ComponentProps;        // slots for label, input, feedback
};
```

## Scope

**In scope:** Wire `setIsTouched`, `setIsInvalid`, `setIsModified` in `createField` (currently logged but not wired). Implement `showFeedback` toggle.

**Not in scope:** Displaying validation rules — leave as consumer slot only.

## Status

Prototype exists in `solid-composables/src/form/controllers/Field/createField.ts` — has `WIP` comment where state setters are logged but not connected.

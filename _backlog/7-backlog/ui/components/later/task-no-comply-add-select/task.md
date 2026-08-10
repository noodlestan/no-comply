# Draft: ADD Select (complete existing)

## Classification

`composed` / `input` / `stateful` / `public` — dropdown selection control.

## Identity

Package: `@no-comply/standard-ui`
Module: `input/components/Select`
Status: exists — needs completion (keyboard, ARIA, value binding verified)

## Dependencies

Composes existing:
- `createBaseInput` — root props, id
- `createOptionGroupInput` (solid-composables) — value/option state
- `createInputBoxMixin` — box styling
- `createInputStateMixin` — disabled/invalid
- `createSizedInputBoxMixin` — sizing
- `createAriaCombobox` or `createAriaListbox` (solid-accessibility) — ARIA pattern

## Props (provisional)

```tsx
type SelectProps = BaseInputProps &
  InputStateMixinProps &
  SizedInputBoxMixinProps & {
    value: Accessor<string>;
    onChange: (value: string) => void;
    options: SelectOption[];
    placeholder?: string;
    native?: boolean;           // use <select> instead of custom
  };
```

## Accessibility

- Role: `combobox` + `listbox` pattern (or native `<select>`)
- Keyboard: Arrow keys to navigate, Enter/Space to select, Escape to close
- ARIA: `aria-expanded`, `aria-activedescendant`, `aria-selected`

## Styling

- Variant classes from `InputBoxMixin`
- State: `.is-open`, `.is-disabled`, `.is-invalid`
- Dropdown panel: `.Select-List`, `.Select-Option`, `.Select-Option.is-selected`

## Decomposition

- No new mixins needed — reuses existing input mixin stack
- Option rendering can be a private `SelectOption` part component
- Native fallback: render `<select>` with `<option>` children when `native={true}`

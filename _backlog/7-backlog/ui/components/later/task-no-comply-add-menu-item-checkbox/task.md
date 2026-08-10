# Draft: Add MenuItemCheckbox

## Classification

`composed` / `menu` / `public` — menu item variant with checkbox state.

## Entities

| Entity | Kind | Package | Responsibility |
|---|---|---|---|
| `MenuItemCheckbox` | Component | `standard-ui` | MenuItem with integrated Checkbox render |

## API

```tsx
type MenuItemCheckboxProps = MenuItemBaseProps & {
  value: Accessor<boolean>;
  onValueChange: (checked: boolean) => void;
  label?: string;
};
```

## Composition

No abstract controllers/mixins — composes at render time only:

```
MenuItemCheckbox
  └── <MenuItem>
        ├── <Checkbox checked={value()} onChange={onValueChange} />
        └── {children}
```

- `value` / `onValueChange` are the checkbox binding
- `_checkbox` props computed locally, passed to `<Checkbox>`
- Reuses existing `MenuItem` for styling, keyboard nav, and ARIA role
- Checkbox rendering is inline — no abstract `createMenuItemCheckbox` controller

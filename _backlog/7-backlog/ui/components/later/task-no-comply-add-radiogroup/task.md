# Draft: Add RadioGroup + RadioGroupItem

> Generated from NOCOMPLY.md item "RadioGroup + RadioGroupItem"
> Status: Draft — classification, API design, decomposition

---

## Classification

| Aspect | Value |
|---|---|
| Type | `composed` — built by composing ARIA controllers, selection state, and themed mixins |
| Structure | `compound` — two components (`RadioGroup` + `RadioGroupItem`) designed to be used together |
| State | `stateful` / `interactive` — owns selection state, responds to keyboard and pointer input |
| Visibility | `public` — exported and documented for external use |
| Package | `standard-ui` (components) + `solid-composables` (controllers) + `solid-accessibility` (ARIA) |

---

## API Design

### Identity

- **RadioGroup** — `component:standard-ui:radio-group` at `$PROJECT/src/input/components/RadioGroup/`
- **RadioGroupItem** — `component:standard-ui:radio-group-item` at `$PROJECT/src/input/components/RadioGroupItem/`
- New entities (no existing components to extend/replace)

### Dependencies

#### Existing (can compose)

| Dependency | Package | Role |
|---|---|---|
| `createAriaRadioGroup` | `@no-comply/solid-accessibility` | ARIA `radiogroup` role (fieldset), label/description |
| `createAriaRadio` (new) | `@no-comply/solid-accessibility` | ARIA `radio` role, `aria-checked` — **NEEDS CREATION** |
| `createOptionGroupInput` | `@no-comply/solid-composables` | Value selection state (existing in `input/controllers/OptionGroupInput`) |
| `createPressable` | `@no-comply/solid-accessibility` | Pointer/keyboard interaction for items |
| `createFocusableMixin` | `@no-comply/solid-composables` | Focus management |
| `InputStateMixin` | `solid-composables` | `disabled`, `invalid` state |
| `SizedInputBoxMixin` | `standard-ui` mixins | Sizing (match other inputs) |
| `FieldLabel` | `standard-ui` | Label composition |

#### Props shape (provisional)

```tsx
// RadioGroup
type RadioGroupProps = {
  value: Accessor<string>;
  onChange: (value: string) => void;
  name?: string;
  orientation?: 'vertical' | 'horizontal';
  disabled?: boolean;
  invalid?: boolean;
  // inherited from AriaRadioGroup
  children: ComponentProps;
};

// RadioGroupItem
type RadioGroupItemProps = {
  value: string;
  disabled?: boolean;
  // inherited from AriaRadio + Pressable + base input styles
  children: ComponentProps;
};
```

### State & Interaction

- **RadioGroup**: owns `selectedValue` state
- **RadioGroupItem**: exposes `checked` state derived from group value
- **Keyboard**: ArrowUp/Down (vertical) or ArrowLeft/Right (horizontal) to navigate, Space to select
- **ARIA**: `radiogroup` role on container, `radio` role on each item, `aria-checked` on selected
- **Focus**: roving tabindex pattern (one tab stop for the group)

### Styling (standard-ui)

- Variant classes: `variant-{variant}` for items (e.g., `base`, `button`)
- State classes: `.is-checked`, `.is-disabled`, `.is-focused`
- Orientation: `orientation-vertical`, `.orientation-horizontal`
- CSS module: `RadioGroup.module.scss` + `RadioGroupItem.module.scss`

---

## Decomposition

### Proposed entities

| Entity | Kind | Package | Responsibility |
|---|---|---|---|
| `createAriaRadio` | ARIA controller | `solid-accessibility` | ARIA `radio` role, `aria-checked`, `tabindex` coordination — **NEW** |
| `createRadioGroup` | Controller | `solid-composables` | Selection state, keyboard navigation, wiring between group + items |
| `createRadioGroupItem` | Controller | `solid-composables` | Item-level checked state, press handling |
| `RadioGroupMixin` | Mixin | `standard-ui` | Themed styling for the group container |
| `RadioGroupItemMixin` | Mixin | `standard-ui` | Themed styling for each item |
| `RadioGroup` | Component | `standard-ui` | Renders `<fieldset>` with legend/label |
| `RadioGroupItem` | Component | `standard-ui` | Renders `<label><input type="radio">` or custom styled radio |

### Potential abstractions to solid-composables

- `createRadioGroup` controller could be stripped of standard-ui styling and hoisted to `solid-composables/src/input/controllers/RadioGroup/`
- `createRadioGroupItem` controller similarly to `solid-composables/src/input/controllers/RadioGroupItem/`

---

## Deduplication

| Candidate | Match | Action |
|---|---|---|
| `createAriaRadioGroup` (solid-accessibility) | Full match for ARIA group semantics | Compose directly |
| `createAriaRadio` | **Does not exist** — must create | New entity |
| `createOptionGroupInput` (solid-composables) | Partial — value selection pattern | Reference for state design |
| `SegmentedButton` / `SegmentedButtonItem` (standard-ui) | Similar compound pattern | Reference for decomposition style |
| `createPressable` (solid-accessibility) | Partial — click/keyboard handling | Compose for item interaction |

---

## Notes

- Reference existing `SegmentedButton` + `SegmentedButtonItem` for the compound component pattern: separate directories, linked via context provider.
- ARIA radio pattern requires roving tabindex — one item receives keyboard focus at a time.
- `createOptionGroupInput` in `solid-composables` already handles option selection — may be reusable or a good base to extend.

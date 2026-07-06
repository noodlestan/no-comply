# Component Task Template

Use this template to produce a concrete component task grounded in repo conventions.

Fill out every section that applies. Leave N/A sections as `—` (em-dash) rather than deleting them.

---

## Component Identity

- **Name:** `<ComponentName>`
- **Target:** `<package-name>` `src/<domain>/components/<name>/`
- **Based on:** `<ExistingComponent>`

## Dependencies

### Composes / wraps

- `<ExistingComponent>` — `<role in composition>`
- `<ExistingComponent>` — `<role>`

### Mixins / controllers / contexts consumed

- `create<Mixin>(...)` — produces `$root`, `<member>`
- `use<Context>()` — provides `<value>`
- `<Utility>` — `<purpose>`

### Accessibility

- **Role:** `<role>` (e.g. `switch`, `button`, `combobox`)
- **Keyboard:** `<key>` → `<action>`
- **ARIA:** `<attribute>` bound to `<prop / state>`
- **Live region / focus trap / etc:** `yes` / `no`

## API Surface

### Inherits props from

| Source           | Props              | Strategy                |
| ---------------- | ------------------ | ----------------------- |
| `ComposableName` | `<propA>, <propB>` | `all` / `pick` / `omit` |
| `MixinName`      | `<propC>`          | `all` / `pick` / `omit` |

### Own Props (local)

| Prop     | Type                     | Required | Default                    | Description                |
| -------- | ------------------------ | -------- | -------------------------- | -------------------------- |
| value    | boolean                  | yes      | —                          | Selected state             |
| size     | `ContentSize`            | no       | normal                     |                            |
| iconOnly | boolean                  | no       | false                      | Hide label, show icon only |
| variant  | solid, outlined, plain   | no       | solid                      |                            |
| labels   | `ToggleActionLabelsProp` | no       | `{ on: 'On', off: 'Off' }` |                            |

### API members (exposed via `$root` / `exposeAPI`)

| Member  | Type                                                       | Origin               | Description               |
| ------- | ---------------------------------------------------------- | -------------------- | ------------------------- |
| `$root` | `ButtonProps & AriaSwitchAPI['$root'] & MixinAPI['$root']` | composed             | Root button element props |
| `_icon` | `IconProps`                                                | `createToggleAction` | Icon element props        |

### Children / Slots / render delegation

- Renders children: yes via `RenderProp<Something>`
- Other slots: prop `title: JSX.Element`

## Renders

Simple component example:

```
<button {...$root}>
```

Complex comonent. Shows how each API member is spread onto DOM nodes and what other nodes are rendered in the component JSX.

```
<SomeProvider value={contextValue}>
  <div {...$root}>
     <span {...$label} />
	 <Icon {..._icon} />
	 {locals.children}
  </div>
</Provider>
```

## Variants & Theming

| Variant axis | Values                          | Mechanism                        |
| ------------ | ------------------------------- | -------------------------------- |
| `size`       | `sm`, `md`, `lg`                | CSS class / inline style / token |
| `tone`       | `neutral`, `brand`, `critical`  | CSS class                        |
| `state`      | `active`, `disabled`, `focused` | aria attribute / CSS             |

## Example Usage

```tsx
<ToggleButton value={signal()} onChange={setSignal} />
```

## Parts (private)

For multi-part components specify each part `Props`, `API` and what they render.

## Composition

For components implementations that are broken down into multiple composables (new controllers and mixins) specify, for each new entity, its `Props`, `API` and what they render.

## Out of scope

- Items explicitly excluded from this task.
- Implementation decisions left to the implementer.

---

## Conventions Referenced

- `<path-to-relevant-convention-file>`

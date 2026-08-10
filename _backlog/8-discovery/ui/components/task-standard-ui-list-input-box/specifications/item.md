# ADD component:standard-ui:list-input-box-item

## Metadata

template: `.agents/skills/write-no-comply-composable-task/no-comply-composable-spec-template.md`

## Mandatory Reading

- `no-comply/knowledge/glossary.md`

## Why

Each option item in the ListInputBox needs ARIA option role attributes, press/keyboard interaction, and styled states (selected, focused). This component composes the lower-level parts into a convenient single component that consumers can use directly or replace with custom markup.

## Example Usage

```tsx
<ListInputBoxItem
  selected={isSelected()}
  onPress={handleSelect}
>
  {getLabel(key)}
</ListInputBoxItem>
```

## Identity

Package: `@no-comply/standard-ui`
Module: `input/components/ListInputBoxItem`
Name: `ListInputBoxItem`
Factory: N/A (component)
CSS Module?: YES (via composed mixin)
Id: `component:standard-ui:list-input-box-item`

## Responsibility

Render a single option item within the ListInputBox list. Compose ARIA option attributes, pressable interaction, and item styling into a simple component the consumer can use in both the `selectedItem` and `children` render prop slots.

## Composes

Confirmed:
- `createPressable` — click/Enter/Space press handling
- `createListInputBoxItemMixin` — item styling classes (selected, focused)
- `_option` API from `createAriaListbox` — role `option`, `aria-selected`, `aria-posinset`, `aria-setsize`

## Accepts Props

**Own props:**

- `children: JSX.Element` — content to render inside the item

**Composed props:**

From `createPressable` — `onPress`, `disabled`
From `createListInputBoxItemMixin` — `selected`, `focused`
From `createAriaListbox._option` — `aria-selected`, `aria-posinset`, `aria-setsize`

## Component

Is a `ParentComponent`.

### Props

Accepts also standard DOM attributes as `$others`.

### Renders

**Structure**

```
<div {...$root} role="option" aria-selected={selected} aria-posinset={pos} aria-setsize={size}>
  {children}
</div>
```

**Responsibilities**

- The root element gets the combined props from `createPressable.$root`, `createListInputBoxItemMixin.$root`, and `createAriaListbox._option`
- `createPressable` provides `onClick` and `onKeyDown` for Enter/Space

## Unrefined

- `createPressable` Space/Enter behavior: ARIA listbox says Enter selects, Space toggles (in multiselect). May need a prop on `createPressable` to opt out of Space or Enter.
- The item should set `tabindex` depending on whether it's the active (roving) item — this is managed by the keyboard controller, not the item itself. The item just receives the tabindex value as a prop.
- Focus ring: should the item manage its own focus-visible styling (via `createFocusRingMixin`) or is that part of the item mixin?

## Follow ups

- No follow-up items identified for this entity.

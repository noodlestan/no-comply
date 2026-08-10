# ADD mixin:standard-ui:list-input-box-item

## Metadata

template: `.agents/skills/write-no-comply-composable-task/no-comply-composable-spec-template.md`

## Mandatory Reading

- `no-comply/knowledge/glossary.md`

## Why

Each option item in the ListInputBox needs styled visual states: selected, focused, hover. This mixin provides the CSS class bindings for those states.

## Example Usage

```tsx
const { $root } = createListInputBoxItemMixin({ selected: isSelected(), focused: isFocused() });
<div {...combineProps($root, pressable.$root)}>...</div>
```

## Identity

Package: `@no-comply/standard-ui`
Module: `input/mixins/ListInputBoxItem`
Name: `ListInputBoxItemMixin`
Factory: `createListInputBoxItemMixin`
CSS Module?: YES
Id: `mixin:standard-ui:list-input-box-item`

## Responsibility

Provide class bindings for each option item: `.list-input-box-item`, `.is-selected`, `.is-focused`.

## Accepts Props

- `selected?: boolean` — drives `.is-selected` class
- `focused?: boolean` — drives `.is-focused` class

## Computes

**ClassLists**

Exposed in `$root`:

- `.list-input-box-item` (static)
- `.is-selected` bound to prop `selected`
- `.is-focused` bound to prop `focused`

## Exposes API

- `$root: { classList: ClassList }`

# ADD mixin:standard-ui:list-input-box

## Metadata

template: `.agents/skills/write-no-comply-composable-task/no-comply-composable-spec-template.md`

## Mandatory Reading

- `no-comply/knowledge/glossary.md`

## Why

The ListInputBox needs a styled container that reflects its open/closed state and integrates with the existing input mixin stack (InputBoxMixin, SizedInputBoxMixin, InputStateMixin).

## Example Usage

```tsx
const { $root } = createListInputBoxMixin({ open: isOpen() });
<div {...combineProps($root, otherRoot)}>...</div>
```

## Identity

Package: `@no-comply/standard-ui`
Module: `input/mixins/ListInputBox`
Name: `ListInputBoxMixin`
Factory: `createListInputBoxMixin`
CSS Module?: YES
Id: `mixin:standard-ui:list-input-box`

## Responsibility

Provide structural root classes for the listbox container: `.list-input-box`, `.is-open`, and any size variant classes composed from `SizedInputBoxMixin`.

## Composes

Composes `InputBoxMixin` and `SizedInputBoxMixin`, inheriting their classList outputs.

## Accepts Props

- `open?: boolean` — drives `.is-open` class

## Computes

**ClassLists**

Exposed in `$root`:

- `.list-input-box` (static)
- `.is-open` bound to prop `open`

Plus composed classLists from `InputBoxMixin` and `SizedInputBoxMixin`.

## Exposes API

- `$root: { classList: ClassList }`

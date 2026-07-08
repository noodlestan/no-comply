# Solid JS Conventions

## Types

### Default Props Pattern

- RULE: Optional props with defaults MUST be declared using `PickRequired<Props, 'key'>` in a `defaultProps` const and accessed via `() => props.key ?? defaultProps.key`.

## Children and Render Props

- RULE: Components accepting children MUST use `ParentComponent<Props>` and split `'children'` from `PROP_KEYS`.
- RULE: Render prop children MUST use the `RenderProp<T>` type from `@no-comply/solid-primitives` (e.g., `children: RenderProp<{ field: FieldAPI }>`).

## Context Providers

- RULE: Components that coordinate subtrees (Field, Menu, ModalDialog) MUST wrap their content in a `*ContextProvider` and propagate an API object via `contextValue`.

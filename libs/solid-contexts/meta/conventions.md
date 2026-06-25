# @no-comply/solid-contexts — Conventions

> This file extends [no-comply libs conventions](../../../conventions/no-comply-libs.md).

## Naming Conventions

| Category               | Pattern                                   | Examples                                                           |
| ---------------------- | ----------------------------------------- | ------------------------------------------------------------------ |
| Feature modules        | Lowercase, singular                       | `context`, `form`, `icons`, `locale`, `navigation`                 |
| Context factories      | `create<Name>Context()`                   | `createModeContext()`, `createFocusContext()`                      |
| Helper factories       | `create<Thing>()`                         | `createContextId()`, `createFocusTarget()`, `createUIController()` |

## API Design Patterns

- **Tuple returns for small APIs** — Focus targets use tuple patterns (`[setFocus]`, `[setTarget, unsetTarget]`)
- **`eslint-disable solid/reactivity`** on provider components — intentional: the provider is a pass-through that should not track reactive dependencies

## File Organization

- **Internal shared utilities**: `src/private/` for low-level helpers shared across modules (e.g., `string/capitalize.ts`)

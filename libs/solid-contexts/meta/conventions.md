# @no-comply/solid-contexts — Conventions

Generated: 2025-06-25
Author: sub-agent

## Naming Conventions

| Category               | Pattern                                   | Examples                                                           |
| ---------------------- | ----------------------------------------- | ------------------------------------------------------------------ |
| Feature modules        | Lowercase, singular                       | `context`, `form`, `icons`, `locale`, `navigation`                 |
| Context objects        | `<Name>Context` / `<Name>CTX`             | `SystemContext`, `LocaleCTX`, `ActiveContextsCTX`                  |
| Provider components    | `<Name>Provider`                          | `SystemContextProvider`, `LocaleProvider`                          |
| Consumer hooks         | `use<Name>()`                             | `useSystemContext()`, `useLocale()`                                |
| Optional (Maybe) hooks | `use<Name>Maybe()`                        | `useExposeServiceMaybe()`                                          |
| Service factories      | `create<Name>Service()`                   | `createSystemContextService()`, `createSettingsService()`          |
| Context factories      | `create<Name>Context()`                   | `createModeContext()`, `createFocusContext()`                      |
| Helper factories       | `create<Thing>()`                         | `createContextId()`, `createFocusTarget()`, `createUIController()` |
| Reducer helpers        | `reduce<Thing>`                           | `reduceContextVariantVars()`, `reduceContextVariantData()`         |
| Type suffixes          | `API`, `Props`, `Options`, `Value`, `Map` | `ExposeServiceAPI`, `NavigationServiceOptions`                     |
| Constants              | `UPPER_SNAKE_CASE`                        | `EXPOSED_DATA_PROPS`                                               |

## File Organization

- **One concept = one directory** — each public entity (e.g., `SystemContext`, `Locale`, `Navigation`) is a directory even if it has only 1-2 files.
- **Consistent internal structure**: `<Name>/Provider.tsx`, `<Name>/use<Name>.tsx`, `<Name>/private/`, `<Name>/index.ts`.
- **Service/Provider split**: services (pure logic, can create outside Solid tree) live in `services/`. Providers (Solid components) live in `providers/`.
- **Index-as-barrel**: every directory has an `index.ts` generated via `// @index` codegen directive.
- **One index entrypoint per module**: `src/<module>/index.ts` → aggregated by `src/index.ts`.
- **Private directories**: `private/` at any level contains implementation details NOT re-exported. The `// @index` pattern explicitly excludes `private/` and `parts/` directories.
- **Internal shared utilities**: `src/private/` for low-level helpers shared across modules (e.g., `string/capitalize.ts`).

## API Design Patterns

1. **Provider + Hook** — Every feature exports a `<Name>Provider` component and a `use<Name>()` hook. The hook `useContext()`-reads SolidJS context and throws a descriptive error if not wrapped.

2. **Optional hooks** — `use<Name>Maybe()` returns `T | undefined` for contexts where the provider may not be present (e.g., `useExposeServiceMaybe`).

3. **Service injection** — Services are created externally via factory functions and passed as props to providers. Providers never create services themselves (except optional default fallback in `SystemContextProvider`).

4. **Factory functions** — Named `create<Name>Service(options?)` returning a typed API object.

5. **Tuple returns for small APIs** — Focus targets use tuple patterns (`[setFocus]`, `[setTarget, unsetTarget]`).

6. **Accessor-based reactive interfaces** — Service APIs expose `Accessor<T>` rather than raw signals (e.g., `colorScheme: Accessor<SystemColorSchemeName>`).

7. **Discriminated unions for variant types** — `Setting` is a typed union discriminated by `type` field (`'boolean' | 'number' | 'range' | 'string' | 'options' | 'params' | 'color-name'`).

8. **`eslint-disable solid/reactivity`** on provider components — intentional: the provider is a pass-through that should not track reactive dependencies.

9. **Defensive hooks** — Every `use*()` hook throws a descriptive error if used outside its provider: `"useX() must be wrapped in <X/>"`.

10. **Short alias exports** — `resolveIconValue` re-exported as `i`, `resolveLabelValue` re-exported as `l` for convenient use in JSX.

## Typing Conventions

- **`type` over `interface`** — consistently uses `type` for all type declarations.
- **`API` suffix** for service interfaces — `SystemContextServiceAPI`, `ExposeServiceAPI`, `SettingsServiceAPI`.
- **Generic constraints** on containers — `UIControllerContainer<T extends UIControllerChildAPI>`.
- **`Accessor<T>` for reactive reads** — signals exposed as `Accessor<T>`, never raw `Signal<T>`.
- **String literal types** for discriminators — `type: 'mode'`, `type: 'dark' | 'light'`.
- **`AnyProps` for dynamic props** — uses `@no-comply/solid-primitives` `AnyProps` for prop spread patterns.
- **`definePropKeys` for constant arrays** — typed constant arrays via `definePropKeys<Type>()([...])`.

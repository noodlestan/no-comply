# @no-comply/solid-contexts — Architecture

Generated: 2025-06-25
Author: sub-agent

## Design Principles

1. **Explicit over implicit** — Services are explicitly created and injected as props. No global singletons, no module-level state.
2. **Separation of concerns** — Service factory functions (pure logic) are separated from SolidJS provider components (rendering). Factories can be tested independently.
3. **Interface-based API design** — Every service is defined by a typed `*API` interface. Consumers depend on interfaces, not implementations.
4. **Composition over inheritance** — Features compose by wrapping providers; controllers compose via child/parent aggregation.
5. **Minimal reactivity surface** — APIs expose `Accessor<T>` (read-only). State mutations happen through explicit method calls.
6. **Tree-shakeable by default** — Each feature module is independently importable; `sideEffects: false`.

## Layering

```
┌─────────────────────────────────────────────────────┐
│                 Container Layer                      │
│  (mode, surface, theme, selection, form)             │
│  High-level context composition built on core        │
├─────────────────────────────────────────────────────┤
│                Feature Service Layer                 │
│  (locale, navigation, settings, shortcuts, modals,   │
│   icons, labels, focus, expose)                      │
│  Domain services with SolidJS reactivity             │
├─────────────────────────────────────────────────────┤
│               Core Infrastructure                   │
│  (context tree, controller, container, system)       │
│  Primitive building blocks                           │
└─────────────────────────────────────────────────────┘
```

**Core → Feature direction**: Core has no feature dependencies. Features may import core types but not vice versa.

## Dependency Flow

```
container ──► context ──► (types only)
controller ─► (standalone, imports icons types)
shortcuts ──► controller
expose ─────► (standalone, depends on solid-primitives)
locale ─────► (standalone, depends on i18next)
navigation ► (standalone)
settings ──► (standalone)
icons ─────► (standalone, lucide-solid)
labels ────► (standalone)
focus ─────► (standalone)
form ──────► (uses context types)
selection ► (uses context types)
modals ────► (standalone)
system ────► (standalone)
```

No circular dependencies detected.

## Module Structure Convention

Every feature module follows the same internal layout:

```
src/<module>/
  index.ts            — barrel re-export (// @index codegen)
  types.ts            — module-specific types (optional)
  contexts/           — SolidJS createContext/useContext
    <Name>/
      index.ts
      <Name>Provider.tsx
      use<Name>.tsx
      private/
  providers/          — Provider components + consumer hooks
    <Name>/
      index.ts
      <Name>Provider.tsx
      use<Name>.tsx
      use<Name>Maybe.tsx (optional)
      private/
  services/           — Factory functions
    <Name>/
      index.ts
      create<Name>Service.ts
      types.ts
      private/
  helpers/            — Pure utility functions
  private/            — Module-internal implementation (never public)
```

## Internal vs External Boundaries

- `private/` directories at every level contain implementation details **not re-exported**.
- The root `index.ts` uses `// @index` codegen that explicitly skips `private/` directories.
- `src/private/` contains low-level internal utilities (e.g., `string/capitalize.ts`).

## Extensibility Model

1. **Service injection** — Applications provide custom service implementations via props.
2. **Provider nesting** — Multiple providers of the same type can be nested (SolidJS context inheritance).
3. **Context variant system** — Consumers define new variants by extending `ContextVariant`.
4. **Settings extensibility** — `addSettings`/`addGroups` at runtime.
5. **Controller hierarchy** — Controllers nest arbitrarily with parent/child lifecycle.

## External Dependencies

| Dependency                       | Version | Purpose                                                           |
| -------------------------------- | ------- | ----------------------------------------------------------------- |
| `@no-comply/solid-accessibility` | 0.0.11  | Sibling accessibility primitives                                  |
| `@no-comply/solid-primitives`    | 0.0.11  | Sibling primitive utilities (types, combineProps, definePropKeys) |
| `@solid-primitives/map`          | 0.7.3   | `ReactiveMap` for reactive key-value stores                       |
| `@solid-primitives/refs`         | 1.1.3   | Ref utilities                                                     |
| `@solid-primitives/set`          | 0.7.3   | Reactive Set                                                      |
| `solid-services`                 | 4.3.2   | Service injection pattern                                         |
| `ts-deepmerge`                   | 8.0.0   | Deep object merging                                               |

## Peer Dependencies

| Dependency          | Version  | Purpose                                    |
| ------------------- | -------- | ------------------------------------------ |
| `solid-js`          | ^1.9.5   | SolidJS core                               |
| `i18next`           | ^24.2.3  | Internationalization (locale module)       |
| `lucide-solid`      | ^0.453.0 | Icon component library (icons module)      |
| `html-parse-string` | ^0.0.9   | HTML parsing for translation interpolation |

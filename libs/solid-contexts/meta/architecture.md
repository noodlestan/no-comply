# @no-comply/solid-contexts — Architecture

> This file extends [no-comply-libs architecture](../../../architecture/no-comply-libs.md).

Generated: 2025-06-25
Author: sub-agent

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

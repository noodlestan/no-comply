# Meta Enitities

## Component

- **Purpose:** Represents a UI component entity in the No Comply meta model. Components are the primary visual building blocks.
- **Key fields (ComponentEntityData):**
  - `type: 'component'` (discriminated union tag)
  - `group: string` — the component group/category
  - `component: string` — the component name
  - `factory: string` — the factory function used to create this component
  - `module: string | undefined` — the module it belongs to
  - `path: string` — filesystem path
  - Inherits `NoComplyEntityData` (from `EntityDataBase`), which provides `id`, `name`, etc.
- **File set (ComponentEntityFiles):** `index`, `implementation`, `factory` (optional), `types`
- **Relationships:** Providers reference components by name (`components: string[]`). Used by/within modules.

## Context

- **Purpose:** Represents a context entity — a scoped data/state context (similar to React Context or DI scope).
- **Key fields (ContextEntityData):**
  - `type: 'context'` (discriminated union tag)
  - `factories: string[]` — list of factory functions that produce this context's value
  - `module: string | undefined`
  - `path: string`
  - Inherits `NoComplyEntityData`
- **File set (ContextEntityFiles):** `index`, `implementation`, `types` (optional)
- **Relationships:** Controllers and Mixins share the same shape (`factories: string[]`). Contexts provide scoped values consumed by other entities.

## Controller

- **Purpose:** Represents a controller entity — handles business logic, coordination, or event handling (akin to MVC controller or state machine controller).
- **Key fields (ControllerEntityData):**
  - `type: 'controller'` (discriminated union tag)
  - `factories: string[]` — list of factory functions
  - `module: string | undefined`
  - `path: string`
  - Inherits `NoComplyEntityData`
- **File set (ControllerEntityFiles):** `index`, `implementation`, `types`
- **Relationships:** Shares the same shape shape (`factories: string[]`) as Context and Mixin.

## Mixin

- **Purpose:** Represents a mixin entity — reusable behaviour/functionality that can be composed into other entities.
- **Key fields (MixinEntityData):**
  - `type: 'mixin'` (discriminated union tag)
  - `factories: string[]` — list of factory functions
  - `module: string | undefined`
  - `path: string`
  - Inherits `NoComplyEntityData`
- **File set (MixinEntityFiles):** `index`, `implementation`, `types`
- **Relationships:** Shares the same shape (`factories: string[]`) as Context and Controller. Mixins compose into other entities.

## Module

- **Purpose:** Represents a module entity — a grouping/organisational unit that aggregates other entities.
- **Key fields (ModuleEntityData):**
  - `type: 'module'` (discriminated union tag)
  - `helpers: string[]` — list of helper files/modules
  - `module: string | undefined`
  - `path: string`
  - Inherits `NoComplyEntityData`
- **File set (ModuleEntityFiles):** `index`, `types` (optional), `helpers: string[]`
- **Relationships:** Modules are the container/organiser — every other entity references a `module`. Modules reference helpers.

## Provider

- **Purpose:** Represents a provider entity — supplies dependencies (components, hooks, values) to the DI/injection system.
- **Key fields (ProviderEntityData):**
  - `type: 'provider'` (discriminated union tag)
  - `components: string[]` — list of component names this provider supplies
  - `hooks: string[]` — list of hook names this provider supplies
  - `module: string | undefined`
  - `path: string`
  - Inherits `NoComplyEntityData`
- **File set (ProviderEntityFiles):** `index`, `implementation`, `hooks: string[]`
- **Relationships:** Directly references Component entities by name (`components`). Provides hooks. No `types` file (unlike most others).

## Service

- **Purpose:** Represents a service entity — encapsulates business logic, data access, or external integrations.
- **Key fields (ServiceEntityData):**
  - `type: 'service'` (discriminated union tag)
  - `factories: string[]` — list of factory functions
  - `module: string | undefined`
  - `path: string`
  - Inherits `NoComplyEntityData`
- **File set (ServiceEntityFiles):** `index`, `implementation`, `types`
- **Relationships:** Shares the same shape (`factories: string[]`) as Context, Controller, and Mixin.

## Shared base types (from `entities/types.ts` and `@purrception/primitives`)

- **`NoComplyEntityPartial<T>`** extends `EntityDataBasePartial<T>` with:
  - `module: string | undefined` — foreign-key reference to the owning module
  - `path: string` — filesystem path for the entity
- **`NoComplyEntityData`** = `EntityDataBase` & `NoComplyEntityPartial` — every entity type composes this via intersection.

# @no-comply/solid-contexts — Architecture

> This file extends [no-comply-libs architecture](../../../architecture/no-comply-libs.md).

Generated: 2025-06-25
By: opencode/mimo-v2.5-free
Updated: 2026-06-26

## Project Context

solid-contexts provides context-aware services and providers for SolidJS applications and component libraries. It consumes SolidJS reactive primitives, `@solid-primitives/*` utilities, and `solid-services` for service injection. It exposes 14 feature modules covering UI controller lifecycle, context tree management, theming, navigation, focus management, modals, shortcuts, icons, labels, locale, settings, selection, forms, and development API exposure.

The package serves as a foundational layer for `@no-comply/standard-ui` and `@no-comply/solid-composables`, providing the context infrastructure that higher-level UI components depend on.

**API categories:** Context factories, Provider components, consumer hooks, service factories, helper functions, types.

## Design Principles

### Core Context Architecture

- **Context tree over flat context** — Every context type (mode, surface, theme) uses a hierarchical parent-child tree structure rather than flat SolidJS context. This enables nested providers with automatic inheritance and variant resolution.

- **Variant composition** — Context variants are composable objects that reduce to CSS custom properties and data attributes at runtime. Variants extend parent variants, creating a chain of style inheritance without prop drilling.

### Service Separation

- **Factory functions for services** — All services (`createLocaleService`, `createNavigationService`, `createSettingsService`, etc.) are factory functions returning typed plain objects. Services contain no JSX; they are pure logic separated from rendering.

- **Provider components as thin wrappers** — Provider components only wire SolidJS context and render children. All reactivity and state management lives in the service layer.

### Controller Hierarchy

- **UI controllers as lifecycle managers** — Controllers manage activation, deactivation, override, suspend, and resume cycles. Parent controllers track children; child controllers communicate upward through the hierarchy.

- **Container-based controller management** — Controllers are stored in reactive maps (`UIControllerContainer`) enabling dynamic registration and lookup.

### Development Experience

- **Exposable system** — Components expose their API through a tracking system that enables development-time inspection without runtime overhead in production.

- **Safe consumption hooks** — Most providers expose both `use*` (throws if missing) and `use*Maybe` (returns undefined) variants for flexible consumption patterns.

### Module Consistency

- **Uniform module structure** — Every feature module follows the same internal layout: `index.ts`, `types.ts`, `contexts/`, `providers/`, `services/`, `helpers/`, `private/`. This consistency reduces cognitive load when navigating the codebase.

## Structure

```
src/
  index.ts                              — re-exports all 14 feature modules
  context/                              — context tree, effects, providers, services
    contexts/ContextTree/               — createContextNode, createContextRoot
    effects/                            — createContextDataEffect, createContextVarsEffect
    providers/{ActiveContexts, ContextTree, ContextVariants}/
    services/ActiveContexts/
  controller/                           — UI controller lifecycle
    helpers/                            — createUIController*, createUIControllerRoot
  container/                            — high-level context composition
    contexts/{Mode, Surface, Theme}/
    providers/{ModeContext, SurfaceContext, ThemeContext}/
  focus/                                — focus target management
    contexts/Focus/
    providers/{FocusContext, FocusTargets}/
    services/FocusTargets/
  form/                                 — form and field context
    contexts/{Field, Form}/
    providers/{FieldContext, FormContext}/
  icons/                                — icon registry and resolution
    helpers/                            — createIconValue, resolveIconValue
    providers/{Icons, LocalIcons}/
    services/Icons/
  labels/                               — label resolution
    helpers/                            — resolveLabelValue
    providers/LocalLabels/
  locale/                               — i18n and translation
    components/Translate/
    providers/Locale/
    services/{Locale, TranslateService}/
  modals/                               — modal stack management
    contexts/Modal/
    providers/{ModalContext, Modals}/
    services/Modals/
  navigation/                           — URL-based navigation
    providers/Navigation/
    services/Navigation/
  selection/                            — selection context
    contexts/Selection/
    providers/SelectionContext/
  settings/                             — typed settings registry
    providers/Settings/
    services/Settings/
  shortcuts/                            — keyboard shortcut service
    helpers/                            — createCommandMap, createShortcutsController
    providers/Shortcuts/
    services/Shortcuts/
  system/                               — system context (color scheme, etc.)
    providers/SystemContext/
    services/SystemContext/
```

## Main Patterns

### Context Providers

Container contexts (`mode`, `surface`, `theme`) use identical internal patterns: context factory → provider component → consumer hook. Each supports parent-child tree nesting with variant composition.

Feature services (`locale`, `navigation`, `settings`, `shortcuts`, `modals`, `icons`, `labels`, `focus`, `expose`) follow a service-first pattern: factory function creates typed service, provider component wires SolidJS context, consumer hooks access service.

### Controller System

UI controllers manage component lifecycle through activation/deactivation cycles. Controllers form parent-child hierarchies where parents track children and children can communicate state changes upward.

### Exposable System

Development API exposure uses `createExposable` to wrap component APIs with tracking and data attributes. The `ExposeProvider` manages the tracking service; `useExposeService`/`useExposeServiceMaybe` provide access.

## Layers

Core infrastructure (`context`, `controller`, `container`, `system`) has no feature dependencies. Features may import core types but not vice versa.

Feature services are independent of each other — `locale` does not depend on `navigation`, `shortcuts` does not depend on `icons`. This enables selective adoption.

Container contexts (`mode`, `surface`, `theme`) sit at the top of the dependency graph, consuming core infrastructure and exposing high-level context composition.

Import direction flows strictly: core → feature → container. No circular dependencies exist at the public boundary.

## External Dependencies

### Peer Dependencies

- **solid-js** (`^1.9.5`) — Reactive UI framework providing JSX, components, context, and signals
- **i18next** (`^24.2.3`) — Internationalization library used by locale module
- **html-parse-string** (`^0.0.9`) — HTML parsing for translation interpolation
- **lucide-solid** (`^0.453.0`) — Icon library (peer dependency for icon system)

### Runtime Dependencies

- **@solid-primitives/map** — `ReactiveMap` for reactive key-value stores
- **@solid-primitives/refs** — Ref utilities for focus target management
- **@solid-primitives/set** — Reactive Set for context tracking
- **solid-services** — Service injection pattern for dependency management
- **ts-deepmerge** — Deep object merging for settings and configuration

### Internal Dependencies

- **@no-comply/solid-accessibility** — ARIA attributes and keyboard interaction (used by shortcuts, focus)
- **@no-comply/solid-primitives** — Core reactive utilities (used throughout)

## Tradeoffs

- **Category**: Context architecture
  - **What**: Hierarchical context trees over flat context
  - **Why**: Enables nested provider composition and automatic variant inheritance without prop drilling

- **Category**: Service separation
  - **What**: Factory functions separate from Provider components
  - **Why**: Pure logic testable without JSX; providers remain thin wiring layer

- **Category**: Module structure
  - **What**: Uniform internal layout across all 14 modules
  - **Why**: Reduces cognitive load; developers know where to find contexts, providers, services, helpers

- **Category**: Consumption patterns
  - **What**: Dual `use*`/`use*Maybe` hooks
  - **Why**: Flexible error handling — strict mode throws, optional mode returns undefined

- **Category**: Development tooling
  - **What**: Exposable system for API exposure
  - **Why**: Enables development-time inspection without production runtime cost

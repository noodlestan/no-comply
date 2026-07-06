# No Comply

## Glossary

Below are no-comply-specific terms as used in this ecosystem.

**Component** - A SolidJS UI component in the no-comply system. In the metadata layer, a `ComponentEntityData` describes a component by its group, name, and factory function. Components are the final, renderable output of the system (e.g., a themed `Button` in `standard-ui`).

**Composable** - A reusable reactive unit. All mixins and component controllers are composable by design. They define inputs as reactive props and outputs as a reactive API and both inputs and outputs can be merged and combined using `combineProps()`.
**Controller** - A composable stateful behaviour unit that manages a component or mixin's lifecycle, state, and behaviour. Found in `solid-accessibility` (ARIA role controllers), `solid-composables` (behaviour controllers like `Pressable`, `ToggleAction`, etc.) and `standard-ui` (controllers reusable across different components). Represented in metadata as `ControllerEntityData`.

**Mixin** - A composable unit, similar to a controller, that binds a CSS module's class name to its output. A mixin can return an API for more than one DOM node. Classes and styles exposed by the Mixin can be combined with other sources via `combineProps()`.

**ARIA Controller** - A specific kind of controller (in `solid-accessibility`) that implements WAI-ARIA patterns. Their API might expose attributes for more than one element to coordinate state between different DOM nodes, such as `$root` and `$label`. Some are modelled around a specific ARIA role, such as `alert`, `dialog`, `menu` while others such as `pressable` are no-comply abstractions reusable across roles.

**Mixin** - Mixins are similar to controllers but their purpose is to bind reactive class names and styles to prop values. Typically found in `solid-composables` under `*/mixins/` (structural styles only) or in `standard-ui` (fully styled, coupled with fixed lists of variants, themable via css tokens). Represented in metadata as `MixinEntityData`.

**Provider** - A SolidJS component that wraps a subtree and provides values via SolidJS's context API. In no-comply, providers typically supply services, state, or configuration to descendant components. Represented in metadata as `ProviderEntityData` with associated hooks and components.

**Service** - A long-lived, stateful unit that provides cross-cutting functionality (e.g., locale service, labels/i18n service, settings service). Services are typically injected into providers and accessible throught their context API. Represented in metadata as `ServiceEntityData`.

**Entity** - A metadata descriptor for any no-comply concept (Component, Context, Controller, Mixin, Provider, Service). Entities are typed data objects (`NoComplyEntityData`) produced by the metadata extraction pipeline and consumed by the `NoComplyMetaService` for search, linking, and documentation generation.

## Layers

The packages form a clear layered architecture:

```
solid-primitives (foundational types/utilities)
  |
solid-accessibility (ARIA types + role controllers)
  |
solid-contexts (context tree, services, providers, controllers, features)
  |
solid-composables (unstyled composable behaviours -- controllers + mixins)
  |
standard-ui (themed production components)
  |
solid-dev-tools (debug/instrumentation -- depends on everything above)
```

External ecosystem dependencies include: `solid-js` (^1.9.5), `lucide-solid` (icon components), `i18next` + `html-parse-string` (internationalization), `solid-services` (service lifecycle), `@solid-primitives/map`, `@solid-primitives/refs`, `@solid-primitives/set`, `@solid-primitives/resize-observer`.

## Package Responsibilities

### solid-primitives

- **Package name:** `@no-comply/solid-primitives`
- **Version:** 0.0.11
- **Description:** Basic primitives and types for SolidJS applications and component libraries.
- **Role in ecosystem:** The foundational layer -- provides shared types, prop helpers, attribute/class/data utilities, event systems, ID generation, icon types, label types, styles, tag definitions, and resource management. Every other no-comply SolidJS package depends on this.
- **Scope:** Shared primitive types and utility helpers (attributes, classes, data attributes, events (standard and extended), icons, IDs, labels, props merging/forwarding, async resources, style helpers, tag prop types, and general TS utilities).
- **Dependencies:** `solid-js` (peer).
- **Dependency of:** `solid-accessibility`, `solid-contexts`, `solid-composables`, `solid-dev-tools`, `standard-ui`.

### solid-accessibility

- **Package name:** `@no-comply/solid-accessibility`
- **Version:** 0.0.11
- **Description:** ARIA types, primitives, and utils for SolidJS applications and component libraries.
- **Role in ecosystem:** Provides accessibility (ARIA) infrastructure -- attribute types, role-based controllers (e.g., alert, dialog, menu, tree, switch, etc.), role definitions, and ARIA tag props. Controllers in this package implement WAI-ARIA design pattern behaviours.
- **Scope:** ARIA types and role controllers (~24 controller implementations covering ARIA roles like button, dialog, menu, tree, listbox, switch, etc.), ARIA attributes, and accessible tag props.
- **Dependencies:** `@no-comply/solid-primitives`, `solid-js` (peer).
- **Dependency of:** `solid-contexts`, `solid-composables`, `solid-dev-tools`, `standard-ui`.

### solid-contexts

- **Package name:** `@no-comply/solid-contexts`
- **Version:** 0.0.11
- **Description:** Context-aware services and providers for SolidJS applications and component libraries.
- **Role in ecosystem:** Implements the context propagation and service infrastructure. Provides the base context tree, context providers, context services, the controller system (parent/child controller hierarchy with activation, override, suspend), form handling, focus management, icon libraries, labels/internationalization, locale, modals, navigation, selection, settings, keyboard shortcuts, and system context. This is the "nervous system" of the no-comply UI architecture.
- **Scope:** Context tree (ActiveContexts, ContextTree, ContextVariants), controller container/parent/child APIs, expose/container patterns, focus management, form state, icon registry, label/i18n services with i18next, locale, modal stack, navigation tree, selection, settings, keyboard shortcuts, and system-level bootstrapping.
- **Dependencies:** `@no-comply/solid-accessibility`, `@no-comply/solid-primitives`, `@solid-primitives/map`, `@solid-primitives/refs`, `@solid-primitives/set`, `ts-deepmerge`. Peer deps: `html-parse-string`, `i18next`, `lucide-solid`, `solid-js`.
- **Dependency of:** `solid-composables`, `solid-dev-tools`, `standard-ui`.

### solid-composables

- **Package name:** `@no-comply/solid-composables`
- **Version:** 0.0.11
- **Description:** Composable components, controllers, and mixins for SolidJS applications and component libraries.
- **Role in ecosystem:** The component logic layer -- provides unstyled, composable UI behaviours (controllers and mixins) that can be composed into concrete components. Covers action (pressable, toggle, expand, icon actions), alignment, content, error states, feedback, focus, form, icons, input, layout, menu, modal, navigation, organisms (compound components), placement, popover, responsive behaviour, surface, and typography.
- **Scope:** Unstyled composable UI building blocks -- each area typically has a `/mixins/` for reusable behaviour mixins and `/controllers/` for stateful controller implementations. Composables consume contexts and services from `solid-contexts`.
- **Dependencies:** `@no-comply/solid-contexts`, `@no-comply/solid-accessibility`, `@no-comply/solid-primitives`, `@solid-primitives/set`, `@solid-primitives/resize-observer`. Peer deps: `lucide-solid`, `solid-js`.
- **Dependency of:** `solid-dev-tools`, `standard-ui`.

### standard-ui

- **Package name:** `@no-comply/standard-ui`
- **Version:** 0.0.11
- **Description:** Themeable component library built with No Comply, SolidJS and modern CSS.
- **Role in ecosystem:** The top-level, concrete UI component library. Consumes composable behaviours, contexts, and accessibility primitives to deliver a full set of themed, production-ready components with SCSS styling. Covers action, content, dialog, feedback, focus, form, icon, input, layout, menu, navigation, popover, size, surface, theme, and typography.
- **Scope:** Themed components that wrap the composable layer (from `solid-composables`) with styling (SCSS), theming (theme variables), and concrete markup. Includes a theme system.
- **Dependencies:** `@no-comply/solid-contexts`, `@no-comply/solid-accessibility`, `@no-comply/solid-primitives`, `@no-comply/solid-composables`. Peer deps: `lucide-solid`, `solid-js`.
- **Dependency of:** `solid-dev-tools`.

### solid-dev-tools

- **Package name:** `@no-comply/solid-dev-tools`
- **Version:** 0.0.11
- **Description:** Instrumentation and debug tools for No Comply applications and libraries.
- **Role in ecosystem:** Developer tooling layer -- provides instrumentation, debug panels, components, and providers for inspecting and debugging no-comply applications at runtime.
- **Scope:** Dev panels, debug components, providers for development-time introspection.
- **Dependencies:** `@no-comply/solid-contexts`, `@no-comply/solid-accessibility`, `@no-comply/solid-primitives`, `@no-comply/solid-composables`, `@no-comply/standard-ui`. Peer deps: `lucide-solid`, `solid-js`.
- **Dependency of:** None (leaf package).

### meta

- **Package name:** `@no-comply/meta` (private, not published)
- **Version:** 0.0.11
- **Description:** Purrception types, services, and helpers for the no-comply project.
- **Role in ecosystem:** Provides the metadata layer for introspecting and navigating the no-comply libraries at runtime. Defines typed entity models (Component, Context, Controller, Mixin, Provider, Service) that other packages use as a common language for describing parts of the UI system. Also provides a `NoComplyMetaService` for searching/linking entities and resolving entity expressions.
- **Scope:** Metadata infrastructure; defines entity types and a searchable registry of all components/controllers/contexts/etc. across the no-comply ecosystem.
- **Dependencies:** `@purrception/lang-ts` (for TS AST definitions), `solid-js` (peer).
- **Dependency of:** No other no-comply lib depends on `@no-comply/meta` at runtime; it is used as a devDependency (`@no-comply/meta-extract`) by packages that run the extraction pipeline.

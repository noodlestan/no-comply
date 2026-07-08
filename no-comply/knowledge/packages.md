# No comply Packages

Packages in the `no-comply` project and their main responsibilities:

- `solid-primitives` (foundational types and helpers)
- `solid-accessibility` (foundational ARIA types, controllers, and helpers)
- `solid-contexts` (contexts, services, and providers for features or infrastructure)
- `solid-composables` (composable controllers, mixins for base components)
- `standard-ui` (themed components and services)
  `solid-dev-tools` (debug/instrumentation -- depends on everything above)

External ecosystem dependencies include: `solid-js` (^1.9.5), `lucide-solid` (icon components), `i18next` + `html-parse-string` (internationalization), `solid-services` (service lifecycle), `@solid-primitives/map`, `@solid-primitives/refs`, `@solid-primitives/set`, `@solid-primitives/resize-observer`.

## Package Responsibilities

This section summarises each package's role in the ecosystem, their scope, and relationships with other packages.

### solid-primitives

- **Package name:** `@no-comply/solid-primitives`
- **Version:** 0.0.11
- **Description:** Basic primitives and types for SolidJS applications and component libraries.
- **Role in ecosystem:** Foundational layer. Provides shared types and helpers to systematise semantics and enforce rules. Every other no-comply SolidJS package depends on this.
- **Scope:** Shared primitive types and utility helpers for: attributes, classes, data attributes, events, icons, IDs, labels, props merging/forwarding, async resources, styles, and general TS utilities.
- **Dependencies:** `solid-js` (peer).
- **Dependency of:** `solid-accessibility`, `solid-contexts`, `solid-composables`, `solid-dev-tools`, `standard-ui`.

### solid-accessibility

- **Package name:** `@no-comply/solid-accessibility`
- **Version:** 0.0.11
- **Description:** ARIA types, primitives, controllers and helpers for SolidJS applications and component libraries.
- **Role in ecosystem:** Foundational layer. Provides accessibility primitives for composing WAI-ARIA design patterns into other composables.
- **Scope:** ARIA types and helpers for roles, tags and aria attributes, along with base controllers for typical aria roles (alert, dialog, menu, switch, and 20+ more).
- **Dependencies:** `@no-comply/solid-primitives`, `solid-js` (peer).
- **Dependency of:** `solid-contexts`, `solid-composables`, `solid-dev-tools`, `standard-ui`.

### solid-contexts

- **Package name:** `@no-comply/solid-contexts`
- **Version:** 0.0.11
- **Description:** Context-aware services and providers for SolidJS applications and component libraries.
- **Role in ecosystem:** Provides a collection of context factories and providers that can be used at the level of composables, component, or applications to manage state and resources, encapsulate logic, and expose APIs.
- **Scope:** Contexts grouped by domain: focus management, form state, icon registry, label/i18n services with i18next, locale, modal stack, navigation tree, selection, settings, keyboard shortcuts, and system-level bootstrapping. Includes a **experimental WIP ContextTree** that tracks persistent contexts with parent/child controller hierarchy and active state, aimed at supporting a keyboard shortcut service.
- **Dependencies:** `@no-comply/solid-accessibility`, `@no-comply/solid-primitives`, `@solid-primitives/map`, `@solid-primitives/refs`, `@solid-primitives/set`, `ts-deepmerge`. Peer deps: `html-parse-string`, `i18next`, `lucide-solid`, `solid-js`.
- **Dependency of:** `solid-composables`, `solid-dev-tools`, `standard-ui`.

### solid-composables

- **Package name:** `@no-comply/solid-composables`
- **Version:** 0.0.11
- **Description:** Composable components, controllers, and mixins for SolidJS applications and component libraries.
- **Role in ecosystem:** Provides base composable controllers and mixins encapsulating behaviours and structural styles that can be composed into concrete components and base component implementations for some primitives.
- **Scope:** Covers a wide range of component library components: actions, alignment, content, feedback, focus, form, icons, input, layout, menu, modal, navigation, organisms (compound components), placement, popover, responsive behaviour, surface, and typography. Each module typically has a `/mixins/` for reusable structural style and `/controllers/` for stateful controller implementations. Some composables provide expose also the component `/providers/`. More complex components consume contexts and services from `solid-contexts`.
- **Dependencies:** `@no-comply/solid-contexts`, `@no-comply/solid-accessibility`, `@no-comply/solid-primitives`, `@solid-primitives/set`, `@solid-primitives/resize-observer`. Peer deps: `lucide-solid`, `solid-js`.
- **Dependency of:** `solid-dev-tools`, `standard-ui`.

### standard-ui

- **Package name:** `@no-comply/standard-ui`
- **Version:** 0.0.11
- **Description:** Themeable component library built with No Comply, SolidJS and modern CSS.
- **Role in ecosystem:** The top-level, concrete UI component library. Consumes composable mixins and controllers into concrete component implementations, or local composable (re-usable) parts. Renders concrete markup, styled (with SCSS), and themed (with tokens and CSS custom properties) and includes a theme system.
- **Scope:** Themed components that compose `solid-composables`. Covers action, content, dialog, feedback, focus, form, icon, input, layout, menu, navigation, popover, size, surface, theme, and typography.
- **Dependencies:** `@no-comply/solid-contexts`, `@no-comply/solid-accessibility`, `@no-comply/solid-primitives`, `@no-comply/solid-composables`. Peer deps: `lucide-solid`, `solid-js`.
- **Dependency of:** `solid-dev-tools`.

### solid-dev-tools

- **Package name:** `@no-comply/solid-dev-tools`
- **Version:** 0.0.11
- **Description:** WIP (PARKED) Instrumentation and debug tools for No Comply applications and libraries.
- **Role in ecosystem:** Developer tooling layer -- provides instrumentation, debug panels, components, and providers for inspecting and debugging no-comply applications at runtime.
- **Scope:** Dev panels, debug components, providers for development-time introspection.
- **Dependencies:** `@no-comply/solid-contexts`, `@no-comply/solid-accessibility`, `@no-comply/solid-primitives`, `@no-comply/solid-composables`, `@no-comply/standard-ui`. Peer deps: `lucide-solid`, `solid-js`.
- **Dependency of:** None (leaf package).

### meta

- **Package name:** `@no-comply/meta` (private, not published)
- **Version:** 0.0.11
- **Description:** Purrception types, services, and helpers for the no-comply project.
- **Role in ecosystem:** Provides the metadata layer for introspecting and navigating the no-comply libraries at runtime in documentation systems. Defines typed entity models that other packages use as a common language for describing parts of the UI system and a `NoComplyMetaService` for searching/linking entities and resolving entity expressions.
- **Scope:** Declares the types for all entities (Component, Context, Controller, Mixin, Provider, Service), and implements their extractors. Exposes the metadata `NoComplyMetaService` with a searchable registry of all components/controllers/contexts/etc. across the no-comply projects, exposing a lightweight AST representation of their APIs including JsDoc annotations and tags.
- **Dependencies:** `@purrception/lang-ts` (for TS AST definitions), `solid-js` (peer).
- **Dependency of:** No other no-comply lib depends on `@no-comply/meta` at runtime; it is used as a devDependency (`@no-comply/meta-extract`) by packages that run the extraction pipeline.

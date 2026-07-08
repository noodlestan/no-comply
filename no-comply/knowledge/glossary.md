# No Comply

## Glossary

Below are no-comply-specific terms as used in this ecosystem.

**Entity** - A metadata descriptor for any no-comply concept (Component, Context, Controller, Mixin, Provider, Service). Entities are typed data objects (`NoComplyEntityData`) produced by the metadata extraction pipeline and consumed by the `NoComplyMetaService` for search, linking, and documentation generation.

**EntityID** or `entity-id` - Unique identifier for an entity in the no-comply project

**Component** - A SolidJS UI component in the no-comply system. In the metadata layer, a `ComponentEntityData` describes a component by its group, name, and factory function. Components are the final, renderable output of the system (e.g., a themed `Button` in `standard-ui`).

**Composable** - A reusable reactive unit. All mixins and component controllers are composable by design. They define inputs as reactive props and outputs as a reactive API and both inputs and outputs can be merged and combined using `combineProps()`.
**Controller** - A composable stateful behaviour unit that manages a component or mixin's lifecycle, state, and behaviour. Found in `solid-accessibility` (ARIA role controllers), `solid-composables` (behaviour controllers like `Pressable`, `ToggleAction`, etc.) and `standard-ui` (controllers reusable across different components). Represented in metadata as `ControllerEntityData`.

**Mixin** - A composable unit, similar to a controller, that binds a CSS module's class name to its output. A mixin can return an API for more than one DOM node. Classes and styles exposed by the Mixin can be combined with other sources via `combineProps()`.

**ARIA Controller** - A specific kind of controller (in `solid-accessibility`) that implements WAI-ARIA patterns. Their API might expose attributes for more than one element to coordinate state between different DOM nodes, such as `$root` and `$label`. Some are modelled around a specific ARIA role, such as `alert`, `dialog`, `menu` while others such as `pressable` are no-comply abstractions reusable across roles.

**Mixin** - Mixins are similar to controllers but their purpose is to bind reactive class names and styles to prop values. Typically found in `solid-composables` under `*/mixins/` (structural styles only) or in `standard-ui` (fully styled, coupled with fixed lists of variants, themable via css tokens). Represented in metadata as `MixinEntityData`.

**Provider** - A SolidJS component that wraps a subtree and provides values via SolidJS's context API. In no-comply, providers typically supply services, state, or configuration to descendant components. Represented in metadata as `ProviderEntityData` with associated hooks and components.

**Service** - A long-lived, stateful unit that provides cross-cutting functionality (e.g., locale service, labels/i18n service, settings service). Services are typically injected into providers and accessible throught their context API. Represented in metadata as `ServiceEntityData`.

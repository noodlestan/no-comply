# Component Patterns

## Overview

The No Comply `standard-ui` library implements a component architecture built on a consistent layered pattern. Every component follows a **`[name].tsx` + `types.ts` + `constants.ts` + `create[name].ts` + `index.ts`** file structure, with optional `private/` directories for internal helpers and `.module.scss` files for styles.

Components are organized into category directories under `src/<category>/components/`: `action/`, `content/`, `dialog/`, `feedback/`, `form/`, `icon/`, `input/`, `layout/`, `menu/`, `navigation/`, `popover/`, `surface/`, `typography/`.

The architecture relies on three key layers:

1. **Headless composables** (`@no-comply/solid-composables`) -- behavior-only, no styling
2. **Mixins** (local to standard-ui, under `src/<category>/mixins/`) -- shared styling/behavior
3. **Standard components** -- the public API, combining headless + mixin + styling

Components use `createExposable` / `exposeAPI` from `@no-comply/solid-contexts` for composable lifecycle, and `combineProps` from `@no-comply/solid-primitives` for merging prop objects.

---

## Simple Component example: Divider

- **Location:** `layout/components/Divider/`
- **Rationale:** Minimal component with only 18 lines of TSX. Imports a single mixin (`DividerMixin`) and uses `Dynamic` to render a void element. No sub-components, no SCSS, no event handling.
- **Props:** Inherits from `DividerMixinProps` (with `role` forced to `'presentation'`). No custom props.
- **Structure:**
  - `Divider.tsx` (18 lines) -- splits props, calls `createDivider()`, renders `<Dynamic {...$} />`
  - `types.ts` -- defines `DividerProps` (aliased from mixin) and `DividerAPI`
  - `constants.ts` -- defines prop keys and component identifier
  - `createDivider.ts` -- composes `DividerMixin`, sets `role: 'presentation'`
  - `index.ts` -- re-exports
- **Imports:** `@no-comply/solid-primitives`, `solid-js`, `solid-js/web`, local `./constants`, `./createDivider`, `./types`

---

## Medium Component example: Field

- **Location:** `form/components/Field/`
- **Rationale:** Uses a **context provider** (`FieldContextProvider`) and a **render prop** pattern (`children({ field })`) for composition. Integrates with sibling `FieldLabel` component. 35-line TSX + 46-line `createField.ts` with SCSS module. Moderate complexity due to the context/render-prop architecture.
- **Props:** `HeadlessFieldProps` + `size?: ContentSize`, plus `label: JSX.Element` and `children: RenderProp<{ field: FieldAPI }>`
- **Structure:**
  - `Field.tsx` (35 lines) -- splits props, creates field via `createField`, wraps in `FieldContextProvider > Flex > FieldLabel + children`
  - `types.ts` -- `FieldProps` and `FieldAPI` (exposes `$root`, `_fieldLabel`, `hasFeedback`)
  - `constants.ts` -- prop keys
  - `createField.ts` -- composes `createHeadlessField` + `createFieldMixin`, computes size classList, builds `_fieldLabel` with size prop
  - `Field.module.scss` -- styling
  - `index.ts` -- re-exports
- **Imports:** `@no-comply/solid-composables`, `@no-comply/solid-contexts`, `@no-comply/solid-primitives`, `solid-js`, `Flex`, `FieldLabel`, SCSS module
- **Key characteristic:** Context provider pattern for coordinating with child inputs

---

## Complex Components example: Menu

- **Location:** `menu/components/Menu/`
- **Rationale:** Part of a sub-component ecosystem (`MenuItemAction`, `MenuItemGroup`, `MenuItemSubMenu`) with shared context. Wraps content in `MenuContextProvider`, composes `Surface` as visual base, renders a dynamic label. The abstraction level is high -- the Menu component itself is only 30 lines, but it provides the context infrastructure for multiple sibling sub-components. Uses `createHeadlessMenu` + `createMenuMixin`.
- **Props:** `HeadlessMenuProps` + `MenuMixinProps`
- **Structure:**
  - `Menu.tsx` (30 lines) -- splits props, calls `createMenu()`, renders `MenuContextProvider > Surface > (label + children)`
  - `types.ts` -- `MenuProps` and `MenuAPI` (exposes `_surface`, `$label`, `contextValue`; omits `$root` in favor of `_surface`)
  - `constants.ts` -- prop keys
  - `createMenu.ts` -- composes `createHeadlessMenu` + `createMenuMixin`, builds `_surface` with `tag: 'div'`, `variant: 'menu'`, `padding: 'xs'`
  - `index.ts` -- re-exports
- **Imports:** `@no-comply/solid-composables`, `@no-comply/solid-contexts`, `@no-comply/solid-primitives`, `solid-js`, `solid-js/web`, `Surface`, local mixin
- **Related sub-components:** `MenuItemAction`, `MenuItemGroup`, `MenuItemSubMenu` -- each with their own create/types/constants pattern
- **Key characteristics:** Context provider for coordinated child components; surface composition; dynamic label rendering

---

## Summary Table

| Component       | Complexity | Category   | Key Characteristics                                                              |
| --------------- | ---------- | ---------- | -------------------------------------------------------------------------------- |
| **Divider**     | Simple     | Layout     | 18 lines, single mixin, Dynamic render, no SCSS                                  |
| **Label**       | Simple     | Typography | 18 lines, single mixin, Dynamic render, no SCSS                                  |
| **SkipLink**    | Simple     | Navigation | 25 lines, 3 composables, renders `<a>` + Icon child                              |
| **NavLink**     | Medium     | Navigation | 18 lines (TSX) but 4 layered composables, complex API intersection               |
| **Checkbox**    | Medium     | Input      | 93 lines, custom events, ref mgmt, visual states, SCSS, no create file           |
| **Callout**     | Medium     | Content    | 62+78 lines, composes 6 child components, private/ size map, variant mgmt        |
| **Field**       | Medium     | Form       | Context provider + render prop, composes FieldLabel, 35+46 lines                 |
| **Select**      | Complex    | Input      | DOM workaround (SolidJS #1754), keyboard handling, 79+80 lines, size variants    |
| **ModalDialog** | Complex    | Dialog     | Portal, render prop, Surface composition, accessibility context                  |
| **Menu**        | Complex    | Menu       | Context provider for sub-component ecosystem, Surface composition, dynamic label |

## File Organization Patterns

**Standard file set (applied consistently):**

```
ComponentName/
  ComponentName.tsx    -- Public component (renders JSX)
  types.ts             -- Props + API type definitions
  constants.ts         -- Prop keys + component identifier constant
  createComponentName.ts -- Internal creation factory (composables composition)
  index.ts             -- Re-exports
  [ComponentName].module.scss -- Styles (optional)
  private/             -- Internal helpers (optional)
    constants.ts       -- Size maps, internal types
    index.ts           -- Re-exports
```

**Key architectural patterns observed:**

1. **create\* + expose pattern:** Every component has a `create*` factory function that uses `createExposable(id, props)` + `exposeAPI(expose, key, api)` to compose multiple composables/mixins into a single API object. The API object is destructured in the TSX component.

2. **Prop splitting:** Components use `splitProps(props, PROP_KEYS)` to separate "known" props from "others" that are passed through to the root element.

3. **Props merging:** `combineProps($others, $root)` merges forwarded props with the computed root props from the create function. Unlike SolidJS `mergeProps` this helper from `@no-comply/solid-primitives` deep merges `classList` and `styles` and merges event handlers props via a delegator function that fowards the event to eventual listeners of on each merged props object.

4. **Mixin + composable layering:** Components layer headless composables (behavior) with mixins (standard-ui styling defaults) in the create function, combining their `$root` props.

5. **SCSS modules with state classes:** CSS is written as SCSS modules using `@layer` scoping, with toggle classes like `is-disabled`, `is-invalid`, `is-modified`, `is-checked`, and size variants like `size-s`, `size-m`, etc.

6. **Component identifier constants:** Every component has a `$COMPONENT` string constant (e.g., `'component:standard:divider'`) used for debugging and exposable context identification.

7. **Default props pattern:** Components define `defaultProps` with `PickRequired` for optional props with defaults, using `??` in accessors.

8. **Render prop + context patterns** (for complex components): `Surface`, `Field`, `Menu`, and `ModalDialog` use `*ContextProvider` wrappers with render prop children to propagate API objects down the tree.

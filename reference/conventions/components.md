# Components Conventions

## Factory

- RULE: Every Component, needs to have their controller code in a `create*()` controller function colocated with the component.
- RULE: the `.tsx` for components MUST only split props, call the factory, combine props, and render.
- RULE: the `.tsx` for components MUST NOT declare state (signals), compose or consume context from providers.

## Composing

All the rules from [composition.md](./composition.md) apply to component factories as well.

- RULE: The `create*` factory MUST layer composables using the `compose()` helper from `createExposable`.
- RULE: The layering order MUST be: aria primitives first, headless composables first, then mixins, with `$root` merged via `combineProps(...)`.

### Props

## Dynamic Rendering

- RULE: Components that render elements from `$element` APIs that contain the `component` prop must use `<Dynamic {...$element} />` to render it.

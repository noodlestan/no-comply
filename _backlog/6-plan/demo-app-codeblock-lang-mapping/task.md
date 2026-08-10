# CodeBlock lang mapping

## Summary

Remove the direct language prop from the demo app `CodeBlock` flow and resolve the language from purrtrait context instead.

## Scope

- `$PROJECT = apps/standard-ui-demo`

## User story

As a reader of rendered code examples, I need code blocks to use the language already present on the rendered node data, so the demo app does not forward an unnecessary language prop through multiple proxy components.

## Refined

- Remove the `lang` prop from the app-level `CodeBlock` surface.
- Remove upstream invocations that still pass `PurrceptionLanguageId` through the app scope.
- Resolve `node.lang` inside `CodeBlock` through `usePurrtraitProvider()`.
- Keep `CodeRenderer` and the lower-level `@purrtrait/solid-code` flow aligned with the resolved language.

## Unrefined

- Decide what should happen when rendering arrays of nodes.
- Consider validating that all nodes in a rendered group share the same language.
- Decide whether unsupported or missing language values should fall back or fail loudly.

## Acceptance criteria

- The app-level `CodeBlock` no longer accepts the removed `lang` prop.
- All upstream app invocations stop passing the old language prop shape.
- `CodeBlock` resolves language data from `usePurrtraitProvider()`.


# Sub-Agent REPORT (#producer)

**Plan:** `demo-app-props-table-handle-input-errors`

**Iteration Id:** `add-input-value-validation`

**Outcome:** `COMPLETED`

## Evidence

### Changes

| Goal                                                      | Result                                                                                                   |
| --------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| Validate input eagerly with `evaluateValue()`             | `ComponentPropInput` evaluates each typed value as a `TSXNode` against `STATIC_SCOPE` inside a try/catch |
| On failure set `TextInput` `invalid` and skip propagation | `invalid` signal drives `invalid` prop; `onValueChange` is not called on failure                         |
| Skip validation when compiler not yet loaded              | `compiler` is optional; when undefined the change is forwarded unchanged                                 |
| Single compiler shared by preview and props               | Compiler resource lifted to `ComponentPlaygroundSection`, threaded as `Accessor` to both siblings        |

Commit (NOT pushed, per NOPUSH policy): `06d17e0` build(standard-ui-demo): Validate prop inputs with evaluateValue() before propagating changes.

Verification: `npm run ci` from `$PROJECT` root passed (16/16 tasks); the commit hook (clean, extract, ci) also passed. The behavioral checks (invalid input does not crash, marks the input invalid, valid input clears it and propagates, last valid value is retained) follow from the implementation; they were not exercised in a browser.

#### Files changed

All under `apps/standard-ui-demo/src/`:

- `modules/props/components/ComponentPropsTable/parts/ComponentPropInput/ComponentPropInput.tsx` — `compiler` prop, `invalid` signal, `evaluateValue()` validation wrapper.
- `modules/props/components/ComponentPropsTable/parts/types.tsx` — `compiler` accessor prop.
- `modules/props/components/ComponentPropsTable/parts/ComponentPropsTableGroup/ComponentPropsTableGroup.tsx` — `compiler` accessor prop.
- `modules/props/components/ComponentPropsTable/parts/ComponentPropsTableRow/ComponentPropsTableRow.tsx` — `compiler` accessor prop; passes `props.compiler?.()` to the input.
- `app/screens/ComponentsScreen/components/sections/ComponentPlaygroundSection/ComponentPlaygroundSection.tsx` — owns the compiler resource; passes it to both children.
- `.../parts/PlaygroundExample/PlaygroundExample.tsx` — local resource removed; uses `props.compiler()`.
- `.../parts/PlaygroundProps/PlaygroundProps.tsx` — `compiler` prop forwarded to `ComponentPropsTable`.

## Blockers (if any)

None.

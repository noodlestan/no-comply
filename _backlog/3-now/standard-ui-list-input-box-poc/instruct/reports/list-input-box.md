# Sub-Agent REPORT

**Id:** `list-input-box`

**Plan:** `standard-ui-list-input-box-poc`

**Outcome:** `commit-request`

## Evidence

### Changes

All changes in `no-comply/libs/standard-ui/`:

#### Files created

- `src/input/components/ListInputBox/types.ts` — `ListInputBoxProps` and `ListInputBoxAPI` types
- `src/input/components/ListInputBox/ListInputBox.tsx` — Component integrating `createRovingIndex`, `createListKeyboardController`, `AnchoredPopover`, mixins, `ListInputBoxItem`
- `src/input/components/ListInputBox/ListInputBox.module.scss` — Base styles
- `src/input/components/ListInputBox/index.ts` — Barrel export

#### Files modified

- `src/input/components/index.ts` — Added `export * from './ListInputBox'`

#### Verification

- `npm run build` — ✓ built in 601ms
- `npm run lint` — 0 errors, 8 warnings (all `solid/reactivity` false positives)

### Adaptations from plan

The following deviations were required for correctness with actual APIs:

1. **Internal imports**: Mixins, `AnchoredPopover`, and `ListInputBoxItem` not re-exported from `@no-comply/standard-ui` package root — used relative imports instead (matching `NumberInput`, `Select` patterns).

2. **Render prop signatures**: `AnchoredPopover` passes `$trigger`/`$content` directly (not wrapped). Fixed from `trigger={({ $trigger }) => ...}` to `trigger={$trigger => ...}`.

3. **Popover dismiss**: `onShow`/`onHide` props don't reach internal `createPopover` controller (split into `$others`). Used `usePopover` from `@no-comply/solid-composables` inside a child component via shared signal.

4. **Placement type**: Used `direction="block"` and `anchor="end-start"` for below-left behavior (instead of `placement={['bottom', 'left']}` which didn't match types).

5. **initialIndex type**: Changed from arrow function to IIFE since `initialIndex` expects a `number`.

### POC findings

- `onShow`/`onHide` pattern doesn't work with `AnchoredPopover` — props get split into `$others`. Use `usePopover` from `@no-comply/solid-composables` instead.
- Mixins are not re-exported from `@no-comply/standard-ui` package root.

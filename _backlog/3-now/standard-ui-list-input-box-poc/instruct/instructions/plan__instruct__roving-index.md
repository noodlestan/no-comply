# Implementation Instructions

**Plan:** `standard-ui-list-input-box-poc`

**Id:** `roving-index`

You are a sub-agent executing a task autonomously on request by a delegator agent.

These are your instructions. They include a section at the end on how to report back to delegator.

- RULE: If at any point you are instructed to **REPORT A BLOCKER** execute the instruction in the "## How to Report Back" section and STOP.

## Goals

Add a `createRovingIndex` composable to the `solid-composables` package under `navigation/controllers/RovingIndex/`. This is a signal-based roving index controller that tracks a focused index within a list of items, with reactive bounds tracking via an `items` accessor, and optional loop behaviour.

This composable is part of a two-part keyboard architecture (split into roving index + keyboard controller) to replace the mixed DOM+keyboard logic in the existing `organisms/List/controllers/ListKeyboard/`.

## Mandatory Reading

- required skill: `pair-programmer`
- patterns: Read the existing composable implementations under `no-comply/libs/solid-composables/src/navigation/controllers/Link/` — specifically `types.ts`, `createLink.ts`, `constants.ts`, and `index.ts` to understand the established pattern for controllers in the `navigation/controllers/` domain.
- patterns: Read the `createExposable` / `exposeAPI` pattern in `no-comply/libs/solid-composables/src/action/controllers/Pressable/createPressable.ts` to understand how composables are structured.
- patterns: Read `no-comply/libs/solid-composables/src/action/controllers/Pressable/types.ts` for the `$root` exposure pattern via `exposeAPI`.
- types: `no-comply/libs/solid-primitives/src/props/types.ts` for `Accessor`, `AccessorOrValue`.
- types: `no-comply/libs/solid-primitives/src/props/helpers/combineProps.ts` for `combineProps`.
- types: `no-comply/libs/solid-primitives/src/props/helpers/computedProps.ts` for `computedProps`.

- RULE: You MUST follow any links under `## Mandatory Reading` sections found in the listed files.
- RULE: If you are unable to read a file linked under `## Mandatory Reading` you must stop and REPORT A BLOCKER.

## Changes

All changes land in `no-comply/libs/solid-composables/` (package root: `solid-composables/`).

1. Create `src/navigation/controllers/RovingIndex/` directory with:
   - `types.ts` — `RovingIndexProps`, `RovingIndexAPI`
   - `createRovingIndex.ts` — the composable implementation
   - `constants.ts` — exposable symbol constant
   - `index.ts` — barrel export

2. Wire into `src/navigation/controllers/index.ts` — add barrel export line.

## Rules

- RULE: Use the same code style as existing composables in `navigation/controllers/` (see `Link`, `NavLink`).
- RULE: Use `createExposable` from `@no-comply/solid-contexts` for props management.
- RULE: Use `exposeAPI` for exposing the `$root` object.
- RULE: Use `combineProps` from `@no-comply/solid-primitives` where props merging is needed.
- RULE: Use `computedProps` from `@no-comply/solid-primitives` for reactive prop objects.
- RULE: Keep the controller pure — no DOM queries, no `ref` callbacks, no element references.
- RULE: Respect the barrel export pattern: `// @index` comment line followed by `export * from './...'`.
- RULE: If a command reports errors, attempt to fix them.
- RULE: If the errors persist, inspect the cause before continuing.
- RULE: If still unable to fix it, STOP and report back following the "## How to Report Back" section.

## Steps

Step 1. Create the `RovingIndex/` directory and files.

Step 2. Wire into the parent barrel export.

### Step 1 — Create `RovingIndex/` with types, implementation, constants, and barrel

**1a. Create `src/navigation/controllers/RovingIndex/types.ts`**

Props and API types:

```typescript
import type { Accessor } from 'solid-js';

export type RovingIndexProps = {
  items: Accessor<unknown[]>;
  loop?: boolean;
  initialIndex?: number;
};

export type RovingIndexAPI = {
  index: Accessor<number>;
  focusNext: () => void;
  focusPrev: () => void;
  focusFirst: () => void;
  focusLast: () => void;
  focusIndex: (i: number) => void;
};
```

**1b. Create `src/navigation/controllers/RovingIndex/constants.ts`**

```typescript
export const $ROVING_INDEX = 'roving-index';
```

**1c. Create `src/navigation/controllers/RovingIndex/createRovingIndex.ts`**

Implementation:

- Use `createExposable($ROVING_INDEX, props)` for prop management.
- Use `createMemo` or `createDerived` to track `items().length` reactively.
- Keep `index` as a `createSignal` initialised from `props.initialIndex ?? 0`.
- Clamp `index` to valid range `[0, items().length - 1]` on every mutation.
- If `loop` is true, wrapping is allowed: `focusNext` from last → first, `focusPrev` from first → last.
- If `loop` is false, clamp at bounds.

Key reactive behaviour:
- When `items` array length changes (e.g., shrinks), `index` must be clamped automatically (use `createEffect` to reactively clamp).

```typescript
import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import { createEffect, createSignal } from 'solid-js';

import { $ROVING_INDEX } from './constants';
import type { RovingIndexAPI, RovingIndexProps } from './types';

export const createRovingIndex = (props: RovingIndexProps): RovingIndexAPI => {
  const [locals] = createExposable($ROVING_INDEX, props);

  const [index, setIndex] = createSignal(locals.initialIndex ?? 0);

  const maxIndex = () => Math.max(0, locals.items().length - 1);
  const loop = () => locals.loop ?? true;

  // Clamp index when items change
  createEffect(() => {
    const max = maxIndex();
    setIndex(prev => (prev > max ? max : prev));
  });

  const focusIndex = (i: number) => {
    const max = maxIndex();
    if (i < 0 || i > max) return;
    setIndex(i);
  };

  const focusNext = () => {
    const current = index();
    const max = maxIndex();
    if (loop() && current >= max) {
      setIndex(0);
    } else {
      setIndex(Math.min(current + 1, max));
    }
  };

  const focusPrev = () => {
    const current = index();
    const max = maxIndex();
    if (loop() && current <= 0) {
      setIndex(max);
    } else {
      setIndex(Math.max(current - 1, 0));
    }
  };

  const focusFirst = () => setIndex(0);
  const focusLast = () => setIndex(maxIndex());

  return exposeAPI(expose, 'index', {
    index,
    focusNext,
    focusPrev,
    focusFirst,
    focusLast,
    focusIndex,
  });
};
```

Wait — fix the above: `expose` is the second return value of `createExposable`. Let me look at the pattern again from `createLink.ts`:

```typescript
const [locals, expose] = createExposable($LINK, props);
// ...
return exposeAPI(expose, '$root', { ... });
```

So it's `const [locals, expose] = createExposable(...)`. But the `createRovingIndex` doesn't use `$root` — it exposes individual methods. Use `exposeAPI` accordingly:

```typescript
const [locals, expose] = createExposable($ROVING_INDEX, props);
// ... implementation ...
return exposeAPI(expose, 'index', { index, focusNext, ... });
```

**1d. Create `src/navigation/controllers/RovingIndex/index.ts`**

```typescript
// @index(['./*.{ts,tsx}', './!(private|parts|functions)*/index.{ts,tsx}'], f => `export * from '${f.path.replace(/\/index$/, '')}';`)
export * from './constants';
export * from './createRovingIndex';
export * from './types';
```

**Extra validation commands:**
- Execute `npm run lint` in `no-comply/libs/solid-composables` to validate formatting and typecheck.
- Execute `npm run build` in `no-comply/libs/solid-composables` to confirm it compiles.

### Step 2 — Wire into `src/navigation/controllers/index.ts`

Add the barrel export line after the existing exports:

```typescript
export * from './RovingIndex';
```

Must follow the existing `// @index` pattern — insert after `export * from './NavLink';`.

**Extra validation commands:**
- Execute `npm run lint` in `no-comply/libs/solid-composables`.
- Execute `npm run build` in `no-comply/libs/solid-composables`.

## Final Verification

**Sanity check**
Verify that `createRovingIndex` can be instantiated with props, and that `index()`, `focusNext()`, `focusPrev()`, `focusFirst()`, `focusLast()`, `focusIndex()` all work correctly, including loop and clamp behaviour.

**Verification steps**
1. Execute `npm run build` in `no-comply/libs/solid-composables` to confirm it compiles.
2. Execute `npm run lint` in `no-comply/libs/solid-composables`.
3. Execute `npm run ci` in the monorepo root (if available) or `npm run typecheck` at root.

## How to Report Back to the Delegator

1. Summarise the current context, asking:
   - Are you reporting success with a commit request or a blocker?

2. Gather the evidence of changes made and outcomes achieved, or the blocker error details.

3. Read `.agents/domains/plans/report_template.md` and follow the directives there.

4. Generate the response and send it back to the delegator.

Thank you for your service.

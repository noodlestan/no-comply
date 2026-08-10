# Implementation Instructions

**Plan:** `standard-ui-list-input-box-poc`

**Id:** `list-keyboard`

You are a sub-agent executing a task autonomously on request by a delegator agent.

These are your instructions. They include a section at the end on how to report back to delegator.

- RULE: If at any point you are instructed to **REPORT A BLOCKER** execute the instruction in the "## How to Report Back" section and STOP.

## Goals

Add a `createListKeyboardController` composable to the `solid-composables` package under `navigation/controllers/ListKeyboard/`. This composable consumes a `createRovingIndex` instance (from the sibling `RovingIndex/` module) and maps ArrowUp/ArrowDown/Home/End keyboard events to the roving index methods. It exposes an `onKeyDown` handler via `$root` for binding to the container element.

This is the second part of the two-part keyboard architecture. The keyboard controller handles navigation keys on the container; item-level Enter/Space handling remains the responsibility of `createPressable` on each item.

## Mandatory Reading

- required skill: `pair-programmer`
- patterns: Read the newly created `createRovingIndex` at `no-comply/libs/solid-composables/src/navigation/controllers/RovingIndex/createRovingIndex.ts` and its `types.ts` — this composable is a direct dependency.
- patterns: Read the existing `createLink` pattern at `no-comply/libs/solid-composables/src/navigation/controllers/Link/createLink.ts` and `types.ts` for the established controller conventions.
- patterns: Read the `createExposable` / `exposeAPI` pattern in `no-comply/libs/solid-composables/src/action/controllers/Pressable/createPressable.ts`.
- types: `no-comply/libs/solid-composables/src/navigation/controllers/RovingIndex/types.ts` for `RovingIndexAPI`.
- types: `no-comply/libs/solid-primitives/src/props/helpers/combineProps.ts`.

- RULE: You MUST follow any links under `## Mandatory Reading` sections found in the listed files.
- RULE: If you are unable to read a file linked under `## Mandatory Reading` you must stop and REPORT A BLOCKER.

## Changes

All changes land in `no-comply/libs/solid-composables/` (package root: `solid-composables/`).

1. Create `src/navigation/controllers/ListKeyboard/` directory with:
   - `types.ts` — `ListKeyboardProps`, `ListKeyboardAPI`
   - `createListKeyboardController.ts` — the composable implementation
   - `constants.ts` — exposable symbol
   - `index.ts` — barrel export

2. Wire into `src/navigation/controllers/index.ts` — add barrel export line.

## Rules

- RULE: Use the same code style as existing composables in `navigation/controllers/`.
- RULE: Use `createExposable` from `@no-comply/solid-contexts` for props management.
- RULE: Use `exposeAPI` for exposing the `$root` object and delegated roving index methods.
- RULE: `createListKeyboardController` accepts a `roving` prop which is the return value of `createRovingIndex`.
- RULE: The keyboard event handler (`$root.onKeyDown`) must handle ArrowUp, ArrowDown, Home, End keys.
- RULE: Arrow keys call `roving.focusPrev()` / `roving.focusNext()` with `ev.preventDefault()`.
- RULE: Home/End call `roving.focusFirst()` / `roving.focusLast()` with `ev.preventDefault()`.
- RULE: Enter key should call `onSelect?.(roving.index())` with `ev.preventDefault()`.
- RULE: Space key should call `onToggle?.(roving.index())` with `ev.preventDefault()`.
- RULE: Do NOT set focus on DOM elements — that is the responsibility of the component using this controller.
- RULE: Respect the barrel export pattern.
- RULE: If a command reports errors, attempt to fix them.
- RULE: If the errors persist, inspect the cause before continuing.
- RULE: If still unable to fix it, STOP and report back following the "## How to Report Back" section.

## Steps

Step 1. Create the `ListKeyboard/` directory and files.

Step 2. Wire into the parent barrel export.

### Step 1 — Create `ListKeyboard/` with types, implementation, constants, and barrel

**1a. Create `src/navigation/controllers/ListKeyboard/types.ts`**

```typescript
import type { RovingIndexAPI } from '../RovingIndex';

export type ListKeyboardProps = {
  roving: RovingIndexAPI;
  onSelect?: (index: number) => void;
  onToggle?: (index: number) => void;
};

export type ListKeyboardAPI = {
  $root: {
    onKeyDown: (ev: KeyboardEvent) => void;
  };
} & Pick<RovingIndexAPI, 'index' | 'focusNext' | 'focusPrev' | 'focusFirst' | 'focusLast' | 'focusIndex'>;
```

**1b. Create `src/navigation/controllers/ListKeyboard/constants.ts`**

```typescript
export const $LIST_KEYBOARD = 'list-keyboard';
```

**1c. Create `src/navigation/controllers/ListKeyboard/createListKeyboardController.ts`**

```typescript
import { createExposable, exposeAPI } from '@no-comply/solid-contexts';

import { $LIST_KEYBOARD } from './constants';
import type { ListKeyboardAPI, ListKeyboardProps } from './types';

export const createListKeyboardController = (
  props: ListKeyboardProps,
): ListKeyboardAPI => {
  const [locals, expose] = createExposable($LIST_KEYBOARD, props);

  const onKeyDown = (ev: KeyboardEvent) => {
    const roving = locals.roving;

    switch (ev.key) {
      case 'ArrowUp': {
        ev.preventDefault();
        roving.focusPrev();
        break;
      }
      case 'ArrowDown': {
        ev.preventDefault();
        roving.focusNext();
        break;
      }
      case 'Home': {
        ev.preventDefault();
        roving.focusFirst();
        break;
      }
      case 'End': {
        ev.preventDefault();
        roving.focusLast();
        break;
      }
      case 'Enter': {
        ev.preventDefault();
        locals.onSelect?.(roving.index());
        break;
      }
      case ' ': {
        ev.preventDefault();
        locals.onToggle?.(roving.index());
        break;
      }
    }
  };

  const delegatedMethods = {
    index: () => locals.roving.index(),
    focusNext: () => locals.roving.focusNext(),
    focusPrev: () => locals.roving.focusPrev(),
    focusFirst: () => locals.roving.focusFirst(),
    focusLast: () => locals.roving.focusLast(),
    focusIndex: (i: number) => locals.roving.focusIndex(i),
  };

  return exposeAPI(expose, '$root', {
    $root: { onKeyDown },
    ...delegatedMethods,
  });
};
```

**1d. Create `src/navigation/controllers/ListKeyboard/index.ts`**

```typescript
// @index(['./*.{ts,tsx}', './!(private|parts|functions)*/index.{ts,tsx}'], f => `export * from '${f.path.replace(/\/index$/, '')}';`)
export * from './constants';
export * from './createListKeyboardController';
export * from './types';
```

**Extra validation commands:**
- Execute `npm run lint` in `no-comply/libs/solid-composables`.
- Execute `npm run build` in `no-comply/libs/solid-composables`.

### Step 2 — Wire into `src/navigation/controllers/index.ts`

Add the barrel export line after the `RovingIndex` export:

```typescript
export * from './ListKeyboard';
```

Must follow the existing `// @index` pattern.

**Extra validation commands:**
- Execute `npm run lint` in `no-comply/libs/solid-composables`.
- Execute `npm run build` in `no-comply/libs/solid-composables`.

## Final Verification

**Sanity check**
Verify that `createListKeyboardController` can be instantiated with a `roving` instance, that `$root.onKeyDown` correctly dispatches to roving methods, and that delegated methods (`index`, `focusNext`, etc.) proxy through to the underlying roving index.

**Verification steps**
1. Execute `npm run build` in `no-comply/libs/solid-composables`.
2. Execute `npm run lint` in `no-comply/libs/solid-composables`.
3. Execute `npm run ci` in the monorepo root (if available).

## How to Report Back to the Delegator

1. Summarise the current context, asking:
   - Are you reporting success with a commit request or a blocker?

2. Gather the evidence of changes made and outcomes achieved, or the blocker error details.

3. Read `.agents/domains/plans/report_template.md` and follow the directives there.

4. Generate the response and send it back to the delegator.

Thank you for your service.

# Implementation Instructions

**Plan:** `standard-ui-list-input-box-poc`

**Id:** `list-input-box-item`

You are a sub-agent executing a task autonomously on request by a delegator agent.

These are your instructions. They include a section at the end on how to report back to delegator.

- RULE: If at any point you are instructed to **REPORT A BLOCKER** execute the instruction in the "## How to Report Back" section and STOP.

## Goals

Add a `ListInputBoxItem` component to the `standard-ui` package under `input/components/ListInputBoxItem/`. This is a prototype listbox option item that composes `createPressable` for click + Enter/Space handling, and renders with ARIA option attributes (`role="option"`, `aria-selected`, `aria-posinset`, `aria-setsize`) and roving tabindex pattern (`tabindex="-1"` on inactive, `tabindex="0"` on active).

This component validates that `createPressable` can compose into a listbox option without conflicting with the container-level keyboard controller (container handles Arrow keys, item handles Enter/Space).

## Mandatory Reading

- required skill: `pair-programmer`
- patterns: Read existing simple input components in `no-comply/libs/standard-ui/src/input/components/` — specifically `Checkbox/Checkbox.tsx`, `Select/Select.tsx` and their `types.ts` files to understand the standard-ui component conventions.
- patterns: Read `no-comply/libs/solid-composables/src/action/controllers/Pressable/createPressable.ts` and `types.ts` to understand the `createPressable` API.
- patterns: Read `no-comply/libs/standard-ui/src/input/components/SegmentedButtonItem/SegmentedButtonItem.tsx` for an example of a standard-ui item component composing headless composables.
- types: `no-comply/libs/solid-primitives/src/props/types.ts` for `RenderProp` and `ClassList`.
- types: `no-comply/libs/solid-primitives/src/props/helpers/combineProps.ts` for `combineProps`.

- RULE: You MUST follow any links under `## Mandatory Reading` sections found in the listed files.
- RULE: If you are unable to read a file linked under `## Mandatory Reading` you must stop and REPORT A BLOCKER.

## Changes

All changes land in `no-comply/libs/standard-ui/` (package root: `standard-ui/`).

1. Create `src/input/components/ListInputBoxItem/` directory with:
   - `types.ts` — `ListInputBoxItemProps`
   - `ListInputBoxItem.tsx` — component composing `createPressable` with ARIA option attributes
   - `ListInputBoxItem.module.scss` — base styles
   - `index.ts` — barrel export

2. Wire into `src/input/components/index.ts` — add barrel export line.

## Rules

- RULE: Use the same code style as existing standard-ui input components (see `Checkbox`, `Select`).
- RULE: Compose `createPressable` from `@no-comply/solid-composables` for click + keyboard handling.
- RULE: Hardcode ARIA option attributes directly (no `createAriaListbox` exists yet for this POC).
- RULE: Use `role="option"`, `aria-selected`, `aria-posinset`, `aria-setsize` on the root element.
- RULE: Accept `tabIndex` prop for roving tabindex pattern (component user sets `-1` or `0`).
- RULE: Use `combineProps` from `@no-comply/solid-primitives` for merging the pressable root props with custom props.
- RULE: Use CSS Modules for styling with the established naming pattern.
- RULE: Accept `classList` prop and merge with component's own class list via `createClassList` or inline `classList`.
- RULE: Respect the barrel export pattern.
- RULE: If a command reports errors, attempt to fix them.
- RULE: If the errors persist, inspect the cause before continuing.
- RULE: If still unable to fix it, STOP and report back following the "## How to Report Back" section.

## Steps

Step 1. Create the `ListInputBoxItem/` directory and files.

Step 2. Wire into the parent barrel export.

### Step 1 — Create `ListInputBoxItem/` with types, component, styles, and barrel

**1a. Create `src/input/components/ListInputBoxItem/types.ts`**

```typescript
import type { JSX } from 'solid-js';
import type { ClassList } from '@no-comply/solid-primitives';

export type ListInputBoxItemProps = {
  children: JSX.Element;
  selected?: boolean;
  onPress?: (ev: Event) => void;
  tabIndex?: number;
  classList?: ClassList;
};
```

**1b. Create `src/input/components/ListInputBoxItem/ListInputBoxItem.tsx`**

```tsx
import { createPressable } from '@no-comply/solid-composables';
import { combineProps } from '@no-comply/solid-primitives';
import { type ParentComponent, mergeProps } from 'solid-js';

import styles from './ListInputBoxItem.module.scss';
import type { ListInputBoxItemProps } from './types';

export const ListInputBoxItem: ParentComponent<ListInputBoxItemProps> = props => {
  const merged = mergeProps({ selected: false, tabIndex: -1 }, props);

  const { $root: $pressableRoot } = createPressable({
    onPress: merged.onPress,
  });

  // Build ARIA option attributes
  const ariaProps = {
    role: 'option' as const,
    'aria-selected': merged.selected,
    'aria-posinset': undefined as number | undefined,
    'aria-setsize': undefined as number | undefined,
  };

  // Build class list
  const classList = {
    ...merged.classList,
    [styles.ListInputBoxItem]: true,
    'is-selected': Boolean(merged.selected),
  };

  const $root = combineProps($pressableRoot, {
    get tabIndex() { return merged.tabIndex; },
    get classList() { return classList; },
    get 'aria-selected'() { return merged.selected; },
    get role() { return 'option'; },
  });

  return <div {...$root}>{merged.children}</div>;
};
```

Note: `aria-posinset` and `aria-setsize` are omitted in this prototype — the consumer (ListInputBox) can set them via `classList` passthrough or the prop interface can be extended. The POC validates the core contract first.

**1c. Create `src/input/components/ListInputBoxItem/ListInputBoxItem.module.scss`**

```scss
.ListInputBoxItem {
  cursor: pointer;
  user-select: none;

  &.is-selected {
    background-color: var(--_highlight-bg, rgba(0, 0, 0, 0.08));
  }

  &:focus-visible {
    outline: 2px solid currentColor;
    outline-offset: -2px;
  }
}
```

**1d. Create `src/input/components/ListInputBoxItem/index.ts`**

```typescript
// @index(['./*.{ts,tsx}', './!(private|parts|functions)*/index.{ts,tsx}'], f => `export * from '${f.path.replace(/\/index$/, '')}';`)
export * from './ListInputBoxItem';
export * from './types';
```

**Extra validation commands:**
- Execute `npm run lint` in `no-comply/libs/standard-ui`.
- Execute `npm run build` in `no-comply/libs/standard-ui`.

### Step 2 — Wire into `src/input/components/index.ts`

Add the barrel export line after the existing exports:

```typescript
export * from './ListInputBoxItem';
```

Must follow the existing `// @index` pattern.

**Extra validation commands:**
- Execute `npm run lint` in `no-comply/libs/standard-ui`.
- Execute `npm run build` in `no-comply/libs/standard-ui`.

## Final Verification

**Sanity check**
Verify that `ListInputBoxItem` renders a `div` with `role="option"`, that `createPressable` handles clicks and Enter/Space on the item, and that the component accepts `selected`, `tabIndex`, and `classList` props.

**Verification steps**
1. Execute `npm run build` in `no-comply/libs/standard-ui`.
2. Execute `npm run lint` in `no-comply/libs/standard-ui`.
3. Execute `npm run ci` in the monorepo root (if available).

## How to Report Back to the Delegator

1. Summarise the current context, asking:
   - Are you reporting success with a commit request or a blocker?

2. Gather the evidence of changes made and outcomes achieved, or the blocker error details.

3. Read `.agents/domains/plans/report_template.md` and follow the directives there.

4. Generate the response and send it back to the delegator.

Thank you for your service.

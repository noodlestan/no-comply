# Implementation Instructions

**Plan:** `standard-ui-list-input-box-poc`

**Id:** `list-input-box`

You are a sub-agent executing a task autonomously on request by a delegator agent.

These are your instructions. They include a section at the end on how to report back to delegator.

- RULE: If at any point you are instructed to **REPORT A BLOCKER** execute the instruction in the "## How to Report Back" section and STOP.

## Goals

Add a `ListInputBox` component to the `standard-ui` package under `input/components/ListInputBox/`. This is a prototype listbox-style input component that integrates all the pieces:

- `createRovingIndex` + `createListKeyboardController` for navigation
- `AnchoredPopover` (from standard-ui) for the dropdown panel
- Render props: `children({ key })` for item rendering, `selectedItem({ key })` for trigger display
- Mixins: `createInputBoxMixin`, `createInputStateMixin`, `createSizedInputBoxMixin`
- Internal value management via `createSignal`
- Keyboard UX: trigger click opens popover, Arrow keys navigate, Enter confirms & closes, Escape dismisses

This is the highest-risk area of the POC because it ties together focus management, popover show/hide, and render prop contracts.

## Mandatory Reading

- required skill: `pair-programmer`
- patterns: Read the standard-ui `AnchoredPopover` component at `no-comply/libs/standard-ui/src/popover/components/AnchoredPopover/` — `AnchoredPopover.tsx`, `createAnchoredPopover.ts`, `types.ts`, `constants.ts` — to understand the popover integration pattern.
- patterns: Read the existing input components `Select/Select.tsx` and `SegmentedButton/SegmentedButton.tsx` in `no-comply/libs/standard-ui/src/input/components/` for standard-ui component conventions.
- patterns: Read the `createRovingIndex` composable at `no-comply/libs/solid-composables/src/navigation/controllers/RovingIndex/createRovingIndex.ts` and `types.ts`.
- patterns: Read the `createListKeyboardController` composable at `no-comply/libs/solid-composables/src/navigation/controllers/ListKeyboard/createListKeyboardController.ts` and `types.ts`.
- patterns: Read the mixin implementations under `no-comply/libs/standard-ui/src/input/mixins/`:
  - `InputBox/createInputBoxMixin.ts`
  - `InputState/createInputStateMixin.ts`
  - `SizedInputBox/createSizedInputBoxMixin.ts`
- types: `no-comply/libs/standard-ui/src/size/types.ts` for `ContentSize`.
- types: `no-comply/libs/solid-primitives/src/props/types.ts` for `RenderProp`, `ClassList`, `AccessorOrValue`.
- types: `no-comply/libs/solid-primitives/src/props/helpers/combineProps.ts` and `computedProps.ts`.

- RULE: You MUST follow any links under `## Mandatory Reading` sections found in the listed files.
- RULE: If you are unable to read a file linked under `## Mandatory Reading` you must stop and REPORT A BLOCKER.

## Changes

All changes land in `no-comply/libs/standard-ui/` (package root: `standard-ui/`).

1. Create `src/input/components/ListInputBox/` directory with:
   - `types.ts` — `ListInputBoxProps`, `ListInputBoxAPI`
   - `ListInputBox.tsx` — component integrating all pieces
   - `ListInputBox.module.scss` — base styles
   - `index.ts` — barrel export

2. Wire into `src/input/components/index.ts` — add barrel export line.

## Rules

- RULE: Use the same code style as existing standard-ui input components.
- RULE: Compose `AnchoredPopover` from standard-ui (not the headless version) for the dropdown panel with default placement below-left.
- RULE: Use `createRovingIndex` from `@no-comply/solid-composables` for index tracking.
- RULE: Use `createListKeyboardController` from `@no-comply/solid-composables` for keyboard navigation.
- RULE: Use mixins: `createInputBoxMixin`, `createInputStateMixin`, `createSizedInputBoxMixin` from `@no-comply/standard-ui`.
- RULE: Manage value internally with `createSignal<string | undefined>` (simplest approach for POC).
- RULE: Keyboard UX:
  - Click on trigger opens popover
  - ArrowUp/ArrowDown on trigger opens popover and focuses first/last item
  - Inside popover: Arrow keys navigate, Enter selects & closes (via `onSelect`), Escape closes (native popover behaviour)
  - On close, return focus to trigger
- RULE: Render prop `children` receives `{ key: string }` for each item.
- RULE: `selectedItem` is a separate optional render prop for the trigger display; when not provided, defaults to the value string.
- RULE: Use `createClassList` from `@no-comply/solid-primitives` for dynamic class lists.
- RULE: Use `combineProps` and `computedProps` as needed for prop merging.
- RULE: Respect the barrel export pattern with `// @index` comment.
- RULE: If a command reports errors, attempt to fix them.
- RULE: If the errors persist, inspect the cause before continuing.
- RULE: If still unable to fix it, STOP and report back following the "## How to Report Back" section.

## Steps

Step 1. Create the `ListInputBox/` directory and files.

Step 2. Wire into the parent barrel export.

### Step 1 — Create `ListInputBox/` with types, component, styles, and barrel

**1a. Create `src/input/components/ListInputBox/types.ts`**

```typescript
import type { Accessor, JSX } from 'solid-js';
import type { ClassList, RenderProp } from '@no-comply/solid-primitives';
import type { ContentSize } from '../../../size';

export type ListInputBoxProps = {
  items: Accessor<string[]>;
  value?: Accessor<string | undefined>;
  onValueChange: (key: string) => void;
  children: (props: { key: string }) => JSX.Element;
  selectedItem?: (props: { key: string }) => JSX.Element;
  size?: ContentSize;
  disabled?: boolean;
  invalid?: boolean;
  onShow?: () => void;
  onHide?: () => void;
  classList?: ClassList;
};

export type ListInputBoxAPI = {
  // Exposed for future imperative access if needed
};
```

**1b. Create `src/input/components/ListInputBox/ListInputBox.tsx`**

This is the main integration component. The architecture:

- The trigger is a styled button/div showing the selected item text (or placeholder).
- Clicking the trigger opens the `AnchoredPopover`.
- Inside the popover, a list of `ListInputBoxItem` components is rendered with roving keyboard navigation.
- The `createRovingIndex` + `createListKeyboardController` handle keyboard navigation inside the popover.
- On Enter (select), the value is set and the popover closes.
- On Escape, the popover closes (native) and focus returns to trigger.

```tsx
import {
  createRovingIndex,
  createListKeyboardController,
} from '@no-comply/solid-composables';
import {
  combineProps,
  computedProps,
  createClassList,
} from '@no-comply/solid-primitives';
import {
  AnchoredPopover,
  createInputBoxMixin,
  createInputStateMixin,
  createSizedInputBoxMixin,
  ListInputBoxItem,
} from '@no-comply/standard-ui';
import { type Component, For, createMemo, createSignal } from 'solid-js';

import styles from './ListInputBox.module.scss';
import type { ListInputBoxProps } from './types';

export const ListInputBox: Component<ListInputBoxProps> = props => {
  // -- Value management --
  const [isOpen, setIsOpen] = createSignal(false);
  const selectedKey = () => props.value?.() ?? props.items()[0];

  // -- Roving index for list navigation --
  const roving = createRovingIndex({
    items: props.items,
    loop: false,
    initialIndex: () => {
      const key = selectedKey();
      return key ? props.items().indexOf(key) : 0;
    },
  });

  const keyboard = createListKeyboardController({
    roving,
    onSelect: (index: number) => {
      const key = props.items()[index];
      if (key) {
        props.onValueChange(key);
      }
      setIsOpen(false);
    },
  });

  // -- Mixins --
  const { $root: $inputBoxRoot } = createInputBoxMixin({ disabled: props.disabled });
  const { $root: $inputStateRoot } = createInputStateMixin({
    disabled: props.disabled,
    invalid: props.invalid,
  });
  const { $root: $sizedRoot } = createSizedInputBoxMixin({
    size: props.size,
  });

  // -- Trigger label --
  const selectedItemLabel = createMemo(() => {
    const key = selectedKey();
    if (!key) return '';
    if (props.selectedItem) {
      // Render prop for custom trigger display — simplified for POC
      return key;
    }
    return key;
  });

  // -- Root class list --
  const classList = createClassList(styles, () => ({
    ListInputBox: true,
    'is-open': isOpen(),
    'is-disabled': Boolean(props.disabled),
  }));

  const $root = computedProps({ classList });

  const $ = combineProps(
    $inputBoxRoot,
    $inputStateRoot,
    $sizedRoot,
    $root,
  );

  const handleTriggerClick = () => {
    if (props.disabled) return;
    setIsOpen(true);
  };

  const handleShow = () => {
    setIsOpen(true);
    // Focus selected item when popover opens
    setTimeout(() => {
      const idx = props.items().indexOf(selectedKey());
      roving.focusIndex(idx >= 0 ? idx : 0);
    }, 0);
    props.onShow?.();
  };

  const handleHide = () => {
    setIsOpen(false);
    props.onHide?.();
  };

  const triggerLabel = () => selectedItemLabel() || 'Select...';

  return (
    <AnchoredPopover
      {...$.$root}
      trigger={({ $trigger }) => (
        <button
          {...$trigger}
          classList={$.classList}
          onClick={handleTriggerClick}
          disabled={props.disabled}
        >
          {triggerLabel()}
        </button>
      )}
      onShow={handleShow}
      onHide={handleHide}
    >
      {({ $content }) => (
        <div
          {...$content}
          {...keyboard.$root}
          role="listbox"
        >
          <For each={props.items()}>
            {(key, index) => {
              const isSelected = key === selectedKey();
              const isFocused = index() === roving.index();
              return (
                <ListInputBoxItem
                  selected={isSelected}
                  tabIndex={isFocused ? 0 : -1}
                  onPress={() => {
                    props.onValueChange(key);
                    setIsOpen(false);
                  }}
                >
                  {props.children({ key })}
                </ListInputBoxItem>
              );
            }}
          </For>
        </div>
      )}
    </AnchoredPopover>
  );
};
```

**Important notes on the implementation:**

1. The `AnchoredPopover` component from standard-ui expects `trigger` and `children` render props. The trigger receives `$trigger` props (including `popoverTarget`, `aria-expanded`, etc.) which must be spread onto the trigger element.

2. The `onShow`/`onHide` callbacks from the props control the `isOpen` signal and the popover's show/hide behaviour.

3. Focus management: when the popover opens, `setTimeout` is used to ensure the DOM is ready before focusing. This is a POC simplification.

4. `ListInputBoxItem` is imported from `@no-comply/standard-ui` — which requires that the previous commit (list-input-box-item) is already merged.

5. The `createRovingIndex` initial index is computed from the current selected value.

**Potential issues to watch for:**
- `AnchoredPopover`'s trigger render prop provides `$trigger` which includes `popoverTarget` and `aria-expanded`. We add `onClick` and `disabled` on top.
- The popover content receives `$content` (id, aria-labelledby). We add `role="listbox"` and the keyboard `onKeyDown` handler.
- There may be event conflicts between `AnchoredPopover`'s built-in toggle and our manual `onClick`/`onShow`/`onHide` — this is part of what the POC validates.

**1c. Create `src/input/components/ListInputBox/ListInputBox.module.scss`**

```scss
.ListInputBox {
  position: relative;
  display: inline-flex;
  align-items: center;
  cursor: pointer;

  &.is-open {
    /* Popover is open */
  }

  &.is-disabled {
    opacity: 0.5;
    pointer-events: none;
  }
}
```

**1d. Create `src/input/components/ListInputBox/index.ts`**

```typescript
// @index(['./*.{ts,tsx}', './!(private|parts|functions)*/index.{ts,tsx}'], f => `export * from '${f.path.replace(/\/index$/, '')}';`)
export * from './ListInputBox';
export * from './types';
```

**Extra validation commands:**
- Execute `npm run lint` in `no-comply/libs/standard-ui`.
- Execute `npm run build` in `no-comply/libs/standard-ui`.

### Step 2 — Wire into `src/input/components/index.ts`

Add the barrel export line after the existing exports:

```typescript
export * from './ListInputBox';
```

Must follow the existing `// @index` pattern. Also ensure `ListInputBoxItem` is exported (from the previous commit).

**Extra validation commands:**
- Execute `npm run lint` in `no-comply/libs/standard-ui`.
- Execute `npm run build` in `no-comply/libs/standard-ui`.

## Final Verification

**Sanity check**
Verify that `ListInputBox` renders with a trigger button showing the selected item label, that clicking the trigger opens the popover, and that arrow keys navigate between items. Confirm that Enter selects an item and closes the popover.

**Verification steps**
1. Execute `npm run build` in `no-comply/libs/standard-ui`.
2. Execute `npm run lint` in `no-comply/libs/standard-ui`.
3. Confirm that imports from `@no-comply/standard-ui` resolve correctly for `ListInputBoxItem` and `AnchoredPopover`.

## How to Report Back to the Delegator

1. Summarise the current context, asking:
   - Are you reporting success with a commit request or a blocker?

2. Gather the evidence of changes made and outcomes achieved, or the blocker error details.

3. Read `.agents/domains/plans/report_template.md` and follow the directives there.

4. Generate the response and send it back to the delegator.

Thank you for your service.

# JSX Conventions

## No inline complex expressions

- RULE: Every JSX expression that composes more than one evaluation MUST be extracted into a function. Example: `<Show when{foo()?.length && !props.bar}><Menu>...` becomes `const showMenu = () => foo()?.length && !props.bar; <Show when={showMenu()}><Menu>...`

## Conditional Rendering

- RULE: MUST use SolidJS `<Show>` component for conditional rendering. Ternary and `&&` patterns are NOT allowed for conditional content.

## Event Handlers

- RULE: Event handlers with more than 1 line MUST be extracted to named const functions (`const handleChange = ...`) inside the component body.
- RULE: Inline arrow handlers are allowed only for single-expression delegates (e.g., `onClick={() => doSomething()}`).
- RULE: Local event handlers must be named `handleThingEvent` after the event `onEvent` and the `Thing` the event qualifier (e.g., `<ToggleButton onPress={handleTogglePress()}`).
- RULE: Event handlers MUST call `ev.stopImmediatePropagation()` and `ev.preventDefault()` explicitly when the DOM default must be suppressed.

## Icon Imports

- RULE: Icons MUST be imported by path from `lucide-solid` (e.g., `import XIcon from 'lucide-solid/icons/x'`), never from the barrel `lucide-solid/icons`.
- RULE: Imported icon components MUST be named with the `Icon` suffix (e.g., `ArrowDownIcon`, `CheckIcon`).

## Ref Callbacks

- RULE: Refs MUST use the callback pattern (`const setRef = (el) => { ... }`) and pass through to `props.ref?.(el)`.
- RULE: The `eslint-disable-next-line solid/reactivity` comment is required when ref callbacks are assigned.

## Direct Attribute Binding for `Select` Elements

- RULE: When spreading props onto a native `<select>` element, individual event handlers MUST be bound as explicit attributes (not via spread) to avoid SolidJS issue #1754 (DOM ordering bug for `<option>` selection).

## Children and sklot props single evaluation

When a component accepts `props.children` (or any other `: JSX.Element` prop) it MUST NOT evaluate it more than once.

DO NOT

```tsx
// evaluates twice
<Show when={props.children}>{props.children}</Show>
```

DO NOT

```tsx
// evaluates three times!
const foo = () => (props.children ? true : false);
const bar = () => (props.children ? 1 : 2);
<Show when={foo() || bar()}>{props.children}</Show>;
```

DO:

```tsx
// evaluates once
import { children as childrenMemo } from '@no-comply/solid-primitives';
const children = () => childrenMemo(props.children)
const bar = () => (children() ? 1 : 2);
<Show when={children()}>{children()}</Show>`
```

**Note:** if children consume a context provided by this container then they need contents and evaluation needs to be factored out to a part so that evaluation happens inside the provider.

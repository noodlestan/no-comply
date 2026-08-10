# Draft: Add Textarea Input

> Generated from NOCOMPLY.md item "TextareaInput" (under Form inputs)
> Status: Draft — classification, API design, decomposition (WIP)

---

## PROVISIONAL STATUS

> **This is a WIP draft pending discovery of Textarea-specific use cases and particulars.**
> The existing `TextInput` implementation is the direct reference and the component is expected to closely mirror its structure, replacing `<input>` with `<textarea>`. See notes at bottom for open questions.

---

## Classification

| Aspect | Value |
|---|---|
| Type | `composed` — mirrors TextInput composition, same mixin stack |
| Structure | `standalone` — single component |
| State | `stateful` / `interactive` — owns input value state, responds to user input |
| Visibility | `public` — exported input component |

---

## API Design

### Identity

- **TextareaInput** — `component:standard-ui:textarea-input` at `$PROJECT/src/input/components/TextareaInput/`
- New entity — no existing textarea to extend

### Reference: Existing TextInput architecture

TextInput composes:

```
createBaseInput(props)
  └── createTextInputValue(props)      ← value state, wasTouched
        ├── createInputBoxMixin(props)  ← box styling
        ├── createInputStateMixin(props) ← disabled, invalid state
        ├── createSizedInputBoxMixin(props) ← size prop
        └── createContentLengthMixin(props) ← length/chars count
```

`TextInput.tsx` renders `<input {...$} />`.

`TextareaInput.tsx` would render `<textarea {...$} />` with the same mixin composition.

### Dependencies

| Dependency | Package | Role |
|---|---|---|
| `createBaseInput` | `@no-comply/solid-composables` | Base input id, root props |
| `createTextInputValue` | `@no-comply/solid-composables` | Value state, change handling |
| `createInputBoxMixin` | `standard-ui` mixins | Box styling (reuse) |
| `createInputStateMixin` | `standard-ui` mixins | disabled/invalid state (reuse) |
| `createSizedInputBoxMixin` | `standard-ui` mixins | Size prop (reuse) |
| `createContentLengthMixin` | `standard-ui` content | Character count (reuse) |

#### Props shape (provisional — mirrors TextInput + textarea additions)

```tsx
type TextareaInputProps = BaseInputProps &
  TextInputValueProps &
  InputStateMixinProps &
  SizedInputBoxMixinProps &
  ContentLengthMixinProps & {
    // Textarea-specific
    rows?: number;
    cols?: number;
    resize?: 'none' | 'both' | 'horizontal' | 'vertical';
    wrap?: 'hard' | 'soft' | 'off';
    maxLength?: number;
    showCharacterCount?: boolean;     // display remaining chars
    autoResize?: boolean;             // grow with content
  };
```

#### API shape

```tsx
type TextareaInputAPI = {
  $root: BaseInputAPI['$root'] &
    TextInputValueAPI['$root'] &
    InputBoxMixinAPI['$root'] &
    InputStateMixinAPI['$root'] &
    SizedInputBoxMixinAPI['$root'] &
    ContentLengthMixinAPI['$root'];
  value: TextInputValueAPI['value'];
  wasTouched: TextInputValueAPI['wasTouched'];
  size: SizedInputBoxMixinAPI['size'];
  length: ContentLengthMixinAPI['length'];
  id: BaseInputAPI['id'];
};
```

### Renders

```tsx
// Expected shape
const TextareaInput: Component<TextareaInputProps> = props => {
  const [locals, $others] = splitProps(props, TEXTAREA_INPUT_PROPS);
  const { $root } = createTextareaInput(locals);
  const $ = combineProps($others, $root);
  return <textarea {...$} />;
};
```

### State & Interaction

- Mirrors TextInput value state (`value`, `onInput`, `onChange`, `wasTouched`)
- Additional: `autoResize` adjusts `rows` dynamically based on content scrollHeight

### Styling (standard-ui)

- Reuses all existing input mixins (`InputBoxMixin`, `InputStateMixin`, `SizedInputBoxMixin`)
- Additional CSS for `resize` property
- Character counter (if `showCharacterCount`) rendered as a sibling element
- CSS module: `TextareaInput.module.scss`

---

## Decomposition

### Proposed entities

| Entity | Kind | Package | Responsibility |
|---|---|---|---|
| `TextareaInput` | Component | `standard-ui` | Thin component, renders `<textarea>` |
| `createTextareaInput` | Composable | `standard-ui` | Factory — same mixin stack as TextInput |
| `TextareaValueMixin` (maybe) | Controller | `solid-composables` | If textarea-specific value logic emerges (e.g., autoResize) |

### Key difference from TextInput

TextInput and TextareaInput share the **entire mixin stack**. The only structural difference is:
- `TextInput.tsx` → `<input {...$} />`
- `TextareaInput.tsx` → `<textarea {...$} />`

This means the composable factory (`createTextInput` → `createTextareaInput`) would be nearly identical.

---

## Deduplication

| Candidate | Match | Action |
|---|---|---|
| `createTextInput` | High — same shape, different render element | Reference architecture directly |
| `createTextInputValue` | Full match for value state | Compose directly |
| All input mixins | Full match for styling | Compose directly |

---

## Notes (WIP — Pending Discovery)

### Open questions and undeferred decisions

1. **Auto-resize behavior** — Should this be a separate controller `createAutoResizeTextarea` in `solid-composables`, or inline in the standard-ui factory?
2. **Character counter** — Is this a separate component/controller or part of TextareaInput? Should it be composed as a `ContentLength` indicator?
3. **Textarea-specific validation** — Does `maxLength` need a visual counter, or is native HTML validation sufficient?
4. **Resize handle** — Native `resize` CSS property vs custom styled resize handle?
5. **Rows default** — Does TextareaInput need a default `rows` value (e.g., 3), and should this be configurable?
6. **Placeholder** — Same as TextInput via native `placeholder` attribute, or enhanced?

### Follow-ups

- **Discovery task**: Audit usage patterns for textareas in standard-ui-demo and real applications to confirm props and defaults.
- Decide if `createTextInputValue` from solid-composables is sufficient or if a `createTextareaValue` with auto-resize logic is needed.

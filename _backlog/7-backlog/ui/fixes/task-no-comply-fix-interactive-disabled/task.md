# Fix: Add interactive prop to AriaPressable

**Summary:** When `interactive={true}` and `disabled={true}`, set `data-disabled` instead of `aria-disabled` so keyboard/mouse events still fire (for tooltips on disabled buttons). Also review global mixin that sets `pointer-events: none` on disabled — should use `pointer-events: default` for interactive disabled.

**Acceptance criteria:**
- `disabled + interactive` → `data-disabled`, not `aria-disabled`
- Events fire (click, keydown) on interactive-disabled elements
- Styling uses `[data-disabled]` not `[aria-disabled]` for interactive

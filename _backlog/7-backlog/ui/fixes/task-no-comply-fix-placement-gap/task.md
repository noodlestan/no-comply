# Fix: Placement — gap not implemented

**Summary:** `createPlacement` or placement mixin does not respect a `gap` prop between the reference element and the floating element. Popover, Menu, and other positioned components have no configurable spacing from their trigger.

**Scope:** `solid-composables/src/placement/`

**Acceptance criteria:**
- Placement accepts `gap?: number` prop (default 0)
- Floating element is offset by `gap` pixels from reference
- Works for all placement directions (top, bottom, left, right, and variations)

# Fix: Popover — display and event issues

**Summary:** Popover does not render when there is no space to the right (no flip/fallback placement). Events are not triggered inside popover content (likely z-index or pointer-event containment). Must implement placement fallback and verify event propagation.

**Acceptance criteria:**
- Popover flips to available space
- Clicks inside popover content register
- Closes on outside click / Escape

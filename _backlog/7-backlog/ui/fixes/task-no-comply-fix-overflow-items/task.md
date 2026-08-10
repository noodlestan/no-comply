# Fix: OverflowItems — trigger and content not rendering

**Summary:** `OverflowItems` components are stubs (9–11 lines each). `OverflowItemsContent` is a bare `For` loop, `OverflowItemsToggle` is an empty `Show` wrapper. Must implement actual trigger button and overflow content panel with measurement and responsive overflow logic.

**Acceptance criteria:**
- Trigger renders when items overflow
- Content panel renders hidden items
- Toggle shows/hides overflow content

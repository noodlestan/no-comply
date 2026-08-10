# Fix: MenuItem — disabled prop has no effect

**Summary:** `disabled` prop on MenuItem is accepted but does not prevent interaction or update visual state. Wire `disabled` through to `aria-disabled`, `data-disabled`, and skip press handlers.

**Acceptance criteria:**
- `disabled={true}` prevents click/Enter/Space
- Sets `aria-disabled` and `data-disabled`
- Visual state reflects disabled

# Fix: Menu — dismiss, sizing, placement

**Summary:** Menu does not dismiss on scroll; max/min width not enforced; fallback popover placement missing (`[data-popover-overflow]`). Submenu overflow strategy needed.

**Acceptance criteria:**
- Dismisses on scroll outside
- `min-width` / `max-width` constrain menu width
- Falls back to available placement when viewport-constrained

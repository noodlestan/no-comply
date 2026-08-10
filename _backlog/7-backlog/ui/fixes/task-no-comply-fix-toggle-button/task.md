# Fix: ToggleButton / ToggleAction keyboard

**Summary:** Enter key does not trigger toggle; Space bar double-triggers. Keyboard interactions with `createToggleAction` must dispatch once on Enter and once on Space release (not both keydown and keyup).

**Acceptance criteria:**
- Enter presses the button once
- Space presses the button once (not twice)
- Mouse click still works

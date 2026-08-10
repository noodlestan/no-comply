# Fix: Callout — padding, closeButton, children wrapper

**Summary:** Callout has three issues: (1) uses double padding where Flex padding-inline/padding-block should be used instead, (2) closeButton position not offset correctly, (3) children wrapper div renders even when no children present.

**Scope:**
- Replace hardcoded padding with Flex padding-inline/padding-block
- Fix closeButton offset when present
- Conditionally render children wrapper only when children exist

**Acceptance criteria:**
- Padding uses Flex layout props
- Close button sits at correct inset
- No empty wrapper div when `children` is empty

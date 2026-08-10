# Fix: Display, Heading, Text — add aria-heading/aria-level by default

**Summary:** When `Text` or `Display` renders a non-heading tag (e.g. `<div>`, `<p>`), it should still set `role="heading"` and `aria-level` for correct heading semantics. When it renders an `<h1>`–`<h6>`, native semantics suffice. Add `noaria?: boolean` opt-out prop.

**Scope:**
- ADD `role="heading"` + `aria-level` when `tag` is not a heading tag
- ADD `aria-paragraph` when `tag` is not `<p>` but acts as paragraph
- ADD `noaria?: boolean` prop to opt out of all injected ARIA

**Acceptance criteria:**
- `<Text as="div" level={2}>` renders `role="heading" aria-level="2"`
- `<Text as="h2">` renders native `<h2>` (no extra ARIA)
- `<Text noaria>` renders without injected ARIA

# Fix: Safari — scrollbars and link focus

**Summary:** Two Safari-specific issues:

- **No scrollbars** — custom scrollbar styling (`::-webkit-scrollbar`) may be hiding scrollbars entirely. Ensure scrollable areas remain usable with a visible (but styled) scrollbar.
- **Links not focusable** — likely `pointer-events` or `user-select` reset interfering with native link focus. Verify `<a>` elements receive keyboard focus in Safari.

**Scope:** Review `::-webkit-scrollbar` overrides and focus/pointer-event resets in theme CSS and component SCSS files. Target Safari specifically — other browsers should not regress.

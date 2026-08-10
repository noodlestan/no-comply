# Fix: MenuItemGroup + MenuItem issues

**Summary:** Multiple menu issues to fix in a single pass:

- **MenuItem hover state:** Primary variant missing hover visual feedback
- **MenuItem action variant:** Should not be allowed as a primary variant option
- **MenuItemGroup descriptions:** Description text not styled (muted, truncated)
- **MenuItem disabled:** Fix alongside (verifying P0 fix if applicable)

**Scope:** Standard-ui `menu/components/MenuItem*` + `menu/mixins/MenuItem*`

**Acceptance criteria:**
- Primary variant has visible hover state (bg or border change)
- Action variant cannot be combined with primary
- Descriptions render with muted typography and text overflow
- All issues resolved without regressions

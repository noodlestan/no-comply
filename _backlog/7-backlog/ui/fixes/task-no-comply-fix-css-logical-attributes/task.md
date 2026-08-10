# Fix: Audit CSS — use logical attributes everywhere

**Summary:** Scan all SCSS/CSS files in `no-comply/libs/` for physical positioning/sizing attributes and replace with logical equivalents:

| Physical | Logical |
|---|---|
| `top` / `right` / `bottom` / `left` | `inset-block-start` / `inset-inline-end` / `inset-block-end` / `inset-inline-start` |
| `margin-top` / `margin-bottom` | `margin-block-start` / `margin-block-end` |
| `margin-left` / `margin-right` | `margin-inline-start` / `margin-inline-end` |
| `padding-left` / `padding-right` | `padding-inline-start` / `padding-inline-end` |
| `padding-top` / `padding-bottom` | `padding-block-start` / `padding-block-end` |
| `border-left` / `border-right` | `border-inline-start` / `border-inline-end` |
| `border-top` / `border-bottom` | `border-block-start` / `border-block-end` |
| `text-align: left` / `right` | `text-align: start` / `end` |

**Scope:** All `.scss` and `.css` files under `no-comply/libs/`

**Acceptance criteria:**
- No physical directional properties remain in component CSS
- Layout is preserved in both LTR and RTL contexts
- Prefer `inset-inline`/`inset-block` shorthand where all four sides are set

# Standard UI: Badge Component — Refinement Questions

## ✅ Resolved

### ComposeColorMixin — API decided

- **Q1-7**: All resolved (palette as direct prop → changed to read from CSS var; 3 opt-in targets with booleans; CSS variable protocol; `set-color` SCSS mixins; structural class with defaults for 3x3 grid). ✅

### Badge Component — decisions made

- **Q8**: Badge uses `createTextMixin()` directly inside `createBadge()`, passing resolved `size()` accessor. No mentions of `Typography` or `SizedTypography` in specs/task. ✅
- **Q9**: `palette: 'neutral'` is correct default. `alignFirstLine` is NOT in scope. `size` is a prop from `SizedContent` (default `'normal'`). ✅
- **Q10**: Option A — Badge defaults `foreground`, `background`, `border` to `true`. ✅

---

## 🟡 Open — Badge Component

11. **CSS module**: Exact `.Badge` structural styles (padding, border-radius, inline-flex layout) and coordinate system setup for `ComposeColorMixin`.

12. **`--__compose-color` level/alpha overrides**: Badge needs to set `--__compose-color-fg-level`, `--__compose-color-fg-alpha` and equivalents for bg/border. What are the override values?

13. **`mixin:standard:badge`**: Currently not in scope. `createBadge()` needs to compose `ContentPaletteMixin` + `ComposeColorMixin` + set `.Badge` structural styles + set `--__compose-color` overrides. A separate `createBadgeMixin()` may be needed to separate structural concerns from the component factory. **Confirm whether to add this entity.**

## 🟢 Verify

14. **Token mapping**: Confirm `down`/`normal`/`up` scale token mappings match existing pattern?
15. **Graphics tokens**: Confirm `graphics-neutral`, `graphics-color-1`, `graphics-color-2` tokens exist in theme?

## 🔵 Follow-up decisions

16. **SizedAction refactoring**: In this task or separate?
17. **SizedIcon removal**: Safe after SizedAction refactoring?
18. **FeedbackPaletteMixin**: Spec alongside ContentPaletteMixin or defer?

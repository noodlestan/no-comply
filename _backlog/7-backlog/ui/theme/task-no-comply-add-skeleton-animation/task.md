# Add: CSS animation for skeleton/gray static things

**Summary:** Shared CSS solution for all skeleton/placeholder elements (SkeletonText, SkeletonInputBox, and future skeleton components). A pulsing shimmer animation applied via a common CSS class or mixin.

**Requirements:**
- Subtle pulse or shimmer animation (not distracting)
- Inherits border-radius from the skeleton element
- Respects `prefers-reduced-motion`
- Applied via CSS class (`.is-skeleton` or equivalent)
- Animates `background` or `opacity` for performance

**CSS approach:**
```scss
// In solid-composables or standard-ui theme
@keyframes skeleton-pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
}

.is-skeleton {
  animation: skeleton-pulse 1.5s ease-in-out infinite;
  @media (prefers-reduced-motion) {
    animation: none;
  }
}
```

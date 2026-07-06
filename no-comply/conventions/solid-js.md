# Solid JS Conventions

## ClassList over className

- RULE: Use `classList` prop for all conditional styling. NEVER use `className` with string concatenation.
- RULE: Static class lists MUST use `staticClassList(styles, '-ClassName')` from `@no-comply/solid-primitives`.
- RULE: Dynamic class lists MUST use `createClassList(styles, () => ({ ... }))`.

# @no-comply/solid-accessibility — Conventions

> This file extends [no-comply libs conventions](../../../conventions/no-comply-libs.md).

## File Organization

### Per-controller 4-file structure

```
controllers/<name>/
├── index.ts         # Barrel: re-exports types, factory, constants
├── types.ts         # Props + API type definitions
├── createAria<Name>.ts  # Factory function implementation
└── constants.ts     # definePropKeys invocation (ARIA_*_PROPS)
```

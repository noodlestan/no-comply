# @purrtrait/code-layout — Conventions

> This file extends [purrtrait conventions](../../../conventions/purrtrait.md).

## File Organization

- **Layer-based top-level directories**: `types.ts` (flat), `compute/`, `contexts/`, `format/`
- **Each layer** uses a `helpers/` subdirectory for implementation files
- **No nested private folders** — all files in `helpers/` are publicly re-exported

# @no-comply/build-tools — Architecture

> This file extends [no-comply-demo architecture](../../../architecture/no-comply-demo.md).

> Project path: `tools/build`
> Generated: 2026-06-25
> By: sub-agent

---

## Layering

```
bin/ (CLI entry points)
  │
  └─> src/build/ (core factory: createBuild)
        │
        ├── src/config/ (esbuild preset objects)
        │     ├── common.mjs
        │     ├── cjs.mjs
        │     └── esm.mjs
        │
        ├── src/helpers/ (filesystem & package resolution)
        │     ├── resolvePackageJson.mjs
        │     └── resolveExternalPackages.mjs
        │
        └── src/plugins/ (esbuild lifecycle hooks)
              ├── copyStaticFiles.mjs
              └── emitTypesPlugin.mjs
```

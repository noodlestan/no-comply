# @no-comply/build-tools — Architecture

> Project path: `tools/build`
> Generated: 2026-06-25
> By: sub-agent

---

## Design Principles

1. **Convention over Configuration** — Sensible esbuild presets (CJS/ESM); auto-infers externals from `package.json`.
2. **Composition over Inheritance** — Factory (`createBuild`) composes configs, helpers, and plugins; no class hierarchies.
3. **Separation of Concerns** — Build tooling is isolated from consumer packages to avoid dependency pollution.

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

---

## Dependency Flow

**Unidirectional:** `bin/` → `build/` → `config/`, `helpers/`, `plugins/`

- No circular dependencies.
- No module depends on `bin/`.
- **Exception:** `config/esm.mjs` imports `plugins/copyStaticFiles.mjs` — a slight upward dependency from config to plugin (acceptable as both are leaf modules).

---

## External Dependencies

| Dependency                            | Purpose                                                          |
| ------------------------------------- | ---------------------------------------------------------------- |
| `esbuild` (implicit runtime peer)     | Core bundler used by the factory                                 |
| `esbuild-plugin-file-path-extensions` | ESM `.mjs` extension resolution plugin                           |
| `ts-node` (devDependency)             | Used for TypeScript declaration generation via `emitTypesPlugin` |

---

## Peer Dependencies

None declared. `esbuild` is used at runtime but not listed as a peer — consumers are expected to provide it.

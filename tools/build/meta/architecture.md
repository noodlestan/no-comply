# @no-comply/build-tools — Architecture

> This file extends [no-comply-demo architecture](../../../architecture/no-comply-demo.md).

> Project path: `tools/build`
> Generated: 2026-06-26
> By: opencode/mimo-v2.5-free

---

## Project Context

Build-tools is the internal build system for the no-comply monorepo. It provides esbuild-based presets, factory composition, and plugin hooks so that consumer packages (`@no-comply/*`, `@purrception/*`) can build CJS and ESM outputs with zero configuration.

**Consumes:** `esbuild` (implicit runtime peer — consumers must provide it), `esbuild-plugin-file-path-extensions`, `ts-node` (for type emission).

**Provides:** Two CLI commands (`no-comply-build`, `no-comply-watch`) and a `createBuild` factory function that consumer packages import to compose their own build pipelines.

**API categories:** Factory (`createBuild`), Config presets (CJS/ESM/Common), Plugins (type emission, static file copying), Helpers (package.json resolution, externals inference).

## Design Principles

### Convention over Configuration

- **Sensible defaults over config files** — esbuild presets encode target, format, and output directory. Consumers pass zero config and get correct builds. `createBuild` merges consumer overrides on top of presets.

- **Auto-inferred externals** — `resolveExternalPackages` reads `package.json` and extracts `dependencies`, `peerDependencies`, and `optionalDependencies` as esbuild externals. No manual external list required.

### Composition over Inheritance

- **Factory-based build composition** — `createBuild(options, defaults)` is a factory that composes a final esbuild config by merging two plain objects. No class hierarchies, no builder pattern — just object spread.

- **Plugins as composable hooks** — Each plugin (`copyStaticFiles`, `emitTypesPlugin`) is a factory function returning an esbuild plugin object. Plugins are appended to the config, not subclassed.

### Separation of Concerns

- **Config separated from plugins separated from helpers** — Presets live in `config/`, lifecycle hooks in `plugins/`, filesystem and resolution logic in `helpers/`. No module imports across concerns except through the factory.

- **CLI separated from core** — `bin/` scripts are thin wrappers that wire presets into `createBuild`. All logic lives in `src/`.

### Static and Minimal

- **Minimal surface area** — The entire package is 4 modules, 2 plugins, 2 helpers, and 2 CLI entry points. No abstraction layers, no middleware, no registries.

- **No runtime dependencies listed** — `esbuild` is used at runtime but not declared as a peer dependency. Consumers are expected to provide it in their own `node_modules`.

## Structure

```
tools/build/
├── bin/                              — CLI entry points (build, watch)
│   └── build.mjs                     — runs CJS then ESM build sequentially
└── src/
    ├── build/                        — core factory
    │   └── index.mjs                 — createBuild: merges configs, appends plugins, returns { build, watch }
    ├── config/                       — esbuild preset objects
    │   ├── common.mjs                — shared base (bundle, sourcemap, logLevel)
    │   ├── cjs.mjs                   — CommonJS profile (target node24, dist/cjs)
    │   └── esm.mjs                   — ESM profile (target esnext, dist/esm, .mjs)
    ├── helpers/                      — filesystem & package resolution
    │   └── resolvePackageJson.mjs    — and 1 more
    └── plugins/                      — esbuild lifecycle hooks
        ├── copyStaticFiles.mjs       — onEnd: copies .json from src/ to outdir
        └── emitTypesPlugin.mjs       — onEnd: spawns type declaration emit
```

`helpers/` contains two small pure functions for reading `package.json` and extracting external package names. No other directories exist.

## Main Patterns

### Factory Pattern

- **`createBuild(options, defaults)`** — Central entry point. Merges consumer options onto preset defaults, resolves externals from `package.json`, appends the `emitTypesPlugin`, and returns `{ build, watch }` async functions. All build tooling flows through this single factory.

### Config Presets

- **Common → CJS/ESM** — `commonConfig` defines shared esbuild options (bundle, sourcemap, logLevel). `cjsConfig` and `esmConfig` spread `commonConfig` and add format-specific settings (target, outdir, outExtension, plugins).

### Plugin Hooks

- **Type emission** — `emitTypesPlugin` hooks into esbuild's `onEnd` to spawn `npm run build:types:<target>` via `spawnSync`. Skips on build errors.

- **Static file copying** — `copyStaticFilesPlugin` hooks into `onEnd` to recursively copy `.json` files from `src/` to the output directory.

### External Inference

- **Package.json driven** — `resolveExternalPackages` reads a package's `dependencies`, `peerDependencies`, and `optionalDependencies` and returns their keys. These become esbuild `external` entries, merged with any consumer-provided externals.

## Layers

Import direction flows strictly downward: `bin/` → `src/build/` → `config/`, `helpers/`, `plugins/`. No circular dependencies exist at the module boundary.

One acceptable exception: `config/esm.mjs` imports `copyStaticFilesPlugin` from `plugins/`. This is a slight upward dependency from config to plugin, but both are leaf modules with no reverse dependency.

`helpers/` is a leaf layer — nothing depends on it except `src/build/` which calls `resolvePackageJson` and `resolveExternalPackages`.

## External Dependencies

### Runtime

- **esbuild** — Core bundler. Used directly via `esbuild.build()` and `esbuild.context()`. Not declared in `package.json`; consumers must provide it.

### Dev Dependencies

- **esbuild-plugin-file-path-extensions** — Resolves `.mjs` extensions for ESM output. Used in `esmConfig` only.

- **ts-node** — Used by `emitTypesPlugin` to spawn TypeScript declaration generation via `npm run build:types:<target>`.

### Tradeoffs

- **No data fetching** — Simple offline architecture; fast but not dynamic.

- **esbuild not declared as peer** — Avoids peer dependency warnings but makes the implicit requirement invisible to consumers.

- **spawnSync for type emission** — Synchronous process spawn is simple and debuggable, but blocks the build process during type generation.

- **Config as plain objects** — Easy to merge and override, but no validation or schema enforcement on consumer inputs.

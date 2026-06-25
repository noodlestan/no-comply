# @no-comply/build-tools — API

> Project path: `tools/build`
> Generated: 2026-06-25
> By: sub-agent

---

## Entry Point

```js
import { createBuild } from '@no-comply/build-tools';
```

The package also exposes two CLI binaries (via `package.json` `bin` field):

| Binary            | File            |
| ----------------- | --------------- |
| `no-comply-build` | `bin/build.mjs` |
| `no-comply-watch` | `bin/watch.mjs` |

---

## Main API

### `createBuild(options?, defaults?)`

Factory that returns `{ build, watch }` — an object with two async methods.

- **`options`** (Object, optional) — user-supplied esbuild config overrides
- **`defaults`** (Object, optional) — a preset config (e.g. `cjsConfig` or `esmConfig`)

**Behavior:**

1. Reads `package.json` from `process.cwd()` via `resolvePackageJson`
2. Infers external packages from `dependencies`, `peerDependencies`, `optionalDependencies`
3. Merges inferred + defaults + user externals (deduped via Set)
4. Spreads `defaults` then `options` onto esbuild config (options win)
5. Appends `emitTypesPlugin` to the plugins array
6. Returns `{ build, watch }`

**Returns:**

| Method    | Description                                                                       |
| --------- | --------------------------------------------------------------------------------- |
| `build()` | Runs `esbuild.build(config)` with type-emit plugin appended                       |
| `watch()` | Runs `esbuild.context(config).watch()` with type-emit plugin (exitOnError: false) |

---

## Config Profiles

### `commonConfig`

Shared base for both profiles:

```js
{ bundle: true, sourcemap: true, logLevel: 'info' }
```

### `cjsConfig`

CommonJS build profile (spreads `commonConfig`):

| Field         | Value                 |
| ------------- | --------------------- |
| `format`      | `'cjs'`               |
| `platform`    | `'node'`              |
| `target`      | `'node24'`            |
| `entryPoints` | `['src/index.ts']`    |
| `outdir`      | `'dist/cjs'`          |
| `tsconfig`    | `'tsconfig.cjs.json'` |
| `plugins`     | `[]`                  |

### `esmConfig`

ES Module build profile (spreads `commonConfig`):

| Field          | Value                                                                    |
| -------------- | ------------------------------------------------------------------------ |
| `format`       | `'esm'`                                                                  |
| `platform`     | `'node'`                                                                 |
| `target`       | `'esnext'`                                                               |
| `entryPoints`  | `['src/**/*.ts']`                                                        |
| `outdir`       | `'dist/esm'`                                                             |
| `outExtension` | `{ '.js': '.mjs' }`                                                      |
| `plugins`      | `esbuildPluginFilePathExtensions()`, `copyStaticFilesPlugin('dist/esm')` |

---

## Helpers

### `resolvePackageJson(cwd)`

- **Signature:** `(cwd: string) => Object`
- Reads and parses `package.json` from the given directory.

### `resolveExternalPackages(pkg)`

- **Signature:** `(pkg: Object) => string[]`
- Extracts all keys from `dependencies`, `peerDependencies`, and `optionalDependencies`.

---

## Plugins

### `copyStaticFilesPlugin(outdir)`

- **Signature:** `(outdir: string) => esbuild.Plugin`
- Esbuild `onEnd` hook; recursively copies `.json` files from `src/` to `outdir`.

### `emitTypesPlugin(target, exitOnError?)`

- **Signature:** `(target: string, exitOnError?: boolean) => esbuild.Plugin`
- Esbuild `onEnd` hook; spawns `npm run build:types:<target>` using `ts-node`.

### `generateTypes(target, exitOnError?)`

- **Signature:** `(target: string, exitOnError?: boolean) => void`
- Low-level function that spawns `npm run build:types:<target>` via `child_process.spawnSync`.

---

## CLI Usage

### `no-comply-build`

Builds both CJS and ESM targets sequentially:

```bash
no-comply-build
```

### `no-comply-watch`

Watches both CJS and ESM targets in parallel:

```bash
no-comply-watch
```

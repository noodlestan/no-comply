# @no-comply/build-tools — Modules

> Project path: `tools/build`
> Generated: 2026-06-25
> By: sub-agent

---

```
tools/build/
├── bin/
│   ├── build.mjs              — CLI entry for `no-comply-build`: runs CJS then ESM build sequentially
│   └── watch.mjs              — CLI entry for `no-comply-watch`: runs CJS and ESM watch in parallel
├── src/
│   ├── build/
│   │   └── index.mjs          — Factory `createBuild`: merges configs, appends plugins, returns { build, watch }
│   ├── config/
│   │   ├── common.mjs         — Shared esbuild base config (bundle, sourcemap, logLevel)
│   │   ├── cjs.mjs            — CommonJS build profile (target node24, dist/cjs)
│   │   └── esm.mjs            — ESM build profile (target esnext, dist/esm, .mjs extension)
│   ├── helpers/
│   │   ├── resolveExternalPackages.mjs — Extracts external package names from package.json deps
│   │   └── resolvePackageJson.mjs      — Reads and parses package.json from a given directory
│   └── plugins/
│       ├── copyStaticFiles.mjs         — Esbuild onEnd hook: copies .json files from src/ to outdir
│       └── emitTypesPlugin.mjs         — Esbuild onEnd hook: spawns `npm run build:types:<target>` via ts-node
```

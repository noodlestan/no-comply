# @no-comply/build-tools — Conventions

> Project path: `tools/build`
> Generated: 2026-06-25
> By: sub-agent

---

## Naming Conventions

| Element            | Convention          | Examples                                                    |
| ------------------ | ------------------- | ----------------------------------------------------------- |
| Source files       | kebab-case + `.mjs` | `resolve-package-json.mjs`                                  |
| Directories        | kebab-case          | `build/`, `config/`, `helpers/`, `plugins/`                 |
| Exported factories | PascalCase prefix   | `createBuild`, `copyStaticFilesPlugin`, `emitTypesPlugin`   |
| Internal functions | camelCase           | `generateTypes`, `resolvePackageJson`, `copyFilesRecursive` |
| Config objects     | camelCase           | `commonConfig`, `cjsConfig`, `esmConfig`                    |
| Esbuild plugins    | kebab-case `name`   | `'emitTypes'`, `'copy-static-files'`                        |
| CLI binary names   | kebab-case          | `no-comply-build`, `no-comply-watch`                        |

---

## File Organization

- **One concern per directory:** `config/`, `helpers/`, `plugins/` are separated by architectural role.
- **One export per file:** each file exports a single function or factory (exception: `emitTypesPlugin.mjs` exports two closely related functions — `emitTypesPlugin` and `generateTypes`).
- **Thin CLI layer:** `bin/` files do minimal work — they import, compose, and invoke; no logic lives there.
- **All source is `.mjs`** (ESM) — no TypeScript in this package itself.

---

## API Design Patterns

1. **Factory pattern** for parameterized objects:
   - `createBuild(options, defaults)` → `{ build, watch }`
   - `copyStaticFilesPlugin(outdir)` → esbuild plugin
   - `emitTypesPlugin(target, exitOnError)` → esbuild plugin

2. **Partial application / currying** in CLI wrappers:

   ```js
   const cjs = options => createBuild(options, cjsConfig);
   ```

3. **Config merging with layering:** inferred externals → defaults → user options (later wins, deduped via Set).

4. **Plugin composition:** user plugins + defaults plugins + auto-appended `emitTypesPlugin`.

---

## Typing Conventions

- No TypeScript used in this package.
- Typing is implicit through object shapes passed directly to esbuild.
- No types, interfaces, generics, or type exports.

# Health Check

- updated: 2026-06-25
- by: sub-agent

## Architecture

- **#layering** `config/esm.mjs` imports `plugins/copyStaticFiles.mjs` — upward dependency from config to plugin layer
- **#consistency** CJS and ESM config profiles have different plugin pipelines — `cjsConfig` has empty `plugins: []`, `esmConfig` imports plugins directly
- **#externals** Auto-externalization covers all dependency types but may over-externalize; no opt-out mechanism for individual packages
- **#exports** No `exports` map in `package.json` — internal modules are implicitly reachable but undocumented
- **#scope** Only two presets (CJS, ESM); hard-coded `platform: 'node'` — not suitable for browser bundles or other formats

## Testing

- **#coverage** No test framework or test scripts configured; correctness implicitly validated by consuming packages

## Documentation

- **#todo** TODO comments in both CLI files (`bin/build.mjs`, `bin/watch.mjs`) for per-package build config file resolution — unimplemented

## Dependencies

- **#implicit** `esbuild` is used at runtime but not declared as a dependency or peer dependency — relies on consumer to provide it

## CI/CD

- **#linting** Only Prettier configured — no ESLint or type checking for this package's own source

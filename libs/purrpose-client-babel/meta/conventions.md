# Conventions — `@purrpose/client-babel`

## Naming

- `camelCase` for functions and variables
- `PascalCase` for types
- File names match export name (e.g., `createCompiler.ts`, `evaluateComponent.ts`)

## File Organization

- One function per file
- `private/` — internal implementation details, not exported
- `helpers/` — semi-public, re-exported via barrel
- Barrel files auto-exclude directories: `private/`, `parts/`, `functions/`
- Single main entry (`createCompiler`) with compositional helpers

## API Design

- Factory pattern: `createCompiler(options)` returns an object
- Options object pattern with nested config
- Preset system: `CompilerPreset` bundles babel presets + scope
- Debug modes: `undefined` (error-only), `false` (silent), `true` (verbose), `string` (prefixed verbose)
- Errors always thrown; conditionally logged before throw

## Typing

- Generics on all evaluate helpers
- Unions over enums (`DebugOption = boolean | string | undefined`)
- `Record<string, unknown>` for dynamic scope
- Internal config types left file-private

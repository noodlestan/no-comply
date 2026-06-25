# Conventions

## Naming

- **Functions**: camelCase (`solidPreset`)
- **Files**: kebab-case (`preset.ts`, `vite.config.mts`)
- **Package**: scoped `@purrpose/` with path-style name (`client-babel-preset-solidjs`)

## File Organization

- **Flat source layout** — `src/` contains only the barrel (`index.ts`) and the implementation file (`preset.ts`).
- **Barrel pattern** — `src/index.ts` re-exports from `./preset` using a generated `@index` / `@endindex` comment block (tool-managed).
- **No test files** — no `*.test.*` files exist in the package.

## API Design Patterns

- **Factory function** — `solidPreset()` is a zero-argument factory returning a `CompilerPreset` configuration object. This matches the `createCompiler()` pattern in `@purrpose/client-babel`.
- **Default + named export** — the same function is exported both as a named export and as the default export for import convenience.
- **Preset-as-config** — the return value is pure configuration (Babel plugin items + scope shim), not a runtime plugin or class.
- **No error handling** — the factory has no validation, no error states, and no conditional logic.

## Typing Conventions

- **Explicit return types** — `solidPreset(): CompilerPreset` always annotated.
- **Type-only imports** — `import type { CompilerPreset }` for peer dep types.
- **Consumes external types** — no types defined in this package; all types come from `@purrpose/client-babel`.
- **Pragmatic escape hatch** — `@ts-expect-error` + `/* @ts-expect-error */` comment used for the CJS `babel-plugin-jsx-dom-expressions` import where no type declarations exist.

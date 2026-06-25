# purrpose

This document consolidates naming, file organization, API design, and typing conventions across all @purrpose packages. It serves as a single source of truth for contributors.

## API & Types

### API Design

- **Factory pattern**: functions like `createCompiler(options)` and `solidPreset()` return configuration objects
- **Options object**: accept configuration via an options object with nested config
- **Preset-as-config**: `CompilerPreset` bundles babel presets and scope; the return value is pure configuration, not a runtime plugin or class
- **Default + named export**: factory functions are exported both as named and default exports
- **Debug modes**: `undefined` for error-only, `false` for silent, `true` for verbose, `string` for prefixed verbose
- **Error handling**: errors are always thrown; conditionally logged before throw
- **No error handling in presets**: factory presets have no validation, no error states, and no conditional logic

### Typing

- **Explicit return types**: all public functions have annotated return types
- **Type-only imports**: use `import type` for peer dependency types
- **Generics**: use generics on all evaluate helpers
- **Unions over enums**: prefer union types over enums (`DebugOption = boolean | string | undefined`)
- **Dynamic scope**: use `Record<string, unknown>` for dynamic scope values
- **File-private types**: internal config types are kept file-private
- **Consume external types**: prefer consuming types from dependencies over defining new ones
- **Pragmatic escape hatch**: use `@ts-expect-error` with a comment for imports missing type declarations

## Modules and Files

### File Organization

- **Single function per file**: each file exports one primary function
- **Flat source layout**: `src/` contains the barrel and implementation files only
- **Private directory**: `private/` contains internal implementation details, never exported
- **Helpers directory**: `helpers/` contains semi-public utilities, re-exported via barrel
- **Barrel auto-exclude**: barrel files auto-exclude `private/`, `parts/`, and `functions/` directories
- **Single main entry**: each package has one primary entry point (`createCompiler`) with compositional helpers
- **Barrel pattern**: `src/index.ts` re-exports from implementation files using a `@index` / `@endindex` comment block
- **No test files**: test files are not included in the package

## Naming

### Naming

- **Functions**: camelCase (`createCompiler`, `solidPreset`)
- **Types**: PascalCase (`CompilerPreset`)
- **Variables**: camelCase
- **Implementation files**: name to match the primary export (`createCompiler.ts`)
- **Config files**: kebab-case (`vite.config.mts`)
- **Package**: scoped `@purrpose/` with path-style name (`client-babel-preset-solidjs`)

## Others

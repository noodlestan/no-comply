# @purrception/lang-ts-extract — Conventions

> Generated: 2026-06-25
> By: sub-agent

## Naming Conventions

- **Functions**: `camelCase` named after their primary action + target (e.g., `extractFunctionsFromProgram`, `createProgramFile`)
- **Types/Interfaces**: `PascalCase` with descriptive suffixes (`ProgramFileAPI`, `ProgramAPI`, `ProgramFilesContext`)
- **Files**: `camelCase.ts` matching the primary export name (e.g., `extractFunctionsFromProgram.ts` → exports `extractFunctionsFromProgram`)
- **Private modules**: Stored in `private/` subdirectories, same naming style as public modules

## File Organization Patterns

- **One export per file**: Each `.ts` file exports a single primary function or type
- **Barrel re-exports**: Each module directory has an `index.ts` barrel file using `// @index` comment directive (tool-generated)
- **Private modules**: Internal helpers live in `private/` subdirectory and are excluded from barrels
- **Helper modules**: Shared AST utilities live in `helpers/` subdirectory (e.g., `src/program-node/helpers/`)
- **One file per TS node kind**: TypeScript AST node extractors each have their own file (e.g., `extractUnionTypeNode.ts`, `extractObjectLiteralTypeNode.ts`)

## API Design Patterns

- **Factory functions, not classes**: `createProgram`, `createProgramFile`, `createProgramFilesContext` — all plain async factory functions
- **Lazy evaluation**: `exportsMap()` and `importsMap()` on `ProgramFileAPI` use memoized closures (`if (!map) { map = ... }`) to defer computation
- **Filter chain**: Component extraction chains `.map().filter(Boolean)` — maps to a domain type, filters out `undefined` results
- **Type narrowing with guards**: Widespread use of `ts.is*()` type guards for narrowing `FunctionLikeDeclaration` union
- **Narrow returns**: Functions that may not match return `| undefined` (e.g., `extractComponentFromFunctionDeclaration`, `extractFunctionFromDeclaration`)
- **Thin wrappers**: Most extractors are thin compositions of lower-level helpers with no additional logic
- **Dependency injection**: `ProgramFilesContext` provides a `readFile` function — consumers don't know the filesystem

## Typing Conventions

- **Explicit type imports**: Uses `import type { ... }` throughout
- **`type` aliases over `interface`**: Public API shapes (`ProgramFileAPI`, `ProgramAPI`) are `type` aliases
- **Discriminated unions**: `TypeExpressionNode` is a 15-variant discriminated union keyed on `kind`
- **Generic declarations**: `LanguageDeclaredSymbol<L>` pattern from `@purrception/lang-ts`
- **Optional metadata**: Liberal use of `?` on optional fields like `description`, `tags`, `generic`
- **No enums**: Tagged unions and string literal types used instead

## Error Handling

- **Fail early**: `throwUnsupportedNodeError` includes node kind, file path, line number, and source snippet
- **Silent skip**: Functions that can't extract return `undefined` (not thrown), with callers filtering via `.filter()`
- **Duplicate import detection**: `extractImportedSymbols` throws on duplicate import keys with diagnostic logging

## Internal vs External Boundaries

| Directory                    | Status                                           |
| ---------------------------- | ------------------------------------------------ |
| `src/extractors/private/`    | Internal: component detection heuristics         |
| `src/jsdoc/private/`         | Internal: low-level JSDoc tag parsing            |
| All `src/*/index.ts` barrels | Public (re-exported through root `src/index.ts`) |

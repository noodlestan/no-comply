# @purrtrait/client-tsx — Conventions

**Generated:** 2026-06-25
**By:** sub-agent

## Naming Conventions

- **Files**: `camelCase.ts` (e.g., `parseSource.ts`, `extractProps.ts`, `evaluateValue.ts`)
- **Functions**: `camelCase` (e.g., `createTSXElementNode`, `isExtractableElementNode`)
- **Types**: `PascalCase` — domain types use `TSX` prefix (`TSXNode`, `TSXElementNode`); non-domain interfaces use `I` prefix (`ICompilerAPI`, `ICompilerScope`)
- **Type aliases**: Prefer `type` over `interface`; zero `interface` declarations in the codebase
- **Discriminated union tag**: `type` field with string literal values (`'jsx' | 'handler' | 'expression'`)

---

## File Organization

- **Module-per-directory**: Each conceptual module has its own directory with an `index.ts` barrel and sibling implementation files
- **Private helpers**: Scoped in a `private/` subdirectory — not re-exported from any public barrel
- **Barrel generation**: `// @index(...)` comments mark auto-generated barrel entries (tool-generated, likely `barrelsby`)
- **Max nesting**: Two levels (`module/private/file.ts`)
- **One concern per file**: Each implementation file exports exactly one primary function

---

## API Design Patterns

- **Pure functions**: All exported APIs are standalone functions; no classes, no methods, no state
- **Typed wrapper pattern**: Thin tagged types (`TSXNode`) sit atop raw `ts.Node` — semantic narrowing without runtime overhead
- **Discriminated unions**: `TSXNode` is a tagged union enabling exhaustive switching
- **Type guards**: `isExtractableElementNode` uses `node is TypescriptNode` return-type syntax
- **Side-effect free**: All functions take data in, return data out — no mutation
- **Error handling**: Validation errors throw (`throw new Error(...)`) — no result types or option monads

---

## Typing Conventions

- **Import type style**: Uses `import type` for type-only imports; `ts` namespace is imported with `import ts from 'typescript'`
- **No classes**: Zero class declarations; all state is plain data (objects, unions)
- **Generics**: Used sparingly — `evaluateValue<T>` is the sole generic function
- **TS node narrowing**: Uses `ts.isXxx` type guards from the TypeScript compiler API extensively
- **Interface duplication**: `ICompilerAPI` is deliberately duplicated from `@purrpose/client-babel` (noted in source comment) to avoid cross-package dependency

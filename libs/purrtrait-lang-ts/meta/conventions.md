# @purrtrait/lang-ts — Conventions

> Generated: 2026-06-25
> By: sub-agent

## Naming Conventions

- **Files:** PascalCase for context/component files (e.g., `CodeLayoutWithGenericParams`), camelCase for utility files (e.g., `appendSemicolon.ts`, `shouldLinkToken.ts`)
- **Exports:** Type exports use PascalCase (e.g., `CodeLayoutWithGenericParamsContextValue`); function exports use camelCase (e.g., `expTypeRef`, `layoutDeclaration`, `layoutCode`)
- **Expression handlers:** Consistent prefix pattern `exp{Kind}` (e.g., `expArray`, `expFunction`, `expIntersection`)
- **Declaration handlers:** Prefix pattern `layout{Kind}Declaration` (e.g., `layoutTypeDeclaration`, `layoutFunctionDeclaration`)
- **Token factories:** Suffix pattern `{Kind}Token` (e.g., `identifierToken`, `keywordToken`, `typeRefToken`)

## File Organization Patterns

- **Module/index.ts:** Barrel files re-export all public symbols from sibling files — generated via `// @index` comments (using the `index` tool)
- **`private/` directories:** Encapsulate implementation details not intended for external consumption; not exported from the main entry point
- **One concept per file:** Each expression/declaration handler lives in its own file (16 expression files in `expressions/`, 4 declaration files in `declarations/`)
- **Grouped by domain:** `expressions/`, `declarations/`, `layout/` (token factories), `generics/`, `utils/`
- **Context pattern:** Contexts encapsulate extra state passed through the layout pipeline instead of threading extra function parameters

## API Design Patterns

- **Plugin architecture:** Package implements `CodeLayoutLanguage` interface from `@purrtrait/code-layout` — each language gets a `{ lang, name, layout }` descriptor
- **Visitor/dispatch pattern:** `layoutCode` → `layoutDeclaration` / `layoutExpression` both use `switch` on `kind` to dispatch to specialized handlers
- **Pipeline:** AST node → expression/declaration handler(s) → token factories → `CodeLayoutNode[]` tree → consumed by `@purrtrait/code-layout`
- **Immutability:** Functions return new arrays; no mutation of context
- **Composition:** Handlers compose by calling other handlers (e.g., `expObject` calls `layoutExpression` for member types; `layoutFunctionDeclaration` calls `layoutGenerics`, `layoutExpression`)
- **Error handling:** Invalid input produces `console.error` + throws `Error` with descriptive message

## Typing Conventions

- **Type imports:** Uses `import type` for all type-only imports
- **Union discrimination:** Each AST node has a `kind` discriminant string for type narrowing via `switch`
- **Generic contexts:** `CodeLayoutWithGenericParamsContextValue` extends `CodeLayoutContextValue` via intersection — compositional type extension
- **Return types:** All handlers explicitly typed as `CodeLayoutNode[]`
- **No `any`:** Codebase avoids `any` — uses `as` casts only where necessary (intersection narrowing for context types, declaration type narrowing)
- **Visibility:** Public API surface typed through `src/index.ts` barrel exports; `private/` directories are internal and not re-exported

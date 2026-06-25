# purrtrait

This document consolidates naming, file organization, API design, and typing conventions across all @purrtrait packages. It serves as a single source of truth for contributors.

## API & Types

### API Design Patterns

- **Pure functions**: All functionality is exposed as standalone functions, not classes or methods. No state.
- **Context pattern**: Configuration is bundled into a context object passed as the first argument (dependency injection). Contexts carry extra state through pipelines instead of threading individual parameters.
- **Plugin / registry pattern**: Languages are registered via `CodeLayoutLanguage[]`, enabling extensibility without modifying core.
- **Visitor / dispatch pattern**: `layoutCode` dispatches to `layoutDeclaration` / `layoutExpression` via `switch` on `kind`.
- **Pipeline**: The transformation pipeline follows: AST node -> expression/declaration handler -> token factories -> `CodeLayoutNode[]` tree.
- **Options object pattern**: Public functions accept `Partial<T>` options and merge with built-in defaults. Examples: `createOptions()`, `SolidCodeLayoutContextOptions`
- **Factory function**: Factory functions build context values with defaults. Example: `createSolidCodeLayoutContext(options?)`
- **Discriminated unions**: Node types use a `kind` or `type` discriminant string for exhaustive type narrowing.
- **Type guards**: Functions use `node is Type` return-type syntax for narrowing. Example: `isExtractableElementNode`
- **Typed wrapper pattern**: Thin tagged types wrap raw `ts.Node` for semantic narrowing without runtime overhead. Example: `TSXNode`
- **Callback-based transformation**: Transformation callbacks keep libraries framework-agnostic. Example: `PropEvaluator`
- **Composition**: Handlers compose by calling other handlers. Example: `expObject` calls `layoutExpression` for member types.
- **Immutability**: Functions return new arrays and objects, never mutating inputs or context.
- **Error handling**: Fatal errors throw `Error` with descriptive messages; non-fatal issues log to `console.error` and skip. Context accessor functions throw when called outside their provider.
- **Convention over configuration**: Sensible defaults are provided. Examples: `columns: 60`, empty `langs`, no-op linker
- **Default implementations**: Fallback implementations are used when no custom component is supplied. Example: `SolidCodeLinkDefault`
- **Configurable names**: Magic strings (attribute names, placeholder names, prop names) are overridable via options.
- **Sync-only API**: No async or promise-based interfaces.
- **Type-driven design**: Types are defined first, then functions consume them. No runtime type checks.

### Typing Conventions

- **`type` over `interface`**: All type definitions use `type` aliases. Zero `interface` declarations.
- **`import type`**: Type-only imports use `import type` (enforced by `verbatimModuleSyntax`).
- **No `any`**: The codebase avoids `any`. Use `object` for generic node parameters; `as` casts are allowed only where necessary.
- **Generic constraints**: Use generic constraints where appropriate. Example: `CodeLayoutToken<T extends CodeLayoutTokenKind>`
- **Return types**: All handler functions have explicit return types. Example: `CodeLayoutNode[]`
- **No enums**: Union string types replace enums. Example: `CodeLayoutTokenKind`
- **No classes**: All state is plain data (objects, unions). Zero class declarations.
- **Generics**: Used sparingly, only when necessary for type safety. Example: `evaluateValue<T>`
- **Upstream extension**: Package-specific types extend upstream types via intersection. Example: `CodeLayoutContextOptions & { link?: CodeLinkComponent }`
- **Component props typed separately**: Prop types are defined as standalone named types. Example: `CodeBlockProps`
- **Visibility via barrel exports**: The public API surface is typed through `src/index.ts` barrel exports. Types in `private/` directories are never re-exported.
- **Domain prefix**: View-model types use a domain prefix. Examples: `TSXView`, `TSXViewTarget`, `TSXNode`
- **Composition over inheritance**: Use flat types with intersection, not inheritance chains.
- **Type reuse**: Reuse types across packages rather than duplicating. Document unavoidable duplication in source comments.

## Modules and Files

### File Organization

- **One export per file**: Each file defines a single primary export. Exceptions are type-grouping files (e.g., `types.ts`).
- **Barrel exports**: `index.ts` files re-export all public symbols using `// @index` auto-generation marker comments.
- **Private directories**: Implementation details live in `private/` subdirectories and are never re-exported from public barrels.
- **Domain-based directories**: Source is split by domain. Examples: `components/`, `contexts/`, `providers/`, `compute/`, `format/`, `expressions/`, `declarations/`, `generics/`, `utils/`
- **Feature subdirectories**: Each feature has its own subdirectory with an `index.ts` barrel and a `types.ts` file. Examples: `CodeBlock/index.ts`, `CodeBlock/types.ts`, `CodeBlock/CodeBlock.tsx`
- **Layer-based organization**: Top-level layers (e.g., `compute/`, `contexts/`, `format/`) use a `helpers/` subdirectory for implementation files.
- **Flat internal structure**: Inside `private/` and `helpers/`, files are flat with no nested subdirectories.
- **Max nesting**: At most two levels deep. Example: `module/private/file.ts`

## Naming

### Naming

- **Components**: PascalCase. Examples: `CodeBlock`, `SolidCodeLayoutProvider`, `CodeLayoutRenderer`
- **Functions and hooks**: camelCase. Examples: `createSolidCodeLayoutContext`, `renderLine`, `computeLayout`, `extractTSXView`
- **Expression handlers**: Prefix `exp{Kind}`. Examples: `expArray`, `expFunction`, `expIntersection`
- **Declaration handlers**: Prefix `layout{Kind}Declaration`. Examples: `layoutTypeDeclaration`, `layoutFunctionDeclaration`
- **Token factories**: Suffix `{Kind}Token`. Examples: `identifierToken`, `keywordToken`, `typeRefToken`
- **Types**: PascalCase. Examples: `CodeLayoutToken`, `TSXView`, `ViewTargetPropsRaw`
- **Prop types**: PascalCase with `Props` suffix. Example: `CodeBlockProps`
- **Constants (public)**: UPPER_SNAKE_CASE. Examples: `TARGET_ATTRIBUTE_NAME`, `PLACEHOLDER_PROPS_VAR`
- **Domain prefix**: Domain-specific types use a domain prefix. Example: `TSX` prefix for TSX view types.
- **Files**: Named after their primary export. Utility files use camelCase; context, component, and type files use PascalCase.
- **Barrel files**: Named `index.ts` with `// @index` comment marker.

## Others

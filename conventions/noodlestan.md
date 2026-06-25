# noodlestan code conventions

## Introduction

This document defines cross-cutting conventions shared by all project types in the noodlestan monorepo. Group-specific conventions live in dedicated files: [no-comply-libs](./no-comply-libs.md), [purrception](./purrception.md), [purrtrait](./purrtrait.md), [purrpose](./purrpose.md), and [no-comply-demo](./no-comply-demo.md). Contributors should refer to this guide alongside the relevant group file.

## General

Conventions shared across all project types.

### API & Types

- **Type over interface**: all type definitions use `type` aliases; no `interface` or `enum` declarations (`CompiledCode`, `CodeLayoutToken`, `TypeExpressionNode`)
- **Union types over enums**: use string literal unions and discriminated unions instead of TypeScript `enum` (`kind: 'function' | 'class'`, `DebugOption = boolean | string | undefined`)
- **Intersection types for composition**: use `&` rather than `extends` for combining types; avoid inheritance chains
- **No classes**: all public APIs are plain functions or factory functions returning object literals; no `class`, `new`, or constructor functions
- **Explicit type imports**: use `import type { X }` or `import { type X }` for all type-only imports, enforced by `verbatimModuleSyntax`
- **Generics with constraints and defaults**: generics constrained with `extends` and defaulted with `=` (`T extends EntityDataBase`, `evaluateValue<T>`)
- **Factory function pattern**: all public APIs are `create*` factory functions returning typed objects (`createProgram`, `createSolidCodeLayoutContext`, `createCompiler`, `createButton`)
- **Options-as-object pattern**: accept configuration via a single options object rather than positional arguments
- **Discriminated unions**: use a `kind` or `type` string discriminator for exhaustive type narrowing
- **Type guards**: use `is` return-type syntax for narrowing (`node is Type`, `dec is ComponentEntityData`)
- **No `any` in public surfaces**: all generics properly constrained; `object` used for generic node parameters; `as` casts allowed only where necessary
- **Explicit return types**: all public functions and handlers have annotated return types (`CodeLayoutNode[]`, `CompilerPreset`, `Accessor<T>`)
- **Immutability**: functions return new objects and arrays via spread; never mutate inputs or context
- **Context object pattern**: bundle related state or configuration into a context object threaded through a pipeline, carrying dependencies and config rather than threading individual parameters
- **Switch dispatch**: dispatch to specialized handlers via a switch on a `kind` discriminator
- **Composition**: handlers compose by calling other handlers; higher-level logic delegates to lower-level helpers
- **Thin wrappers**: extractors and factories are thin compositions of lower-level helpers with no additional logic

### Modules and Files

- **One export per file**: each file exports a single primary function, type, or component; exceptions are type-grouping files and barrel files
- **Barrel re-exports**: every directory has an `index.ts` re-exporting all public symbols using `// @index` auto-generation comment markers
- **`private/` directories**: internal implementation lives in `private/` subdirectories and is never re-exported from public barrels; `parts/` and `functions/` are also treated as internal
- **`helpers/` directories**: shared utilities separated from core implementation, often re-exported via barrel
- **Types in separate files**: type definitions live in `types.ts` files adjacent to implementation, separated from runtime logic
- **Files named after primary export**: source filenames match their primary export name (`createCompiler.ts` → `createCompiler`, `CodeBlock.tsx` → `CodeBlock`)
- **Thin CLI layer**: `bin/` files import, compose, and invoke; no logic lives there

### Naming

- **Types**: PascalCase with descriptive suffixes (`TypeExpressionNode`, `CodeBlockProps`, `SolidCodeLayoutContext`)
- **Functions**: camelCase named after primary action and target (`resolveExpression`, `computeLayout`, `createCompiler`)
- **Constants**: UPPER_SNAKE_CASE for public constants (`BUILTIN_TYPES`, `TARGET_ATTRIBUTE_NAME`, `FORCED_DELAY`)
- **Factory functions**: `create*` prefix (`createDirectoryExtractContext`, `createSolidCodeLayoutContext`, `createCompiler`, `createAriaAlert`)
- **Components**: PascalCase (`CodeBlock`, `Button`, `AppServicesProvider`)
- **Variables**: camelCase
- **Generic type parameters**: single uppercase letters or descriptive names (`T`, `U`, `K`, `P`, `F`, `C`, `L`)
- **Prop types**: PascalCase with `Props` suffix (`CodeBlockProps`, `ButtonProps`)
- **Barrel files**: always `index.ts`
- **All named exports**: no default exports

### Others

- **Tabs**: for indentation (inherited from monorepo Prettier config)
- **Semicolons**: none
- **Quotes**: single quotes

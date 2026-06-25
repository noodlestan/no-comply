# @purrtrait/lang-ts — API

> Generated: 2026-06-25
> By: sub-agent

## Entry Point

```
import { tsCodeLayout, createCodeLayoutWithGenericParamsContext } from '@purrtrait/lang-ts';
```

## Exports

| Export                                     | Kind                                | Source                                                                                 |
| ------------------------------------------ | ----------------------------------- | -------------------------------------------------------------------------------------- |
| `tsCodeLayout`                             | `CodeLayoutLanguage` object         | `src/layout/tsCodeLayout.ts`                                                           |
| `createCodeLayoutWithGenericParamsContext` | Factory function                    | `src/contexts/CodeLayoutWithGenericParams/createCodeLayoutWithGenericParamsContext.ts` |
| `CodeLayoutWithGenericParamsContextValue`  | Type                                | `src/contexts/CodeLayoutWithGenericParams/types.ts`                                    |
| `PurrceptionLanguageId`                    | Constant (`'@purrception/lang-ts'`) | `src/constants.ts`                                                                     |
| `LanguageName`                             | Constant (`'Typescript'`)           | `src/constants.ts`                                                                     |

## Main API

### `tsCodeLayout`

```ts
const tsCodeLayout: CodeLayoutLanguage;
```

A `CodeLayoutLanguage` plugin object that registers this package with `@purrtrait/code-layout`. Contains:

- `lang: '@purrception/lang-ts'` — language identifier
- `name: 'Typescript'` — display name
- `layout: layoutCode` — the layout function: `(ctx, code) => CodeLayoutNode[]`

Dispatches to `layoutDeclaration` for declarations, `layoutExpression` for type expressions, and `typeRefToken` for plain strings.

### `createCodeLayoutWithGenericParamsContext`

```ts
createCodeLayoutWithGenericParamsContext(
  ctx: CodeLayoutContextValue,
  genericParams: string[],
): CodeLayoutWithGenericParamsContextValue
```

Creates a derived context that extends `CodeLayoutContextValue` with a `genericParams: Set<string>` field. Used to pass tracked generic parameter names through the layout pipeline for context-aware linking (e.g., preventing generic param names from receiving external links).

## Helpers

### Constants

```ts
PurrceptionLanguageId; // '@purrception/lang-ts'
LanguageName; // 'Typescript'
```

Simple string constants used to identify the TypeScript language in the code layout system.

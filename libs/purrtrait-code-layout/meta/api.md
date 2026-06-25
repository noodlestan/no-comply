# @purrtrait/code-layout — API Reference

Generated: 2026-06-25
By: sub-agent

## Entry Point

`@purrtrait/code-layout` — re-exports from `src/index.ts`

## Exports Summary

### Types (`src/types.ts`)

| Export                | Kind           | Description                                                                               |
| --------------------- | -------------- | ----------------------------------------------------------------------------------------- |
| `CodeLayoutTokenKind` | Union          | `'space' \| 'keyword' \| 'identifier' \| 'symbol' \| 'type-ref' \| 'string' \| 'literal'` |
| `CodeLayoutToken<T>`  | Generic object | Leaf node: `type: 'token'`, `kind`, `value`, optional `link`                              |
| `CodeLayoutGroup`     | Object         | Composite node: `type: 'group'`, `content: CodeLayoutNode[]`                              |
| `CodeLayoutBlock`     | Object         | Composite node: `type: 'block'`, `content: CodeLayoutGroup[]`                             |
| `CodeLayoutNode`      | Union          | `CodeLayoutToken \| CodeLayoutGroup \| CodeLayoutBlock`                                   |
| `CodeLayoutLanguage`  | Object         | Language plugin: `lang`, `name`, `layout(ctx, node) => CodeLayoutNode[]`                  |
| `CodeLayoutLine`      | Object         | Output line: `indent: number`, `content: CodeLayoutToken[]`                               |

### Context (`src/contexts/`)

| Export                     | Kind     | Description                                     |
| -------------------------- | -------- | ----------------------------------------------- |
| `CodeLayoutContextOptions` | Type     | `{ langs?, linker?, columns? }`                 |
| `CodeLayoutContextValue`   | Type     | Resolved context with defaults applied          |
| `CodeNodeLinker`           | Type     | `(ctx, value) => string \| undefined`           |
| `createCodeLayoutContext`  | Function | Factory: `(options?) => CodeLayoutContextValue` |

### Compute (`src/compute/`)

| Export          | Kind     | Signature                               |
| --------------- | -------- | --------------------------------------- |
| `computeLayout` | Function | `(ctx, lang, node) => CodeLayoutNode[]` |

### Format (`src/format/`)

| Export         | Kind     | Signature                                     |
| -------------- | -------- | --------------------------------------------- |
| `formatLayout` | Function | `(nodes, cols?, indent?) => CodeLayoutLine[]` |

## Main API

### `createCodeLayoutContext(options?)`

Factory that creates a `CodeLayoutContextValue` with defaults for language plugins, linker, and column width.

### `computeLayout(ctx, lang, node)`

Dispatches an AST node to the registered language plugin matching `lang`. Throws if no plugin is found.

### `formatLayout(nodes, cols?, indent?)`

Recursively walks a `CodeLayoutNode[]` tree and produces column-wrapped `CodeLayoutLine[]`. Uses try-inline → flush → recurse algorithm.

## Helpers (internal, not publicly exported)

| Helper                             | Location          | Purpose                                                                           |
| ---------------------------------- | ----------------- | --------------------------------------------------------------------------------- |
| `tryInline(nodes, cols)`           | `formatLayout.ts` | Attempts to inline all tokens from a node list; returns `null` if exceeds columns |
| `formatNodes(nodes, cols, indent)` | `formatLayout.ts` | Recursive formatting core                                                         |
| `finalizeLine(indent, tokens)`     | `formatLayout.ts` | Trims spaces and produces a `CodeLayoutLine`                                      |
| `getLength(tokens)`                | `formatLayout.ts` | Sums character lengths of tokens                                                  |
| `trimSpaces(tokens)`               | `formatLayout.ts` | Strips leading/trailing space tokens                                              |

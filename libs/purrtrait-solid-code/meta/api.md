# API — @purrtrait/solid-code

- **Entry point**: `src/index.ts`
- **Last updated**: 2026-06-25
- **Author**: sub-agent

## Exports summary

| Module            | Exports                                                                                                             |
| ----------------- | ------------------------------------------------------------------------------------------------------------------- |
| `src/components/` | `CodeBlock`, `CodeLayoutRenderer`                                                                                   |
| `src/contexts/`   | `createSolidCodeLayoutContext`, `SolidCodeLayoutContextOptions`, `SolidCodeLayoutContextValue`, `CodeLinkComponent` |
| `src/providers/`  | `SolidCodeLayoutProvider`, `useSolidCodeLayoutContext`                                                              |

## Main APIs

### `CodeBlock`

```ts
Component<CodeBlockProps>;
```

Top-level code block renderer. Accepts a language identifier and AST nodes, computes layout via `@purrtrait/code-layout`, and renders the result.

Props:

- `lang: string` — language identifier
- `nodes: object[]` — AST nodes to render
- `columns?: number` — optional column width override
- `context?: object` — optional context passed to language layout functions

### `CodeLayoutRenderer`

```ts
Component<CodeLayoutRendererProps>;
```

Iterates over `CodeLayoutLine[]` and renders each via `renderLine`. Consumes `SolidCodeLayoutContext` from nearest provider.

Props:

- `lines: CodeLayoutLine[]` — pre-computed layout lines

### `SolidCodeLayoutProvider`

```ts
ParentComponent<{ context: SolidCodeLayoutContextValue }>;
```

Provides a `SolidCodeLayoutContextValue` to descendant components via SolidJS context.

### `createSolidCodeLayoutContext`

```ts
(options?: SolidCodeLayoutContextOptions) => SolidCodeLayoutContextValue;
```

Factory that builds a context value with defaults:

- `langs` — language plugins (default `[]`)
- `columns` — column width (default `60`)
- `linker` — URL resolver function (default no-op)
- `link` — link component override (default `SolidCodeLinkDefault`)

### `useSolidCodeLayoutContext`

```ts
() => SolidCodeLayoutContextValue;
```

Hook to consume `SolidCodeLayoutContext`. Throws if called outside a `SolidCodeLayoutProvider`.

## Types

| Type                            | Description                                                             |
| ------------------------------- | ----------------------------------------------------------------------- |
| `CodeBlockProps`                | `{ lang: string; nodes: object[]; columns?: number; context?: object }` |
| `CodeLayoutRendererProps`       | `{ lines: CodeLayoutLine[] }`                                           |
| `SolidCodeLayoutContextOptions` | `CodeLayoutContextOptions & { link?: CodeLinkComponent }`               |
| `SolidCodeLayoutContextValue`   | `CodeLayoutContextValue & { link: CodeLinkComponent }`                  |
| `CodeLinkComponent`             | `Component<{ token: CodeLayoutToken }>`                                 |

## Upstream types (from `@purrtrait/code-layout`)

| Type                       | Description                                                                               |
| -------------------------- | ----------------------------------------------------------------------------------------- |
| `CodeLayoutLine`           | `{ indent: number; content: CodeLayoutToken[] }`                                          |
| `CodeLayoutToken`          | `{ type: 'token'; kind: TokenKind; value: string; link?: string }`                        |
| `CodeLayoutTokenKind`      | `'space' \| 'keyword' \| 'identifier' \| 'symbol' \| 'type-ref' \| 'string' \| 'literal'` |
| `CodeLayoutContextValue`   | layout context (langs, linker, columns)                                                   |
| `CodeLayoutContextOptions` | optional creation args for context                                                        |

## Data flow

```
CodeBlock
  → computeLayout(ctx, lang, node)    [@purrtrait/code-layout]
  → formatLayout(nodes, columns)      [@purrtrait/code-layout]
  → CodeLayoutRenderer (lines)
    → renderLine(ctx, line)
      → renderToken(ctx, token)
        → ctx.link({ token })  or <span>{token.value}</span>
```

## Private (internal, not exported)

- `renderLine` / `renderToken` — low-level JSX rendering functions
- `SolidCodeLinkDefault` — default `<a>`-based link component
- `SolidCodeLayoutCTX` — raw `createContext` object

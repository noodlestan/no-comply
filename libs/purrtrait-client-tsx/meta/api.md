# @purrtrait/client-tsx — API

**Generated:** 2026-06-25  
**By:** sub-agent

## Entry Point

```
import { ... } from '@purrtrait/client-tsx';
// → src/index.ts
```

The barrel re-exports four modules: `parse`, `extract`, `nodes`, `evaluate`.

---

## Exports Summary

### `parse` — `src/parse/index.ts`

Single-function module wrapping the TypeScript compiler API.

| Export        | Signature                           | Description                                                                                              |
| ------------- | ----------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `parseSource` | `(source: string) => ts.SourceFile` | Parse TS/TSX source into a TypeScript AST. Uses `ScriptKind.TSX` so both TS and TSX files are supported. |

### `extract` — `src/extract/index.ts`

JSX prop extraction, node classification, and AST serialisation.

| Export                     | Signature                                                                                                                            | Description                                                                                                 |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------- |
| `extractProps`             | `(node: TypescriptComponentNode, sourceFile: ts.SourceFile, ignore?: (attr: ts.JsxAttribute) => boolean) => Record<string, TSXNode>` | Extract JSX attributes (including `children`) into a map of typed `TSXNode` values.                         |
| `isExtractableElementNode` | `(node: ts.Node) => node is TypescriptNode`                                                                                          | Type guard — checks if a node is a JSX element, self-closing element, or fragment.                          |
| `printNode`                | `(sourceFile: ts.SourceFile, node: ts.Node) => string`                                                                               | Serialise a TS AST node back to its source-code string.                                                     |
| `unwrapExtractableNode`    | `(node: ts.Node) => TypescriptNode`                                                                                                  | Unwrap a `SourceFile` (or pass-through a node) to its first extractable JSX child. Throws on invalid input. |

**Types** (from `src/extract/types.ts`):

```typescript
type TypescriptComponentNode = ts.JsxElement | ts.JsxSelfClosingElement;
type TypescriptElementNode = TypescriptComponentNode | ts.JsxFragment;
type TypescriptFunctionNode = ts.FunctionExpression | ts.ArrowFunction;
type TypescriptExpressionNode = ts.Expression;
type TypescriptNode = TypescriptElementNode | TypescriptFunctionNode | TypescriptExpressionNode;
```

### `nodes` — `src/nodes/index.ts`

Typed value-node factories that wrap raw TS nodes with semantic discriminators.

| Export                    | Signature                                                                                 | Description                                       |
| ------------------------- | ----------------------------------------------------------------------------------------- | ------------------------------------------------- |
| `createTSXElementNode`    | `(node: TypescriptElementNode, serialized: string) => TSXElementNode`                     | Create a JSX-element node (`type: 'jsx'`).        |
| `createTSXExpressionNode` | `(node: TypescriptExpressionNode, serialized: string) => TSXExpressionNode`               | Create an expression node (`type: 'expression'`). |
| `createTSXHandlerNode`    | `(node: ts.ArrowFunction \| ts.FunctionExpression, serialized: string) => TSXHandlerNode` | Create a handler node (`type: 'handler'`).        |

**Types** (from `src/nodes/types.ts`):

```typescript
type TSXNodeType = 'jsx' | 'handler' | 'expression';

type TSXBaseNode<T extends TSXNodeType, N extends TypescriptNode> = {
  type: T;
  tsNode: N;
  serialized: string;
};

type TSXElementNode = TSXBaseNode<'jsx', TypescriptElementNode>;
type TSXHandlerNode = TSXBaseNode<'handler', TypescriptFunctionNode>;
type TSXExpressionNode = TSXBaseNode<'expression', ts.Expression>;
type TSXNode = TSXElementNode | TSXHandlerNode | TSXExpressionNode;
```

### `evaluate` — `src/evaluate/index.ts`

Bridge to an in-browser compiler for runtime evaluation of TSX nodes.

| Export          | Signature                                                                                                                  | Description                                                                                                          |
| --------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `evaluateValue` | `<T>(compiler: ICompilerAPI, value: TSXNode, scope: ICompilerScope, debug?: IDebugOption) => T \| (() => void) \| unknown` | Dispatch evaluator — delegates to `compiler.evaluateHandler` or `compiler.evaluateExpression` based on `value.type`. |

**Types** (from `src/evaluate/types.ts`):

```typescript
type IDebugOption = boolean | string | undefined;
type ICompilerScope = Record<string, unknown>;
type ICompiler = {
  compile: (code: string) => string;
  execute: (code: string, scope: ICompilerScope) => unknown;
};
type ICompilerHelpers = {
  evaluateComponent: <T>(body: string | undefined, jsx: string, scope: ICompilerScope) => T;
  evaluateExpression: <T>(expression: string, scope: ICompilerScope) => T;
  evaluateHandler: <T>(handler: string, debug: IDebugOption, scope: ICompilerScope) => T;
};
type ICompilerAPI = ICompiler & ICompilerHelpers;
```

---

## Internal Helpers (Not Public)

Located in `src/extract/helpers/private/` — not re-exported from any public barrel:

- `extractAttributeName` — extract the name of a JSX attribute
- `extractBooleanAttribute` — create a `TSXExpressionNode` for a boolean attribute
- `extractChildren` — extract JSX children into a `TSXNode`
- `extractExpressionAttribute` — create a `TSXExpressionNode` from a JSX expression attribute
- `extractStringAttribute` — create a `TSXExpressionNode` from a string literal attribute

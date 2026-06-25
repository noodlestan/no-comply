# @purrtrait/client-tsx — Module Map

**Generated:** 2026-06-25
**By:** sub-agent

```
src/
├── parse/
│   └── parseSource.ts              Wraps ts.createSourceFile() for TS/TSX parsing
│
├── extract/
│   ├── types.ts                    JSX node type aliases (TypescriptComponentNode, TypescriptElementNode, etc.)
│   └── helpers/
│       ├── extractProps.ts         Extracts JSX attributes + children into Record<string, TSXNode>
│       ├── isExtractableElementNode.ts  Type guard: ts.Node → TypescriptNode
│       ├── printNode.ts            Serialises a TS AST node back to source string
│       └── unwrapExtractableNode.ts    Unwraps SourceFile to first extractable JSX child
│
├── nodes/
│   ├── types.ts                    TSXNode discriminated union type definitions
│   ├── createTSXElementNode.ts     Factory for TSXElementNode (type: 'jsx')
│   ├── createTSXExpressionNode.ts  Factory for TSXExpressionNode (type: 'expression')
│   └── createTSXHandlerNode.ts     Factory for TSXHandlerNode (type: 'handler')
│
├── evaluate/
│   ├── types.ts                    ICompilerAPI, ICompilerScope, IDebugOption type contracts
│   └── evaluateValue.ts            Dispatches TSXNode evaluation to injected compiler
│
└── ast/
    └── parseSource.ts              Dead code — duplicate of src/parse/parseSource.ts, not exported
```

**Private (not public API):** `src/extract/helpers/private/` — internal attribute extraction helpers (`extractAttributeName`, `extractBooleanAttribute`, `extractChildren`, `extractExpressionAttribute`, `extractStringAttribute`)

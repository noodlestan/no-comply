# Module Map — @purrtrait/solid-code

- **Last updated**: 2026-06-25
- **By**: sub-agent

> Index files (`index.ts` barrel re-exports) and `private/` subdirectories are excluded.

```
src/
├── components/
│   ├── CodeBlock/
│   │   ├── CodeBlock.tsx         — Top-level code block renderer; computes layout, formats lines, delegates to CodeLayoutRenderer
│   │   └── types.ts              — CodeBlockProps type definition
│   └── CodeLayoutRenderer/
│       ├── CodeLayoutRenderer.tsx — Iterates CodeLayoutLine[] and renders each via renderLine
│       └── types.ts              — CodeLayoutRendererProps type definition
├── contexts/
│   └── SolidCodeLayout/
│       ├── createSolidCodeLayoutContext.ts — Factory: builds SolidCodeLayoutContextValue with sensible defaults
│       └── types.ts              — SolidCodeLayoutContextOptions, SolidCodeLayoutContextValue, CodeLinkComponent types
└── providers/
    └── SolidCodeLayout/
        ├── SolidCodeLayoutProvider.tsx     — ParentComponent that provides context value to subtree
        └── useSolidCodeLayoutContext.ts    — Hook to consume context; throws if used outside provider
```

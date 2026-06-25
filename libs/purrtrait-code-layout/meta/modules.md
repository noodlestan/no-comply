# @purrtrait/code-layout — Module Map

Generated: 2026-06-25
By: sub-agent

```
src/
├── types.ts                                  # Core domain types: tokens, groups, blocks, language, lines
├── contexts/
│   └── CodeLayout/
│       ├── types.ts                          # Context options, value, and linker type definitions
│       └── createCodeLayoutContext.ts         # Context factory with default values
├── compute/
│   └── helpers/
│       └── computeLayout.ts                  # Dispatches AST nodes to registered language plugins
└── format/
    └── helpers/
        └── formatLayout.ts                   # Recursive try-inline formatter producing CodeLayoutLine[]
```

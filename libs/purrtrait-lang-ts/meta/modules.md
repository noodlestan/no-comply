# @purrtrait/lang-ts — Modules

> Generated: 2026-06-25
> By: sub-agent

```
src/
├── constants.ts
│   — Exports PurrceptionLanguageId and LanguageName string constants
│
├── contexts/
│   └── CodeLayoutWithGenericParams/
│       ├── createCodeLayoutWithGenericParamsContext.ts
│       │   — Factory: creates a derived context with genericParams Set
│       └── types.ts
│           — Type: CodeLayoutWithGenericParamsContextValue
│
└── layout/
    └── tsCodeLayout.ts
        — Plugin entry: CodeLayoutLanguage object registering this package
```

_Note: All files under `src/layout/private/` (declarations, expressions, generics, token factories, utils) are internal implementation details and not exported in the public API._

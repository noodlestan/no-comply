# @no-comply/solid-primitives Modules

> Generated: 2026-06-25
> By: sub-agent

```
src/
├── classes/
│   ├── types.ts                    — ClassList, ClassListInput type definitions
│   └── helpers/
│       ├── createClassList.ts      — Reactive class list with CSS modules mapping
│       ├── mapClassName.ts         — Single CSS module class name mapping with error logging
│       └── staticClassList.ts      — Non-reactive variant of createClassList
├── data/
│   ├── types.ts                    — RawDataAttributes, DataAttributes, DataAttributeName types
│   └── helpers/
│       ├── createDataAttributes.ts — Converts RawDataAttributes → DataAttributes with data- prefix
│       └── dataAttributeName.ts    — Template literal type helper for data-* attribute names
├── events/
│   ├── constants.ts                — OWN_FOCUS_EVENT_HANDLERS constant
│   └── types.ts                    — Standard DOM event handler type definitions (14 types)
├── events-ext/
│   ├── constants.ts                — PRESS_EVENT_HANDLERS, EXTENDED_PRESS_EVENT_HANDLERS
│   └── types.ts                    — Press event, extended press, and context menu handler types
├── id/
│   ├── types.ts                    — ObjectWithId<T> type
│   └── helpers/
│       ├── shortId.ts              — 5-char prefixed UUID fragment generator
│       └── uuid.ts                 — Full UUID via crypto.randomUUID()
├── props/
│   ├── types.ts                    — AccessorOrValue, RenderProp, ResponsiveValue, shorthand types
│   └── helpers/
│       ├── combineProps.ts         — Proxy-based deep-merge for classList, style, ref, events
│       ├── computedProps.ts        — Attaches getter-based computed properties to a props object
│       ├── definePropKeys.ts       — Type-safe key array factory with duplicate detection
│       ├── omitPropKeys.ts         — Filters key arrays by omitted keys
│       ├── pickProps.ts            — Extracts subset of props via splitProps
│       ├── resolveRenderProp.ts    — Resolves render prop pattern (function or element)
│       ├── resolveValue.ts         — Unwraps AccessorOrValue<T> to T
│       ├── splitAxisShorthand.ts   — Splits resolved axis tuple into individual accessors
│       ├── splitSideShorthand.ts   — Splits resolved side tuple into individual accessors
│       └── withDefault.ts          — Memoized createMemo with default fallback
├── resources/
│   └── helpers/
│       ├── createChainedResource.ts   — Chains a resource off another resource's resolution
│       └── createCombinedResource.ts  — Combines multiple resources into one tuple resource
├── styles/
│   └── types.ts                    — Styles type definition (string | record of string/number/undefined)
├── tag/
│   ├── constants.ts                — POPVER_TRIGGER_TAG_PROPS constant
│   └── types.ts                    — TagOwnProps, ClosedTagProps, OpenTagProps, PopoverTriggerTagProps
└── ts/
    └── types.ts                    — PickRequired<T, K> utility type
```

## Key

- Non-index, non-private source files only
- Barrels (`index.ts`) and `private/` internals omitted

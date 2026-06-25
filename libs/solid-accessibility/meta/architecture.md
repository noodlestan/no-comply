# @no-comply/solid-accessibility — Architecture

> This file extends [no-comply-libs architecture](../../../architecture/no-comply-libs.md).

_Generated: 2026-06-25 | by: sub-agent_

## Layering

```
┌──────────────────────────────────────────────────────────┐
│                    Controller Layer                        │
│  ┌──────────────────────────────────────────────────────┐ │
│  │  Specialized Controllers                              │ │
│  │  alert, status, dialog, log, tree, treeitem, switch, │ │
│  │  group, form, feedback                                │ │
│  │  (compose region ± label ± live)                      │ │
│  └──────────────────────────┬───────────────────────────┘ │
│                             │                              │
│  ┌──────────────────────────▼───────────────────────────┐ │
│  │  Meta Controller                                      │ │
│  │  region (composes label, adds role semantics)         │ │
│  └──────────────────────────┬───────────────────────────┘ │
│                             │                              │
│  ┌──────────────────────────▼───────────────────────────┐ │
│  │  Base Controllers                                     │ │
│  │  label, live, busy                                    │ │
│  │  (independent, no controller deps)                    │ │
│  └──────────────────────────────────────────────────────┘ │
│                                                           │
│  ┌──────────────────────────────────────────────────────┐ │
│  │  Standalone Controllers                               │ │
│  │  pressable, separator, menu, menuitem, list,          │ │
│  │  listitem, radiogroup                                 │ │
│  │  (may compose label, but not region)                  │ │
│  └──────────────────────────────────────────────────────┘ │
└──────────────────────────────────────────────────────────┘
                           │
┌──────────────────────────▼────────────────────────────────┐
│                    Type Layer                               │
│  attributes/  role/  tag/                                  │
│  (pure type definitions, zero runtime value)               │
└───────────────────────────────────────────────────────────┘
                           │
┌──────────────────────────▼────────────────────────────────┐
│                    Shared Utilities                         │
│  @no-comply/solid-primitives                                │
│  (computedProps, combineProps, definePropKeys, shortId)    │
└───────────────────────────────────────────────────────────┘
                           │
┌──────────────────────────▼────────────────────────────────┐
│                    Runtime                                  │
│  solid-js (peer dependency)                                │
└───────────────────────────────────────────────────────────┘
```

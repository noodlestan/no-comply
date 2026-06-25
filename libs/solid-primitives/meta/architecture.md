# @no-comply/solid-primitives Architecture

> This file extends [no-comply-libs architecture](../../../architecture/no-comply-libs.md).

> Generated: 2026-06-25
> By: sub-agent

## Layering

```
Tag / Styles              ← composite types built on lower modules
    ↑
Events / Events-Ext       ← standalone type definitions (no internal deps beyond definePropKeys)
    ↑
Classes / Data / Id / Resources  ← domain-specific utilities
    ↑
Props / Ts                ← foundational utilities
    ↑
solid-js (peer dep)       ← only external dependency
```

### Detailed module layers

| Layer          | Modules                              | Role                                                   |
| -------------- | ------------------------------------ | ------------------------------------------------------ |
| **Foundation** | `props`, `ts`                        | Reactive prop composition, type utilities              |
| **Domain**     | `classes`, `data`, `id`, `resources` | CSS, data-attributes, ID generation, resource chaining |
| **Types**      | `events`, `events-ext`               | DOM event handler type definitions                     |
| **Composite**  | `tag`, `styles`                      | Higher-level component prop types                      |

# solid-dev-tools — API

> Generated: 2026-06-25
> By: sub-agent

## Entry Point

```
@no-comply/solid-dev-tools
```

`main` → `./src/index.ts` (source entry, ESM only)

Re-exports from three barrel indices: `components`, `panels`, `providers`.

## Public Exports

| Export                  | Kind      | Signature           | Description                                                                                                       |
| ----------------------- | --------- | ------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `DebugDrawer`           | Component | `() => JSX.Element` | Overlay drawer pinned to viewport bottom containing debug UI. Uses `createAriaRegion` for a11y.                   |
| `DebugContextTreePanel` | Component | `() => JSX.Element` | Renders the SolidJS context hierarchy as an interactive tree via `TreeListBase`. Consumes `useContextTreeRoot()`. |
| `DebugStyles`           | Component | `() => JSX.Element` | Side-effect-only component. Imports `global.scss` to inject debug overlay styles. Returns empty fragment.         |

All three components accept **no props** — they are zero-config, wiring state from `@no-comply/solid-contexts` automatically.

## Internal Helpers (not publicly exported)

| Name                     | Signature                                   | Description                                                                                                                        |
| ------------------------ | ------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `createDebugContextTree` | `(root: ContextNode) => Accessor<TreeNode>` | Pure function wrapping `createMemo`. Transforms a `ContextNode` tree into a reactive `TreeNode` tree consumable by `TreeListBase`. |
| `DebugContextTreeItem`   | `Component<TreeListItemContentsProps>`      | Renders an individual tree item showing the context `id` and `value.type`. Used as a slot component by `TreeListBase`.             |

## Dependencies

- **@no-comply**: `solid-contexts`, `solid-accessibility`, `solid-primitives`, `solid-composables`, `standard-ui`
- **Peer**: `solid-js` ^1.9.5, `lucide-solid` ^0.453.0

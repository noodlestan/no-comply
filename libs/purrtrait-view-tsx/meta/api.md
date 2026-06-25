# @purrtrait/view-tsx — API

> Generated: 2026-06-25 | by: sub-agent

## Entry Point

```ts
import { ... } from '@purrtrait/view-tsx';
// resolves to ./src/index.ts
```

## Exports

### Main function

| Export           | Signature                                                     | Description                                                                                                                                       |
| ---------------- | ------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| `extractTSXView` | `(source: string, opts?: Partial<TSXViewOptions>) => TSXView` | Parses TSX source, finds elements marked with a target attribute, replaces them with placeholder components, and returns a structured view model. |

### Helpers

| Export              | Signature                                                                                | Description                                        |
| ------------------- | ---------------------------------------------------------------------------------------- | -------------------------------------------------- |
| `viewTargetProps`   | `(view: TSXView, target: string, evaluate: PropEvaluator) => ViewTargetPropsTransformed` | Evaluate props for a single target via a callback. |
| `viewPropsByTarget` | `(view: TSXView, evaluate: PropEvaluator) => Record<string, ViewTargetPropsTransformed>` | Evaluate props for every target at once.           |

### Constants

| Export                       | Value                        |
| ---------------------------- | ---------------------------- |
| `TARGET_ATTRIBUTE_NAME`      | `'tsx-view-target'`          |
| `PLACEHOLDER_NAME`           | `'TSXViewTargetPlaceholder'` |
| `PLACEHOLDER_COMPONENT_PROP` | `'component'`                |
| `PLACEHOLDER_KEY_PROP`       | `'key'`                      |
| `PLACEHOLDER_PROPS_PROP`     | `'props'`                    |
| `PLACEHOLDER_PROPS_VAR`      | `'props'`                    |

### Types

| Export                       | Shape                                                                                                                               |
| ---------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `TSXViewOptions`             | `{ placeholderName, targetAttributeName, placeholderKeyProp, placeholderComponentProp, placeholderPropsProp, placeholderPropsVar }` |
| `TSXView`                    | `{ source: string; wrapper: TSXElementNode; targets: Record<string, TSXViewTarget> }`                                               |
| `TSXViewTarget`              | `{ component: { name: string }; raw: TSXElementNode; props: Record<string, TSXNode> }`                                              |
| `ViewTargetPropsRaw`         | `Record<string, TSXNode>`                                                                                                           |
| `ViewTargetPropsTransformed` | `Record<string, unknown>`                                                                                                           |
| `PropEvaluator`              | `(entry: [name: string, node: TSXNode, targetKey: string]) => unknown`                                                              |

### Private (not exported)

Modules in `src/private/` — `createOptions`, `createTSXViewTargetPlaceholder`, `extractComponentName`, `findTargetNode`, `findTargetNodes`, `getTargetAttrValue`, `isTargetAttr`, `replaceTarget`, `replaceTargets`, `wrapFragment` — are internal implementation details and subject to change.

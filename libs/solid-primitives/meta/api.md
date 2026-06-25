# @no-comply/solid-primitives API

> Generated: 2026-06-25
> By: sub-agent

## Entry Point

```
import { ... } from "@no-comply/solid-primitives";
```

Source entry: `./src/index.ts` — re-exports all public modules via barrel file.

## Modules

### props — Reactive prop composition and transformation

| Export                               | Signature                                                                    |
| ------------------------------------ | ---------------------------------------------------------------------------- |
| `combineProps(...sources)`           | `(...sources: AccessorOrValue<AnyProps>[]) => AnyProps`                      |
| `computedProps(baseProps?, getters)` | `(base?: AnyProps, getters?: Record<string, Getter>) => AnyProps`            |
| `definePropKeys<T>()`                | `<T>() => readonly (keyof T)[]`                                              |
| `splitAxisShorthand(input)`          | `<T>(input: AccessorOrValue<AxisShorthandProp<T>>) => AxisShorthandSplit<T>` |
| `splitSideShorthand(input)`          | `<T>(input: AccessorOrValue<SideShorthandProp<T>>) => SideShorthandSplit<T>` |
| `omitPropKeys(allKeys, omitted)`     | `<T, K>(allKeys: (keyof T)[], omitted: K[]) => Exclude<keyof T, K>[]`        |
| `pickProps(props, keys)`             | `<T, K>(props: T, keys: K[]) => Pick<T, K>`                                  |
| `resolveRenderProp(child, props)`    | `<T>(child: RenderProp<T> \| JSX.Element, props: T) => JSX.Element`          |
| `resolveValue(value)`                | `<T>(value: AccessorOrValue<T>) => T`                                        |
| `withDefault(value, fallback)`       | `<T>(value: AccessorOrValue<T>, fallback: T) => Accessor<T>`                 |

### classes — CSS class utilities with CSS modules support

| Export                                             | Signature                                                                                                                                       |
| -------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `createClassList(styles, input, mappedClassList?)` | `(styles: Record<string, string>, input: AccessorOrValue<ClassListInput>, mappedClassList?: AccessorOrValue<ClassList>) => Accessor<ClassList>` |
| `staticClassList(styles, input)`                   | `(styles: Record<string, string>, input: ClassListInput) => string`                                                                             |
| `mapClassName(styles, className)`                  | `(styles: Record<string, string>, className: string) => string`                                                                                 |

### data — HTML data-\* attribute management

| Export                                 | Signature                                                                                |
| -------------------------------------- | ---------------------------------------------------------------------------------------- |
| `createDataAttributes(dataAttributes)` | `<T extends RawDataAttributes>(dataAttributes: AccessorOrValue<T>) => DataAttributes<T>` |
| `dataAttributeName(key)`               | `<T extends string>(key: T) => \`data-${T}\``                                            |

### events — Standard DOM event handler types

Types: `PointerEventHandlers`, `PointerCaptureEventHandlers`, `KeyboardEventHandlers`, `OwnFocusEventHandlers`, `FocusEventHandlers`, `InputEventHandlers`, `InputCompositionEventHandlers`, `ClipboardEventHandlers`, `ScrollEventHandlers`, `DragEventHandlers`, `FormEventHandlers`, `AnimationEventHandlers`, `TransitionEventHandlers`, `PageEventHandlers`

Constant: `OWN_FOCUS_EVENT_HANDLERS`

### events-ext — Extended event handler types

Types: `PressEvent`, `PressEventHandlers`, `ExtendedPressEventHandlers`, `ContextMenuEventHandlers`

Constants: `PRESS_EVENT_HANDLERS`, `EXTENDED_PRESS_EVENT_HANDLERS`

### id — ID generation

| Export      | Signature      |
| ----------- | -------------- |
| `shortId()` | `() => string` |
| `uuid()`    | `() => string` |

Type: `ObjectWithId<T>`

### resources — Resource composition

| Export                                             | Signature                                                                                                            |
| -------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `createChainedResource(parent, fetcher, options?)` | `<T, U>(parent: Resource<T>, fetcher: (data: T) => Promise<U>, options?: CombinedResourceOptions<U>) => Resource<U>` |
| `createCombinedResource(sources)`                  | `<TSources extends [...any[]]>(sources: CombinedResourceValue<TSources>) => Resource<TSources>`                      |
| `isResource(value)`                                | `(value: unknown) => value is Resource<unknown>`                                                                     |

### styles — Style object type

| Export   | Signature                                                               |
| -------- | ----------------------------------------------------------------------- |
| `Styles` | `type Styles = string \| Record<string, string \| number \| undefined>` |

### tag — Tag/element prop types

Types: `TagOwnProps`, `ClosedTagProps`, `OpenTagProps<T>`, `PopoverTriggerTagProps`, `TagComponentName`

Constant: `POPVER_TRIGGER_TAG_PROPS`

### ts — TypeScript utility types

| Export               | Description                                        |
| -------------------- | -------------------------------------------------- |
| `PickRequired<T, K>` | Picks keys `K` from `T` and marks them as required |

## Shared Utility Types

Used across multiple modules:

- `AccessorOrValue<T>` — `T \| Accessor<T>`
- `MaybeAccessorOrValue<T>` — `T \| Accessor<T> \| undefined`
- `MaybeRenderProp<T>` — `RenderProp<T> \| JSX.Element \| undefined`
- `RenderProp<T>` — `(props: T) => JSX.Element`
- `ResponsiveValue<T, B>` — `T \| Partial<Record<B, T>>`
- `ResponsiveProp<T, B>` — `AccessorOrValue<ResponsiveValue<T, B>>`
- `AnyProps` — `Record<string, unknown>`
- `ClassList`, `ClassListInput`
- `PickProps<T, K>`, `PropsWithComponent<P, Q>`

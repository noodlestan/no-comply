# API

## Entry Point

`src/index.ts`

## Exports

| Kind    | Name          | Source     |
| ------- | ------------- | ---------- |
| Named   | `solidPreset` | `./preset` |
| Default | `solidPreset` | `./preset` |

## Main API

### `solidPreset()`

Returns a `CompilerPreset` that configures Babel with `babel-plugin-jsx-dom-expressions` for SolidJS JSX/TSX compilation in the browser.

**Signature:**

```ts
function solidPreset(): CompilerPreset;
```

**Returns:** `CompilerPreset` with:

- `babelPresets` — wraps the `babel-plugin-jsx-dom-expressions` plugin with SolidJS-specific options (built-in components, `generate: 'dom'`, `contextToCustomElements`, `wrapConditionals`)
- `scope` — provides `solid-js/web` as a runtime require shim for browser execution

## Types

This package defines no custom types. It consumes `CompilerPreset` from `@purrpose/client-babel`.

## Helpers

None. The package exports a single factory function with no additional utilities.

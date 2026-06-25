# API Surface — `@purrpose/client-babel`

## Entry Point

`src/index.ts`

## Exports

- `createCompiler` (factory)
- `evaluateComponent`, `evaluateExpression`, `evaluateHandler` (helpers)
- `CompilerOptions`, `CompilerAPI`, `CompilerScope`, `CompilerPreset`, `DebugOption` (types)

## Main API

- **`createCompiler(options?)`** — Creates a compiler instance

- **`compile(code)`** — Transforms TSX/JSX source to plain JS via Babel Standalone

- **`execute(code, scope?)`** — Evaluates compiled JS using `new Function()` with injected scope

## Helpers

- **`evaluateComponent(body, jsx, scope)`** — Wraps code + JSX into a `Component(props)` function

- **`evaluateExpression(expression, scope)`** — Evaluates an expression and returns its value

- **`evaluateHandler(handler, debug, scope)`** — Wraps a handler with optional debug logging

# Health Check — @purrtrait/view-tsx

- updated: 2026-06-25
- by: sub-agent

## Security

**#deps** Source-only distribution (`src/` shipped, no pre-built CJS) requires consumers to process through their bundler — no direct risk but increases consumer responsibility

## Performance

**#parsing** Full TypeScript AST parse (`ts.Node`) per `extractTSXView()` call — accurate but slower than regex-based approaches; could become a bottleneck for large snippets

## Architecture

**#tight-coupling** Direct dependency on TypeScript compiler API (`ts.Node`, `ts.factory`, `ts.visitEachChild`) — changes in TS internal AST representation would require updates

**#inconsistency** Fatal errors (no targets found) throw, while non-fatal issues (nested targets) log via `console.error` and silently skip — inconsistent error-handling strategy

## Conventions

**#options-bug** `src/private/createOptions.ts:17` — fallback for `placeholderPropsVar` incorrectly reads `PLACEHOLDER_PROPS_PROP` instead of `PLACEHOLDER_PROPS_VAR`; latent bug if user overrides only `placeholderPropsProp`

## Testing

**#missing** No `*.spec.ts` or `*.test.ts` files found under `src/` — test suite appears absent or pending

## Dependencies

**#dead-refs** `vite.config.mts` `rollupOptions.external` references `@purrception/lang-ts` and `@purrtrait/code-layout`, but neither is declared in `package.json` — likely stale entries

## Documentation

**#doc-drift** README documents constant `PLACEHOLDER_PROPS_VARIABLE` but actual export is named `PLACEHOLDER_PROPS_VAR` (in `src/constants.ts`)

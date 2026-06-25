# Health Check

- updated: 25/06/2026
- by: sub-agent

## Security

**#deps** Dev dependencies not pinned to exact versions. CAUTION: do not auto-upgrade without lockfile audit

## Performance

**#memory** Each `ProgramFileAPI` holds a `ts.SourceFile` and `ts.TypeChecker` in memory for the lifetime of the program — suitable for batch extraction, not hot reload

**#cpu** Creates a full TypeScript compiler program with type checker for every file — expensive for large codebases

## Architecture

**#coupling** `extractTypeExpression` is a large if-else chain (21+ branches) tightly coupled to TS `SyntaxKind` — extending requires modifying the function

## Conventions

**#consistency** `extractImportsFromProgram` returns `Map<string, ImportedSymbol>` while `extractImportedSymbols` on `ProgramAPI` returns `Record<string, ImportedSymbol>` — type asymmetry

## Testing

**#missing** `"test": "echo none yet"` — no test suite implemented (vitest available via `test:watch`)

## Documentation

## Dependencies

## Issues

## CI/CD

# CHANGELOG

## (PENDING RELEASE)

### Added

- **Demo:** Use new `@purrpose/solid-shiki-service`.
- **Api Search:** Types for search records and results: `SearchEntityRecord`, `SearchSymbolRecord`, `SearchEntityResult` (and 1 more).
- **Api Search:** Build search entity records in NoComplyMeta instantiation.
- **Api Search:** Expose `searchEntities()` in `NoComplyMetaAPI`.
- **Api Search:** Search entity records with verbatim-first scoring.
- **Api Search:** Calculate search result scores based on match type.
- **Api Search:** `ApiIndexPage` uses searchEntities API with scored results.
- **Api Search:** Extract parts from `ApiIndexPage`: `ApiSearchResults`, `ApiSearchResultsEntry`, and `ApiIndexListSection`.

### Removed

- **Demo:** Remove old `src/services/SyntaxHighlighter/` implementation.

### Refactored

- **API sections:** Pass `declaration.node` to `<CodeDocDescription>`.
- **Code and prop Module:** Reorganize code related components into `modules/code/` and `modules/props/` submodules.

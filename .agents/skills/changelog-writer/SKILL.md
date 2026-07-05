# Changelog Rules

Based on [Common Changelog](https://common-changelog.org/) conventions.

## Structure

```markdown
# CHANGELOG

## `<Release Title>`

### Added

- **Scope:** Description with backtick `symbols`.
```

## Release Title

one of:

- `PENDING RELEASE`
- `[0.0.12] yyyy-mm-dd`

## Section Types (collect as needed)

- `### Added` — new features, APIs, exports
- `### Refactored` — internal restructuring, type changes
- `### Fixed` — bug fixes
- `### Documented` — JSDoc annotations, comments, README changes
- `### Deprecated` — deprecated APIs
- `### Removed` — removed APIs

## Format Rules

1. **Start with a verb.** Capitalize the first word, end with a dot.

2. **Add scope at the start** of each item when the change is domain-specific.

   ```
   - **Resolve:** Add `hasTag()` helper for @noresolve checking.
   ```

3. **Omit scope** when the change is transversal (cross-feature, cross-package).

   ```
   - Add `@noresolve` annotation to primitive types.
   ```

4. **Wrap symbols in backticks.** Type names, function names, constants, file paths.

   ```
   - Expose `searchEntities()` in `NoComplyMetaAPI`.
   ```

5. **Limit lists to 3 items.** If more, consolidate with "and N more".

   ```
   - Add types for search records and results: `SearchEntityRecord`, `SearchSymbolRecord`, `SearchEntityResult` (and 1 more).
   ```

6. **One blank line** between section heading and first item, and between items.

# Full CHANGELOG Example:

```
## Release Example

### Added

- **Api Search:** Types for search records and results: `SearchEntityRecord`, `SearchSymbolRecord`, `SearchEntityResult`, `SearchSymbolResult`.
- **Resolve:** Add `hasTag()` helper for @noresolve checking.

### Refactored

- **Declarations:** Align `InterfaceDeclaration` with others by moving `heritage` and others to a `node` member of type `InterfaceTypeNode`.
- **Extraction:** Stamp `JsDoc` onto `.node` for function, type, and interface declarations.

### Documented

- Add `@noresolve` annotation to primitive types.
```

---
name: write-changelog
description: Use this skill when processing done tasks to generate changelogs and archive task files.
---

# Skill: Write Changelog

Use this skill to generate CHANGELOG entries and update CHANGELOG files.

Based on [Common Changelog](https://common-changelog.org/) conventions.

## Allowed Agent Modes

CRITICAL RULE: If your context `<agent-mode>` is NOT set to one of the following **Agent Modes** you are NOT ALLOWED to use this skill:

- `backlog-manager`

CRITICAL RULE: If you are NOT ALLOWED to use this skill, STOP and advise the user to switch to another agent mode first. List agent modes.

## Mandatory Reading

Read `.agents/domains/changelog/index.md`, if not yet in context, as it contains definitions and rules that are essential to interpret the instructions on this file.

## Changelog Outline

h1. CHANGELOG
h2. `<Release Title>`
h3. Added|Refactored|...

- item
- item
- item

**Release Title** is one of:

- `PENDING RELEASE`
- `[0.0.12] yyyy-mm-dd`

**Item template**:

- **Scope:** Description starting with verb; symbols always with backticks `symbols`.

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

5. **Limit lists to 3 items (2 items if names are long).** If more, consolidate with "and N more".

   ```
   - Add types for search records and results: `SearchEntityRecord`, `SearchSymbolRecord`, `SearchEntityResult` (and 3 more).
   ```

6. **One blank line** between section heading and first item, and between items.

# Full CHANGELOG Example:

```
## Release Example

### Added

- **Api Search:** Declare types for search records and results: `SearchEntityRecord`, `SearchSymbolRecord`, `SearchEntityResult`, `SearchSymbolResult`.
- **Resolve:** Expose `hasTag()` helper for @noresolve checking.

### Refactored

- **Declarations:** Align `InterfaceDeclaration` with others by moving `heritage` and others to a `node` member of type `InterfaceTypeNode`.
- **Extraction:** Stamp `JsDoc` onto `.node` for function, type, and interface declarations at extraction time.

### Documented

- Add `@noresolve` annotation to primitive types.
```

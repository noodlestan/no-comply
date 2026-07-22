# Architect History

Full feedback from previous architects, extracted during handoff.

## Architect #1

### Feedback about the System

Working with `.art` files is straightforward — the heading pattern `## {Kind}: {Name}` makes it easy to locate resources. The `::READ` directives in context files work well for loading prerequisites before interpretation. The separation between structures (schema) and records (instances) is clean and avoids confusion.

**Major doubts:**

- How does the template engine resolve `{namespace.path}{package.path}` — is it string concatenation or path joining?
- What happens when a tool's target path conflicts with another tool's target?
- Can templates reference fields from multiple records (namespace + package) in a single render?

### Feedback about Art

The `.art` format is readable and consistent. Structures are easy to understand from the Shape section. Types are simple and focused. The dot notation for compound types (`License.Short`) is intuitive. The `_meta/` layer provides clear separation between structures, types, and routines.

**Major doubts:**

- Is there a formal grammar for `.art` files, or is it convention-based?
- How are multi-line values (like the License.Long text) parsed — is indentation significant?
- Can types compose other types, or only structures?

### Feedback about the Project

The `_wip.md` files are useful for tracking pending work. The `_guide.md` files provide good orientation. The separation of `_meta/` (structures, types, routines) and `_domains/monorepo/` (records, templates, tools) is clear.

**Major doubts:**

- Is the developer routines section in `_meta/_developer/_wip.md` ready to be formalised into `.art` routine files?
- What's the next priority — scaffolding directories, generating `package.json`, or implementing the routines?

## Architect #2

### Feedback about the Session

Started as a reference validation scan, turned into a full meta-layer restructure. Chores dominated: normalising formats (`## Uses` / `## Declares` → `# Module` / `## Routine:`), reorganising `_meta/` into modules, fixing stale paths. Module convention emerged from work, not design.

**Major doubts:** Is the module granularity right? `structures/` has 1 routine, `refactor/` has 5. Should small modules merge?

### Feedback about the System

`.art` files are clean once normalised. Old `## Uses` / `## Declares` mixed imports with definitions — confusing. `_guide.md` drifts when files move. `_wip.md` path references go stale.

**Major doubts:** Should `_guide.md` be auto-generated from filesystem?

### Feedback about Art

Module convention scales well. Types shared across routines justify separate files; types local to one module can co-locate. `Routine: Write Routine` is a useful self-describing pattern.

**Major doubts:** Types in `types/` subdirectory always, or co-location acceptable?

### Feedback about the Project

`_architect_prompt.md` was the most stale file. `_wip.md` drifts. Domain layer (records, templates) is stable. Meta layer is unstable — still defining its structure.

**Major doubts:** Should consolidation be more aggressive about updating `_architect_prompt.md`?

## Architect #3

### Feedback about the Session

Started as a WIP freshness audit, turned into a full tool scaffolding design session. WIP files were stale (ghost MCP reference, wrong template paths). Tool system had a kind prefix mismatch — records used `Tool:` but Structure is named `Package Tool`. Fixed all records, created 15 new tool records and templates for lib/cli/tools packages.

**Major doubts:** Should tools be split by namespace (lib/cli/tools) or by function (package-json, tsconfig, vite)? The current approach is namespace-based.

### Feedback about the System

The tool system works well once the kind prefix is correct. Template paths should always be relative (`./`). Tool records should use `## Package Tool:` heading to match the Structure name. The `_guide.md` is the source of truth for tool catalog.

**Major doubts:** Should `_guide.md` auto-generate from filesystem? Currently manual and prone to drift.

### Feedback about Art

The `Structure: Package Tool` and `Type: Package Tool File` work well together. Templates use `{{%field}}` interpolation consistently. The `::TEMPLATE for each` loop works for scripts.

**Major doubts:** How should conditional files work? (e.g., vite only for lib, tsconfig-dual only for cli)

### Feedback about the Project

Domain layer is now stable with complete tool coverage. Meta layer has all developer routines implemented. The `_architect_prompt.md` needs updating to reflect new tools.

**Major doubts:** Should we exercise the tool system end-to-end before handoff?

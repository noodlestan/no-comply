# Agent Rules and Orientation

A monorepo for the **No Comply** ecosystem: context-aware UI components (SolidJS), codebase introspection tools, and documentation infrastructure.

## Base context

Agents MUST read these files first:

- **`.agents/skills/index.md`** — YOU MUST READ THIS FIRST
- **README.md`** - YOU MUST READ THIS FIRST

## Rules for globbing and reading files

Agents MUST:

- Identify a `$SCOPE` (filesystem path(s)) for each session.
- If not defined on the original prompt they must ask before proceeding.
- If one or more paths are defined the agent can infer what `$SCOPE` should be but ask for confirmation first

Agenst MUST NOT:

- Read any file until `$SCOPE` is defined.
- Read outside of `$SCOPE` without requesting permission.
- Expand `$SCOPE` autonomously to read files outside of current scope.
- Execute tasks autonomously if `$SCOPE` is not defined.
- Glob or read from `node_module` or `dist/` folders without permission.

When working in autonomous mode, agents MUST:

- Read `README.md` and `AGENTS.md` especially at the root of `$PROJECT`
- Follow other files mentioned in `AGENTS.md` or `SKILL.md` that are reveland for the task.
- stop if they would need to break any of these globbing and reading rule

### RULE: Placeholders

All artifacts (tasks, plans, reports, prompts) MUST use relative paths with the following ALL CAPS placeholders:

- `$ROOT/` - Monorepo root directory - Example: `$ROOT/libs/meta/src/index.ts`
- `$PROJECT/` - Task-specific project scope - Example: `$PROJECT/src/controllers`
- `$SCOPE/` - Task-specific filesystem scope - Example: `$SCOPE/components/`
- `$<ITERATOR>` - Dynamic segment (e.g., entity name) - Example: `$ROOT/libs/meta/src/entities/ENTITY/types.ts`
- `$<NAME>` - Any arbitrary placeholder - Example: `$ROOT/libs/MODULE_A/src/index.ts`

### RULE: Path Resolution

All paths in task records, delegation prompts, plan records, and reports MUST:

- Use placeholders instead of absolute paths
- Use `$SCOPE` when a task is scoped to a specific location (defined at task top)
- Use `$ROOT` for monorepo-relative references
- Use `$PROJECT` when referencing files inside the task's project (defined at the task top)
- Use any arbitrary placeholders, example `$MODULE-A`, `$MODULE-B`, when needed (defined where convenient)
- NEVER resolve placeholders to absolute paths in written artifacts

The executor MUST NOT write resolved paths back into artifacts.

## Code Conventions and formatting

When writing code and creating new files

- RULE: always include an `index.ts` barell file in every new folder, starting with the pattern comment (copy from a sibling or parent `index.ts`)
- RULE: always run `npm run lint:fix` in the `$PROJECT` directory

Agents SHOULD follow the conventions of similar files in the same package.

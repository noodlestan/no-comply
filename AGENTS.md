# Agent Rules and Orientation

A monorepo for the **Noodlestan** projects.

## Mandatory Reading

When the user says "mandatory reading" read the following files into context:

- **`.agents/skills/index.md`** — lists available skils, each with `<skill-name>`, `<skill-id>` and `<skill-description>`.
- **`.agents/domains/index.md`** — lists work domains (tasks, knowledge, conventions, ...) and important definitions required to interpret skill files and instructions correctly (Agent Modes, Skill, Domain Reference File, Knowledge File).
- **`knowledge/index.md`** — lists namespaces, knowledge sources, and important knowledge related definitions.

- CRITICAL RULE: If you haven't done the "Mandatory Reading" yet, you are forbidden to use ANY skill.

## Before you Continue

1. identify the current session `<agent-mode>`, `<agent-name>` and `<agent-mission>`.
2. Do not try to infer, your context should have a "> `<agent-mode>`: `SOMETHING`" directive.
3. Check if your `<agent-mode>` is equal one of the ALLOWED values:
   - `assitant`
   - `context-curator`
   - `pair-driver`
   - `pair-navigator`
   - `rubberduck`
   - `task-manager`
4. Check if it matches one of the FORBIDDEN values:
   - "Build — full tool access for implementation"
   - "Plan — read-only for analysis, no edits/commands by default"
5. Determine if your `<agent-mode>` is VALID: it MUST be verbatim equal to one on the "allowed" list and not match any in the "forbidden" list.

- CRITICL RULE: you are FORBIDDEN from using ANY skill unless you have a VALID `<agent-mode>`.

- RULE: if you don't have an explicit `<agent-mode>`, if does not math any of the modes in the ALLOWED list above, YOU MUST ALERT THE USER at the end of EVERY response.

Otherwise feel free to present yourself with `Hi I am your <agent-name>,(<agent-mode>) and my mission is <agent-mission>`".

- RULE: When the user asks "Who are you?" respond with your agent `<agent-mode>`, `<agent-name>` and `<agent-mission>`.

## Rules for globbing and reading files

Agents MUST:

- Identify a `$SCOPE` (filesystem path(s)) for each session.
- If a scope is not defined on the original prompt they must ask before proceeding.
- If one or more paths are defined the agent can infer what the `$SCOPE` should be but ask for confirmation immediately.

Agenst MUST NOT:

- Read any file until `$SCOPE` is defined.
- Read outside of `$SCOPE` without requesting permission.
- Expand `$SCOPE` autonomously to read files outside of current scope.
- Execute tasks autonomously if `$SCOPE` is not defined.
- Glob or read from `node_module` or `dist/` folders without permission.

When working in autonomous mode:

- RULE: Agents MUST read any files listed under "Mandatory Reading" for the current `<agent-mode>`, in the skill file(s), and on any task instructions provided.
- CRITICAL RULE: If any of the files under "Mandatory Reading" can not be read, agents MUST STOP and report the blocker.

### Rules for interpreting and serializing Paths with Placeholders

- RULE: All artifacts (tasks, plans, reports, prompts) MUST use relative paths with the following ALL CAPS placeholders:
  - `$ROOT/` - Monorepo root directory - Example: `$ROOT/libs/meta/src/index.ts`
  - `$PROJECT/` - Task-specific project scope - Example: `$PROJECT/src/controllers`
  - `$SCOPE/` - Task-specific filesystem scope - Example: `$SCOPE/components/`
  - `$<ITERATOR>` - Dynamic segment (e.g., entity name) - Example: `$ROOT/libs/meta/src/entities/ENTITY/types.ts`
  - `$<NAME>` - Any arbitrary placeholder - Example: `$ROOT/libs/MODULE_A/src/index.ts`

### Rules for Path Resolution

- RULE: All paths in task records, delegation prompts, plan records, and reports:
  - MUST use placeholders instead of absolute paths.
  - MUST use `$SCOPE` when a task is scoped to a specific location (defined at task top)
  - MUST use `$ROOT` for monorepo-relative references.
  - MUST use `$PROJECT` when referencing files inside the task's project (defined at the task top).
  - SHOULD use any arbitrary placeholders, example `$MODULE-A`, `$MODULE-B`, when needed (defined where convenient).

- RULE: Agents should NEVER resolve placeholders to absolute paths in written artifacts

### Rules for Writing files

- RULE: The agent MUST NEVER write resolved paths in artifacts, source code files, markdown files, any files.

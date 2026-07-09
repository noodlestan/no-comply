---
name: boot-sequence
description: Use at the beggining of each session to preload the required context for the agent to operate correctly.
---

# Skill: Boot Sequence

The purpose of this skill is to populate the session with context files containing definitions, rules, and instructions required for the agent to operate safely and correctly under its current `$AGENT_MODE`.

## Allowed Agent Modes

ALL

## Definitions

**Mandatory Reading:** Special sections of context files that require the agent to read more files to acquire knowledge.

**## Mandatory Reading:** Special sections of context files that require the agent to read more files to acquire knowledge.

**Mandatory Reading Directive:** an instruction to read a specific file and all the files listed under its "## Mandatory Reading" section. Example: `- ::MANDATORY-READING: .agents/domains/tasks/index.md`

**Bookshelf List:** A list of files that were read into context as Mandatory Reading and their sources.

## Processes

### Process for Identifying the Current Agent Mode

The `$AGENT_MODE` session variable is set by an Agent Mode skill file.

You should identify your agent mode by scanning the most recent context for `"This agent mode is defined by the following skills`.

Note that the user can switch

- CRITICAL RULE: If the agent can not retrieve the explicit value of `$AGENT_MODE` from the current session (without inference) then the agent is FORBIDDEN from using any other skill.
- CRITICAL RULE: If the agent did not yet execute the `::boot` command from this skill then the agent is FORBIDDEN from using any other skill.

### Process for Reading Mandatory Files

**Before you start:** If you haven't yet initialized the **Bookshelf List**, create a table with 4 columns:

- "file name" - of the file being read.
- "title" - of the file being read.
- "required by" - which file prescribed the reading (or "user" in case of user request).
- "size" - length of the file.

1. Identify the file being read.
2. If you haven't yet read this file, read it now.
3. if the file contains a `## Mandatory Reading` apply the "Process for reading Mandatory Reading Sections" to read linked files as well.
4. If instructed to ignore if the file was read before, read the the file regardless of it having been read before.

- CRITICAL RULE: if you are unable to read the file, report the error to the user and ALERT them that the mandatory file `<target>` requested by `<source>` is not readable.

3. If the file being read is not yet in the **Bookshelf List**, add it to the list, including the file name, title, source of the read request and the file size.

### Process for Reading Mandatory Reading Sections

When a file contains a `## Mandatory Reading` section, execute the following steps:

1. Identify all the files listed in the "Mandatory Reading" section.
2. Apply the "Process for Reading Mandatory Files" to read them into the session context.

### Process for Reading Mandatory Reading Directives

Example:

```
3. when the task type is of type "bug" ::MANDATORY-READING: .agents/domains/tasks/index.md  .agents/domains/plans/index.md`
```

When an instruction being executed contains `::MANDATORY-READING`, execute the following steps:

1. Identify all the files listed after the directive placholder.
2. Apply the "Process for Reading Mandatory Files" to each file, one by one, to read them into the session context.

### Agent Mode

### Paths with Placeholders

This project uses placeholders in context and instruction files.

| Placeholder   | Meaning                                | Example usage                                    |
| ------------- | -------------------------------------- | ------------------------------------------------ |
| `$ROOT`       | Monorepo root directory                | `$ROOT/libs/meta/src/index.ts`                   |
| `$PROJECT`    | Task-specific project scope            | `$PROJECT/src/controllers`                       |
| `$SCOPE`      | Task-specific filesystem scope         | `$SCOPE/components/`                             |
| `$<ITERATOR>` | Dynamic segment such as an entity name | `$ROOT/libs/meta/src/entities/<entity>/types.ts` |
| `$<NAME>`     | Arbitrary placeholder                  | `$ROOT/libs/<module-a>/src/index.ts`             |

- RULE: if a path does not start with a placeholder, the agent should infer that the path is relative to the root of the monorepo.

## Mandatory Reading:

1. Read `.agents/domains/index.md` - this file lists work domains (tasks, knowledge, conventions, ...) and important definitions required to interpret skill files and instructions correctly (Agent Modes, Skill, Domain Reference File, Knowledge File).

2. Read Instructions for Current Agent Mode: `.agents/skills/agent-{AGENT_MODE}/SKILL.md`, where `{AGENT_MODE}` is the verbatim value of the `$AGENT_MODE` session variable. This file lists specific instructions required for this session.

3. Read the Skills Index: `.agents/skills/index.md`. This file lists available skils, each with `<skill-name>`, `<skill-id>` and `<skill-description>`.

4. Read the Knowledge Discovery Index: `knowledge/index.md`. This file lists namespaces, knowledge sources, and important knowledge related definitions.

## Commands

This file defines 5 user commands:

### Command: `::identify`

The purpose of this command is to ensure that the `$AGENT_MODE` is already known by the agent.

When the user says `::identify`:

1. Scan the most refent context for an `$AGENT_MODE` declaration matching this pattern: `$AGENT_MODE: '$AGENT_MODE'`.

IMPORTANT NOTE: the user can switch $AGENT_MODE several times during a session. Make sure you capture the most recent activation.

- IMPORTANT RULE: Do not try to infer the value of `$AGENT_MODE`, it should be already set once and only once.
- IMPORTANT RULE: Do not read any files to resolve this value.

3. Check if your `$AGENT_MODE` matches one of the FORBIDDEN values:
   - `Explore`
   - `General`
   - `Build`
   - `Plan`

- RULE: if you don't have an explicit and valid `$AGENT_MODE`, YOU MUST ALERT THE USER.
- CRITICL RULE: you are FORBIDDEN from using ANY skill unless you have a VALID `$AGENT_MODE`.

4. Otherwise feel free to present yourself with `Hi I am agent $AGENT_MODE`.

### Command: `::autoexec`

The purpose of this command is to ensure that the critical context files are read into the session context.

When the user says `::autoexec`:

1. Execute all the steps from the `::identify` command.

- RULE: if a previous execution of the `::identify` command failed to successfully identify the `::$`, repeat the command now.

2. Re-read your agent file from `.agents/skills/agent-{$AGENT_MODE}/SKILL.md`
3. Read all the files listed on the `## Files to Read on Every Session Start` section at the top of this file.
4. Respond with a table of filenames and their purpose.

### Command: `::mandatory`

The purpose of this command is to ensure that the context files required by the current Agent Mode are read into the session context.

IMPORTANT NOTE: the Bookfshelf List may contain files that weren't actually read. Don't rely on the fact that the file is already referenced in this list to by pass its reading.

When the user says `::mandatory`:

1. Present the **Bookshelf list** to the user in table format.
2. Apply the "Process for Reading Mandatory Files" to each file to ensure it is actually read into context.

### Command: `::boot`

The purpose of this command is to execute all commands required for starting a session in one go.

When the user says `::boot`:

1. Execute all the steps from the `::autoexec` command.
2. Execute all the steps from the `::mandatory` command.

- RULE: if a previous execution of the `::autoexec` or `::mandatory` commands failed, repeat them anyway.

### Command: `::switch`

The purpose of this command is to switch to another mode manually.

When the user says `::switch: <agent-mode>`:

1. Read the `.agents/skills/agent-<agent-mode>.md` file
2. Execute `::boot`

### Command: `::reboot`

The purpose of this command is to refresh critical and essential context in long running sessions.

When the user says `::reboot`:

1. Execute all the steps from the `::autoexec` command.
2. Execute all the steps from the `::mandatory` command (disregarding if files were previously read).

- RULE: if a previous execution of the `::autoexec` or `::mandatory` commands failed, repeat them anyway.

### Command: `::agents`

When the user says `::agents`:

1. read the `.agents/skills/agents.md` file
2. present the list of agent modes to the user.

### Command: `::skills`

When the user says `::skills`:

1. read the `.agents/skills/index.md` file
2. group the skills listed by "Allowed" or "Not Allowed" depending on which mode the `$AGENT_MODE` is currently active and what skills are allowed in the `# Agent: $AGENT_MODE` file.
3. present the list of allowed skills with their names and purposes.
4. present the list of disallowed skills as names only.

### Command: `::bookshelf`

When the user says `::bookshelf`:

If you have initiliased the **Bookshelf list** present it.

If don't have a **Bookshelf list** to present, execute the following steps:

1. Alert the user that Bookshelf is empty.
2. Scan the context for files loaded through `## Mandatory Reading` directives.
3. Present the file name, terse description, and source file (if available)

### Command: `::commands`

The purpose of this command is to list commands loaded into context via skills:

When the user says `::commands`:

1. Scan the context for commands. Example. `### Command: <name>` or `When the user says <command>`.
2. Present the list of commands and their source file.

### Command: `::templates`

The purpose of this command is to list available templates:

When the user says `::templates`:

1. Scan the context for templates. Example. `# Component Task Template`
2. Present the list of commands and their source file.

## Rules for globbing and reading files

- RULE: Identify a `$SCOPE` (filesystem path(s)) for each session.
- RULE: If a scope is not defined on the original prompt they must ask before proceeding.
- RULE: If one or more paths are defined the agent can infer what the `$AGENT_MODE` should be but ask for confirmation immediately.

### Restrictions

Agenst MUST NOT:

- RULE: Read outside of `$SCOPE` without requesting permission.
- RULE: Expand `$SCOPE` autonomously to read files outside of current scope.
- RULE: Execute tasks autonomously if `$SCOPE` is not defined.
- RULE: Glob or read from `node_module` or `dist/` folders without permission.

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

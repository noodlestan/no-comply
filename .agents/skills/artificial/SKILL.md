---
name: artificial
description: Use at the beggining of each session to preload the required context for the agent to operate correctly.
---

# Skill: Artificial

The purpose of this skill is to populate the session with context files containing definitions, rules, and instructions required for the agent to operate safely and correctly under its current `$AGENT_MODE`.

IMPORTANT: when agents finish processing this file, they MUST execute the `::boot` command to ensure that all the required context files are read into the session context.

## Allowed Agent Modes

ALL

## Files to Read on Every Session Start

1. The Instructions for Current Agent Mode: `.agents/skills/agent-{AGENT_MODE}/SKILL.md`, where `{AGENT_MODE}` is the verbatim value of the `$AGENT_MODE` session variable. This file lists specific instructions required for this session.
2. The Skills discovery index at `.agents/skills/index.md`.

## Definitions

**Mandatory Reading** – Special sections of context files that instruct the agent to other read files that are essential to understand the instructions in the current file.

**Mandatory Reading Directive** – an instruction to read a specific file and all the files listed under its "## Mandatory Reading" section. Example: `- ::MANDATORY-READING: .agents/domains/tasks/index.md`

**Bookshelf List** – A list of files that were read into context as Mandatory Reading and their sources.

## Processes

### Process for Identifying the Current Agent Mode

**IMPORTANT:** The `$AGENT_MODE` session variable is set by an Agent Mode skill file.

**Steps:**:

1. Identify your agent mode by scanning the most recent context.
2. If you can't immediately identify the agent mode, scan the context for `> $AGENT_MODE: '{agent-mode}'` and use the most recent declaration.
3. If you still can't identify the agent mode, ALERT the user and STOP processing any further instructions.

**NoteL** the user can switch between agent modes several times during a session. Make sure you capture the most recent activation.

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
3. if the file contains a `## Mandatory Reading` apply the **Process for Reading Mandatory Reading Sections** to read linked files as well.
4. If instructed to ignore if the file was read before, read the the file regardless of it having been read before.

- CRITICAL RULE: if you are unable to read the file, report the error to the user and ALERT them that the mandatory file `{target}` requested by `{source}` is not readable.

3. If the file being read is not yet in the **Bookshelf List**, add it to the list, including the file name, title, source of the read request and the file size.

### Process for Reading Mandatory Reading Sections

With the context files being read, execute the following steps:

1. Identify all the files listed in their "Mandatory Reading" sections.
2. Execute the **Process for Reading Mandatory Files** with the identified files, one by one, to read them into the session context.

## Global Rules for Paths, Files, and Placeholders

### Rules for Paths Placeholders

This project uses placeholders in some context and instruction files.

| Placeholder   | Meaning                                | Example usage                                    |
| ------------- | -------------------------------------- | ------------------------------------------------ |
| `$PROJECT`    | session project scope                  | `$PROJECT/src/controllers`                       |
| `$SCOPE`      | session filesystem scope               | `$SCOPE/components/`                             |
| `${ITERATOR}` | Dynamic segment such as an entity name | `$ROOT/libs/meta/src/entities/{entity}/types.ts` |
| `${NAME}`     | Arbitrary placeholder                  | `$ROOT/libs/{module-a}/src/index.ts`             |

### Rules for globbing and reading files

- RULE: Identify a `$SCOPE` (filesystem path(s)) for each session.
- RULE: If a scope is not defined on the original prompt they must ask before proceeding.
- RULE: If one or more paths are defined the agent can infer what the `$AGENT_MODE` should be but ask for confirmation immediately.

**Restrictions:**

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

### Rules for Writing files

- RULE: The agent MUST NEVER write resolved paths in artifacts, source code files, markdown files, any files.

## Commands

These commands can be used to identify and switch the current operation modes.

### Command: `::identify`

The purpose of this command is to ensure that the `$AGENT_MODE` is already known by the agent.

**Triggers:**

- When the user says `::identify`.

**Steps:**

1. Scan the most recent context for an `$AGENT_MODE` declaration matching this pattern: `$AGENT_MODE: '$AGENT_MODE'`.

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

**Triggers:**

- When the user says `::autoexec`.

**Steps:**

1. Execute all the steps from the `::identify` command.

- RULE: if a previous execution of the `::identify` command failed to successfully identify the `$AGENT_MODE` value, repeat the command now.

2. Read all the files listed on the `## Files to Read on Every Session Start` section at the top of this file.
3. Respond with a table of filenames and their purpose.

### Command: `::mandatory`

The purpose of this command is to ensure that the context files required by the current Agent Mode are read into the session context.

IMPORTANT NOTE: the Bookfshelf List may contain files that weren't actually read. Don't rely on the fact that the file is already referenced in this list to bypass its reading.

**Triggers:**

- When the user says `::mandatory`.

**Steps:**

1. Scan the context for context files containing a `## Mandatory Reading` section.
2. Execute the **Process for Reading Mandatory Files** with the identified files, one by one, to ensure it is read into context.
3. Present the **Bookshelf List** to the user in table format.

### Command: `::boot`

The purpose of this command is to refresh critical and essential context in long running sessions.

**Triggers:**

- When the user says `::boot`.
- When the user says `::reboot`.

**Steps:**

1. Identify if a previous execution of the `::autoexec` or `::mandatory` commands failed.
2. If these command previously failed to execute their processes, and the user said `reboot`, disregard that fact and continue with the next steps.
3. Identify all files listed under the **Files to Read on Every Session Start** Section above.
4. Execute the **Process for Reading Mandatory Files** to each file to ensure it is read into the session context.
5. Execute all the steps from the `::autoexec` command.
6. Execute all the steps from the `::mandatory` command (disregarding if files were previously read).

### Command: `::switch`

The purpose of this command is to switch to another mode manually.

**Triggers:**

- When the user says `::switch: {agent-mode}`.

**Steps:**

1. Read the `.agents/skills/agent-{agent-mode}.md` file.
2. Execute `::boot`

### Command: `::bookshelf`

When the user says `::bookshelf`:

If you have initiliased the **Bookshelf list** present it.

If don't have a **Bookshelf list** to present, execute the following steps:

1. Alert the user that Bookshelf is empty.
2. Scan the context for files loaded through `## Mandatory Reading` directives.
3. Present the file name, terse description, and source file (if available)

### Command: `::reflect`

The purpose of this command is to load additional commands that reflect the state of the session and display resources that were read.

**Triggers:**

- When the user says `::reflect`.
- When the user says `::agents`, `::skills` or `::domains`.

**Steps:**

1. READ: `.agents/skills/artificial/reflect.md`
2. If the user command was `::reflect` list all the commands in that file and their purpose.
3. Otherwise, execute the command declared on that file that matches the user command.

## Global Reading Triggers

**Triggers:**

- When reading any context file.
- When reading any instruction file.
- When processing any user command.

### Reading Sections

**Triggers:**

- When the file being read contains a `## Mandatory Reading` section.

**Steps:**

1. Execute the **Process for Reading Mandatory Reading Sections** to read all files listed in the section.

### Reading Directives

**Triggers:**

- When ANY instructions contain a `::MANDATORY-READING` directive.

**Steps:**

1. Identify all the files listed after the directive placeholder. Example: "3. when the task type is of type "bug": **::MANDATORY-READING** `file-1.md` and `path/to/file-2.md`."
2. Execute the **Process for Reading Mandatory Files** with the identified files, one by one, to read them into the session context.

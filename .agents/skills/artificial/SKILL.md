---
name: artificial
description: Use at the beggining of each session to preload the required context for the agent to operate correctly.
---

# Skill: Artificial

**Purpose:** Initialise session context with Interpretation and Execution Prerequisites so that the agent can operate safely and correctly under its current `$AGENT_MODE` after all prerequisites are fulfilled.

## Allowed Agent Modes

ALL

## Mandatory Reading

The following files are interpretation prerequisites:

- ::READ `.agents/skills/agent-{AGENT_MODE}/SKILL.md` – (Instructions for Current Agent Mode)
  Note: `{AGENT_MODE}` is the verbatim value of the `$AGENT_MODE` session variable.
- ::READ `.agents/skills/index.md`.

## Global Triggers

### Triggers for Processing the First Request

**Triggers:**

- At the start of the session:
- After receiving the first input:
- Before processing the first request:
- Before interpreting the first prompt:

**Steps:**

- Execute the **::boot** command.
- Execute the **::identify** command.

## Commands

These commands can be used to identify and switch the current operation modes.

### Command: `::identify`

**Triggers:**

- When the user says `::identify`.

**Procedure:**

1. Scan the most recent context for an `$AGENT_MODE` declaration matching this pattern: `$AGENT_MODE: '$AGENT_MODE'`.
   – IMPORTANT NOTE: the user can switch $AGENT_MODE several times during a session. Make sure you capture the most recent activation.
   – IMPORTANT RULE: Do not try to infer the value of `$AGENT_MODE`, it should be already set once and only once.
   – IMPORTANT RULE: Do not read any files to resolve this value.

2. Check if your `$AGENT_MODE` matches one of the FORBIDDEN values:
   – `Explore`
   – `General`
   – `Build`
   – `Plan`

3. If you don't have an explicit and valid `$AGENT_MODE`,
   1. THROW ERROR to user
   2. CRITICL RULE: you are FORBIDDEN from using ANY skill unless you have a VALID `$AGENT_MODE`.
   3. STOP processing.

4. Otherwise feel free to present yourself with `Hi I am agent $AGENT_MODE`.

**Purpose:** Ensure that the `$AGENT_MODE` is already known by the agent.

### Command: `::autoexec`

**Triggers:**

- When the user says `::autoexec`.

**Procedure:**

1. Execute all the steps from the `::identify` command.
2. If a previous execution of the `::identify` command failed to successfully identify the `$AGENT_MODE` value, repeat the command now.
3. Read all the files listed on the `## Mandatory Reading` section at the top of this file.
4. Respond with a table of filenames and their purpose.

**Purpose:** Ensure that the critical context files are read into the session context.

### Command: `::mandatory`

**Triggers:**

- When the user says `::mandatory`.

**Before Executing:** the Bookfshelf List may contain files that weren't actually read. Don't rely on the fact that the file is already referenced in this list to bypass its reading.

**Procedure:**

1. Scan the context for context files containing a `## Mandatory Reading` section.
2. Execute the **Process for Reading Mandatory Files** with the identified files, one by one, to ensure it is read into context.
3. Present the **Bookshelf List** to the user in table format.

**Purpose:** Ensure that the context files required by the current Agent Mode are read into the session context.

### Command: `::boot`

**Triggers:**

- When the user says `::boot`.
- When the user says `::reboot`.

**Procedure:**

1. Identify if a previous execution of the `::autoexec` or `::mandatory` commands failed.
2. If these command previously failed to complete, disregard that fact and continue with the next steps.
3. Identify all files listed under the **Mandatory Reading** Section above.
4. Execute the **Process for Reading Mandatory Files** to each file to ensure it is read into the session context.
5. Execute all the steps from the `::autoexec` command.
6. Execute all the steps from the `::mandatory` command (disregarding if files were previously read).

**Purpose:** Refresh critical and essential context in long running sessions.

### Command: `::switch`

**Triggers:**

- When the user says `::switch: {agent-mode}`.

**Procedure:**

1. Read the `.agents/skills/agent-{agent-mode}.md` file.
2. Execute `::boot`

**Purpose:** Switch to another mode manually.

### Command: `::bookshelf`

**Triggers:**

- When the user says `::bookshelf`:

**Before Executing:**

1. If you have initiliased the **Bookshelf list**,
   1. present it to the user and STOP processing.
1. Otherwise, execute the procedure below.

**Procedure:**

1. Alert the user that Bookshelf is empty.
1. Scan the context for files loaded through `## Mandatory Reading` directives.
1. Present the filename, terse description, and source file (if available)

### Command: `::reflect`

**Triggers:**

- When the user says `::reflect`.
- When the user says `::agents`, `::skills` or `::domains`.

**Procedure:**

1. ::READ `.agents/skills/artificial/reflect.md`
2. If the user command was `::reflect` list all the commands in that file and their purpose.
3. Otherwise, execute the command declared on that file that matches the user command.

**Purpose:** Load additional commands that reflect the state of the session and display resources that were read.

### Command: `::art`

**Triggers:**

- When the user says `::art`.

**Procedure:**

1. ::READ `.agents/skills/artificial/commands/art.md`
2. Execute the **Command: `::art`** defined in that file.

**Purpose:** Load artificial language vocabulary and instruct the agent to interpret `.art` files as executable artificial source code.

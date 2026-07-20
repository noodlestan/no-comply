# Artificial Additional Commands

## Commands

### Command: `::agents`

**Purpose:** List agent modes.

**Trigger:**

- when the user says `::agents`.

**Process:**

1. read the `.agents/skills/agents-modes.md` file
2. present the list of agent modes to the user.

### Command: `::skills`

When the user says `::skills`:

1. read the `.agents/skills/index.md` file
2. group the skills listed by "Allowed" or "Not Allowed" depending on which mode the `$AGENT_MODE` is currently active and what skills are allowed in the `# Agent: $AGENT_MODE` file.
3. present the list of allowed skills with their names and purposes.
4. present the list of disallowed skills as names only.

### Command: `::commands`

**Purpose:** List commands loaded into context via skills.

When the user says `::commands`:

1. Scan the context for commands. Example. `### Command: {name}` or `When the user says {command}`.
2. Present the list of commands and their source file.

### Command: `::templates`

**Purpose:** List available templates.

When the user says `::templates`:

1. Scan the context for templates. Example. `# Component Task Template`
2. Present the list of templates and their source file.

### Command: `::interactions`

**Purpose:** List available interaction modes.

When the user says `::interactions`:

1. Scan the context for interaction modes. Example. `### Interaction Mode: Short Iterations`.
2. Present the list of commands and their source file.

## Rules for globbing and reading files

- RULE: Identify a `$SCOPE` (filesystem path(s)) for each session.
- RULE: If a scope is not defined on the original prompt they must ask before proceeding.
- RULE: If one or more paths are defined the agent can infer what the `$AGENT_MODE` should be but ask for confirmation immediately.

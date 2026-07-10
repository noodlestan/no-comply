---
name: update-agents
description: Use this skill to update the agent modes index file and platform files for Opencode and Codex.
---

# Skill: Update Agents

Updates **Agent Mode** index file and Agent Platform Files.

Use this skill to update the `.agents/skills/agents-modes.md` so that it lists all available agent skills, the platform agent files at `.codex/agents/` and the `opencode.json` configuration at the root of the repository.

## Allowed Agent Modes

CRITICAL RULE: If your context `$AGENT_MODE` is NOT set to one of the following **Agent Modes** you are NOT ALLOWED to use this skill:

- `assistant`

CRITICAL RULE: If you are NOT ALLOWED to use this skill, STOP and advise the user to switch to another agent mode first. List agent modes.

## Processes

### Process for Listing Available Modes

1. Read all the `SKILL.md` files that match `.agents/skills/agent-{*}/SKILL.md`.
2. With each file, identify the `name` and `description` in the frontmatter of the file and the H1 heading.
3. Generate a table with the following columns:

- `agent.id` - the `name` field of the skill file's frontmatter stripped of the `agent-` prefix.
- `agent.name` - extracted from the skill file's H1 heading `# Agent Mode: {agent-name}`.
- `agent.mission` - the `description` field of the skill file's frontmatter.

### Process for Updating the Agent Mode Index

With the generated table of agent modes, execute the following steps:

1. Generate a table with the following columns:

- `agent.id` - the `name` field of the skill file's frontmatter stripped of the `agent-` prefix.
- `agent.name` - the skill file's H1 heading `# Agent Mode: {agent-name}`.
- `agent.mission` - the `description` field of the skill file's frontmatter.

2. Create or update `.agents/skills/agents-modes.md` using the following template.

#### Template for Agent Modes Index

```
# Agent Modes Index

This file lists available agent modes.

Agent modes are pre-loaded into an agent session, and although they are technically skills, they are rule-heavy instructions for operational mode, rather than for process execution.

Instructions on how to update this index can be found at the bottom of this file.

## Commands

When the user says "list agents" present this list.

## <agent-name>

ID: `$AGENT_MODE`

Mission: <agent-mission>

---

# How to update this file and agent platform Links

- Use **update-agents** skill to update this agent modes index file and platform files for Opencode and Codex.
```

### Process for Updating Platform files

Platform files are short markdown files that allow platforms such as `codex` or `opencode` to automatically recognise the agent modes.

1. Read all files matching `.agents/skills/agent-{name}/SKILL.md`.
2. Ignore platform agent files declared as `.codex/agents/{name}.toml` and `.opencode/agents/{name}.md`.
3. For each agent skill in the source of truth generate 2 new files using the Codex and Opencode templates below.
4. The values declared in the `## BACKMATTER` section of each source of truth agent skill file must be copied to the respective Codex `toml` and Opencode `md` files.
5. Save the platform tiles to `.codex/agents/{name}.toml` and `.opencode/agents/{name}.md`.
6. Delete platform agent files in both `.opencode/agents` and `.codex/agents` that do not correspond to an entry in the source fo truth.

#### Template for Opencode Agent file

```
---
description: <agent-mission>
mode: primary
reasoningEffort: medium
textVerbosity: low
color: '#ff6b6b'
top_p: 0.1
---

# <agent-name>

This agent mode is defined by the following skills, in order:

1. [agent-$AGENT_MODE](../../.agents/skills/agent-$AGENT_MODE/SKILL.md)

When the user says Mandatory Reading read the skill files listed above.
```

#### Template for Codex agent files

```
name = "$AGENT_MODE"
description = "<agent-mission>"
model_reasoning_effort = "medium"
developer_instructions = """
This agent mode is defined by the following skills, in order:

1. [agent-$AGENT_MODE](../../.agents/skills/agent-$AGENT_MODE/SKILL.md)

When the user says Mandatory Reading read the skill files listed above.
"""
```

### Process for Updating Opencode Configuration

1. Read the `.agents/skills/agents-modes.md` file and extract the list of agent modes.
2. Use the `.agents/skills/update-agents/opencode-config.md` instructions with the available agent mode to generate a fresh `opencode.json` configuration file.

## Commands

## Command: `Update Agents`

**Triggers:**

- When the user says `::update-agent-modes`.

**Process:**

1. Execute the **Process for Updating the Agent Mode Index**.
2. Execute the **Process for Updating Platform files**.
3. Execute the **Process for Updating Opencode Configuration**.

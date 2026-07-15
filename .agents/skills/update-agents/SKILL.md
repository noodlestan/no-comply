---
name: update-agents
description: Use this skill to update the agent modes index file, Codex agent files, and the opencode.json configuration.
---

# Skill: Update Agents

Updates **Agent Mode** index file and Agent Platform Files.

Use this skill to update the `.agents/skills/agents-modes.md` so that it lists all available agent skills, the Codex agent files at `.codex/agents/`, and the `opencode.json` configuration at the root of the repository.

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
- `agent.codex` - the `metadata.codex` object from the skill file's frontmatter.
- `agent.opencode` - the `metadata.opencode` object from the skill file's frontmatter.

4. Do not present the agent mode table to the user, its purpose is to render files using templates.

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

## {agent.name}

ID: `{agent.id}`

Mission: {agent.mission}

# How to update this file and agent platform Links

- Use **update-agents** skill to update this agent modes index file and platform files for Opencode and Codex.
```

### Process for Updating Codex agent files

With the provided agent mode:

1. Identify the `metadata.codex` values from the agent skill file's frontmatter.
2. Generate the Codex `.toml` file using the template below.
3. Save to `.codex/agents/{name}.toml`.
4. Delete orphaned `.codex/agents/` files that do not correspond to an entry in the agent mode table.

#### Template for Codex agent files

```
name = "$AGENT_MODE"
description = "{agent-mission}"
model_reasoning_effort = "medium"
developer_instructions = """
This agent mode is defined by the following skills, in order:

1. [agent-$AGENT_MODE](../../.agents/skills/agent-$AGENT_MODE/SKILL.md)

When the user says Mandatory Reading read the skill files listed above.
"""
```

### Process for Updating Opencode Configuration

With the provided table of agent modes:

1. Use the `.agents/skills/update-agents/opencode-config.md` instructions with the agent modes table to generate a fresh `opencode.json` configuration file at the repository root.
2. For each agent mode, merge the `agent.opencode` values from the table into the corresponding agent entry in `opencode.json`.

## Commands

## Command: `Update Agents`

**Triggers:**

- When the user says `::update-agent-modes`.

**Process:**

1. Execute the **Process for Listing Available Modes** to generate a table of agent modes.
2. With the table of agent modes, execute the **Process for Updating the Agent Mode Index** to generate the index file.
3. With each agent mode in the table, execute the **Process for Updating Codex agent files**.
4. With all agents modes in the table, execute the **Process for Updating Opencode Configuration**.

---
name: update-agents
description: Use this skill to update the agent modes index file and platform files for Opencode and Codex.
---

# Skill: Update Agents

Updates **Agent Mode** index file and Agent Platform Files.

Use this skill to update the `.agents/skills/agents.md` so that it lists all available agent skills AND the platform agent files at `.opencode/agents/` and `.codex/agents/`.

## Allowed Agent Modes

CRITICAL RULE: If your context `<agent-mode>` is NOT set to one of the following **Agent Modes** you are NOT ALLOWED to use this skill:

- `assistant`

CRITICAL RULE: If you are NOT ALLOWED to use this skill, STOP and advise the user to switch to another agent mode first. List agent modes.

## Steps

The instructions for each step are provided below

1. Update Index
2. Update Platform Files

### 1. Update Index

1. List all directory names under `.agents/skills/`.
2. Filter out skills that DO NOT start with `agent-` as they are just regular skills.
3. Generate a table with the following columns:

- `<agent-mode>` - the `name` field of the skill file's frontmatter stripped of the `agent-` prefix.
- `<agent-name>` - the skill file's h1 heading `# Agent Mode: <agent-name>`.
- `<agent-mission>` - the `description` field of the skill file's frontmatter.

4. Create or update `.agents/skills/agents.md` using the following template.

#### Template

```
# Agent Modes

This file lists agent modes.

Agent modes are pre-loaded into an agent session, and although they are technically skills, they are rule-heavy instructions for operational mode, rather than for process execution.

Instructions on how to update this index can be found at the bottom of this file.

## User Commands

When the user says "list agents" present this list.

## <agent-name>

ID: `<agent-mode>`

Mission: <agent-mission>

---

# How to update this file and agent platform Links

- Use `update-agents` skill to update this agent modes index file and platform files for Opencode and Codex.
```

### 2. Update Platform files

Platform files are short markdown files that allow platforms such as `codex` or `opencode` to automatically recognise the agent modes.

1. Read all files matching `.agents/skills/agent-<name>/SKILL.md`.
2. Ignore platform agent files declared as `.codex/agents/<name>.toml` and `.opencode/agents/<name>.md`.
3. For each agent skill in the source of truth generate 2 new files using the Codex and Opencode templates below.
4. The values declared in the `## BACKMATTER` section of each source of truth agent skill file must be copied to the respective Codex `toml` and Opencode `md` files.
5. Save the platform tiles to `.codex/agents/<name>.toml` and `.opencode/agents/<name>.md`.
6. Delete platform agent files in both `.opencode/agents` and `.codex/agents` that do not correspond to an entry in the source fo truth.

### Template for Opencode Agent file

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

1. [agent-<agent-mode>](../../.agents/skills/agent-<agent-mode>/SKILL.md)

When the user says "mandatory reading" read the skill files listed above.
```

### Template for Codex agent files

```
name = "<agent-mode>"
description = "<agent-mission>"
model_reasoning_effort = "medium"
developer_instructions = """
This agent mode is defined by the following skills, in order:

1. [agent-<agent-mode>](../../.agents/skills/agent-<agent-mode>/SKILL.md)

When the user says "mandatory reading" read the skill files listed above.
"""
```

---
name: update-agents
description: Use this skill when updating agent platform files for .opencode and .codex.
---

# Skill: Update Agent Platform Files

Use this skill to update agent files in `.opencode/agents/` and `.codex/agents/` based on agent skills.

## Rules

- The description in the frontmatter/toml files must match verbatim the description in the SKILL.md.
- The agent platform files id MUST NOT include the `/agent-` prefix.
- The values declared in the `## BACKMATTER` section of the agent SKILL file must be copied to the respective Codex `toml` and Opencode `md` files.

## Update Process

1. List agent skills from `.agents/skills/agent-<name>/SKILL.md` (source of truth).
2. List agents declared as `.codex/agents/<name>.toml` and `.opencode/agents/<name>.md`.
3. For each agent skill in source of truth create or update both platform files.
4. Delete platform agent files in both `.opencode/agents` and `.codex/agents` that point to non-existing agent skill files.

## Full Example

### Example Agent file

```
---
name: agent-context-curator
description: Use this skill when creating, editing, or planning repository context files, agent instructions, skills, processes, or technical guidance.
---

# Agent Mode: Context Curator
```

### Example Codex agent file

```
---
description: Use this skill when creating, editing, or planning repository context files, agent instructions, skills, processes, or technical guidance.
mode: primary
reasoningEffort: medium
textVerbosity: low
color: '#ff6b6b'
top_p: 0.1
---

# Context Curator

This agent role is defined by the following skills, in order:

1. [agent-context-curator](../../.agents/skills/agent-context-curator/SKILL.md)

Follow those skill files as the source of truth.
The first skill is the personality skill. Later skills may add narrower workflows or domain constraints.
```

### Example Opencode agent file

```
name = "context-curator"
description = "Agent focused on editing, or planning repository context files, agent instructions, skills, processes, or technical guidance."
model_reasoning_effort = "medium"
developer_instructions = """
This agent role is defined by the following skills, in order:

1. .agents/skills/agent-context-curator/SKILL.md

Read and follow those skill files as the source of truth before acting.
The first skill is the personality skill. Later skills may add narrower workflows or domain constraints.
"""
```

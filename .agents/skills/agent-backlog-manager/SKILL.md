---
name: agent-backlog-manager
description: Use this skill to update tasks statuses, analyse dependencies, and keep backlog tidy.
---

# Agent Mode: Backlog Manager

> $AGENT_MODE: 'backlog-manager'

You help move files, update statuses, analyse dependencies and

## Required skills

- `rehash`

## Allowed Skills

- `todos`
- `write-task`
- `write-changelog`

CRITICAL RULE: Skills NOT listed in this file `## Required skills` or `## Allowed Skills` sections are forbidden to this agent. If the user requests to exercise a skill that is NOT ALLOWED, STOP and advise the user to switch to another agent mode first. List agent modes.

## Mandatory Reading

Read `.agents/domains/tasks/index.md`, if not yet in context – it contains definitions and rules that are essential to interpret the instructions on this file.

---

## BACKMATTER

IMPORTANT: IGNORE THIS SECTION UNLESS YOU ARE UPDATING AGENT LINKS

Values for `.codex/agents/<name>.toml`

```
model_reasoning_effort: "medium"
```

Values for `.opencode/agents/<name>.md`

```
mode: primary
reasoningEffort: low
textVerbosity: low
color: '#dbaeae'
top_p: 0.1
```

---
name: write-agent-files
description: Generic skill for writing agent file; prefer specialized agent-file-writing skills.
---

# Skill: Write Agent file (Generic)

Use this skill to modify

This is a generic task writing skill, prefer specialized skills.

## Allowed Agent Modes

CRITICAL RULE: If your context `$AGENT_MODE` is NOT set to one of the following **Agent Modes** you are NOT ALLOWED to use this skill:

- `context-curator`

CRITICAL RULE: If you are NOT ALLOWED to use this skill, STOP and advise the user to switch to another agent mode first. List agent modes.

## Mandatory Reading

Read `.agents/domains/_structured-contexts/index.md`, if not yet in context – it contains definitions and rules that are essential to interpret the instructions on this file.

## Rules for exploration

Make sure you have read the files under `## Mandatory Reading` in the concrete task writing skill.

- RULE: Obey the process and steps defined by the concrete task writing skill in use.
- RULE: When exploring, categorise context being gathered: intents (of the task), assumptions, facts, issues, questions, contraints.
- RULE: When reasoning, take extra care to address closed scope and confirmed facts as source of truth and immutable context.
- RULE: When reasoning, take extra care to address intentions, ideas, assumptions, and unresolved questions as unconfirmed, not trustworthy.

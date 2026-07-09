---
name: write-knowledge-files
description: Generic skill for writing knowledge file; prefer specialized agent-file-writing skills.
---

# Skill: Write Knowledge file (Generic)

Use this skill to modify files under `knowledge/` directories.

This is a generic knowledge writing skill, prefer specialized skills.

## Allowed Agent Modes

CRITICAL RULE: If your context `$AGENT_MODE` is NOT set to one of the following **Agent Modes** you are NOT ALLOWED to use this skill:

- `knowledge-curator`

CRITICAL RULE: If you are NOT ALLOWED to use this skill, STOP and advise the user to switch to another agent mode first. List agent modes.

## Mandatory Reading

Read `.agents/domains/knowledge/index.md`, if not yet in context, as it contains definitions and rules that are essential to interpret the instructions on this file.

## Rules for exploration

Make sure you have read the files under `## Mandatory Reading` in the concrete knowledge writing skill.

- RULE: Obey the process and steps defined by the concrete knowledge writing skill in use.
- RULE: When exploring, categorise context being gathered: intents (of the task), assumptions, facts, issues, questions, contraints.

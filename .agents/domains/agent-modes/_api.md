# Agent Modes Domain API

## Summary

The Agent Modes API provides definitions for understanding agent modes, mode files, and skills in the nocomply system. Consumers can read definitions of agent modes, mode files, and skills to understand how agents are configured and how skills are structured. Producers can define new agent modes and skills, and understand the relationships between modes, files, and skills.

## Hoisted

These items published to the domain listing (making them immediately discoverable by all agents) and also in both the consumer and producer API surfaces.

### Definitions

| Type | Name | Definition | Path | Status |
| ---- | ---- | ---------- | ---- | ------ |
| Definition | Agent Mode | A special set of instructions included in the system prompt. Available agent modes are listed in `.agents/skills/agents-modes.md`. The value of the current session agent mode is declared as $AGENT_MODE in the agent mode skill. | definitions/index.md | ✅ |
| Definition | Skill | A Structured Context File defining reusable commands that can be be invoked by users and agents, or directly from other skills or task instructions. Available skills are listed in `.agents/skills/agents-modes.md`. | definitions/index.md | ✅ |

## All

No items.

## Consumer

No items.

## Producer

No items.

# Agent Modes Consumer API

**Use Cases:** Reading definitions of agent modes, mode files, and skills.

**Provides:**

- Definitions

**Capabilities:**

- Understand what agent modes are and how they are declared.
- Understand the role of agent mode files.
- Understand what skills are and how they relate to agent modes.

## Mandatory Reading

::READ `definitions/index.md` - Essential definitions for agent modes and skills.

## API

### Definitions

| Type       | Name       | Definition                                                                                                                                                                                                                         | Path                 | Status |
| ---------- | ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------- | ------ |
| Definition | Agent Mode | A special set of instructions included in the system prompt. Available agent modes are listed in `.agents/skills/agents-modes.md`. The value of the current session agent mode is declared as $AGENT_MODE in the agent mode skill. | definitions/index.md | ✅     |
| Definition | Skill      | A Structured Context File defining reusable commands that can be be invoked by users and agents, or directly from other skills or task instructions. Available skills are listed in `.agents/skills/agents-modes.md`.              | definitions/index.md | ✅     |

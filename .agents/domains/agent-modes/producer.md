# Agent Modes Producer API

**Use Cases:** Defining new agent modes, creating agent mode files, and structuring skills.

**Provides:**

- Definitions

**Capabilities:**

- Define new agent modes and declare them in skill files.
- Create agent mode files with core instructions.
- Define and structure skills as reusable context.

## Mandatory Reading

::READ `definitions/index.md` - Essential definitions for agent modes and skills.

## API

### Definitions

| Type       | Name       | Definition                                                                                                                                                                                                                         | Path                 | Status |
| ---------- | ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------- | ------ |
| Definition | Agent Mode | A special set of instructions included in the system prompt. Available agent modes are listed in `.agents/skills/agents-modes.md`. The value of the current session agent mode is declared as $AGENT_MODE in the agent mode skill. | definitions/index.md | ✅     |
| Definition | Skill      | A Structured Context File defining reusable commands that can be be invoked by users and agents, or directly from other skills or task instructions. Available skills are listed in `.agents/skills/agents-modes.md`.              | definitions/index.md | ✅     |

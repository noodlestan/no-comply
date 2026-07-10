# Agent Modes Domain Index

**Use Cases:** Working with agents and their modes during a session.

**Provides:**

- Processes
- Commands

**Capabilities:**

- Work with agent modes files.

## Mandatory Reading

READ `.agents/domains/_structured-contexts/index.md` - base rules for working with all context files.

## Definition of "Agent Mode"

- **Agent Mode:** A special set of instructions included in the system prompt. Available agent modes are listed in `.agents/skills/agents-modes.md`. The value of the current session agent mode is declared as $AGENT_MODE in the agent mode skill. (#hoist)

## Definitions Related to "Agent Mode"

- **Agent Mode File:** The file containing the core set of instructions for the agent mode.

- **Skill:** A Structured Context File defining reusable commands that can be be invoked by users and agents, or directly from other skills or task instructions. Available skills are listed in `.agents/skills/agents-modes.md`. (#hoist)

<!-- WIP extract to domains/skill/index.md>

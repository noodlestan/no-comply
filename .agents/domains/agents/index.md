# Context Management

Defines common concepts and asserts rules for working with specific agent context files: CONTEXT.md, Agent Mode files and Skill files.

## Mandatory Reading

Agents that were requested to read this file as Mandatory Reading of agent modes, skills, or processes, MUST ALSO read the following files:

- `.agents/domains/_context/index.md` - base rules for working with all context files.

## Definitions

- **Agent Mode:** A special set of instructions included in the system prompt via a special skill file. Available agent modes are listed in `.agents/skills/agents.md`. The value of the current session agent mode is declared as $AGENT_MODE in the agent mode skill. (#hoist)
- **Skill:** A regular skill to be invoked by agent modes or referenced in other skills or task instructions. Available skills are listed in `.agents/skills/agents.md`. (#hoist)

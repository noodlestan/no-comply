# Plan Domain Definitions

## Definitions

### Definition of "Plan" (#hoist)

**Plan** – A structured, high-level, implementation plan with delegatable, self-contained, detailed instructions for sub-agents. (#hoist)

### Definitions Related to "Plan" (#all)

**Implementation Instructions** – Self-contained sub-instructions and knowledge references that equip the an agent to execute specific changes and operations in the codebase.

**Delegation Prompt** – Self-contained sub-agent instructions and knowledge references that equip the sub-agent to execute specific changes and operations in the codebase.

**Sub Agent Blocker** – A report presented by the sub-agent to the delegator agent when failing to execute the implementation instructions, with details of the issues and evidence of changes made, and build status, blockers, and feedback about the instructions.

**Sub Agent Report** – A report presented by the sub-agent to the delegator agent after WORKING the implementation instructions, with evidence of changes, commits, build status, and blockers in case of not

**Instruction Writing Mode** – An agent mode specialised in creating Implementation Instruction files for other agents. Analysis tasks requirements, specs and dependencies, gathers context and knowledge, and designs a complete solution, including the commit blueprints and delegation strategy.

**Plan Execution Mode** – One of `worker` (supervised by a user with optional user review after each commit) or `delegator` (works autonomously, delegating to sub-agents, with optional user review after each delegation).

**Instructions Delegation Mode** – An agent mode specialised in delegating Implementation Instructions to sub-agents, capturing Sub Agent Reports into files, and updating a plan file with status and links to reports.

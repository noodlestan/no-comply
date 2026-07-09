# Reference

This file lists work domains (tasks, knowledge, conventions, ...) and important definitions required to interpret skill files and instructions correctly (Agent Modes, Skill, Domain Reference File, Knowledge File).

## Definitions

- **Context Summary:** An extreme summarisation of a specific scope within the current session context. As defined by `rehash` skill and other skils that extend it. (#hoisted from Context Management)
- **Template:** A file used by a skill to generate other files. Example: `.agents/skills/write-component-task/component-task-template.md`. (#hoisted from Context Management)
- **Agent Mode:** A special set of instructions included in the system prompt via a special skill file. Available agent modes are listed in `.agents/skills/agents.md`. The value of the current session agent mode is declared as $AGENT_MODE in the agent mode skill. (#hoisted from Agent Context Management)
- **Skill:** A regular skill to be invoked by agent modes or referenced in other skills or task instructions. Available skills are listed in `.agents/skills/agents.md`. (#hoisted from Agent Context Management)
- **Conventions File**: rule heavy directives applied when planning, writing code, documentation, and other artefacs, and submitting work for review. (#hoisted from Conventions Management)
- **A Domain Reference File:** is an agent context file shared between related agent modes and skills providing key definitions for a domain (tasks, knowledge, ...). Domains are documented for agents under `.agents/domains/*.md`. (#hoisted from Domain Management)
- **Knowledge File:** Any markdown file inside a `knowledge/` directory and it contains information about the repository, its structure, its patterns, its conventions, and its processes. They are intended to be read by agents and humans alike. (#hoisted from Knowledge Management)
- **Knowledge Directory:** Any `knowledge/` directory, starting from the root of the repository, in namespace directories, in packages, or deeper in module directories. (#hoisted from Knowledge Management)
- **Task File:** A structured file defining a work item with no implementation details. (#hoisted from Task Management)
- **Task Attachment:** A file named similar to the task with content not permitted in the task file, such as implementation details or code snippets. (#hoisted from Task Management)
- **Task Specification:** A structured attachment file following a template defined by the active writing skill for capturing technical details of the task. (#hoisted from Task Management)
- **Plan File:** A structured, high level, implementation plan with source task files attached as links, defining the plan to delegate the task to sub-agents - detailed in attached implementation instrctions files - and tracking execution status and outcomes. (#hoisted from Plan Management/Execution)
- **Implementation Instruction Files:** Files attached to a plan file, containing a self-contained sub-agent prompt with detailed instructions and knowledge references, that equips the sub-agent to execute specific changes in the code base and prepare a commit request. (#hoisted from Plan Management/Execution)

## Domains

### [Context Management](_context/index.md)

Defines common concepts and asserts rules for working with all context files.

### [Agent Context Management](agents/index.md)

Defines common concepts and asserts rules for working with specific agent context files: CONTEXT.md, Agent Mode files and Skill files.

### [Backlog Management](backlog/index.md)

Defines common concepts and rules for working with task context files within a filesystem based backlog.

### [Changelog Management](changelog/index.md)

Defines common concepts and rules for working with task context files within a filesystem based backlog.

### [Conventions Management](conventions/index.md)

Defines common concepts and asserts rules for working with conventions files. A secial type of knowledge files that prescribes RULE based instructions to coding tasks.

### [Domain Management](domains/index.md)

Defines common concepts and asserts rules for working with domain context files (such as this one).

#### Rules for reading Domain Files

- IMPORTANT RULE: Agents MUST NOT read domain reference files unless listed under `## Mandatory Reading` sections or requested to do so by the user or a `::MANDATORY-READING` directive.

### [Knowledge Management](knowledge/index.md)

Defines common concepts and asserts rules for working with knowledge context files.

#### Rules for reading Knowledge Files

- IMPORTANT RULE: Agents MUST NOT read knowledge files unless listed under Mandatory Reading sections or requested to do so by the instructions or by the user.
- RULE: Agents MUST ALWAYS read the knowledge files prescribed under Mandatory Reading sections.
- RULE: Agents MUST NOT read `README.md` files as a source of knowledge.
- RULE: Agents MUST NOT `glob` to find knowledge files on their own initiative.
- RULE: Agents MUST NOT `grep` to bulk read knowledge files on their own initiative.

### [Plan Management/Execution](plans/index.md)

Defines common concepts and asserts rules for working with plan files and executing tasks in parallel.

### [Task Management](tasks/index.md)

Defines common concepts and asserts rules for working with task files and task attachment files.

---

# How to update this file and agent platform Links

- Use `update-domains` skill to update this index file.

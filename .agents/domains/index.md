# Reference

This file lists work domains (tasks, knowledge, conventions, ...) and important definitions required to interpret skill files and instructions correctly (Agent Modes, Skill, Domain Reference File, Knowledge File).

## Definitions

- **Context Summary:** An extreme summarisation of a specific scope within the current session context. As defined by `rehash` skill and other skils that extend it. (#hoisted from Context Management)
- **Template:** A file used by a skill to generate other files. Example: `.agents/skills/write-component-task/component-task-template.md` (#hoisted from Context Management)
- **Specification:** A structured file following a template defined by the active writing skill for capturing technical details of the task. (#hoisted from Context Management)
- **Agent Mode:** A special set of instructions included in the system prompt. Available agent modes are listed in `.agents/skills/agents.md` (#hoisted from Agent Context Management)
- **Skill:** A regular skill to be invoked by agent modes or referenced in other skills or task instructions. Available skills are listed in `.agents/skills/agents.md` (#hoisted from Agent Context Management)
- **Conventions File**: rule heavy directives applied when planning, writing code, documentation, and other artefacs, and submitting work for review (#hoisted from Conventions Management).
- **A Domain Reference File:** is an agent context file shared between related agent modes and skills providing key definitions for a domain (tasks, knowledge, ...). Domains are documented for agents under `.agents/domains/*.md`. (#hoisted from Domain Management)
- **Knowledge File:** Any markdown file inside a `knowledge/` directory and it contains information about the repository, its structure, its patterns, its conventions, and its processes. They are intended to be read by agents and humans alike. (#hoisted from Knowledge Management)
- **Knowledge Directory:** Any `knowledge/` directory, starting from the root of the repository, in namespace directories, in packages, or deeper in module directories. (#hoisted from Knowledge Management)
- **Task File:** A structured file defining a work item with no implementation details. (#hoisted from Task Management)
- **Task Attachment:** A file named similar to the task with content not permitted in the task file, such as implementation details or code snippets. (#hoisted from Task Management)

## Domains

### Context Management

Defines common concepts and asserts rules for working with all context files.

### Agent Context Management

Defines common concepts and asserts rules for working with specific agent context files: CONTEXT.md, Agent Mode files and Skill files.

### Backlog Management

Defines common concepts and rules for working with task context files within a filesystem based backlog.

### Changelog Management

Defines common concepts and rules for working with task context files within a filesystem based backlog.

### Conventions Management

Defines common concepts and asserts rules for working with conventions files. A secial type of knowledge files that prescribes RULE based instructions to coding tasks.

### Domain Management

Defines common concepts and asserts rules for working with domain context files (such as this one).

### Rules for reading Domain Files

- IMPORTANT RULE: Agents MUST NOT read domain reference files unless listed under "Mandatory Reading" sections or requested to do so by the user or the instructions in a skill or task. (#hoisted from Domain Management).
- RULE: Agents MUST ALWAYS read the domain reference files prescribed under "Mandatory Reading" sections. (#hoisted from Domain Management).

### Knowledge Management

Defines common concepts and asserts rules for working with knowledge context files.

### Rules for reading Knowledge Files

- IMPORTANT RULE: Agents MUST NOT read knowledge files unless listed under "Mandatory Reading" sections or requested to do so by the user or the instructions in a skill or task. (#hoisted from Knowledge Management).
- RULE: Agents MUST ALWAYS read the knowledge files prescribed under "Mandatory Reading" sections. (#hoisted from Knowledge Management).
- RULE: Should MUST NOT read `README.md` files as a source of knowledge. (#hoisted from Knowledge Management).
- RULE: Agents MUST NOT `glob` to find knowledge files on their own initiative. (#hoisted from Knowledge Management).
- RULE: Agents MUST NOT `grep` to bulk read knowledge files on their own initiative. (#hoisted from Knowledge Management).

### Task Management

Defines common concepts and asserts rules for working with task context files.

---

# How to update this file and agent platform Links

- Use `update-domains` skill to update this index file.

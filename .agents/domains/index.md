# Reference Index

This file lists work domains and important definitions required to interpret skill files and instructions correctly.

## Domains

- [\_structured-contexts](/.agents/domains/_structured-contexts/index.md) - Processes and commands for locating, reading, and interpreting all types of structured contexts.
- [agent-modes](/.agents/domains/agent-modes/index.md) - Processes and commands for working with agents and their modes during a session.
- [backlogs](/.agents/domains/backlogs/index.md) - Processes and commands for locating tasks in filesystem based backlogs and transitioning task state.
- [changelogs](/.agents/domains/changelogs/index.md) - Processes and commands for generating changelog entry candidates.
- [conventions](/.agents/domains/conventions/index.md) - Processes and commands for locating and reading convention sources and interpreting and applying their rules.
- [domains](/.agents/domains/domains/index.md) - Processes and commands for locating, reading, and interpreting all types of domain contexts.
- [plans](/.agents/domains/plans/index.md) - Processes and commands for reading and interpreting plans and interacting with plan attachments.
- [references](/.agents/domains/references/index.md) - Processes and commands for locating and reading reference sources, and interpreting and applying their knowledge and rules.
- [tasks](/.agents/domains/tasks/index.md) - Processes and commands for reading and interpreting tasks and interacting with task attachments.
- [templates](/.agents/domains/templates/index.md) - Processes and commands for rendering content using templates.

## Definitions

- **Agent Mode:** A special set of instructions included in the system prompt. Available agent modes are listed in `.agents/skills/agent-modes.md`. The value of the current session agent mode is declared as $AGENT_MODE in the agent mode skill. (#hoisted from `agent-modes`)
- **Skill:** A Structured Context File defining reusable commands that can be be invoked by users and agents, or directly from other skills or task instructions. Available skills are listed in `.agents/skills/agents-modes.md`. (#hoisted from `agent-modes`)
- **Reference:** A data source that provides information about the repository and the codebase, its structure, patterns, conventions, or processes. They are intended to be read by humans and agents alike. (#hoisted from `references`)
- **Reference File:** Markdown files inside of `reference/` directories that contain information about the repository and the codebase, its structure, patterns, conventions, and processes. They are intended to be read by humans and agents alike. (#hoisted from `references`)
- **References Directory:** Any `reference/` directory in the repository. Thse directories can exist at root of the repository, in namespace directories, in packages directories, or deeper in module directories. (#hoisted from `references`)
- **Plan:** A structured, high-level, implementation plan with delegatable, self-contained, detailed instructions for sub-agents. (#hoisted from `plans`)
- **Plan File:** A structured file outlining the plan, tracking source task attachments, implementation instruction attachments, execution status, and outcomes. (#hoisted from `plans`)
- **Implementation Instruction:** Self-contained sub-agent instructions and knowledge references that equip the sub-agent to execute specific changes and operations in the codebase. (#hoisted from `plans`)
- **Implementation Instruction Files:** Files attached to a plan file, containing the Implementation Instruction prompt and other supporting instructions required for the sub-agent to execute the assigned operations and report back to the requesting agent. (#hoisted from `plans`)
- **Task File:** A structured file defining a work item with no implementation details. (#hoisted from `tasks`)
- **Task Attachment:** A file named similar to the task with content not permitted in the task file, such as implementation details or code snippets. (#hoisted from `tasks`)
- **Task Specification:** A structured attachment file following a template defined by the active writing skill for capturing technical details of the task. (#hoisted from `tasks`)
- **Conventions File:** A type of Reference File that contains rules and directives applied when planning, writing code, documentation, and other artefacs, and submitting work for review. (#hoisted from `conventions`)
- **A Domain Reference File:** is an agent context file shared between related agent modes and skills providing key definitions for a domain (tasks, knowledge, ...). Existng Domains are indexed for discovery by agents at `.agents/domains/index.md`. (#hoisted from `update-domains`)

## Rules for `reading references`

- IMPORTANT RULE: Agents MUST NOT read reference files unless listed under Mandatory Reading sections or requested to do so by the instructions or by the user. (#hoisted from `references`)
- RULE: Agents MUST ALWAYS read the reference files prescribed under Mandatory Reading sections. (#hoisted from `references`)
- RULE: Agents MUST NOT read `README.md` files as a source of knowledge. (#hoisted from `references`)
- RULE: Agents MUST NOT `glob` to find reference files on their own initiative. (#hoisted from `references`)
- RULE: Agents MUST NOT `grep` to bulk read reference files on their own initiative. (#hoisted from `references`)

## How to update this file and agent platform Links

- Use **update-domains** skill to update this index file.

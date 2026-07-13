# Domains Listing

This file lists the available work domains and indexes each domain's primary definitions, concepts, and commands.

**IMPORTANT:** The concepts referenced by this index are essential for understanding and applying instructions correctly.

**RULE:** Agents MUST use the commands listed below as the primary source of truth for exploring context, locating knowledge, and executing authoritative processes.

**NOTE:** This index file lists only a subset of available commands and processes.

- IMPORTANT RULE: Agents processing this file MUST NOT read domain reference files unless listed under `## Mandatory Reading` sections or their instructions, or requested to do so by the user or a `::MANDATORY-READING` directive.
- RULE: Agents MAY However read domain reference if matching - with high confidence - a specific API listed here to the goal of their current planned actions.

## Domains

- [_structured-contexts](.agents/domains/_structured-contexts/) - Foundational definitions and formatting procedures for working with structured, reusable context in agent systems.
- [agent-modes](.agents/domains/agent-modes/) - Definitions for understanding agent modes, mode files, and skills in the nocomply system.
- [conventions](.agents/domains/conventions/) - Definitions and processes for managing project conventions applied during planning, coding, documentation, and review.
- [domains](.agents/domains/domains/) - Definitions, file structures, processes, and templates for working with bounded domain knowledge collections.
- [plans](.agents/domains/plans/) - Definitions, structures, file patterns, and templates for creating and executing high-level implementation plans.
- [references](.agents/domains/references/) - Definitions and processes for working with reference files about the repository, codebase, patterns, and conventions.
- [tasks](.agents/domains/tasks/) - Definitions, structures, files, and processes for working with task domain records.

## Definitions

| Type | Name | Definition | Source |
| ---- | ---- | ---------- | ------ |
| Definition | Agent Mode | A special set of instructions included in the system prompt. Available agent modes are listed in `.agents/skills/agents-modes.md`. The value of the current session agent mode is declared as $AGENT_MODE in the agent mode skill. | .agents/domains/agent-modes/definitions/index.md |
| Definition | Skill | A Structured Context File defining reusable commands that can be be invoked by users and agents, or directly from other skills or task instructions. Available skills are listed in `.agents/skills/agents-modes.md`. | .agents/domains/agent-modes/definitions/index.md |
| Definition | Conventions File | A type of Reference File that contains rules and directives applied when planning, writing code, documentation, and other artefacs, and submitting work for review. | .agents/domains/conventions/definitions/index.md |
| Definition | Conventions Draft | A proposal to add or modify existing conventions that surfaced from friction experienced during a task, review, or correction session. | .agents/domains/conventions/definitions/index.md |
| Definition | Plan | A structured, high-level, implementation plan with delegatable, self-contained, detailed instructions for sub-agents. | .agents/domains/plans/definitions/index.md |
| Definition | Reference | A data source that provides information about the repository and the codebase, its structure, patterns, conventions, or processes. They are intended to be read by humans and agents alike. | .agents/domains/references/definitions/index.md |
| Definition | Reference File | Markdown files inside of `reference/` directories that contain information about the repository and the codebase, its structure, patterns, conventions, and processes. They are intended to be read by humans and agents alike. | .agents/domains/references/definitions/index.md |
| Definition | References Directory | Any `reference/` directory in the repository. These directories can exist at root of the repository, in namespace directories, in packages directories, or deeper in module directories. | .agents/domains/references/definitions/index.md |
| Definition | Task | A structured domain record, defining a work item, goal, scope, requirements, constraints, and expected outcome. | .agents/domains/tasks/definitions/index.md |

## Structures

| Type | Name | Fields | Source |
| ---- | ---- | ------ | ------ |
| Structure | Plan Record Identity | id, status, tasks, summary | .agents/domains/plans/structures/plan_structure.md |

## Commands

| Type | Name | Purpose | Input | Output | Source |
| ---- | ---- | ------- | ----- | ------ | ------ |

## Processes

| Type | Name | Purpose | Input | Output | Source |
| ---- | ---- | ------- | ----- | ------ | ------ |
| Process | Process for writing Conventions Drafts | Draft convention proposals from friction. | friction notes | conventions draft | .agents/domains/conventions/processes/index.md |
| Process | Process for Reading References Files | Rules for agents reading reference files. | reference file path | reference content | .agents/domains/references/processes/index.md |
| Process | Process for Generating Task Titles | Compact a task summary into a stable, scoped task title. | task summary | task title | .agents/domains/tasks/processes/index.md |
| Process | Process for Generating Task IDs | Generate a kebab-case task identifier from a normalised title. | task title | task id | .agents/domains/tasks/processes/index.md |
| Process | Process for Inferring Task IDs | Infer task IDs from context. | — | — | .agents/domains/tasks/processes/index.md |
| Process | Process for Naming Task Attachment Files | Name attachment files after the task file with a `__{type}` suffix. | attachment type | attachment filename | .agents/domains/tasks/processes/index.md |
| Process | Process for Reading Task Files | Read and validate a task file against its template. | task file | task record | .agents/domains/tasks/processes/index.md |
| Process | Process for Reading Specification Attachments | Read and validate a task specification attachment against its template. | spec attachment | spec content | .agents/domains/tasks/processes/index.md |

## Templates

| Type | Name | Purpose | Input | File | Source |
| ---- | ---- | ------- | ----- | ---- | ------ |

## Formatters

| Type | Name | Purpose | Input | Output | Source |
| ---- | ---- | ------- | ----- | ------ | ------ |
| Formatter | Formatter for Skill References | A formatted skill invocation reference. | summary | validated entity | .agents/domains/_structured-contexts/formatters/references.md |
| Formatter | Formatter for Process References | A formatted process invocation reference. | process | formatted reference | .agents/domains/_structured-contexts/formatters/references.md |
| Formatter | Formatter for Command References | A formatted command invocation reference. | summary | validated entity | .agents/domains/_structured-contexts/formatters/references.md |
| Formatter | Formatter for Template References | A formatted template invocation reference. | summary | validated entity | .agents/domains/_structured-contexts/formatters/references.md |

## Other

| Type | Name | Purpose | Description | Source |
| ---- | ---- | ------- | ----------- | ------ |

## How to update this file

- Use **update-domains** skill to update this file.

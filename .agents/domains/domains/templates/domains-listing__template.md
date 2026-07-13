# Domains Listing Template

TEMPLATE DIRECTIVE: Replace the H1 by `# Domains Listing`

This file lists the available work domains and indexes each domain's primary definitions, concepts, and commands.

**IMPORTANT:** The concepts referenced by this index are essential for understanding and applying instructions correctly.

**RULE:** Agents MUST use the commands listed below as the primary source of truth for exploring context, locating knowledge, and executing authoritative processes.

**NOTE:** This index file lists only a subset of available commands and processes.

- IMPORTANT RULE: Agents processing this file MUST NOT read domain reference files unless listed under `## Mandatory Reading` sections or their instructions, or requested to do so by the user or a `::MANDATORY-READING` directive.
- RULE: Agents MAY However read domain reference if matching - with high confidence - a specific API listed here to the goal of their current planned actions.

## Domains

TEMPLATE DIRECTIVE: Include a bullet point per domain using this pattern `- [{domain name}](.agents/domains/{domain name}/) - {domain.description}`

TEMPLATE EXAMPLE: - [Plans](/.agents/domains/plans/index.md) - Defining, structuring, and tracking implementation plans with delegatable instructions.

## Definitions

TEMPLATE DIRECTIVE: List items of type `Definition` hoisted from all domains, using the table format with columns: Type, Name, Definition, Source.

| Type | Name | Definition | Source |
| ---- | ---- | ---------- | ------ |
| {item.type} | {item.name} | {item.definition} | .agents/domains/{domain}/{item.file-path} |

TEMPLATE EXAMPLE:

| Type | Name | Definition | Source |
| ---- | ---- | ---------- | ------ |
| Definition | Plan | A structured, high-level, implementation plan with delegatable, self-contained, detailed instructions for sub-agents. | .agents/domains/plans/definitions/index.md |

## Structures

TEMPLATE DIRECTIVE: List items of type `Structure` hoisted from all domains, using the table format with columns: Type, Name, Fields, Source.

| Type | Name | Fields | Source |
| ---- | ---- | ------ | ------ |
| {item.type} | {item.name} | {item.fields} | .agents/domains/{domain}/{item.file-path} |

TEMPLATE EXAMPLE:

| Type | Name | Fields | Source |
| ---- | ---- | ------ | ------ |
| Structure | Plan Record Fields | id, status, tasks, summary | .agents/domains/plans/structures/plan_structure.md |

## Commands

TEMPLATE DIRECTIVE: List items of type `Command` hoisted from all domains, using the table format with columns: Type, Name, Purpose, Input, Output, Source.

| Type | Name | Purpose | Input | Output | Source |
| ---- | ---- | ------- | ----- | ------ | ------ |
| {item.type} | {item.name} | {item.purpose} | {item.input} | {item.output} | .agents/domains/{domain}/{item.file-path} |

TEMPLATE EXAMPLE:

| Type | Name | Purpose | Input | Output | Source |
| ---- | ---- | ------- | ----- | ------ | ------ |
| Command | Read Task(s) | Read a task file and identify relevant information | task id | task data | .agents/domains/tasks/commands/index.md |

## Processes

TEMPLATE DIRECTIVE: List items of type `Process` hoisted from all domains, using the table format with columns: Type, Name, Purpose, Input, Output, Source.

| Type | Name | Purpose | Input | Output | Source |
| ---- | ---- | ------- | ----- | ------ | ------ |
| {item.type} | {item.name} | {item.purpose} | {item.input} | {item.output} | .agents/domains/{domain}/{item.file-path} |

TEMPLATE EXAMPLE:

| Type | Name | Purpose | Input | Output | Source |
| ---- | ---- | ------- | ----- | ------ | ------ |
| Process | Process for Extracting Domain API | Given a domain, scan the domain files and extract the domain API | domain | domain API documentation | .agents/domains/domains/processes/index.md |

## Templates

TEMPLATE DIRECTIVE: List items of type `Template` hoisted from all domains, using the table format with columns: Type, Name, Purpose, Input, File, Source.

| Type | Name | Purpose | Input | File | Source |
| ---- | ---- | ------- | ----- | ---- | ------ |
| {item.type} | {item.name} | {item.purpose} | {item.input} | {item.file} | .agents/domains/{domain}/{item.file-path} |

TEMPLATE EXAMPLE:

| Type | Name | Purpose | Input | File | Source |
| ---- | ---- | ------- | ----- | ---- | ------ |
| Template | Plan Template | Defines the structure of a plan file | plan data | .agents/domains/plans/templates/plan__template.md | .agents/domains/plans/files/index.md |

## Formatters

TEMPLATE DIRECTIVE: List items of type `Formatter` hoisted from all domains, using the table format with columns: Type, Name, Purpose, Input, Output, Source.

| Type | Name | Purpose | Input | Output | Source |
| ---- | ---- | ------- | ----- | ------ | ------ |
| {item.type} | {item.name} | {item.purpose} | {item.input} | {item.output} | .agents/domains/{domain}/{item.file-path} |

TEMPLATE EXAMPLE:

| Type | Name | Purpose | Input | Output | Source |
| ---- | ---- | ------- | ----- | ------ | ------ |
| Formatter | Skill References | Format references to skills | skill id and outcome | formatted skill reference | .agents/domains/_structured-contexts/formatters/references.md |

## Other

TEMPLATE DIRECTIVE: List items of type `Other` hoisted from all domains, using the table format with columns: Type, Name, Purpose, Description, Source.

| Type | Name | Purpose | Description | Source |
| ---- | ---- | ------- | ----------- | ------ |
| {item.type} | {item.name} | {item.purpose} | {item.description} | .agents/domains/{domain}/{item.file-path} |

TEMPLATE EXAMPLE:

| Type | Name | Purpose | Description | Source |
| ---- | ---- | ------- | ----------- | ------ |
| Status | Plan Status | Current state of the plan | PREPARING, READY, WORKING, BLOCKED, REVIEW, DONE | .agents/domains/plans/structures/plan_structure.md |

## How to update this file

- Use **update-domains** skill to update this file.

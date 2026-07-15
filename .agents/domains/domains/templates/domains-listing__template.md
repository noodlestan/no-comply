# Domains Listing Template

TEMPLATE DIRECTIVE: Replace the H1 by `# Domains Listing`

This file lists the available work domains and makes their primary resources (definitions, structures, commands, processes, templates, files, ...) available to all agents.

**IMPORTANT:** The concepts referenced by this index are essential for understanding and applying instructions correctly.

**RULE:** Agents MUST use the commands listed below as the primary source of truth for exploring context, locating knowledge, and executing authoritative processes.

**NOTE:** This index file lists only a subset of available commands and processes.

- IMPORTANT RULE: Agents processing this file MUST NOT read domain reference files unless listed under `## Mandatory Reading` sections or their instructions, or requested to do so by the user or a `::MANDATORY-READING` directive.
- RULE: Agents MAY However read domain reference if matching - with high confidence - a specific API listed here to the goal of their current planned actions.

## Domains

TEMPLATE DIRECTIVE: Include a bullet point per domain using this pattern `- [{domain.name}](.agents/domains/{domain.id}/) - {domain.description}`

TEMPLATE EXAMPLE: - [Plans](/.agents/domains/plans/index.md) - Defining, structuring, and tracking implementation plans with delegatable instructions.

## Resources

TEMPLATE DIRECTIVE: In each of the following sections (differente types of primitives), follow the directives in the section to build a table of `domain.hoisted` content (items).

TEMPLATE DIRECTIVE: (applies to all items rendered in any of the below tables) Check if the item as a `(#broken)` or `(#wip)` tag. If it does set the `item.emoji` to 🟥 or 🚧 respectively. If it doesn't, set it to ✅.

### Definitions

TEMPLATE DIRECTIVE: List items of type `Definition` hoisted from all domains, using the following table format and the example below it as a reference.

| Type        | Name        | Definition        | Source             | Status  |
| ----------- | ----------- | ----------------- | ------------------ | ------- |
| {item.type} | {item.name} | {item.definition} | {item.source-path} | {emoji} |

TEMPLATE EXAMPLE: | Definition | Plan | A structured, high-level, implementation plan with delegatable, self-contained, detailed instructions for sub-agents. | `definitions/index.md` | ✅ |

### Structures

TEMPLATE DIRECTIVE: List items of type `Structure` hoisted from all domains, using the following table format and the example below it as a reference.

| Type        | Name        | Purpose        | Fields              | Source             | Status  |
| ----------- | ----------- | -------------- | ------------------- | ------------------ | ------- |
| {item.type} | {item.name} | {item.purpose} | {infer item fields} | {item.source-path} | {emoji} |

TEMPLATE EXAMPLE: | Structure | Plan Record Fields | id, status, tasks, summary | `structures/plan__structure.md` | ✅ |

### Commands

| Type        | Name        | Purpose        | Input        | Triggers           | Source             | Status  |
| ----------- | ----------- | -------------- | ------------ | ------------------ | ------------------ | ------- |
| {item.type} | {item.name} | {item.purpose} | {item.input} | {item.triggers[0]} | {item.source-path} | {emoji} |

TEMPLATE EXAMPLE: | Command | Update Domain (domain) | Generate `consumer.md` and `producer.md` API files, and the `_api.md` table of contents. | `domain` | `update domain {domain}`| `commands/update-domain.md` | ✅ |

### Processes

TEMPLATE DIRECTIVE: List items of type `Process` hoisted from all domains, using the following table format and the example below it as a reference.

| Type        | Name        | Purpose        | Input        | Output        | Source             | Status  |
| ----------- | ----------- | -------------- | ------------ | ------------- | ------------------ | ------- |
| {item.type} | {item.name} | {item.purpose} | {item.input} | {item.output} | {item.source-path} | {emoji} |

TEMPLATE EXAMPLE: | Process | Process for Generating Task Titles | Standardises task titles | `title` or `context` | `title` (standardized) | `processes/index.md` | ✅ |

### Files

| Type        | Name        | Purpose        | Pattern               | Template        | Source             | Status  |
| ----------- | ----------- | -------------- | --------------------- | --------------- | ------------------ | ------- |
| {item.type} | {item.name} | {item.purpose} | {item.naming-pattern} | {item.template} | {item.source-path} | {emoji} |

TEMPLATE EXAMPLE: | File | Plan File | A structured file outlining the plan, identifying the source tasks and specs | `path/plan-{plan.id}/plan.md` | `.agents/domains/plans/templates/plan__template.md` | `files/index.md` | ✅ |

### Templates

TEMPLATE DIRECTIVE: List items of type `Template` hoisted from all domains, using the following table format and the example below it as a reference.

| Type        | Name        | Purpose        | Input        | File        | Source             | Status  |
| ----------- | ----------- | -------------- | ------------ | ----------- | ------------------ | ------- |
| {item.type} | {item.name} | {item.purpose} | {item.input} | {item.file} | {item.source-path} | {emoji} |

TEMPLATE EXAMPLE: | Template | Plan Template | Defines the structure of a plan file | plan data | `.agents/domains/plans/templates/plan__template.md` | `files/index.md` | ✅ |

### Other

TEMPLATE DIRECTIVE: List items of type `Other` hoisted from all domains, using the following table format and the example below it as a reference.

| Type        | Name        | Purpose              | Description              | Source             | Status  |
| ----------- | ----------- | -------------------- | ------------------------ | ------------------ | ------- |
| {item.type} | {item.name} | {infer item.purpose} | {infer item.description} | {item.source-path} | {emoji} |

## How to update this file

- Use **update-domains** skill to update this file.

# Context Management

Defines common concepts and asserts rules for working with all context files.

## Definitions

- **Types of Context Files**:
  - Domain files - described in `.agents/domains/domains/index.md`
  - AGENTS.md, Agent Modes and Skill files - described in `.agents/domains/agents/index.md`
  - Changelog - described in `.agents/domains/changelog/index.md`
  - Backlog - described in `.agents/domains/backlog/index.md`
  - Task files - described in `.agents/domains/tasks/index.md`

Besides these there are 2 special types of files which work as templates for

- **Context Summary:** An extreme summarisation of a specific scope within the current session context. As defined by `rehash` skill and other skils that extend it. (#hoist)
- **Template:** A file used by a skill to generate other files. Example: `.agents/skills/write-component-task/component-task-template.md` (#hoist)
- **Specification:** A structured file following a template defined by the active writing skill for capturing technical details of the task. (#hoist)

## Rules For Working with Templates

- RULE: always follow the **Template:** for the file type being edited.
- CRITICAL RULE: if you can not identify the **Template:** unambigiously, STOP ask the user.
- RULE: do not attempt to localte **Template File** on your own.

## Rules For Working with Specifications

- RULE: do not use tables unless requested.
- RULE: do not use diagrams unless requested.

## Rules For Writing Context Files

Applies to skills, agent definitions, processes, templates and other agent-facing instruction files.

- RULE: keep content concise and scannable.
- RULE: prefer descriptions over explanations.
- RULE: avoid qualifying adjectives such as "completely".
- RULE: avoid pedantic or overstated claims.
- RULE: do not use filesystem diagrams unless requested.

## Rules for Working With Context Files Templates

- RULE: Obey any active template exactly when a template is prescribed by the concrete task writing skill, or otherwise provided by the user.
- RULE: Use headings, short paragraphs, and terse bullet points.
- RULE: Do not include tables or diagrams.
- RULE: Use tables only if prescribed by the template.
- RULE: Do not include examples, sample code, or empty blocks from templates.

## Rules For Writing Rules in Context Files

- RULE: Always attempt to group rules under a `## Rules for ...` heading.
- RULE: state rules explicitly.
- RULE: use terse, direct, imperative language.
- RULE: include only enforceable instructions.
- RULE: exceptions are always a separate rule.

## Rules for Saving Task Files

- RULE: Obey explicit naming and save-location instructions from the user, repo, or specialized skill.
- RULE: Do not invent a save location when none is specified.

# Structured Contexts Domain Index

**Use Cases:** Locating, reading, and interpreting all types of structured contexts.

**Provides:**

- Processes
- Commands

**Capabilities:**

- Work with structured contexts files.

## Definition of "Structured Context"

**Structured Context:** Information provided to an agent to define and guide its execution, organised by domain in top-level resources (Examples: `Skill`, `Backlog`, `Task`) and granular elements contained within those resources (Examples: `Rule`, `Process`, `Command`).

## Definitions Related to "Structured Context"

**Context Type:** A classification of structured contexts that share a common purpose, structure, and characteristics. Each Domain Index File lists every context type defined by the domain, together with its role, filename pattern(s), and related documentation.

**Context File:** A file that contains structured context of a top-level resource type. The template and filename pattern(s) for each context type are defined in its Domain Index File. Examples: `AGENTS.md` for root file, `.agents/skills/{skill.id}/SKILL.md` for skill files as, and `{task.id}/task__spec__{name}.md` for task specification files.

## Rules For Writing Context Files

Applies to skills, agent definitions, processes, templates and other agent-facing instruction files.

- RULE: keep content concise and scannable.
- RULE: prefer descriptions over explanations.
- RULE: avoid qualifying adjectives such as "completely".
- RULE: avoid pedantic or overstated claims.
- RULE: do not use filesystem diagrams unless requested.

## Rules for Working With Context Files Templates

- RULE: Obey any active template exactly when a template is prescribed by the skill or otherwise provided by the user.
- RULE: Use headings, short paragraphs, and terse bullet points.
- RULE: Do not include tables or diagrams.
- RULE: Use tables only if prescribed by the template.
- RULE: Do not include examples, sample code, or empty blocks from templates.

# Domains Definitions

## Definitions

## Definition of "Domain" (#all)

**Domain:** A bounded collection of context knowledge and processes related to a specific subject. It provides a consistent foundation for agents to read, generate, and curate domain knowledge. (#wip)

## Definitions Related to "Domain"

**Domain API documentation** — a structured representation of a domain API containing: `table-of-contents`, `consumer-api-docs`, and `producer-api-docs`.

**Domain Producer:** An agent, a skill, a process, or a specific instruction that generates context and write files related to a knowledge domain.

**Domain Producer Files:** The entry point for domain producers, providing them with shared definitions and processes for generating content, naming files, using templates, and maintaining domain knowledge consistently. Example: `.agents/domains/domains/producer.md`.

**Domain Consumer:** An agent, a skill, a process, or a specific instruction that consumes context or reads files related to a knowledge domain.

**Domain Index Files:** The entry point for domain consumers, providing them with shared definitions and processes for locating, reading, interpreting, and applying domain knowledge correctly. Example: `.agents/domains/domains/index.md`.

**Domain Record:** A structured representation of a domain entity instance or one of its constituent elements. Examples of top-level entities include Task, Plan, Delegation. Examples of constituent elements include Specifications, Commits, Feedback.

**Record Structure:** The definition of a domain record and its shape and rules. Example: A task has an id, name, summary, scope, specifications, and follow ups.

**Record File:** A file that contains structured context of a top-level resource type. The template and filename pattern(s) for each context type are defined in its Domain Index File. Examples: `AGENTS.md` for root file, `.agents/skills/{skill.id}/SKILL.md` for skill files, and `{task.id}/task__spec__{name}.md` for task specification files.

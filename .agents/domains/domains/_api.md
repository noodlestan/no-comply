# Domains API

## Mandatory Reading (#all)

READ `.agents/domains/_structured-contexts/producer.md` - base rules for working with all context files.

## Definitions

### Definition of "Domain" (#consumer) (#producer)

**Domain:** A bounded collection of context knowledge and processes related to a specific subject. It provides a consistent foundation for agents to read, generate, and curate domain knowledge.

### Definitions Related to "Domain" (#producer)

**Domain API Outline:** A structured representation of a domain API for a given scope, consisting of the extracted API `surface` and a generated `summary`.

**Domain Producer:** An agent, a skill, a process, or a specific instruction that generates context and write files related to a knowledge domain.

**Domain Producer Files:** The entry point for domain producers, providing them with shared definitions and processes for generating content, naming files, using templates, and maintaining domain knowledge consistently. Example: `.agents/domains/domains/producer.md` (this file).

**Domain Consumer:** An agent, a skill, a process, or a specific instruction that consumes context or reads files related to a knowldege domain.

**Domain Index Files:** The entry point for domain consumers, providing them with shared definitions and processes for locating, reading, interpreting, and applying domain knowledge correctly. Example: `.agents/domains/domains/index.md` (this file).

**Domain Record:** A structured representation of a domain entity or one of its constituent elements. Examples of top-level entities include Task, Plan, Delegation. Examples of constituent elements include Specifications, Commits, Feedback.

**Record Structure:** The definition of a domain record and its shape and rules. Example: A task has an id, name, summary, scope, specifications, and follow ups.

**Record File:** A file that contains structured context of a top-level resource type. The template and filename pattern(s) for each context type are defined in its Domain Index File. Examples: `AGENTS.md` for root file, `.agents/skills/{skill.id}/SKILL.md` for skill files, and `{task.id}/task__spec__{name}.md` for task specification files.

## Types of Files Related to Domains (#consumer) (#producer)

Each domain exposes up to 3 files at its root:

### Domain Index File

These files declare definitions, processes and commands for all agents working with data of this domain.

There is only one index file per domain and is located at `.agents/domains/{domain-name}/index.md`.

Example: `.agents/domains/domains/index.md` (this file).

### Domain Producer File

These files declare definitions, processes and commands for all agents that generate records pertaining to this domain.

There is only one producer file per domain and is located at `.agents/domains/{domain-name}/producer.md`.

Example: `.agents/domains/domains/producer.md` (this file).

### Domain Consumer File

These files declare definitions, processes and commands for all agents that read structured records from this domain.

There is only one curator file per domain and is located at `.agents/domains/{domain-name}/curator.md`.

Example: `.agents/domains/domains/curator.md` (this file).

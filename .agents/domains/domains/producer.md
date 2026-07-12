# Domains Management

**Use Cases:** Generating, validating, and improving domain related files.

**Provides:**

- Processes
- Commands
- Templates

**Capabilities:**

- Generating domain listings.

## Mandatory Reading

READ `.agents/domains/_structured-contexts/producer.md` - base rules for working with all context files.

## Definitions

**Domain Producer:** An agent, a skill, a process, or a specific instruction that generates context and write files related to a knowledge domain.

**Domain Producer Files:** The entry point for domain producers, providing them with shared definitions and processes for generating and curating content, naming files, applying templates, and maintaining domain knowledge consistently. Example: `.agents/domains/domains/producer.md` (this file).

## Types of Files Related to Domains Management

### Domain Management File

These files only exist in `.agents/domains/{domain-name}/producer.md`.

Example: `.agents/domains/{domain-name}/producer.md` (this file).

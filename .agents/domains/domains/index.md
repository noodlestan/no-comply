# Domain Management

Defines common concepts and asserts rules for working with domain context files (such as this one).

## Mandatory Reading

Agents that were requested to read this file through a `::MANDATORY-READING` directive MUST ALSO read the following files:

- `.agents/domains/_context/index.md` - base rules for working with all context files.

## Domain Management Definitions

- **A Domain Reference File:** is an agent context file shared between related agent modes and skills providing key definitions for a domain (tasks, knowledge, ...). Domains are documented for agents under `.agents/domains/*.md`. (#hoist)

## Rules for reading Domain Files

- IMPORTANT RULE: Agents MUST NOT read domain reference files unless listed under `## Mandatory Reading` sections or requested to do so by the user or a `::MANDATORY-READING` directive. (#hoist).

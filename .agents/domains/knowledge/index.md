# Knowledge Management

Defines common concepts and asserts rules for working with knowledge context files.

## Mandatory Reading

Agents that were requested to read this file as "Mandatory Reading" of agent modes, skills, or processes, MUST ALSO read the following files:

- `.agents/domains/_context/index.md` - base rules for working with all context files.

## Domain Management Definitions

- **Knowledge File:** Any markdown file inside a `knowledge/` directory and it contains information about the repository, its structure, its patterns, its conventions, and its processes. They are intended to be read by agents and humans alike. (#hoist)
- **Knowledge Directory:** Any `knowledge/` directory, starting from the root of the repository, in namespace directories, in packages, or deeper in module directories. (#hoist)
- **Patterns File**: description dense directives heavy applied during analysis, design, planning, and reviewing phases.

## Example of Knowledge Directory layout.

$WORKSAPACE (no-comply/)

```
<namespace>/lib/<package>/knowledge/
├── conventions/ (typescript, html, ...)
├── patterns/ (components, mixins, ...)
├── glossary.md
├── architecture.md
└── ...
```

## Rules for reading Knowledge Files

- IMPORTANT RULE: Agents MUST NOT read knowledge files unless listed under "Mandatory Reading" sections or requested to do so by the user or the instructions in a skill or task. (#hoist).
- RULE: Agents MUST ALWAYS read the knowledge files prescribed under "Mandatory Reading" sections. (#hoist).
- RULE: Should MUST NOT read `README.md` files as a source of knowledge. (#hoist).
- RULE: Agents MUST NOT `glob` to find knowledge files on their own initiative. (#hoist).
- RULE: Agents MUST NOT `grep` to bulk read knowledge files on their own initiative. (#hoist).

## Rules for Writing Knowledge Files

Applies to architecture, tools, conventions, and similar technical documentation.

- RULE: keep wording factual and restrained.
- RULE: prefer concise descriptions of structure, behavior, and conventions.
- RULE: avoid explanation unless it materially helps execution.

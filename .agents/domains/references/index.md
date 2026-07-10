# References Domain Index

**Use Cases:** Locating and reading reference sources, and interpreting and applying their knowledge and rules.

**Provides:**

- Processes
- Commands

**Capabilities:**

- Discover references (patterns and conventions) that are relevant to the current context.
- Interpret references.
- Generate reference proposals.

## Definition of "Reference"

- **Reference:** A data source that provides information about the repository and the codebase, its structure, patterns, conventions, or processes. They are intended to be read by humans and agents alike. (#hoist)

## Definitions Related to "Reference"

- **Reference File:** Markdown files inside of `reference/` directories that contain information about the repository and the codebase, its structure, patterns, conventions, and processes. They are intended to be read by humans and agents alike. (#hoist)
- **References Directory:** Any `reference/` directory in the repository. Thse directories can exist at root of the repository, in namespace directories, in packages directories, or deeper in module directories. (#hoist)
- **Patterns File**: A reference file inside a `reference/patterns/` directoty that is focused on definitions and carachterisations of codebase patterns and is applied by humans and agents to interepret the existing codebase, designing solutions, and reviewing contributions.
- **Conventions File**: A reference file inside a `referencess/conventions/` directory that is focused on defining rules that must be applied by humans and agents that are generating source code.

<!-- WIP hoist less rules, expose more process and commands -->

**Example of references directory and typicall contents:**

```
{namespace}/lib/{package}/reference/
├── conventions/
│   ├── typescript.md
│   ├── css.md
│   └── ...
├── patterns/
│   ├── components.md
│   ├── mixins.md
│   └── ...
├── glossary.md
├── architecture.md
└── ...
```

<!-- WIP types of reference files -->

## Rules for Reading References Files

<!-- WIP convert to Process for Reading References Files
, no need to hoist rules -->

- IMPORTANT RULE: Agents MUST NOT read reference files unless listed under Mandatory Reading sections or requested to do so by the instructions or by the user. (#hoist).
- RULE: Agents MUST ALWAYS read the reference files prescribed under Mandatory Reading sections. (#hoist).
- RULE: Agents MUST NOT read `README.md` files as a source of knowledge. (#hoist).
- RULE: Agents MUST NOT `glob` to find reference files on their own initiative. (#hoist).
- RULE: Agents MUST NOT `grep` to bulk read reference files on their own initiative. (#hoist).

## Processes

### Process for Writing References Files

- RULE: keep wording factual and restrained.
- RULE: prefer concise descriptions of structure, behavior, and conventions.
- RULE: avoid explanation unless it materially helps execution.

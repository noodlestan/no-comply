# References Producer API

**Use Cases:** Creating new reference files, defining patterns and conventions, and writing reference content.

**Provides:**

- Definitions
- Processes

**Capabilities:**

- Define new reference files, patterns, and conventions.
- Write reference files following established rules.
- Read reference files following established rules.

## Mandatory Reading

READ `definitions/index.md` - Essential definitions for references, reference files, and directories.

## API

### Definitions

| Type | Name | Definition | Path | Status |
| ---- | ---- | ---------- | ---- | ------ |
| Definition | Reference | A data source that provides information about the repository and the codebase, its structure, patterns, conventions, or processes. They are intended to be read by humans and agents alike. | definitions/index.md | ✅ |
| Definition | Reference File | Markdown files inside of `reference/` directories that contain information about the repository and the codebase, its structure, patterns, conventions, and processes. They are intended to be read by humans and agents alike. | definitions/index.md | ✅ |
| Definition | References Directory | Any `reference/` directory in the repository. These directories can exist at root of the repository, in namespace directories, in packages directories, or deeper in module directories. | definitions/index.md | ✅ |
| Definition | Patterns File | A reference file inside a `reference/patterns/` directory that is focused on definitions and characterisations of codebase patterns and is applied by humans and agents to interpret the existing codebase, designing solutions, and reviewing contributions. | definitions/index.md | ✅ |
| Definition | Conventions File | A reference file inside a `references/conventions/` directory that is focused on defining rules that must be applied by humans and agents that are generating source code. | definitions/index.md | ✅ |

### Processes

| Type | Name | Purpose | Input | Output | Path | Status |
| ---- | ---- | ------- | ----- | ------ | ---- | ------ |
| Process | Process for Writing References Files | Rules for writing reference files. | reference content | reference file | processes/index.md | 🚧 |
| Process | Process for Reading References Files | Rules for agents reading reference files. | reference file path | reference content | processes/index.md | 🚧 |

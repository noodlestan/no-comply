# References Consumer API

**Use Cases:** Reading definitions of references, reference files, and directories, and understanding rules for reading reference files.

**Provides:**

- Definitions
- Processes

**Capabilities:**

- Understand what references are and how they are structured.
- Understand the rules for reading reference files.

## Mandatory Reading

::READ `definitions/index.md` - Essential definitions for references, reference files, and directories.

## API

### Definitions

| Type       | Name                 | Definition                                                                                                                                                                                                                      | Path                 | Status |
| ---------- | -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------- | ------ |
| Definition | Reference            | A data source that provides information about the repository and the codebase, its structure, patterns, conventions, or processes. They are intended to be read by humans and agents alike.                                     | definitions/index.md | ✅     |
| Definition | Reference File       | Markdown files inside of `reference/` directories that contain information about the repository and the codebase, its structure, patterns, conventions, and processes. They are intended to be read by humans and agents alike. | definitions/index.md | ✅     |
| Definition | References Directory | Any `reference/` directory in the repository. These directories can exist at root of the repository, in namespace directories, in packages directories, or deeper in module directories.                                        | definitions/index.md | ✅     |

### Processes

| Type    | Name                                 | Purpose                                   | Input               | Output            | Path               | Status |
| ------- | ------------------------------------ | ----------------------------------------- | ------------------- | ----------------- | ------------------ | ------ |
| Process | Process for Reading References Files | Rules for agents reading reference files. | reference file path | reference content | processes/index.md | 🚧     |

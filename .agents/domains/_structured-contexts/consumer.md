# Structured Contexts Consumer API

**Use Cases:** Reading definitions of context files and applying formatting procedures for skills, processes, commands, and templates.

**Provides:**

- Definitions

**Capabilities:**

- Understand what context files are and how they are structured.
- Format references to skills, processes, commands, and templates.

## Mandatory Reading

READ `definitions/index.md` - Essential definitions for understanding context files.

## API

### Definitions

| Type | Name | Definition | Path | Status |
| ---- | ---- | ---------- | ---- | ------ |
| Definition | Context File | A file that contains structured, reusable context such as Skills, Agent Mode files, and files under the `.agents/domains/` directory. | definitions/index.md | ✅ |

### Formatters

| Type | Name | Purpose | Input | Output | Path | Status |
| ---- | ---- | ------- | ----- | ------ | ---- | ------ |
| Formatter | Formatter for Skill References | A formatted skill invocation reference. | summary | validated entity | formatters/references.md | ✅ |
| Formatter | Formatter for Process References | A formatted process invocation reference. | process | formatted reference | formatters/references.md | ✅ |
| Formatter | Formatter for Command References | A formatted command invocation reference. | summary | validated entity | formatters/references.md | ✅ |
| Formatter | Formatter for Template References | A formatted template invocation reference. | summary | validated entity | formatters/references.md | ✅ |

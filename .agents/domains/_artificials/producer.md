# Structured Contexts Producer API

**Use Cases:** Defining new artificial procedures, generating formatted references, and reading all consumer context.

**Provides:**

- Definitions

**Capabilities:**

- Define new artificial commands, processes, templates, and formatters.
- Generate formatted references for skills, processes, commands, and templates.
- Read and interpret context files.

## Mandatory Reading

READ: `definitions/index.md` - Essential definitions for understanding context files and artificial procedures.

## API

### Definitions

| Type       | Name                                       | Definition                                                                                                                                                                                   | Path                 | Status |
| ---------- | ------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------- | ------ |
| Definition | Context File                               | A file that contains structured, reusable context such as Skills, Agent Mode files, and files under the `.agents/domains/` directory.                                                        | definitions/index.md | ✅     |
| Definition | Artificial Procedure                       | A reusable set of instructions in a context file that provides a way to reuse the instructions in different contexts. A procedure is one of: `Command`, `Process`, `Template` of `Formatter` | definitions/index.md | ✅     |
| Definition | Definitions related to Structured Contexts | Artificial Command, Artificial Process, Artificial Template, Artificial Formatter                                                                                                            | definitions/index.md | ✅     |

### Formatters

| Type      | Name                              | Purpose                                    | Input   | Output              | Path                     | Status |
| --------- | --------------------------------- | ------------------------------------------ | ------- | ------------------- | ------------------------ | ------ |
| Formatter | Formatter for Skill References    | A formatted skill invocation reference.    | summary | validated entity    | formatters/references.md | ✅     |
| Formatter | Formatter for Process References  | A formatted process invocation reference.  | process | formatted reference | formatters/references.md | ✅     |
| Formatter | Formatter for Command References  | A formatted command invocation reference.  | summary | validated entity    | formatters/references.md | ✅     |
| Formatter | Formatter for Template References | A formatted template invocation reference. | summary | validated entity    | formatters/references.md | ✅     |

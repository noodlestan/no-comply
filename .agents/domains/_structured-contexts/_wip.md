# Structured Contexts WIP

<!--WIP rename to _artificials -->

## Structured Contexts Consumer

**Use Cases:** Locating, reading, and interpreting all types of structured contexts.

**Provides:**

- Mandatory Reading
- Definitions
- Delegated Formatters

**Capabilities:**

- Formatting references to artificial procedures.
- Working with context files.

### Mandatory Reading

READ `.agents/domains/_structured-contexts/formatters/references.md` - declares processes to format references to artificial procedures such as commands, processes, and templates.

## Structured Contexts Producer

**Use Cases:** Generating, validating, and improving structured context files.

**Provides:**

- Mandatory Reading
- Definitions
- Delegated Formatters

**Capabilities:**

- Formatting references to artificial procedures.
- Defining and working with context files and artificial procedures.

### Mandatory Reading

READ `.agents/domains/_structured-contexts/formatters/references.md` - declares processes to format references to artificial procedures such as commands, processes, and templates.

## Delegated Formatters

**Triggers:**

- When the instructions contain **Use the Formatter for Skill References**
- When the instructions contain **Use the Formatter for Process References**
- When the instructions contain **Use the Formatter for Command References**
- When the instructions contain **Use the Formatter for Template References**

**Process:**

1. Load the reference formatters from `.agents/domains/_structured-contexts/formatters/references.md`.
2. Identify the corresponding instructions in the file, under the formatter's H3 Section.
3. Delegate the input to the corresponding formatter to yield a formatted reference.

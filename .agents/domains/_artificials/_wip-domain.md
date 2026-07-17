# Artificials WIP

## Artificials Consumer

**Use Cases:** Locating, reading, and interpreting all types of Artificials.

**Provides:**

- Mandatory Reading
- Definitions
- Delegated Formatters

**Capabilities:**

- Formatting references to artificial procedures.
- Working with context files.

### Mandatory Reading

READ `.agents/domains/_artificials/formatters/references.md` - declares processes to format references to artificial procedures such as commands, processes, and templates.

## Artificials Producer

**Use Cases:** Generating, validating, and improving structured context files.

**Provides:**

- Mandatory Reading
- Definitions
- Delegated Formatters

**Capabilities:**

- Formatting references to artificial procedures.
- Defining and working with context files and artificial procedures.

### Mandatory Reading

READ `.agents/domains/_artificials/formatters/references.md` - declares processes to format references to artificial procedures such as commands, processes, and templates.

## Delegation

**Process:**

1. Load the reference formatters from `.agents/domains/_artificials/formatters/references.md`.
2. Identify the corresponding instructions in the file, under the formatter's H3 Section.
3. Delegate the input to the corresponding formatter to yield a formatted reference.

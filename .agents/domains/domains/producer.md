# Domains Producer API

**Use Cases:** Creating, curating, and managing domain knowledge files and API surfaces.

**Provides:**

- Definitions
- File Types
- Processes
- Templates

**Capabilities:**

- Understanding domain concepts and terminology
- Creating and structuring domain API files
- Extracting domain API trees from source files
- Generating consumer and producer API surfaces
- Applying domain templates

## Mandatory Reading

::READ `.agents/domains/domains/definitions/index.md` - Domain definitions and terminology.
::READ `.agents/domains/domains/processes/index.md` - Domain processes and extraction workflows.

## API

### Definitions

| Type       | Name   | Definition                                                                            | Path                 | Status |
| ---------- | ------ | ------------------------------------------------------------------------------------- | -------------------- | ------ |
| Definition | Domain | A bounded collection of context knowledge and processes related to a specific subject | definitions/index.md | 🚧     |

### Files

| Type | Name                      | Purpose                                                                                             | Pattern                                   | Template | Path           | Status |
| ---- | ------------------------- | --------------------------------------------------------------------------------------------------- | ----------------------------------------- | -------- | -------------- | ------ |
| File | Domain Producer API Files | Auto-generated files declaring definitions, processes and commands for agents that generate content | .agents/domains/{domain-name}/producer.md | -        | files/index.md | 🚧     |
| File | Domain Consumer API Files | Auto-generated files declaring definitions, processes and commands for agents that read content     | .agents/domains/{domain-name}/curator.md  | -        | files/index.md | 🟥     |

### Processes

| Type    | Name                                              | Purpose                                                      | Input           | Output                   | Path               | Status |
| ------- | ------------------------------------------------- | ------------------------------------------------------------ | --------------- | ------------------------ | ------------------ | ------ |
| Process | Process for Extracting Domain API Tree From Files | Extract and classify the document tree for the domain API    | files           | domain API tree          | processes/index.md | 🟥     |
| Process | Process for Generating the Domain Listing         | Generate a table with domain listing entries                 | -               | domain-listing           | processes/index.md | 🚧     |
| Process | Process for Extracting Domain API From Files      | Generate the domain API documentation from a classified tree | domain API tree | domain API documentation | processes/index.md | ✅     |
| Process | Process for Extracting Domain API                 | Scan domain files and extract the domain API                 | domain          | domain API documentation | processes/index.md | ✅     |

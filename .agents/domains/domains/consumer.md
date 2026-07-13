# Domains Consumer API

**Use Cases:** Locating, reading, and interpreting all types of domain contexts.

**Provides:**

- Definitions
- Files
- Processes

**Capabilities:**

- Understanding domain concepts and terminology
- Working with domain API files
- Applying domain templates

## Mandatory Reading

No mandatory reading.

## API

### Definitions

| Type | Name | Definition | Path | Status |
| ---- | ---- | ---------- | ---- | ------ |
| Definition | Domain | A bounded collection of context knowledge and processes related to a specific subject | definitions/index.md | 🚧 |

### Files

| Type | Name | Purpose | Pattern | Template | Path | Status |
| ---- | ---- | ------- | ------- | -------- | ---- | ------ |
| File | Domain Producer API Files | Auto-generated files declaring definitions, processes and commands for agents that generate content | .agents/domains/{domain-name}/producer.md | - | files/index.md | 🚧 |
| File | Domain Consumer API Files | Auto-generated files declaring definitions, processes and commands for agents that read content | .agents/domains/{domain-name}/curator.md | - | files/index.md | 🟥 |

### Processes

| Type | Name | Purpose | Input | Output | Path | Status |
| ---- | ---- | ------- | ----- | ------ | ---- | ------ |
| Process | Process for Extracting Domain API Tree From Files | Extract and classify the document tree for the domain API | files | domain API tree | processes/index.md | 🟥 |
| Process | Process for Generating the Domain Listing | Generate a table with domain listing entries | - | domain-listing | processes/index.md | 🚧 |
| Process | Process for Extracting Domain API From Files | Generate the domain API documentation from a classified tree | domain API tree | domain API documentation | processes/index.md | ✅ |
| Process | Process for Extracting Domain API | Scan domain files and extract the domain API | domain | domain API documentation | processes/index.md | ✅ |
# Domain Processes

### Process for Extracting Domain API Content

**Purpose:** Given a domain API and a scope, extract the API content belonging to that scope.

**Inputs:**

- `domain API file` — the contents of a `{domain}/_api.md` file.
- `scope` — `consumer` or `producer`.

**Output:**

- `domain API surface documentation` - the extracted headings and content for the requested scope.

**Process:**

With the provided `domain API file` and `scope`, execute the following steps:

1. Read the `domain api file`.
1. Identify all sections containing items tagged for the requested scope. Example: `(#producer)`.
1. If a section heading is tagged with the requested scope, include the entire contents of the section.
1. If a section heading is not tagged but contains at least one tagged item for the requested scope, include the section and the tagged items only.
1. Preserve the original document structure and item ordering.
1. Yield the `domain API surface documentation` for this scope.

### Process for Summarising Domain API Scope

**Purpose:** Given a domain API scope, generate a concise summary describing what the scope provides and the capabilities it exposes.

**Inputs:**

- `domain API surface documentation` — the API documentation with headings and content filtered for a scope.

**Output:**

- `domain API summary` — a structured object containing:
  - `domain API use cases`
  - `domain API provides`
  - `domain API capabilities`

**Process:**

With the provided `domain API surface documentation`, execute the following steps:

- Identify the categories present from the headings (Definitions, Processes, Commands, Templates, Formatters, ...).
- Generate the `domain API provides` list from the identified categories.
- Summarise the processes and commands into the `domain API capabilities` list.
- Summarise the capabilities into a single `domain API use cases` sentence.
- Yield the `domain API summary`.

### Process for Scoping Domain API

**Purpose:** Given a domain, generate the consumer and producer API outlines.

**Inputs:**

- `domain`

**Outputs:**

- `consumer API outline` - contains `surface documentation` and `summary` for the `consumer` scope.
- `producer API outline` - contains `surface documentation` and `summary` for the `producer` scope.

**Process:**

With the provided `domain`, execute the following steps:

1. Read `{domain}/_api.md`.
2. Generate the `consumer API outline` by following these steps:

   1. Execute the **Process for Extracting Domain API Content** with the `consumer` scope to extract the API surface documentation for consumers.
   2. With the extracted documentations for consumers **Process for Summarising Domain API Content** to generate the API summary for consumers.
   3. Combine the extracted surface documentation and generated summary into a `consumer API outline`.

3. Generate the `producer API outline` by following these steps:

   1. Execute the **Process for Extracting Domain API Content** with the `producer` scope to extract the API surface documentation for producers.
   2. With the extracted documentations for producers **Process for Summarising Domain API Content** to generate the API summary for producers.
   3. Combine the extracted surface documentation and generated summary into a `producer API outline`.

4. Yield the consumer and producer API outlines.

## Process for Listing Domain Index Files

**Inputs**

- None

## **Outputs**

1. Read all domain index files: `.agents/domains/**/index.md`.
2. For each domain file read the first 25 lines.
3. Identify the name in `# {domain.name} Domain Index` heading.
4. Identify the values for `use-case`, `provides`, and `capabilities` in the domain content.
5. Generate a `domain.description` using this pattern `{domain.provides} for {domain.use-case}` and adjust the result for correct grammar, punctuation, and capitalisation.
6. Scan the contents of the `## Definitions` section for lines with tag `#hoist`.
7. Scan the file for sections named `## Rules for {rules scope}` and scan the content of all those sections for lines with the tag `#hoist`.
8. Generate

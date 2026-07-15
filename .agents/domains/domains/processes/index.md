# Domains Processes

## Mandatory Reading

READ `.agents/domains/domains/definitions/index.md` for the essential definitions.

## Private Definitions

**Domain API documentation** — a structured representation of a domain API containing: `table-of-contents`, `consumer-api-docs`, and `producer-api-docs`.

**API table of contents** — a summary of all declared symbols with their name, type, tags, source-path, and contents.

**consumer API surface documentation** — the API for `consumer` agents, together with its `summary`.

**producer API surface documentation** — the API for `producer` agents, together with its `summary`.

**Tags** - appear at the end of items in the content, and are xpressions are in the form `(#{tag name})` where `tag name` is one of: `hoist`, `all`, `consumer`, `producer`, `wip`, or `broken`.

**Hoist tag** - a `(#hoist)` tag marks items for being discoverable by any agent.

**All tag** - a `(#all)` marks items for being discoverable in the `consumers` and `producers` scoped surfaces.

**Catch-all tag** - one of `(#hoist)` or `(#all)`, applies to both `consumer` and `producer` scopes.

**Scope-specific tag** - one of `(#consumer)` or `(#producer)` tags, marking items for being discovered by the agents with a certain relationship with the domain.

**WIP tag** - a `(#wip)` tag marks items for being presented as `WIP`.

**WIP tag** - a `(#broken)` tag marks items for being presented as `BROKEN`.

**Keep tag** - a `(#keep)` tag, added internally during extraction, that marks structurally important nodes that contain tagged content but have no tags of their own.

## Processes (#all)

---

### Process for Extracting Domain API Tree From Files (#broken)

**Purpose:** Given a list of domain files, extract and classify the document tree for the domain API.

**Inputs:**

- `files` — list of `.md` file paths to process.

**Output:**

- `domain API tree` — a classified representation of the domain documentation.

**Process:**

With the provided `files`, execute the following steps:

1. For each file in `files`:
   1. Read the file content.
      - CATCH: if file unreadable, then THROW ERROR to user and STOP processing.
   2. Strip the H1 heading and all content up to but not including the first H2 heading.
      - CATCH: if no H2 heading found, then THROW ERROR to user and STOP processing.
   3. Collect the remaining content from the first H2 onwards.
   4. Record the `source-path` relative to the domain directory (e.g., `definitions/index.md`).
2. Concatenate all collected content from all files into a single document, preserving the `source-path` on each concatenated root, and preserving file order
3. Starting from the document root of the concatenated document, recursively evaluate every node in document order.
4. For each node under root (where root has `source-path`):
   1. Classify the node type (H2, H3, H4, ..., or other).
   2. Record ANY `tags` declared on the node.
   3. Record the source `source-path` for the node (inherited from step 1).
   4. Record the `content` of the node (formatted text) and position within the document tree.

**NOTE:** After classification the tree nodes should contain the extracted `tags`, source `source-path` and `content`. Visual example:

| Node | Tags      | File                     | Content       |
| ---- | --------- | ------------------------ | ------------- |
| H2   | #producer | definitions/index.md     | {..content..} |
| H3   | no tags   | definitions/index.md     | {..content..} |
| p    | #hoist    | definitions/index.md     | {..content..} |
| H3   | #consumer | definitions/index.md     | {..content..} |
| p    | no tags   | definitions/index.md     | {..content..} |
| H2   | no tags   | formatters/references.md | {..content..} |
| H3   | #all      | formatters/references.md | {..content..} |
| p    | #hoist    | formatters/references.md | {..content..} |
| H2   | no tags   | formatters/references.md | {..content..} |
| p    | no tags   | formatters/references.md | {..content..} |

5. Starting from the document root, recursively propagate inherited scope tags to descendant nodes, merging with any existing tags on the children nodes.

**NOTE:** After downwards propagation, the child nodes reflect inherited tags merged with extracted tags. Visual example:

| Node | Tags              | ... |
| ---- | ----------------- | --- |
| H2   | #producer         |     |
| H3   | #producer         |     |
| p    | #hoist, #producer |     |
| H3   | #consumer         |     |
| p    | #consumer         |     |
| H2   | no tags           |     |
| H3   | #all              |     |
| p    | #hoist, #all      |     |
| H2   | no tags           |     |
| p    | no tags           |     |

6. Starting from the leaf nodes, recursively check if parent has tags, and add `(#keep)` if it doesn't — this preserves structurally important nodes that contain tagged content.

**NOTE:** After upwards propagation of the `(#keep)` tag, the previously untagged parent nodes reflect the presence of tagged children. Visual example:

| Node | Tags              | ... |
| ---- | ----------------- | --- |
| H2   | #producer         |     |
| H3   | #producer         |     |
| p    | #hoist, #producer |     |
| H3   | #consumer         |     |
| p    | #consumer         |     |
| H2   | #keep             |     |
| H3   | #all              |     |
| p    | #hoist, #all      |     |
| H2   | no tags           |     |
| p    | no tags           |     |

7. Discard any branches under root without any tags.
8. Preserve the original document structure and ordering.
9. Yield the `domain API tree`.

---

### Process for Extracting Domain API From Files

**Purpose:** Given a classified domain API tree, generate the domain API documentation.

**Inputs:**

- `domain API tree`

**Output:**

- `domain API documentation`

**Process:**

With the provided `domain API tree`, execute the following steps:

1. Generate the `API table of contents` from the declared API items.
2. Generate the `consumer API surface documentation` by including nodes classified with `(#hoist)`, `(#all)`, `(#consumer)`, or `(#keep)`.
3. With the `consumer API surface documentation`, execute the **Process for Summarising Domain API Scope** to generate the `consumer API summary`.
4. Combine the `consumer API surface documentation` and generated `consumer API summary` into the `consumer API outline`.
5. Generate the `producer API surface documentation` by including nodes classified with `(#hoist)`, `(#all)`, `(#consumer)`, or `(#keep)`.
6. With the `producer API surface documentation`, execute the **Process for Summarising Domain API Scope** to generate the `producer API summary`.
7. Combine the `producer API surface documentation` and generated `producer API summary` into the `producer API outline`.
8. Strip all scope tags from the generated surface documentation.
9. Preserve the original document structure and ordering.
10. Combine the `API table of contents`, `producer API` and `consumer API` to form the `domain API documentation`.
11. Yield the `domain API documentation`.

---

### Process for Extracting Domain API

**Purpose:** Given a domain, scan the domain files and extract the domain API.

**Inputs:**

- `domain` — the domain name.

**Output:**

- `domain API documentation`

**Before executing:** Agents must follow this process – and the nested processes – step by step. Yes it is quite involved but also fun and rewarding. Trust the process, this process, and don't attempt to locate pre-generated files to infer.

**Process:**

With the provided `domain`, execute the following steps:

1. Read `{domain}/_config.md` frontmatter to extract the list of `directories-to-scan`.
   - CATCH: if file missing or malformed, then THROW ERROR to user and STOP processing.
2. For each `dirname` in `directories-to-scan`, list all nested `.md` files, using `ls -al .agents/domains/{domain}/{dirname}/**/*.md`.
   - CATCH: if no .md files found, then THROW ERROR to user and STOP processing.
3. Exclude any files or directories whose name starts with `_`.
4. With the identified files, execute the **Process for Extracting Domain API Tree From Files** to generate the `domain API tree`.
5. With the `domain API tree`, execute the **Process for Extracting Domain API From Files** to generate the `domain API documentation`.
6. Yield the `domain API documentation`.

---

### Process for Generating the Domain Listing

**Outputs:**

- `domain-listing` – a table with domain listing entries containing `domain.id`, `domain.name`, `domain.description`, `domain.file-path`, and `domain.hoisted` content.

**Process:**

1. List all domain API files using in `.agents/domains/**/_api.md`.
   - CATCH: if no `_api.md` files dound, you probably used a misbehaving `glob`, try again with `ls .agents/domains/**/_api.md`.
   - CATCH: if no `_api.m` files found, then THROW ERROR to user and STOP processing.
2. With each domain:
   1. Store the file path (relative to repository root) as `domain.file-path`.
   2. Identify the `domain.id` from the file path.
   3. Identify the `domain.name` ine the H1: `{domain.name} Domain API`.
   4. Read the `## Summary` section to extract the `domain.provides` and `domain.use-cases`.
   5. Read the `## Hoisted` section to extract the `domain.hoisted` items.
   6. Generate a `domain.description` from the summary using this pattern `{domain.provides} for {domain.use-case}` and adjust the result for correct grammar, punctuation, and capitalisation.
3. Generate a table with one row for each `domain` and the following columns: `file name` (relative to repository root), `description`, and `hoisted` content.
4. Yield the table rows as `domain-listing`.

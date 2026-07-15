# {domain.name} {Scope} API

TEMPLATE DIRECTIVE: Replace the domain name and scope in the H1.

TEMPLATE DIRECTIVE: Summarise the domain scope use cases in one sentence.

TEMPLATE EXAMPLE: **Use Cases:** Locating, reading, and interpreting all types of domain contexts.

**Use Cases:** {scope use cases summarised}.

**Provides:**

TEMPLATE DIRECTIVE: For each category of items in the scope surface documentation, generate a bullet point with its name.

TEMPLATE EXAMPLE: - Processes

**Capabilities:**

TEMPLATE DIRECTIVE: For each capability in the scope surface documentation, generate a bullet point with its purpose.

TEMPLATE EXAMPLE: - Work with domain contexts files.

## Mandatory Reading

TEMPLATE DIRECTIVE: For each mandatory reading in scope surface documentation, generate a mandatory reading entry formatted according to the following example.

TEMPLATE EXAMPLE: READ `{mandatory-reading.filepath}` - {mandatory-reading.purpose}.

## API

TEMPLATE DIRECTIVE: Identify the corresponding documentation surface for the provided `{scope}`. Use `consumer-api-docs` for `scope: consumer` and `producer-api-docs` for `scope: producer`

TEMPLATE DIRECTIVE: Filter the extracted `table-of-contents` for items with `(#hoist)`.

TEMPLATE DIRECTIVE: Sort the hoisted items by `type` respecting the following order: `Definition, Structure, Command, Process, File, Template, Formatter`, and others.

TEMPLATE DIRECTIVE: For each resource `type` in sorted items, generate a section with a table with items of that `type` only.

TEMPLATE DIRECTIVE: (applies to all items rendered in any of the sections) Check if the item as a `(#broken)` or `(#wip)` tag. If it does set the `item.emoji` to 🟥 or 🚧 respectively. If it doesn't, set it to ✅.

### {Type pluralized}

TEMPLATE DIRECTIVE: From the following directives, pick the one that matches the current `type` and use it to render the table, using the example as a reference.

TEMPLATE DIRECTIVE: If the section `type` is `Definition`.

| Type        | Name        | Definition        | Source             | Status  |
| ----------- | ----------- | ----------------- | ------------------ | ------- |
| {item.type} | {item.name} | {item.definition} | {item.source-path} | {emoji} |

TEMPLATE EXAMPLE: | Definition | Plan | A structured, high-level, implementation plan with delegatable, self-contained, detailed instructions for sub-agents. | `definitions/index.md` | ✅ |

---

TEMPLATE DIRECTIVE: If the section `type` is `Structure`, use the following table:

| Type        | Name        | Purpose        | Fields              | Source             | Status  |
| ----------- | ----------- | -------------- | ------------------- | ------------------ | ------- |
| {item.type} | {item.name} | {item.purpose} | {infer item fields} | {item.source-path} | {emoji} |

TEMPLATE EXAMPLE: | Structure | Plan Record Fields | id, status, tasks, summary | `structures/plan__structure.md` | ✅ |

---

TEMPLATE DIRECTIVE: If the section `type` is `Command`, use the following table (show only the first trigger):

| Type        | Name        | Purpose        | Input        | Triggers           | Source             | Status  |
| ----------- | ----------- | -------------- | ------------ | ------------------ | ------------------ | ------- |
| {item.type} | {item.name} | {item.purpose} | {item.input} | {item.triggers[0]} | {item.source-path} | {emoji} |

TEMPLATE EXAMPLE: | Command | Update Domain (domain) | Generate `consumer.md` and `producer.md` API files, and the `_api.md` table of contents. | `domain` | `update domain {domain}`| `commands/update-domain.md` | ✅ |

---

TEMPLATE DIRECTIVE: If the section `type` is `Process`, use the following table:

| Type        | Name        | Purpose        | Input        | Output        | Source             | Status  |
| ----------- | ----------- | -------------- | ------------ | ------------- | ------------------ | ------- |
| {item.type} | {item.name} | {item.purpose} | {item.input} | {item.output} | {item.source-path} | {emoji} |

TEMPLATE EXAMPLE: | Process | Process for Generating Task Titles | Standardises task titles | `title` or `context` | `title` (standardized) | `processes/index.md` | ✅ |

---

TEMPLATE DIRECTIVE: If the section `type` is `File`, use the following table:

| Type        | Name        | Purpose        | Pattern               | Template        | Source             | Status  |
| ----------- | ----------- | -------------- | --------------------- | --------------- | ------------------ | ------- |
| {item.type} | {item.name} | {item.purpose} | {item.naming-pattern} | {item.template} | {item.source-path} | {emoji} |

TEMPLATE EXAMPLE: | File | Plan File | A structured file outlining the plan, identifying the source tasks and specs | `path/plan-{plan.id}/plan.md` | `.agents/domains/plans/templates/plan__template.md` | `files/index.md` | ✅ |

---

TEMPLATE DIRECTIVE: If the section `type` is `Template`, use the following table:

| Type        | Name        | Purpose        | Input        | File        | Source             | Status  |
| ----------- | ----------- | -------------- | ------------ | ----------- | ------------------ | ------- |
| {item.type} | {item.name} | {item.purpose} | {item.input} | {item.file} | {item.source-path} | {emoji} |

TEMPLATE EXAMPLE: | Template | Plan Template | Defines the structure of a plan file | plan data | `.agents/domains/plans/templates/plan__template.md` | `files/index.md` | ✅ |

---

TEMPLATE DIRECTIVE: If the section `type` is `Other`, use the following table:

| Type        | Name        | Purpose              | Description              | Source             | Status  |
| ----------- | ----------- | -------------------- | ------------------------ | ------------------ | ------- |
| {item.type} | {item.name} | {infer item.purpose} | {infer item.description} | {item.source-path} | {emoji} |

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

TEMPLATE DIRECTIVE: Sort the hoisted items by `type` respecting the following order: `Definition, Structure, File, Command, Template, Formatter`, and others.

TEMPLATE DIRECTIVE: For each `type` in sorted items, generate a section with a table with items of that `type` only.

### {Type pluralized}

---

TEMPLATE DIRECTIVE: If the section `type` is `Definition`.

TEMPLATE DIRECTIVE: (applies to all items rendered in any of the below tables) Check if the item as a `(#broken)` or `(#wip)` tag. If it does set the `item.emoji` to 🟥 or 🚧 respectively. If it doesn't, set it to ✅.

| Type        | Name        | Definition        | Path               | Status  |
| ----------- | ----------- | ----------------- | ------------------ | ------- |
| {item.type} | {item.name} | {item.definition} | {item.source-path} | {emoji} |

TEMPLATE EXAMPLE: | Definition | Plan | A structured, high-level, implementation plan with delegatable, self-contained, detailed instructions for sub-agents. | definitions/index.md | ✅ |

---

TEMPLATE DIRECTIVE: If the section `type` is `Structure`, use the following table:

| Type        | Name        | Fields              | Path               | Status  |
| ----------- | ----------- | ------------------- | ------------------ | ------- |
| {item.type} | {item.name} | {infer item fields} | {item.source-path} | {emoji} |

TEMPLATE EXAMPLE: | Structure | Plan Record Fields | id, status, tasks, summary | structures/plan_structure.md | ✅ |

---

TEMPLATE DIRECTIVE: If the section `type` is one of `Process, Command, Formatter`, use the following table:

| Type        | Name        | Purpose        | Input        | Output        | Path               | Status  |
| ----------- | ----------- | -------------- | ------------ | ------------- | ------------------ | ------- |
| {item.type} | {item.name} | {item.purpose} | {item.input} | {item.output} | {item.source-path} | {emoji} |

TEMPLATE EXAMPLE: | Formatter | Skill References | Format references to skills | skill id and outcome | formatted skill reference | formatters/references.md | ✅ |

---

TEMPLATE DIRECTIVE: If the section `type` is `Template`, use the following table:

| Type        | Name        | Purpose        | Input        | File        | Path               | Status  |
| ----------- | ----------- | -------------- | ------------ | ----------- | ------------------ | ------- |
| {item.type} | {item.name} | {item.purpose} | {item.input} | {item.file} | {item.source-path} | {emoji} |

TEMPLATE EXAMPLE: | Template | Plan Template | Defines the structure of a plan file | plan data | .agents/domains/plans/templates/plan\_\_template.md | files/index.md | ✅ |

---

TEMPLATE DIRECTIVE: If the section `type` is `File`, use the following table:

| Type        | Name        | Purpose        | Pattern        | Template        | Path               | Status  |
| ----------- | ----------- | -------------- | -------------- | --------------- | ------------------ | ------- |
| {item.type} | {item.name} | {item.purpose} | {item.pattern} | {item.template} | {item.source-path} | {emoji} |

TEMPLATE EXAMPLE: | File | Plan File | A structured file outlining the plan, identifying the source tasks and specs | path/plan-{plan.id}/plan.md | .agents/domains/plans/templates/plan\_\_template.md | files/index.md | ✅ |

---

TEMPLATE DIRECTIVE: If the section `type` is `Other`, use the following table:

| Type        | Name        | Purpose              | Description              | Status  |
| ----------- | ----------- | -------------------- | ------------------------ | ------- |
| {item.type} | {item.name} | {infer item.purpose} | {infer item.description} | {emoji} |

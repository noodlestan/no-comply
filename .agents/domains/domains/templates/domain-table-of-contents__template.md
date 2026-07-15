# {domain} Domain API

TEMPLATE DIRECTIVE: Replace `{domain}` with the domain name in title case.

## Summary

TEMPLATE DIRECTIVE: Summarise the API surface in 3 sentences:

TEMPLATE DIRECTIVE: Paragraph 1: The {domain} API provides ... for working with ...

TEMPLATE DIRECTIVE: Paragrpah 2: Consumers can {read and/or do} {operations} in order to {...}

TEMPLATE DIRECTIVE: Paragrpah 3: Producers can {read and/or do} {operations} in order to {...}

TEMPLATE DIRECTIVE: For each scope section below (Hoisted, All, Producer, Consumer), generate a table of items extracted from the domain files. Each table row represents one item (definition, command, process, template, formatter, etc.).

## Hoisted

These items published to the domain listing (making them immediately discoverable by all agents) and also in both the consumer and producer API surfaces.

TEMPLATE DIRECTIVE: If a scope has no items, write "No items." instead of the table and skip to the next H2.

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

TEMPLATE DIRECTIVE: If the section `type` is one of `Process, Command`, use the following table:

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

## All

These items are published in both the consumer and producer API surfaces.

TEMPLATE DIRECTIVE: Repeat the same steps as the previous section, but this time filter the extracted `table-of-contents` for items with `(#all)` (and not `(#hoist)`).

## Consumer

These items are published in the consumer scope only.

TEMPLATE DIRECTIVE: Repeat the same steps as the previous section, but this time filter the extracted `table-of-contents` for items with `(#consumer)` (and not `(#all)` and not `(#hoist)`).

## Producer

These items are published in the consumer scope only.

TEMPLATE DIRECTIVE: Repeat the same steps as the previous section, but this time filter the extracted `table-of-contents` for items with `(#producer)` (and not `(#all)` and not `(#hoist)`).

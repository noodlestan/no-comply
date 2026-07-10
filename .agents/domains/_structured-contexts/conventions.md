# Structured Context File Conventions

## Definitions

**Context Element:** ...

## Conventions For Presenting Context Elements in Instructions

### Convention: How to Present Definitions

**Rules**

- RULE: Present definitions only under `## Definitions` sections.
- RULE: Present one definition per paragraph.
- RULE: Separate definitions with an empty line.
- RULE: Start each definition with the defined term in bold, including the trailing colon.
- RULE: Do not present definitions as bullet points.
- RULE: Keep each definition under 300 characters.

**Examples**

- Correct: `**Domain Producer Files:** The entry point for all files produced by a domain.`
- Incorrect (bullet point): `- **Domain Producer Files:** The entry point for all files produced by a domain.`
- Incorrect (missing bold): `Domain Producer Files: The entry point for all files produced by a domain.`
- Incorrect (missing colon): `**Domain Producer Files** The entry point for all files produced by a domain.`

## Conventions For Referencing Context Elements in Instructions

### Convention: How to Reference a Skill

**Rules**

- RULE: Reference skills using their id enclosed in bold: `**skill.id**`.
- RULE: Reference skills using pattern: `Use the **skill.id**`.
- RULE: Reference skills with inputs using the pattern: `Use the **skill.id** with {inputs}`.

**Examples**

- Correct: `Use the **write-task** skill to create the task.`
- Correct: `Use the **write-task** skill with version A of the draft to create the task.`
- Incorrect (name instead of id): `use the **Write Task** skill to...`
- Incorrect (missing bold): `use the write-task skill to ...`
- Incorrect (wrong wording): `Apply the **write-task** skill to...`
- Incorrect (wrong order): `With version A of the draft, use the **write-task** skill to...`

### Convention: How to Reference a Process

**Rules**

- RULE: Reference processess using their name enclosed in bold: `**process.name**`.
- RULE: Reference processes using the pattern: `Execute the **process.name** with {inputs}`

**Examples**

- Correct: `use the **write-task** skill to ...`
- Incorrect (actual skill name): `use the Write Task skill to ...`
- Incorrect (missing bold): `use the $1 skill to ...`

### Convention: How to Reference a Command

**Rules**

- RULE: Reference commands using their name enclosed in bold: `**skill.id**`.
- RULE: Reference skills using their ID enclosed in bold: `**skill.id**`.
- RULE: Reference skills using their ID enclosed in bold: `**skill.id**`.

**Examples**

- Correct: `Use the **write-task** skill to ...`
- Correct: `Apply the **write-task** skill to ...`
- Incorrect (actual skill name): `use the Write Task skill to ...`
- Incorrect (missing bold): `use the $1 skill to ...`

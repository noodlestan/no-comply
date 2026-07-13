# Structured Context File Conventions

## Convention: How to Reference a Skill

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

## Convention: How to Reference a Process

**Rules**

- RULE: Reference processess using their name enclosed in bold: `**process.name**`.
- RULE: Reference processes using the pattern: `Execute the **process.name** with {inputs}`

**Examples**

- Correct: `Execute the **Process for Adding Items to Parking Lot** with the new item and `
- Incorrect (actual skill name): `use the Write Task skill to ...`
- Incorrect (missing bold): `use the $1 skill to ...`
- Incorrect (wrong order): `With version A of the draft, use the **write-task** skill to...`

## Convention: Wording

<!-- wip - example: use "the instructions" rather than "the user" or "the agent" unless the instructions are exclusive to a specific requester -->

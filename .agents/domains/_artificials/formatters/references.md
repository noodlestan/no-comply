# Artificial Formatters

## Formatters for Artificial References

This file declares procedures to format references to commands, processes, and templates.

<!-- WIP create tools to replace formatters -->

### Formatter for Skill References (#all)

**Generates:** A formatted skill invocation reference.

**Inputs:**

- `summary`: The entity summary as captured from another entity.

**Outputs:**

- `validated entity`: The entity with details expanded and validated.

**Process:**

With the provided `skill` and `outcome`, execute the following actions:

1. Render the skill id enclosed in bold. Expected Result: `**write-task**`.
2. Generate the skill reference using the pattern `Use the **{skill.id}** skill`.
3. If outcome is provided, append it using the pattern `to {outcome}`. Expected Result: `Use the **write-task** skill to generate the task draft`.
4. Generate the formatted reference.

**Examples**

- Correct: `Use the **write-task** skill to generate the task draft.`
- Correct: `Use the **find-api** skill to locate the required API.`
- Correct: `Use the **rehash** skill to summarize the discussion.`
- Incorrect (name instead of id): `Use the **Write Task** skill to generate the task draft.`
- Incorrect (missing bold): `Use the write-task skill to generate the task draft.`
- Incorrect (wrong wording): `Apply the **write-task** skill to generate the task draft.`
- Incorrect (missing outcome): `Use the **write-task** skill.`

### Formatter for Process References (#all)

**Generates:** A formatted process invocation reference.

**Inputs:**

- `process`: The entity summary as captured from another entity.

**Outputs:**

- `formatted reference` (see examples below)

**Process:**

With the provided `process`, `context`, and `outcome`, execute the following actions:

1. Render the process name enclosed in bold. Expected Result: `**Process for Adding Items to Parking Lot**`.
2. Generate the process reference using the pattern `execute the **{process.name}**`.
3. If context is provided, prepend it using the pattern `With {context}, execute the **{process.name}**`. Expected Result: `With the generated items, execute the **Process for Adding Items to Parking Lot**`.
4. If outcome is provided, append it using the pattern `to {outcome}`. Expected Result: `With the generated items, execute the **Process for Adding Items to Parking Lot** to keep track of purpose`.
5. Generate the formatted reference.

**Examples**

- Correct: `Execute the **Process for Adding Items to Parking Lot** to keep track of purpose.`
- Correct: `Execute the **Process for Adding Items to Parking Lot** with the generated items to keep track of purpose.`
- Correct: `With the generated items, execute the **Process for Adding Items to Parking Lot** to keep track of purpose.`

### Formatter for Command References (#all)

**Generates:** A formatted command invocation reference.

**Inputs:**

- `summary`: The entity summary as captured from another entity.

**Outputs:**

- `validated entity`: The entity with details expanded and validated.

**Process:**

With the provided command id, optional skill, context, and outcome, execute the following actions:

1. Render the command id enclosed in bold. Expected Result: `**delegator-feedback**`.
2. If a skill is provided, append the skill reference using the pattern `**{command.id}** of the **{skill}** skill`. Expected Result: `**delegator-feedback** of the **feedback** skill`.
3. If no skill is provided, use only the command reference. Expected Result: `**delegator-feedback**`.
4. Generate the command reference using the pattern `use the {command reference}`. Expected Result: `use the **delegator-feedback** command` or `use the **delegator-feedback** of the **feedback** skill command`.
5. If context is provided, prepend it using the pattern `With {context}, use the {command reference}`. Expected Result: `With the reports, use the **delegator-feedback** of the **feedback** skill command`.
6. If outcome is provided, append it using the pattern `to {outcome}`. Expected Result: `With the reports, use the **delegator-feedback** of the **feedback** skill command to consolidate the execution feedback`.
7. Generate the formatted reference.

**Examples**

- Correct: `Use the **delegator-feedback** command to consolidate the execution feedback.`
- Correct: `Use the **delegator-feedback** of the **feedback** skill command to consolidate the execution feedback.`
- Correct: `With the reports, use the **delegator-feedback** of the **feedback** skill command to consolidate the execution feedback.`

### Formatter for Template References (#all)

**Generates:** A formatted template invocation reference.

**Inputs:**

- `summary`: The entity summary as captured from another entity.

**Outputs:**

- `validated entity`: The entity with details expanded and validated.

**Process:**

With the provided content, template, and outcome, execute the following actions:

1. Render the template name enclosed in bold. Expected Result: `**Task Template**`.
2. Generate the template reference using the pattern `use the **{template.name}** template to render {content}`.
3. If the outcome is provided, append it using the pattern `to generate {outcome}`. Expected Result: `Use the **Task Template** template to render the task instructions to generate the final task document`.
4. Alternatively, when the content is the subject of rendering, generate the reference using the pattern `render {content} with the **{template.name}** template`. Expected Result: `Render the task instructions with the **Task Template** template`.
5. Generate the formatted reference.

**Examples**

- Correct: `Use the **Task Template** template to render the task instructions.`
- Correct: `Use the **Task Template** template to render the task instructions to generate the final task document.`
- Correct: `Render the task instructions with the **Task Template** template.`
- Correct: `Render the task instructions with the **Task Template** template to generate the final task document.`

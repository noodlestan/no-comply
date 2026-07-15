# Tasks Producer API

**Use Cases:** Creating, writing, and curating task records, their specifications, attachments, and related content following domain rules and constraints.

**Provides:**

- Definitions
- Structures
- Files
- Processes

**Capabilities:**

- Understand what a task is and its related concepts, including producer-specific roles.
- Work with the task record structure and its fields.
- Identify and locate task files, attachments, and specification files.
- Generate task titles and IDs from summaries.
- Name and organise task attachment files.
- Read and validate task files and specification attachments.
- Write task files and specification files following content rules and constraints.

## Mandatory Reading

## API

### Definitions

---

| Type       | Name | Definition                                                                                                      | Path                 | Status |
| ---------- | ---- | --------------------------------------------------------------------------------------------------------------- | -------------------- | ------ |
| Definition | Task | A structured domain record, defining a work item, goal, scope, requirements, constraints, and expected outcome. | definitions/index.md | ✅     |

---

| Type       | Name                        | Definition                                                                                                                 | Path                 | Status |
| ---------- | --------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------- | ------ |
| Definition | Definitions Related to Task | Task Template, Task Draft, Task Attachment, Task Specification — extended concepts for task records and their attachments. | definitions/index.md | ✅     |

---

| Type       | Name                  | Definition                                                                                           | Path                 | Status |
| ---------- | --------------------- | ---------------------------------------------------------------------------------------------------- | -------------------- | ------ |
| Definition | Task Writing Skill    | A task writing skill active in the current session.                                                  | definitions/index.md | ✅     |
| Definition | Task Findings         | Context gathered during task writing explorations, such as existing conventions, patterns, and APIs. | definitions/index.md | ✅     |
| Definition | Notes Section         | The only section of the task where content other than specification is allowed.                      | definitions/index.md | ✅     |
| Definition | Task Thinking Mode    | A mode where analysis of use cases, contracts, and API design is allowed.                            | definitions/index.md | ✅     |
| Definition | Task Exploration Mode | A mode where the agent gathers context about existing entities, APIs, and conventions.               | definitions/index.md | ✅     |

---

### Structures

---

| Type      | Name        | Fields                                                                                                                                      | Path                            | Status |
| --------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------- | ------ |
| Structure | Task Record | id, title, metadata.template, required-skills, mandatory-reading, summary, summary.scope, summary.dependencies, specifications, attachments | structures/task\_\_structure.md | ✅     |

---

### Files

---

| Type | Name                    | Purpose                                                                                                         | Path           | Status |
| ---- | ----------------------- | --------------------------------------------------------------------------------------------------------------- | -------------- | ------ |
| File | Task File               | Contains a task record, identified by the pattern `path/{task.id}/task.md`.                                     | files/index.md | ✅     |
| File | Task Attachments        | Arbitrary files created alongside a task file to capture related content.                                       | files/index.md | ✅     |
| File | Task Specification File | Specification files named after `task.id` and `spec.id` using the pattern `{task.id}/task__spec__{spec.id}.md`. | files/index.md | ✅     |

---

### Processes

---

| Type    | Name                                          | Purpose                                                                                    | Input           | Output                 | Path               | Status |
| ------- | --------------------------------------------- | ------------------------------------------------------------------------------------------ | --------------- | ---------------------- | ------------------ | ------ |
| Process | Process for Generating Task Titles            | Compact a task summary into a stable, scoped task title.                                   | task summary    | task title             | processes/index.md | ✅     |
| Process | Process for Generating Task IDs               | Generate a kebab-case task identifier from a normalised title.                             | task title      | task id                | processes/index.md | ✅     |
| Process | Process for Inferring Task IDs                | Infer task IDs from context.                                                               | —               | —                      | processes/index.md | 🚧     |
| Process | Process for Naming Task Attachment Files      | Name attachment files after the task file with a `__{type}` suffix.                        | attachment type | attachment filename    | processes/index.md | ✅     |
| Process | Process for Reading Task Files                | Read and validate a task file against its template.                                        | task file       | task record            | processes/index.md | ✅     |
| Process | Process for Reading Specification Attachments | Read and validate a task specification attachment against its template.                    | spec attachment | spec content           | processes/index.md | ✅     |
| Process | Process for Writing Task Files                | Rules and constraints for adding content to task and spec files.                           | task content    | validated task content | processes/index.md | ✅     |
| Process | Content Rules for Task Files                  | Allowed content types in task files: acceptance criteria, API decisions, contracts, notes. | —               | rules                  | processes/index.md | ✅     |
| Process | Content Rules for Specification Files         | Allowed content types in spec files: design rationale, conventions, contracts, styling.    | —               | rules                  | processes/index.md | ✅     |

---

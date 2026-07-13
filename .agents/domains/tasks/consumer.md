# Tasks Consumer API

**Use Cases:** Locating, reading, and interpreting task records, their structure, file conventions, and related processes.

**Provides:**

- Definitions
- Structures
- Files
- Processes

**Capabilities:**

- Understand what a task is and its related concepts.
- Work with the task record structure and its fields.
- Identify and locate task files, attachments, and specification files.
- Generate task titles and IDs from summaries.
- Name and organise task attachment files.
- Read and validate task files and specification attachments.

## Mandatory Reading

## API

### Definitions

---

| Type       | Name | Definition                                                                                                     | Path                 | Status |
| ---------- | ---- | -------------------------------------------------------------------------------------------------------------- | -------------------- | ------ |
| Definition | Task | A structured domain record, defining a work item, goal, scope, requirements, constraints, and expected outcome. | definitions/index.md | ✅     |

---

| Type       | Name                        | Definition                                                                                                                   | Path                 | Status |
| ---------- | --------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | -------------------- | ------ |
| Definition | Definitions Related to Task | Task Template, Task Draft, Task Attachment, Task Specification — extended concepts for task records and their attachments. | definitions/index.md | ✅     |

---

### Structures

---

| Type       | Name        | Fields                                                                                                                               | Path                     | Status |
| ---------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------ | ------ |
| Structure  | Task Record | id, title, metadata.template, required-skills, mandatory-reading, summary, summary.scope, summary.dependencies, specifications, attachments | structures/task_structure.md | ✅     |

---

### Files

---

| Type | Name                     | Purpose                                                               | Path          | Status |
| ---- | ------------------------ | --------------------------------------------------------------------- | ------------- | ------ |
| File | Task File                | Contains a task record, identified by the pattern `path/{task.id}/task.md`. | files/index.md | ✅     |
| File | Task Attachments         | Arbitrary files created alongside a task file to capture related content. | files/index.md | ✅     |
| File | Task Specification File  | Specification files named after `task.id` and `spec.id` using the pattern `{task.id}/task__spec__{spec.id}.md`. | files/index.md | ✅     |

---

### Processes

---

| Type      | Name                                     | Purpose                                                              | Input        | Output         | Path                 | Status |
| --------- | ---------------------------------------- | -------------------------------------------------------------------- | ------------ | -------------- | -------------------- | ------ |
| Process   | Process for Generating Task Titles       | Compact a task summary into a stable, scoped task title.             | task summary | task title     | processes/index.md   | ✅     |
| Process   | Process for Generating Task IDs          | Generate a kebab-case task identifier from a normalised title.       | task title   | task id        | processes/index.md   | ✅     |
| Process   | Process for Inferring Task IDs           | Infer task IDs from context.                                         | —            | —              | processes/index.md   | 🚧     |
| Process   | Process for Naming Task Attachment Files | Name attachment files after the task file with a `__{type}` suffix.  | attachment type | attachment filename | processes/index.md | ✅     |
| Process   | Process for Reading Task Files           | Read and validate a task file against its template.                  | task file    | task record    | processes/index.md   | ✅     |
| Process   | Process for Reading Specification Attachments | Read and validate a task specification attachment against its template. | spec attachment | spec content | processes/index.md   | ✅     |

---

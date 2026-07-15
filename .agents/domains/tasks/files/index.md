# Task Related Files

## Files

### Task File (#all)

**Purpose:** Contains a task record, as defined by `.agents/domains/tasks/task_structure.md`.

**Naming Pattern:** `{any path}/task-{task.id}/task.md`.

**Template:** `.agents/domains/tasks/templates/plan__template.md`.

**Location:** Plan files can be located anywhere in the filesystem.

### Task Specification File (#all)

**Purpose:** Contains a specification attached to a task, describing a single implementation objective or requirement.

**Naming Pattern:** `{any path}/task-{task.id}/specifications/{spec.id}.md`.

**Template:** `.agents/domains/tasks/templates/specification__template.md`.

**Location:** Located in a `speficiations/` sub-directory next to the task file.

### Task Attachment File (#all)

**Purpose:** Contains arbitrary supporting content related to a task, generated during task writing, backlog management tasks, or planning, execution phases. Allows consumers of the Task File not be overloaded by unrefined notes.

**Naming Pattern:** `{any path}/task-{task.id}/attachments/{attachment.name}.md`

**Template:** None or arbitrary.

<!-- WIP define task attachment templates -->

**Location:** Located in a `attahcments/` sub-directory next to the task file.

**Examples:**

- `task-{task.id}/attachments/findings.md`
- `task-{task.id}/attachments/discovery.md`

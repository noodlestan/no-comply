# Task Related Files

## Main Files

### Task File (#all)

**Task File:** – Contains a task record, as defined by the task structure `.agents/domains/tasks/task_structure.md`. The `task.id` can be read from the file path using the pattern: `path/{task.id}/task.md`. Example: `refining/milestone-1/update-docs/task.md` where the `task.id` is `update-docs`.

## Other Files

### Task Attachments (#all)

Arbitrary files may be created along side a task file to capture related content without overloading the task entry point.

Examples:

- `task-{task.id}/attachments/findings.md`
- `task-{task.id}/attachments/discovery.md`

### Task Specification File (#all)

The specification files are located in the same directory as the task file they belong to and are named after the `task.id` and `spec.id` using the following pattern: `task-{task.id}/task__spec__{spec.id}.md`

- `task-{task.id}/specificataons/api-changes.md`

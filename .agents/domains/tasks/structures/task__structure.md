# Task Record Structure

## Definitions

### Task Structure Definitions

**Task Status** - One of `DRAFT`, `REFINING`, `READY`, `PLANNING`, `EXECUTING`, `DONE` or `BLOCKED`.

**Task Summary** - A short paragraph focused on the task outcomes and what they enable, unlock, or provide. When **end user** is identified, can be expressed as `user story: who needs the change, what they need it for, and why?`.

**Task Anti Scope** - Items of work not scoped for this task, surfaced during task analysis, writing, or planning as a doubt over whether or not they should be included in the scope.

**Task Acceptance criteria** - A list of externally checkable conditions for done.

**Task Notes** - Temporary short notes gathered during the task writing process.

**Task Refinement Notes** – Classified by `unplanned`, `unknown`, `blockers`, `dependencies`, `risks`, or others.

**Task Follow Up Notes** - Classified by `tasks to create`, `investigate`, or others.

**Task Feedback** - Notes about instructions and processes.

## Structures

### Task Record Identity (#hoist)

> Subset of the Plan Record discoverable by all agents

- `id` – kebab case representation of the task title.
- `skill` the id of the Skill used to generate the task.
- `template` the path to the Template, relatve to the repository root, used to generate the task file.
- `status` - The **Task Status**.
- `title` – Stable, specific task name.
- `summary` – A **Task Summary**.
- `summary.scope` - Summary of scope as defined in the specification attachments.
- `summary.dependencies` - An analysis of dependencies between specifications.
- `required-skills` - A list of skills required for the different phases: `analysis`, `design`, `planning`, `implementation`, and `verification`.
- `required-skills.[i].skill_id` - Example: `create-service-specification`.
- `required-skills.[i].scopes` - Example: `design, implementation, verification`.
- `required-skills.[i].purpose` - Example: `to generate specifications for services`.
- `mandatory-reading` - A list of mandatory reading materials required for the different phases: `analysis`, `design`, `planning`, `implementation`, and `verification`.
- `mandatory-reading.[i].filepath` - Example: `project/reference/conventions/index.md`.
- `mandatory-reading.[i].scopes` - Example: `implementation, verification`.
- `mandatory-reading.[i].purpose` - Example: To inform decisions about implementation details.
- `specifications` - A list of specifications attachments.
- `specification.[i].path` - Path to the specification file relative to the task file.
- `specification.[i].name` - When known, the H1 title of the specification file.
- `specification.[i].type` - Type or category of the specification, when known.
- `specification.[i].operation` – Nature of the requested change to the specification. Typical values include `Add`, `Change`, `Remove`, `Refactor`, `Rename`, `Deprecate`, and `Replace`.
- `attachments` – A list of task attachments (excluding specifications) categorised by attachment type, each with:
- `attachments.[i].type` - Known types such as `spec` or `dependencies` or arbitrary types, such as `note`.
- `attachments.[i].path` - Path to the attachment file relative to the task file.
- `attachments.[i].title` - When known, the H1 title of the attachment file.
- `anti-scope` - **Task Anti Scope**.
- `acceptance-criteria` - **Task Acceptance criteria**.
- `notes` - **Task Notes**.
- `notes.refinement` - **Task Refinement Notes**.
- `notes.follow-up` - **Task Follow Up**.

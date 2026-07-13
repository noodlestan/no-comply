# Task Record Structure

## Task Record (#all)

- `id` – kebab case representation of the task title.
- `title` – Stable, specific task name.
- `metadata.template` – The path to the **Template** used to generate the task file.
- `required-skills` - A list of skills required for analysis and design.
- `required-skills.[i].skill_id` - Example: `create-service-specification`.
- `required-skills.[i].purpose` - Example: `to generate specifications for services`.
- `mandatory-reading` - A list of mandatory materials required for analysis (architecture, patterns).
- `mandatory-reading.[i].filepath` - Example: `project/reference/patterns/index.md`.
- `mandatory-reading.[i].purpose` - To inform decisions about service composition.
- `summary` - A short paragraph representing what needs to be done.
- `summary.scope` - Summary of scope as defined in the specification attachments.
- `summary.dependencies` - An analysis of dependencies between specifications.
- `specifications` - A list of specifications attachments.
- `specification.[i].path` - Path to the specification file relative to the task file.
- `specification.[i].name` - When known, the H1 title of the specification file.
- `specification.[i].type` - Type or category of the specification, when known.
- `specification.[i].operation` – Nature of the requested change to the specification. Typical values include `Add`, `Change`, `Remove`, `Refactor`, `Rename`, `Deprecate`, and `Replace`.
- `attachments` – A list of task attachments categorised by attachment type, each with:

- `attachments.[i].type` - Known types such as `spec` or `dependencies` or arbitrary types, such as `note`.
- `attachments.[i].path` - Path to the attachment file relative to the task file.
- `attachments.[i].title` - When known, the H1 title of the attachment file.

### Summary

A short paragraph representing what needs to be done.

- User story: who needs the change, what they need, and why.
- what needs to be done, and why.

### Acceptance criteria

A list of externally checkable conditions for done.

### Notes

#### Unrefined

Categorised ideas, risks, blockers, open questions, and deferred decisions.

#### Follow ups

Items not in scope but actionable, captured as task stubbs or drafts.

#### Feedback

About instructions and processes.

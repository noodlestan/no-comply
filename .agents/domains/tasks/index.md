# Task Management

Defines common concepts and asserts rules for working with task context files.

## Mandatory Reading

Agents that were requested to read this file as "Mandatory Reading" of agent modes, skills, or processes, MUST ALSO read the following files:

- `.agents/domains/_context/index.md` - base rules for working with all context files.

## Task Management Definitions

- **Task File:** A structured file defining a work item with no implementation details. (#hoist)
- **Task Writing Skill:** A task writing skill active in the current session. Example: `write-task` (generic) or `write-<concrete>-task`.
- **Task Outline:** The structure of the task file.
- **Task Template:** A file prescribing an outline, formatting rules, forbidden certain types of content, and providing example content.
- **Steps:** Structured workflow for writing and updating tasks prescribed by the task writing skill.
- **Findings:** Context gathered during exploration, such as existing conventions, patterns, and APIs.
- **Notes:** The only section of the task file where content other than specification is allowed. Typically "Unrefined" (task writing WIP) and "Follow ups" (items not in scope but actionable).
- **Task Draft:** The draft of the task file. Follows the task template and task outline strictly.
- **Task Attachment:** A file named similar to the task with content not permitted in the task file, such as implementation details or code snippets. (#hoist)

## CRITICAL Rules for reading existing task files

- RULE: When the agent reads a task file and it MUST identify it's the task **Template** used to create it and read the template title.
- RULE: If the agent reads a task file and can't identify the **Template**, the agent MUST STOP AND ALERT THE USER!
- RULE: If the contents of the task file read are too far off the **Template**, the agent MUST STOP AND ALERT THE USER!

## CRITICAL Rules for reading Specification files

- RULE: If the agent reads a task attachment file it MUST identify the &&
- RULE: If the agent reads a task attachment file **Specification** attachment and can't identify its template, the agent MUST STOP AND ALERT THE USER!

## Default Task Outline

If no template is provided by the concrete task writing skill, use this outline:

- frontmatter:
  - source: (path to **Template**)
  - references: (array of context files required to fully understand the task)
  - skills: (array of skills required to implement)
- h1. Name: stable, specific task name.
- h2. One of:
  - User story: who needs the change, what they need, and why.
  - Summary: what needs to be done, and why.
- h2. Links (other files related to this task.)
- h2. Refined:
  - h3. Scope
  - h3. Directions
  - h3. Outcomes
  - h3. Constraints
  - h3. Not in scope
- h2. Acceptance criteria (externally checkable conditions for done).
- h2. Notes
  - h3. Unrefined (categorised ideas, risks, blockers, open questions, and deferred decisions).
  - h3. Follow ups (items not in scope but actionable).

## Process for Naming task files

1. Identify the task name and generate a kebab case identifier.
2. Prefer rewording to hoist scope to the beginning of the identifier.
3. Identify the project(s) in scope and use it to prefix the task identifier.
4. Reword the task title to include the scope.

### Example of Task File naming

Given a task name of "Refactor Code Submodules" in the "Demo Application" project, generate `demo-app-code-submodules-refactor.md`.

Should result in

- Task ID: `demo-app-code-submodules-refactor`
- Task file name: `path/<task-id>.md`
- Task title: "Demo App: Extract Code components to a single module"

## Process for naming Task Attachment files

- RULE: task attachments are named after the task file and suffixed with the `___<attachment type>`.

- RULE: example attachment types are single words such as: `spec`, `findings`, `audit`, `progress`, `plan`, `report`, `followup`.

### Examples of Task Attachment file names

- `demo-app-code-submodules-refactor__findings.md`
- `demo-app-code-submodules-refactor__plan.md`
- `demo-app-code-submodules-refactor__followup.md`

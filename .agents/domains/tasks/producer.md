# Tasks Management

**Use Cases:** Generating tasks and specifications for deferred planning and processing outcomes and feedback.

**Provides:**

- Processes
- Commands

**Capabilities:**

- Generate task drafts
- Generate tasks and specifications

## Mandatory Reading

READ `.agents/domains/tasks/producer.md` - definitions and rules for working with all task files.

## Processes

### Process for Generating Task Titles

With the provided task summary, execute the following steps, checking the result against each step's expected result for the following Input Example: "extract all the calculations in the code submodules of the demo app to private functions".

1. Identify the task Gooal and scope, classify it, and use less specific wording, and less details, in order to compact the title. Expected Result: `Refactor Code Submodules Calculations in Demo App`.
2. Reword to hoist scope to the beginning of the identifier. Expected Result: `Refactor Code Submodules Calculations in Demo App`.
3. Identify the project in scope and use it to prefix the task identifier. Expected Result: `Demo App: Refactor Code Submodules Calculations`.

### Process for Generating Task IDs

**Before you Start:**

1. With the provided task title, check if its raw, or already the result of executing the process for generating task titles.
2. If the title is still too long, too specific, or not scoped to a project, follow the **Process for Generating Task Titles** with the raw title, to normalise it.

With the normalised task title, execute the following steps, checking the result against each step's expected result for the following Input Example: "given a task name `Demo App: Refactor Code Submodules Calculations`.

1. Generate a kebab case identifier. Expected Result: `demo-app-refactor-submodules-calculations`.
2. Prefer rewording to hoist scope to the beginning of the identifier. Expected Result: `demo-app-code-submodules-refactor-calculations`.

### Process for Naming Task Attachment Files

- RULE: task attachments are named after the task file and suffixed with the `__{attachment.type}`.

Example attachment types are single words such as: `spec`, `findings`, `audit`, `progress`, `plan`, `report`, `followup`.

#### Examples of Task Attachment file names

- `task__discovery.md`
- `task__findings.md`
- `task__plan.md`
- `task__followup.md`

## Commands

### Generate Task Title and Id (summary)

**Triggers:**

- When the instructions says `generate-task-id for {summary}`.
- When the user says `task id for {summary}`.
- When the user says `task id for tasks`
- When the user says `task id for all tasks in ...`

**Process:**

1. Identify the summary of the task(s) from the input.
2. Use the most recent context if unable to identify the task(s).
3. If the agent is unable to identify the tasks with confidence, it must ALERT the user and skip the next steps.
4. Follow the **Process for Generating Task Titles** with the identified `summary` to generate a `task.title`.
5. Follow the **Process for Generating Task IDs** with the identified `title` to generate the `task.id`.

## Commands

### Command Creat: Task in (path)

**Triggers:**

- When the instructions says `create-task-file in {path}`.
- When the user says `save task in {path}`.

**Process:**

1. Identify the task that the instructions are referring to.
2. Extract the summary from the task.
3. If the task does not have a `task.title` yet, execute the **Process for Generating Task Titles** with the provided `summary`.
4. If the task does not have a `task.id` yet, execute the **Process for Generating Task IDs** with the provided `summary`.
5. Generate the file path for the task, relative to the repository root.
6. Present the task Title and and ASK for confirmation.

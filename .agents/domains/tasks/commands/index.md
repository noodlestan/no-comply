# Task Related Commands

## Commands

### Command: Generate Task Title and Id (summary)

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

### Command: Create Task in (path)

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

### Command: Read Task(s) (file(s))

**Purpose:** Read a task file and identify the most relevant information

**Triggers:**

- When the instructions say `read-task-from {path}`.
- When the instructions say `read-tasks-from {directory | glob}`.
- When the user says `read task {file}`.
- When the user says `read tasks {files | pattern}`.

1. Identify the task(s) filename, path or glob, from the inputs.
2. Use the most recent context if unable to identify task path(s).
3. Execute the **Process for Reading task Files** with each identified File.

### Command: List Tasks From (path(s))

**Purpose:** Read al task files from a specific directory or glob pattern.

**Triggers:**

- When the instructions say `list-tasks-from {directory}`.
- When the instructions say `list-tasks-from {directory | glob}`.
- When the user says `list tasks {directory}`.
- When the user says `list tasks in {directory | glob}`.

1. Identify the path(s) directorie from the inputs.
2. Glob for files matching `**/task.md` under the identified path(s) to identify all task directories.
3. With each task directory, identify the `task.id` from the last `task-{task.id}` segment of the path. Example: `path/to/task-{task.id}/task.md`.
4. Glob all task directories with a single `{...path directories...}/**` pattern to locate all task files and sub-drectories under each task directory.
5. With each file, classify files according to:

- the `main file` - `task-{task.id}/task.md`
- the `specifications` - `task-{task.id}/specifications/{specification.id}.md`
- the `attachments` - `task-{task.id}/attachments/*`
- eventual `directories` - `task-{task.id}/{task-directory}/`
- other `unclassified` files - everything else.

5. Generate a table with one row for each `task.id` and columns `main file`, `attachments`, `directories` and `unclassified`.

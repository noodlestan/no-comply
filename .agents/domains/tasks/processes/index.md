# Task Related Processes

## Processes

### Process for Generating Task Titles (#all)

With the provided task summary, execute the following steps, checking the result against each step's expected result for the following Input Example: "extract all the calculations in the code submodules of the demo app to private functions".

1. Identify the task Gooal and scope, classify it, and use less specific wording, and less details, in order to compact the title. Expected Result: `Refactor Code Submodules Calculations in Demo App`.
2. Reword to hoist scope to the beginning of the identifier. Expected Result: `Refactor Code Submodules Calculations in Demo App`.
3. Identify the project in scope and use it to prefix the task identifier. Expected Result: `Demo App: Refactor Code Submodules Calculations`.

### Process for Generating Task IDs (#all)

**Before Executing:**

1. With the provided task title, check if its raw, or already the result of executing the process for generating task titles.
2. If the title is still too long, too specific, or not scoped to a project, follow the **Process for Generating Task Titles** with the raw title, to normalise it.
3. With the normalised task title, execute the following steps, checking the result against each step's expected result for the following Input Example: "given a task name `Demo App: Refactor Code Submodules Calculations`.
4. Generate a kebab case identifier. Expected Result: `demo-app-refactor-submodules-calculations`.
5. Prefer rewording to hoist scope to the beginning of the identifier. Expected Result: `demo-app-code-submodules-refactor-calculations`.

### Process for Inferring Task IDs (#all)

<!-- WIP -->

### Process for Writing Task Files (#producer)

Before adding any content to a Task or Task Specification file the agent MUST check if the content is allowed according to the following rules:

- RULE: details extracted from knowledge pattern and convention files are STRICTLY DISALLOWED. Example: "create barrel file" (the reference files will be read at planning/implementation time).
- RULE: implementation details and code snippets are STRICTLY DISALLOWED. Example: "The CSS for the `.classname` should set `--__display: flex`"
- RULE: tables are NOT ALLOWED unless prescribed by the template.
- RULE: diagrams are NOT ALLOWED unless prescribed by the template.

- RULE: If the implementation details already in context are valuable, the agent SHOULD create a `task-{task.id}/plan/attachments/notes.md` attachment file and drop that content there.

#### Content Rules for Task Files (#producer)

<!-- WIP no rules -->

- RULE: The following are allowed in Task Files: acceptance criteria, overall API decisions, summarised contracts, summary of composed entities and structure, and notes.

#### Content Rules for Specification Files

<!-- WIP no rules -->

- RULE: The following are allowed in Specification files: design rationale, conventions references, accessibility requirements, detailed contract (props and API) definitions, composition mechanics, styling bindings, example usage.

### Process for Naming Task Attachment Files (#all)

- RULE: task attachments are named after the task file and suffixed with the `__{attachment.type}`.

Example attachment types are single words such as: `spec`, `findings`, `audit`, `progress`, `plan`, `report`, `followup`.

Example Attachment filenames:

- `task__discovery.md`
- `task__findings.md`
- `task__spec__.md`
- `task__plan.md`
- `task__followup.md`

### Process for Reading Task Files (#all)

<!-- WIP Process for Reading Task Files -->

- RULE: When the agent reads a task file and it MUST identify it's the task **Template** used to create it and read the template title.
- RULE: If the agent reads a task file and can't identify the **Template**, the agent MUST STOP AND ALERT THE USER!
- RULE: If the contents of the task file read are too far off the **Template**, the agent MUST STOP AND ALERT THE USER!

### Process for Reading Specification Attachments (#all)

<!-- WIP Process for Reading Specification Attachments -->

- RULE: When the agent reads a task attachment file it MUST identify its **Template**.
- RULE: If the agent reads a task attachment file **Specification** attachment and can't identify its template, the agent MUST STOP AND ALERT THE USER!

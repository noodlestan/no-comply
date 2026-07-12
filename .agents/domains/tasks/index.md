# Tasks Domain Index

**Use Cases:** Reading and interpreting tasks and interacting with task attachments.

**Provides:**

- Processes
- Commands

**Capabilities:**

- Work with task files to generate plans.
- Attach reports to task files.

## Definition of "Task"

**Task:** A structured definition of a work item describing the goal, scope, requirements, constraints, and expected outcome, without implementation details.

## Definitions Related to "Task"

- **Task File:** A structured file defining a work item with no implementation details. (#hoist)
- **Task Writing Skill:** A task writing skill active in the current session. Example: `write-task` (generic) or `write-{specific}-task`.
- **Task Outline:** The structure of the task file.
- **Task Template:** A file prescribing an outline, formatting rules, forbidden certain types of content, and providing example content.
- **Steps:** Structured workflow for writing and updating tasks prescribed by the task writing skill.
- **Findings:** Context gathered during exploration, such as existing conventions, patterns, and APIs.
- **Notes Section:** The only section of the task file where content other than specification is allowed. Typically "Unrefined" (task writing WIP) and "Follow ups" (items not in scope but actionable).
- **Task Draft:** The draft of the task file. Follows the task template and task outline strictly.
- **Task Attachment:** A file named similar to the task with content not permitted in the task file, such as implementation details or code snippets. (#hoist)
- **Task Specification:** A structured attachment file following a template defined by the active writing skill for capturing technical details of the task. (#hoist)
- **Task Thinking Mode:** A mode where analysis of use cases, contracts, and API design is allowed whereas planning of implementation details is NOT allowed.
- **Task Exploration Mode:** A mode where the agent gathers context about existing entities, APIs, and conventions. Limited to reading API contracts (types, props, exports) from target files.

<!-- WIP hoist less rules, expose more process and commands -->

<!-- WIP Conventions for Task relared files -->

<!-- WIP types of tasks files -->

## Process for Reading Task Files

With the

- RULE: When the agent reads a task file and it MUST identify it's the task **Template** used to create it and read the template title.
- RULE: If the agent reads a task file and can't identify the **Template**, the agent MUST STOP AND ALERT THE USER!
- RULE: If the contents of the task file read are too far off the **Template**, the agent MUST STOP AND ALERT THE USER!

## Content Eligibility Rules

Before adding any content to a Task or Task Specification file the agent MUST check if the content is allowed according to the following rules:

- RULE: details extracted from knowledge pattern and convention files are STRICTLY DISALLOWED. Example: "create barrel file" (the reference files will be read at planning/implementation time).
- RULE: implementation details and code snippets are STRICTLY DISALLOWED. Example: "The CSS for the `.classname` should set `--__display: flex`"
- RULE: tables are NOT ALLOWED unless prescribed by the template.
- RULE: diagrams are NOT ALLOWED unless prescribed by the template.

### Content Rules for Task Files

- RULE: The following are allowed in Task Files: acceptance criteria, overall API decisions, summarised contracts, summary of composed entities and structure, and notes.

### Content Rules for Specification Files

- RULE: The following are allowed in Specification files: design rationale, conventions references, accessibility requirements, detailed contract (props and API) definitions, composition mechanics, styling bindings, example usage.

### Offloading Disallowed Content

- RULE: If the implementation details already in context are valuable, the agent SHOULD create a `{task.id}/task__plan-notes.md` attachment file and drop that content there.

## CRITICAL Rules for reading Specification files

- RULE: When the agent reads a task attachment file it MUST identify its **Template**.
- RULE: If the agent reads a task attachment file **Specification** attachment and can't identify its template, the agent MUST STOP AND ALERT THE USER!

## Default Task Outline

If no template is provided by the concrete task writing skill, use this outline:

- h1. Name: stable, specific task name.
- h2. Matadata
  - template: (path to **Template** used)
- h2. Skills required
- h2. Mandatory Reading
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

## Types of Files Related to Tasks

### Task File

The `task.id` can be read from the plan file name using this pattern: `path/{task.id}/task.md`.

The Template `.agents/domains/tasks/task_template.md` defines the structure of a task file in an arbitrary location.

### Task Specification File

The specification files are located in the same directory as the Task File and are named after the `task.id` and `spec.id` using the following pattern:

**Implementation Instructions file pattern:** `{task.id}/task__spec__{spec.id}.md`

The Template `.agents/domains/plans/spe_template.md` defines the structure for specifications.

### Other Task Attachments

Arbitrary files may be created along side a task file to serve

Examples:

- `/task__dependencies.md`, `create-component/task__spec__component-badge.md`.
- `{task.id}/task__findings.md`
- `{task.id}/task__discovery.md`

**Implementation Instructions file pattern:** `{plan.id}/plan__report__{delegation.id}.md`

These files contain the Sub Agent Report verbatim, detailing the outcome of the sub-agent process.

The Template `.agents/domains/plans/report_template.md` defines the structure of the sub-agent response and it is referenced from the Implementations Instruction to be processed by the sub-agent at reporting time.

## Commands

### Command: Read Task(s) (file(s))

**Goal:** Read a task file and identify the most relevant information

**Triggers:**

- When the instructions say `read-task-from {path}`
- When the instructions say `read-tasks-from {directory | glob}`
- When the user says `read task {file}`
- When the user says `read tasks {files | pattern}`

1. Identify the task(s) filename, path or glob, from the inputs.
2. Use the most recent context if unable to identify task path(s).
3. Execute the **Process for Reading task Files** with each identified File

### Command: List Tasks From (path(s))

**Goal:** Read al task files from a specific directory or glob pattern.

**Triggers:**

- When the instructions say `list-tasks-from {directory}`.
- When the instructions say `list-tasks-from {directory | glob}`.
- When the user says `list tasks {directory}`.
- When the user says `list tasks in {directory | glob}`.

1. Identify the path(s) directorie from the inputs.
2. List all task files matching `{task.id}/task.md` under the identified path(s).
3. Respond only with the

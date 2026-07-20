# Artificials

**tl;dr:** The context files in this project – and the resources and instructions within them – follow a structured format. All Agents MUST read the following definitions and register the routines, rules and triggers below, so that they can interpret instructions with minimum inference.

## Definitions

**Context File** – Any markdown file with structured instructions. Context Files declare **Resources** which can be routines, data structures, conventions, templates, and processes to locate, validate, generate, and interpret resources within each domain.

**Interpretation Prerequisite** – Files and resources (sections) that MUST be read before a context can be interpreted and synthesised.

**Execution Prerequisite** – Files and resources (sections) that MUST be read before a routine or other instructions can be executed.

**Self-Contained Markdown Sections** – Sections in markdown files that contain key/value fields and MUST be read as a self-contained context value, including all fields declared within them.

**Structure** – A named definition that specifies the _schema_ (shape) and _semantics_ (meaning) of a resource. Examples: "Structure: Task", "Structure: Routine", "Structure: Primitive".

### Definition of Resource

**Resource** – An instance of a specific `type`. Resources are generated during a session or extracted from a context file. Resources are expressed in self-contained markdown sections of any level, with a heading matching `# {type}: {name}`. The shape of each resource is determined by its `type`, and described by a structure that maps declaration fields to a schema. Example: "Resources of type: 'task' are described by `Structure: Task`".

**Pattern for Resource Declararation Sections** – `# {type}: {name}`.

**Examples of Resource Section Titles:** – "## Routine: Archive Plan", "### Template: Specification", "# Task: Configure Build".

**Example of Resource:**

```md
#### Task: Create Badge Component

**Id:** `create-badge-component`
{ ... more fields and content }
```

### Resource Fields / Declaration Fields

**Declaration Field** – A named block within a declared resource that attaches a value to the resource record. Fields are read sequentially and no field can be skipped or inferred from prior fields. Examples: "Purpose", "Inputs", "Outputs", "Procedure".

**Example of Resource with Fields:**

```md
### Plan: Configure Build

**Required Skills:**

- `discover-conventions`
- `write-followups`

**Mode:** Delegated Execution.
```

### Defininition of Procedures, Routines, and Comamnds

**Procedure** – The instructions field of a Routine, describes the workflow imperatively, with a detailed step by step workflow, and using a controlled vocabulary, and specific natural language statement patterns.

**Example of Procedure:**

```md
**Procedure:**

1. List tasks under `%path` with `ls {%path}/**/task.md` to `%task-files`.
2. With each `%file` in `%task-files`:
   1. Read `%file` and extract the `%task` resource.
   2. Add a record with `%task.id`, `%task.summary` and `%task.status` to the `%table`.
3. Return the `%table` as `%task-list`.
```

**Routine** – A resource of type "Routine". Contains executable instructions, reusable in different contexts. Procedures have precise Inputs and Outputs and a workflow-based Procedure. Routines can execute other routines, hand over params and perform operations on returned context values. Examples: "Routine: Create Task", "Command: Update Skills", "Renderer: Artificial".

**Example of Routine:**

```md
### Routine: List Tasks

**Inputs:** `%path` - To scan for tasks.

**Outputs:** `%task-list` - A table of tasks, with their summaries, and statuses.

**Procedure:**

1. {workflow, step by step}
```

**Command** – A resources of type "Command" that does everything routine does but is meant to be invoked by the user. Example invocation: "With the collected notes, use the **Write Task** command to prepare a task draft."

**Template** – A reusable document structure containing fixed content and directives for generating output from context values. Example invocation: "Use the **Plan Template** template to generate the plan outline."

<!-- WIP add Renderer -->

<!-- WIP add "Resource File" -->

## Routines

### Routine: Read Mandatory File

**Before Executing:**

1. If you haven't yet initialised a Bookshelf List, create a table with 3 columns:

- `%file` - Name of file being read.
- `%title` - Title of the file being read.
- `%trigger` - Why the file is being read.
- `%resources` - Specific reading requested.

**Input**

- `%file` - Name of the file to read.
- `%trigger` - Name of file that required the reading, or trigger, or "user prompt".
- `%resource-refs` - (Optional) Resource references with name and type of resources that MUST be read from this file.

**Output:**

- `%contents` - The contents of the file.

**Procedure:**

1. Classify this `%file` as an interpretaion prerequisite.
1. If you haven't yet read the `%file`, read it now.
1. If the `%file` contains a `## Mandatory Reading` section
   1. Execute the **Routine: Read Mandatory Reading Section** to satisfy the interpretation prerequisites.
1. CRITICAL RULE: if you are unable to read the `%file`:
   1. Generate a `%ERROR` message: "{`%file`} requested by {`%trigger`} could not be read.".
   2. THROW `%ERROR` to user and STOP processing.
1. If the `%file` being read is not yet in the Bookshelf List:
   1. If one or more explicit `%resource-refs` were requested, identify them, otherwise ignore.
   2. Prepare a `%bookshelf-item` with `%file`, `%title`, `%trigger` and `%resource-refs` ('-' if no explicit resources requested).
   3. Append it to the Bookshelf List.
1. If files were added to the Bookshelf List:
   1. Present the new files to the user.

**Purpose:** How to read a mandatory file to satisfy interpretation prerequisites.

### Routine: Read Mandatory Reading Section

**Inputs:**

- `%file` – The name of the context file being read.

**Procedure:**

1. With each `%file` being read.
   1. Read the file as `%contents`.
   2. Identify the section "## Mandatory Reading" as `%mandatory-reading-section`.
   3. If a `%mandatory-reading-section` found in the file:
      1. Identify all `%directives` containing `::READ` directives. Example: "- ::READ `.agents/domains/index.md`"
      2. With each `%read-directive` in `%directives`, execute the **Routine: Execute READ Directive** with trigger `%file`.

**Purpose:** How to interpret a `Mandatory Reading Section` and fulfil interpretation prerequisites.

### Routine: Execute READ Directive

**Input:**

- `%read-directive`

**Supported Patterns:**

```text
::READ `file` ...

::READ ({resource-ref}, ...) FROM `file` ...

::READ FROM `file`

- {resource-ref}
- {resource-ref}

::END READ
```

**Examples:**

```text
::READ `.agents/domains/index.md` to discover the available domains.

::READ (Routine: Execute Plan, Routine: Delegate Plan) FROM `.agents/domains/plans/index.md`.

::READ FROM `.agents/domains/tasks/index.md`

- Task: Create Badge
- Template: Task

::END READ
```

**Procedure:**

1. Identify the file where the `::READ` directive was found as `%trigger`.
2. Match `%read-directive` against the supported patterns to identify `%resource-refs` and `%file`.
3. Classify the identified `%file` as an interpretation prerequisite.
4. If the directive matches one or more `%resource-refs`:
   1. With `%file`, `%trigger`, and `%resource-refs`, execute the **Routine: Read Resources from File** to read the resources into the context.
5. Otherwise:
   1. With `%file` and`%trigger` execute the **Routine: Read Mandatory File**, to read the resources into the context.

**Purpose:** How to interpret a `::READ` directive and how to execute it to fulfil interpretation prerequisites.

### Routine: Read Resources from File

**Inputs:**

- `%file` – Filename of the context file where the resource is declared.
- `%resource-refs` – Resource references with name and type of the resources to read. Example: "Task: Configure Build".
- `%trigger` - Why the file is being read.

**Output:**

- `%resources` - The structured record extracted from the `%file`.

**Procedure:**

1. Prepare an empty list of `%resources`.
2. With `%file`, `%trigger` and `%resource-refs`, execute the **Routine: Read Mandatory File** to read its `%contents`.
3. With each `%ref` in `%resource-refs`:
   1. Identify the markdown `%section` matching the `%refs`. Example: "# Task: Configure Build".
   2. Prepare a `%resource` record with:
      - `type` – from the heading pattern (e.g., "Routine", "Task")
      - `name` – from the heading pattern (e.g., "List Tasks")
   3. Read all `**{field}:**` declarations within the section, as `%fields`.
   4. With each `%field` in `%fields`:
      1. Extract the `%field-name` and `%field-value` from the declaration.
      2. Add an entry with (key: `%field-name`, value: `%field-value`) to the `%resource`.
   5. Append the `%resource` record to the `%resources` list.
4. Return the loaded `%resources`.

**Example:**

Given a section with a Task resource in a context file:

```md
## Task: Create Badge Component

**Id:** create-badge-component
**Summary:** Create a badge component for the design system.
**Specs:**

These specs are ready for execution:

- spec-1.md
- spec-2.md

**Status:** DRAFT
```

And given a request to read resource "Task: Create Badge Component"

Then the agent returns:

```
{
  type: "Task",
  name: "Create Badge Component",
  id: "create-badge-component",
  summary: "Create a badge component for the design system.",
  specs: "These specs are ready for execution:" + List (spec-1.md, spec-2.md),
  status: "DRAFT",
}
```

**Purpose:** How to read a resource from a markdown section and extract its declaration fields into a record to fulfil interpretation prerequisites.

## Global Triggers and Rules

### Interpreting Mandatory Reading Sections

**Triggers:**

- When reading any context file, resource file, or Markdown file.
- When processing user commands that requires reading context files, resource files, or Markdown files.

**Procedure:**

1. If the `%file` being read contains a `## Mandatory Reading` section.
   1. Classify all contents of this section as interpretation prerequisites.
   2. Execute the **Routine: Read Mandatory Reading Section** to fulfil these prerequisites.

**Scan Selectively** – All markdown sections, of any level, with a heading matching `# {type}: {name}` is a resource. Agents MUST locate the resource(s) referenced in other files and read them sequentially.

### Executing Routines, Commands, Renderers

**Triggers:**

- When the instructions say "Execute the **Routine: ...**".
- When the instructions say "With {context values}, execute the **Routine: ...**.
- When the user says "Execute the **Command: ...**.
- When preparing to execute a routine.

**Note:** Commands and Renderers are Routines as well. The following applies to all.

**Procedure:**

1. Identify the `%ref` and the `%routine` resource. Example: "Routine: ListTasks".
2. Identify the `%file` where the routine is declared.
3. If the `%file` has not been read, or the `%routine` has not yet been loaded as a resource record:
   1. Classify the `%file` as an execution prerequisite.
   2. Classify the `%resource` as an execution prerequisite.
   3. Identify the source file where the routine is being invoked as `%trigger`
   4. With `%file`, `%trigger`, and `%resource-ref`, execute the **Routine: Read Resources from File** to read the `%routine`.
4. Read the `%routine` contents and identify:
   1. Input parameters.
   2. Workflows under "Before Executing", "Procedure"
   3. Execute them sequentially.
   4. If the `%routine` THROW ERROR and STOP processing.

### Interpreting Resource Sections

**Triggers:**

- When instructed to read Resource(s) from context files.
- When interpreting resource declaration sections in markdown files or user input.
- When a reading directive identifies specific resources to read.

**Examples:**

- "::READ (Routine: Setup, Routine: Config) FROM {filename}".
- "Read the `%task` from `%filename`".
- "Read "Routine: Execute Plan" from {filename}".
- "List all Routines declared in {filename}".

**Procedure:**

1. Identify the `%file` where the resource is located. Example: "create-badge-component/task.md".
2. Identify the `%type` and `%name` of the resource to read. Example: "(type: Task, name: Create Badge Component)".
3. Identify the `%resource-ref` to read using the `{%type}: {%name}` pattern. Example: "Task: Create Badge Component".
4. If the resource has not yet been loaded as a resource record:
   1. Classify the request to read it as an Interpretation Prerequisite.
   2. The agent MUST NOT synthesise information before satisfying all prerequisites.
   3. With `%file` and `%resource-ref`, execute **Routine: Read Resources from File** to fulfil the prerequisites.

### Interpreting ::READ Directives

**Triggers:**

- When ANY instructions contain a `::READL` directive.

**Procedure:**

1. Classify the `::READ` directive as an Interpretation Prerequisite and identify it as `%read-directive`.
2. RULE: The agent MUST NOT synthesise information before satisfying all prerequisites.
3. With each `%read-directive` identified:
   1. Execute the **Routine: Execute READ Directive** to fulfil the prerequisites.

### Interpreting Mandatory Reading Sections

**Triggers:**

- When a Mandatory Reading Section is processed.

**Procedure:**

1. Classify the `::READ` directives in the "Mandatory Reading" section as interpretation prerequisites.
2. RULE: The agent MUST NOT synthesise information before satisfying all prerequisites.
3. Execute the **Routine: Mandatory Reading Section** to fulfil the prerequisites.

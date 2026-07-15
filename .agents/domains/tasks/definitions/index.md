# Task Domain Definitions

## Definition of "Task" (#hoist)

**Task** – A structured domain record, defining a work item, goal, scope, requirements, constraints, and expected outcome.

## Definitions Related to "Task" (#all)

**Task Template** – A template for rendering a task to a file, prescribing an outline and content rules, directives, and examples.

**Task Draft** – An incomplete task record.

**Task Attachment** – Extended content for tasks, with items not permitted in the main task file, such as implementation details or code snippets. (#hoist)

**Task Specification** – A structured attachment file following a template defined by the active writing skill for capturing technical details of the task. (#hoist)

## Definitions Related to "Task" (#producer)

**Task Writing Skill** – A task writing skill active in the current session. Example: `write-task` (generic) or `write-{specific}-task`.

**Task Findings** – Context gathered during task writing explorations, such as existing conventions, patterns, and APIs.

**Notes Section** – The only section of the task where content other than specification is allowed. Typically "Unrefined" (task writing WIP) and "Follow ups" (items not in scope but actionable).

**Task Thinking Mode** – A mode where analysis of use cases, contracts, and API design is allowed whereas planning of implementation details is NOT allowed.

**Task Exploration Mode** – A mode where the agent gathers context about existing entities, APIs, and conventions. Limited to reading API contracts (types, props, exports) from target files.

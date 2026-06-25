---
name: delegate-task
description: Delegates an existing task to a subagent and records status and outcome
---

# Skill: Execute Task

## Goal

Execute a previously-created delegation task.

## When To Use

Only when requested.

Only when running in **Executor Agent**

## Instructions

### Before you start

Make sure the agent is the correct one.

The task file already exists and follows:

- **Task Template** `<root>/.opencode/templates/simple-task_template.md`
- **Task Record** `<root>/.opencode/templates/simple-task_record.md`

Paths follow Path Resolution rules in AGENTS.md.

Treat the task file as authoritative.

### Step 4: Execute

Load the task from given location:

`<path>/task_<task-name>.md`

Extract the delegation prompt.

Launch the sub-agent.

Pass the delegation prompt unchanged.

Tell the sub-agent to:

- Work autonomously.
- Ask questions only when blocked.
- Report results in its final message.

#### Subagent questions

If the sub-agent asks a question:

- Relay it verbatim.
- Relay the human response verbatim.

Do not reinterpret either message.

#### Blocked

If the sub-agent becomes blocked:

Update task file:

```md
h2. Status

BLOCKED

h3. Blocker: <summary of blocker>

<sub-agent message>
```

Stop and report back.

### Step 5: Record outcome

When the sub-agent completes successfully:

Update task file:

```md
h2. Status

DONE

h3. Changes

<description of changes in one sentence>

<more details about changes, eventually specifing files created or modified, eventually saying what was done but NEVER including snippets of the changes, just names of things created or modified>

h3. Notes

<pending items, doubts, questions>
```

Present:

- Task
- Status
- Summary
- Task file path

## Output

Write and maintain:

`task_<task-name>.md`

The task file is the only shared state between delegator and sub-agent.

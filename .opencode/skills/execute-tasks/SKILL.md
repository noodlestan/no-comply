---
name: execute-tasks
description: Executes a task group by delegating individual tasks to sub-agents and tracking group progress
---

# Skill: Execute Tasks

## Goal

Execute a task group by delegating individual tasks to sub-agents and tracking overall progress via the task-group record.

## When To Use

Only when requested.

Only when running in **Executor Agent**.

Do not use for single-task execution — use `delegate-task`.

## Dependencies

This skill relies on:

- **delegate-task** — for individual task execution
- **task-group_template** — `.opencode/templates/task-group_template.md`
- **task-group_record** — `.opencode/templates/task-group_record.md`

The task-group record is the authoritative source for group state.

## Instructions

### Before you start

Ensure:

- You are in **Executor Agent**
- All referenced task files already exist and follow the task record template
- A task-group file exists or will be created via the task-group template

Treat all task files and the task-group file as authoritative state.

Do not inspect task contents beyond what is required for delegation mechanics.

---

### Step 1: Load task group

Load the task group file.

If it does not exist:

- Create it from the task-group template
- Confirm location with the user
- Stop before execution

---

### Step 2: Set execution state

Mark task group as executing per task-group record rules.

---

### Step 3: Select eligible tasks

From the task group:

- Identify tasks not yet completed
- For each task, verify only `## Status` is `READY`

Do not inspect task content beyond status.

Present eligible tasks and wait for confirmation.

---

### Step 4: Execute in batches

Execute tasks in batches (default: 3).

For each batch:

- Launch sub-agents concurrently
- Pass each task’s delegation prompt unchanged (via `delegate-task`)
- Do not modify prompts

#### Sub-agent interaction

- Relay questions verbatim
- Relay answers verbatim
- Do not interpret

#### Blocked tasks

If a task becomes blocked:

- Update task using `delegate-task` blocked rules
- Record blocker in task-group using task-group record rules
- Continue remaining tasks in batch

---

### Step 5: Record outcomes

When a task completes:

- Update task via `delegate-task` completion rules
- Update task-group using task-group record rules
- Do not copy task outputs into group record (only status-level data)

---

### Step 6: Iterate or finalize

If tasks remain:

- Proceed to next batch

If all tasks complete:

- Mark task-group as DONE per task-group record rules
- Present final summary (group-level only)

---

## Output

Maintain:

- `tasks/<group>/task-group.md` (task-group record)
- Individual task files (via `delegate-task`)

The task-group record is the only shared orchestration state.

## Success Criteria

- All READY tasks are executed via delegation
- Task-group record reflects only status-level progress
- No task content is duplicated into group record
- Blocked tasks do not halt execution
- Execution proceeds in controlled batches

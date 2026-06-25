---
name: execute-plan
description: Executes a plan by delegating individual tasks to sub-agents and tracking the plan's progress
---

# Skill: Execute Tasks

## Goal

Execute a plan (sequence of tasks) by delegating individual tasks to sub-agents and tracking overall progress via the plan record.

## When To Use

Only when requested.

Only when running in **Executor Agent**.

Do not use for single-task execution — use `delegate-task`.

## Dependencies

This skill relies on:

- **delegate-task** — for individual task execution
- **Plan Template** — `<root>/.opencode/templates/plan_template.md`
- **Plan Record** — `<root>/.opencode/templates/plan_record.md`

Paths follow Path Resolution rules defined in AGENTS.md.

The plan record is the authoritative source for plan state.

## Instructions

### Before you start

Ensure:

- You are in **Executor Agent**
- All referenced task files already exist and follow the task record template
- A plan file exists or will be created via the Plan Template

Treat all task files and the plan file as authoritative state.

Do not inspect task contents beyond what is required for delegation mechanics.

---

### Step 1: Load plan

Load the plan file.

If it does not exist:

- Create it in the required location from the Plan Template in the
- Confirm location with the user
- Stop before execution

---

### Step 2: Set execution state

Mark plan as EXECUTING as per Plan Record rules.

---

### Step 3: Select eligible tasks

From the plan:

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

- Update task using `delegate-task` skill "Blocked" rules
- Add blocker to plan using Plan Record rules
- Continue remaining tasks in batch

---

### Step 5: Record outcomes

When a task completes:

- Update task via `delegate-task` skill "Record outcome" rules
- Update plan using Plan Record record rules
- Do not copy task outputs into plan record (only status-level data)

---

### Step 6: Iterate or finalize

If tasks remain:

- Proceed to next batch

If all tasks complete:

- Mark plan as DONE per Plan Record rules
- Present final summary (plan-level only)

---

## Output

Maintain:

- `plan_<name>.md` (plan record)
- Individual task files (via `delegate-task`)

The plan record is the only shared orchestration state.

## Success Criteria

- All READY tasks are executed via delegation
- Plan record reflects only status-level progress
- No task content is duplicated into plan record
- Blocked tasks do not halt execution
- Execution proceeds in controlled batches

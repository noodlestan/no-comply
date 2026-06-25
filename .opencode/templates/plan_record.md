# Plan Record

The Template `<root>/.opencode/templates/plan_template.md` defines the structure of a plan file in an arbitrary location.

The plan record file name (typically) matches:

`plan_<plan-name>.md`

Statuses:

- PREPARING
- READY
- EXECUTING
- BLOCKED
- DONE

The plan record is the authoritative state for orchestration across multiple tasks.

A plan records coordination state only.

It must never duplicate task contents.

It must never copy findings, prompts, outputs, reports, code, analysis, or generated content from individual tasks.

Detailed information remains in the individual task files.

## Listing tasks

IMPORTANT: tasks referenced should follow Path Resolution rules in AGENTS.md — use placeholders (`<root>/`, `<project>/`, `<scope>/`) instead of absolute paths.

The record contains 2 lists

### Task List

Contains only

- Task name (resolvable to the task file e.g.: `<tasks>/task_inspect-core`)
- Task status

The task list eventually groups tasks that can be executed in paralel under phase headings. Example: "Phase 1: Prepare", "Phase 2: Execute"

### Execution

- Batch membership
- Phase and tasks (simplified name, example: `inspect-core`)
- Overall execution status

---

## PREPARING

Used while tasks are being identified and assembled into the plan.

Example:

```md
## Status

PREPARING
```

---

## READY

Used when the plan has been fully defined and is ready for execution.

Example:

```md
## Status

READY
```

---

## EXECUTING

Used between the first task starts being executed until one gets blocked or all succeed.

Example:

```md
## Status

EXECUTING

## Tasks

`<tasks>/task_inspect-core` - DONE
`<tasks>/task_create-meta-core` - EXECUTING
`<tasks>/task_inspect-ui` - READY
```

---

## BLOCKED

Used when execution cannot continue because one or more tasks are blocked.

Requirements:

- Set status to BLOCKED.
- Record only task names and blocker summaries.
- Do not copy task contents.
- Do not copy sub-agent messages.
- Do not duplicate task reports.

Example:

```md
## Status

BLOCKED

## Tasks

- `inspect-core` - DONE
- `inspect-ui` - BLOCKED

## Blockers

### inspect-ui

Required skill not found.
```

---

## DONE

Used when all tasks in the plan have completed successfully.

Requirements:

- Set status to DONE.
- Record final task statuses.
- Record execution batches.
- Do not copy task outputs.
- Do not copy task findings.
- Do not summarize task deliverables.

Example:

```md
## Status

DONE

## Tasks

- `inspect-core` - DONE
- `create-meta-core` - DONE
- `inspect-ui` - DONE
- `create-meta-ui` - DONE

## Runs

### Batch 1

- timestamp: 25/06/26 10:00
- tasks: `inspect-core`, `create-meta-core`
- outcome: all DONE

### Batch 2

- timestamp: 25/06/26 10:30
- tasks: `inspect-ui`, `create-meta-ui`
- outcome: all DONE
```

---

## Tasks Section

The Tasks section provides a compact view of execution state.

Requirements:

- One entry per task.
- Use task names only.
- Record status only.
- Do not include findings.
- Do not include summaries.

Example:

```md
## Tasks

- `inspect-core` - DONE
- `create-meta-core` - DONE
- `inspect-ui` - BLOCKED
```

---

## Runs Section

The Runs section records execution history.

Requirements:

- One entry per execution batch.
- Record timestamp.
- Record task names.
- Record a short outcome summary.
- Never include task outputs.

Example:

```md
## Runs

### Batch 3

- timestamp: 25/06/26 14:15
- tasks: `inspect-api`, `create-meta-api`
- outcome: all DONE
```

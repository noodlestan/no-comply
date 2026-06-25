# Task Group Record

The Template `.opencode/templates/task-group_template.md` defines the structure of a task group file such as:

`./task-groups/<task-group-name>.md`

Statuses:

- PREPARING
- READY
- EXECUTING
- BLOCKED
- DONE

The task group record is the authoritative state for orchestration across multiple tasks.

A task group records coordination state only.

It must never duplicate task contents.

It must never copy findings, prompts, outputs, reports, code, analysis, or generated content from individual tasks.

Only record:

- Task name
- Task status
- Task path (optional)
- Batch membership
- Blocker summary
- Overall execution status

Detailed information remains in the individual task files.

---

## PREPARING

Used while tasks are being identified and assembled into the group.

Example:

```md
## Status

PREPARING
```

---

## READY

Used when the task group has been fully defined and is ready for execution.

Example:

```md
## Status

READY
```

---

## EXECUTING

Used while one or more tasks in the group are being executed.

Example:

```md
## Status

EXECUTING

## Tasks

- `inspect-core` - DONE
- `create-meta-core` - EXECUTING
- `inspect-ui` - READY
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

Used when all tasks in the group have completed successfully.

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

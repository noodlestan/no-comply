# Simple Task Record

The Template `.opencode/templates/simple-task_template.md` defines the structure of a task file such as:

`./tasks/<task-name>.md`

Statuses:

- PREPARING
- READY
- EXECUTING
- BLOCKED
- DONE

The task record is the authoritative state for task delegations and task status.

---

## PREPARING

Used while a task is being defined and assembled.

Example:

```md
## Status

PREPARING
```

---

## READY

Used when the task definition has been completed and is ready for delegation.

Example:

```md
## Status

READY
```

---

## EXECUTING

Used while a sub-agent is actively working on the task.

Example:

```md
## Status

EXECUTING
```

---

## BLOCKED

Used when the delegated sub-agent cannot continue.

Requirements:

- Set status to BLOCKED.
- Record a short blocker summary.
- Preserve the blocking message.
- Stop execution.

Example:

```md
## Status

BLOCKED

### Blocker

Required skill not found.

The skill referenced by the task record does not exist.
```

---

## DONE

Used when the delegated sub-agent finishes successfully.

Requirements:

- Set status to DONE.
- Record a one-sentence summary.
- List created or modified files.
- Do not include code snippets.
- Record remaining notes, questions, or follow-ups.

Example:

```md
## Status

DONE

### Changes

Created the project metadata files.

Created:

- meta/overview.md
- meta/health.md

Modified:

- README.md

### Notes

Project inspection identified several undocumented scripts.
```

# Plan: `{plan name}`

**Status:** PREPARING / READY / WORKING / BLOCKED / DONE

**Plan File:** `path/to/{plan.id}/plan.md`

## Summary

TEMPLATE DIRECTIVE: Summarise the scope of the tasks.

TEMPLATE EXAMPLE: Create new badge component and mixin and refactor controllers.

## Source Tasks

TEMPLATE DIRECTIVE: list the tasks and task attachments by matching any file named `{task.id}/task__**`. Pattern: `{task.id}/task__{attachment.type}[__{attachment.name}].md`. Examples: `refactor-controllers/task__dependencies.md`, `create-component/task__spec__component-badge.md`.

EXAMPLE:

```
path/to/{plan.id}/
	/tasks/
		- refactor-controllers/
			- [task.md](path/to/{plan.id}/tasks/refactor-controllers/task.md)
			- [task__dependencies.md](...)
			- [task__spec__controller.md](...)
			- [task__spec__mixin.md](...)
		- create-component/
			- [task.md](...)
			- [task__notes.md](...)
```

## Delegations

TEMPLATE DIRECTIVE: Include the next section only if plan has delegations. Render one section H3 section for each delegation:

### {delegation.id} = `{delegation.status}`

TEMPLATE EXAMPLE: `### sub-agent-1 - READY`

**Commit Message:** `{commit-message}`

## Commits

TEMPLATE DIRECTIVE: Render one section for each commit.

TEMPLATE EXAMPLE: ### `list-input-box-step-1` - `READY`

### `{commit.kebab-name}` - `{commit.status}`

TEMPLATE DIRECTIVE: Include the commit message.

**Commit Message:** `{commit-message}`

TEMPLATE EXAMPLE: **Commit Message:** `feat(standard-ui): add ListInputBoxItemMixin`

TEMPLATE DIRECTIVE: If the commit was delegated, include the delegation id

**Sub-Agent:** `{delegation.id}`

TEMPLATE DIRECTIVE: Include the name of the delegation instructions file.

**Instructions File:** `{instructions file path}`

TEMPLATE EXAMPLE: `**Instructions File:** path/to/list-input-box/plan__instruct__list-input-box-mixin.md`

TEMPLATE DIRECTIVE: If this commit is `READY`, include a CHANGELOG draft:

TEMPLATE EXAMPLE:

```
**CHANGELOG:**

- Add `mixin:standard:list-input-box`
```

TEMPLATE DIRECTIVE: If this commit is marked as blocked, include a BLOCKER summary and the path to the the sub-agent report when available.

EXAMPLE

```
**BLOCKER:** `inspect-ui` not found. More details in Sub Agent Report `path/to/list-input-box/plan__report__list-input-box-mixin.md`
```

## Follow ups

TEMPLATE DIRECTIVE: Include notes about knowledge uncovered during planning or execution.

## Feedback

TEMPLATE DIRECTIVE: If the sub-agents provided feedback other than "all good" use the **rehash** skill to produce a summary of feedback included in the Sub Agent Reports.

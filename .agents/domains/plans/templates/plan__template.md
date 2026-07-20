# Plan Template

<!-- WIP convert to diretives -->

TEMPLATE DIRECTIVE: Change the `h1` title to `# Plan: {plan.title}`

**ID:** `{plan.id}`

**Status:** `{plan.status}`

**Template:** `{plan.template}`

**Skill:** `{plan.skill-id}`

## Summary

TEMPLATE DIRECTIVE: Summarise the goal and scope of the plan.

TEMPLATE EXAMPLE: Create new badge component and mixin and refactor controllers.

## Source Tasks

TEMPLATE DIRECTIVE: list the tasks and task attachments as markdown links relative to the repository root.

EXAMPLE:

```
- [Demo App: Refactor Controllers](path/to/refactor-controllers/task.md)
  - [Dependencies](path/to/refactor-controllers/task__dependencies.md)
  - [Notes](path/to/refactor-controllers/task__notes.md)
- [Standard UI: Create Badge Component](path/to/standard-ui-create-badge-component/task.md)
  - [Spec: Controller](path/to/tandard-ui-create-badge-component/task__speck__controller.md)
  - [Spec: Mixin](path/to/tandard-ui-create-badge-component/task__speck__mixin.md)
```

## Mandatory Reading

## Commits

TEMPLATE DIRECTIVE: Render one section for each planned commit.

TEMPLATE EXAMPLE: ### `list-input-box-step-1` - `READY`

### `{commit.id}` - `{commit.status}`

TEMPLATE DIRECTIVE: Include the commit message.

TEMPLATE EXAMPLE: **Commit Message:** `feat(standard-ui): add ListInputBoxItemMixin`

**Commit Message:** `{commit.message}`

TEMPLATE DIRECTIVE: Include the filename of the delegation instructions file.

**Instructions File:** `{instructions file path}`

TEMPLATE DIRECTIVE: If the commit was delegated, include the delegation id

**Sub-Agent:** `{delegation.id}`

TEMPLATE EXAMPLE: `**Instructions File:** path/to/list-input-box/plan__instruct__list-input-box-mixin.md`

TEMPLATE DIRECTIVE: If this commit is `READY`, include a CHANGELOG draft:

TEMPLATE EXAMPLE:

```
**CHANGELOG:**

- Add `mixin:standard:list-input-box`
- Remove `mixin:standard:list-input-box`
- Refactor
```

TEMPLATE DIRECTIVE: If this commit is marked as blocked, include a BLOCKER summary and the path to the the sub-agent report when available.

TEMPLATE EXAMPLE:

```
**BLOCKER:** `inspect-ui` not found. More details in Sub Agent Report `path/to/list-input-box/plan__report__list-input-box-mixin.md`
```

## Follow ups

TEMPLATE DIRECTIVE: Include notes about knowledge uncovered during planning or execution.

## Feedback

TEMPLATE DIRECTIVE: If the sub-agents provided feedback other than "all good" use the **rehash** skill to produce a summary of feedback included in the Sub Agent Reports.

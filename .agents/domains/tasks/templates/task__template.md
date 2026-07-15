# Task Template

<!-- WIP convert to diretives -->

TEMPLATE DIRECTIVE: Change the `h1` title to `# Task: {task.title}`

**ID:** `{task.id}`

**Status:** `{task.status}`

**Template:** `{task.template}`

**Skill:** `{task.skill-id}`

### Skills required:

- `skill.id` - `skill.purpose`

## Summary

TEMPLATE DIRECTIVE: Summarise the goal and scope of the task.

TEMPLATE EXAMPLE: Create new badge component and mixin and refactor controllers.

### Specifications

TEMPLATE-DIRECTIVE: include links to task specifications files.

TEMPLATE-EXAMPLES: - `task-{task.id}/specificiations/{specification.id}.md`

### Attachments

TEMPLATE-DIRECTIVE: include a bullet point list of references to other files (not specifications) that are also related to this task.

TEMPLATE-EXAMPLES: - `task-{task.id}/attachments/findings.md`

## Refined

### Scope

- RULE: Follow the "## Rules for creating Summaries" in the writing skill: `.agents/skills/write-no-comply-entity-task/SKILL.md`
- RULE: in the other `**Other Changes**` sub-section, include only changes to non-entities.

**Full Example for a Scope Section:**

```
**Entities**

- Add `component:standard-ui:badge` - [spec](relative/spec-filename)
- Add `mixin:standard-ui:badge` - refining
- Modify `mixin:standard-ui:content-color` refining (change color options)
- Add `mixin:composable:badge` - speculative
- REFACTOR `{scope}` so that ...

**Other Changes**

- Refactor method `getFoo()` of `SomethingAPI` to use an index a optimise responsiveness
- (BREAKING) Change method `getBar()` of `SomethingAPI` to return `boolean` (easy fix downstream)
- Add `{scope}` so that ...
```

### BREAKING CHANGES

List of breaking changes

### Outcomes

- 2 new entities in `{package}` in `{scope}`
- 1 breaking changes in `{package}` in `{scope}`
- 1 BREAKING changes in `{package}` in `{scope}`

### Constraints

Examples:

**Incompatible api**: Do not use `entity/api()` because it is not compatible with ... As a workaround, ... Followup task created below.

### Not in scope

Examples:

**Feature A**: Since we don't have a stable `entity/api()` yet we can't implement `{feature}`. No workadounrd available. Followup task created below.
Notes about items that are prone to be infered as in scope for this task, explaining why

## Acceptance criteria (externally checkable conditions for done).

- All new entities listed in demo-app API docs.
- All new component entities previewable in demo-app component page and sandbox.

## Notes

### Unrefined

List categorised ideas, risks, blockers, open questions, and deferred decisions

### Follow ups

List items not in scope but actionable.

# Component Task Template

Change the `h1` title to maytch

## Metadata

Template: `.agents/no-comply/tasks/templates/no-comply-entity-task__template.md`

### Skills required:

- `skill-id` - and why.

## Summary

One sentence, heavy on why, optimize for humans.

## Changes

Summary of changes created by the task skill using the `rehash` skill along with the local "Rules for Synthesising" and "Rules for Presenting"

## Links

- include links to other files (not specifications) that are also related to this task. Example:
  - `task-{task.id}/attachments/findings.md`
  - `task-{task.id}/attachments/discovery.md`

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

<!-- // WIP -->

- All new entities listed in demo-app API docs.
- All new component entities previewable in demo-app component page and sandbox.

## Notes

### Unrefined

List categorised ideas, risks, blockers, open questions, and deferred decisions

### Follow ups

List items not in scope but actionable.

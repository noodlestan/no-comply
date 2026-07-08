# Component Task Template

Use this template to produce a concrete component task grounded in repo conventions.

- RULE: Fill out every section that applies. Leave N/A sections as `—` (em-dash) rather than deleting them.
- RULE: Tables with wider than 80 characters are forbidden.
- RULE: Diagrams are forbidden.
- RULE: Only one code snippet is allowed (and mandatory): `## Example Usage`.
- RULE: Any other code snippets are forbidden.

## Task Outline

Use the Default Task Outline

Template:

---

## Metadata

template: `.agents/skills/write-no-comply-composable-task/no-comply-composable-task-template.md`

### Skills required:

- `skill-id` - and why.

## Summary

## Table of Changes

List entiies to be added or modified and whether they are being created or modified.

Include the a link to the specification attachment file if it exists.

Include a status word a terse

Example:

- ADD `component:standard-ui:badge` [spec](spec-path)
- ADD `mixin:standard-ui:badge` - no spec
- MODIFY `mixin:standard-ui:content-color` refining (change color options)
- ADD `mixin:composable:badge` - speculative
- REFACTOR `<scope>` so that ...

## Links

- include links to other files (not specifications) that are also related to this task
- `<task-id>__findings.md`
- `<task-id>__discovery.md`

## Refined

### Scope

List entiies to be added and modified and how they relate to each other and other parts of the system.

Optimize for humans.

### BREAKING CHANGES

List of breaking changes

### Outcomes

- 2 new entities in `<package>` in `<scope>`
- 1 breaking changes in `<package>` in `<scope>`
- 1 BREAKING changes in `<package>` in `<scope>`

### Constraints

Examples:

**Incompatible api**: Do not use `entity/api()` because it is not compatible with ... As a workaround, ... Followup task created below.

### Not in scope

Examples:

**Feature A**: Since we don't have a stable `entity/api()` yet we can't implement `<feature>`. No workadounrd available. Followup task created below.
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

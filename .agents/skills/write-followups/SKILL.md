---
name: write-followups
description: Use when requested, typically at the end of a task, to synthetise current context into a file containing the changes made and identified follow-up tasks.
---

# Skill: Write Follow Ups

## Allowed Agent Modes

CRITICAL RULE: If your context `$AGENT_MODE` is NOT set to one of the following **Agent Modes** you are NOT ALLOWED to use this skill:

- `pair-driver`
- `task-manager`

CRITICAL RULE: If you are NOT ALLOWED to use this skill, STOP and advise the user to switch to another agent mode first. List agent modes.

## Mandatory Reading

Read `.agents/domains/knowledge/index.md`, if not yet in context – it explains how to easily find documentation on patterns and conventions related to the current session.

## Before you start

- Identify the task file and concrete task file the follow stem from.
- If no task or no task present in context, or if context references more than one task file, prompt for confirmation before continuing.

## Gathering Context

- RULE: work mainly from context and use terminal tools to grep if needed.
- RULE: use `git diff` (or alternative if already staged or committed) for SOURCE OF TRUTH OF CHANGES.
- RULE: make sure names of artefacts (functions, types, APIs) and files created or modified match the `diff` because names might have drifted from the original plan.

## Where to save the follow ups

Generate `<task-id>___follow-ups.md` as a sibling to the current `<task-id>.md` file.

Ask for confirmation if unsure.

## Follow Ups Outline

- h1. Follow ups for `<task-id>`
- h2. Changes Summary
- h2. Follow up Tasks

## Changes Summary

- RULE: Package names use the actual npm name, not the filesystem path.
- RULE: `change` column uses past tense labels (`added`, `changed`, `removed`, etc.), not prose.

### What NOT to include

- RULE: Never include instructions from the task ("Base the new package scaffold on ...")
- RULE: Never include mandatory details such as `updated imports` or `update barrel files`

### What to include

#### Cross-cutting changes

Include short notes about changes with transversal scope (many modules or many packages)

- RULE: Only if these changes are hard to squeeze into table format.
- RULE: Not more than 1 pragraph, 5 bullet points.

#### Table of changes

```md
| Column    | Content                                                                      |
| --------- | ---------------------------------------------------------------------------- |
| `package` | npm package name (e.g. `@purrpose/solid-shiki-service`)                      |
| `feature` | feature area (e.g. `Syntax highlighting`, `Code blocks`, or `N/A` for infra) |
| `change`  | one of: `added`, `changed`, `removed`, `fixed`, `deprecated`                 |
| `summary` | short description of what happened                                           |
```

- RULE: One row per logical change — a file rename touching 10 files is one row ("moved X from A to B").
- RULE: `feature` is `N/A` only when the change is infrastructure (new package, tooling, config).

#### Example Changes Summary

Given the following example completed work (input) The agent should generate the table of changes presented below (output).

Input:

- Extract `apps/standard-ui-demo/src/services/SyntaxHighlighter` into `libs/purrpose-solid-shiki-service/`.
- Create new package scaffold.
- Update imports in the demo app.
- Delete old service directory.

Output:

```md
| package                       | feature             | change  | summary                                                                 |
| ----------------------------- | ------------------- | ------- | ----------------------------------------------------------------------- |
| @purrpose/solid-shiki-service | N/A                 | added   | new package                                                             |
| @purrpose/solid-shiki-service | Syntax highlighting | added   | `SyntaxHighlighter` service, types, and defaults.                       |
| @no-comply/standard-ui-demo   | Code blocks         | changed | Update to use `SyntaxHighlighter` from `@purrpose/solid-shiki-service`. |
| @no-comply/standard-ui-demo   | Code blocks         | removed | Deleted the old `src/services/SyntaxHighlighter/` implmentation.        |
```

## Follow up Tasks

Suggest potential follow up tasks in bullet point format to the user.

If the user accepts them and/or provides instructions for more tasks, add them all under this title.

These are NOT full task outlines. Ignore `task-writer` skill instructions if these have been read before. Those instructions apply only to task in their own files.

- RULE: Don't generate full task outlines, just a task seed.
- RULE: DO NOT perform extra explorations, work from context only.
- RULE: Prefer `relative/path/to-file.ts` and formatted `symbol` names to code snippets.
- RULE: Follow up tasks must be shorter than 25 lines non-empty lines.

### Example Task

```
### Fix: OverflowItems

This component is currently broken.

**Package:** `@no-comply/solid-composables`
**Feature** Responsive Overflow Items
**Path:** `src/responsive/components/OverflowItems/components/OverflowItems/OverflowItems.tsx`

*What is expected:* Detect the container items that don't fit the container, render only the ones that fit and render a toggle plus a popover to access overflow items.

**Issue:** Does not render popover toggle.

**Possible cause**: `props.children` is rendered in **both** measure and ...

**Fix:** One of the two render locations should use the **memoized** children value...

**Investigate:**

- Is the active nav item (determined by `currentItemId`) is **always kept visible**?
- How does `renderItem` ensures the current item renders in the right location?

**For future reference:**

- Decide whether the audit report should group findings by package, component type, or helper pattern
```

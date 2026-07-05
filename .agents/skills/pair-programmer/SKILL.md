---
name: pair-programmer
description: Common pair programming rules; prefer specialized skills `agent-pair-driver` or `agent-pair-navigator`.
---

# Skill: Pair Programming (Generic)

## Purpose

Work as a programming partner inside an active implementation/debugging session.

The goal of this mode is to slow down from autonomous mode to human pace.

It will typically be used to:

- Solve blockers.
- Fix design/plan flaws in the current task.
- Salvage from context rot.

## Agent Role

Both when driving and navigating the agent is always the note taking assistant.

- RULE: Keep and update a short **TODO LIST** of next steps.
- RULE: Keep also a list of **PENDING QUESTIONS**.
- RULE: Use low reasoning and narrow exploration scope.
- RULE: Advance one step at a time.

Keep your responses short:

- RULE: DO NOT rehash context, changes, status, lists on every response, only when requested.
- RULE: Use terse bullet with shortened paths instead of tables with fully qualified names.

Update status:

- RULE: When the user says **rehash** or **status**, present the current **TODO LIST**, **PENDING QUESTIONS**. And the files changed so far. Bullet point format.
- RULE: DO NOT present the whole context about each todo item or question or snippets from files changed, just their title and status.

## User Role

Both when driving and navigating the user is always the lead developer.

The user will also request these specific actions:

- RULE: If the user says **next** present the one smallest next step that can be manually verified.
- RULE: If the user says **review**, inspect the changed files first and report.
- RULE: When discussing review findings DO NOT make any further edits until review is settled.
- RULE: When the user says **build**, run `npm run lint:fix` in the scope package only.
- RULE: If the user says **clean** or **tidy up** focus on conventions and suggest changes.
- RULE: When the user says **format**, run `npm run lint:fix` in the scope package only.

Requests for offloading context:

- RULE: Update task files such as `<task-id>___blockers.md` with short summaries.

The user is the lead developer.

- RULE: Keep your responses short.
- RULE: Rehash **TODO LIST** and **PENDING QUESTIONS** when requested.

## Reading and modiyfing files during pairing session

Keep the scope focused on the current (or next) sub task of the pairing session.

- RULE: interpret all request for re-reading files as targeting the nearest narrow scope and the most udpated files ONLY.
- RULE: interpret all requests to `npm run ..` as scoped to the relevant package/library directory.

Assume nothing about the current plan, current branch state, or build status:

- RULE: DO NOT rescan codebase outside the scope with `glob` and `grep` unless requested by the user.
- RULE: DO NOT verify build state yourself with `npm run ...` unless requested by the user.
- RULE: **DO NOT** spend time on formatting or lint-style.
- RILE: Always delegate formatting to the nearest `npm run lint:fix`.
- RULE: Be ready to work in parallel with the user on nearby files or adjacent subproblems.
- RULE: Before proposing edits, state the next step and the files in scope to reduce overwrite risk.
- RULE: Re-read files in scope frequently; do not rely on stale context after edits or user corrections.
- RULE: Avoid touching files that are not required for the current step even if that means introducing breaking changes.
- RULE: In case of breaking changes update **TODO LIST** with "udpate consumers of". DO NOT list them just identifying them by contract and/or module.

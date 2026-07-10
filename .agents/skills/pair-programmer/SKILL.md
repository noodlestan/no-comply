---
name: pair-programmer
description: Common pair programming rules; prefer specialized skills `agent-pair-driver` or `agent-pair-navigator`.
---

# Skill: Pair Programming (Generic)

## Allowed Agent Modes

CRITICAL RULE: If your context `$AGENT_MODE` is NOT set to one of the following **Agent Modes** you are NOT ALLOWED to use this skill:

- `agent-pair-navigator`
- `agent-pair-driver`

CRITICAL RULE: If you are NOT ALLOWED to use this skill, STOP and advise the user to switch to another agent mode first. List agent modes.

## Required Skills

- `rehash`
- `parking-lot`

## Mandatory Reading

Read `.agents/domains/references/index.md`, if not yet in context – it describes how to locate documentation on patterns and conventions related to the current session.

## Purpose

Work as a programming partner inside an active implementation/debugging session.

The goal of this mode is to slow down from autonomous mode to human pace.

It will typically be used to:

- Solve blockers.
- Fix design/plan flaws in the current task.
- Salvage from context rot.

## Agent and User Role

IMPORTANT: Both when driving and navigating the agent is always the note taking assistant.

IMPORTANT: Both when driving and navigating the user is always the lead developer.

<!-- refine process -->

## Rules for reading and modiyfing source code and documentation files during pairing session

Keep the scope focused on the current (or next) sub task of the pairing session.

- RULE: interpret all request for re-reading files as targeting the nearest narrow scope and the most udpated files ONLY.
- RULE: interpret all requests to `npm run ..` as scoped to the relevant package/library directory.

Assume nothing about the current plan, current branch state, or build status:

- RULE: DO NOT rescan codebase outside the scope with `glob` and `grep` unless requested by the user.
- RULE: DO NOT verify build state yourself with `npm run ...` unless requested by the user.
- RULE: **DO NOT** spend time on formatting or lint-style.
- RULE: Always delegate formatting to the nearest `npm run lint:fix`.
- RULE: Be ready to work in parallel with the user on nearby files or adjacent subproblems.
- RULE: Before proposing edits, state the next step and the files in scope to reduce overwrite risk.
- RULE: Re-read files in scope frequently; do not rely on stale context after edits or user corrections.
- RULE: Avoid touching files that are not required for the current step even if that means introducing breaking changes.
- RULE: In case of breaking changes update **TODO LIST** with "update consumers of". DO NOT list them just identifying them by contract and/or module.

## Commands

### Command: `Initialize Pairing Session`

**Triggers:**

- When the users says `start`

**Process:**

1. Inspect the changed files first and report.
2. When discussing review findings DO NOT make any further edits until review is settled.

<!-- refine process -->

### Command: `Review`

**Triggers:**

- When the users says `review`
  **Process:**

1. Inspect the changed files first and report.
2. When discussing review findings DO NOT make any further edits until review is settled.

<!-- refine process -->

### Command: `Build`

**Triggers:**

- When the users says `build` or `verify`

**Process:**

1. Run the verification steps.
2. Collect evidence of success or failure.
3. In case of success, use the **rehash** skill to summarise the
4. In case of error, use the **rehash** skill to summarise the

<!-- refine process -->

- When the user says `build`, run `npm run lint:fix` in the scope package only.
- If the user says `clean` or `tidy up` focus on conventions and suggest changes.
- When the user says `format`, run `npm run lint:fix` in the scope package only.

Requests for offloading context:

- Update task files such as `{task.id}/task__blockers.md` with short summaries.

The user will typically be requesting these specific actions:

### Command: `Next`

**Triggers:**

- When the users says `next` or `what's next`

**Process:**

1. Present the one smallest next step that can be manually verified.

---
name: write-task
description: Generic task writing rules; prefer specialized task-writing skills.
---

# Skill: Write Task (Generic)

Use this skill to generate task files that can be refined later.

This is a generic task writing skill, prefer specialized skills.

## Allowed Agent Modes

CRITICAL RULE: If your context `<agent-mode>` is NOT set to one of the following **Agent Modes** you are NOT ALLOWED to use this skill:

- `task-manager`

CRITICAL RULE: If you are NOT ALLOWED to use this skill, STOP and advise the user to switch to another agent mode first. List agent modes.

## Mandatory Reading

Read `.agents/domains/tasks/index.md`, if not yet in context, as it contains definitions and rules that are essential to interpret the instructions on this file.

## Default Steps

These are the default steps for a task writing session:

- Before you start
- Plan exploration
- Explore
- Summarise Findings
- Plan task draft
- Draft Task
- Write Task
- Offload context

## Before you start

1. Identify the concrete task writing skill being used. Example: `write-component-task`.
2. If no concrete skill is loaded, identify the nature of the task and read the skill list to identify a more concrete skill. Example: `write-component-task`.
3. Identify the task name and generate a kebab case identifier. Example: "Refactor Code Submodules" becomes `refactor-code-submodules`.
4. Prefer rewording to hoist scope to the beginning of the identifier. Example: `code-submodules-refactor`.
5. Identify the project(s) in scope and prefix the task identifier. Example: `demo-app-code-submodules-refactor`. or `no-comply-scaffold-two-new-packages`.
6. Identify the task scope and output path.

RULE: Before continuing, present it to the user for confirmation.

## Rules for exploration

Make sure you have read the files under `## Mandatory Reading` in the concrete task writing skill.

- RULE: Obey the process and steps defined by the concrete task writing skill in use.
- RULE: When exploring, categorise context being gathered: intents (of the task), assumptions, facts, issues, questions, contraints.
- RULE: When reasoning, take extra care to address closed scope and confirmed facts as source of truth and immutable context.
- RULE: When reasoning, take extra care to address intentions, ideas, assumptions, and unresolved questions as unconfirmed, not trustworthy.

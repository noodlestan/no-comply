---
name: execute-plan
description: Executes a plan by delegating individual commits to sub-agents and tracking the plan's progress.
---

# Skill: Execute Plan

Execute a plan (sequence of commits) by delegating individual commits to sub-agents and tracking overall progress via the plan record.

## Allowed Agent Modes

CRITICAL RULE: If your context `$AGENT_MODE` is NOT set to one of the following **Agent Modes** you are NOT ALLOWED to use this skill:

- `delegator`

CRITICAL RULE: If you are NOT ALLOWED to use this skill, STOP and advise the user to switch to another agent mode first. List agent modes.

## Mandatory Reading

Read `.agents/domains/plans/index.md`, if not yet in context - it contains definitions and rules that are essential to interpreting the instructions on this file without ambiguity.

Read also the **Plan Template** from `.agents/domains/plans/plan_template.md`.

## Before you start

- RULE: Ensure all referenced `<task.id>.md` files already exist.
- RULE: Ensure all referenced Implementation Instructions files (`{plan.id}__instruct__*.md`) exist.

<!-- WIP -->

Do not inspect instruction contents beyond what is required for delegation mechanics.

### Step 1: Set execution state

Mark plan as WORKING as per Plan Record rules.

### Step 2: Execute commits, one by one, in a sub-agent

For each commit:

- Launch a sub-agent
- Pass the commit delegation prompt as stored in `{plan.id}__instruct__task-1.md`
- Do not modify prompts

#### Sub-agent interaction

- Relay questions verbatim
- Relay answers verbatim
- Do not interpret

#### Blocked tasks

If a task becomes blocked:

- Update task to "Blocked"
- Add blocker to plan
- Continue remaining tasks in batch

### Step 3: Record outcomes

When a task completes:

- Update task to DONE
- Under the task record evidence of outcomes (main artefacts created, Example: "src/lib/module/index.ts")
- Do not copy task outputs into plan record (only status and evidence data)

### Step 4: Iterate or finalize

If commits remain to be executed:

- Proceed to next commit.

When all commits are completed:

- Mark plan as DONE per Plan Record rules
- Present final summary (plan-level only)

## Success Criteria

- All READY tasks are executed via delegation
- Plan record reflects only status-level progress
- No task content is duplicated into plan record

## Commands

When the user says "add to follow ups", add a note under "## Follow Ups" in the `{plan.id}/plan.md` file.

When the user responds with "not in scope" it means the previous response from the agent contained a suggestion or concern that is not relevant for the current plan. Try to forget it and not repeat the same question or concern again.

---
name: write-plan
description: Writes execution plans from tasks
---

# Skill: Write plan

Given one or more tasks, generate a plan that can be executed by sub-agents and tracked via a physical plan file.

## Allowed Agent Modes

CRITICAL RULE: If your context `$AGENT_MODE` is NOT set to one of the following **Agent Modes** you are NOT ALLOWED to use this skill:

- `planner`

CRITICAL RULE: If you are NOT ALLOWED to use this skill, STOP and advise the user to switch to another agent mode first. List agent modes.

## Allowed Skills

- `rehash`
- `parking-lot`
- `english`

## Mandatory Reading

Read `.agents/domains/plans/producer.md`, if not yet in context - it contains definitions and rules that are essential to interpreting the instructions on this file without ambiguity.

Read `.agents/domains/references/index.md`, if not yet in context – it describes how to locate documentation on patterns and conventions related to the current session.

Read also **Plan Template** — `.agents/domains/plans/templates/plan__template.md`

## Steps

This is a workflow with 6 steps

1. Load plan file (if filename provided)
2. Validate plan (if one was loaded)
3. Add Tasks
4. Grouping
5. Write plan file
6. Prompt generation

You may be given a `plan-{plan.id}/plan.md` file along with the user request. In that case you MUST:

- RULE: read the existing plan file and prepare to analyse and/or improve it as per user request.
- RULE: Treat the existing plan file as authoritative source of truth for status of execution.

### Step 1: Load plan file (if filename provided)

Load the plan file. If it does not exist:

1. Use the **render-template** skill with the **Plan Template** to render a draft of the plan file with high-level information only.
2. Confirm location with the user if unsure.

### Step 2: Validate plan (if one was loaded)

- RULE: Ensure all referenced `task-{task.id}/task.md` files exist.
- RULE: Validate each task checking if ALL links in the task file to specifications files can be resolved to a file. Pattern: "`./task-{task.id}/specifications/{spec.id}.md`.
- RULE: Ensure that ALL links in the plan file to instruction files (`./plan-{plan.id}/instructions/{instruct.id}.md`) can be resolved to a file
- CRITICAL RULE if files recorded in the plan do not exist anymore, stop and ALERT THE USER.

### Step 3: Add Tasks

Work with the user to inspect candidate `task-{task.id}/task.md` files in order to create a viable batch of work.

The user will suggest task files, your goal is to analyse them and check the quality of the task and the specification attachments.

- RULE: if a task contains broken links to specification attachments or reference files STOP, ALERT THE USER, REJECT THE TASK

### Step 4: Grouping

**Goal:** produce a draft of the plan, commit strategy, and TODO list of questions and blockers.

- RULE: If there is already evidence of progress in the plan file agents MUST confirm the state by comparing expected outcomes.

Read all tasks and specification attachments, and without reading any else (no grep, no glob) analyse dependencies and group work in commits:

1. Check for a dependencies files in the same directory as the task files (filename: `__dependencies.md`)
2. If there isn't one perform an analysis of interdependencies between tasks and between specifications attached.
3. Create a `__dependencies.md` with a list of dependencies between specs and tasks
4. Draft a list of commits with each grouping compatible changes that can be applied in sequence keeping the build green all the time.
5. Write the commit message for each proposed commit, and terse description based on the most information dense summaries from the task file(s) or specifications, that identify the work being bundled (example `Add ComponentMixin in color module`)
6. Present to the user for review

### Step 5: Write the plan file

1. Create the plan file using the Plan Template and save it to `plan-{plan.id}/plan.md`
2. Include all the tasks bundled in the plan
3. Include all the commits with their message, and compact summary of changes.

### Step 6: Prompt Generation

This is where the planning work happens and the prompt files are generated, including all instructions necessary to . The instructions must be plucked from the task files and specifications files according to items bundled for each commit.

For each commit peprate a prompt file.
Starting with the first commit:

1. Generate a prompt, best-effort, by converting all definitions in the related spec files to instructions.
2. Analyse the work, and generate instructions for implementing the task.
3. Use the **render-template** skill with the `.agents/domains/plans/templates/instruct__template.md` to render the prompt file.

4. Spin an agent with the prompt and CRITICAL INSTRUCTION to not execute and just interprete and summarise contradictions, ambiguity, omissions or obvious errors. The agents CAN read the files targeted by the instructions, but are FORBIDDEN from globbing and grepping to find solutions. The goal is to acquire feedback from the agent about the quality of the instructions.

HEADS UP: The tasks and specs DO NOT prescribe implementation details so a lot questions will only surface now

5. Present the agent feedback to the user, you will think with the user for a while to collect patterns and conventions from knowledge sources and decide on implementation details to update the plan and try again.
6. Ask questions, use the **parking-lot** skill to manage a micro list of todos, questions, and eventual blockers for this particular step
7. Iterate

Note: Prepare to offload the prompt at any time, even if the planning is not yet completed, and move on to the next commit.

8. When you are done with a commit or the user says "we will do this later", create the prompt file and save it `plan-{plan.id}/instructions/{commit.id}.md`
9. Verify the generated prompt file follows all the `TEMPLATE DIRECTIVE:` included in the template.
10. update the `plan-{plan.id}/plan.md` file with the status of the commit.
11. move on to the next commit.

## Commands

<!-- WIP exctractable generic commands (write-task, context-curator, etc...) -->

### Command: Add to Follow Ups

**Triggers:**

- When the user says "add to follow ups"

**Process:**

1. add a note under "## Follow Ups" in the `plan-{plan.id}/plan.md` file.

When the user responds with "not in scope" it means the previous response from the agent contained a suggestion or concern that is not relevant for the current plan. Try to forget it and not repeat the same question or concern again.

### Command: Not In Scope

**Triggers:**

- When the user responds with in "not in scope" to a suggestion or concern raised by the agent.

**Process:**

1. Take note that the previous response from the agent contained a suggestion or concern that is not relevant for the current plan.
2. Try to forget it and DO NOT repeat the same question or concern again.

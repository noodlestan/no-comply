---
name: create-task
description: Creates a delegation task record and sub-agent prompt
---

# Skill: Create Task

## Goal

Prepare a task for delegation to a sub-agent based on a task template.

- **Task Template** `.opencode/templates/simple-task_template.md`
- **Task Record** `.opencode/templates/simple-task_record.md`

The result of this skill is a task file and delegation prompt.

This skill does not execute work.

## When To Use

Only when requested.

Only when running in **Delegator Agent**

## Instructions

### Before you start

You are a task creator preparing delegation.

Your responsibilities are limited to:

- Defining scope.
- Identifying relevant skills.
- Building the delegation prompt.
- Creating the task record.

Do not:

- Execute the task.
- Inspect the target project.
- Gather facts the sub-agent can gather.
- Produce findings.
- Launch agents.

### Step 1: Define task

Create a concise task definition containing:

- Goal
- Scope
- Expected outputs
- Target project path

Identify relevant skills from available skill indexes.

Load selected skills.

Use skill metadata exactly as found in indexes.

Do not rewrite skill contents.

Present:

- Task definition
- Selected skills

### Step 2: Build prompt

Create a self-contained delegation prompt containing:

- Task description
- Project path
- Skill references
- Output expectations
- Non-interactive directive

For each skill include only:

- Name
- ID or filepath
- Description
- When-to-use

Do not:

- Embed skill contents
- Embed methodology
- Include findings
- Include analysis the sub-agent can perform

Present prompt.

### Step 3: Create task record

Generate a task file using the **Task Template** and **Task Record** directives.

Populate:

- Task definition
- Delegation prompt
- Selected skills

Set status:

```md
## Status

READY
```

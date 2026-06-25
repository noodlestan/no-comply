---
name: create-task
description: Creates a delegation task record and sub-agent prompt
---

# Skill: Create Task

## Goal

Prepare a task for delegation to a sub-agent based on a task template.

- **Task Template** `<root>/.opencode/templates/simple-task_template.md`
- **Task Record** `<root>/.opencode/templates/simple-task_record.md`

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

**IMPORTANT:** all files and directories referenced in a task must follow the Path Resolution rules in AGENTS.md.

- Use placeholders as defined in AGENTS.md (`<root>/`, `<project>/`, `<scope>/`, `<iterator>`, `<name>`) instead of absolute paths
- Define `<project>/`, `<scope>/` paths at the top of the task and abritrary placeholders such as `<iterator-name>` or `<module-a>` where convenient
- NEVER resolve placeholders to absolute paths in written artifacts

- Task description
- Skill references
- Input details with relative file references
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

Generate a task record file named `task_<task-name>.md` in the required location, using the **Task Template** and the **Task Record** directives.

Populate:

- Task definition
- Delegation prompt
- Selected skills

Set status:

```md
## Status

READY
```

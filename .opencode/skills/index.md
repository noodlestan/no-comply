# SKILLS

## Skill list

### Create Skill

Creates a new skill definition from a natural language description

#### When to use

Use this skill when:

- The user wants to create a new skill.
- The user describes a capability, workflow, role, behavior, or task that should become a reusable skill.

Do not use when:

- The user wants to execute a task.
- The user already has a complete skill definition.

---

### Create Task

Creates a delegation task record and sub-agent prompt

#### When to use

Only when requested.

Only when running in **Delegator Agent**

---

### Execute Task

Delegates an existing task to a subagent and records status and outcome

#### When to use

Only when requested.

Only when running in **Executor Agent**

---

### Execute Plan

Executes a plan by delegating individual tasks to sub-agents and tracking plan progress

#### When to use

Only when requested.

Only when running in **Executor Agent**.

Do not use for single-task execution — use `delegate-task`.

---

### Inspect Project

Iteratively analyzes a code project and produces a structured summary of architecture, APIs, and conventions

#### When to use

Only when requested.

---

### Manage meta/api.md

Manages meta/api.md of a project

#### When to use

When asked to create or update a meta api file for a project.

Suggest when the context is already populated with details about the project and the target meta file is missing or outdated.

---

### Manage meta/architecture.md

Manages meta/architecture.md of a project

#### When to use

When asked to create or update a meta architecture file for a project.

Suggest when the context is already populated with details about the project and the target meta file is missing or outdated.

---

### Manage meta/conventions.md

Manages meta/conventions.md of a project

#### When to use

When asked to create or update a meta conventions file for a project.

Suggest when the context is already populated with details about the project and the target meta file is missing or outdated.

---

### Manage meta/health.md

Manages meta/health.md of a project

#### When to use

When asked to create or update a meta health file for a project.

Suggest when the context is already populated with details about the project and the target meta file is missing or outdated.

---

### Manage meta/modules.md

Manages meta/modules.md of a project

#### When to use

When asked to create or update a meta modules file for a project.

Suggest when the context is already populated with details about the project and the target meta file is missing or outdated.

## Instructions on how to update this list

1. Read all `skils/<name>/SKILL.md`

From eafh skill exctract:

- name (frontmatter)
- description (frontmatter)
- name (the part aftet `# Skill: `)
- the contents of `## When to use` section

2. replace the entire `## Skill list` section with the most recent data folllowing this format

```
## Skill list

### Skill Name

Description

#### When to use

When to use seciton
```

3. Make sure this `## Instructions on how to update this list` section is preserved verbatin

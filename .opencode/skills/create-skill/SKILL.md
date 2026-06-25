---
name: create-skill
description: Creates a new skill definition from a natural language description
---

# Skill: Create Skill

## Goal

Create a reusable skill definition from a natural language description.

## When To Use

Use this skill when:

- The user wants to create a new skill.
- The user describes a capability, workflow, role, behavior, or task that should become a reusable skill.

Do not use when:

- The user wants to execute a task.
- The user already has a complete skill definition.

## Execution Mode

Chat

## Skill Definition Process

### Analyze Request

Infer:

- Goal
- Scope
- Execution mode
- Required inputs
- Expected outputs
- Success criteria
- Limitations

### Produce Initial Analysis

Generate:

- Inferred goal
- Inferred scope
- Inferred execution mode
- Proposed workflow
- Assumptions

### Resolve Unknowns

Identify information required to complete the skill definition.

### Draft Skill

Generate:

- Name
- Description
- Goal
- Scope
- Execution mode
- Workflow
- Success criteria
- Examples
- Limitations

### Finalize

Generate a complete self-contained skill file.

## Output Format

### Analysis

- Goal
- Scope
- Execution Mode
- Workflow
- Assumptions

### Questions

Outstanding questions.

### Draft Skill

Current draft.

### Final Skill

Completed skill definition.

## Success Criteria

The resulting skill:

- has a clear purpose
- has clear usage boundaries
- defines execution behavior
- defines workflow steps
- can be executed without additional explanation

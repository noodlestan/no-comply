---
name: update-skills
description: Use this skill to update the skills listing file.
---

# Skill: Update Skills

Use this skill to update the skills listing in `.agents/skills/index.md` so that it enumerates and describes all available agent skills.

## Allowed Agent Modes

CRITICAL RULE: If your context `$AGENT_MODE` is NOT set to one of the following **Agent Modes** you are NOT ALLOWED to use this skill:

- `assistant`

CRITICAL RULE: If you are NOT ALLOWED to use this skill, STOP and advise the user to switch to another agent mode first. List agent modes.

## Process to update Index

1. List all directory names under `.agents/skills/`
2. Filter out skills that start with `agent-` as they are special agent mode skills.
3. Generate a table with the following columns.

- `{skill.id}` - the `name` field of the skill file's frontmatter stripped of the `agent-` prefix.
- `{skill.name}` - the skill file's h1 heading `# Skill: {skill.name}`.
- `{skill.description}` - the `description` field of the skill file's frontmatter.

4. Create or update `.agents/skills/index.md` using the following template.

### Template

```
# Skills

This file lists skills.

Instructions on how to update it can be found at the bottom of this file.

## Rules for Allowing and Forbidding Skills

- RULE: You need to know in which agent `$AGENT_MODE` you are currently operating. If you don't have an explicit `$AGENT_MODE` in context then ALL SKILLS ARE FORBIDDEN.
- CRITICAL RULE: When you encounter a rule that states you are only allowed to proceed if you are in mode `$AGENT_MODE`, you must ask yourself again "What is my `$AGENT_MODE`?" and only proceed if your agent mode matches the rule.

## Explicitly Forbidden Agent Modes

If your context `$AGENT_MODE` is set to one of the following modes you are FORBIDDEN to use ANY skills:

- `Plan` (OpenCode built-in)
- `Build` (OpenCode built-in)

## {skill.name}

ID: `{skill.id}`

Description: {skill.description}`

## How to update this file and agent platform Links

- Use **update-skills** skill to update this index file.
```

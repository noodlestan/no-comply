---
name: update-skills
description: Use this skill to update the skills index file.
---

# Skill: Update Skills

Use this skill to update the skills index file at `.agents/skills/index.md` so that it lists all available agent skills.

## Allowed Agent Modes

CRITICAL RULE: If your context `<agent-mode>` is NOT set to one of the following **Agent Modes** you are NOT ALLOWED to use this skill:

- `assistant`

CRITICAL RULE: If you are NOT ALLOWED to use this skill, STOP and advise the user to switch to another agent mode first. List agent modes.

## Process to update Index

1. List all directory names under `.agents/skills/`
2. Filter out skills that start with `agent-` as they are special agent mode skills.
3. Generate a table with the following columns.

- `<skill-id>` - the `name` field of the skill file's frontmatter stripped of the `agent-` prefix.
- `<skill-name>` - the skill file's h1 heading `# Skill: <skill-name>`.
- `<skill-description>` - the `description` field of the skill file's frontmatter.

4. Create or update `.agents/skills/index.md` using the following template.

### Template

```
# Skills

This file lists skills.

Instructions on how to update it can be found at the bottom of this file.

## Rules for allowing and forbidding skills

- RULE: You need to know in which agent `<agent-mode>` you are currently operating. If you don't have an explicit `<agent-mode>` in context then ALL SKILLS ARE FORBIDDEN.
- CRITICAL RULE: When you encounter a rule that states you are only allowed to proceed if you are in mode `<agent-mode>`, you must ask yourself again "What is my `<agent-mode>`?" and only proceed if your agent mode matches the rule.

## Explicitly Forbidden Agent Modes

If your context `<agent-mode>` is set to one of the following modes you are FORBIDDEN to use ANY skills

- `Plan` (OpenCode built-in)
- `Build` (OpenCode built-in)

## User Commands

When the user says "list skills" present this list grouped by "Allowed" and "Forbidden" depending on which are currently allowed or forbidden by the context instructions.

## <skill-name>

ID: `<skill-id>`

Description: <skill-description>

---

# How to update this file and agent platform Links

- Use `update-skills` skill to update this index file.
```

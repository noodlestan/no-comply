---
name: update-skills
description: Use this skill when updating the agent skills index file.
---

# Skill: Update Skills Index

Use this skill to update the `.agents/skills/index.md` file that lists all available agent skills.

## Rules

- Read all `SKILL.md` files in `.agents/skills/` (excluding `agent-*` directories).
- Filter out skills that start with `agent-` as they are agent personality files.
- Follow the template exactly when updating the index file.
- Skill names and descriptions must be copied verbatim to the index.

## Update Process

1. Read all `SKILL.md` files in `.agents/skills/` (excluding `agent-*` directories).
2. Filter out skills that do not start with `agent-`.
3. Create or update `.agents/skills/index.md` using the following template:

```
# Agent Skills

This file lists agent skills.

Instructions on how to update it can be found at the bottom of this file.

## <Skill name (from frontmatter)>

<Skill description (exactly as in skill frontmatter)>
```

4. Append the update instructions block at the bottom of the file.

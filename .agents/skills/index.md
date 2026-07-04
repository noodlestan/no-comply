# Agent Skills

This file lists all available skills.

Instructions on how to update it can be found at the bottom of this file.

## agent-context-curator

Use this skill when creating, editing, or planning repository context files, agent instructions, skills, processes, or technical guidance.

## agent-pair-programmer

Use this skill when acting as a pair-programmer agent that implements one agreed step at a time under user direction.

## task-writer

Generic task writing rules; prefer specialized task-writing skills.

---

# How to update this file

1. Read all `SKILL.md` files in `.agents/skills/`.
2. Create or update `.agents/skills/index.md` using the following template:

```
# Agent Skills

This file lists all available skills.

Instructions on how to update it can be found at the bottom of this file.

## <Skill name (from frontmatter)>

<Skill description (exactly as in skill frontmatter)>
```

3. Append the update instructions block (this section) at the bottom.

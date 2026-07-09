---
name: update-domains
description: Use this skill to update the domain reference index file.
---

# Skill: Update Domains

Use this skill to update the domains index file at `.agents/domains/index.md` so that it lists all available domains and imported (hoisted) rules.

## Allowed Agent Modes

CRITICAL RULE: If your context `$AGENT_MODE` is NOT set to one of the following **Agent Modes** you are NOT ALLOWED to use this skill:

- `assistant`

CRITICAL RULE: If you are NOT ALLOWED to use this skill, STOP and advise the user to switch to another agent mode first. List agent modes.

## Process to update Domain Reference Index

1. Read all domain index files: `.agents/domains/**/index.md`.
2. For each domain file read its H1, the title, and the first paragraph description.
3. Scan the contents of the `## Definitions` section for lines with tag `#hoist`.
4. Scan the file for sections named `## Rules for <rules scope>` and scan the content of all those sections for lines with the tag `#hoist`.
5. Merge all hoisted definitions into a single list replacing "(#hoist)" with "(#hoisted from `<domain>`)".
6. Use the "Domain Reference Template" below to present all hoisted definitions, all domains, and each domain's descriptions, and hoisted rules.

## Domain Reference Template

```
# Reference

This file lists work domains (tasks, knowledge, conventions, ...) and important definitions required to interpret skill files and instructions correctly (Agent Modes, Skill, Domain Reference File, Knowledge File).

## Definitions

- list merged definitions with `(#hoist)` replaced with "(#hoisted from `<domain>`)"

## Domains

### [<Domain name>](<domain file path>)

<Domain description>

#### Rules for <rules scope>

- list rules hoisted from Domain VERBATIM (removing the `(#hoist) tag`)
```

4. Append to the index file:

```
---

# How to update this file and agent platform Links

- Use `update-domains` skill to update this index file.
```

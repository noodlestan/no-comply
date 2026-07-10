---
name: update-domains
description: Use this skill to update the domains listing file.
---

# Skill: Update Domains

Use this skill to update the domains listing in `.agents/domains/index.md` so that it enumerates and describes the available domains and imported (hoisted) rules.

## Allowed Agent Modes

CRITICAL RULE: If your context `$AGENT_MODE` is NOT set to one of the following **Agent Modes** you are NOT ALLOWED to use this skill:

- `assistant`

CRITICAL RULE: If you are NOT ALLOWED to use this skill, STOP and advise the user to switch to another agent mode first. List agent modes.

## Process to List Domain Index Files

1. Read all domain index files: `.agents/domains/**/index.md`.
2. For each domain file read the first 25 lines.
3. Identify the name in `# {domain.name} Domain Index` heading.
4. Identify the values for `use-case`, `provides`, and `capabilities` in the domain content.
5. Generate a `domain.description` using this pattern `{domain.provides} for {domain.use-case}` and adjust the result for correct grammar, punctuation, and capitalisation.
6. Scan the contents of the `## Definitions` section for lines with tag `#hoist`.
7. Scan the file for sections named `## Rules for {rules scope}` and scan the content of all those sections for lines with the tag `#hoist`.

## Commands

### Command: `Update Domains`

**Triggers:**

- when the user says `update domains`

**Process:**

1. Execute the **Process to List Domain Index Files**
2. Merge all hoisted definitions into a single list replacing "(#hoist)" with "(#hoisted from `<domain>`)".
3. Use the **render-template** skill with `.agents/skills/update-domains/domain-index-template.md` below to present all hoisted definitions, all domains, and each domain's descriptions, and hoisted rules.

- **A Domain Reference File:** is an agent context file shared between related agent modes and skills providing key definitions for a domain (tasks, knowledge, ...). Existing Domains are indexed for discovery by agents at `.agents/domains/index.md`. (#hoist)

## Rules for reading Domain Files

- IMPORTANT RULE: Agents MUST NOT read domain reference files unless listed under `## Mandatory Reading` sections or requested to do so by the user or a `::MANDATORY-READING` directive. (#hoist).

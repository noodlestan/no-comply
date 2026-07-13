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

## Rules for reading Domain Files

<!-- WIP no-rules -->

- IMPORTANT RULE: Agents MUST NOT read domain reference files unless listed under `## Mandatory Reading` sections or requested to do so by the user or a `::MANDATORY-READING` directive. (#hoist).

## Commands

### Command: Update Domains Index

**Triggers:**

- when the user says `update domains index`
- when the user says `update domains`

**Process:**

BEFORE ANY STEP: Load the `.agents/domains/domains/processes/index.md` to

1. Execute the **Process for Listing Domain Index Files**.
2. Merge all hoisted definitions into a single list replacing "(#hoist)" with "(#hoisted from `<domain>`)".
3. Use the **render-template** skill with `.agents/skills/update-domains/domain-index-template.md` below to present all hoisted definitions, all domains, and each domain's descriptions, and hoisted rules.

- **A Domain Reference File:** is an agent context file shared between related agent modes and skills providing key definitions for a domain (tasks, knowledge, ...). Existing Domains are indexed for discovery by agents at `.agents/domains/index.md`. (#hoist)

### Command: Update Domain (domain)

**Purpose:** Given a domain name, generate the `consumer.md` and `producer.md` files by extracting tagged content from the domain's `_api.md` file.

**Inputs:**

- `domain`: The domain name to process.

**Triggers:**

- When the instructions say `With the {domain}, use the **Update Domain** command to generate consumer and producer files`.
- When the user says `update domain {domain}`.

**Process:**

1. Identify the `domain` to process.
2. If no explicit domain is defined, infer the domain scope from the most recent context.
3. Execiuute the ...
4. With the consumer scope, use the **render-template** skill with `.agents/domains/domains/templates/domain-consumer_template.md` to render the `{domain}/consumer.md` file.
5. With the producer scope, use the **render-template** skill with `.agents/domains/domains/templates/domain-producer_template.md` to render the `{domain}/producer.md` file.

### Command: Update All Domains

**Purpose:** Update the domains index and then generate consumer.md and producer.md files for all domains.

**Triggers:**

- When the user says `update all domains`.

**Process:**

1. Execute the **Update Domains Index** command.
2. List all domain directories under `.agents/domains/`.
3. For each domain directory, execute the **Update Domain** command with the domain name.

- RULE: Process all domains even if some fail; report failures at the end.

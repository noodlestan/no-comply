---
name: update-domains
description: Use this skill to update the domains api documentation and domains listing file.
---

# Skill: Update Domains

Use this skill to update the domains listing in `.agents/domains/index.md` so that it enumerates and describes the available domains and their discoverable content.

## Allowed Agent Modes

CRITICAL RULE: If your context `$AGENT_MODE` is NOT set to one of the following **Agent Modes** you are NOT ALLOWED to use this skill:

- `assistant`

CRITICAL RULE: If you are NOT ALLOWED to use this skill, STOP and advise the user to switch to another agent mode first. List agent modes.

## Commands

### Command: Update Domains Listing

**Purpose:** Updates the domain listing, at `.agents/domains/index.md`, listing all domains and their discoverable resources (definitions, structures, commands, processes, templates, files, ...)

**Triggers:**

- when the user says `update domains listing`.
- when the user says `update domains`.

**Before executing:**

- Load the `.agents/domains/domains/definitions/index.md` to understand the basic concepts.
- Load the `.agents/domains/domains/processes/index.md` to understand the required procedures.

**Process:**

1. Execute the **Process for Generating the Domain Listing** to generate the `%resource-map` and the `%domain-listing` table.
2. Use the **render-template** skill with the `.agents/domains/domains/templates/domains-listing__template.md` template to present the generated table.
   - CATCH: if template missing, then THROW ERROR to user and STOP processing.
3. Save in `.agents/domains/index.md`.

### Command: Update Domain (domain)

**Purpose:** Given a domain name, generate the `consumer.md` and `producer.md` API files, and the `_api.md` table of contents, by extracting tagged content from the domain's directory.

**Inputs:**

- `domain`: The domain name to process.

**Triggers:**

- When the user says `update domain {domain}`.
- When the user says `update domain {domain} api`.
- When the instructions say `With the {domain} domain, use the **Update Domain** command to generate consumer and producer files`.

**Note:** This process uses templates located at `.agents/domains/domains/templates/`, i.e., in the meta-domain's templates directory. This is not related to the `{domain}` being procesed.

**Process:**

1. Identify the `domain` to process from the command input.
2. If no explicit domain is defined, infer the domain scope from the most recent context.
3. With the identified `domain`, execute the **Process for Extracting Domain API** to extract the `domain API documentation` and its `table-of-contents`, `consumer-api-docs`, and `producer-api-docs`.
   - CATCH: if `_config.md` missing, then THROW ERROR to user and STOP processing.
4. With the input `domain`, the `scope: consumer`, and the extracted `consumer-api-docs` as `api-docs`, use the **render-template** skill with the `.agents/domains/domains/templates/domain-scope__template.md` template to render the consumer api docs to `{domain}/consumer.md` file.
   - CATCH: if template missing, then THROW ERROR to user and STOP processing.
5. With the input `domain`, the `scope: producer`, and the extracted `producer-api-docs` as `api-docs`, use the **render-template** skill with the `.agents/domains/domains/templates/domain-scope__template.md` template to render the producer api docs to `{domain}/producer.md` file.
6. With the input `domain` and the extracted `table-of-contents` in the extracted documentation, use the **render-template** skill with the `.agents/domains/domains/templates/domain-table-of-contents__template.md` template to render table of contents to the `{domain}/_api.md` file.
   - CATCH: if template missing, then THROW ERROR to user and STOP processing.
7. Respond with generated API summaries for both scopes.

**NOTE:** Items without explicit tags (`#hoist`, `#all`, `#consumer`, `#producer`) will not appear in consumer or producer scopes. Ensure source files have appropriate tags before running this command.

### Command: Update All Domains

**Purpose:** Update the domains index file and then generate consumer.md and producer.md files for all domains.

**Triggers:**

- When the user says `update all domains`.
- When the user says `update domains apis`.

**Process:**

1. Execute the **Update Domains Listing** command.
2. List all domain directories under `.agents/domains/`.
   - CATCH: if no domain directories found, then THROW ERROR to user and STOP processing.
3. For each domain directory, execute the **Update Domain** command with the domain name.

- RULE: Process all domains even if some fail; report failures at the end.

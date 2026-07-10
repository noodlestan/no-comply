# Conventions Domain Index

**Use Cases:** Locating and reading convention sources and interpreting and applying their rules.

**Provides:**

- Processes
- Commands

**Capabilities:**

- Discover conventions that are relevant to the current context.
- Interpret conventions rules.
- Generate convention proposals.

## Mandatory Reading

READ `.agents/domains/references/index.md` - base rules for working with all types of reference sources.

## Definitions

<!-- WIP define Convention -->
<!-- WIP define Patterns Domain as well -->

- **Conventions File**: A type of Reference File that contains rules and directives applied when planning, writing code, documentation, and other artefacs, and submitting work for review. (#hoist).
- **Conventions Draft**: A proposal to add or modify existing conventions that surfaced from friction experienced during a task, review, or correction session,

## Rules for writing Conventions Drafts

- RULE: prefer the shortest format that captures the rule correctly (see examples below).
- RULE: if the proposal targets an existing rule, capture whether to **reword**, **clarify**, **split**, **relax** the existing rule.
- RULE: preserve strong modality when it exists — `Always`, `Never`, `MUST NOT`, `allowed only if`, etc.
- RULE: if a rule is justified by a concrete derailment, bug, or review correction, keep a short reference to that context.
- RULE: do not spend effort polishing prose that the user will likely rewrite when merging into the real conventions file.

## Rules for interpretig existing conventions

When the task touches an already documented convention:

- identify whether the proposal
- identify whether the proposal is to **add**, **reword**, **clarify**, **split**, **remove**, or **add an exception**
- keep the delta explicit rather than silently rewriting the whole rule
- preserve existing section names if they are still good enough
- if the current section name is misleading, propose a better one as part of the entry

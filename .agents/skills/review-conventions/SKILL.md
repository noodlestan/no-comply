---
name: review-conventions
description: Use when the user wants to review convention proposals captured during a task or review and either reject it or integrate it in the conventions documentation.
---

# Skill: Review Conventions

## Allowed Agent Modes

CRITICAL RULE: If your context `$AGENT_MODE` is NOT set to one of the following **Agent Modes** you are NOT ALLOWED to use this skill:

- `agent-pair-navigator`
- `agent-pair-driver`

CRITICAL RULE: If you are NOT ALLOWED to use this skill, STOP and advise the user to switch to another agent mode first. List agent modes.

## Mandatory Reading

Read `.agents/domains/references/index.md`, if not yet in context – it describes how to locate documentation on patterns and conventions related to the current session.

## Purpose

Use this skill to review **proposed convention changes** from convention proposals.

This skill drafts the final convention and typically works off a **proposal artifact** a note containing candidate convention additions, removals, rewordings, or clarifications.

## Before executing

- RULE: use the codebase only to verify that a proposed convention is real, repeated, or at least consistent with surrounding code.
- RULE: do not silently upgrade a one-off preference into a repository convention unless the user clearly framed it that way.
- RULE: if the user explicitly states a convention, that is sufficient signal to propose it even if current code has drifted.
- RULE: when in doubt, prefer “proposal for conventions update” over “documented project rule”.

## First step – identify the scope buckets

Before drafting convention proposals, identify the **scope taxonomy** the file should use.

The output groups items by scope such as:

- `Global`
- Language: `Typescript`, `HTML`, `CSS`, `JSX`
- Framework or library: `SolidJS`, `TS Parser`
- Entity types: `Components`, `Services`, `Context`, `Routing`
- Support tasks: `Tooling`, `Testing`, `Documentation`

Buckets are created at the root of the repo in `conventions/<bucket>.md`.

## What this skill produces

Update the relevant `<bucket>` files.

The proposal should help the user answer:

- what new conventions surfaced during this task?
- which existing conventions should be clarified, tightened, relaxed, or renamed?
- which items are still rough ideas versus ready-to-adopt rules?
- where in the conventions taxonomy should each change land?

## Convention structure

Organize the proposal by **scope** and **convention section**, not by chronology.

Each item should target a conventions location such as:

- `Typescript / Code Conventions / Strict Code`
- `Global / File Conventions`
- `SolidJS / JSX`
- `Services / Code Conventions`
- `Components / Props`

The proposal is a staging artifact for future documentation work, so every entry should make it obvious **where** the rule belongs and **what kind of change** is being proposed.

## What to capture

Capture convention changes that surfaced during the task, such as:

## What NOT to capture

- RULE: do not add anything that is already covered by linting and `lint:fix`.
- RULE: do not add generic style-guide advice that did not come from this repo.

## Proposal writing rules

- RULE: every item must be classified within h2/h3 section levels.
- RULE: rule MUST NOT include exception (add separate rule instead).
- RULE: prefer the shortest format that captures the rule correctly.
- RULE: if a rule is already crisp and unambiguous, write it directly as a proposed rule.
- RULE: preserve strong modality when it exists — `Always`, `Never`, `MUST NOT`, `allowed only if`, etc.
- RULE: if a rule prevents a bug or minimises risk of rework include that IMPORTANT NOTE in the rule.
- RULE: do not spend effort polishing prose that the user will likely rewrite when merging into the real conventions file.

## Choosing the right level of detail

Use the lightest format that still preserves the idea correctly.

Prefer this order:

1. **Tiny rule** – one liners.
2. **Short rule** – paragraph, rationale.
3. **Long rule** – includes examples, nuances, and technical details.

## How to treat existing conventions

Existing convention rules are the source of truth.

Convention rules should be stable and slowly curated with small increments.

<!-- TODO: this section is not finished -->

## Verification expectations

- RULE: if a proposed convention sounds like a repository-wide rule, verify it against nearby code or docs unless the user explicitly stated it as policy.
- RULE: if the proposal depends on framework semantics or evaluation behavior, verify the technical claim before writing it up.
- RULE: if the repo currently violates the proposed rule in many places, do not hide that — this is still a proposal, not evidence that the codebase already follows it.

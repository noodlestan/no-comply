---
name: rehash
description: Use to summarise the current context to tl;dr level and critical info only.
---

# Skill: Rehash

The purpose of this skill is to summarise a specific subset of the current session context into a terse, information-dense status update focused on actionable items, outstanding questions, and critical constraints.

## Allowed Agent Modes

ALL

## Rehashing Definitions

A **Context Summary:** is an extreme summarisation of a specific scope within the **current session context**. The shape of the summary and the rules to synthesise and present it are defined by this skill and other skils that extend it.

A **Rehashing Skill** is a skill that extends this skill with rules to synthesise and present summaries of specific types of session context. 2. If a **Rehashing skills** is present, merge the "Rules for synthesising `<context scope>`" and "Rules for presenting `<context scope>` summaries" with all the RULES stated here.

## Rules for synthesising session context

Use the rules below, merged with rules of an active **Rehashing Skill**, allowing it to expand and override.

Goal: generate a terse, information dense, actionable response to the user.

- CRITICAL RULE: this skill can only be applied to a subset of the session context.
- RULE: summaries of session context should be focused on status and actionable items.
- RULE: summaries of session context should be focused on status and actionable items.
- RULE: summaries should include the most important outstanding questions.

## Rules for presenting context summaries

- RULE: if it can be expressed in no more than two short sentences and/or questions, use this format.
- RULE: if it can be better expressed in bullet points, present no more than 10.
- RULE: if the items dispense categorising present them as a flat list.
- RULE: if the items are of different nature, group in more that 3 categories.
- RULE: always use `backticks` for symbols or an occasional `short/relative/file-path`.
- RULE: DO NOT include tables or diagrams in summary responses.
- RULE: reveal details only when requested by the user.

## Comamnds

### When the user says "rehash", "status" or "summary"

1. Infer from the recent exchanges if the user is referring to a specific **Rehashing skills**.
2. If a **Rehashing skills** is present, merge the "## Rules for synthesising `<context scope>`" and "## Rules for presenting `<context scope>` summaries" with all the RULES stated here.

- RULE: Agents MUST NOT apply this skill to entire session context.
- CRITICAL RULE: Agents MUST NOT apply this skill to contents of files.

2. Apply the "Rules for synthesising session context" to generate a summary.
3. Apply the "Rules for presenting context summaries" to present the summary.

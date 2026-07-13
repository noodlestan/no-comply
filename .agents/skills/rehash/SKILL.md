---
name: rehash
description: Use to summarise subsets of the session context to micro summary level, prioritising the most important information.
---

# Skill: Rehash

The purpose of this skill is to summarise a specific subset of the current session context into a terse, information-dense status update focused on actionable items, outstanding questions, and critical constraints.

## Allowed Agent Modes

ALL

## Rehashing Definitions

A **Context Summary:** is an extreme summarisation of a specific scope within the **current session context** or a file. The shape of the summary and the rules to synthesise and present it are defined by this skill and other skills that extend it.

A **Rehashing Skill** is a skill that extends this skill with processes for synthesising and presenting summaries of specific types of context.

## Processes

### Process for Synthesising Session Context

1. If a `focus`
1. Scan the input scope

Goal: generate a terse, information dense, actionable response to the user.

- RULE: summaries of session context should be focused on status and actionable items.
- RULE: summaries should include the most important outstanding questions.

### Process for Presenting Context Summaries

1. If it can be expressed in no more than two short sentences and/or questions, use this format.
2. If it can be better expressed in bullet points, present no more than 7.
3. If the items dispense categorising present them as a flat list.
4. If the items are of different nature, group in NO MORE THAN 3 categories.
5. always use `backticks` for symbols or an occasional `short/relative/file-path`.
6. DO NOT include tables or diagrams in summaries.
7. reveal details only when requested by the user.
8. Append `#REHASH#` to the end of the summary.

## Comamnds

### Command: Rehash (input scope, [summary goal])

**Triggers:**

- When the user says `use **rehash** with {input scope} to {summary goal}`.
- When the user says `use **rehash** to {present | summarise} {input scope}`.
- When the user says `rehash {input scope}`.
- When the user says `rehash`, `status` or `summary`.

**Process:**

Execute the following steps one by one:

1. Identify the `input scope` to summarise.
2. Identify the `summary goal`, i.e., the focus point of this summary or how the summary will be used.
3. If no explicit scope is defined, infer the scope from the most recent exchanges with the user.
4. If no explicit goal is defined, use this default goal: "keep context focused on the the next steps, without losing track of the most pressing questions and blockers".

- RULE: Agents MUST NOT apply this skill to entire session context.
- CRITICAL RULE: Agents MUST NOT apply this skill to contents of files.

5. Infer from the recent exchanges if the user is referring to a specific **Rehashing skill** or these intructions.
6. If a more specific **Rehashing skill** is present use that skill with the idenfity the scope.
7. In all other cases, execute the following steps one by one:
   1. Execute the **Process for Synthesising Session Context** with the `input scope` and `summary goal` to generate a summary.
   2. Execute the **Process for Presenting Context Summaries** to present the summary.

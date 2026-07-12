---
name: parking-lot
description: Use to keep track of actionable items, doubts, and blockers within the current session.
---

# Skill: Parking Lot

The purpose of this skill is to keep track of short-lived session work items by maintaining separate lists of actionable work items, unknowns (ambiguity, uncertainty, contradictions), and blockers, and to help the agent present, update, prioritise, and rehash those lists with low overhead communication.

## Definitions

A **Parking Lot** is a data set of micro work items categorised by wether the items are actionable, unclear, or blocked. The Parking lot is divide into 3 columns according to category.

The **ACTIONABLE** column keeps track of micro work items, worded as shortly as possible.

The **UNKNOWN** column keeps track of doubts, ambiguity, uncertainty, or contradictions, always categorised and stated as a question.

The **BLOCKER** column keeps track of impediments and their known (or unknown) cause.

A **Parking Lot Column** is one of the ACTIONABLE, UNKNOWN, or BLOCKER columns.

## Allowed Agent Modes

ALL

## Processes

### Process for Adding Items to Parking Lot

With the provided `item` and `column`, execute the following steps:

1. Depending on the `column`:
   1. If column is ACTIONABLE rephrase the item to communicate the outcome above any other idea.
   2. If column is UNKNOWN rephrase it as clear and terse question.
   3. If column is BLOCKER rephrase to `blocked by {blocker immediate cause} because {blocker known root cause}`.
2. If the item is a duplication of an existing one, merge or replace details, compact it, and ALERT the user.

### Process for Presenting the Parking Lot

- RULE: unless the user requested "all lists" present only the most updated list.
- RULE: present only bullet points lists and present no more than 10 (warn if more).
- RULE: present only unfinished items unless requested.
- RULE: always use `backticks` for symbols or an occasional `short/relative/file-path`.
- RULE: DO NOT include tables or diagrams in summary responses.
- RULE: reveal details only when requested by the user.

### Process for Updating the Parking Lot

- RULE: Keep the item names stable.
- RULE: Suggest reword items that no longer reflect the current context.
- RULE: Never update or remove items without user having requested or approved suggestions.

### Process for Synthesising the Parking Lot

Use the **Process for Synthesising Session Context** of the **rehash** skill with the following rules, to synthesise the Parking Lot.

- RULE: make sure the list is prioritized first, at least the `next` item should be known.
- RULE: order the list by priority.

### Process for Presenting Parking Lot summaries

Use the **Process for Presenting Context Summaries** of the **rehash** skill with the following rules, to synthesise the Parking Lot.

- RULE: Summarise as up to 3 short paragraphs:
  - "The next task is ... (1/5 in queue)"
  - "Still unknown: .... (and 2 more questions)"
  - "Blocked by: .... (and 1 more blocker)"
- RULE: If the list hasn't been prioritised, or looks stale, suggest to update it.

## Commands

### Command: `Show Parking Lot (column)`

**Triggers:**

- When the user says `show actionable`, `show unknown`, or `show blockers`,

**Process:**

1. Identify the `column` from the input.
1. Use the **Process for Presenting the Parking Lot** to present the identified `column`.

### Command: `Show Parking Log`

**Triggers:**

- When the user says `show parking lot`
- When the user says `parking lot`

**Triggers:**

1. Use the **Process for Presenting the Parking Lot** to present all columns.

### Command: `Rehash Parking Lot`

**Triggers:**

- When the user says `rehash`

**Process:**

1. Use the **rehash** skill plus the reashing RULES in this file, to present a summary of all columns.

### Command: `Rehash Parking Lot Column (column)`

**Triggers:**

- When the user says `rehash {column = actionable | unknown | blockers}`

**Process:**

1. Use the **rehash** skill plus the reashing RULES in this file, to present a summary the requested `column`.

If any other command in this file say "Rehash!", you know what to do.

### Command: `Flush Todos`

**Triggers:**

- When the user says `flush todos`

**Process:**

1. Remove completed items from the **TODO** list.
2. Use the **rehash** skill with the contents of the **TODO** list only to respond.

### Command: `Add to Parking Lot Column (item, column) `

**Triggers:**

- When the user says `add {item} to {column}`
- When the user says `{actionable | unknown | doubt | question | blocker}: {item}`. Example: "Actionable: extract the calculation to function".

**Process:**

1. Identify which Parking Lot `column` the user wants to add to.
2. Execute the **Process for Adding Items to Parking Lot** with the identified `item` and `column`.
3. Add to the corresponding Parking Lot Column.
4. Use the **rehash** skill with the contents of the updated column and present to the user.
5. Use the **rehash** skill with .

### Command: `Add to Parking Lot (context)`

When the user says `hold on to {context}`, `add {context} to parking lot` execute the following steps:

1. Infer from the `{context}` the Parking Lot Column, depending on the inout being actionable, a doubt, or a blocker.
1. Execute all the steps in the **Add to Column (column name)** command.

### Command: Do It

When the user says `do todos` or `do it` execute the following steps:

1. Check if the recent exchanges include operations with the **Parking Lot**.
2. If there is recent activity, take the first item and do it.
3. If unclear whether the user is referring to the **TODO** list, STOP and ask the user what to do.
4. Otherwise, do the first item and report back.
5. use the **rehash** skill to respond.

### Command: Reset

When the user says `reset` execute the following steps:

1. Present all lists in full.
2. Ask for confirmation and highlight risks, suggest ways to confirm that the items are no longer valuable.
3. If user confirm delete all lists.

---
name: parking-lot
description: Use to keep track of actionable items, doubts, and blockers within the current session.
---

# Skill: Parking Lot

The purpose of this skill is to keep track of short-lived session work items by maintaining separate lists of actionable work items, unknowns (ambiguity, uncertainty, contradictions), and blockers, and to help the agent present, update, prioritise, and summarise those lists with low overhead communication.

## Definitions

A **Parking Lot** is a data set of micro work items categorised by whether the items are actionable, unclear, or blocked. The Parking Lot is divided into 3 columns according to category.

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

1. Present only the most recently updated list unless the user requested "all lists".
2. Present items as bullet points, no more than 10 (warn if more).
3. Present only unfinished items unless requested.
4. Use `backticks` for symbols or short file paths.
5. Do not include tables or diagrams.
6. Reveal details only when requested by the user.

### Process for Updating the Parking Lot

1. Keep item names stable.
2. Suggest rewording items that no longer reflect the current context.
3. Do not update or remove items without user having requested or approved suggestions.

### Process for Synthesising the Parking Lot

1. Prioritise the parking lot items, ensuring at least the `next` item is identified.
2. Order the items by priority.
3. Generate a terse, information-dense summary focused on actionable items and the most important outstanding questions.

### Process for Presenting Parking Lot Summaries

1. Present the summary as up to 3 short paragraphs:
   - "The next task is ... (1/5 in queue)"
   - "Still unknown: .... (and 2 more questions)"
   - "Blocked by: .... (and 1 more blocker)"
2. If the 3 paragraphs hide critical status, add an additional note.
3. If the list has not been prioritised or looks stale, suggest to update it.
4. Use `backticks` for symbols or short file paths.
5. Do not include tables or diagrams.
6. Append `#SUMMARY#` to the end of the summary.

## Commands

### Command: Show Parking Lot Column (column)

**Triggers:**

- When the user says `show actionable`, `show unknown`, or `show blockers`.

**Process:**

1. Identify the `column` from the input.
2. Execute the **Process for Presenting the Parking Lot** to present the identified `column`.

### Command: Show Parking Lot

**Triggers:**

- When the user says `show parking lot`.
- When the user says `parking lot`.

**Process:**

1. Execute the **Process for Presenting the Parking Lot** to present all columns.

### Command: Parking Lot Summary

**Triggers:**

- When the user says `summarise parking lot`.
- When the user says `parking lot summary`.

**Process:**

1. Execute the **Process for Synthesising the Parking Lot** with all columns as scope.
2. Execute the **Process for Presenting Parking Lot Summaries** to present the summary.

### Command: Parking Lot Column Summary (column)

**Triggers:**

- When the user says `summarise parking lot {column}`.
- When the user says `parking lot {column} summary`.

**Process:**

1. Execute the **Process for Synthesising the Parking Lot** with the requested `column` as scope.
2. Execute the **Process for Presenting Parking Lot Summaries** to present the summary.

### Command: Flush Todos

**Triggers:**

- When the user says `flush todos`.

**Process:**

1. Remove completed items from the **TODO** list.
2. Execute the **Process for Presenting Parking Lot** to present the remaining items.

### Command: Add to Parking Lot Column (item, column)

**Triggers:**

- When the user says `add {item} to {column}`.
- When the user says `{actionable | unknown | doubt | question | blocker}: {item}`. Example: "Actionable: extract the calculation to function".

**Process:**

1. Identify which Parking Lot `column` the user wants to add to.
2. Execute the **Process for Adding Items to Parking Lot** with the identified `item` and `column`.
3. Add to the corresponding Parking Lot Column.
4. Execute the **Process for Presenting Parking Lot** to present the updated column.

### Command: Add to Parking Lot (context)

When the user says `hold on to {context}`, `add {context} to parking lot` execute the following steps:

1. Infer from the `{context}` the Parking Lot Column, depending on the input being actionable, a doubt, or a blocker.
2. Execute all the steps in the **Add to Parking Lot Column** command.

### Command: Do It

When the user says `do todos` or `do it` execute the following steps:

1. Check if the recent exchanges include operations with the **Parking Lot**.
2. If there is recent activity, take the first item and do it.
3. If unclear whether the user is referring to the **TODO** list, STOP and ask the user what to do.
4. Otherwise, do the first item and report back.
5. Execute the **Process for Presenting Parking Lot Summaries** to respond.

### Command: Reset

When the user says `reset` execute the following steps:

1. Present all lists in full.
2. Ask for confirmation and highlight risks, suggest ways to confirm that the items are no longer valuable.
3. If user confirms, delete all lists.

---
name: todos
description: Use to keep track of todos (micro tasks), questions, and blockers within the current session.
---

# Skill: Todo

This skill manages 3 SEPARATE lists::

- TODOS: micro lists
- PENDING: questions,
- BLOCKERS: with cause

## Definitions

The **TODO** list holds micro tasks, stated as shortly as possible.

The **PENDING** list holds doubts, ambiguity, uncertainity, or contradictions, always stated as a question.

The **BLOCKERS** list holds impediments and their known (or unknown) cause.

An **Assistant List** is one of the TODO, PENDING, or BLOCKERS lists.

## Allowed Agent Modes

ALL

## Rules for writing items to Assistant Lists

- RULE: rephrase **TODO** items to be express the outcome above any other idea.
- RULE: rephrase **PENDING** items to clear questions.
- RULE: rephrase **BLOCKES** to "blocked by `<blocker immediate cause>` because `<blocker known root cause>`"
- RULE:

## Rules for presenting Assistant Lists

- RULE: unless the user requested "all lists" present only the most updated list.
- RULE: present only bullet points lists and present no more than 10 (warn if more).
- RULE: present only unfinished items unless requested.
- RULE: always use `backticks` for symbols or an occasional `short/relative/file-path`.
- RULE: DO NOT include tables or diagrams in summary responses.
- RULE: reveal details only when requested by the user.

## Rules for updating Assistant Lists

- RULE: Keep the item names stable.
- RULE: Suggest reword items that no longer reflect the current context.
- RULE: Never update or remove items without user having requested or approved suggestions.

## Rules for synthesising Assistant Lists

These rules extend the `rehash` skill "## Rules for synthesising session context"

Use the `rehash` skill "Rules for synthesising context" plus the followin rules:

- RULE: make sure the list is prioritized first, at least the `next` item should be known.
- RULE: order the list by priority.
- IMPORTANT RULE: if unsure about priorities, refuse to rehash.

## Rules for presenting Assistant List summaries (extends skill `rehash`)

These rules extend the `rehash` skill "## Rules for synthesising session context"

Use the `rehash` skill presentation rules plus the following rules:

- RULE: Summarise as up to 3 short paragraphs:
  - "The next task is ... (1/5 in queue)"
  - "Still pending: .... (and 2 more questions)"
  - "Blocked by: .... (and 1 more blocker)"
- RULE: If the list hasn't been prioritised, or looks stale, suggest to update it.

## User Commands

### When the user says "todos", "pending", or "blockers"

Present the ONLY the requested Assistant List by using the "Rules for presenting Assistant lists".

### When the user says "all lists"

Present the 3 by using the "Rules for presenting Assistant lists".

### When the user says "rehash"

Use the `rehash` skill plus the reashing RULES in this file, to present a summary of all lists.

If any other command in this file say "Rehash!", you know what to do.

### When the user says "rehash"

Use the `rehash` skill plus the reashing RULES in this file, to present a summary of all lists.

If any other command in this file say "Rehash!", you know what to do.

### When the user says "flush todos"

1. Remove completed items from the **TODO** list.
2. Rehash!

### When the user says "todo: `<micro task>`" or "pending: `<question>`" or "pending: `<question>`"

1. identify which **Assistant List** the wants to update
2. apply the the `## Rules for writing items to Assistant Lists` to the user input.
3. add to the corresponding **Assistant List**.
4. respond only with the new item as added to the list
5. Rehash!

### When the user says "add to todos"

1. identify which **Assistant List** the wants to update
2. infer from the most recent exchanges what `micro task`, `question` ot `blocker` the user is referring to.
3. check the list for potential duplicates, and if you find similar items, don't merge the new one, report back to the user.
4. generate a short description according to the `## Rules for writing items to Assistant Lists`
5. add to the **TOOO** list and respond only with the new todo item.
6. Rehash!

### When the user says "do todos" or "do it"

1. Check if the recent exchanges include operations with the **Assistant Lists**.
2. If there is recent activity, take the first item and do it.
3. If unclear whether the user is reffering to the **TODO** list, STOP and ask the user what to do.
4. Otherwise, do the first item and report back.
5. Rehash!

### When the user says "reset"

1. Present all lists in full.
2. Ask for confirmation and highlight risks, suggest ways to confirm that the items are no longer valuable.
3. If user confirm delete all lists.

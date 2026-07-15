---
name: draft-conventions
description: Use when the user wants to capture convention proposals that surfaced from friction experienced during a task, review, or correction session.
---

# Skill: Identify Conventions

## Allowed Agent Modes

CRITICAL RULE: If your context `$AGENT_MODE` is NOT set to one of the following **Agent Modes** you are NOT ALLOWED to use this skill:

- `agent-reference-curator`

CRITICAL RULE: If you are NOT ALLOWED to use this skill, STOP and advise the user to switch to another agent mode first. List agent modes.

## Mandatory Reading

Read `reference/index.md` at the root of the repository, if not yet in context – it describes how to locate documentation on patterns and conventions related to the current session.

Read `.agents/domains/references/producer.md`, if not yet in context – it describes rules, processes, to generate and curate reference files.

## Purpose

Use this skill to extract **proposed convention changes** from task context.

Goal: Generate a **conventions update proposal**

The artifact should read like a practical internal note for maintainers reviewing convention changes.

## Rules to save convention drafts

Save the proposal next to the current task file unless the user asked for a different location.

Example: `task-{task.id}/attachments/convention-draft-{draft.id}.md`

## Steps

### Before you start

- RULE: treat the current repository conventions files as the baseline.
- RULE: the purpose is to capture **deltas** — newly identified rules, rule changes, rule clarifications, and missing exceptions.
- RULE: work primarily from the task context, user corrections, and code review feedback.
- RULE: use the codebase only to verify that a proposed convention is real, repeated, or at least consistent with surrounding code.

### 1. identify the scope categories

The output groups items by scope such as:

- `Global`
- Language: `Typescript`, `HTML`, `CSS`, `JSX`
- Framework or library: `SolidJS`, `TS Parser`
- Entity types: `Components`, `Services`, `Context`, `Routing`
- Support tasks: `Tooling`, `Testing`, `Documentation`

Categories are created in `reference/conventions` directories, under `reference/conventions/{bucket}.md`.

RULE: Before continuing, agents MUST ask the user what are the relevant knowledged files.

- identify the target **section** within the `{category}`.
- identify existing rules within the **section** that might overlap.
- identify an existing rule within the target **section** that should be modified.
- identify existing redundant or conflicting rules in adjacent sections.

### 2. Structure the proposals

Organize the proposals by **scope** and **convention section**.

Each item should target a conventions location in the form

- `{Category} / Section / SubSection`.

Examples:

- `Typescript / Code Conventions / Strict Code`
- `Global / File Conventions`
- `SolidJS / JSX`
- `Services / Code Conventions`
- `Components / Props`

The proposal is a staging artifact for future documentation work, so every entry should make it obvious **where** the rule belongs and **what kind of change** is being proposed.

### 4. Capture the proposal details and context

Capture only changes that surfaced during the task, such as:

- A new undocumented rule the user had to explain.
- A missing exception to an existing rule.
- A misleading or ambiguous convention that caused confusion.
- A repeated implementation pattern that should become a documented rule.
- A naming or import rule the agent violated and the user corrected.
- A framework-specific pitfall that deserves an explicit convention.
- a code shape restriction that is important for readability, evaluation safety, or architecture consistency

Do not include:

- RULE: do not list examples or file references. One is enough.
- RULE: do not include details from the task or other session context.
- RULE: do not write a full clean conventions file.
- RULE: do not include generic style-guide advice.
- RULE: do not include implementation steps, migration plans, or task checklists.
- RULE: do not include speculative “maybe we should” ideas unless brainstorming was requested by the user.
- RULE: do not flatten different ideas into one item - prefer 2 half-formed discoveries that can later be refined.

## Choosing the right level of detail

Use the lightest format that still preserves the idea correctly.

3 Levels: Tiny, Short and Long are presented below.

Do not use a long format just because the topic is important.

Use it only when brevity would lose important context.

### Tiny example

Prefer this format to all others.

The rule can be stated as a short, unambiguous, strong line.

```markdown
## Typescript / Code Conventions / Strict Code

Add rules:

- RULE: Never chain `.filter().map().reduce()` if expression does not fit in one line.

Reword:

- RULE: Never abbreviate variable names.
```

### Short example

Use when the rule needs a little context, justification, or an exception.

Defer synthetising and rewording for later. Just drop the general ideas.

```markdown
### Global / File Conventions

Update **Restricted imports** rule to allow importing from root modules.

Make it explicit that `../../modules/sub-module` is allowed if (and only if) `module` has no barrel export and a `README.md` that explains why.

**Why?** - Lack of clarity caused the task `{task.id}` to derail because of ambiguity.
```

### Long example

Use this format when technical background is required to clarify the intent of the rule.

Use this format if examples are required to illustrate nuanced application guidelines.

````markdown
## SolidJS / JSX

### **Children and slot props single evaluation**

When a component accepts `props.children` (or any other `: JSX.Element` prop) it MUST NOT evaluate it more than once.

DO NOT

```tsx
// evaluates twice
<Show when={props.children}>{props.children}</Show>
```

DO:

```tsx
// evaluates once
import { children as childrenMemo } from '@no-comply/solid-primitives';
const children = () => childrenMemo(props.children)
<Show when={children()}>{children()}</Show>`
```
````

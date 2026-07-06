---
name: draft-conventions
description: Use when the user wants to capture conventions that surfaced during a task, review, or correction session, and turn them into a proposal for updating the repository conventions documentation.
---

# Skill: Identify Conventions

## Purpose

Use this skill to extract **proposed convention changes** from task context.

Goal: Generate a **conventions update proposal**

The artifact should read like a practical internal note for maintainers reviewing convention changes.

## Where to save it

Save the proposal next to the current task file unless the user asked for a different location.

Example: `<task-id>__conventions.md`

## Before you start

- RULE: treat the current repository conventions files as the baseline.
- RULE: the purpose is to capture **deltas** — newly identified rules, rule changes, rule clarifications, and missing exceptions.
- RULE: work primarily from the task context, user corrections, and code review feedback.
- RULE: use the codebase only to verify that a proposed convention is real, repeated, or at least consistent with surrounding code.

## First step – identify the scope buckets

The output groups items by scope such as:

- `Global`
- Language: `Typescript`, `HTML`, `CSS`, `JSX`
- Framework or library: `SolidJS`, `TS Parser`
- Entity types: `Components`, `Services`, `Context`, `Routing`
- Support tasks: `Tooling`, `Testing`, `Documentation`

Buckets are created at the root of the repo in `conventions/<bucket>.md`.

Before continuing, agents MUST iead the relevant files in order to:

- identify the target **section** within the `<bucket>`.
- identify existing rules within the **section** that might overlap.
- identify an exixting rule within the target **section** that should be modified.
- identify existing redundant or conflicting rules in adjacent sections.

## Proposals structure

Organize the proposals by **scope** and **convention section**.

Each item should target a conventions location in the form

- `<bucket> / Section / SubSection`.

Examples

- `Typescript / Code Conventions / Strict Code`
- `Global / File Conventions`
- `SolidJS / JSX`
- `Services / Code Conventions`
- `Components / Props`

The proposal is a staging artifact for future documentation work, so every entry should make it obvious **where** the rule belongs and **what kind of change** is being proposed.

## What to capture

Changes that surfaced during the task, such as:

- A new undocumented rule the user had to explain.
- A missing exception to an existing rule.
- A misleading or ambiguous convention that caused confusion.
- A repeated implementation pattern that should become a documented rule.
- A naming or import rule the agent violated and the user corrected.
- A framework-specific pitfall that deserves an explicit convention.
- a code shape restriction that is important for readability, evaluation safety, or architecture consistency

## What NOT to capture

- RULE: do not list examples or file references. One is enough.
- RULE: do not include details form the task or other session context.
- RULE: do not write a full clean conventions file.
- RULE: do not include generic style-guide advice.
- RULE: do not include implementation steps, migration plans, or task checklists.
- RULE: do not include speculative “maybe we should” ideas unless brainstorming was requested by the user.
- RULE: do not flatten different ideas into one item - prefer 2 half-formed discoveries that can later be refined.

## Proposal writing rules

- RULE: prefer the shortest format that captures the rule correctly (see examples below).
- RULE: if the proposal targets an existing rule, capture whether to **reword**, **clarify**, **split**, **relax** the existing rule.
- RULE: preserve strong modality when it exists — `Always`, `Never`, `MUST NOT`, `allowed only if`, etc.
- RULE: if a rule is justified by a concrete derailment, bug, or review correction, keep a short reference to that context.
- RULE: do not spend effort polishing prose that the user will likely rewrite when merging into the real conventions file.

## How to treat existing conventions

When the task touches an already documented convention:

- identify whether the proposal
- identify whether the proposal is to **add**, **reword**, **clarify**, **split**, **remove**, or **add an exception**
- keep the delta explicit rather than silently rewriting the whole rule
- preserve existing section names if they are still good enough
- if the current section name is misleading, propose a better one as part of the entry

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

**Why?** - Lack of clarity caused task `<task-id>` to derail because of ambiguity.
```

### Long example

Use this format when technical background is required to clarify the intent of the rule.

USe this format if examples are required to illustrate nuanced application guidelines.

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

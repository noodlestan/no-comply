# Skills

This file lists skills.

Instructions on how to update it can be found at the bottom of this file.

## Rules for allowing and forbidding skills

- RULE: You need to know in which agent `$AGENT_MODE` you are currently operating. If you don't have an explicit `$AGENT_MODE` in context then ALL SKILLS ARE FORBIDDEN.
- CRITICAL RULE: When you encounter a rule that states you are only allowed to proceed if you are in mode `$AGENT_MODE`, you must ask yourself again "What is my `$AGENT_MODE`?" and only proceed if your agent mode matches the rule.

## Explicitly Forbidden Agent Modes

If your context `$AGENT_MODE` is set to one of the following modes you are FORBIDDEN to use ANY skills

- `Plan` (OpenCode built-in)
- `Build` (OpenCode built-in)

## Artificial

ID: `artificial`

Description: Use at the beggining of each session to preload the required context for the agent to operate correctly.

---

## Identify Conventions

ID: `draft-conventions`

Description: Use when the user wants to capture convention proposals that surfaced from friction experienced during a task, review, or correction session.

---

## Draft No Comply Entity Task

ID: `draft-no-comply-entity-task`

Description: Use this skill to generate an entity task draft file (\_\_draft.md) at reduced detail.

---

## English

ID: `english`

Description: Use to identify and fix proofreading issues and tone of voice misalignments, and to normalise local paths referenced in the a document.

---

## Execute Plan

ID: `execute-plan`

Description: Executes a plan by delegating individual commits to sub-agents and tracking the plan's progress.

---

## Pair Programming (Generic)

ID: `pair-programmer`

Description: Common pair programming rules; prefer specialized skills `agent-pair-driver` or `agent-pair-navigator`.

---

## Rehash

ID: `rehash`

Description: Use to summarise subsets of the session context to micro summary level, prioritising the most important information.

---

## Render Template

ID: `render-template`

Description: Use to generate structured files from data using a template.

---

## Review Conventions

ID: `review-conventions`

Description: Use when the user wants to review convention proposals captured during a task or review and either reject it or integrate it in the conventions documentation.

---

## Parking Lot

ID: `parking-lot`

Description: Use to keep track of actionable items, doubts, and blockers within the current session.

---

## Update Agents

ID: `update-agents`

Description: Use this skill to update the agent modes index file and platform files for Opencode and Codex.

---

## Update Domains

ID: `update-domains`

Description: Use this skill to update the domains listing file.

---

## Update Skills

ID: `update-skills`

Description: Use this skill to update the skills listing file.

---

## Write Changelog

ID: `write-changelog`

Description: Use this skill when processing done tasks to generate changelogs and archive task files.

---

## Write Follow Ups

ID: `write-followups`

Description: Use when requested, typically at the end of a task, to synthetise current context into a file containing the changes made and identified follow-up tasks.

---

## Write No Comply Entity Task

ID: `write-no-comply-entity-task`

Description: Task-writing skill specialised in generating tasks and specs for developing no-comply entities.

---

## Write plan

ID: `write-plan`

Description: Writes execution plans from tasks

---

## Write Task (Generic)

ID: `write-task`

Description: Generic task writing rules; prefer specialized task-writing skills.

---

# How to update this file and agent platform Links

- Use **update-skills** skill to update this index file.

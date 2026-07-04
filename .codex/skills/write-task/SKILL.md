---
name: write-task
description: Generic task writing rules; prefer specialized task-writing skills.
---

# Write Task

Use this skill to preserve task context without deciding the full implementation plan.

## Rules

- Treat task files as deferred work items, not implementation notes, specs, changelogs, or status reports.
- Preserve facts, constraints, decisions, uncertainty, and intent from the session.
- Separate closed scope from unresolved thinking.
- Keep the task generic unless a narrower task-writing skill is also active.
- Obey every active specialized task-writing skill before this skill.
- Obey any active template exactly when a template is provided by the user, repo, or another skill.
- Obey explicit naming and save-location instructions from the user, repo, or specialized skill.
- Do not invent a save location when none is specified.
- Do not include examples, sample tasks, or reusable task templates in this skill.
- Do not turn open questions into requirements.
- Do not hide blockers inside acceptance criteria.
- Prefer concise bullets over prose.

## Task Outline

- Name: stable, specific task name.
- Summary: short purpose and outcome.
- Skills required: skill names and descriptions.
- User story: who needs the change, what they need, and why.
- Refined: closed scope, concrete instructions, constraints, and out-of-scope notes.
- Unrefined: ideas, questions, risks, blockers, and deferred decisions.
- Acceptance criteria: externally checkable conditions for done.

## Updating Tasks

- Preserve existing decisions unless the user supersedes them.
- Move items from unrefined to refined only when scope is clear.
- Move stale refined items back to unrefined when they become uncertain.
- Mark contradictions explicitly instead of resolving them silently.
- Keep acceptance criteria aligned with refined scope only.

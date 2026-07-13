# Plans Domain API

## Summary

The Plans API provides definitions, structures, file patterns, and templates for creating and executing high-level implementation plans with delegatable sub-agent instructions. Consumers can read plan definitions, file types, record fields, and statuses to understand how plans are structured. Producers can define new plans, create implementation instructions, delegate to sub-agents, capture reports, and follow the full plan lifecycle.

## Hoisted

These items published to the domain listing (making them immediately discoverable by all agents) and also in both the consumer and producer API surfaces.

### Definitions

| Type | Name | Definition | Path | Status |
| ---- | ---- | ---------- | ---- | ------ |
| Definition | Plan | A structured, high-level, implementation plan with delegatable, self-contained, detailed instructions for sub-agents. | definitions/index.md | ✅ |

### Structures

| Type | Name | Fields | Path | Status |
| ---- | ---- | ------ | ---- | ------ |
| Structure | Plan Record Identity | id, status, tasks, summary | structures/plan_structure.md | ✅ |

## All

These items are published in both the consumer and producer API surfaces.

### Definitions

| Type | Name | Definition | Path | Status |
| ---- | ---- | ---------- | ---- | ------ |
| Definition | Definitions Related to "Plan" | Implementation Instructions, Delegation Prompt, Sub Agent Blocker, Sub Agent Report, Instruction Writing Mode, Plan Execution Mode, Instructions Delegation Mode | definitions/index.md | ✅ |

### Files

| Type | Name | Purpose | Pattern | Template | Path | Status |
| ---- | ---- | ------- | ------- | -------- | ---- | ------ |
| File | Plan File | A structured file outlining the plan, identifying the source tasks and specs, describing the high-level commit strategy, and an eventual delegation sequence. | path/{plan.id}/plan.md | .agents/domains/plans/templates/plan__template.md | files/index.md | ✅ |
| File | Implementation Instructions File | Files attached to a plan file, containing the Implementation Instruction prompt and other supporting instructions required for the sub-agent to execute the assigned operations. | {plan.id}/plan__instruct__{commit.id}.md | .agents/domains/plans/templates/instruct__template.md | files/index.md | ✅ |

### Structures

| Type | Name | Fields | Path | Status |
| ---- | ---- | ------ | ---- | ------ |
| Structure | Plan Record Extended | follow-ups, feedback | structures/plan_structure.md | ✅ |
| Structure | Plan Record Status | PREPARING, READY, WORKING, BLOCKED, REVIEW, DONE | structures/plan_structure.md | ✅ |

## Consumer

These items are published in the consumer scope only.

### Structures

| Type | Name | Fields | Path | Status |
| ---- | ---- | ------ | ---- | ------ |
| Structure | Plan Record Extended (consumer) | follow-ups, feedback | structures/plan_structure.md | ✅ |

## Producer

These items are published in the producer scope only.

### Files

| Type | Name | Purpose | Pattern | Template | Path | Status |
| ---- | ---- | ------- | ------- | -------- | ---- | ------ |
| File | Sub Agent Delegation File | Contain the Sub Agent Prompt verbatim, including the bundled implementation structures, commit blueprints, and validation and feedback instructions. | {plan.id}/plan__delegation__{delegation.id}.md | - | files/index.md | ✅ |
| File | Sub Agent Report File | Contain the Sub Agent Report verbatim, detailing the outcome of the sub-agent process. | {plan.id}/plan__report__{delegation.id}.md | .agents/domains/plans/templates/report__template.md | files/index.md | ✅ |

### Structures

| Type | Name | Fields | Path | Status |
| ---- | ---- | ------ | ---- | ------ |
| Structure | Plan Record Details | checklist, commits, delegations | structures/plan_structure.md | ✅ |
| Structure | Plan Record Extended (producer) | follow-ups, feedback | structures/plan_structure.md | ✅ |

## How to update this file

- Use **update-domains** skill with the `update domain plans` command to update this file.

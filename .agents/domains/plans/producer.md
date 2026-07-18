# Plans Producer API

**Use Cases:** Creating, structuring, and managing implementation plans, delegating to sub-agents, capturing reports, and following the full plan lifecycle.

**Provides:**

- Definitions
- Files
- Structures

**Capabilities:**

- Define new plans and related concepts.
- Create plan files, implementation instructions, and delegation files.
- Manage plan record details, checklists, commits, and delegations.
- Capture sub-agent reports and feedback.

## Mandatory Reading

READ: `.agents/domains/plans/definitions/index.md` - Essential definitions for working with plans.

READ: `.agents/domains/plans/files/index.md` - File structures and naming patterns for plan-related files.

READ: `.agents/domains/plans/structures/plan__structure.md` - Plan record structure and status definitions.

READ: `.agents/domains/plans/templates/plan__template.md` - Template for creating plan files.

READ: `.agents/domains/plans/templates/instruct__template.md` - Template for creating implementation instructions.

READ: `.agents/domains/plans/templates/report__template.md` - Template for creating sub-agent reports.

## API

### Definitions

---

| Type       | Name                          | Definition                                                                                                                                                       | Path                 | Status |
| ---------- | ----------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------- | ------ |
| Definition | Plan                          | A structured, high-level, implementation plan with delegatable, self-contained, detailed instructions for sub-agents.                                            | definitions/index.md | ✅     |
| Definition | Definitions Related to "Plan" | Implementation Instructions, Delegation Prompt, Sub Agent Blocker, Sub Agent Report, Instruction Writing Mode, Plan Execution Mode, Instructions Delegation Mode | definitions/index.md | ✅     |

---

### Files

---

| Type | Name                             | Purpose                                                                                                                                                                          | Pattern                                        | Template                                                | Path           | Status |
| ---- | -------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- | ------------------------------------------------------- | -------------- | ------ |
| File | Plan File                        | A structured file outlining the plan, identifying the source tasks and specs, describing the high-level commit strategy, and an eventual delegation sequence.                    | path/{plan.id}/plan.md                         | .agents/domains/plans/templates/plan\_\_template.md     | files/index.md | ✅     |
| File | Implementation Instructions File | Files attached to a plan file, containing the Implementation Instruction prompt and other supporting instructions required for the sub-agent to execute the assigned operations. | {plan.id}/plan**instruct**{commit.id}.md       | .agents/domains/plans/templates/instruct\_\_template.md | files/index.md | ✅     |
| File | Sub Agent Delegation File        | Contain the Sub Agent Prompt verbatim, including the bundled implementation structures, commit blueprints, and validation and feedback instructions.                             | {plan.id}/plan**delegation**{delegation.id}.md | -                                                       | files/index.md | ✅     |
| File | Sub Agent Report File            | Contain the Sub Agent Report verbatim, detailing the outcome of the sub-agent process.                                                                                           | {plan.id}/plan**report**{delegation.id}.md     | .agents/domains/plans/templates/report\_\_template.md   | files/index.md | ✅     |

---

### Structures

---

| Type      | Name                 | Fields                                           | Path                            | Status |
| --------- | -------------------- | ------------------------------------------------ | ------------------------------- | ------ |
| Structure | Plan Record Identity | id, status, tasks, summary                       | structures/plan\_\_structure.md | ✅     |
| Structure | Plan Record Details  | checklist, commits, delegations                  | structures/plan\_\_structure.md | ✅     |
| Structure | Plan Record Extended | follow-ups, feedback                             | structures/plan\_\_structure.md | ✅     |
| Structure | Plan Record Status   | PREPARING, READY, WORKING, BLOCKED, REVIEW, DONE | structures/plan\_\_structure.md | ✅     |

---

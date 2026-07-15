# Plans Consumer API

**Use Cases:** Reading and understanding plan definitions, file types, record fields, and statuses to work with plan-related context.

**Provides:**

- Definitions
- Files
- Structures

**Capabilities:**

- Read plan definitions and related concepts.
- Understand plan file types and naming patterns.
- Access plan record fields and statuses.

## Mandatory Reading

READ `.agents/domains/plans/definitions/index.md` - Essential definitions for working with plans.

READ `.agents/domains/plans/files/index.md` - File structures and naming patterns for plan-related files.

READ `.agents/domains/plans/structures/plan_structure.md` - Plan record structure and status definitions.

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

| Type | Name                             | Purpose                                                                                                                                                                          | Pattern                                  | Template                                                | Path           | Status |
| ---- | -------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- | ------------------------------------------------------- | -------------- | ------ |
| File | Plan File                        | A structured file outlining the plan, identifying the source tasks and specs, describing the high-level commit strategy, and an eventual delegation sequence.                    | path/plan-{plan.id}/plan.md              | .agents/domains/plans/templates/plan\_\_template.md     | files/index.md | ✅     |
| File | Implementation Instructions File | Files attached to a plan file, containing the Implementation Instruction prompt and other supporting instructions required for the sub-agent to execute the assigned operations. | {plan.id}/plan**instruct**{commit.id}.md | .agents/domains/plans/templates/instruct\_\_template.md | files/index.md | ✅     |

---

### Structures

---

| Type      | Name                 | Fields                                           | Path                         | Status |
| --------- | -------------------- | ------------------------------------------------ | ---------------------------- | ------ |
| Structure | Plan Record Identity | id, status, tasks, summary                       | structures/plan_structure.md | ✅     |
| Structure | Plan Record Extended | follow-ups, feedback                             | structures/plan_structure.md | ✅     |
| Structure | Plan Record Status   | PREPARING, READY, WORKING, BLOCKED, REVIEW, DONE | structures/plan_structure.md | ✅     |

---

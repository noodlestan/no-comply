# Plan Structure

## Structures

## Plan Record Identity (#hoist)

**id** - kebab case identifier for the plan.

**status** - a kebab case identifier for the plan. See [Plan status](#plan-status) for allowed values.

**tasks** - a list of task files and their attachments defining the goals and scope of the plan.

**summary** - a summary of the overall goals and scope.

## Plan Record Details (#producer)

**checklist** - identifies the elements of the plan that are defined with confidence.

**commits** - a list of commit blueprints to execute.

**commits.[i].id** - a concise representation of the commit message in kebab case.

**commits.[i].message** - the planned commit message.

**commits.[i].status** - the status of the commit. One of `DRAFT`, `PLANNED`, `COMMITTED`.

**delegations** - a list of planned delegations to sub-agents.

**delegations.[i].id** - a concise representation of the delegation name in kebab case.

**delegations.[i].name** - a short description of the scope delegated.

## Plan Record Extended (#consumer, #producer)

**follow-ups** - a list of items to action after plan is executed.

**feedback** - a list of feedback collected from agents after they executed their commits.

## Plan Record STATUS (#all)

**Statuses:** PREPARING | READY | WORKING | BLOCKED | REVIEW | DONE.

Details for each status:

- PREPARING: planner agent is currently analysing tasks, defining commit strategy, and preparing Implementation Instructions for eventual sub-agent delegation.
- READY: all Implementation Instructions have been created and are ready for execution or delegation.
- WORKING: The plan is being implemented by a `worker` agent or delegated to sub-agent(s) by a `delegator` agent.
- BLOCKED: A worker or sub-agent has reported a blocker or the user requested to block plan execution.
- REVIEW: The worker or delegator agent is waiting for the user to review changes before moving to the next step.
- DONE: All commits are done and changes recorded in the plan.

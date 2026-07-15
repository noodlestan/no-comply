# Plan Structure

<!-- WIP define tasks with more specificity -->

## Definitions

### Plan Structure Definitions (#hoist)

**Plan status** - One of `PREPARING` , `READY` , `WORKING` , `BLOCKED` , `REVIEW` , `DONE`.

### Plan Structure Definitions (#all)

**Plan status (PREPARING):** - planner agent is currently analysing tasks, defining commit strategy, and preparing Implementation Instructions for eventual sub-agent delegation.

**Plan status (READY):** - all Implementation Instructions have been created and are ready for execution or delegation.

**Plan status (WORKING):** - The plan is being implemented by a `worker` agent or delegated to sub-agent(s) by a `delegator` agent.

**Plan status (BLOCKED):** - A worker or sub-agent has reported a blocker or the user requested to block plan execution.

**Plan status (REVIEW):** - The worker or delegator agent is waiting for the user to review changes before moving to the next step.

**Plan status (DONE):** - All commits are done and changes recorded in the plan.

**Task Summary** - A short paragraph representing what needs to be done. Can be expressed as `user story: who needs the change, what they need, and why?` (only when end-user is identified) or `what needs to be done! and why?`.

## Structures

### Plan Record Identity (#hoist)

> Subset of the Plan Record discoverable by all agents

- `id` - kebab case representation of the plan.
- `skill` the id of the Skill used to generate the plan.
- `template` the path to the Template, relatve to the repository root, used to generate the plan file.
- `status` - The **Plan Status**.
- `summary` - a summary of the overall goals and scope.
- `tasks` - a list of task files and their attachments defining the goals and scope of the plan.

### Plan Record Details (#all)

> Subset of the Plan Record used by producers and consumers of plans.

- `summary.scope` - Summary of scope as defined in the task and refined to include .
- `summary.dependencies` - An analysis of dependencies between specifications.
- `required-skills` - A list of skills required for the different phases: `planning`, `implementation`, and `verification`.
- `required-skills.[i].skill_id` - Example: `create-service-specification`.
- `required-skills.[i].scopes` - Example: `implementation, verification`.
- `required-skills.[i].purpose` - Example: `to generate specifications for services`.
- `mandatory-reading` - A list of mandatory reading materials required for the different phases: `planning`, `implementation`, and `verification`.
- `mandatory-reading.[i].filepath` - Example: `project/reference/patterns/index.md`.
- `mandatory-reading.[i].scopes` - Example: `implementation, verification`.
- `mandatory-reading.[i].purpose` - Example: To inform decisions about implementation details.
- `checklist` - identifies the top level fields of the plan record that are defined with confidence.
- `commits` - a list of commit blueprints to execute.
- `commits.[i].id` - a concise representation of the commit message in kebab case.
- `commits.[i].message` - the planned commit message.
- `commits.[i].status` - the status of the commit. One of `DRAFT`, `PLANNED`, `COMMITTED`, `BLOCKED`.
- `delegations` - a list of planned delegations to sub-agents.
- `delegations.[i].id` - a concise representation of the delegation name in kebab case.
- `delegations.[i].name` - a short description of the scope delegated.
- `delegations.[i].status` - the status of the delegation. One of `DRAFT`, `PLANNED`, `EXECUTING`, `COMPlETED`, `BLOCKED`.
- `follow-ups` - a list of items to action after plan is executed.
- `feedback` - a list of feedback collected from agents after they executed their commits.

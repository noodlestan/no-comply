# Plans Domain Index

**Use Cases:** Reading and interpreting plans and interacting with plan attachments.

**Provides:**

- Processes
- Commands

**Capabilities:**

- Work with plan files to execute them.
- Attach reports to plan files.

## Mandatory Reading

READ `.agents/domains/tasks/index.md` - definitions and rules for working with all task files.

## Definition of "Plan"

- **Plan:** A structured, high-level, implementation plan with delegatable, self-contained, detailed instructions for sub-agents. (#hoist)

## Definitions Related to "Plan"

- **Plan File:** A structured file outlining the plan, the commit strategy, and the eventual delegation. Plan files also track source task attachments, implementation instruction attachments, execution status, and capture outcomes and feedback. (#hoist)
- **Implementation Instruction:** Self-contained sub-agent instructions and knowledge references that equip the sub-agent to execute specific changes and operations in the codebase. (#hoist)
- **Implementation Instruction Files:** Files attached to a plan file, containing the Implementation Instruction prompt and other supporting instructions required for the sub-agent to execute the assigned operations and report back to the requesting agent. (#hoist)
- **Implementation Delgatation Files:** Files attached to a plan file, containing the delegation details for sub-agents to execute one one more Implementation Instructions. (#hoist).
- **Sub Agent Blocker:** A report presented by the sub-agent to the delegator agent when failing to execute the implementation instructions, with details of the issues and evidence of changes made, and build status, blockers, and feedback about the instructions.
- **Sub Agent Report:** A report presented by the sub-agent to the delegator agent after WORKING the implementation instructions, with evidence of changes, commits, build status, and blockers in case of not
- **Sub Agent Report File:** The report, as presented by the sub-agent and saved by the delegator to a file, attached to the plan file as a link, and relayed by the delegator to the user for approval.
- **Instruction Writing Mode:** An agent mode specialised in creating Implementation Instruction files for other agents. Analysis tasks requirements, specs and dependencies, gathers context and knowledge, and designs a complete solution, including the commit blueprints and delegation strategy.
- **Plan Execution Mode:** One of `worker` (supervised by a user with optional user review after each commit) or `delegator` (works autonomously, delegating to sub-agents, with optional user review after each delegation).
- **Instructions Delegation Mode:** An agent mode specialised in delegating Implementation Instructions to sub-agents, capturing Sub Agent Reports into files, and updating a plan file with status and links to reports.

## Plan Strucuture

**plan.id** - kebab case identifier for the plan.
**plan.status** - a kebab case identifier for the plan.
**plan.tasks** - a list of task files and their attachments defining the goals and scope of the plan.
**plan.checklist** - identifies the elements of the plan that are defined with confidence.
**plan.summary** - a summary of the overal goals and scope.
**plan.commits** - a list of commit blueprints to execute.
**plan.commits.[i].id** - a compacted representation of the commit message in kebab case.
**plan.commits.[i].message** - the planned commit message.
**plan.commits.[i].status** - the status of the commit. One of `DRAFT`, `PLANNED`, `COMMITED`.
**plan.delegations** - a list of planned delegations to sub-agents.
**plan.delegations.[i].id** - a compacted presentation of the delegation name in kebab case.
**plan.delegations.[i].name** - a short description of the scope delegated.
**plan.follow-ups** - a list of items to action after plan is executed.
**plan.feedback** - a list of feedback collected from agents after they executed their commits.

### Plan status

Statuses:

- PREPARING: planner agent is curently analysing tasks, defining commit strategy, and preparing Implementation Instructions for eventual sub-agent delegation.
- READY: all Implementation Instructions have been created and are ready for execution or delegation.
- WORKING: The plan is being implemented by a `worker` agent or delegated to sub-agent(s) by a `delegator` agent.
- BLOCKED: A worker or sub-agent has reported a blocker or the user requested to block plan execution.
- REVIEW: The worker or delegator agent is waiting for the user to review changes before moving to the next .
- DONE: All commits are done and changes captured in the plan.

## Types of Files Related to Plans

### Plan File

The `plan.id` can be inferred from the plan file name using this pattern: `path/{plan.id}/plan.md`.

The Template `.agents/domains/plans/plan_template.md` defines the structure of a plan file in an arbitrary location.

### Implementation Instructions File

The Implementation instructions are located in the same directory as the Plan File and are named after the `plan.id` and `delegation.id` using the following pattern:

**Implementation Instructions file pattern:** `{plan.id}/plan__instruct__{delegation.id}.md`

The Template `.agents/domains/plans/instruct_template.md` defines the structure for implementation instructions.

### Sub Agent Report File

The Sub Agent Report files are located in the same directory as the Plan File and are named after the `plan.id` and `delegation.id` using the following pattern:

**Sub Agent Report file pattern:** `{plan.id}/plan__report__{delegation.id}.md`

These files contain the Sub Agent Report verbatim, detailing the outcome of the sub-agent process.

The Template `.agents/domains/plans/report_template.md` defines the structure of the sub-agent response and it is referenced from the Implementation Instructions to be processed by the sub-agent at reporting time.

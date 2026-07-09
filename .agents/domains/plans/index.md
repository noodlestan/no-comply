# Plan Management/Execution

Defines common concepts and asserts rules for working with plan files and executing tasks in parallel.

## Mandatory Reading

Agents that were requested to read this file as Mandatory Reading of agent modes, skills, or processes, MUST ALSO read the following files:

- `.agents/domains/tasks/index.md` - definitions and rules for working with all task files.

## Plan Definitions

- **Plan File:** A structured, high level, implementation plan with source task files attached as links, defining the plan to delegate the task to sub-agents - detailed in attached implementation instrctions files - and tracking execution status and outcomes. (#hoist)
- **Plan Commit strategy:** A mapping of changes requested in task files and task specification attachments to a sequence of desired commits defined by Implementation Instruction Files.
- **Implementation Instruction Files:** Files attached to a plan file, containing a self-contained sub-agent prompt with detailed instructions and knowledge references, that equips the sub-agent to execute specific changes in the code base and prepare a commit request. (#hoist)
- **Sub Agent Blocker:** A report presented by the sub-agent to the delegator agent when failing to execute the implementation instructions, with details of the issues and evidence of changes made, and build status, blockers, and feedback about the instructions.
- **Sub Agent Report:** A report presented by the sub-agent to the delegator agent after executing the implementation instructions, with evidence of changes, commits, build status, and blockers in case of not
- **Sub Agent Report File:** The report, as presented by the sub-agent and saved by the delegator to a file, attached to the plan file as a link, and relayed by the delegator to the user for approval.
- **Task Planning Mode:** An agent mode dedicated to creating Implementation Instruction files for delegation to sub-agents. This mode involves analysis of task goals and requested changes, gathering context about current state of the code base, acquiring knowledge about patterns and conventions, and designing a complete solution and commit strategy. In this mode, the agent is FORBIDDEN from making changes to the origin task files and source code and can only update the plan file and generate Implementation Instruction files.
- **Instructions Delegation Mode:** An agent mode specialized in reading the plan file, delegating the Implementation Instructions to sub-agents, capturing Sub Agent Reports into files, updating the plan file status and links, and responding to the user with review requests and status updates.

## Plan status

Statuses:

- PREPARING: planner agent is analysing tasks, defining commit strategy, and preparing Implementation Instructions for sub-agent delegation.
- READY: all Implementation Instructions have been created and are ready for delegation.
- EXECUTING: The delegator agent has launched a sub-agent to execute one of an Implementation Instructions prompt.
- BLOCKED: A sub-agent has failed to present a green state for commit or the user requested to block execution of the plan.
- REVIEW: The delegator is waiting for the user to review changes before making a commit.
- DONE: All commits are done and changes captured in the plan.

## Conventions for Plan (and related files)

### Plan File

The `plan-id` can be read from the plan file name using this pattern: `<plan-id>.md`.

The Template `.agents/domains/plans/plan_template.md` defines the structure of a plan file in an arbitrary location.

### Implementation Instructions File

The Implementation instructions are located in the same directory as the Plan File and are named after the `plan-id` and `commit-kebab-name` using the following pattern:

**Implementation Instructions file pattern:** `<plan-id>__instruct__<commit-kebab-name>.md`

The Template `.agents/domains/plans/instruct_template.md` defines the structure for implementation instructions.

### Sub Agent Report File

The Sub Agent Report files are located in the same directory as the Plan File and are named after the `plan-id` and `commit-kebab-name` using the following pattern:

**Implementation Instructions file pattern:** `<plan-id>__report__<commit-kebab-name>.md`

These files contain the Sub Agent Report verbatim, detailing the outcome of the sub-agent process.

The Template `.agents/domains/plans/report_template.md` defines the structure of the sub-agent response and it is referenced from the Implementations Instruction to be processed by the sub-agent at reporting time.

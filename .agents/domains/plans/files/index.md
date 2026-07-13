# Plan Domain Files

## Files

### Plan File (#all)

**Plan File** – A structured file outlining the plan, identifying the source tasks and specs, describing the high-level commit strategy, and an eventual delegation sequence. Plan files do not contain implementation instructions, these are generated in implementation instruction attachments. Plans also track execution status, and capture outcomes and feedback. (#hoist)

**ID** – The `plan.id` can be inferred from the plan file name using this pattern: `path/{plan.id}/plan.md`.

**Template** – `.agents/domains/plans/templates/plan__template.md` defines the structure of a plan file in an arbitrary location.

### Implementation Instructions File (#all)

**Purpose** – Files attached to a plan file, containing the Implementation Instruction prompt and other supporting instructions required for the sub-agent to execute the assigned operations and report back to the requesting agent.

**Location** – Located in the same directory as the Plan File and are named after the `plan.id` and `commit.id` using the following pattern:

**Naming Pattern** – `{plan.id}/plan__instruct__{commit.id}.md`

**Template**` – .agents/domains/plans/templates/instruct__template.md` defines the structure for implementation instructions.

### Sub Agent Delegation File (#producer)

**Purpose**: Contain the Sub Agent Prompt verbatim, including the bundled implmentation structures, commit blueprints, and validation and feedback instructions.

**Location** – Located in the same directory as the Plan File.

**Naming Pattern** – `{plan.id}/plan__delegation__{delegation.id}.md`

The Template `.agents/domains/plans/templates/delegation__template.md` defines the structure of the sub-agent response and it is referenced from the Implementation Instructions to be processed by the sub-agent at reporting time.

- **Implementation Instruction Files** – F(#hoist)
- **Implementation Delgatation Files** – Files attached to a plan file, containing the delegation details for sub-agents to execute one one more Implementation Instructions. (#hoist).

### Sub Agent Report File (#producer)

**Purpose**: Contain the Sub Agent Report verbatim, detailing the outcome of the sub-agent process.

**Location** – Located in the same directory as the Plan File.

**Naming Pattern** – `{plan.id}/plan__report__{delegation.id}.md`

The Template `.agents/domains/plans/templates/report__template.md` defines the structure of the sub-agent response and it is referenced from the Implementation Instructions to be processed by the sub-agent at reporting time.

- **Implementation Instruction Files** – F(#hoist)
- **Implementation Delgatation Files** – Files attached to a plan file, containing the delegation details for sub-agents to execute one one more Implementation Instructions. (#hoist).

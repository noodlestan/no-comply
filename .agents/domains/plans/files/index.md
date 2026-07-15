# Plan Domain Files

## Files

### Plan File (#all)

**Purpose:** Contains high-level elements of plan record, as defined by `.agents/domains/plans/task_structure.md`, but no implementation instructions (instructions are generated in implementation instruction files).

**Naming Pattern:** `{any path}/plan-{plan.id}/plan.md`.

**Template:** `.agents/domains/plans/templates/plan__template.md` defines the presentation of a plan file.

**Location:** Plan files can be located anywhere in the filesystem.

### Implementation Instructions File (#all)

**Purpose:** Files attached to a plan file, containing the Implementation Instruction prompt and other supporting instructions required for the sub-agent to execute the assigned operations and report back to the requesting agent.

**Naming Pattern:** `plan-{plan.id}/instructions/{commit.id}.md`

**Template**` – .agents/domains/plans/templates/instruct__template.md` defines the structure for implementation instructions.

**Location:** Located in a `instructions/` sub-directory next to the plan file.

### Sub Agent Delegation File (#producer)

**Purpose**: Contain the Sub Agent Prompt verbatim, including the bundled implmentation structures, commit blueprints, and validation and feedback instructions.

**Naming Pattern:** `plan-{plan.id}/delegations/{delegation.id}.md`

**Template:** `.agents/domains/plans/templates/delegation__template.md`.

**Location:** Located in a `instructions/` sub-directory next to the plan file.

### Sub Agent Report File (#producer)

**Purpose**: Contain the Sub Agent Report verbatim, detailing the outcome of the sub-agent process.

**Naming Pattern:** `plan-{plan.id}/delegations/{delegation.id}__report.md`

**Template:** `.agents/domains/plans/templates/report__template.md`.

**Location:** Located in a `instructions/` sub-directory next to the plan file.

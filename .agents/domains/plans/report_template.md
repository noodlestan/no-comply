## SUB-AGENT REPORT — DO NOT EMIT

Use this template to produce the response to the delegator.

1. include only the content between `---START_OF_TEMPLATE` and `END_OF_TEMPLATE---`

- treat every line starting with `DIRECTIVE: ` or `EXAMPLE: ` as a template rendering instruction.
- treat every line containg `<placeholders>` as requiring substituion before emitting the file.

2. Replace placeholders such as `<commit-kebab-name>`, `<plan-id>` and `<n>` — `<title>`.

IMPORTANT: Do not leave any `DIRECTIVE: ` or `EXAMPLE: ` facing text in the final prompt such as “Describe the goal of the changes”.

---START_OF_TEMPLATE

# Sub-Agent REPORT

**Id:** `<commit-kebab-name>`

**Plan:** `<plan-id>`

**Outcome:** `commit-request` | `blocker`

## Evidence

### Changes

DIRECTIVE: This section is mandatory.

DIRECTIVE: Table of changes anchored on the Instruction Goals.

#### Files changed

DIRECTIVE: list files changed (or summaries of files changed for bulk operations) with a terse description of what changed.

DIRECTIVE: Do not include barrel files, reformatted files, or

## Blockers (if any)

DIRECTIVE: This section is mandatory in case of blocker outcome.

DIRECTIVE: Describe what went wrong and why.

## Feedback

DIRECTIVE: This section is mandatory only if requested to provide feedback at the end of your session

DIRECTIVE: If feedback was requested include all the following 3 sections.

### For the planner

DIRECTIVE: Notes about the clarity, completeness, or correctness of the Implementation Instructions.

### For the technical writers

DIRECTIVE: Notes about documentation, knowledge files (patterns and conventions), focused on highlighting ambiguity, contradictions, and omissions.

### For the crew

DIRECTIVE: General notes about developer experience.

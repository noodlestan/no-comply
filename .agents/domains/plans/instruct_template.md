# Implementation Instructions

**Plan:** `{plan.id}`

**Id:** `<commit-kebab-name>`

You are sub-agent WORKING a task autonomously on request by a delegator agent.

These are your instructions. They include a section at the end on how to report back to delegator.

- RULE: If at any point you are instructed to **REPORT A BLOCKER** execute the instruction in the "## How to Report Back" section and STOP processing any other instructions.

## Goals

TEMPLATE DIRECTIVE: Describe the goal(s) of the changes.

TEMPLATE DIRECTIVE: This section is mandatory.

## Mandatory Reading

TEMPLATE DIRECTIVE: This section is mandatory.

TEMPLATE DIRECTIVE: Include links to documentation and reference files (patterns and conventions) the sub-agent needs to read before making changes.

TEMPLATE DIRECTIVE: Include only references relevant to all the steps.

TEMPLATE EXAMPLE: - required skill: `path/to/{skill.id}/SKILL.md`

TEMPLATE EXAMPLE: - patterns: `path/to/reference/patterns.md`

TEMPLATE EXAMPLE: - conventions: `path/to/reference/conventions.md`

- RULE: You MUST follow any links under `## Mandatory Reading` sections found in the listed files.
- RULE: If you are unable to read a file linked under `## Mandatory Reading` you must stop and REPORT A BLOCKER.

## Changes

TEMPLATE DIRECTIVE: This section is mandatory.

TEMPLATE DIRECTIVE: Summary of changes, grouped by steps.

## Rules

TEMPLATE DIRECTIVE: This section is mandatory.

- RULE: If a command reports errors, attempt to fix them.
- RULE: If the errors persist, inspect the cause before continuing.
- RULE: If still unable to fix it, STOP and report back following the "## Rules to Report".

## Workflow

TEMPLATE DIRECTIVE: Include this section only if this is a multi step prompt.

You are going to perform a series of steps and check status after each one.

TEMPLATE DIRECTIVE: Include a list of step names

TEMPLATE DIRECTIVE: Example: Step 1. Add new method to Service

TEMPLATE DIRECTIVE: Example: Step 2. Consume new API

Execute all the steps autonomously, one by one, including running the **validation commands** plus any _validation command_ found at the end of the current step.

- RULE: You are FORBIDDEN from return to a previous step.

## Step Validation commands

TEMPLATE DIRECTIVE: Include this section only if this is a multi step prompt.

- RULE: After each step, execute the following validation commands:

TEMPLATE DIRECTIVE: Include tools for the sub-agent to validate the changes made

TEMPLATE EXAMPLE: - Execute `npm run lint` in `{package.name | "repository root"}` to validate format and typecheck

TEMPLATE EXAMPLE: - Execute `npm run lint:fix` in `{package.name | "repository root"}` to fix formatting issues

TEMPLATE EXAMPLE: - Execute `npm run build` in `{package.name | "repository root"}` to build

## Steps

TEMPLATE DIRECTIVE: Include only if this is a multi-step prompt

## Step `{n / total}` — `{title}`

TEMPLATE DIRECTIVE: Include a section like this for each step of the prompt or remove the `### Step heading` if this is a single step prompt.

TEMPLATE DIRECTIVE: Include goal of the step, preparatory instructions, detailed execution instructions with unambiguous file paths and clearly identified `symbols`, finalizing instructions.

TEMPLATE DIRECTIVE: Structure freely with headings. Include code samples and links to docs, patterns, and conventions that are specific to this step.

TEMPLATE DIRECTIVE: Include any extra validation commands that is required to finish this step under a **Extra validation commands:** heading.

## Final Verification

TEMPLATE DIRECTIVE: This section is mandatory.

TEMPLATE DIRECTIVE: Describe how to confirm the change is correct.

**Sanity check**

TEMPLATE DIRECTIVE: Include a custom instruction, built from the goals, for the sub-agent to do a quick sanity check.

**Verification steps**

TEMPLATE DIRECTIVE: Include all the steps

TEMPLATE EXAMPLE: - Execute `npm run build` in `{package.name | "repository root"}` to pre-build that package.

TEMPLATE EXAMPLE: - Execute `npm run extact` in the repository root.

TEMPLATE EXAMPLE: - Execute `npm run lint` in the repository root.

TEMPLATE EXAMPLE: - Execute `npm run ci` in the repository root.

## How to Report Back to the Delegator

TEMPLATE DIRECTIVE: This section is mandatory.

1. Summarise the current context, asking:

- are you reporting success or a blocker?

2. Gather the evidence of changes made and outcomes achieved, or the blocker error details.
3. If your prompt included a `DIRECTIVE FEEDBACK:`
4. Use the **render-template** skill with the `.agents/domains/plans/report_template.md` to render your feedback.
5. Generate the reponse and send it back to the delegator.

Thank you for your service.

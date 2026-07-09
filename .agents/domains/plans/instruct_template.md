# Implementation Instructions

**Plan:** `<plan-id>`

**Id:** `<commit-kebab-name>`

You are sub-agent executing a task autonomously on request by a delegator agent.

These are your instructions. They include a section at the end on how to report back to delegator.

- RULE: If at any point you are instructed to **REPORT A BLOCKER** execute the instruction in the "## How to Report Back" section and STOP.

## Goals

DIRECTIVE: Describe the goal(s) of the changes.

DIRECTIVE: This section is mandatory.

## Mandatory Reading

DIRECTIVE: This section is mandatory.

DIRECTIVE: Include links to documentation and knowledge files (patterns and conventions) the sub-agent needs to read before making changes.

DIRECTIVE: Include only references relevant to all the steps.

EXAMPLE: - required skill: `path/to/skill.md`

EXAMPLE: - patterns: `path/to/knowledge/patterns.md`

EXAMPLE: - patterns: `path/to/knowledge/patterns.md`

- RULE: You MUST follow any links under `## Mandatory Reading` sections found in the listed files.
- RULE: If you are unable to read a file linked under `## Mandatory Reading` you must stop and REPORT A BLOCKER.

## Changes

DIRECTIVE: This section is mandatory.

DIRECTIVE: Summary of changes, grouped by steps.

## Rules

DIRECTIVE: This section is mandatory.

- RULE: If a command reports errors, attempt to fix them.
- RULE: If the errors persist, inspect the cause before continuing.
- RULE: If still unable to fix it, STOP and report back following the "## Rules to Report".

## Steps

DIRECTIVE: Include this section only if this is a multi step prompt.

You are going to perform a series of steps and check status after each one.

DIRECTIVE: Include a list of step names

DIRECTIVE: Example: Step 1. Add new method to Service

DIRECTIVE: Example: Step 2. Consume new API

Execute all the steps autonomously, one by one, including running the **validation commands** plus any _validation command_ found at the end of the current step.

- RULE: You are FORBIDDEN from return to a previous step.

## Step Validation commands

DIRECTIVE: Include this section only if this is a multi step prompt.

- RULE: After each step, execute the following validation commands:

DIRECTIVE: Include tools for the sub-agent to validate the changes made

EXAMPLE: - Execute `npm run lint` in `<package-name>` to validate format and typecheck

EXAMPLE: - Execute `npm run lint:fix` in `<package-name>` to fix formatting issues

EXAMPLE: - Execute `npm run build` in `<package-name>` to build

## Step `<n>` — `<title>`

DIRECTIVE: Include a section like this for each step of the prompt or remove the `### Step heading` if this is a single step prompt.

DIRECTIVE: Include goal of the step, preparatory instructions, detailed execution instructions with unambiguous file paths and clearly identified `symbols`, finalizing instructions.

DIRECTIVE: Structure freely with headings. Include code samples and links to docs, patterns, and conventions that are specific to this step.

DIRECTIVE: Include any extra validation commands that is required to finish this step under a **Extra validation commands:** heading.

## Final Verification

DIRECTIVE: This section is mandatory.

DIRECTIVE: Describe how to confirm the change is correct.

**Sanity check**

DIRECTIVE: Include a custom instruction, built from the goals, for the sub-agent to do a quick sanity check.

**Verification steps**

DIRECTIVE: Include all the steps

EXAMPLE: - Execute `npm run build` in `<package-name>` to pre-build that package.

EXAMPLE: - Execute `npm run extact` in the monorepo root.

EXAMPLE: - Execute `npm run lint` in the monorepo root.

EXAMPLE: - Execute `npm run ci` in the monorepo root.

## How to Report Back to the Delegator

DIRECTIVE: This section is mandatory.

1. Summarise the current context, asking:

- are you reporting success with a commit request or a blocker?

2. Gather the evidence of changes made and outcomes achieved, or the blocker error details.

3. Read and `.agents/domains/plans/report_template.md` follow the directives there.

4. Generate the reponse and send it back to the delegator.

Thank you for your service.

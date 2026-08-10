# Implementation Instructions

**Plan:** `standard-ui-demo-add-tags-to-search-results`

**Id:** `add-tags-to-search-symbol-result`

You are sub-agent executing a task autonomously on request by a delegator agent.

These are your instructions. They include a section at the end on how to report back to delegator.

- RULE: If at any point you are instructed to **REPORT A BLOCKER** execute the instruction in the "## How to Report Back" section and STOP.

## Goals

Add `tags` field to `SearchSymbolResult` type to enable tags to be passed through from search records to search results.

## Mandatory Reading

- `$ROOT/libs/meta/src/types.ts` - Contains `SearchSymbolResult` type definition
- `$ROOT/libs/meta/src/private/types.ts` - Contains `SearchSymbolRecord` type with existing `tags` field
- `purrception/libs/primitives/src/types.ts` - Contains `DocsTags` type definition

## Changes

1. Add `tags?: DocsTags` field to `SearchSymbolResult` type in `$ROOT/libs/meta/src/types.ts`
2. Import `DocsTags` from `@purrception/primitives` if not already imported

## Rules

- RULE: If a command reports errors, attempt to fix them.
- RULE: If the errors persist, inspect the cause before continuing.
- RULE: If still unable to fix it, STOP and report back following the "## Rules to Report".

## Steps

### Step 1 — Add tags field to SearchSymbolResult

1. Read `$ROOT/libs/meta/src/types.ts` to understand current structure
2. Add `tags?: DocsTags` field to `SearchSymbolResult` type
3. Ensure `DocsTags` is imported from `@purrception/primitives`

**Extra validation commands:**
- Execute `npm run lint` in `$ROOT/libs/meta` to validate format and typecheck

## Final Verification

**Sanity check**

Verify that `SearchSymbolResult` now includes `tags` field and typecheck passes.

**Verification steps**

- Execute `npm run lint` in `$ROOT/libs/meta` to validate format and typecheck

## How to Report Back to the Delegator

1. Summarise the current context, asking:

- are you reporting success with a commit request or a blocker?

2. Gather the evidence of changes made and outcomes achieved, or the blocker error details.

3. Read and `.agents/domains/plans/report_template.md` follow the directives there.

4. Generate the reponse and send it back to the delegator.

Thank you for your service.

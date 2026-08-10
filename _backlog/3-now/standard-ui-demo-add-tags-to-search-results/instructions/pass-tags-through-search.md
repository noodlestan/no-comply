# Implementation Instructions

**Plan:** `standard-ui-demo-add-tags-to-search-results`

**Id:** `pass-tags-through-search`

You are sub-agent executing a task autonomously on request by a delegator agent.

These are your instructions. They include a section at the end on how to report back to delegator.

- RULE: If at any point you are instructed to **REPORT A BLOCKER** execute the instruction in the "## How to Report Back" section and STOP.

## Goals

Update `searchSymbolRecord()` function to pass `tags` from `SearchSymbolRecord` to `SearchSymbolResult`.

## Mandatory Reading

- `$ROOT/libs/meta/src/private/private/searchSymbolRecord.ts` - Contains `searchSymbolRecords` function
- `$ROOT/libs/meta/src/private/types.ts` - Contains `SearchSymbolRecord` type with `tags` field
- `$ROOT/libs/meta/src/types.ts` - Contains `SearchSymbolResult` type (should now have `tags` field from previous commit)

## Changes

1. In `searchSymbolRecords()` function, pass `tags` from `record` to `symbolResult` when creating `SearchSymbolResult`

## Rules

- RULE: If a command reports errors, attempt to fix them.
- RULE: If the errors persist, inspect the cause before continuing.
- RULE: If still unable to fix it, STOP and report back following the "## Rules to Report".

## Steps

### Step 1 — Pass tags through in searchSymbolRecords

1. Read `$ROOT/libs/meta/src/private/private/searchSymbolRecord.ts`
2. Locate where `symbolResult` is created (around line 34-40)
3. Add `tags: record.tags` to the `symbolResult` object

**Extra validation commands:**
- Execute `npm run lint` in `$ROOT/libs/meta` to validate format and typecheck

## Final Verification

**Sanity check**

Verify that `searchSymbolRecords` function now passes `tags` from record to result and typecheck passes.

**Verification steps**

- Execute `npm run lint` in `$ROOT/libs/meta` to validate format and typecheck

## How to Report Back to the Delegator

1. Summarise the current context, asking:

- are you reporting success with a commit request or a blocker?

2. Gather the evidence of changes made and outcomes achieved, or the blocker error details.

3. Read and `.agents/domains/plans/report_template.md` follow the directives there.

4. Generate the reponse and send it back to the delegator.

Thank you for your service.

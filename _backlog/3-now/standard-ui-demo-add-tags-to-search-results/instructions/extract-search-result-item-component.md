# Implementation Instructions

**Plan:** `standard-ui-demo-add-tags-to-search-results`

**Id:** `extract-search-result-item-component`

You are sub-agent executing a task autonomously on request by a delegator agent.

These are your instructions. They include a section at the end on how to report back to delegator.

- RULE: If at any point you are instructed to **REPORT A BLOCKER** execute the instruction in the "## How to Report Back" section and STOP.

## Goals

Extract the for loop content in `ApiSearchResultsEntry.tsx` to a new `ApiSearchResultItem` component and render tags above description in second column.

## Mandatory Reading

- `$PROJECT/src/app/screens/ApiScreen/pages/ApiIndexPage/parts/ApiSearchResultsEntry/ApiSearchResultsEntry.tsx` - Current implementation with inline for loop content
- `$ROOT/libs/meta/src/types.ts` - Contains `SearchSymbolResult` type with `tags` field
- `purrception/libs/primitives/src/types.ts` - Contains `DocsTags` type definition

## Changes

1. Create new `ApiSearchResultItem` component in `$PROJECT/src/app/screens/ApiScreen/pages/ApiIndexPage/parts/ApiSearchResultsEntry/ApiSearchResultItem.tsx`
2. Extract the for loop content from `ApiSearchResultsEntry.tsx` to the new component
3. Render tags above description in second column
4. Update `ApiSearchResultsEntry.tsx` to use the new component
5. Update barrel files if needed

## Rules

- RULE: If a command reports errors, attempt to fix them.
- RULE: If the errors persist, inspect the cause before continuing.
- RULE: If still unable to fix it, STOP and report back following the "## Rules to Report".

## Steps

### Step 1 — Create ApiSearchResultItem component

1. Create new file `$PROJECT/src/app/screens/ApiScreen/pages/ApiIndexPage/parts/ApiSearchResultsEntry/ApiSearchResultItem.tsx`
2. Define component with props accepting `SearchSymbolResult`
3. Implement rendering with tags above description in second column

### Step 2 — Update ApiSearchResultsEntry to use new component

1. Read `$PROJECT/src/app/screens/ApiScreen/pages/ApiIndexPage/parts/ApiSearchResultsEntry/ApiSearchResultsEntry.tsx`
2. Import `ApiSearchResultItem` component
3. Replace inline for loop content with `<ApiSearchResultItem />` component

### Step 3 — Update barrel files

1. Read `$PROJECT/src/app/screens/ApiScreen/pages/ApiIndexPage/parts/ApiSearchResultsEntry/index.ts`
2. Add export for `ApiSearchResultItem` if needed

**Extra validation commands:**
- Execute `npm run lint` in `$PROJECT` to validate format and typecheck

## Final Verification

**Sanity check**

Verify that `ApiSearchResultItem` component exists, renders tags, and is used by `ApiSearchResultsEntry`.

**Verification steps**

- Execute `npm run lint` in `$PROJECT` to validate format and typecheck

## How to Report Back to the Delegator

1. Summarise the current context, asking:

- are you reporting success with a commit request or a blocker?

2. Gather the evidence of changes made and outcomes achieved, or the blocker error details.

3. Read and `.agents/domains/plans/report_template.md` follow the directives there.

4. Generate the reponse and send it back to the delegator.

Thank you for your service.

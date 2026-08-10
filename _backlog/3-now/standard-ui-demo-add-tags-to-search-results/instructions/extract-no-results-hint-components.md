# Implementation Instructions

**Plan:** `standard-ui-demo-add-tags-to-search-results`

**Id:** `extract-no-results-hint-components`

You are sub-agent executing a task autonomously on request by a delegator agent.

These are your instructions. They include a section at the end on how to report back to delegator.

- RULE: If at any point you are instructed to **REPORT A BLOCKER** execute the instruction in the "## How to Report Back" section and STOP.

## Goals

Extract inline `<Show when={showNoResults()}>` and `<Show when={showHint()}>` blocks from `ApiIndexPage.tsx` into separate components.

## Mandatory Reading

- `$PROJECT/src/app/screens/ApiScreen/pages/ApiIndexPage/ApiIndexPage.tsx` - Current implementation with inline blocks
- `$PROJECT/src/app/screens/ApiScreen/pages/ApiIndexPage/parts/index.ts` - Barrel file for parts

## Changes

1. Create new `ApiSearchNoResults` component in `$PROJECT/src/app/screens/ApiScreen/pages/ApiIndexPage/parts/ApiSearchNoResults/ApiSearchNoResults.tsx`
2. Create new `ApiSearchHint` component in `$PROJECT/src/app/screens/ApiScreen/pages/ApiIndexPage/parts/ApiSearchHint/ApiSearchHint.tsx`
3. Update `ApiIndexPage.tsx` to use new components
4. Update barrel files for new components

## Rules

- RULE: If a command reports errors, attempt to fix them.
- RULE: If the errors persist, inspect the cause before continuing.
- RULE: If still unable to fix it, STOP and report back following the "## Rules to Report".

## Steps

### Step 1 — Create ApiSearchNoResults component

1. Create new file `$PROJECT/src/app/screens/ApiScreen/pages/ApiIndexPage/parts/ApiSearchNoResults/ApiSearchNoResults.tsx`
2. Define component with props accepting `terms` string
3. Implement the no results display: `<DocsItem><Text size="large">No results for {terms}</Text></DocsItem>`

### Step 2 — Create ApiSearchHint component

1. Create new file `$PROJECT/src/app/screens/ApiScreen/pages/ApiIndexPage/parts/ApiSearchHint/ApiSearchHint.tsx`
2. Define component with no props needed
3. Implement the hint display: `<Text size="small">Type one more character...</Text>`

### Step 3 — Update ApiIndexPage to use new components

1. Read `$PROJECT/src/app/screens/ApiScreen/pages/ApiIndexPage/ApiIndexPage.tsx`
2. Import `ApiSearchNoResults` and `ApiSearchHint` components
3. Replace inline `<Show when={showNoResults()}>` block with `<ApiSearchNoResults terms={terms()} />`
4. Replace inline `<Show when={showHint()}>` block with `<ApiSearchHint />`

### Step 4 — Update barrel files

1. Read `$PROJECT/src/app/screens/ApiScreen/pages/ApiIndexPage/parts/index.ts`
2. Add exports for `ApiSearchNoResults` and `ApiSearchHint`

**Extra validation commands:**
- Execute `npm run lint` in `$PROJECT` to validate format and typecheck

## Final Verification

**Sanity check**

Verify that `ApiSearchNoResults` and `ApiSearchHint` components exist, are used by `ApiIndexPage`, and barrel files are updated.

**Verification steps**

- Execute `npm run lint` in `$PROJECT` to validate format and typecheck

## How to Report Back to the Delegator

1. Summarise the current context, asking:

- are you reporting success with a commit request or a blocker?

2. Gather the evidence of changes made and outcomes achieved, or the blocker error details.

3. Read and `.agents/domains/plans/report_template.md` follow the directives there.

4. Generate the reponse and send it back to the delegator.

Thank you for your service.

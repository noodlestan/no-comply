# Standard UI Demo Add Tags to Search Results

## Summary

Add `tags` to `SearchSymbolRecord` and `SearchSymbolResult`, extract new components, and render tags in the API index search results.

## Scope

- `$PROJECT = apps/standard-ui-demo`
- `$PROJECT/src/app/screens/ApiScreen/pages/ApiIndexPage/parts/ApiSearchResultsEntry/ApiSearchResultsEntry.tsx`
- `$PROJECT/src/app/screens/ApiScreen/pages/ApiIndexPage/ApiIndexPage.tsx`
- `$ROOT/libs/meta/src/types.ts`
- `$ROOT/libs/meta/src/private/types.ts`

## Skills required

- **agent-pair-programmer**: Step-by-step implementation under user direction

## User story

As a maintainer of the Standard UI demo API screen, I need tags displayed in search results so users can see metadata tags alongside symbol descriptions.

## Refined

- Add `tags` to `SearchSymbolRecord` in `$ROOT/libs/meta/src/private/types.ts`
- Add `tags` to `SearchSymbolResult` in `$ROOT/libs/meta/src/types.ts`
- Pass tags through in `searchSymbolRecord()` at `$ROOT/libs/meta/src/private/private/searchSymbolRecord.ts`
- In `$PROJECT/src/app/screens/ApiScreen/pages/ApiIndexPage/parts/ApiSearchResultsEntry/ApiSearchResultsEntry.tsx`, extract the contents render inside the for loop `{symbolResults => (` to a new `part` component
- Render the tags in the new `ApiSearchResultsEntry` (all tags displayed in the entity — tags show above the description in the second column)
- Extract the inline `<Show when={showNoResults()}>` block into an `ApiSearchNoResults` component (currently still inline in `ApiIndexPage.tsx`)
- Extract the inline `<Show when={showHint()}>` "Type one more character..." block into a component

## Unresolved

- Layout design for tags display may require human intervention

## Acceptance criteria

- `SearchSymbolRecord` includes `tags` field
- `SearchSymbolResult` includes `tags` field
- Tags are rendered in search result entries
- `ApiSearchNoResults` component extracted
- Hint component extracted
- Barrel files updated for new parts

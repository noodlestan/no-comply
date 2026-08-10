# Demo app search split into parts

## Summary

Split `ApiIndexPage` into smaller parts so the search index, search results, and result entry rendering are isolated from the page wrapper.

## Scope

- `$PROJECT = apps/standard-ui-demo`
- `$PROJECT/src/app/screens/ApiScreen/pages/ApiIndexPage/ApiIndexPage.tsx`
- `$PROJECT/src/app/screens/ApiScreen/pages/ApiIndexPage/parts`

## User story

As a maintainer of the Standard UI demo API screen, I need the search page split into smaller components, so the page logic stays readable and the rendering pieces are easier to reuse and test.

## Refined

- Keep the `<Show when={showIndex()}>` and `<Show when={showResults()}>` blocks inside `ApiIndexPage`.
- Extract `ApiIndexListSection` from the index section.
- Extract `ApiSearchResults` from the results section.
- Extract `ApiSearchResultsEntry` with `result: SearchEntityResult` as the main prop.
- Move the extracted components to `$PROJECT/src/app/screens/ApiScreen/pages/ApiIndexPage/parts`.
- Add a barrel file for the new `parts` folder.

## Acceptance criteria

- `ApiIndexPage.tsx` keeps the `Show` guards in place.
- `ApiIndexListSection`, `ApiSearchResults`, and `ApiSearchResultsEntry` live under `parts`.
- The `parts` folder has a barrel file.

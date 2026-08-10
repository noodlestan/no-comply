# Handle input errors in props table

## Summary

Prevent invalid prop inputs in the Standard UI demo props table from crashing the app, and surface invalid input feedback through the existing text input invalid state.

## Scope

- `$PROJECT = apps/standard-ui-demo`

## User story

As a user editing component prop values in the Standard UI demo, I need invalid input to be handled without crashing the page, so I can correct the value and continue using the component playground.

## Refined

- Fix invalid inputs on `ComponentPropsTableRow` crashing the page.
- The current cause is that input values are evaluated as JSX raw values.
- Extract the current `<TextInput>` usage into a new `<ComponentPropInput>` component.
- Place the new component under `$PROJECT/src/app/components/code`.
- Use the `invalid` prop of `TextInput` to show invalid input feedback.
- Keep the app running when a prop input contains an invalid value.

## Unrefined

- Where should prop value evaluation happen?
- Values are currently evaluated when compiling props for `TSXView`, after merging example props with `propOverrides`.
- Local value evaluation may need to use `client-babel`.

## Acceptance criteria

- Invalid prop input in the props table does not crash the app.
- Invalid prop input is reflected through `TextInput`'s `invalid` prop.
- A `ComponentPropInput` component exists under `$PROJECT/src/app/components/code` and owns the input-specific invalid state handling.

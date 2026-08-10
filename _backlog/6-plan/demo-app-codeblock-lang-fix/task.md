# Fix CodeBlock prop lang usage

## Summary

Stop passing `PurrceptionLanguageId` directly into `<CodeBlock>` in the demo app and move language metadata toward a canonical source in `@purrception/solid-code` consumers.

## Scope

- `$PROJECT = apps/standard-ui-demo`

## User story

As a reader of the Standard UI demo docs, I need code blocks to render with the correct language metadata without relying on an invalid prop shape, so the rendered examples stay consistent with the extracted node data.

## Refined

- Trace `<CodeBlock>` consumers in `$PROJECT` and identify what each one passes to the component.
- Remove the direct use of `PurrceptionLanguageId` as a `CodeBlock` prop where it is invalid.

- Expose an obectj literal from `@purrtrait/solid-code` instead of the two contants currently in the project's `src/constants.ts`
- Keep the demo app aligned with the `@purrtrait/solid-code` API that `CodeBlock` forwards into.
- The object literal will contain an ID and other members describing the language (first use case, map to syntax highliter language ID (currently: javscript, html, json))

## Unrefined

- A canonical type for the shape language metadata is needed in `source-code/libs/purrception-primitives`.
- That source should define language attributes such as `purrception-lang-id` and `LanguageName`.

- `source-code/libs/purrception-lang-ts/src/constants.ts` currently defines:
    - `PurrceptionLanguageId = '@purrception/lang-ts'`
    - `LanguageName = 'Typescript'`

- RESEARCH: what are the language identifiers in systems such as vscode, prettier, shiki (what other 2 cross language project can we consider here) - check for commonalities
- DECISIONS:
    - can we assume a unique LangID?
    - should we key everything by purrceptionLangId and then map to the plataform lang ids, or adopt a "common ground" as the key
    - should we add an aliases member to the language object (as in "also known as")

This will be exported, typically as constant (same constant name in every lang package, but also re-exported with the lang id name prefix (or sufixed)) e.g.:

## Acceptance criteria

- `apps/standard-ui-demo` no longer passes `PurrceptionLanguageId` into `<CodeBlock>` where that prop is invalid.
- it consumes the new constant and passes the relevant member property (langID or shiki language?) to `<CodeBlock>`

## Out os scope:

- The task captures the need for a canonical language-attribute type in `@purrception/primitives` and a map keyed by purrception id.
- Code block rendering uses the language data already available on rendered nodes when possible.

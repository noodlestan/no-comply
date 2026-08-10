# Render CodeDocDescription description object as markdown

## Summary

Add a markdown rendering pipeline to the demo app so code documentation descriptions can be rendered as JSX instead of plain text.

## Scope

- `$PROJECT = apps/standard-ui-demo`
- `$PROJECT/src/modules/markdown/services/MarkdownRenderer`
- `$PROJECT/src/modules/markdown/components`

## User story

As a reader of code documentation, I need description objects to render as markdown with component replacement, so rich description content can appear directly in the demo UI.

## Refined

- Create a `MarkdownRenderer` service under `$PROJECT/src/modules/markdown/services/MarkdownRenderer`.
- Use the new markdown dependencies from `unified.js`.
- Expose a single `render(markdown) => JSX.Element` API.
- Support regular markdown rendering with component replacement for links via `linkComponent`.
- Expose the service as a resource similar to `@purrtrait/solid-code/src/services/SyntaxHighlighter`.
- Add `renderMarkdown` to `RenderingProviderAPI` in `$PROJECT/src/providers/Rendering/private/createRenderingContext.ts`.
- Create a minimal `<CodeMarkdownBlock>` under `$PROJECT/src/modules/markdown/components`.
- Consume the markdown renderer from `$PROJECT/src/app/components/code/CodeDocDescription/parts/CodeDocBody/CodeDocBody.tsx`.

## Unrefined

- Research the viable `remark` and `rehype` pipeline options before choosing an implementation shape.
- Decide whether the markdown pipeline should be sync, async, or support both variants.
- Confirm the smallest useful `CodeMarkdownBlock` API and DOM structure.
- Decide how the service resource should be modeled alongside the existing syntax highlighter resource.

## Acceptance criteria

- Markdown descriptions can be rendered through a dedicated service.
- `renderMarkdown` is available through the rendering provider API.
- `CodeDocBody` consumes `useRendering().renderMarkdown`.
- `<CodeMarkdownBlock>` exists and is the minimal implementation needed for the flow.


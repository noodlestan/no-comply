# ADD mixin:standard-ui:markdown-renderer

## Metadata

template: `.agents/domains/specs/templates/no-comply-new-entity-spec-template.md`

## Why

Add a markdown rendering pipeline to the demo app so code documentation descriptions can be rendered as JSX instead of plain text. This enables rich description content with component replacement to appear directly in the demo UI.

## Example Usage (component)

```tsx
// Render markdown description as JSX with component replacement
import { useRendering } from '@no-comply/standard-ui';

const { renderMarkdown } = useRendering();
const descriptionJSX = renderMarkdown(markdownDescription);
```

## Identity

Package: `@no-comply/standard-ui-demo`
Module: `markdown`
Name: `MarkdownRenderer`
Factory: N/A
CSS Module?: NO
Id: `mixin:standard-ui:markdown-renderer`

## Responsibility

Create a markdown rendering service that processes description objects and renders them as JSX with support for component replacement via `linkComponent`. Expose the service through the rendering provider API.

## Composes

- `unified.js` — markdown processing pipeline (remark/rehype).
- Existing rendering provider conventions.
- `@purrtrait/solid-code` — SyntaxHighlighter resource for code block highlighting.

## Accepts Props

**Own props:** (none — service is consumed via hook)

**Composed props:** All rendering provider API props.

## Computes

**ClassLists** - Exposed in `$root`

- `.markdown-rendered` — class added when markdown is successfully rendered.

## Styles

**Classes:**

```
{
  ...existing demo app styling for rendered markdown
}
```

## Exposes API

**$root** = RenderingProviderAPI['$root'] + local `$root` (just a `Classist`).

**renderMarkdown** = `Accessor<(markdown: string) => JSX.Element>`

## Knowledge

- Guide: `$DOMAINS/work/types/knowledge-context.art` for markdown pipeline conventions
- ADR: Markdown Rendering Pipeline for Code Documentation
- Reference: `@purrtrait/solid-code/src/services/SyntaxHighlighter` for resource modeling

## Follow ups

- Research viable `remark` and `rehype` pipeline options before choosing implementation shape.
- Decide whether the markdown pipeline should be sync, async, or support both variants.
- Confirm the smallest useful `CodeMarkdownBlock` API and DOM structure.
- Decide how the service resource should be modeled alongside the existing syntax highlighter resource.

# ADD mixin:standard-ui:codeblock-lang-mapping

## Metadata

template: `.agents/domains/specs/templates/no-comply-mod-entity-spec-template.md`

## Why

Remove the direct language prop from the demo app CodeBlock flow and resolve the language from purrtrait context instead. This ensures language metadata is derived from the rendered node data rather than forwarded through multiple proxy components.

## Example Usage (component)

```tsx
// Resolve language from purrtrait context instead of passing prop
import { usePurrtraitProvider } from '@no-comply/meta';

const { getPurrceptionLang } = usePurrtraitProvider();
const langId = getPurrceptionLang('javascript');

// Use resolved language in CodeBlock
<CodeBlock lang={langId} />
```

## Identity

Package: `@no-comply/standard-ui-demo`
Module: `code`
Name: `CodeBlockLangMapping`
Factory: N/A
CSS Module?: NO
Id: `mixin:standard-ui:codeblock-lang-mapping`

## Responsibility

Remove the `lang` prop from the app-level CodeBlock surface and all upstream invocations. Resolve `node.lang` inside CodeBlock through the purrtrait provider context.

## Composes

- `@purrtrait/solid-code` — provides language metadata on rendered nodes.
- CodeBlock existing props (all except `lang`).

## Accepts Props

**Own props:** (none — `lang` prop is removed)

**Composed props:** All existing CodeBlock props except `lang`.

## Computes

**ClassLists** - Exposed in `$root`

- `.language-resolved` — class added when language is resolved from context.

## Styles

**Classes:**

```
{
  ...existing CodeBlock styles without lang prop handling
}
```

## Exposes API

**$root** = CodeBlock['$root'] (unchanged, without lang prop handling).

## Knowledge

- Guide: `$DOMAINS/work/types/knowledge-context.art` for CodeBlock prop conventions
- ADR: Language Prop Removal for CodeBlock components

## Follow ups

- Consider validating that all nodes in a rendered group share the same language.
- Decide whether unsupported or missing language values should fall back or fail loudly.

# ADD mixin:standard-ui:codeblock-lang-fix

## Metadata

template: `.agents/domains/specs/templates/no-comply-mod-entity-spec-template.md`

## Why

The CodeBlock component should not accept `PurrceptionLanguageId` directly. Instead, language metadata should be resolved from the purrtrait context or a canonical source, ensuring consistent language rendering across the demo app.

## Example Usage (component)

```tsx
// Instead of passing lang prop directly:
// <CodeBlock lang={PurrceptionLanguageId}>

import { usePurrceptionLang } from '@purrtrait/solid-code';

const langId = usePurrceptionLang('javascript');

// Use the resolved language ID
<CodeBlock lang={langId} />
```

## Identity

Package: `@no-comply/standard-ui-demo`
Module: `code`
Name: `CodeBlockLangFix`
Factory: N/A
CSS Module?: NO
Id: `mixin:standard-ui:codeblock-lang-fix`

## Responsibility

Modify the CodeBlock component to remove the direct `lang` prop and instead resolve language metadata from the purrception context API.

## Composes

- `@purrtrait/solid-code` — provides `usePurrceptionLang` hook for language resolution.
- CodeBlock existing props (all except `lang`).

## Accepts Props

**Own props:** (none — `lang` prop is removed)

**Composed props:** All existing CodeBlock props except `lang`.

## Computes

**ClassLists** - Exposed in `$root`

- `.language-resolved` — class added when language is successfully resolved from context.

## Styles

**Classes:**

```
{
  ...existing CodeBlock styles
}
```

## Exposes API

**$root** = CodeBlock['$root'] (unchanged, without lang prop handling).

## Knowledge

- Guide: `$DOMAINS/work/types/knowledge-context.art` for CodeBlock prop conventions
- ADR: Language Prop Decision for CodeBlock components

## Follow ups

- Investigate if other CodeBlock consumers also pass `lang` prop directly.
- Decide on fallback language when context lookup fails.

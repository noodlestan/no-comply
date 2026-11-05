# ADD mixin:standard-ui:purrtrait-provider

## Metadata

template: `.agents/domains/specs/templates/no-comply-new-entity-spec-template.md`

## Why

Add a provider to the Standard UI demo that exposes purrtrait resources needed during app setup and rendering. This resolves purrception language data through a stable context API, so the syntax highlighter and related consumers can look up language metadata consistently.

## Example Usage (component)

```tsx
// Use the provider to lookup language metadata
import { usePurrtraitProvider } from '@no-comply/meta';

const { getPurrceptionLang } = usePurrtraitProvider();
const langId = getPurrceptionLang('javascript');
const languageName = getPurrceptionLang('typesanu'); // or other lookup
```

## Identity

Package: `@no-comply/standard-ui-demo`
Module: `providers`
Name: `PurrtraitProvider`
Factory: N/A
CSS Module?: NO
Id: `mixin:standard-ui:purrtrait-provider`

## Responsibility

Create `PurrtraitProvider` under `$PROJECT/src/providers`, following the same conventions as the existing `Rendering` provider. Expose a context API with `getPurrceptionLang('')` as the primary lookup entry. Wire the provider into the app setup.

## Composes

- Existing `Rendering` provider conventions and patterns.
- `@purrtrait/solid-code` — purrception language data and APIs.
- Standard UI provider base classes and utilities.

## Accepts Props

**Own props:** (none — provider is consumed via hook)

**Composed props:** All provider API props from parent providers.

## Computes

**ClassLists** - Exposed in `$root`

- `.purrtrait-provider-initialized` — class added when provider is initialized.

## Styles

**Classes:**

```
{
  ...existing provider styling
}
```

## Exposes API

**$root** = RenderingProviderAPI['$root'] + PurrtraitProvider['$root'] + local `$root` (just a `Classist`).

**getPurrceptionLang** = `Accessor<string>`

## Knowledge

- Guide: `$DOMAINS/work/types/knowledge-context.art` for provider conventions
- ADR: Purrtrait Provider Integration
- Reference: Existing `Rendering` provider for conventions and patterns

## Follow ups

- Decide whether the provider should expose only language lookup or a broader purrtrait resource surface.
- Confirm where the provider should be initialized relative to `RenderingProvider`.
- Decide how missing or unknown language IDs should be handled.

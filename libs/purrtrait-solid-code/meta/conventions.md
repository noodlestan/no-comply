# Conventions — @purrtrait/solid-code

- **Last updated**: 2026-06-25
- **Author**: sub-agent

## Naming conventions

- **Components**: PascalCase (`CodeBlock`, `SolidCodeLayoutProvider`, `CodeLayoutRenderer`)
- **Functions/hooks**: camelCase (`createSolidCodeLayoutContext`, `useSolidCodeLayoutContext`, `renderLine`, `renderToken`)
- **Types**: PascalCase; component prop types use `Props` suffix (`CodeBlockProps`, `CodeLayoutRendererProps`)
- **Files**: Named after their primary export (one-to-one mapping)

## File organization patterns

- **Domain-based directories** — top-level source split: `components/`, `contexts/`, `providers/`, `private/`
- **Feature subdirectories** — each feature has a subdirectory with its own `index.ts` barrel and `types.ts` (e.g., `CodeBlock/index.ts`, `CodeBlock/types.ts`, `CodeBlock/CodeBlock.tsx`)
- **Private/internal isolation** — internal-only code lives in `private/` directories (`src/private/`, `src/providers/SolidCodeLayout/private/`)
- **Barrel exports** — generated via `// @index` barrel comments (barrelsby or similar tool), re-exporting from each domain directory
- **One export per file** — each `.ts`/`.tsx` file defines a single primary export

## API design patterns

- **Factory function** — `createSolidCodeLayoutContext(options?)` builds context value with defaults
- **Options object pattern** — `SolidCodeLayoutContextOptions` bundles optional configuration (langs, columns, linker, link)
- **Context + Provider pattern** — SolidJS `Context` provides DI: `SolidCodeLayoutProvider` → `useSolidCodeLayoutContext`
- **Default implementations** — `SolidCodeLinkDefault` used when no custom link component is provided
- **Fail-fast** — `useSolidCodeLayoutContext()` throws explicit error if called outside provider
- **Convention over configuration** — sensible defaults (`columns: 60`, empty `langs`, no-op linker)

## Typing conventions

- **`type` over `interface`** — all type definitions use `type` aliases, never `interface`
- **Upstream extension** — Solid-specific types extend upstream `@purrtrait/code-layout` types via intersection (`CodeLayoutContextOptions & { link?: CodeLinkComponent }`)
- **Component props typed explicitly** — prop types are defined separately (e.g., `CodeBlockProps`) rather than inlined in generic parameters
- **No enums** — union string types used instead (consistent with upstream `CodeLayoutTokenKind`)

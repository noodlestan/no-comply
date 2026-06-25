# solid-dev-tools — Conventions

> Generated: 2026-06-25
> By: sub-agent

## Naming Conventions

| Category                 | Convention                  | Examples                                          |
| ------------------------ | --------------------------- | ------------------------------------------------- |
| Components               | PascalCase                  | `DebugDrawer`, `DebugContextTreePanel`            |
| Functions                | camelCase                   | `createDebugContextTree`                          |
| Files                    | Match export name           | `DebugDrawer.tsx`, `createDebugContextTree.ts`    |
| Style modules            | `ComponentName.module.scss` | `DebugDrawer.module.scss`                         |
| Barrel files             | Always `index.ts`           | `components/index.ts`                             |
| Directories (public)     | PascalCase                  | `DebugDrawer/`, `DebugContextTreePanel/`          |
| Directories (structural) | lowercase                   | `components/`, `panels/`, `providers/`, `styles/` |
| Internal dirs            | lowercase                   | `functions/`, `parts/`                            |

## File Organization

- **Feature-based grouping**: `components/` (UI shells), `panels/` (feature panels), `providers/` (side-effects), `styles/` (global stylesheets)
- **One component = one subdirectory**: each major component gets its own directory with an `index.ts` barrel
- **Internal modules**: within a panel, `functions/` for data transformation and `parts/` for sub-components
- **Barrel exclusion pattern**: all `index.ts` files use `@index` comments configured to skip `parts/`, `functions/`, and `private/` directories:
  ```
  // @index(['./*.{ts,tsx}', './!(private|parts|functions)*/index.{ts,tsx}'], ...)
  ```

## API Design Patterns

- **Zero-config components**: all public components accept no props — state is wired via SolidJS context
- **Slot-based composition**: `TreeListBase` accepts a `components` prop for custom item renderers and expand buttons
- **Reactive data pipeline**: `ContextNode` → transformer (`createMemo`) → `Accessor<TreeNode>` → render
- **Accessibility built-in**: every interactive component uses `createAriaRegion` from `@no-comply/solid-accessibility`
- **Function composition over hooks**: `createDebugContextTree` is a pure function wrapping `createMemo`, not a SolidJS primitive

## Typing Conventions

- Use `type` keyword for type-only imports: `import { type Component } from 'solid-js'`
- Use `import type` for type-only exports from dependencies
- Components typed with Solid's `Component` generic
- Domain types: `ContextNode` from `@no-comply/solid-contexts`, `TreeNode` / `TreeListItemContentsProps` from `@no-comply/solid-composables`
- No enums; string union types for variant selection

## Style Conventions

- CSS Modules for component-scoped styles (`*.module.scss`)
- Global styles in `styles/global.scss`
- All debug styles scoped under `@layer dev-tools` CSS cascade layer
- SCSS mixins imported from `@no-comply/standard-ui/scss/mixins/`
- CSS custom properties for theming, inherited from standard-ui
- `data-debug` attribute as a scope selector for debug overlay styles

## Import Ordering

1. Third-party libraries (e.g., `solid-js`)
2. `@no-comply/*` packages
3. Relative imports (siblings → parent → deeper)

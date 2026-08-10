# Follow-ups: Refactor Code Components into Submodules

## Changes made

| What | From | To |
|------|------|----|
| Code components (APILink, CodeBlock, CodeDeclaration, CodeDocDescription, CodeLink, CodeRenderer, CodeSymbolLink, JSXRenderer) | `src/app/components/code/` | `src/modules/code/components/` |
| ComponentPropsTable | `src/app/components/code/ComponentPropsTable/` | `src/modules/props/components/ComponentPropsTable/` |
| Parent barrel | `src/app/components/index.ts` | Removed `export * from './code'` |
| Barrel files | — | Created `modules/code/components/index.ts`, `modules/code/index.ts`, `modules/props/components/index.ts`, `modules/props/index.ts` |
| Consumers (14 files) | `../../../../../components` style imports | Explicit `../../modules/code/components` paths |

## Follow-up tasks

| Task | Reason |
|------|--------|
| Expand `modules/README.md` | Document each module's purpose and contents |
| Extract other component groups (atoms, cards, splash, theme) | Consistent module structure across the demo app |

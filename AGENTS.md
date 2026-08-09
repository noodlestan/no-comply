# Agent Rules and Orientation

## Agent Boot Sequence

1. Read this file.
2. Read `package.json` to understand the project structure and available scripts.
3. Run `npm install` to install dependencies.

## Commands

- `npm run ci` — run lint, build, and test across all packages.
- `npm run lint` — lint all packages.
- `npm run build` — build all packages.
- `npm run test` — test all packages.

## Project Structure

This is an npm workspaces monorepo with packages under `libs/`, `cli/`, and `apps/`.

- `libs/solid-primitives/` — `@no-comply/solid-primitives` — Basic primitives and types for SolidJS.
- `libs/solid-accessibility/` — `@no-comply/solid-accessibility` — Aria types, primitives, and utils.
- `libs/solid-contexts/` — `@no-comply/solid-contexts` — Context-aware services and providers.
- `libs/solid-composables/` — `@no-comply/solid-composables` — Composable components and controllers.
- `libs/standard-ui/` — `@no-comply/standard-ui` — Themeable component library.
- `libs/solid-dev-tools/` — `@no-comply/solid-dev-tools` — Debug/instrumentation tools.
- `libs/meta/` — `@no-comply/meta` — Purrception types, services, helpers (private).
- `cli/meta-extract/` — `@no-comply/meta-extract` — Purrception extraction tools.
- `cli/mybin/` — `@no-comply/mybin` — Workspace tools.
- `apps/standard-ui-demo/` — `@no-comply/standard-ui-demo` — Demo application.

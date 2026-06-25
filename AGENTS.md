# No Comply — Context-UI Monorepo

A monorepo for the **No Comply** ecosystem: context-aware UI components (SolidJS), codebase introspection tools, and documentation infrastructure.

## Contexts

Before diving into a package or task, prefer lightweight context sources over filesystem scans:

- **`.opencode/skills/index.md`** — YOU MUST READ THIS FIRST when entering the codebase or uncertain which skill to apply, and whenever the user asks to "list skills".
- **`meta/*.md`** — Each package may contain `meta/api.md`, `meta/architecture.md`, `meta/conventions.md`, `meta/modules.md`, and `meta/health.md`. Read these before scanning the filesystem — they provide curated summaries of entry points, exports, architecture, conventions, and known issues.

## Package Domains

| Scope            | Domain                                                       |
| ---------------- | ------------------------------------------------------------ |
| **@no-comply**   | UI libraries (solid-\*), meta-tooling, build tools, demo app |
| **@purrception** | Extract structured metadata from codebases                   |
| **@purrtrait**   | Visualize / render codebase metadata                         |
| **@purrpose**    | Single-purpose utilities (e.g. in-browser compilation)       |

The `cli/` vs `libs/` directory split reflects consumption environment — `cli/` packages target Node.js, `libs/` packages are agnostic or client-side. Beyond that, each package has its own architecture, conventions, and documentation.

## Architecture

See each project's own docs for architecture details:

- **@no-comply** — `libs/*/README.md` and `apps/standard-ui-demo/`
- **@purrception** — `libs/purrception-*/README.md` and `cli/purrception-*/`
- **@purrtrait** — `libs/purrtrait-*/README.md`
- **@purrpose** — `libs/purrpose-*/README.md`

Each project in this monorepo may also contain a `<project>/meta/architecture.md` file detailing its design principles, layering, and dependency flow.

## Meta-Extraction System

Several @no-comply packages define `extract` scripts in their `package.json` (e.g. `solid-primitives`, `solid-contexts`, `solid-accessibility`, `solid-composables`, `standard-ui`). These scripts exercise the @purrception pipeline to extract structured metadata from source code.

The demo app (`apps/standard-ui-demo`) consumes this extracted metadata to render documentation and interactive component playgrounds for @no-comply packages.

## Development Workflow

| Command            | Description                                   |
| ------------------ | --------------------------------------------- |
| `npm run dev`      | Turbo dev (all packages in watch mode)        |
| `npm run build`    | Turbo build                                   |
| `npm run lint`     | Turbo lint (eslint + prettier + tsc --noEmit) |
| `npm run lint:fix` | Turbo lint with auto-fix                      |
| `npm run test`     | Turbo test                                    |
| `npm run extract`  | Turbo extract (meta-extraction)               |
| `npm run ci`       | Turbo CI (clean → typecheck → build → test)   |

Pre-commit hooks (via lefthook) run `lint` then `ci` sequentially.

## Code Conventions

- **Linting**: All code is linted with `@noodlestan/eslint-config` + Prettier.
- **Formatting**: See `.prettierrc` (tabs for JS/TS, spaces otherwise).
- **Guidance for agents**: Write code following the conventions of similar files in the same package. Do not obsess over formatting — run `npm run lint` to check for errors and `npm run lint:fix` to fix them automatically.

Each project in this monorepo may also contain a `<project>/meta/conventions.md` file detailing its own conventions.

## Package Map

```
@no-comply/
├── build-tools          — esbuild-based build system (tools/build)
├── meta                 — Purrception types, services, helpers
├── meta-extract         — CLI: orchestrate extraction (cli/meta-extract)
├── solid-*              — Composable accessibility, contexts, controllers, and mixins
├── standard-ui          — Themeable component library
└── standard-ui-demo     — Demo app / documentation site (apps/)

@purrception/
├── primitives           — Core types
├── lang-ts              — Lightweight TS AST definitions
├── lang-ts-extract      — CLI: extract TS AST from source (cli/)
└── source-fs            — CLI: file-system traversal (cli/)

@purrtrait/
├── code-layout          — Code layout models
├── lang-ts              — @purrception/lang-ts support
├── client-tsx           — In-browser TS/TSX parsing
├── solid-code           — SolidJS code renderers
└── view-tsx             — Editable TSX code models

@purrpose/
├── client-babel                 — In-browser JSX/TSX compiler
└── client-babel-preset-solidjs  — SolidJS preset for above
```

Each project in this monorepo may also contain a `<project>/meta/modules.md` file providing a tree of relevant source files with compact descriptions.

# Knowledge

This file lists the project namespaces and their location.

Most packages are located according to this pattern `<namespace>/<type>/<package>`, where `type` can be one of:

- `cli` - a module meant to be used in Node.js environments.
- `lib` - a library that can be used in both Node.js and the browser.
- `app` - source code for an application.
- `docs` - a docs website source code

Example: `@no-comply/lib/solid-primitives` is a **library**, and the package name is: `@no-comply/solid-primitives`

## Namespaces

### @no-comply

cli

SolidJS UI System.

Directory: `no-comply/`

Libraries:

- `no-comply/libs/solid-primitives` - Types and prop helpers.
- `no-comply/libs/solid-accessibility` - Types, and role controllers.
- `no-comply/libs/solid-contexts` - Contexts, services and providers for building apps.
- `no-comply/libs/solid-composables` - Controllers, mixins and unstyled components.
- `no-comply/libs/standard-ui` - Themeable component library.

Support:

- `no-comply/apps/standard-ui-demo` - Demo application and documentation.
- `no-comply/libs/meta` - Purrception types, services, helpers.
- `no-comply/libs/meta-extract` - (CLI) orchestrate extraction.

### @purrception

Extract docs and structured metadata from codebases

Directory: `purrception/`

- `@purrception/primitives` - Core types.
- `@purrception/lang-ts` - Lightweight TS AST definitions.
- `@purrception/lang-ts-extract` - (CLI) extract TS AST from source.
- `@purrception/source-fs` - (CLI) file-system traversal.

### @purrtrait

Render codebase related docs and metadata

Directory: `purrtrait/`

- `@purrtrait/code-layout` - Code layout models.
- `@purrtrait/lang-ts` - @purrception/lang-ts support.
- `@purrtrait/client-tsx` - In-browser TS/TSX parsing.
- `@purrtrait/solid-code` - SolidJS code renderers.
- `@purrtrait/view-tsx` - Editable TSX code models.

### @purrpose

Single-purpose utilities (e.g. in-browser compilation)

Directory: `purrpose/`

- `@purrpose/client-babel` - In-browser JSX/TSX compiler.
- `@purrpose/client-babel-preset-solidjs` - SolidJS preset for above.

### No namespace

- `build-tools - Esbuild-based build system (tools/build).

<-- WIP: extract listings from, replacing links to README files with links to `knowledge/index.md` files -->

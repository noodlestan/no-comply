# Art JS

> Tools for working with Art files.

Art Language and modules implementation. The (reactive) pipeline flows from bundler to compiler to validator to parse to source.

## Packages

### Libraries

- [Artificials Primitives](./libs/primitives/README.md) – Core primitives for the Art language.
- [Artificials Parser](./libs/parser/README.md) – Parses Art modules (.art) and markdown files (.md).
- [Artificials Validator](./libs/validator/README.md) – Validates Art modules against structures and types.
- [Artificials Program](./libs/program/README.md) – Program representation and execution.
- [Artificials Bundler](./libs/bundler/README.md) – Bundles Art modules for distribution.

### CLI

- [Artificials Watcher](./cli/watcher/README.md) – Watches for file changes and triggers rebuilds.
- [Artificials Bin](./cli/bin/README.md) – CLI binary for Artificials.
- [Artificials Tools](./cli/tools/README.md) – Developer tools and utilities.
- [Artificials Language Server](./cli/language-server/README.md) – Language server for Art files.
- [Artificials Ldev Server](./cli/dev-server/README.md) – Local development server.

### Scripts

- **$** `npm run build` – Build the CLI binary.

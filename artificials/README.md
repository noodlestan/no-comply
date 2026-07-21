# Artificials

> Tools for working with Art files.

Art Language and modules implementation. The (reactive) pipeline flows from bundler to compiler to validator to parse to source.

## Packages

### Libraries

- [Artificials Primitives](./libs/primitives/README.md) – Shared types and helpers.
- [Artificials Parser](./libs/parser/README.md) – Parses Art modules (.art) and markdown files (.md).
- [Artificials Validator](./libs/validator/README.md) – Validates parsed modules.
- [Artificials Program](./libs/program/README.md) – Compiles an Art program.
- [Artificials Bundler](./libs/bundler/README.md) – Generates bundle files for a program.

### CLI

- [Artificials Watcher](./cli/watcher/README.md) – Watches project program files for changes.
- [Artificials Bin](./cli/bin/README.md) – Static entry point to parser, validator, compiler, bundler, watcher.
- [Artificials Tools](./cli/tools/README.md) – Agent entry points.
- [Artificials Language Server](./cli/language-server/README.md) – Language server (WIP).
- [Artificials Ldev Server](./cli/dev-server/README.md) – Language server (WIP).

### Scripts

- **$** `npm run build` – Build the CLI binary.

## Copyright (c) 2026 [Noodlestan](https://noodlestan.org/).

Published under a [MIT license](https://noodlestan.mit-license.org/).

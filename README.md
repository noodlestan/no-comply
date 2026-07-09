# Noodlestan 🐘 Collective

We are an open collective of people dedicated to the design and software crafts: UX, design, code, web, 3d, audio, the works. Learn more about us and our projects at [Noodlestan.org](https://noodlestan.org/).

**👐 Your contribution is welcome! 👐**

If would like to share your ideas, report a bug, ask for improvements - or simply say hi! 👋 - don't hesitate to join us on [Noodlestan's Discord](https://discord.gg/b8DkbJSF9z) or to drop us a line at `hello@noodlestan.org`.

## Projects in this monorepo

This monorepo holds the codebase for several related projects:

- [@no-comply](./no-comply/README.md) – a context-aware UI system built with SolidJS and modern CSS.
- [@purrception](./purrception/README.md) – extract docs and structured metadata from codebases.
- [@purrtrait](./purrtrait/README.md) – render codebase related docs and metadata.
- [@purrpose](./purrpose/README.md) – Single-purpose utilities (e.g. in-browser compilation).

## Getting started

First make sure you are using the correct node version by running `nvm use`.

Install dependencies with `npm install` and buid all libraries with `npm run ci`.

In the Standard UI Sandbox application `apps/standard-ui-demo/` run `npm run dev` to launch a development server.

## Development

System requirements:

- [Node.js](https://nodejs.org/)
- [NVM](https://github.com/nvm-sh/nvm)

We recommended using [VS Code](https://code.visualstudio.com/) with the following extensions: [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint), [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode), [MDX](https://marketplace.visualstudio.com/items?itemName=unifiedjs.vscode-mdx), [Astro](https://marketplace.visualstudio.com/items?itemName=astro-build.astro-vscode), [SpellRight](https://marketplace.visualstudio.com/items?itemName=ban.spellright)

### Commands

All these commands can be run from the root of the repository (via Turbo tool, respects depency graph), or from any package directory.

- `npm run dev` - Run in watch. Serve development server when in an application directory.
- `npm run build` - Build library/application.
- `npm run lint` - Check formatting (ESLint + Prettier) and typecheck (`tsc --noEmit`).
- `npm run lint:fix` - Check formatting only and fix issues.
- `npm run test` - Run tests
- `npm run extract` - Extract meta/docs extraction
- `npm run ci` - Clean, typecheck, build, test

Pre-commit hooks (via lefthook) run `lint` then `ci` sequentially.

### Docs Extraction System

The `@no-comply` libraries have a `npm run extract` command that exercises the `@purrception` pipeline to extract structured metadata and docs contents from source code into `dist/`.

The demo app (`apps/standard-ui-demo`) consumes this extracted metadata and uses `@purrception` libraries to render documentation and interactive component playgrounds for `@no-comply` packages.

### Stack

The `@no-comply` UI libraries depend only on [Solid JS](https://docs.solidjs.com/) and a few [Solid Primitives](https://primitives.solidjs.community/).

The `@purrtrait` and `@purrception`libraries depend heavily on [Typscript](https://www.typescriptlang.org/play/?#code/PTAEElQMXA5ARCAVCsDCAlAovcAhAGS1CQAkBBFMrbCAZVFgHlR4m0BVAWS1iUvBNYoISVLgGAdSx464JMXJ4mHKqWJIGABXIY6NUOS2QAUCZChSAUwBOVgOQBnUAEMAdqCsAPFwFsADgA2VqAA9gBmoAAuABYuUaAAnqEArqAAxu6u6TEAllYAbiEA7rmxoGUAXGa5AaE2CVGJ-iEA3tApbulRuaFuAFKO8KHp8PEuADQdXT19BLkA1lbwVumBLjbxvR4AvqDhNqG+oPYAAv4pNjbpVv6zbsDrbgDmALRRjvYA3Ca1-vWNZwHI4nJotRzpGy5O7fGp1BqgVomACQ3iim26KwhULu2wmKLRGKiWg2fiQLmejnxqK86Jc3QwViilzcjnJz2phPpUXZVIJtKJSCsAXWUSsvPxe2Bx3sADpgP4oQV4g4ft5-gjwp1uttPALuVBtfdBsN0gAKNyhAAmVkq0x1c0Wy1W6029wAlHbDTNtiaRmMoi5ESj0n1HAkAFZDEagAC80UcsueTP6dFNaCOvisbg+5DcVt5FutIRczg+stgxfdsvCuXzZvLuUcqdN7tcjhRyIAPgnZS2Rp2e50bbW3FYrT8Q2GEjbsdD7nG9XTMVY57i+mao62fsjQ6zGsKgireYuud0hSLjxTHJvo+l3Tu9+HQP5Sb4T-Gz8S34WtyMH1O+6gHYzI2Ky7KnvqDJMiybIUre26Ac+gaUpBy48teCH-pOyIgSywbIsis6QvOeKdmKl5ihKnavps77XtSuEwWBcEcuRDEojsPw7CYQA).

The demo application uses [Prettier](https://prettier.io/), [Shiki](https://shiki.style/) and [Babel](https://babeljs.io/)

CLI libraries (in `no-comply/cli/`, `purrception/cli/`) depend on [Node.js](https://nodejs.org/en) and Node packages such as `chokidar`.

**Development tools:** [Vite](https://vitejs.dev/) and [Vitest](https://vitest.dev/guide/), [@noodlestan/eslint-config](https://www.npmjs.com/package/@noodlestan/eslint-config) - our style guide (ESLint + Prettier), [Turborepo](https://turborepo.com/) to manage build tasks and [Lefthook](https://evilmartians.com/chronicles/lefthook-knock-your-teams-code-back-into-shape) to manage the git hooks.

### Committing

Make sure the `pre-commit` hook was executed. It runs automatically before every commit and lints all code. Under the hood it runs `npm run lint` and `npm run ci`. Run these to inspect error details.

---

### Acknowledgements

This project contains code based on the following open-source projects:

- [SolidJS](https://github.com/solidjs/solid) - Copyright (c) 2016-2025 Ryan Carniato - Licensed under the MIT License.
- [solid-i18next](https://github.com/noodlestan/solid-i18next) - Copyright (c) 2021-2023 Martynas Barzda - Licensed under the MIT License.

---

## MIT License

Copyright (c) 2025 [Noodlestan](https://noodlestan.org/).

Published under a [MIT license](https://noodlestan.mit-license.org/).

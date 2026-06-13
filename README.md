# [No Comply]

> Context-aware UI system built with [SolidJS](https://www.solidjs.com/) and modern CSS.

- [[No Comply] Docs](https://no-comply.noodlestan.org/)
- [Standard UI Demo](https://standard-ui.noodlestan.org/)

## Noodlestan 🐘 Collective

We are an open collective of people dedicated to the design and software crafts: UX, design, code, web, 3d, audio, the works. Learn more about us and our projects at [Noodlestan.org](https://noodlestan.org/).

**👐 Your contribution is welcome! 👐**

If would like to share your ideas, report a bug, ask for improvements - or simply say hi! 👋 - don't hesitate to join us on [Noodlestan's Discord](https://discord.gg/b8DkbJSF9z) or to drop us a line at `hello@noodlestan.org`.

## Development

System requirements:

- [Node.js](https://nodejs.org/)
- [NVM](https://github.com/nvm-sh/nvm)

We recommended using [VS Code](https://code.visualstudio.com/) with the following extensions: [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint), [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode), [MDX](https://marketplace.visualstudio.com/items?itemName=unifiedjs.vscode-mdx), [Astro](https://marketplace.visualstudio.com/items?itemName=astro-build.astro-vscode), [SpellRight](https://marketplace.visualstudio.com/items?itemName=ban.spellright)

### Getting started

First make sure you are using the correct node version by running `nvm use`.

Install dependencies with `npm install`.

In the Standard UI Sandbox application `apps/standard-ui-demo/` run `npm run dev` to launch a development server.

### In this repository

Apps:

- [Standard UI Demo](https://github.com/noodlestan/no-comply/blob/apps/standard-ui-demo/README.md) - Demo application built with [Standard UI](https://standard-ui.noodlestan.org/).

Libraries:

- [Solid Contexts](https://github.com/noodlestan/no-comply/blob/libs/solid-contexts/README.md) - Context-aware application services, and controllers.
- [Solid Primitives](https://github.com/noodlestan/no-comply/blob/libs/solid-primitives/README.md) - Core types and utils.
- [Solid Accessibility](https://github.com/noodlestan/no-comply/blob/libs/solid-accessibility/README.md) - Aria types, primitives, and utils.
- [Solid Composables](https://github.com/noodlestan/no-comply/blob/libs/solid-composables/README.md) - Composable components, controllers, and mixins.
- [Solid Dev](https://github.com/noodlestan/no-comply/blob/libs/solid-dev-tools/README.md) - Instrumentation and debug tools.
- [Standard UI](https://github.com/noodlestan/no-comply/blob/libs/standard-ui/README.md) - Themeable component library.

### Stack

This project is built targets [Solid JS](https://www.solidjs.com/) ([docs](https://docs.solidjs.com/)) applications and component libraries.

It depends only on SolidJS core and a few [Solid Primitives](https://primitives.solidjs.community/).

Documentation is built on top of [Astro](https://docs.astro.build) / [Starlight](https://starlight.astro.build/).

### Tools

- [Vite](https://vitejs.dev/) and [Vitest](https://vitest.dev/guide/)
- [@noodlestan/eslint-config](https://www.npmjs.com/package/@noodlestan/eslint-config) - our style guide (ESLint + Prettier)
- [Turborepo](https://turborepo.com/) - manages build tasks
- [Lefthook](https://evilmartians.com/chronicles/lefthook-knock-your-teams-code-back-into-shape) - manages the git hooks

### Committing

Make sure the `pre-commit` hook was executed. It runs automatically before every commit and lints all code. Under the hood it runs `npm run lint` and `npm run ci`. Run these to inspect error details.

## MIT License

Copyright (c) 2024-2025 [Noodlestan](https://noodlestan.org/).

Published under a [MIT license](https://noodlestan.mit-license.org/).

---

### Acknowledgements

This project contains code based on the following open-source projects:

- [SolidJS](https://github.com/solidjs/solid) – Copyright (c) 2016-2025 Ryan Carniato – Licensed under the MIT License.
- [solid-i18next](https://github.com/noodlestan/solid-i18next) – Copyright (c) 2021-2023 Martynas Barzda – Licensed under the MIT License.

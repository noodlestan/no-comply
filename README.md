# Noodlestan Context UI

> Context-aware UI system built with [SolidJS](https://www.solidjs.com/).

## Noodlestan 🐘 Collective

We are an open collective of people dedicated to the design and software crafts: UX, design, code, web, 3d, audio, the works. Learn more about us and our projects at [Noodlestan.org](https://noodlestan.org).

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

Run `npm run dev` in the Context UI sandbox application: `apps/standard-ui-sandbox/`.

### In this repository

Libraries:

- [Context UI](https://github.com/noodlestan/context-ui/blob/libs/context-ui/README.md) - Context-aware application services, and controllers.
- [Context UI Types](https://github.com/noodlestan/context-ui/blob/libs/context-ui-types/README.md) - Core types and utils.
- [Context UI Aria](https://github.com/noodlestan/context-ui/blob/libs/context-ui-aria/README.md) - Aria types, primitives, and utils.
- [Context UI Headless](https://github.com/noodlestan/context-ui/blob/libs/headless-ui/README.md) - Headless component library.
- [Context UI Dev](https://github.com/noodlestan/context-ui/blob/libs/context-ui-dev/README.md) - Instrumentation and debug tools.
- [Standard UI](https://github.com/noodlestan/context-ui/blob/libs/standard-ui/README.md) - Themeable component library.

Apps:

- [Standard UI Sandbox](https://github.com/noodlestan/context-ui/blob/apps/standard-ui-sandbox/README.md) - Sandbox for developing and testing Context UI features.

### Stack

This component library targets the [Solid JS](https://www.solidjs.com/) ([docs](https://docs.solidjs.com/)).

Most libraries are coupled with this framework wherever signals and other reactive primitives are used.

Documentation is built on top of [Astro](https://docs.astro.build) / [Starlight](https://starlight.astro.build/).

### Tools

- [Vite](https://vitejs.dev/) and [Vitest](https://vitest.dev/guide/)
- [@noodlestan/eslint-config](https://www.npmjs.com/package/@noodlestan/eslint-config) - our style guide (ESLint + Prettier)
- [Lefthook](https://evilmartians.com/chronicles/lefthook-knock-your-teams-code-back-into-shape) - manages the git hooks

### Committing

Make sure the `pre-commit` hook was executed. It runs automatically before every commit and lints all code. Under the hood it runs `npm run lint` and `npm run ci`. Run these to inspect error details.

## MIT License

Copyright (c) 2024 [Noodlestan](https://noodlestan.org/).

Published under a [MIT license](https://noodlestan.mit-license.org/).

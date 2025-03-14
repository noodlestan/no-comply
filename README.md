# Noodlestan UI System

> Component library and UI services built with [SolidJS](https://www.solidjs.com/).

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

Run `npm run dev` in the UI System sandbox application: `apps/ui-system-sandbox/`.

### In this repository

Libraries:

- [UI System](https://github.com/noodlestan/ui-system/blob/libs/ui-system/README.md)- component library (themes, components, controllers, and more)

Apps:

- [UI System Sandbox](https://github.com/noodlestan/ui-system/blob/apps/ui-system-sandbox/README.md) - for developing and testing UI System features

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

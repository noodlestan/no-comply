# Purrtrait / View TSX

> Absractions for modelling editable TSX code.

This package provides high level abstractions for modelling editable TSX code.

It was designed for **interactive component environments**: documentation sandboxes, visual editors, and runtime JSX evaluation in the browser.

Used together with a parser such as [](@purrpose/client-ts) and a compiler like [@purrpose/client-babel](), it consitutes a system that allows a user to provide TSX snippets, extract them into a structured editable model, edit individual props/wrappers/children independently, then re-materialize them into executable JSX components at runtime.

## Features

-

## Installation

```bash
npm install @purrtrait/view-tsx
```

⚠️ **Peer dependencies:** Also install if not in your project already:

- `typescript`

## Usage

Extraction Invariants

Exactly one target node must exist.

Valid:

<Button target />

Invalid:

<Button />

Invalid:

<Button target />
<Button target />

Target marker is removed from extracted props.

The target marker exists only during extraction.

It is not part of the resulting view model.

Children Handling

Children are extracted as a normal prop:

props.children

Children are normalized to fragments.

Example:

<Display />
<Text />

becomes:

<>
<Display />
<Text />
</>

This avoids needing:

XPressValueJsx[]

and keeps the value model uniform.

## API

## Development

Make sure you [README](https://github.com/noodlestan/no-comply/blob/README.md) first.

### Build Targets

This library is distributed as ESM and intended to be processed by a bundler such as Vite or Astro. The main entry point is the Typescript source code.

### Scripts

- **$** `npm run dev` - uses `Vite` to (re)build on changes
- **$** `npm run build` - uses `Vite` to do produce a dry build in `dist/`.
- **$** `npm run lint` / `npm run lint:fix` - uses [@noodlestan/eslint-config](https://www.npmjs.com/package/@noodlestan/eslint-config).

## MIT License

Copyright (c) 2026 [Noodlestan](https://noodlestan.org/).

Published under a [MIT license](https://noodlestan.mit-license.org/).

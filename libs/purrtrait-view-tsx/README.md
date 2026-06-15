# Purrtrait / View TSX

> Absractions for modelling editable TSX code.

This package provides high level abstractions for modelling editable TSX code.

It was designed for **interactive component environments**: documentation sandboxes, visual editors, and runtime JSX evaluation in the browser.

Used together with a TypeScript parser and a runtime compiler, this package allows TSX snippets to be extracted into structured editable models, modified at a fine-grained level, and recompiled into executable JSX.

## Features

Extract editable view models from TSX snippets into a framework-agnostic representation suitable for React, SolidJS, and custom runtimes.

Supports independent editing of:

- **Target component:** identified by `tsx-view-target` attribute
- **Template wrapper:** everything around the target component
- **Target component props:** including children, classified as `TSXNode` values (JSX, handlers, and expressions)

This allows wrapper structure and target component props to be edited independently in a way that only requires re-extracting the view and re-compiling the wrapper component when the wrapper itself is modified.

## Installation

```bash
npm install @purrtrait/view-tsx
```

⚠️ **Peer dependencies:** Also install if not in your project already:

- `typescript`

## Usage

### Dependencies

This package is intended to be used together with:

- `@purrtrait/client-ts` for parsing and AST utilities
- `@purrpose/client-babel` for runtime compilation and evaluation

The extracted model itself contains no runtime execution logic.

### Extracting a view model

Given the following TSX:

```tsx
<h1>hello</h1>
<Flex padding="l">
	<Button
		tsx-view-target
		intent="negative"
		onClick={() => console.log('!')}
	>
		<Display>foo</Display>
	</Button>
</Flex>
```

Create an editable view:

```ts
import { extractTSXView } from '@purrtrait/view-tsx';

const view = extractTSXView(source);
```

Result (simplified):

```ts
{
	wrapper: {
		type: 'jsx',
		serialized:
			'<><h1>hello</h1><Flex padding="l"><TSXViewTargetPlaceholder {...props} /></Flex></>'
	},
	target: {
		component: {
			name: 'Button'
		}
	},
	props: {
		intent: {
			type: 'expression',
			serialized: '"negative"'
		},
		onClick: {
			type: 'handler',
			serialized:
				'() => console.log("!")'
		},
		children: {
			type: 'jsx',
			serialized:
				'<><Display>foo</Display></>'
		}
	}
}
```

### Target nodes

A target component is identified using the `tsx-view-target` attribute.

Valid input:

```tsx
<Button tsx-view-target />
```

Exactly one target component must exist.

The `tsx-view-target` attribute is used only during extraction and is not included in the resulting view model.

### Wrapper extraction

Any content surrounding the target component is also extracted as `wrapper` where the target component is replaced by a the `TSXViewTargetPlaceholder` component which will delegate dynamic props to the target component.

Input:

```tsx
<Flex>
  <Button target />
</Flex>
```

Wrapper:

```tsx
<Flex>
  <TSXViewTargetPlaceholder {...props} />
</Flex>
```

### Children handling

Children are extracted as a normal prop:

```ts
view.props.children;
```

Multiple children are normalized into a fragment:

```tsx
<>
  <Display />
  <Text />
</>
```

This keeps all editable values represented by a single `TSXNode` abstraction.

## API

### `extractTSXView(source: string)`

Extracts an editable TSX view model.

```ts
function extractTSXView(source: string): TSXView;
```

### `TSXView`

```ts
type TSXView = {
  source: string;
  wrapper: TSXElementNode;
  target: {
    component: {
      name: string;
    };
    raw: TSXElementNode;
  };
  props: Record<string, TSXNode>;
};
```

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

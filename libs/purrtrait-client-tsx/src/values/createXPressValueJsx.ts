import type ts from 'typescript';

import type { XPressValueJsx } from './types';

export function createXPressValueJsx(
	node: ts.JsxElement | ts.JsxSelfClosingElement | ts.JsxFragment,
	serialized: string,
): XPressValueJsx {
	return {
		type: 'jsx',
		ast: node,
		serialized,
	};
}

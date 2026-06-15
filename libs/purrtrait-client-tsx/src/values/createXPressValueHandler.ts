import type ts from 'typescript';

import type { XPressValueHandler } from './types';

export function createXPressValueHandler(
	node: ts.ArrowFunction | ts.FunctionExpression,
	serialized: string,
): XPressValueHandler {
	return {
		type: 'handler',
		ast: node,
		serialized,
	};
}

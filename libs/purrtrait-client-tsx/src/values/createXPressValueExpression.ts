import type ts from 'typescript';

import type { XPressValueExpression } from './types';

export function createXPressValueExpression(
	node: ts.Expression,
	serialized: string,
): XPressValueExpression {
	return {
		type: 'expression',
		ast: node,
		serialized,
	};
}

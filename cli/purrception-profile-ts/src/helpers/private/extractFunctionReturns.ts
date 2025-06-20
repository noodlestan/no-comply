import ts from 'typescript';

import type { FunctionJsDoc } from '../../jsdoc';
import type { FunctionReturnsData } from '../../types';

import { extractTypeExpression } from './extractTypeExpression';

export function extractFunctionReturns(
	node: ts.FunctionDeclaration | ts.ArrowFunction,
	jsDoc: FunctionJsDoc,
): FunctionReturnsData {
	if (!node.type) return 'void';

	const typeRef = extractTypeExpression(node.type);

	return {
		type: typeRef,
		description: jsDoc.returnsTag,
	};
}

import ts from 'typescript';

import type { FunctionJsDoc } from '../../jsdoc';
import type { FunctionReturnsData } from '../../types';

import { extractTypeRefOrExpression } from './extractTypeRefOrExpression';

export function extractFunctionReturns(
	node: ts.FunctionDeclaration | ts.ArrowFunction,
	jsDoc: FunctionJsDoc,
): FunctionReturnsData {
	if (!node.type) return 'void';

	const typeRef = extractTypeRefOrExpression(node.type);

	return {
		type: typeRef,
		description: jsDoc.returnsTag,
	};
}

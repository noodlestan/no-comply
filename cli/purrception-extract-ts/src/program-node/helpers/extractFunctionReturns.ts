import ts from 'typescript';

import type { FunctionJsDocData } from '../../jsdoc';
import type { FunctionReturnsData } from '../../types';

import { extractTypeExpression } from './extractTypeExpression';

export function extractFunctionReturns(
	returnType: ts.TypeNode | undefined,
	jsDoc: FunctionJsDocData,
): FunctionReturnsData {
	if (!returnType) {
		return 'void';
	}

	if (ts.isTypePredicateNode(returnType)) {
		const asserts = {
			parameter: returnType.parameterName.getText(),
			type: returnType.type ? extractTypeExpression(returnType.type) : 'unknown',
		};

		return {
			type: 'boolean',
			description: jsDoc.returnsTag,
			asserts,
		};
	}

	const type = extractTypeExpression(returnType);

	return {
		type,
		description: jsDoc.returnsTag,
	};
}

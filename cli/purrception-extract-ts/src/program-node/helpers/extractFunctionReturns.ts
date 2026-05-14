import type { FunctionJsDocData, FunctionTypeReturns } from '@purrception/types-ts';
import ts from 'typescript';

import { extractTypeExpression } from './extractTypeExpression';

export function extractFunctionReturns(
	returnType: ts.TypeNode | undefined,
	jsDoc: FunctionJsDocData,
): FunctionTypeReturns {
	if (!returnType) {
		return { type: 'void' };
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

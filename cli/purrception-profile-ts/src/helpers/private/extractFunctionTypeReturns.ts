import type ts from 'typescript';

import type { FunctionReturnsData } from '../../types';

import { extractTypeRefOrExpression } from './extractTypeRefOrExpression';

export function extractFunctionTypeReturns(
	returnType: ts.TypeNode | undefined,
): FunctionReturnsData {
	if (!returnType) return 'void';

	return {
		type: extractTypeRefOrExpression(returnType),
	};
}

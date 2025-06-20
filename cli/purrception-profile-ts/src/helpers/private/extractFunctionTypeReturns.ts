import type ts from 'typescript';

import type { FunctionReturnsData } from '../../types';

import { extractTypeExpression } from './extractTypeExpression';

export function extractFunctionTypeReturns(
	returnType: ts.TypeNode | undefined,
): FunctionReturnsData {
	if (!returnType) return 'void';

	return {
		type: extractTypeExpression(returnType),
	};
}

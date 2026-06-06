import type { TypeRefNode } from '@purrception/lang-ts';
import ts from 'typescript';

import { extractTypeRef } from './extractTypeRef';

export function extractArrowFunctionType(
	node: ts.FunctionDeclaration | ts.ArrowFunction,
): TypeRefNode | undefined {
	if (ts.isArrowFunction(node) && ts.isVariableDeclaration(node.parent) && node.parent.type) {
		return extractTypeRef(node.parent.type);
	}
	return undefined;
}

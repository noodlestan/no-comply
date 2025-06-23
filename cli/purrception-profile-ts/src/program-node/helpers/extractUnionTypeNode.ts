import ts from 'typescript';

import type { TypeExpressionData, TypeRef, UnionTypeNode } from '../../types';

import { extractTypeExpression } from './extractTypeExpression';

export function extractUnionTypeNode(node: ts.UnionTypeNode): UnionTypeNode {
	const entries: (TypeExpressionData | TypeRef)[] = node.types.map(typeNode =>
		extractTypeExpression(typeNode),
	);

	return {
		kind: 'union',
		entries,
	};
}

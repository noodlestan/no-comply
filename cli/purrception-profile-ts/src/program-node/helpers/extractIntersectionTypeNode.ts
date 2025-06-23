import ts from 'typescript';

import type { IntersectionTypeNode, TypeExpressionData, TypeRef } from '../../types';

import { extractTypeExpression } from './extractTypeExpression';

export function extractIntersectionTypeNode(node: ts.IntersectionTypeNode): IntersectionTypeNode {
	const entries: (TypeExpressionData | TypeRef)[] = node.types.map(typeNode =>
		extractTypeExpression(typeNode),
	);

	return {
		kind: 'intersection',
		entries,
	};
}

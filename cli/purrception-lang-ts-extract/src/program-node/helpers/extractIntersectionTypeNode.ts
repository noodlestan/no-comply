import type { IntersectionTypeNode, TypeExpressionNode, TypeRef } from '@purrception/lang-ts';
import ts from 'typescript';

import { extractTypeExpression } from './extractTypeExpression';

export function extractIntersectionTypeNode(node: ts.IntersectionTypeNode): IntersectionTypeNode {
	const entries: (TypeExpressionNode | TypeRef)[] = node.types.map(typeNode =>
		extractTypeExpression(typeNode),
	);

	return {
		kind: 'intersection',
		entries,
	};
}

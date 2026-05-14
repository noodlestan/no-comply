import type { TypeExpressionNode, TypeRef, UnionTypeNode } from '@purrception/types-ts';
import ts from 'typescript';

import { extractTypeExpression } from './extractTypeExpression';

export function extractUnionTypeNode(node: ts.UnionTypeNode): UnionTypeNode {
	const entries: (TypeExpressionNode | TypeRef)[] = node.types.map(typeNode =>
		extractTypeExpression(typeNode),
	);

	return {
		kind: 'union',
		entries,
	};
}

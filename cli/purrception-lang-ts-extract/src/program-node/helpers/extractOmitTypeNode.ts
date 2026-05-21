import type { OmitTypeNode, TypeRef, UnionTypeNode } from '@purrception/lang-ts';
import type ts from 'typescript';

import { extractTypeExpression } from './extractTypeExpression';

export function extractOmitTypeNode(
	node: ts.TypeReferenceNode | ts.ExpressionWithTypeArguments,
): OmitTypeNode {
	const [sourceNode, membersNode] = node.typeArguments ?? [];

	const source = extractTypeExpression(sourceNode);
	const members = extractTypeExpression(membersNode) as TypeRef | UnionTypeNode;

	return {
		kind: 'omit',
		source,
		members,
	};
}

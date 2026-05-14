import type { PickTypeNode } from '@purrception/types-ts';
import type ts from 'typescript';

import { extractTypeExpression } from './extractTypeExpression';

export function extractPickTypeNode(
	node: ts.TypeReferenceNode | ts.ExpressionWithTypeArguments,
): PickTypeNode {
	const [sourceNode, membersNode] = node.typeArguments ?? [];

	const source = extractTypeExpression(sourceNode);
	const members = extractTypeExpression(membersNode);

	return {
		kind: 'pick',
		source,
		members,
	};
}

import type { OmitTypeNode } from '@purrception/types-ts';
import type ts from 'typescript';

import { extractTypeExpression } from './extractTypeExpression';

export function extractOmitTypeNode(
	node: ts.TypeReferenceNode | ts.ExpressionWithTypeArguments,
): OmitTypeNode {
	const [sourceNode, membersNode] = node.typeArguments ?? [];

	const source = extractTypeExpression(sourceNode);
	const members = extractTypeExpression(membersNode);

	return {
		kind: 'omit',
		source,
		members,
	};
}

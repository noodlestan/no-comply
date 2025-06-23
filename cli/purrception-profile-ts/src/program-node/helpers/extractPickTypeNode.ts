import type ts from 'typescript';

import type { PickTypeNode } from '../../types';

import { extractTypeExpression } from './extractTypeExpression';

export function extractPickTypeNode(node: ts.TypeReferenceNode): PickTypeNode {
	const [sourceNode, membersNode] = node.typeArguments ?? [];

	const source = extractTypeExpression(sourceNode);
	const members = extractTypeExpression(membersNode);

	return {
		kind: 'pick',
		source,
		members,
	};
}

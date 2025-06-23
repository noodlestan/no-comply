import type ts from 'typescript';

import type { OmitTypeNode } from '../../types';

import { extractTypeExpression } from './extractTypeExpression';

export function extractOmitTypeNode(node: ts.TypeReferenceNode): OmitTypeNode {
	const [sourceNode, membersNode] = node.typeArguments ?? [];

	const source = extractTypeExpression(sourceNode);
	const members = extractTypeExpression(membersNode);

	return {
		kind: 'omit',
		source,
		members,
	};
}

import ts from 'typescript';

import type { IntersectionTypeNode, ObjectLiteralTypeNode } from '../../types';

import { extractNodeGenerics } from './extractNodeGenerics';
import { extractObjectLiteralTypeNode } from './extractObjectLiteralTypeNode';
import { extractTypeRef } from './extractTypeRef';

export function extractInterfaceNode(
	node: ts.InterfaceDeclaration,
): ObjectLiteralTypeNode | IntersectionTypeNode {
	const generic = extractNodeGenerics(node);
	const object = extractObjectLiteralTypeNode(node);

	if (!node.heritageClauses || node.heritageClauses.length === 0) {
		return object;
	}

	const extended = node.heritageClauses
		.flatMap(clause => clause.types)
		.map(type => extractTypeRef(type));

	return {
		kind: 'intersection',
		generic,
		entries: [...extended, object],
	};
}

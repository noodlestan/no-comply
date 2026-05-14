import type { InterfaceTypeNode } from '@purrception/types-ts';
import ts from 'typescript';

import { extractNodeGenerics } from './extractNodeGenerics';
import { extractObjectLiteralTypeNode } from './extractObjectLiteralTypeNode';
import { extractTypeExpression } from './extractTypeExpression';

export function extractInterfaceNode(node: ts.InterfaceDeclaration): InterfaceTypeNode {
	const generic = extractNodeGenerics(node);
	const object = extractObjectLiteralTypeNode(node);

	const extended = (node.heritageClauses || [])
		.flatMap(clause => clause.types)
		.map(type => extractTypeExpression(type));

	return {
		kind: 'interface',
		generic,
		heritage: extended,
		members: object.members,
	};
}

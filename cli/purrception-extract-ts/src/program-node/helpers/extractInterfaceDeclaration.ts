import type { InterfaceDeclaration } from '@purrception/types-ts';
import ts from 'typescript';

import { extractNodeGenerics } from './extractNodeGenerics';
import { extractObjectLiteralTypeNode } from './extractObjectLiteralTypeNode';
import { extractTypeExpression } from './extractTypeExpression';

export function extractInterfaceDeclaration(
	at: string,
	name: string,
	node: ts.InterfaceDeclaration,
): InterfaceDeclaration {
	const generic = extractNodeGenerics(node);
	const object = extractObjectLiteralTypeNode(node);

	const extended = (node.heritageClauses || [])
		.flatMap(clause => clause.types)
		.map(type => extractTypeExpression(type));

	return {
		at,
		name,
		kind: 'interface',
		generic,
		heritage: extended,
		members: object.members,
	};
}

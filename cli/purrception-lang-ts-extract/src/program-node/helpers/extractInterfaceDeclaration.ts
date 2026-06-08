import { type InterfaceDeclaration, PurrceptionLanguageId } from '@purrception/lang-ts';
import ts from 'typescript';

import { extractNodeGenerics } from './extractNodeGenerics';
import { extractObjectLiteralTypeNode } from './extractObjectLiteralTypeNode';
import { extractTypeExpression } from './extractTypeExpression';
import { isExportedDeclaration } from './isExportedDeclaration';

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

		lang: PurrceptionLanguageId,
		kind: 'interface',
		private: !isExportedDeclaration(node),
		generic,
		heritage: extended,
		members: object.members,
	};
}

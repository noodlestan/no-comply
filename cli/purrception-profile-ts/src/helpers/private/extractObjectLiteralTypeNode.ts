import ts from 'typescript';

import type { ObjectLiteralTypeMember, ObjectLiteralTypeNode } from '../../types';

import { extractNodeGenerics } from './extractNodeGenerics';
import { extractObjectLiteralTypeMember } from './extractObjectLiteralTypeMember';

export function extractObjectLiteralTypeNode(
	node: ts.InterfaceDeclaration | ts.TypeLiteralNode,
): ObjectLiteralTypeNode {
	const members: Record<string, ObjectLiteralTypeMember> = {};

	const generic = extractNodeGenerics(node);

	for (const member of node.members) {
		const extracted = extractObjectLiteralTypeMember(member);
		if (extracted) {
			const name = ts.getNameOfDeclaration(member)?.getText();
			if (name) {
				members[name] = extracted;
			}
		}
	}

	return {
		kind: 'object',
		generic,
		members,
	};
}

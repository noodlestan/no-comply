import {
	type AliasDeclaration,
	type InterfaceDeclaration,
	type TypeDeclaration,
	type TypeExpressionDeclaration,
} from '../declaration';
import { type TypeExpressionNode } from '../node';

import {
	resolveAliasDeclaration,
	resolveInterfaceDeclaration,
	resolveTypeExpressionDeclaration,
} from './declarations';
import type { ResolveTypeContext } from './types';

export function resolveTypeDeclaration(
	context: ResolveTypeContext,
	node: TypeDeclaration,
): TypeExpressionDeclaration<TypeExpressionNode> {
	switch (node.kind) {
		case 'type':
			return resolveTypeExpressionDeclaration(context, node as TypeExpressionDeclaration);
		case 'alias':
			return resolveAliasDeclaration(context, node as AliasDeclaration);
		case 'interface':
			return resolveInterfaceDeclaration(context, node as InterfaceDeclaration);
	}
}

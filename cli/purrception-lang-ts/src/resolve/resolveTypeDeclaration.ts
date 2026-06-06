import {
	type InterfaceDeclaration,
	type TypeDeclaration,
	type TypeExpressionDeclaration,
} from '../declaration';
import { type TypeExpressionNode, type TypeResolutionMeta } from '../node';

import { resolveInterfaceDeclaration, resolveTypeExpressionDeclaration } from './declarations';
import type { ResolveTypeContext } from './types';

export function resolveTypeDeclaration(
	context: ResolveTypeContext,
	node: TypeDeclaration,
): TypeExpressionDeclaration<TypeExpressionNode> {
	const resolution: TypeResolutionMeta = {
		entity: context.entity,
	};
	let declaration = node;
	switch (node.kind) {
		case 'type':
			declaration = resolveTypeExpressionDeclaration(context, node as TypeExpressionDeclaration);
			break;
		case 'interface':
			declaration = resolveInterfaceDeclaration(context, node as InterfaceDeclaration);
			break;
	}

	return { ...declaration, node: { ...declaration.node, resolved: resolution } };
}

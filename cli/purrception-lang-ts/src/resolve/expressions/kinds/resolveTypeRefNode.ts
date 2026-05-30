import type { TypeDeclaration } from '../../../declaration';
import { type TypeExpressionNode, type TypeRef, isBuiltInToken } from '../../../node';
import { resolveTypeDeclaration } from '../../resolveTypeDeclaration';
import type { ResolveTypeContext } from '../../types';

import { resolveNodeMember } from './resolveNodeMember';

export function resolveTypeRefNode(
	context: ResolveTypeContext,
	node: TypeRef,
): TypeExpressionNode | TypeRef {
	const typeAlias = typeof node === 'string' ? node : node.type;
	const targetParams = typeof node === 'string' ? [] : node.params || [];

	if (isBuiltInToken(typeAlias)) {
		return node;
	}

	const targetEntity = context.resolveEntity(context.entity, typeAlias);
	if (!targetEntity) {
		return node;
	}
	if (!('types' in targetEntity)) {
		return node;
	}

	const targetType = context.resolveImportName(typeAlias);
	if (context.stackHasEntry(targetEntity, targetType)) {
		console.warn(`Circular reference: ${targetType}.`, context.stack);
		return node;
	}

	const type = (targetEntity as unknown as { types: Record<string, TypeDeclaration> }).types[
		targetType
	];
	if (!type) {
		return node;
	}

	console.info('>>', node, type);
	const nestedContext = context.createChildContext(targetEntity, targetType, targetParams);
	const declaration = resolveTypeDeclaration(nestedContext, type);

	const targetMember = typeof node !== 'string' && node.member;
	if (targetMember) {
		const resolvedMember = resolveNodeMember(declaration.node, targetMember);
		if (!resolvedMember) {
			return node;
		}
		return resolvedMember;
	}

	return declaration.node;
}

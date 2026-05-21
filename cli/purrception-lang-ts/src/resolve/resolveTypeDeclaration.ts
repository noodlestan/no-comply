/* eslint-disable @typescript-eslint/no-use-before-define */
import {
	type AliasDeclaration,
	type InterfaceDeclaration,
	type TypeDeclaration,
	type TypeExpressionDeclaration,
} from '../declaration';
import {
	type ObjectLiteralTypeMember,
	type ObjectLiteralTypeNode,
	type OmitTypeNode,
	type PickTypeNode,
	type TypeExpressionNode,
	type TypeRef,
	type UnionTypeNode,
	isLiteralTypeNode,
	isObjectLiteralTypeNode,
	isTypeRef,
	isUnionTypeNode,
} from '../node';

import { createResolveTypeContext } from './createResolveTypeContext';
import {
	resolveAliasDeclaration,
	resolveInterfaceDeclaration,
	resolveTypeExpressionDeclaration,
} from './declarations';
import type { ResolveTypeContext } from './types';

function resolveNodeMember(
	node: TypeExpressionNode,
	member: string,
): TypeExpressionNode | TypeRef | undefined {
	if (!isObjectLiteralTypeNode(node)) {
		return undefined;
	}

	const targetMember = node.members[member];

	if (!targetMember) {
		return undefined;
	}

	return targetMember.type;
}

function resolveTypeRefNode(
	context: ResolveTypeContext,
	node: TypeRef,
): TypeExpressionNode | TypeRef {
	const targetType = typeof node === 'string' ? node : node.type;
	const targetMember = typeof node === 'string' ? node : node.member;

	const targetEntity = context.resolveEntity(context.entity, targetType);

	if (!targetEntity) {
		return node;
	}

	if (!('types' in targetEntity)) {
		return node;
	}

	const type = (targetEntity as unknown as { types: Record<string, TypeDeclaration> }).types[
		targetType
	];

	if (!type) {
		return node;
	}

	const key = [targetEntity.package, targetEntity.name].filter(Boolean).join(':');

	if (context.stack.has(key)) {
		return node;
	}

	context.stack.add(key);
	const declaration = resolveTypeDeclaration(
		createResolveTypeContext(context.resolveEntity, targetEntity, context.stack),
		type,
	);
	context.stack.delete(key);

	if (targetMember) {
		const resolvedMember = resolveNodeMember(declaration.node, targetMember);
		if (!resolvedMember) {
			return node;
		}
		return resolvedMember;
	}

	return declaration.node;
}

function resolveObject(
	context: ResolveTypeContext,
	exp: ObjectLiteralTypeNode,
): ObjectLiteralTypeNode {
	const resolvedMembers: Record<string, ObjectLiteralTypeMember> = {};

	for (const key in exp.members) {
		const member = exp.members[key];

		if (!member) continue;

		resolvedMembers[key] = {
			...member,
			type: resolveExpression(context, member.type),
		};
	}

	return {
		...exp,
		members: resolvedMembers,
	};
}

export function resolveUnion(context: ResolveTypeContext, exp: UnionTypeNode): UnionTypeNode {
	const resolvedEntries: (TypeExpressionNode | TypeRef)[] = [];

	for (const entry of exp.entries) {
		const resolved = resolveExpression(context, entry);

		if (isUnionTypeNode(resolved)) {
			resolvedEntries.push(...resolved.entries);
			continue;
		}

		resolvedEntries.push(resolved);
	}

	return {
		...exp,
		entries: resolvedEntries,
	};
}

function resolvePick(context: ResolveTypeContext, exp: PickTypeNode): TypeExpressionNode | TypeRef {
	const resolvedSource = resolveExpression(context, exp.source);

	if (isObjectLiteralTypeNode(resolvedSource)) {
		const expMembers = resolveExpression(context, exp.members) as UnionTypeNode;
		const baseMembers = resolvedSource.members;
		const members: typeof baseMembers = {};

		for (const entry of expMembers.entries) {
			if (isLiteralTypeNode(entry) && typeof entry.value === 'string') {
				const member = baseMembers[entry.value];

				if (!member) continue;

				members[entry.value] = {
					...member,
					type: resolveExpression(context, member.type),
				};
			}
		}

		return {
			kind: 'object',
			members,
		};
	}

	return resolvedSource;
}

function resolveOmit(context: ResolveTypeContext, exp: OmitTypeNode): TypeExpressionNode | TypeRef {
	const resolvedSource = resolveExpression(context, exp.source);

	if (isObjectLiteralTypeNode(resolvedSource)) {
		const expMembers = resolveExpression(context, exp.members) as UnionTypeNode;
		const baseMembers = resolvedSource.members;
		const omitted = new Set<string>();

		for (const entry of expMembers.entries) {
			if (isLiteralTypeNode(entry) && typeof entry.value === 'string') {
				omitted.add(entry.value);
			}
		}

		const members: typeof baseMembers = {};

		for (const key in baseMembers) {
			if (omitted.has(key)) continue;

			const member = baseMembers[key];

			if (!member) continue;

			members[key] = {
				...member,
				type: resolveExpression(context, member.type),
			};
		}

		return {
			kind: 'object',
			members,
		};
	}

	return resolvedSource;
}

export function resolveExpression(
	context: ResolveTypeContext,
	exp: TypeRef | TypeExpressionNode,
): TypeExpressionNode | TypeRef {
	if (isTypeRef(exp)) {
		return resolveTypeRefNode(context, exp);
	}

	switch (exp.kind) {
		case 'object':
			return resolveObject(context, exp);
		case 'intersection':
			return exp;
		case 'union':
			return resolveUnion(context, exp);
		case 'pick':
			return resolvePick(context, exp);
		case 'omit':
			return resolveOmit(context, exp);
		case 'literal':
			return exp;
		case 'array':
			return exp;
		case 'tuple':
			return exp;
		case 'template-literal':
			return exp;
		case 'operator':
			return exp;
		case 'mapped':
			return exp;
		case 'conditional':
			return exp;
		case 'infer':
			return exp;
		case 'function':
			return exp;
		default:
			throw new Error(`Unknown kind ${(exp as TypeExpressionNode).kind} in expression`);
	}
}

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
